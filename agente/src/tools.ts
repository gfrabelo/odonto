import type { FunctionDeclaration } from "@google/genai";
import { config } from "./config";
import { notificarLead } from "./notificar";
import { pausar } from "./pausa";
import {
  booleano,
  duracao,
  guardarLead,
  leadAnterior,
  moeda,
  preferir,
  ranquear,
  type Campo,
} from "./catalogo";
import type { Handler } from "./tool-runner";
import catalogoRaw from "./data/catalogo.json";

/**
 * A CAMADA DO NEGOCIO.
 *
 * Este arquivo, o prompt.ts e o data/catalogo.json sao os unicos tres que mudam
 * de um nicho para outro. Todo o resto do src/ atravessa sem tocar.
 *
 * Clinica odontologica: o agente conhece os tratamentos, mas NUNCA fala valor de
 * tratamento -- o valor sai no plano, depois da avaliacao. O unico preco que ele
 * informa e o da propria avaliacao, e esse so chega pelo retorno das tools.
 */

export interface Tratamento {
  tratamento: string;
  categoria: string;
  /** Como o paciente fala: "dentadura", "dente amarelo", "invisalign"... */
  termos: string;
  descricao: string;
  especialista: string;
  duracaoMin?: number;
  /** So a avaliacao tem preco. 0 = gratuita. */
  preco?: number;
  disponivel: boolean;
  destaque: boolean;
}

const TODOS = catalogoRaw as Tratamento[];

/** So o que esta ativo chega ao modelo. */
const TRATAMENTOS = TODOS.filter((t) => t.disponivel);

const AVALIACAO = TRATAMENTOS.find((t) => t.categoria === "avaliacao");

/** Que categorias existem no catalogo agora (estetica, reabilitacao, urgencia...). */
export function categoriasDisponiveis(): string[] {
  return [...new Set(TRATAMENTOS.map((t) => t.categoria))];
}

/** Os dentistas que aparecem em algum tratamento ativo. */
export function especialistasDisponiveis(): string[] {
  return [
    ...new Set(TRATAMENTOS.map((t) => t.especialista).filter((e) => e !== "toda a equipe")),
  ];
}

/**
 * O valor da avaliacao, ja escrito. 0 vira "gratuita".
 * Formatado no codigo, nunca no modelo.
 */
function valorAvaliacao(): string | null {
  if (!AVALIACAO || AVALIACAO.preco === undefined) return null;
  return AVALIACAO.preco === 0 ? "gratuita" : moeda(AVALIACAO.preco);
}

/** A frase que acompanha toda resposta de tratamento: como falar do valor. */
function regraDeValor(): string {
  const v = valorAvaliacao();
  // So puxa o assunto valor se o paciente perguntou: falar de preco sem ninguem
  // pedir soa como vendedor e atropela a pergunta que ele fez de verdade.
  return v
    ? `NUNCA fale valor de tratamento. So se o paciente PERGUNTAR valor: diga que o dentista passa o plano com os valores depois da avaliacao, e que a avaliacao e ${v}.`
    : "NUNCA fale valor nenhum. So se o paciente PERGUNTAR valor: diga que o dentista passa o plano com os valores depois da avaliacao.";
}

/**
 * A pergunta que o `npm run check` usa para testar function calling.
 *
 * Sai do proprio catalogo: pergunta fixa vira mentira assim que o catalogo muda.
 */
export function exemploDeBusca(): string {
  const t = TRATAMENTOS.find((x) => x.categoria !== "avaliacao") ?? TRATAMENTOS[0];
  return t ? `Quanto custa ${t.tratamento.toLowerCase()}?` : "Quanto custa?";
}

// ---------------------------------------------------------------------------
// Busca
// ---------------------------------------------------------------------------

/**
 * Os campos que participam da busca, em ordem de especificidade.
 *
 * O nome oficial pesa mais; os termos que o paciente usa ("dentadura", "dente
 * amarelo") passam sozinhos; a categoria sozinha tambem passa ("estetica") e,
 * com dois tratamentos na mesma categoria, o empate vira pergunta.
 */
function camposDe(t: Tratamento): Campo[] {
  return [
    { valor: t.tratamento, peso: 6, pesoExato: 10, colado: true },
    // Um campo por termo, com exato acima do "nome contem" (6): "dor" tem que
    // achar a urgencia, e nao a ortodontia so porque "alinhaDORes" contem "dor".
    ...t.termos.split(/\s+/).map((valor) => ({ valor, peso: 5, pesoExato: 8 })),
    { valor: t.categoria, peso: 5 },
    // pesoExato travado em 3: dentista sozinho nao pode passar do limiar e
    // devolver um tratamento que ninguem pediu.
    { valor: t.especialista, peso: 3, pesoExato: 3 },
  ];
}

