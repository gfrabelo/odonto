export type Service = {
  name: string;
  description: string;
  image: string;
};

export type Doctor = {
  name: string;
  specialty: string;
  cro?: string;
  image: string;
};

export type ClinicStat = {
  value: string;
  label: string;
};

export type Testimonial = {
  name: string;
  text: string;
  detail?: string;
  rating?: number;
  date?: string;
  doctorReply?: string;
  badge?: string;
};

export type ClinicConfig = {
  slug: string;
  clinicName: string;
  shortName?: string;
  logo?: string;
  city: string;
  state: string;
  address: string;
  phone?: string;
  phoneDisplay?: string;
  whatsapp: string;
  whatsappDisplay: string;
  instagram?: string;
  cro?: string;
  hours?: string[];
  hero: {
    eyebrow?: string;
    title: string;
    highlight: string;
    description: string;
    socialProof?: string;
  };
  about: {
    eyebrow?: string;
    title: string;
    description: string;
    secondaryText?: string;
  };
  services: Service[];
  doctors?: Doctor[];
  stats?: ClinicStat[];
  testimonials?: Testimonial[];
  clinicImages: string[];
};

const images = {
  clinic: [
    "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1400&q=85",
    "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=900&q=85",
  ],
  doctors: [
    "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=85",
    "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=85",
    "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=800&q=85",
  ],
  services: [
    "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1000&q=85",
    "https://images.unsplash.com/photo-1600170311833-c2cf5280ce49?auto=format&fit=crop&w=1000&q=85",
    "https://images.unsplash.com/photo-1606265752439-1f18756aa376?auto=format&fit=crop&w=1000&q=85",
  ],
};

const baseServices: Service[] = [
  {
    name: "Clínica Geral",
    description: "Prevenção, diagnóstico e cuidado contínuo para manter sua saúde bucal em dia.",
    image: images.services[0],
  },
  {
    name: "Implantes",
    description: "Planejamento preciso para devolver função, segurança e naturalidade ao sorriso.",
    image: images.services[1],
  },
  {
    name: "Ortodontia",
    description: "Tratamentos personalizados com opções modernas para alinhar seu sorriso.",
    image: images.services[2],
  },
  {
    name: "Clareamento",
    description: "Protocolos seguros e individualizados para um sorriso mais luminoso.",
    image: images.services[0],
  },
  {
    name: "Lentes de contato dental",
    description: "Estética planejada com atenção à harmonia facial e preservação dental.",
    image: images.services[1],
  },
  {
    name: "Próteses",
    description: "Soluções sob medida para recuperar conforto, estética e mastigação.",
    image: images.services[2],
  },
];

