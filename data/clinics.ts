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

export const defaultClinicSlug = "dr-gilvan-salvadori";