// Igual ao peso de "termo contem" e "categoria contem": passam sozinhos, de
// proposito. Dentista sozinho (peso 3) nao passa. Mexeu nos pesos, confira aqui.
const LIMIAR = 5;

/** Ficha completa -- so depois que o paciente escolheu um. Sem valor de tratamento. */
function ficha(t: Tratamento) {
  return {
    tratamento: t.tratamento,
    descricao: t.descricao,
    especialista: t.especialista,
    ...(t.duracaoMin ? { duracao: duracao(t.duracaoMin) } : {}),
  };
}

/** So o nome. Detalhe fica para quando o paciente escolher um. */
function resumo(t: Tratamento) {
  return { tratamento: t.tratamento };
}

function porDestaque(a: Tratamento, b: Tratamento): number {
  return Number(b.destaque) - Number(a.destaque);
}

function sugestoes(): string[] {
  return TRATAMENTOS.filter((t) => t.categoria !== "avaliacao")
    .sort(porDestaque)
    .slice(0, 3)
    .map((t) => t.tratamento);
}

function buscarTratamento(args: Record<string, unknown>) {
  const termo = typeof args.termo === "string" ? args.termo : "";
  if (!termo.trim()) {
    return {
      encontrado: false,
      instrucao: "Termo vazio. Pergunte o que o paciente gostaria de cuidar no sorriso.",
      sugestoes: sugestoes(),
      valorAvaliacao: valorAvaliacao(),
    };
  }

  const { melhor, empatados } = ranquear(TRATAMENTOS, termo, camposDe, LIMIAR);

  if (!melhor) {
    return {
      encontrado: false,
      instrucao:
        "Nao achei esse nome no catalogo. Se for so outro nome para um tratamento que existe " +
        "(ex: branqueamento = clareamento, obturacao = restauracao), trate como o mesmo e busque de novo pelo nome certo, " +
        "SEM dizer que a clinica nao faz. Se for outra coisa, diga com gentileza que nao faz e ofereca no maximo 2 sugestoes. " +
        "Nao invente tratamento nem valor.",
      sugestoes: sugestoes(),
      valorAvaliacao: valorAvaliacao(),
    };
  }

  // Empate tecnico ("estetica" casa com clareamento e lentes) -> pergunta qual.
  if (empatados.length > 1) {
    return {
      encontrado: true,
      ambiguo: true,
      instrucao: `Mais de um tratamento bate. Cite no maximo 2 e pergunte qual interessa. ${regraDeValor()}`,
      opcoes: empatados.slice(0, 3).map(resumo),
      total: empatados.length,
      valorAvaliacao: valorAvaliacao(),
    };
  }

  if (melhor.categoria === "avaliacao") {
    return {
      encontrado: true,
      ...ficha(melhor),
      valorAvaliacao: valorAvaliacao(),
      instrucao:
        "Explique a avaliacao em uma frase, informe o valor dela exatamente como veio e pergunte que dia fica bom.",
    };
  }

  if (melhor.categoria === "urgencia") {
    return {
      encontrado: true,
      ...ficha(melhor),
      urgente: true,
      valorAvaliacao: valorAvaliacao(),
      instrucao:
        "Paciente com sinal de urgencia. Acolha em uma frase, NAO diagnostique e NAO indique remedio. " +
        "Proponha o horario mais proximo possivel (hoje se ainda der, senao amanha cedo) e registre com urgente=true. " +
        "Se houver inchaco no rosto, febre, dificuldade para engolir ou respirar, ou sangramento que nao para, " +
        "oriente procurar um pronto-socorro agora. " +
        regraDeValor(),
    };
  }

  return {
    encontrado: true,
    ...ficha(melhor),
    valorAvaliacao: valorAvaliacao(),
    instrucao:
      "Responda o que o paciente perguntou. Se ele quer saber como funciona, explique em uma frase usando a descricao " +
      `e cite o especialista. ${regraDeValor()} ` +
      "Se o paciente ainda nao disse o dia, pergunte que dia fica bom para a avaliacao.",
  };
}

