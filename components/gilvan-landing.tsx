"use client";

import type { ClinicConfig } from "@/data/clinics";
import { createWhatsAppUrl } from "@/lib/whatsapp";
import {
  ArrowDownRight,
  ArrowRight,
  BadgeCheck,
  CalendarDays,
  Check,
  ChevronLeft,
  ChevronRight,
  Clock3,
  HeartHandshake,
  Instagram,
  MapPin,
  MessageCircle,
  Microscope,
  Phone,
  Quote,
  Scan,
  ShieldCheck,
  Sparkles,
  Star,
  Tv,
  UsersRound,
  Video,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { MobileNav } from "./mobile-nav";
import { Reveal } from "./reveal";
import { ServicesAccordion } from "./services-accordion";

const navLinks = [
  ["Início", "#inicio"],
  ["Diferenciais", "#diferenciais"],
  ["Tratamentos", "#tratamentos"],
  ["A Clínica", "#clinica"],
  ["Sobre o Dr.", "#sobre"],
  ["Depoimentos", "#depoimentos"],
  ["Contato", "#contato"],
];

const benefits = [
  {
    title: "Escaneamento 3D Digital",
    text: "Mapeamento óptico instantâneo sem moldagens com massinha ou enjoo.",
    icon: Scan,
  },
  {
    title: "Consultório com TV no Teto",
    text: "Ambiente relaxante com tela panorâmica para seu total conforto.",
    icon: Tv,
  },
  {
    title: "Odontologia Biomimética",
    text: "Preservação máxima da estrutura dental natural sem desgastes excessivos.",
    icon: Microscope,
  },
  {
    title: "CRO 81.026 • Cooperado",
    text: "Mais de 10 anos de compromisso ético e transparência em Santos.",
    icon: BadgeCheck,
  },
];

const reasons = [
  {
    title: "Diagnóstico Digital 3D",
    text: "Tecnologia de ponta para planejar cada etapa com precisão milimétrica.",
    icon: Microscope,
  },
  {
    title: "Conforto Incomparável",
    text: "TV no teto e poltrona ergonômica pensadas para quem busca tranquilidade.",
    icon: Sparkles,
  },
  {
    title: "Preservação Biológica",
    text: "Filosofia biomimética: recriar a função natural preservando o dente sadio.",
    icon: ShieldCheck,
  },
  {
    title: "Explicação Detalhada",
    text: "O Dr. Gilvan explica com calma cada fase para que você tenha 100% de segurança.",
    icon: UsersRound,
  },
  {
    title: "Acompanhamento Próximo",
    text: "Cuidado humanizado e equipe dedicada antes, durante e após o tratamento.",
    icon: HeartHandshake,
  },
];

// Curadoria das melhores avaliações do Google
const topReviews = [
  {
    name: "Giulia Baraçal",
    detail: "5 avaliações • 2 fotos no Google",
    badge: "Conforto do Paciente",
    text: "O Dr Gilvan é muito atencioso e cuidadoso do início ao fim. Indico para todos que eu conheço!! O consultório é 100% pensado no conforto do paciente 😁",
    doctorReply: "Muito obrigado pelo carinho e pela confiança!",
  },
  {
    name: "Vladimir Souza",
    detail: "Local Guide • 5 avaliações no Google",
    badge: "Local Guide",
    text: "Dr. Gilvan estou muito satisfeito com seu trabalho de odontologia, porque é um doutor detalhista, gosta de explicar sobre o tratamento a ser feito para que nós pacientes tenham segurança do seu trabalho. Isso é muito importante.",
    doctorReply: "Vladimir, obrigado pelas palavras! Fico feliz em saber que se sentiu seguro durante o tratamento. Sempre procuro explicar cada etapa com calma.",
  },
  {
    name: "Erci Vieira Soares Manelice",
    detail: "Avaliação no Google",
    badge: "Implantes Dentários",
    text: "Foi maravilhoso como sempre, o atendimento e o resultado do meu tratamento... depois dos implantes, estou bastante feliz... o meu sorriso mostra o belo trabalho feito pelo Dr. GILVAN SALVADORI FERRO. Só tenho que agradecer a ele e a sua competente equipe.",
    doctorReply: "Erci, muito obrigado pela confiança durante todo o tratamento! Fico feliz em saber que os implantes devolveram não apenas o seu sorriso, mas também sua autoestima!",
  },
  {
    name: "Fátima Marinelli",
    detail: "Paciente há anos • Google",
    badge: "Fidelidade & Confiança",
    text: "Nestes anos todos que sou paciente do dr Gilvan, desde o implante até uma simples limpeza semestral, só tenho que agradecer o profissionalismo, competência, acolhimento e empatia.",
    doctorReply: "Obrigado pela avaliação Fátima! Saber que contribuí para devolver sua alegria de sorrir é uma das maiores recompensas da minha profissão!",
  },
  {
    name: "Sérgio Perassoli",
    detail: "5 avaliações no Google",
    badge: "Paciente Frequente",
    text: "Excelente profissional. Faço minhas consultas com ele há anos e sempre fui muito bem atendido. Competente, atencioso e transmite confiança. Recomendo!",
    doctorReply: "Sérgio, obrigado pela avaliação! Conte sempre comigo, grande abraço!",
  },
  {
    name: "Cássio Rodrigues",
    detail: "6 avaliações • 1 foto no Google",
    badge: "Diagnóstico Preciso",
    text: "Dr Gilvan, um excelente profissional, fez um diagnóstico preciso e detalhou cada etapa do tratamento. O consultório além de muito bem equipado tem um ambiente excelente e agradável. Super indico.",
    doctorReply: "Muito obrigado pela avaliação! Acredito que informação e confiança caminham juntas. Grande abraço!",
  },
  {
    name: "M. Barreira",
    detail: "Paciente há mais de 10 anos • Google",
    badge: "Mais de 10 Anos",
    text: "Sou paciente há mais de dez anos e, ao longo de todo esse período, sempre fui atendido com elevado profissionalismo, cuidado, atenção e zelo. O trabalho realizado demonstra competência técnica e dedicação.",
    doctorReply: "Maurício obrigado pela confiança ao longo desses anos! É muito gratificante acompanhar um paciente por tanto tempo e saber que meu trabalho transmite segurança!",
  },
];

export function GilvanLanding({ clinic }: { clinic: ClinicConfig }) {
  const whatsappUrl = createWhatsAppUrl(
    clinic.whatsapp,
    "Olá Dr. Gilvan! Conheci o seu consultório pelo site e gostaria de agendar uma consulta de avaliação em Santos.",
  );

  const phoneCallUrl = clinic.phone ? `tel:${clinic.phone}` : `tel:${clinic.whatsapp}`;

  // Estado do Carrossel de Depoimentos com suporte responsivo preciso
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  // Detecta a quantidade de cards por visualização sem quebrar o layout
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, topReviews.length - visibleCount);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: clinic.clinicName,
    address: clinic.address,
    telephone: clinic.whatsappDisplay,
    areaServed: `${clinic.city}, ${clinic.state}`,
    ...(clinic.instagram ? { sameAs: [`https://instagram.com/${clinic.instagram.replace("@", "")}`] } : {}),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />

      {/* 1. HEADER NO ESTILO LUMINA (WHITE GLASSMORPHISM) */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/60 bg-white/85 backdrop-blur-xl">
        <div className="container-site flex h-[76px] items-center justify-between">
          <a href="#inicio" className="group flex items-center gap-3" aria-label={`${clinic.clinicName} — início`}>
            <span className="grid size-10 place-items-center rounded-full bg-primary text-white transition-transform group-hover:-rotate-6">
              <Sparkles className="size-4" strokeWidth={2} />
            </span>
            <span className="leading-none">
              <strong className="block text-[15px] font-extrabold tracking-[-0.03em] text-navy">
                Dr. Gilvan Salvadori Ferro
              </strong>
              <span className="mt-1 block text-[9px] font-bold uppercase tracking-[0.19em] text-muted">
                CRO/SP 81.026 • Santos
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
            {navLinks.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="text-[13px] font-bold text-ink/75 transition-colors hover:text-primary"
              >
                {label}
              </a>
            ))}
          </nav>

          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="button-primary hidden lg:inline-flex">
            Agendar avaliação <ArrowRight className="size-4" />
          </a>
          <MobileNav whatsappUrl={whatsappUrl} />
        </div>
      </header>

      <main>
        {/* 2. HERO SECTION NO ESTILO LUMINA (COM FOTO LIVRE DO DR. GILVAN EM BANNER.PNG) */}
        <section id="inicio" className="relative overflow-hidden bg-ice pt-[76px]">
          <div className="hero-orbit hero-orbit-one" />
          <div className="hero-orbit hero-orbit-two" />

          <div className="container-site grid min-h-[730px] items-center gap-6 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:py-10">
            {/* Coluna Texto */}
            <div className="relative z-10 max-w-[640px] pt-4 lg:pt-0">
              <p className="eyebrow">Odontologia Digital & Reabilitação • Santos</p>
              <h1 className="mt-6 text-[2.5rem] font-extrabold leading-[1.06] tracking-[-0.052em] text-navy sm:text-5xl lg:text-[3.25rem] xl:text-[3.8rem]">
                <span className="block text-balance">A precisão da odontologia digital</span>
                <span className="block text-balance text-primary">com a segurança que você merece.</span>
              </h1>
              <p className="mt-6 max-w-lg text-base leading-7 text-muted sm:text-lg sm:leading-8">
                Implantes com planejamento computadorizado 3D, biomimética preservadora, facetas e
                escaneamento intraoral sem as incômodas moldagens de massinha. Atendimento humanizado e
                consultório 100% pensado no seu conforto no Boqueirão.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={whatsappUrl} target="_blank" rel="noreferrer" className="button-primary min-h-14 px-6">
                  <MessageCircle className="size-5" /> Agendar avaliação
                </a>
                <a href="#tratamentos" className="button-secondary min-h-14 px-6">
                  Conheça os tratamentos <ArrowDownRight className="size-4" />
                </a>
              </div>

              {/* Social Proof Lumina Style */}
              <div className="mt-8 flex items-center gap-3 text-sm font-semibold text-ink/75">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="size-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span>
                  <strong>Avaliação 5.0 no Google</strong> • Mais de 10 anos cuidando de sorrisos em Santos
                </span>
              </div>
            </div>

            {/* Coluna Visual: Dr. Gilvan Recortado Livre em banner.png com Halos Lumina */}
            <div className="hero-visual relative mx-auto flex h-[480px] w-full max-w-[560px] items-end justify-center sm:h-[560px] lg:h-[640px]">
              {/* Halos e órbitas sutis Lumina */}
              <div className="tooth-halo" aria-hidden="true" />
              <div className="tooth-ring tooth-ring-outer" aria-hidden="true" />
              <div className="tooth-ring tooth-ring-inner" aria-hidden="true" />

              {/* Foto Livre do Dr. Gilvan - Sem Moldura ou Card Box */}
              <div className="relative z-10 h-full w-full max-w-[460px]">
                <Image
                  src="/gilvan/banner.png"
                  alt="Dr. Gilvan Salvadori Ferro - Cirurgião-Dentista"
                  fill
                  priority
                  unoptimized
                  className="object-contain object-bottom drop-shadow-[0_20px_35px_rgba(16,42,69,0.18)]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Floating Badge Lumina 1 (Topo Esquerdo) */}
              <div className="absolute left-0 top-12 z-20 hidden sm:flex items-center gap-3 rounded-2xl border border-white bg-white/90 p-3 shadow-soft backdrop-blur">
                <span className="grid size-9 place-items-center rounded-xl bg-ice text-primary">
                  <Scan className="size-4" />
                </span>
                <span>
                  <strong className="block text-xs font-extrabold text-navy">Escaneamento 3D</strong>
                  <span className="text-[11px] text-muted">Sem moldagem de massinha</span>
                </span>
              </div>

              {/* Floating Badge Lumina 2 (Base Direita) */}
              <div className="absolute bottom-6 right-0 z-20 flex items-center gap-3 rounded-2xl border border-white bg-white/90 p-3.5 pr-5 shadow-soft backdrop-blur sm:bottom-12 sm:right-2">
                <span className="grid size-10 place-items-center rounded-xl bg-ice text-primary">
                  <Tv className="size-5" />
                </span>
                <span>
                  <strong className="block text-xs font-extrabold text-navy">TV no Teto</strong>
                  <span className="text-[11px] text-muted">Conforto total no atendimento</span>
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* 3. FAIXA DE BENEFÍCIOS (ESTILO LUMINA) */}
        <section id="diferenciais" aria-label="Diferenciais" className="border-b border-line bg-white">
          <div className="container-site grid sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map(({ title, text, icon: Icon }, index) => (
              <div
                key={title}
                className={`flex gap-4 py-7 sm:px-6 lg:py-9 ${index !== 0 ? "lg:border-l lg:border-line" : ""
                  }`}
              >
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-ice text-primary">
                  <Icon className="size-5" strokeWidth={1.8} />
                </span>
                <div>
                  <h2 className="text-sm font-extrabold text-navy">{title}</h2>
                  <p className="mt-1 text-xs leading-5 text-muted">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. TRATAMENTOS COM ACCORDION (ESTILO LUMINA) */}
        <section id="tratamentos" className="section-space bg-canvas">
          <div className="container-site">
            <Reveal>
              <div className="mb-12 grid gap-6 lg:grid-cols-2 lg:items-end">
                <div>
                  <p className="eyebrow">Especialidades Clínicas</p>
                  <h2 className="section-title mt-5">Tratamentos avançados para seu sorriso.</h2>
                </div>
                <p className="max-w-lg leading-7 text-muted lg:justify-self-end">
                  Da reabilitação com implantes guiados à odontologia biomimética, cada plano de
                  tratamento parte de um diagnóstico digital minucioso e personalizado.
                </p>
              </div>
            </Reveal>

            <div className="grid gap-8 lg:grid-cols-[1fr_340px] lg:gap-14">
              <Reveal>
                <ServicesAccordion services={clinic.services} whatsappUrl={whatsappUrl} />
              </Reveal>

              <Reveal className="lg:sticky lg:top-28 lg:self-start">
                <aside className="relative overflow-hidden rounded-[28px] bg-navy p-7 text-white md:p-9">
                  <div className="absolute -right-10 -top-10 size-40 rounded-full border border-white/10" />
                  <MessageCircle className="size-8 text-sky-300" />
                  <h3 className="mt-10 text-2xl font-extrabold tracking-[-0.03em]">
                    Dúvidas sobre o seu caso?
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-white/65">
                    O Dr. Gilvan e sua equipe estão à disposição para esclarecer tudo pelo WhatsApp com
                    atenção e clareza.
                  </p>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-extrabold text-navy hover:bg-ice transition"
                  >
                    Falar com a equipe <ArrowRight className="size-4" />
                  </a>
                </aside>
              </Reveal>
            </div>
          </div>
        </section>

        {/* 5. POR QUE NOS ESCOLHER (ESTILO LUMINA) */}
        <section className="section-space bg-white">
          <div className="container-site">
            <Reveal className="text-center">
              <p className="eyebrow justify-center">Nossos Pilares</p>
              <h2 className="section-title mx-auto mt-5 max-w-2xl">
                Confiança, precisão e respeito em cada etapa.
              </h2>
            </Reveal>

            <div className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
              {reasons.map(({ title, text, icon: Icon }, index) => (
                <Reveal key={title}>
                  <article className="border-t border-line pt-6">
                    <span className="mb-8 flex items-center justify-between text-primary">
                      <Icon className="size-6" strokeWidth={1.6} />
                      <span className="text-[10px] font-extrabold text-muted/50">0{index + 1}</span>
                    </span>
                    <h3 className="font-extrabold text-navy">{title}</h3>
                    <p className="mt-3 text-sm leading-6 text-muted">{text}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 6. A CLÍNICA & ESTRUTURA COM FOTOS REAIS (ESTILO LUMINA) */}
        <section id="clinica" className="section-space overflow-hidden bg-ice/60">
          <div className="container-site grid items-center gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
            <Reveal>
              <p className="eyebrow">Estrutura & Conforto</p>
              <h2 className="section-title mt-5">Um espaço planejado para o seu bem-estar.</h2>
              <p className="mt-6 leading-7 text-muted">
                Localizado no Boqueirão em Santos, nosso consultório alia tecnologia digital de última
                geração a um ambiente acolhedor e relaxante — equipado com TV no teto para que você
                se sinta seguro e confortável durante todo o procedimento.
              </p>
              <p className="mt-4 leading-7 text-muted">
                Sem moldagens incômodas com massa: todo o mapeamento é feito por escaneamento intraoral
                3D em segundos.
              </p>
              <a
                href="#contato"
                className="mt-8 inline-flex items-center gap-2 text-sm font-extrabold text-primary hover:text-navy"
              >
                Conheça nossa localização <ArrowRight className="size-4" />
              </a>
            </Reveal>

            <Reveal>
              <div className="grid h-[460px] grid-cols-[1.15fr_.85fr] grid-rows-2 gap-3 sm:h-[560px] sm:gap-4">
                {/* Foto 1: TV no Teto */}
                <div className="relative row-span-2 overflow-hidden rounded-2xl sm:rounded-[28px]">
                  <Image
                    src="/gilvan/image copy 2.png"
                    alt="Consultório com TV no teto para relaxamento"
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                    sizes="(max-width: 1024px) 60vw, 35vw"
                  />
                  <span className="absolute bottom-3 left-3 rounded-lg bg-navy/80 px-2.5 py-1 text-[11px] font-bold text-white backdrop-blur">
                    TV no Teto Relaxante
                  </span>
                </div>

                {/* Foto 2: Escaneamento 3D */}
                <div className="relative overflow-hidden rounded-2xl sm:rounded-[28px]">
                  <Image
                    src="/gilvan/image copy 3.png"
                    alt="Escaneamento intraoral digital 3D"
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                    sizes="(max-width: 1024px) 40vw, 25vw"
                  />
                  <span className="absolute bottom-3 left-3 rounded-lg bg-navy/80 px-2.5 py-1 text-[11px] font-bold text-white backdrop-blur">
                    Escaneamento 3D
                  </span>
                </div>

                {/* Foto 3: Recepção */}
                <div className="relative overflow-hidden rounded-2xl sm:rounded-[28px]">
                  <Image
                    src="/gilvan/image.png"
                    alt="Recepção moderna do consultório"
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                    sizes="(max-width: 1024px) 40vw, 25vw"
                  />
                  <span className="absolute bottom-3 left-3 rounded-lg bg-navy/80 px-2.5 py-1 text-[11px] font-bold text-white backdrop-blur">
                    Recepção Acolhedora
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 7. FAIXA DE ESTATÍSTICAS (ESTILO LUMINA - BG PRIMARY) */}
        <section className="bg-primary py-12 text-white md:py-16">
          <div className="container-site grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="border-l border-white/25 pl-6">
              <strong className="block text-4xl font-extrabold tracking-[-0.05em] md:text-5xl">
                +10 Anos
              </strong>
              <span className="mt-2 block text-sm text-white/70">de trajetória em Santos</span>
            </div>
            <div className="border-l border-white/25 pl-6">
              <strong className="block text-4xl font-extrabold tracking-[-0.05em] md:text-5xl">
                5.0 ★
              </strong>
              <span className="mt-2 block text-sm text-white/70">nota máxima no Google Maps</span>
            </div>
            <div className="border-l border-white/25 pl-6">
              <strong className="block text-4xl font-extrabold tracking-[-0.05em] md:text-5xl">
                100% 3D
              </strong>
              <span className="mt-2 block text-sm text-white/70">fluxo óptico digital</span>
            </div>
            <div className="border-l border-white/25 pl-6">
              <strong className="block text-4xl font-extrabold tracking-[-0.05em] md:text-5xl">
                Cooperado
              </strong>
              <span className="mt-2 block text-sm text-white/70">CRO/SP 81.026</span>
            </div>
          </div>
        </section>

        {/* 8. SOBRE O DR. GILVAN & AUTORIDADE NA MÍDIA (ESTILO LUMINA) */}
        <section id="sobre" className="section-space bg-white">
          <div className="container-site">
            <Reveal>
              <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
                <div>
                  <p className="eyebrow">Responsável Técnico</p>
                  <h2 className="section-title mt-5">Experiência, ciência e dedicação pessoal.</h2>
                </div>
                <p className="max-w-sm text-sm leading-6 text-muted">
                  Especialista em Implantodontia, Biomimética e Odontologia Estética com atendimento
                  humanizado.
                </p>
              </div>
            </Reveal>

            <div className="mt-12 grid gap-8 lg:grid-cols-12 items-stretch">
              {/* Card Dr. Gilvan */}
              <div className="lg:col-span-6 flex">
                <Reveal className="w-full flex">
                  <article className="group flex w-full flex-col justify-between overflow-hidden rounded-[28px] border border-line bg-ice/40 p-5 sm:p-7">
                    <div className="relative aspect-[4/4.2] w-full overflow-hidden rounded-[22px] bg-white">
                      <Image
                        src="/gilvan/banner.png"
                        alt="Dr. Gilvan Salvadori Ferro"
                        fill
                        unoptimized
                        className="object-contain object-bottom transition duration-700 group-hover:scale-[1.02]"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                    <div className="px-1 pt-6">
                      <h3 className="text-xl font-extrabold tracking-[-0.02em] text-navy">
                        Dr. Gilvan Salvadori Ferro
                      </h3>
                      <p className="mt-1 text-sm font-semibold text-primary">
                        Cirurgião-Dentista • Implantes & Biomimética (CRO/SP 81.026)
                      </p>
                      <p className="mt-3 text-sm leading-6 text-muted">
                        Cirurgião-dentista cooperado, o Dr. Gilvan se destaca pelo cuidado atencioso e
                        por explicar cada etapa com calma e clareza para que o paciente tenha total
                        segurança em todas as decisões clínicas.
                      </p>
                    </div>
                  </article>
                </Reveal>
              </div>

              {/* Card Autoridade / Mídia Record TV (Em proporção 3:4 vertical real nítida) */}
              <div className="lg:col-span-6 flex">
                <Reveal className="w-full flex">
                  <div className="flex w-full flex-col justify-between overflow-hidden rounded-[28px] border border-line bg-canvas p-5 sm:p-7">
                    <div className="grid gap-6 sm:grid-cols-[180px_1fr] items-center">
                      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-slate-900 shadow-sm">
                        <Image
                          src="/gilvan/image copy 7.png"
                          alt="Dr. Gilvan no Balanço Geral da Record TV"
                          fill
                          unoptimized
                          className="object-cover object-top"
                          sizes="(max-width: 640px) 100vw, 200px"
                        />
                        <div className="absolute bottom-2 left-2 right-2 rounded-lg bg-navy/85 px-2 py-1 text-[10px] font-bold text-white text-center backdrop-blur">
                          <Video className="size-3 inline mr-1 text-sky-400" />
                          Record TV
                        </div>
                      </div>

                      <div>
                        <span className="rounded-full bg-ice px-3 py-1 text-xs font-bold text-primary">
                          Entrevista Balanço Geral
                        </span>
                        <h4 className="mt-3 text-lg font-extrabold text-navy leading-snug">
                          Referência em saúde bucal na Baixada Santista
                        </h4>
                        <p className="mt-2 text-xs leading-5 text-muted">
                          Convidado para esclarecer temas de saúde oral, implantes e prevenção em
                          emissoras de TV, reforçando sua credibilidade clínica e compromisso ético.
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 pt-5 border-t border-line grid grid-cols-2 gap-4 text-xs">
                      <div>
                        <strong className="text-navy block font-bold">Diagnóstico Claro</strong>
                        <span className="text-muted text-[11px]">Transparência em cada indicação</span>
                      </div>
                      <div>
                        <strong className="text-navy block font-bold">Cooperado Ativo</strong>
                        <span className="text-muted text-[11px]">Padrões rigorosos de excelência</span>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* 9. DEPOIMENTOS EM CARROSSEL INTERATIVO ROBUSTO (SEM RESPOSTAS, SEM BUGS) */}
        <section id="depoimentos" className="section-space bg-canvas">
          <div className="container-site">
            <Reveal className="text-center">
              <p className="eyebrow justify-center">Avaliações do Google</p>
              <h2 className="section-title mx-auto mt-5 max-w-2xl">
                Cuidado percebido por quem passa por aqui.
              </h2>
              <p className="mt-3 text-base text-muted max-w-xl mx-auto">
                Confira o que pacientes reais dizem sobre a atenção, o conforto do consultório e os
                resultados dos tratamentos com o Dr. Gilvan.
              </p>
            </Reveal>

            {/* Carrossel Interativo Sem Buracos */}
            <div className="relative mt-14">
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-out"
                  style={{
                    transform: `translateX(-${currentSlide * (100 / visibleCount)}%)`,
                  }}
                >
                  {topReviews.map((testimonial, idx) => (
                    <div
                      key={idx}
                      className="flex-shrink-0 px-2.5 sm:px-3"
                      style={{ width: `${100 / visibleCount}%` }}
                    >
                      <blockquote className="flex h-full min-h-[260px] flex-col justify-between rounded-[24px] border border-line bg-white p-6 sm:p-7 shadow-soft">
                        <div>
                          <div className="flex items-center justify-between">
                            <Quote className="size-7 text-primary" />
                            <div className="flex items-center gap-1">
                              <span className="flex text-amber-400" aria-label="5 estrelas">
                                {[1, 2, 3, 4, 5].map((star) => (
                                  <Star key={star} className="size-3.5 fill-current" />
                                ))}
                              </span>
                              <span className="ml-1 text-[11px] font-bold text-muted">5.0</span>
                            </div>
                          </div>

                          <p className="mt-5 text-[14px] sm:text-[15px] leading-relaxed text-ink">
                            “{testimonial.text}”
                          </p>
                        </div>

                        <div className="mt-6 border-t border-line pt-4 flex items-center justify-between">
                          <div>
                            <strong className="text-sm text-navy block font-bold">
                              {testimonial.name}
                            </strong>
                            <span className="text-[11px] text-muted">{testimonial.detail}</span>
                          </div>
                          {testimonial.badge && (
                            <span className="rounded-full bg-ice px-2.5 py-0.5 text-[10px] font-bold text-primary">
                              {testimonial.badge}
                            </span>
                          )}
                        </div>
                      </blockquote>
                    </div>
                  ))}
                </div>
              </div>

              {/* Botões de Navegação do Carrossel */}
              <div className="mt-8 flex items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={prevSlide}
                  aria-label="Avaliação anterior"
                  className="grid size-11 place-items-center rounded-full border border-line bg-white text-navy shadow-sm transition hover:bg-ice hover:text-primary active:scale-95"
                >
                  <ChevronLeft className="size-5" />
                </button>

                {/* Indicadores de bolinha (Dots) sincronizados com o número real de páginas */}
                <div className="flex gap-2">
                  {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setCurrentSlide(i)}
                      aria-label={`Ir para avaliação ${i + 1}`}
                      className={`h-2.5 rounded-full transition-all ${currentSlide === i ? "w-8 bg-primary" : "w-2.5 bg-line hover:bg-muted/40"
                        }`}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={nextSlide}
                  aria-label="Próxima avaliação"
                  className="grid size-11 place-items-center rounded-full border border-line bg-white text-navy shadow-sm transition hover:bg-ice hover:text-primary active:scale-95"
                >
                  <ChevronRight className="size-5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 10. BANNER CTA (ESTILO LUMINA - NAVY ROUNDED BOX) */}
        <section className="px-4 pb-4 sm:px-6 sm:pb-6">
          <Reveal>
            <div className="container-site relative overflow-hidden rounded-[32px] bg-navy px-6 py-14 text-white sm:px-12 md:py-20">
              <div className="absolute -right-20 -top-32 size-80 rounded-full border border-white/10" />
              <div className="absolute -bottom-32 right-28 size-72 rounded-full border border-white/10" />
              <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-sky-300">
                    Seu próximo passo
                  </p>
                  <h2 className="mt-5 max-w-2xl text-3xl font-extrabold tracking-[-0.04em] sm:text-4xl md:text-5xl">
                    Pronto para recuperar a segurança e o prazer de sorrir?
                  </h2>
                  <p className="mt-4 max-w-xl leading-7 text-white/65">
                    Converse com a nossa equipe no WhatsApp e agende uma avaliação com o Dr. Gilvan
                    Salvadori Ferro no Boqueirão, Santos.
                  </p>
                </div>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-extrabold text-navy transition hover:bg-ice"
                >
                  <MessageCircle className="size-5" /> Agendar pelo WhatsApp
                </a>
              </div>
            </div>
          </Reveal>
        </section>

        {/* 11. CONTATO E LOCALIZAÇÃO (ESTILO LUMINA) */}
        <section id="contato" className="section-space bg-white">
          <div className="container-site grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20">
            <Reveal>
              <p className="eyebrow">Contato e localização</p>
              <h2 className="section-title mt-5">Estamos no Boqueirão, em Santos.</h2>
              <p className="mt-5 max-w-md leading-7 text-muted">
                Fácil acesso na Av. Conselheiro Nébias, com total comodidade e segurança. Será um
                prazer receber você.
              </p>
              <div className="mt-9 space-y-6">
                <ContactRow icon={MapPin} title="Endereço" lines={[clinic.address]} />
                <ContactRow
                  icon={Phone}
                  title="Telefone & WhatsApp"
                  lines={[
                    `WhatsApp: ${clinic.whatsappDisplay}`,
                    clinic.phoneDisplay ? `Telefone fixo: ${clinic.phoneDisplay}` : "",
                  ].filter(Boolean)}
                />
                {clinic.hours && <ContactRow icon={Clock3} title="Horários" lines={clinic.hours} />}
                {clinic.instagram && (
                  <ContactRow icon={Instagram} title="Instagram" lines={[clinic.instagram]} />
                )}
              </div>
            </Reveal>

            <Reveal>
              <div className="relative grid min-h-[450px] place-items-center overflow-hidden rounded-[30px] border border-line bg-ice p-8 text-center">
                <div className="map-grid absolute inset-0 opacity-50" />
                <div className="relative">
                  <span className="mx-auto grid size-16 place-items-center rounded-full bg-primary text-white shadow-soft">
                    <MapPin className="size-7" />
                  </span>
                  <strong className="mt-6 block text-xl text-navy">
                    {clinic.city} — {clinic.state}
                  </strong>
                  <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-muted">
                    {clinic.address}
                  </p>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      clinic.address,
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="button-secondary mt-7 bg-white"
                  >
                    Ver no Google Maps <ArrowRight className="size-4" />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      {/* 12. FOOTER (ESTILO LUMINA) */}
      <footer className="bg-navy py-10 text-white">
        <div className="container-site flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xl font-extrabold tracking-[-0.03em]">{clinic.clinicName}</p>
            <p className="mt-2 text-xs text-white/50">
              Implantodontia, Biomimética e Odontologia Digital no Boqueirão • Santos/SP.
            </p>
          </div>
          <div className="text-xs text-white/45">
            <p>© {new Date().getFullYear()} Dr. Gilvan Salvadori Ferro • CRO/SP 81.026</p>
            <p className="mt-1">Atendimento humanizado com hora marcada.</p>
          </div>
        </div>
      </footer>

      {/* 13. WHATSAPP FLUTUANTE (ESTILO LUMINA) */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Agendar pelo WhatsApp"
        className="fixed bottom-5 right-5 z-40 grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#20bd5a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        <MessageCircle className="size-6" fill="currentColor" strokeWidth={1.5} />
      </a>
    </>
  );
}

function ContactRow({
  icon: Icon,
  title,
  lines,
}: {
  icon: typeof MapPin;
  title: string;
  lines: string[];
}) {
  return (
    <div className="flex gap-4">
      <span className="grid size-11 shrink-0 place-items-center rounded-full bg-ice text-primary">
        <Icon className="size-5" />
      </span>
      <div>
        <h3 className="text-sm font-extrabold text-navy">{title}</h3>
        {lines.map((line) => (
          <p key={line} className="mt-1 text-sm leading-6 text-muted">
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}
