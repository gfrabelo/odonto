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
};

export type ClinicConfig = {
  slug: string;
  clinicName: string;
  shortName?: string;
  city: string;
  state: string;
  address: string;
  whatsapp: string;
  whatsappDisplay: string;
  instagram?: string;
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
};

export const defaultClinicSlug = "dra-yohana-vitoria";
