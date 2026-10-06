# Agente SDR odonto (demo)

Pré-atendimento no WhatsApp para clínica odontológica. Atende o paciente, entende o que ele quer
cuidar, detecta urgência, combina dia e período para a **avaliação** e entrega o lead pronto para a
recepção. Cala quando alguém da clínica digita na conversa.

Gerado com a skill [`agente-whatsapp`](https://github.com/gfrabelo/agente-barbearia/tree/main/skills/agente-whatsapp).
Node 20 + TypeScript + Express + Gemini + UAZAPI, sem banco.

**Fronteira:** o agente propõe o horário e a recepção confirma. Ele não vê a agenda, não passa valor
de tratamento (só o da avaliação), não diagnostica e não indica remédio.

## Rodar

```bash
npm install
# preencha GEMINI_API_KEY no .env -> https://aistudio.google.com/apikey
npm run check   # valida key, model id e function calling
npm run repl    # conversa no terminal, sem WhatsApp (/novo zera, /sair encerra)
```

## Trocar de clínica (personalizar para um prospect)

- `.env`: `EMPRESA_NOME`, `EMPRESA_CIDADE`, `ATENDENTE_NOME`, `EMPRESA_ENDERECO`, `EMPRESA_HORARIO`.
  Endereço e horário vazios são melhores que errados: o agente diz que a recepção manda a localização.
- `src/data/catalogo.json`: tratamentos, termos que o paciente usa, especialista de cada um.
  O valor da avaliação é o `preco` do item `avaliacao` (`0` = gratuita). Tratamentos não têm preço.

## Ligar no WhatsApp

1. Instância na UAZAPI → `UAZAPI_URL` e `UAZAPI_TOKEN` no `.env`.
2. URL pública:
   - **Railway:** importe o repo, *Root Directory* = `agente`, cole as variáveis do `.env` em
     *Variables*, gere domínio em *Settings > Networking*. `/health` deve responder `{"ok": true}`.
   - **Local:** `npm run dev` + `cloudflared tunnel --url http://localhost:3000`.
3. Gere um `WEBHOOK_SECRET` e aponte o webhook da instância (evento `messages`) para
   `https://<url>/webhook?secret=<valor>`.
4. `HUMANO_WHATSAPP` = o número que recebe o lead pronto (na demo, o seu).

## Roteiro da demo na frente do dono da clínica

1. Peça para ele mandar mensagem como paciente: "quanto custa um implante?".
2. Mostre que o agente não fala valor, oferece a avaliação e conduz até dia, período e nome.
3. Mostre o lead chegando no WhatsApp da recepção (`HUMANO_WHATSAPP`).
4. Teste de urgência: "tô com muita dor no dente" → lead chega marcado 🚨 URGENTE.
5. Digite você mesmo na conversa pelo WhatsApp da clínica: o agente cala.

## Antes de virar produção

1. **Webhook com segredo** obrigatório e rate limit por número.
2. **Lead persistido** (hoje vive no log + WhatsApp/webhook; deploy novo perde o histórico).
3. **Pausa no banco**: hoje mora na memória, e um deploy solta o agente em conversa que a
   recepção já tinha assumido.

Mesma arquitetura, é acrescentar banco, não refazer.