function listarTratamentos(args: Record<string, unknown>) {
  const categoria =
    typeof args.categoria === "string" && args.categoria.trim()
      ? args.categoria.trim().toLowerCase()
      : undefined;

  const filtrados = TRATAMENTOS.filter(
    (t) => t.categoria !== "avaliacao" && (!categoria || t.categoria === categoria)
  ).sort(porDestaque);

  if (filtrados.length === 0) {
    return {
      total: 0,
      tratamentos: [],
      instrucao: "Nada nessa categoria. Diga isso e pergunte o que o paciente gostaria de cuidar.",
      categorias: categoriasDisponiveis(),
      valorAvaliacao: valorAvaliacao(),
    };
  }

  // Devolve poucos de proposito: o agente cita no maximo 2, e `total` deixa ele
  // dizer "fazemos 11 tratamentos" sem recitar os 11.
  const amostra = filtrados.slice(0, 3);

  return {
    total: filtrados.length,
    mostrando: amostra.length,
    tratamentos: amostra.map(resumo),
    valorAvaliacao: valorAvaliacao(),
    instrucao:
      filtrados.length > 2
        ? `Ha ${filtrados.length} tratamentos. Cite no maximo 2 e faca UMA pergunta que estreite: ` +
          `estetica do sorriso, dente faltando, alinhamento ou algum incomodo. Nao liste todos. ${regraDeValor()}`
        : `Pode citar os dois. ${regraDeValor()}`,
  };
}

// ---------------------------------------------------------------------------
// Lead
// ---------------------------------------------------------------------------

/**
 * `type` e nao `interface` de proposito: um type alias de objeto e atribuivel a
 * Record<string, unknown>, o que deixa este Lead entrar direto no store generico
 * e no webhook, sem cast nenhum. Interface nao e.
 */
export type Lead = {
  nome: string;
  tratamento: string;
  /** Dia + data + periodo que o paciente aceitou. */
  diaPeriodo: string;
  /** Dor, inchaco, dente quebrado: a recepcao prioriza. */
  urgente: boolean;
  /** O que o paciente contou, nas palavras dele. */
  queixa: string;
};

/** O texto que chega no WhatsApp da recepcao. */
function formatarParaHumano(lead: Lead, telefonePaciente: string): string {
  const linhas = [
    ...(lead.urgente ? ["🚨 *URGENTE -- paciente com dor ou incomodo*", ""] : []),
    "*Novo paciente para avaliação*",
    "",
    `Paciente: ${lead.nome}`,
    `WhatsApp: ${telefonePaciente}`,
    `Interesse: ${lead.tratamento}`,
    `O que contou: ${lead.queixa}`,
    `Prefere: ${lead.diaPeriodo}`,
    `Urgência: ${lead.urgente ? "sim" : "não"}`,
    "",
    lead.urgente
      ? "Encaixe o quanto antes e assuma a conversa."
      : "Confirme o horário na agenda e assuma a conversa.",
  ];
  return linhas.join("\n");
}

/** O nome oficial do catalogo: "aparelho invisivel" vira "Ortodontia (aparelho e alinhadores)". */
function nomeOficial(falado: string): string {
  const { melhor, empatados } = ranquear(TRATAMENTOS, falado, camposDe, LIMIAR);
  return melhor && empatados.length === 1 ? melhor.tratamento : falado;
}

/**
 * Conversas em que o registro ja foi barrado uma vez por falta de dado.
 *
 * O modelo tende a registrar assim que ouve o tratamento -- e as respostas que
 * vem depois caem no vazio (o agente ja esta pausado). A primeira tentativa
 * incompleta volta com o que falta; a segunda passa de qualquer jeito, para nao
 * prender o paciente que nao quer responder.
 */
const jaCobrado = new Set<string>();

function faltando(args: Record<string, unknown>): string[] {
  const vazio = (v: unknown) => !String(v ?? "").trim();
  const falta: string[] = [];
  if (vazio(args.diaPeriodo)) falta.push("dia e periodo de preferencia para a avaliacao");
  if (vazio(args.nome)) falta.push("nome do paciente");
  return falta;
}