export const clinics: Record<string, ClinicConfig> = {
  "dra-samara-oliveira": {
    slug: "dra-samara-oliveira",
    clinicName: "Dra. Samara Oliveira",
    shortName: "Samara Oliveira",
    logo: "/samara/logo-selo.png",
    city: "São Paulo",
    state: "SP",
    address: "Alameda dos Jurupis, 455 — Sala 92, Moema, São Paulo — SP, 04088-001",
    phone: "11964799591",
    phoneDisplay: "(11) 96479-9591",
    whatsapp: "5511964799591",
    whatsappDisplay: "(11) 96479-9591",
    instagram: "@drasamaraoliveira_",
    cro: "CROSP 171.447",
    hours: ["Segunda a sexta • 9h às 19h", "Sábado • 8h30 às 15h", "Domingo • Fechado"],
    hero: {
      eyebrow: "Odontologia & Harmonização Orofacial • Moema",
      title: "Sua beleza planejada",
      highlight: "em detalhes.",
      description:
        "Do sorriso ao perfil, cada tratamento começa com escuta e planejamento individual — para um resultado que valoriza você, sem exageros.",
      socialProof: "5,0 no Google • 81 avaliações",
    },
    about: {
      eyebrow: "Quem cuida de você",
      title: "Técnica de quem ensina. Cuidado de quem acolhe.",
      description:
        "A Dra. Samara Oliveira é cirurgiã-dentista com especialização em Harmonização Orofacial. No consultório em Moema, une odontologia e estética facial em um só planejamento, olhando para o rosto como um todo.",
      secondaryText:
        "Além de atender, ministra cursos de HOF para outros profissionais. E para cada paciente, a mesma regra: explicar com calma, respeitar a anatomia e buscar naturalidade.",
    },
    services: [
      { name: "Preenchimento labial", description: "Contorno, hidratação e volume na medida certa, respeitando o formato natural da sua boca.", image: "/samara/instagram/post-018.jpg" },
      { name: "Rinomodelação", description: "Ajustes sutis no perfil do nariz, sem cirurgia, para mais harmonia entre os traços.", image: "/samara/instagram/post-004.jpg" },
      { name: "Bioestimulador de colágeno", description: "Firmeza e sustentação para a pele, com resultado progressivo e natural.", image: "/samara/instagram/post-011.jpg" },
      { name: "Bigode chinês e perfiloplastia", description: "Suavização de sulcos e equilíbrio do perfil facial com planejamento individual.", image: "/samara/instagram/post-013.jpg" },
      { name: "Clareamento • Protocolo Diamond", description: "Um sorriso mais branco e iluminado, com resultado natural e acompanhamento de perto.", image: "/samara/sala-dentista.jpg" },
      { name: "Clínica geral e alinhadores", description: "Prevenção, restaurações e alinhadores invisíveis para cuidar da saúde e do alinhamento.", image: "/samara/sala-dentista.jpg" },
    ],
    doctors: [{ name: "Dra. Samara Oliveira", specialty: "Cirurgiã-dentista • Harmonização Orofacial", cro: "CROSP 171.447", image: "/samara/dra-samara-retrato.jpg" }],
    stats: [
      { value: "5,0", label: "nota no Google" },
      { value: "81", label: "avaliações de pacientes" },
      { value: "15 mil", label: "seguidores no Instagram" },
    ],
    testimonials: [
      { name: "Nathalia L.", text: "Fiz um clareamento com a Dra. Samara e amei o resultado! Ficou super natural, exatamente como eu queria. Além disso, ela foi super cuidadosa e me explicou tudo direitinho.", rating: 5, detail: "Clareamento" },
      { name: "Lucas C.", text: "A sala de espera é muito agradável, proporcionando um ambiente acolhedor desde a chegada. Fui recebido com um delicioso chocolate quente e um biscoito de Nutella, um cuidado que faz toda a diferença.", rating: 5, detail: "Experiência no consultório" },
      { name: "Wanderlei M.", text: "Adorei a consulta tranquila e sem dor. A dentista explicou com calma cada passo do tratamento, gentil e atenciosa. A clínica é muito limpa e organizada.", rating: 5, detail: "Tratamento odontológico" },
      { name: "Luana P.", text: "A clínica é linda, aconchegante e cheia de detalhes que fazem a diferença. O atendimento foi impecável do começo ao fim. Ainda tem um cantinho com café que deixa tudo mais especial.", rating: 5, detail: "Primeira consulta" },
      { name: "Gilvan A.", text: "Profissional super competente, atenciosa, educada, que nos deixa muito confortável na realização do tratamento, por nos passar muita confiança e segurança em todo o processo.", rating: 5, detail: "Tratamento completo" },
      { name: "Isabella M.", text: "Uma excelente profissional, Dra. Samara super atenciosa e cuidadosa. Cuidou do meu tratamento do início ao fim.", rating: 5, detail: "Paciente desde o início" },
    ],
    clinicImages: ["/samara/recepcao.jpg", "/samara/sala-hof.jpg", "/samara/sala-dentista.jpg", "/samara/cantinho-cafe.jpg", "/samara/vista-por-do-sol.jpg"],
  },
  "clinica-steinert": {
    slug: "clinica-steinert",
    clinicName: "Clínica Steinert",
    shortName: "Steinert",
    logo: "/steinert/logo.png",
    city: "Praia Grande",
    state: "SP",
    address: "Praça Dr. Roberto Andraus, 11 — Cidade Ocian, Praia Grande — SP",
    phone: "13997422265",
    phoneDisplay: "(13) 99742-2265",
    whatsapp: "5513997422265",
    whatsappDisplay: "(13) 99742-2265",
    instagram: "@clinicasteinert",
    cro: "Dra. Nathalia Steinert — CRO/SP 120.954",
    hero: {
      eyebrow: "Implantes e estética em Praia Grande",
      title: "Seu sorriso de volta.",
      highlight: "Sua confiança também.",
      description: "Odontologia de excelência com escuta, planejamento e um cuidado que acolhe você em cada etapa.",
      socialProof: "Mais de 2.000 sorrisos transformados",
    },
    about: {
      eyebrow: "À frente da Clínica Steinert",
      title: "Conhecimento técnico com um cuidado genuinamente humano.",
      description: "A Dra. Nathalia Steinert conduz cada tratamento com atenção individual, explicações claras e um planejamento construído para cada paciente.",
      secondaryText: "Formada pela Universidade Santa Cecília, possui residência em Saúde da Família e formação continuada em Implantodontia e Laminados Cerâmicos.",
    },
    services: [
      { name: "Implantes dentários", description: "Planejamento preciso para recuperar segurança, função mastigatória e naturalidade.", image: "/steinert/clinic-1.jpg" },
      { name: "Facetas e laminados", description: "Estética personalizada para transformar o sorriso preservando harmonia e identidade.", image: "/steinert/clinic-2.jpg" },
      { name: "Alinhadores invisíveis", description: "Correção do alinhamento com discrição, conforto e acompanhamento profissional.", image: "/steinert/clinic-3.jpg" },
      { name: "Prótese dentária", description: "Soluções individualizadas para devolver conforto, aparência e qualidade de vida.", image: "/steinert/gallery-1.jpg" },
      { name: "Clínica geral", description: "Prevenção, diagnóstico e cuidado contínuo para preservar a saúde do seu sorriso.", image: "/steinert/gallery-2.jpg" },
      { name: "Ortodontia", description: "Tratamentos para melhorar posição, função e equilíbrio do sorriso em todas as idades.", image: "/steinert/gallery-3.jpg" },
    ],
    doctors: [{ name: "Dra. Nathalia Steinert", specialty: "Implantodontia e Odontologia Estética", cro: "CRO/SP 120.954", image: "/steinert/nathalia.jpg" }],
    stats: [
      { value: "+2 mil", label: "sorrisos transformados" },
      { value: "60+", label: "avaliações no Google" },
      { value: "2016", label: "ano de formação" },
    ],
    testimonials: [
      { name: "Jonathan Carvalheiro Bernardes", text: "Superou as minhas expectativas. Meu caso era complexo, a equipe discutiu o procedimento com muito cuidado e o resultado foi excelente.", rating: 5, detail: "Avaliação no Google" },
      { name: "Marla Silva", text: "Lugar agradável, bonito e aconchegante, com excelentes profissionais. A Dra. Nathalia é calma e tem paciência com quem tem trauma de dentista.", rating: 5, detail: "Avaliação no Google" },
      { name: "Neide Braga", text: "Estou muito feliz com o resultado. O cuidado e o carinho de todos me ajudaram a superar o medo de dentista.", rating: 5, detail: "Avaliação no Google" },
    ],
    clinicImages: ["/steinert/clinic-1.jpg", "/steinert/clinic-2.jpg", "/steinert/clinic-3.jpg", "/steinert/gallery-1.jpg", "/steinert/gallery-2.jpg", "/steinert/gallery-3.jpg"],
  },
  "care-way-odontologia": {
    slug: "care-way-odontologia",
    clinicName: "Care Way Odontologia",
    shortName: "Care Way",
    city: "Santos",
    state: "SP",
    address: "Santos — SP",
    phone: "13981178037",
    phoneDisplay: "(13) 9 8117-8037",
    whatsapp: "5513981178037",
    whatsappDisplay: "(13) 9 8117-8037",
    instagram: "@care.way",
    cro: "CRO/SP 110120",
    hours: ["Atendimentos com horários reservados especialmente para você"],
    hero: {
      eyebrow: "Odontologia humanizada em Santos",
      title: "Um jeito mais leve de",
      highlight: "cuidar do seu sorriso.",
      description:
        "Escuta, acolhimento e cuidado individual para transformar a ida ao dentista em uma experiência tranquila — no seu tempo e com respeito à sua história.",
      socialProof: "Mais de 10 anos de experiência clínica",
    },
    about: {
      eyebrow: "Nossa forma de cuidar",
      title: "Antes do tratamento, existe uma pessoa.",
      description:
        "Na Care Way, cada atendimento começa pela escuta. Entendemos suas necessidades, seus receios e sua rotina para construir um cuidado possível, claro e verdadeiramente individual.",
      secondaryText:
        "Prevenção, reabilitação e estética integrativa se encontram em um espaço pensado para que você se sinta seguro desde o primeiro contato.",
    },
    services: [
      {
        name: "Prevenção e cuidado contínuo",
        description: "Acompanhamento próximo, diagnóstico e orientações para preservar a saúde oral em todas as fases da vida.",
        image: "/careway/image copy 7.png",
      },
      {
        name: "Reabilitação oral",
        description: "Planejamento individual para recuperar conforto, função mastigatória e confiança ao sorrir.",
        image: "/careway/image copy 8.png",
      },
      {
        name: "DTM e dor orofacial",
        description: "Avaliação cuidadosa das disfunções temporomandibulares e das dores que afetam face e qualidade de vida.",
        image: "/careway/image copy 3.png",
      },
      {
        name: "Implantes e próteses",
        description: "Experiência clínica e laboratorial integradas para devolver estabilidade, naturalidade e segurança.",
        image: "/careway/image copy 4.png",
      },
      {
        name: "Atendimento domiciliar",
        description: "Cuidado odontológico que considera mobilidade, contexto familiar e as necessidades de cada paciente.",
        image: "/careway/image copy 9.png",
      },
      {
        name: "Estética integrativa",
        description: "Terapias faciais e corporais com uma visão naturalista, voltada ao equilíbrio, bem-estar e saúde.",
        image: "/careway/silmara.jpg",
      },
      {
        name: "Clareamento dental",
        description: "Avaliação profissional para escolher a técnica mais segura, eficaz e adequada para iluminar o sorriso.",
        image: "/careway/image copy 4.png",
      },
      {
        name: "Bruxismo",
        description: "Avaliação dos sinais de apertamento e ranger dos dentes, com orientação individual para proteger sua saúde oral.",
        image: "/careway/image copy 3.png",
      },
    ],
    doctors: [
      {
        name: "Dra. Nadyne Bittencourt",
        specialty: "Cirurgiã-dentista • Idealizadora da Care Way",
        cro: "CRO/SP 110120",
        image: "/careway/dra-nadyne.jpg",
      },
      {
        name: "Vladimir",
        specialty: "Cirurgião-dentista • Prótese, cirurgia oral e implantodontia",
        image: "/careway/vladimir.jpg",
      },
      {
        name: "Silmara",
        specialty: "Esteticista • Terapias integrativas faciais e corporais",
        image: "/careway/silmara.jpg",
      },
    ],
    stats: [
      { value: "+10", label: "anos de experiência clínica" },
      { value: "5,0", label: "avaliação de pacientes" },
      { value: "3", label: "olhares integrados para o cuidado" },
    ],
    testimonials: [
      {
        name: "Charlene Gonçalves",
        detail: "Avaliação de paciente",
        rating: 5,
        text: "A Dra. Nadyne é muito atenciosa. Respeitou o tempo da minha filha, conquistou sua confiança e o tratamento deu muito certo.",
      },
      {
        name: "B. Camacho",
        detail: "Avaliação de paciente",
        rating: 5,
        text: "Profissional atenciosa, cuidadosa e ética, comprometida com o bem-estar do paciente e sempre presente no acompanhamento.",
      },
      {
        name: "Mafalda Alamino",
        detail: "Avaliação de paciente",
        rating: 5,
        text: "Um lugar acolhedor. Nadyne trata cada pessoa como única, com mãos leves, cuidado e muita tranquilidade.",
      },
    ],
    clinicImages: [
      "/careway/image.png",
      "/careway/image copy.png",
      "/careway/image copy 2.png",
      "/careway/image copy 3.png",
      "/careway/image copy 4.png",
    ],
  },
  "dra-yohana-vitoria": {
    slug: "dra-yohana-vitoria",
    clinicName: "Dra. Yohana Vitoria",
    shortName: "Yohana Vitoria",
    city: "Peruíbe",
    state: "SP",
    address: "Peruíbe — SP",
    whatsapp: "",
    whatsappDisplay: "",
    instagram: "@drayohanavitoria",
    hero: {
      eyebrow: "Odontologia estética & harmonização facial",
      title: "Realce o que",
      highlight: "já é seu.",
      description:
        "Um olhar integrado para sorriso e face, com técnica, delicadeza e respeito à sua identidade.",
    },
    about: {
      eyebrow: "Sobre a Dra. Yohana",
      title: "Técnica para transformar. Sensibilidade para preservar.",
      description:
        "Cirurgiã-dentista com atuação em odontologia e harmonização facial, a Dra. Yohana une conhecimento técnico a um olhar cuidadoso para cada detalhe.",
      secondaryText:
        "Seu trabalho parte de uma premissa simples: valorizar o que já existe, respeitando proporções, características e a identidade de cada paciente.",
    },
    services: [
      {
        name: "Estética do sorriso",
        description:
          "Planejamento individual para valorizar forma, cor e harmonia, preservando a naturalidade do sorriso.",
        image: "/yohana/image copy 2.png",
      },
      {
        name: "Preenchimento labial",
        description:
          "Contorno, hidratação e proporção com uma abordagem delicada, pensada para respeitar seus traços.",
        image: "/yohana/preenchimento-labial-hd.png",
      },
      {
        name: "Toxina botulínica",
        description:
          "Suavização de linhas de expressão com planejamento preciso e preservação da expressividade.",
        image: "/yohana/image copy 7.png",
      },
      {
        name: "Harmonização facial",
        description:
          "Procedimentos combinados para equilibrar proporções e realçar a beleza de forma leve e individual.",
        image: "/yohana/image copy 4.png",
      },
    ],
    doctors: [
      {
        name: "Dra. Yohana Vitoria",
        specialty: "Odontologia & Harmonização Facial",
        cro: "CRO/SP 169824",
        image: "/yohana/yohana-hero-hd.png",
      },
    ],
    clinicImages: [
      "/yohana/yohana-v2.png",
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1000&q=85",
    ],
  },
  "dents-premium": {
    slug: "dents-premium",
    clinicName: "Dents Premium Implantes",
    shortName: "Dents Premium",
    logo: "/dents-premium/logo.png",
    city: "Praia Grande",
    state: "SP",
    address: "Av. Brasil, 237 — Boqueirão, Praia Grande — SP",
    whatsapp: "5513991272124",
    whatsappDisplay: "(13) 99127-2124",
    cro: "RT: Danilo S. Souza — CRO/SP 129044",
    hours: ["Segunda a sexta, das 9h às 19h", "Sábado, das 9h às 16h"],
    hero: {
      eyebrow: "Estética e Reabilitação Oral em Praia Grande",
      title: "Reconquiste a segurança de",
      highlight: "sorrir com confiança.",
      description:
        "Implantes dentários, próteses e harmonização facial com planejamento individualizado para devolver função, estética e qualidade de vida.",
      socialProof: "Nota 4,8 no Google • 229 avaliações",
    },
    about: {
      eyebrow: "Dents Premium Implantes",
      title: "Cuidado completo para transformar seu sorriso.",
      description:
        "Na Dents Premium, cada tratamento começa com uma avaliação cuidadosa e um plano pensado para as necessidades de cada paciente.",
      secondaryText:
        "Estética e reabilitação oral reunidas em um só lugar, no coração do Boqueirão, com atendimento de segunda a sábado.",
    },
    services: [
      {
        name: "Implantes dentários",
        description:
          "Soluções planejadas para repor dentes perdidos e recuperar segurança, estabilidade e conforto ao mastigar.",
        image: images.services[1],
      },
      {
        name: "Próteses dentárias",
        description:
          "Próteses personalizadas para devolver função, estética e naturalidade ao sorriso.",
        image: images.services[2],
      },
      {
        name: "Reabilitação oral",
        description:
          "Planejamento integrado para recuperar saúde, equilíbrio da mordida e qualidade de vida.",
        image: images.services[0],
      },
      {
        name: "Harmonização facial",
        description:
          "Procedimentos personalizados para valorizar os traços e promover resultados equilibrados e naturais.",
        image: images.services[2],
      },
      {
        name: "Estética do sorriso",
        description:
          "Tratamentos que cuidam da forma, cor e harmonia do sorriso com atenção a cada detalhe.",
        image: images.services[0],
      },
      {
        name: "Avaliação odontológica",
        description:
          "Uma conversa cuidadosa e um diagnóstico completo para definir o melhor caminho para o seu sorriso.",
        image: images.services[1],
      },
    ],
    stats: [
      { value: "4,8 ★", label: "nota no Google" },
      { value: "229", label: "avaliações de pacientes" },
      { value: "Seg–Sáb", label: "atendimento durante a semana e aos sábados" },
    ],
    clinicImages: images.clinic,
  },
  "lumina-odontologia": {
    slug: "lumina-odontologia",
    clinicName: "Lumina Odontologia",
    shortName: "Lumina",
    city: "Peruíbe",
    state: "SP",
    address: "Av. Padre Anchieta, 620 — Centro, Peruíbe — SP",
    whatsapp: "5513999999999",
    whatsappDisplay: "(13) 99999-9999",
    instagram: "@luminaodontologia",
    hours: ["Segunda a sexta, 8h às 19h", "Sábado, 8h às 13h"],
    hero: {
      eyebrow: "Odontologia moderna e humanizada",
      title: "Seu sorriso merece",
      highlight: "cuidado em cada detalhe.",
      description:
        "Tecnologia, experiência e atendimento próximo para cuidar da sua saúde e do seu sorriso.",
      socialProof: "Atendimento completo para você e sua família",
    },
    about: {
      eyebrow: "A Lumina",
      title: "Cuidado que começa na escuta.",
      description:
        "Criamos uma experiência odontológica tranquila, com atenção genuína e planos de tratamento construídos para cada pessoa.",
      secondaryText:
        "Nossa estrutura combina tecnologia, conforto e uma equipe que explica cada etapa com clareza — do primeiro contato ao acompanhamento.",
    },
    services: baseServices,
    doctors: [
      {
        name: "Dra. Marina Azevedo",
        specialty: "Dentística e Estética",
        cro: "CRO-SP 00000",
        image: images.doctors[0],
      },
      {
        name: "Dr. Rafael Martins",
        specialty: "Implantodontia",
        cro: "CRO-SP 00000",
        image: images.doctors[1],
      },
      {
        name: "Dra. Beatriz Nogueira",
        specialty: "Ortodontia",
        cro: "CRO-SP 00000",
        image: images.doctors[2],
      },
    ],
    stats: [
      { value: "+10", label: "anos de experiência" },
      { value: "+5 mil", label: "sorrisos acompanhados" },
      { value: "6", label: "especialidades integradas" },
    ],
    testimonials: [
      {
        name: "Carolina M.",
        detail: "Paciente Lumina",
        text: "Fui acolhida desde o primeiro contato. A equipe explicou tudo com calma e o atendimento foi muito cuidadoso.",
      },
      {
        name: "Pedro H.",
        detail: "Paciente Lumina",
        text: "Ambiente impecável, horário respeitado e muita transparência durante todo o tratamento.",
      },
      {
        name: "Ana Luiza R.",
        detail: "Paciente Lumina",
        text: "Uma experiência leve e humana. Hoje me sinto muito mais tranquila para cuidar do meu sorriso.",
      },
    ],
    clinicImages: images.clinic,
  },
  "clinica-sorriso": {
    slug: "clinica-sorriso",
    clinicName: "Clínica Sorriso",
    city: "Santos",
    state: "SP",
    address: "Rua das Palmeiras, 184 — Gonzaga, Santos — SP",
    whatsapp: "5513999999998",
    whatsappDisplay: "(13) 99999-9998",
    hours: ["Segunda a sexta, 9h às 18h"],
    hero: {
      title: "Saúde bucal com",
      highlight: "atenção de verdade.",
      description: "Cuidado próximo, planejamento claro e uma equipe preparada para receber toda a família.",
    },
    about: {
      title: "Uma clínica feita para você se sentir bem.",
      description: "Atendimento cuidadoso em um espaço tranquilo, funcional e acolhedor.",
    },
    services: baseServices.slice(0, 4),
    doctors: [
      {
        name: "Dra. Helena Costa",
        specialty: "Clínica Geral",
        image: images.doctors[0],
      },
      {
        name: "Dr. Lucas Freire",
        specialty: "Ortodontia",
        image: images.doctors[1],
      },
    ],
    clinicImages: images.clinic,
  },
  "implante-center": {
    slug: "implante-center",
    clinicName: "Implante Center",
    city: "Praia Grande",
    state: "SP",
    address: "Av. Brasil, 950 — Boqueirão, Praia Grande — SP",
    whatsapp: "5513999999997",
    whatsappDisplay: "(13) 99999-9997",
    instagram: "@implantecenter",
    hero: {
      eyebrow: "Reabilitação oral e implantodontia",
      title: "Segurança para sorrir,",
      highlight: "conforto para viver.",
      description: "Planejamento digital e acompanhamento próximo em todas as etapas do seu tratamento.",
    },
    about: {
      title: "Precisão técnica, cuidado humano.",
      description: "Uma estrutura pensada para tratamentos de reabilitação oral com previsibilidade e conforto.",
    },
    services: baseServices.filter((service) =>
      ["Implantes", "Próteses", "Clínica Geral"].includes(service.name),
    ),
    stats: [
      { value: "+12", label: "anos de atuação" },
      { value: "3D", label: "planejamento digital" },
    ],
    clinicImages: images.clinic,
  },
  "dr-gilvan-salvadori": {
    slug: "dr-gilvan-salvadori",
    clinicName: "Dr. Gilvan Salvadori Ferro",
    shortName: "Dr. Gilvan Salvadori",
    city: "Santos",
    state: "SP",
    address: "Av. Conselheiro Nébias, 703 cj.1202 / 1203 – Boqueirão, Santos – CEP: 11.045-003",
    phone: "1332844516",
    phoneDisplay: "(13) 3284-4516",
    whatsapp: "5513991629130",
    whatsappDisplay: "(13) 99162-9130",
    instagram: "@dr.gilvansf_",
    cro: "CRO/SP 81.026",
    hours: [
      "Segunda a sexta, 08h30 às 19h00",
      "Atendimentos com hora marcada e pontualidade",
    ],
    hero: {
      eyebrow: "Odontologia Digital & Reabilitação no Boqueirão • Santos",
      title: "A precisão da odontologia digital",
      highlight: "com a segurança que seu sorriso merece.",
      description:
        "Implantes guiados, biomimética preservadora, facetas em porcelana e escaneamento intraoral 3D sem moldagens desconfortáveis. Cuidado detalhista, acolhedor e com padrão de excelência.",
      socialProof: "Avaliação 5.0 ★ no Google • Mais de 10 anos de dedicação em Santos",
    },
    about: {
      eyebrow: "Sobre o Dr. Gilvan Salvadori Ferro",
      title: "Ciência rigorosa, tecnologia de ponta e escuta atenta antes de cada tratamento.",
      description:
        "Cirurgião-dentista cooperado (CRO/SP 81.026), o Dr. Gilvan Salvadori Ferro alia sólido conhecimento clínico ao domínio das tecnologias mais avançadas da odontologia digital moderna.",
      secondaryText:
        "Reconhecido pelo atendimento minucioso e humanizado, faz questão de explicar detalhadamente cada etapa para que o paciente sinta total clareza e segurança — desde o diagnóstico 3D até o resultado final duradouro.",
    },
    services: [
      {
        name: "Implantes Dentários & Reabilitação Oral",
        description:
          "Planejamento 3D computadorizado para repor dentes perdidos com estabilidade, conforto mastigatório e harmonia estética.",
        image: "/gilvan/image copy 6.png",
      },
      {
        name: "Escaneamento Intraoral Digital 3D",
        description:
          "Zero moldagens convencionais com massinha. Mapeamento óptico digital de alta definição, rápido e 100% confortável.",
        image: "/gilvan/image copy 3.png",
      },
      {
        name: "Biomimética Odontológica",
        description:
          "Filosofia avançada de preservação estrutural que recria a biomecânica natural dos dentes sem desgastes agressivos.",
        image: "/gilvan/image copy.png",
      },
      {
        name: "Facetas & Lentes de Contato em Porcelana",
        description:
          "Personalização de cor, forma e textura com porcelanas ultrafinas, valorizando sua expressão sem artificialidade.",
        image: "/gilvan/image copy 5.png",
      },
      {
        name: "Periodontia & Saúde Gengival",
        description:
          "Cuidado especializado dos tecidos de sustentação e plástica gengival para estabilidade biológica e alinhamento do sorriso.",
        image: "/gilvan/image copy 2.png",
      },
      {
        name: "Odontologia Integrada & Preventiva",
        description:
          "Acompanhamento continuado, profilaxia profunda e diagnósticos precoces para preservar sua saúde oral por décadas.",
        image: "/gilvan/image.png",
      },
    ],
    doctors: [
      {
        name: "Dr. Gilvan Salvadori Ferro",
        specialty: "Cirurgião-Dentista • Implantes, Biomimética & Reabilitação Oral",
        cro: "CRO/SP 81.026",
        image: "/gilvan/banner.png",
      },
    ],
    stats: [
      { value: "+10", label: "anos de atuação em Santos" },
      { value: "5.0 ★", label: "avaliação máxima no Google" },
      { value: "100%", label: "fluxo digital 3D" },
      { value: "TV Teto", label: "conforto absoluto no atendimento" },
    ],
    testimonials: [
      {
        name: "Sérgio Perassoli",
        detail: "Paciente há anos • 5 avaliações no Google",
        rating: 5,
        date: "2 meses atrás",
        badge: "Paciente Frequente",
        text: "Excelente profissional. Faço minhas consultas com ele há anos e sempre fui muito bem atendido. Competente, atencioso e transmite confiança. Recomendo!",
        doctorReply: "Sérgio, obrigado pela avaliação! Conte sempre comigo, grande abraço!",
      },
      {
        name: "Perla Pacchiele",
        detail: "Avaliação no Google",
        rating: 5,
        date: "um mês atrás",
        badge: "Recomendação",
        text: "Dr. Gilvan excelente profissional, sempre muito atencioso e com informações claras do tratamento ideal, pontual e acompanha junto à equipe dedicada todo processo para certificar que estamos bem 🙏",
        doctorReply: "Obrigado Perla! Satisfação atender você e sua mãe! Conte comigo!",
      },
      {
        name: "Giulia Baraçal",
        detail: "5 avaliações • 2 fotos no Google",
        rating: 5,
        date: "3 meses atrás",
        badge: "Experiência e Conforto",
        text: "O Dr. Gilvan é muito atencioso e cuidadoso do início ao fim. Indico para todos que eu conheço!! O consultório é 100% pensado no conforto do paciente 😁",
        doctorReply: "Muito obrigado pelo carinho e pela confiança!",
      },
      {
        name: "Vladimir Souza",
        detail: "Local Guide • 5 avaliações no Google",
        rating: 5,
        date: "um mês atrás",
        badge: "Local Guide Google",
        text: "Dr. Gilvan estou muito satisfeito com seu trabalho de odontologia, porque é um doutor detalhista, gosta de explicar sobre o tratamento a ser feito para que nós pacientes tenham segurança do seu trabalho. Isso é muito importante.",
        doctorReply: "Vladimir, obrigado pelas palavras! Fico feliz em saber que se sentiu seguro durante o tratamento. Sempre procuro explicar cada etapa com calma para que meus pacientes tenham confiança em todas as decisões. Grande abraço!",
      },
      {
        name: "Erci Vieira Soares Manelice",
        detail: "Avaliação no Google",
        rating: 5,
        date: "2 meses atrás",
        badge: "Tratamento de Implantes",
        text: "Foi maravilhoso como sempre, o atendimento e o resultado do meu tratamento... depois dos implantes, estou bastante feliz... o meu sorriso mostra o belo trabalho feito pelo Dr. GILVAN SALVADORI FERRO. Só tenho que agradecer a ele e a sua competente equipe.",
        doctorReply: "Erci, muito obrigado pelas palavras e confiança durante todo o tratamento! Fico feliz em saber que os implantes devolveram não apenas o seu sorriso, mas também sua satisfação e autoestima!",
      },
      {
        name: "Fátima Marinelli",
        detail: "Paciente de longo prazo • Google",
        rating: 5,
        date: "um mês atrás",
        badge: "Mais de 10 anos de cuidado",
        text: "Nestes anos todos que sou paciente do Dr. Gilvan, desde o implante até uma simples limpeza semestral, só tenho que agradecer o profissionalismo, competência, acolhimento e empatia.",
        doctorReply: "Obrigado pela avaliação, Fátima! Saber que contribuí para devolver sua alegria de sorrir é uma das maiores recompensas da minha profissão! Um grande abraço!",
      },
      {
        name: "Lucimar Alvarenga",
        detail: "2 avaliações no Google",
        rating: 5,
        date: "2 meses atrás",
        badge: "Dedicação e Carinho",
        text: "Minha experiência foi excelente do início ao fim do tratamento. Fui atendida com muito profissionalismo, cuidado e atenção em cada etapa. Gostaria de agradecer imensamente a toda a equipe pela dedicação, competência e carinho.",
        doctorReply: "Muito obrigado pelas palavras e pela confiança em nosso trabalho! Agradeço pelo carinho e estamos sempre à disposição!",
      },
      {
        name: "Sandra Rocha",
        detail: "Avaliação no Google",
        rating: 5,
        date: "2 meses atrás",
        badge: "Equipe Atenciosa",
        text: "Fui e ainda serei muito bem assistida pelo Dr. Gilvan e sua secretária. Ambos maravilhosos. O atendimento é feito com carinho e atenção. Só gratidão 🙏❤️",
        doctorReply: "Muito obrigado! Ficamos muito felizes com suas palavras. Conte sempre conosco!",
      },
      {
        name: "Vitor Hugo",
        detail: "Avaliação no Google",
        rating: 5,
        date: "3 meses atrás",
        badge: "Profissional Exemplar",
        text: "Dr. Gilvan Salvadori Ferro profissional exemplar!!! Atendimento de alto nível desde o início até o término do meu tratamento, dando sempre atenção e sanando todos meus problemas com eficiência!",
        doctorReply: "Muito obrigado, Vitor! Fico feliz com sua satisfação e confiança. Conte sempre comigo!",
      },
      {
        name: "Cássio Rodrigues",
        detail: "6 avaliações • 1 foto no Google",
        rating: 5,
        date: "2 meses atrás",
        badge: "Diagnóstico Preciso",
        text: "Dr. Gilvan, um excelente profissional, fez um diagnóstico preciso e detalhou cada etapa do tratamento. O consultório além de muito bem equipado tem um ambiente excelente e agradável. Super indico.",
        doctorReply: "Muito obrigado pela avaliação! Fico feliz que tenha valorizado a forma como conduzo o diagnóstico e explico cada etapa do tratamento. Acredito que informação e confiança caminham juntas.",
      },
      {
        name: "M. Barreira",
        detail: "Paciente há mais de 10 anos • Google",
        rating: 5,
        date: "um mês atrás",
        badge: "Fidelidade e Confiança",
        text: "Sou paciente há mais de dez anos e, ao longo de todo esse período, sempre fui atendido com elevado profissionalismo, cuidado, atenção e zelo. O trabalho realizado demonstra competência técnica, dedicação e genuína preocupação.",
        doctorReply: "Maurício, obrigado pela confiança ao longo desses anos! É muito gratificante acompanhar um paciente por tanto tempo e saber que meu trabalho transmite cuidado, segurança e confiança!",
      },
      {
        name: "Fabio Moraes",
        detail: "2 avaliações no Google",
        rating: 5,
        date: "2 meses atrás",
        badge: "Conhecimento Absurdo",
        text: "Excelente profissional!!! Muito atencioso, conhecimento absurdo e muito dedicado.",
        doctorReply: "Muito obrigado, Fábio! Vou continuar caprichando no seu tratamento! 🤜🏻🤛🏻",
      },
      {
        name: "Maria Aparecida",
        detail: "Retorno após anos • Google",
        rating: 5,
        date: "um mês atrás",
        badge: "Retorno com Confiança",
        text: "Retornei ao consultório do Dr. Gilvan Salvadori Ferro após muitos anos sem passar por uma consulta. Desde o primeiro contato para o agendamento, fui atendida com muita atenção, cordialidade e cuidado.",
        doctorReply: "Maria Aparecida, fiquei muito feliz pelas suas palavras e com o seu retorno depois de tantos anos! Muito obrigado pelo carinho com toda a nossa equipe!",
      },
      {
        name: "Vera Lydia Silva Gonçalves",
        detail: "2 avaliações no Google",
        rating: 5,
        date: "3 meses atrás",
        badge: "Autoestima Restaurada",
        text: "Um profissional de grande competência, me proporcionou uma vida muito mais feliz, restaurando o meu sorriso. Durante o meu tratamento sempre me atendeu com carinho e suas orientações sempre me trazem muita segurança.",
        doctorReply: "Vera, muito obrigado pelas palavras e pela confiança. Fico muito feliz em saber que pude contribuir para restaurar seu sorriso e sua qualidade de vida!",
      },
      {
        name: "Lizi Seixas",
        detail: "2 avaliações no Google",
        rating: 5,
        date: "um mês atrás",
        badge: "Indicação de Excelência",
        text: "Uma indicação exige responsabilidade e eu super indico o Dr. Gilvan que realiza um atendimento de excelência em cada detalhe do seu trabalho assim como a sua equipe.",
        doctorReply: "Lizi, muito obrigado pelas palavras e pela confiança em me indicar! Saber que o tratamento trouxe não apenas um sorriso novo, mas também mais autoestima e confiança, é muito gratificante para mim.",
      },
      {
        name: "Maria Aparecida Pinheiro Matos",
        detail: "Local Guide • 14 avaliações no Google",
        rating: 5,
        date: "um mês atrás",
        badge: "Local Guide Google",
        text: "Excelente! Como sempre muito bem atendida. Dr. Gilvan ótimo profissional.👏",
        doctorReply: "Obrigado pela avaliação, Cida! Conte sempre comigo!",
      },
    ],
    clinicImages: [
      "/gilvan/banner.png",
      "/gilvan/image.png",
      "/gilvan/image copy 2.png",
      "/gilvan/image copy 3.png",
      "/gilvan/image copy 5.png",
      "/gilvan/image copy 4.png",
      "/gilvan/image copy 7.png",
      "/gilvan/image copy 6.png",
      "/gilvan/image copy.png",
    ],
  },
};

export const defaultClinicSlug = "clinica-steinert";