function registrarLead(args: Record<string, unknown>, chatid: string) {
  const anterior = leadAnterior<Lead>(chatid);

  if (!anterior && !jaCobrado.has(chatid)) {
    const falta = faltando(args);
    if (falta.length > 0) {
      jaCobrado.add(chatid);
      return {
        ok: false,
        instrucao:
          `NAO registrado ainda. Falta: ${falta.join(", ")}. Pergunte o primeiro que falta ` +
          "(uma pergunta so) e chame registrarLead de novo depois que ele responder. " +
          "Se o paciente ja respondeu isso nesta conversa, chame de novo agora passando o que ele disse.",
      };
    }
  }

  const lead: Lead = {
    nome: preferir(String(args.nome ?? ""), anterior?.nome, "nao informado"),
    tratamento: preferir(
      nomeOficial(String(args.tratamento ?? "")),
      anterior?.tratamento,
      "nao informado"
    ),
    diaPeriodo: preferir(String(args.diaPeriodo ?? ""), anterior?.diaPeriodo, "nao agendado"),
    urgente: booleano(args.urgente, anterior?.urgente),
    queixa: preferir(String(args.queixa ?? ""), anterior?.queixa, "-"),
  };

  guardarLead(chatid, lead);

  // Este console.log e o "CRM" da demo -- aparece nos logs do servidor.
  const titulo = anterior ? "LEAD ATUALIZADO" : lead.urgente ? "LEAD URGENTE" : "LEAD QUALIFICADO";
  console.log(
    `\n===== ${titulo} =====\n` +
      JSON.stringify({ ...lead, registradoEm: new Date().toISOString() }, null, 2) +
      "\n============================\n"
  );

  const telefone = chatid.split("@")[0] ?? chatid;
  notificarLead(lead, formatarParaHumano(lead, telefone), chatid);

  // Recepcao assumiu -- o agente sai da frente.
  if (config.pausarAposLead) {
    pausar(chatid, config.pausaAposLeadMin * 60_000, "lead registrado, recepcao assumiu");
  }

  if (anterior) {
    return {
      ok: true,
      jaRegistrado: true,
      instrucao:
        "Esse lead JA estava registrado e foi atualizado. NAO registre de novo. " +
        "So responda o paciente normalmente.",
    };
  }

  return {
    ok: true,
    instrucao: lead.urgente
      ? "Registrado como URGENTE. Avise que ja passou para a recepcao como prioridade e que eles chamam em instantes. Nao pergunte mais nada."
      : "Registrado. Avise que a recepcao confirma o horario da avaliacao com ele em instantes. Nao pergunte mais nada.",
  };
}

// ---------------------------------------------------------------------------
// Declaracoes para o Gemini
// ---------------------------------------------------------------------------

export const declaracoes: FunctionDeclaration[] = [
  {
    name: "buscarTratamento",
    description:
      "Busca um tratamento da clinica pelo nome ou pelo jeito que o paciente fala (implante, dentadura, aparelho, " +
      "dente amarelo, siso, dor de dente, avaliacao...). Use sempre que o paciente citar um tratamento, um problema " +
      "no dente ou perguntar preco. Unica fonte valida sobre tratamentos e sobre o valor da avaliacao.",
    parametersJsonSchema: {
      type: "object",
      properties: {
        termo: {
          type: "string",
          description:
            "So o essencial do que o paciente falou, em 1 a 3 palavras. Ex: 'implante', 'dentadura', 'aparelho invisivel', 'dente amarelo', 'dor', 'avaliacao'.",
        },
      },
      required: ["termo"],
    },
  },
  {
    name: "listarTratamentos",
    description:
      "Mostra tratamentos com o total disponivel. Use quando o paciente nao souber o que quer ou perguntar o que a clinica faz. Retorna poucos itens de proposito: cite no maximo 2 na sua mensagem.",
    parametersJsonSchema: {
      type: "object",
      properties: {
        categoria: {
          type: "string",
          enum: categoriasDisponiveis().filter((c) => c !== "avaliacao"),
          description: "Filtro opcional. Omita para trazer todos.",
        },
      },
    },
  },
  {
    name: "registrarLead",
    description:
      "Registra o pedido de avaliacao e passa para a recepcao confirmar na agenda. Chame quando ja souber o tratamento de interesse e ja tiver perguntado dia/periodo e o nome e ouvido as respostas.",
    parametersJsonSchema: {
      type: "object",
      properties: {
        nome: { type: "string", description: "Nome do paciente." },
        tratamento: {
          type: "string",
          description: "Tratamento de interesse. Se ele so quer uma avaliacao geral, passe 'avaliacao'.",
        },
        diaPeriodo: {
          type: "string",
          description:
            "Dia da semana + DATA + periodo ou horario que o PACIENTE aceitou. " +
            "SEMPRE com a data concreta, no formato 'quinta-feira DD/MM, tarde' ou 'sabado DD/MM, 9h', com a data real. " +
            "Converta 'amanha'/'quinta' usando a lista de proximos dias do seu contexto. " +
            "Omita se ele nao quis marcar ou nao respondeu. NUNCA preencha com o horario que voce " +
            "sugeriu sem ele ter aceitado.",
        },
        urgente: {
          type: "boolean",
          description:
            "true se o paciente relatou dor, inchaco, sangramento, dente quebrado ou outro sinal de urgencia. false caso contrario.",
        },
        queixa: {
          type: "string",
          description:
            "Resumo curto, nas palavras do paciente, do que ele contou. Ex: 'usa dentadura ha 10 anos, ta frouxa, quer implante'.",
        },
      },
      required: ["tratamento"],
    },
  },
];

export const handlers: Record<string, Handler> = {
  buscarTratamento,
  listarTratamentos,
  registrarLead,
};
