import type { ClinicConfig } from "@/data/clinics";
import {
  Activity,
  ArrowDownRight,
  ArrowRight,
  Check,
  Heart,
  HeartHandshake,
  Home,
  Instagram,
  MapPin,
  MessageCircle,
  Quote,
  ShieldCheck,
  Smile,
  Sparkles,
  Star,
  UsersRound,
} from "lucide-react";
import Image from "next/image";
import { MobileNav } from "./mobile-nav";
import { Reveal } from "./reveal";

const contactUrl = "https://wa.me/5513991903147";
const instagramUrl = "https://www.instagram.com/care.way/";

const navLinks = [
  ["Início", "#inicio"],
  ["Cuidado", "#cuidado"],
  ["Tratamentos", "#tratamentos"],
  ["Espaço", "#espaco"],
  ["Equipe", "#equipe"],
  ["Contato", "#contato"],
];

const carePillars = [
  {
    icon: HeartHandshake,
    title: "Escuta que acolhe",
    text: "Antes de qualquer procedimento, queremos entender você, seus receios e o que espera do cuidado.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança em cada etapa",
    text: "Explicações claras, protocolos rigorosos e decisões construídas com calma e transparência.",
  },
  {
    icon: Sparkles,
    title: "Experiência mais leve",
    text: "Ambiente, equipe e atendimento pensados para ressignificar sua relação com a odontologia.",
  },
];

const teamDescriptions: Record<string, string> = {
  "Dra. Nadyne Bittencourt":
    "Idealizadora da Care Way, atua há mais de 10 anos com ênfase em prevenção, reabilitação oral, DTM, dor orofacial e assistência em cuidados paliativos.",
  Vladimir:
    "Cirurgião-dentista e técnico em prótese dentária com 35 anos de dedicação, referência em cerâmica, cirurgia oral e implantodontia.",
  Silmara:
    "Esteticista especializada em terapias integrativas faciais e corporais, com abordagem naturalista voltada ao restabelecimento da saúde.",
};

export function CareWayLanding({ clinic }: { clinic: ClinicConfig }) {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: clinic.clinicName,
    address: { "@type": "PostalAddress", addressLocality: clinic.city, addressRegion: clinic.state },
    areaServed: `${clinic.city}, ${clinic.state}`,
    sameAs: [instagramUrl],
  };

  return (
    <div className="careway-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />

      <header className="cw-header fixed inset-x-0 top-0 z-50">
        <div className="container-site flex h-[76px] items-center justify-between">
          <a href="#inicio" className="cw-brand" aria-label="Care Way — início">
            <Image src="/careway/logo.png" alt="Care Way" width={54} height={54} className="cw-logo-image" priority />
            <span>
              <small>Odontologia humanizada</small>
            </span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
            {navLinks.map(([label, href]) => (
              <a key={href} href={href} className="cw-nav-link">{label}</a>
            ))}
          </nav>

          <a href={contactUrl} target="_blank" rel="noreferrer" className="cw-header-cta cw-button-primary">
            Agendar conversa <ArrowRight className="size-4" />
          </a>
          <MobileNav whatsappUrl={contactUrl} variant="careway" links={navLinks} contactLabel="Agendar conversa" />
        </div>
      </header>

      <main>
        <section id="inicio" className="cw-hero relative overflow-hidden pt-[76px]">
          <div className="cw-orb cw-orb-one" aria-hidden="true" />
          <div className="cw-orb cw-orb-two" aria-hidden="true" />
          <div className="container-site grid min-h-[760px] items-center gap-12 py-14 lg:grid-cols-[0.96fr_1.04fr] lg:py-16">
            <div className="relative z-10 max-w-[640px]">
              <p className="cw-eyebrow"><span /> Odontologia humanizada em Santos</p>
              <h1 className="cw-hero-title mt-6">Um jeito mais leve de <span>cuidar do seu sorriso.</span></h1>
              <p className="mt-7 max-w-[570px] text-base leading-7 text-[#36565a] sm:text-lg sm:leading-8">
                Escuta, acolhimento e cuidado individual para transformar a ida ao dentista em uma experiência tranquila — no seu tempo e com respeito à sua história.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href={contactUrl} target="_blank" rel="noreferrer" className="cw-button-primary min-h-14 px-6">
                  <MessageCircle className="size-5" /> Quero cuidar do meu sorriso
                </a>
                <a href="#cuidado" className="cw-button-secondary min-h-14 px-6">
                  Conhecer a Care Way <ArrowDownRight className="size-4" />
                </a>
              </div>
              <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3 border-t border-[#183b40]/10 pt-6 text-xs font-bold text-[#47666a]">
                <span className="flex items-center gap-2"><Check className="size-4 text-[#12aeb4]" /> Atendimento com hora reservada</span>
                <span className="flex items-center gap-2"><Check className="size-4 text-[#12aeb4]" /> Santos • SP</span>
              </div>
            </div>

            <div className="cw-hero-visual cw-tooth-stage relative mx-auto h-[540px] w-full max-w-[620px] sm:h-[620px]">
              <div className="cw-tooth-glow" aria-hidden="true" />
              <div className="cw-tooth-ring cw-tooth-ring-one" aria-hidden="true" />
              <div className="cw-tooth-ring cw-tooth-ring-two" aria-hidden="true" />
              <Image src="/images/hero-tooth-v2.png" alt="Representação tridimensional de um dente saudável" fill priority className="cw-tooth-image object-contain" sizes="(max-width: 1024px) 90vw, 48vw" />
              <div className="cw-hero-logo-card absolute right-0 top-5 z-10 sm:right-2">
                <Image src="/careway/logo.png" alt="Care Way" width={104} height={104} />
              </div>
              <div className="cw-floating-note absolute -left-2 bottom-8 z-10 sm:-left-8 sm:bottom-12">
                <span className="grid size-11 place-items-center rounded-full bg-[#e1f7f4] text-[#128f98]"><UsersRound className="size-5" /></span>
                <p><strong>Uma família</strong><br />dedicada ao seu cuidado</p>
              </div>
              <div className="cw-years-badge absolute bottom-5 right-3 z-10 sm:right-5">
                <strong>+10</strong><span>anos de<br />experiência clínica</span>
              </div>
            </div>
          </div>
        </section>

        <section className="cw-trust-strip" aria-label="Diferenciais Care Way">
          <div className="container-site grid gap-4 py-5 text-center text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#36565a] sm:grid-cols-3">
            <span>Prevenção & reabilitação</span>
            <span className="sm:border-x sm:border-[#183b40]/10">Cuidado no seu tempo</span>
            <span>Estética integrativa</span>
          </div>
        </section>

        <section id="cuidado" className="section-space bg-white">
          <div className="container-site">
            <Reveal>
              <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
                <div>
                  <p className="cw-eyebrow"><span /> Nossa forma de cuidar</p>
                  <h2 className="cw-section-title mt-5">Antes do tratamento,<br /><em>existe uma pessoa.</em></h2>
                </div>
                <p className="max-w-xl text-base leading-7 text-[#547176] lg:justify-self-end">
                  Na Care Way, cada atendimento começa pela escuta. Entendemos suas necessidades, seus receios e sua rotina para construir um cuidado possível, claro e individual.
                </p>
              </div>
            </Reveal>

            <div className="mt-14 grid gap-5 lg:grid-cols-3">
              {carePillars.map(({ icon: Icon, title, text }, index) => (
                <Reveal key={title}>
                  <article className={`cw-pillar ${index === 1 ? "cw-pillar-featured" : ""}`}>
                    <span className="cw-icon"><Icon className="size-6" strokeWidth={1.7} /></span>
                    <span className="cw-pillar-number">0{index + 1}</span>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </article>
                </Reveal>
              ))}
            </div>
            <Reveal>
              <div className="cw-family-story mt-7">
                <span className="cw-family-icon"><UsersRound className="size-7" /></span>
                <div>
                  <p className="cw-eyebrow"><span /> Nossa essência</p>
                  <h3>Uma clínica feita em família, com valores que passam por cada cuidado.</h3>
                  <p>Nadyne integra a Care Way ao lado de sua mãe, Silmara, e de seu pai, Vladimir. Cada tratamento carrega uma parte de quem são — seus valores profissionais, pessoais e tudo o que desejam construir através do trabalho em equipe.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="tratamentos" className="section-space cw-services-section">
          <div className="container-site">
            <Reveal>
              <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
                <div>
                  <p className="cw-eyebrow cw-eyebrow-light"><span /> Cuidado integrado</p>
                  <h2 className="cw-section-title cw-section-title-light mt-5 max-w-2xl">Soluções que acompanham <em>cada fase da vida.</em></h2>
                </div>
                <p className="max-w-md text-sm leading-7 text-white/60">Da prevenção à reabilitação, cada indicação depende de avaliação individual e conversa transparente.</p>
              </div>
            </Reveal>

            <div className="mt-14 grid gap-px overflow-hidden rounded-[28px] bg-white/10 md:grid-cols-2 lg:grid-cols-4">
              {clinic.services.map((service, index) => {
                const icons = [Heart, Activity, Smile, Sparkles, Home, UsersRound];
                const Icon = icons[index] ?? Heart;
                return (
                  <Reveal key={service.name}>
                    <article className="cw-service-card group">
                      <span className="cw-service-icon"><Icon className="size-5" /></span>
                      <span className="cw-service-index">0{index + 1}</span>
                      <h3>{service.name}</h3>
                      <p>{service.description}</p>
                      <a href={contactUrl} target="_blank" rel="noreferrer">Conversar com a equipe <ArrowRight className="size-4" /></a>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section id="espaco" className="section-space bg-[#f3faf8]">
          <div className="container-site">
            <Reveal>
              <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
                <div>
                  <p className="cw-eyebrow"><span /> Nosso espaço</p>
                  <h2 className="cw-section-title mt-5">Um ambiente para você <em>respirar tranquilo.</em></h2>
                </div>
                <p className="max-w-lg text-base leading-7 text-[#547176] lg:justify-self-end">Conforto, organização e cuidado nos detalhes para que a experiência comece antes mesmo do atendimento.</p>
              </div>
            </Reveal>

            <div className="cw-post-gallery mt-14">
              {[
                ["/careway/SaveClip.App_670155068_18407021356198356_7092336888368094566_n.jpg", "Hall receptivo e acessível da Care Way"],
                ["/careway/SaveClip.App_652765223_18073549421567061_2863389644068434622_n.jpg", "Estrutura de odontologia e tratamentos da Care Way"],
                ["/careway/SaveClip.App_654974047_18075111002409237_6925655896671095941_n.jpg", "Espaço de estética integrativa da Care Way"],
              ].map(([src, alt], index) => (
                <Reveal key={src} className={index === 1 ? "cw-post-featured" : ""}>
                  <figure className="cw-space-post">
                    <Image src={src} alt={alt} fill className="object-cover" sizes="(max-width: 768px) 88vw, 33vw" />
                  </figure>
                </Reveal>
              ))}
            </div>

            <Reveal>
              <div className="cw-access-list mt-7">
                {['Hall privativo', 'Acessibilidade', 'Sala climatizada', 'Cantinho do chá', 'Estacionamento avulso'].map((item) => (
                  <span key={item}><Check className="size-4" /> {item}</span>
                ))}
              </div>
            </Reveal>

            <Reveal>
              <div className="cw-safety mt-8 grid overflow-hidden rounded-[28px] bg-white lg:grid-cols-[0.76fr_1.24fr]">
                <div className="cw-safety-media relative min-h-[420px]">
                  <Image src="/careway/SaveClip.App_652745718_18106278610895303_2068465808562489305_n.jpg" alt="Protocolos de biossegurança da Care Way" fill className="object-contain" sizes="(max-width: 1024px) 100vw, 38vw" />
                </div>
                <div className="flex flex-col justify-center p-8 sm:p-12">
                  <span className="cw-icon"><ShieldCheck className="size-6" /></span>
                  <p className="cw-eyebrow mt-7"><span /> Biossegurança</p>
                  <h3 className="mt-4 text-3xl font-extrabold tracking-[-0.04em] text-[#183b40]">Rigor técnico também é uma forma de cuidado.</h3>
                  <p className="mt-5 leading-7 text-[#547176]">Protocolos de sanitização, autoclave, cuba ultrassônica e indicador biológico fazem parte da rotina para proteger cada paciente e toda a equipe.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="equipe" className="section-space bg-white">
          <div className="container-site">
            <Reveal className="text-center">
              <p className="cw-eyebrow justify-center"><span /> Quem cuida de você</p>
              <h2 className="cw-section-title mx-auto mt-5 max-w-3xl">Experiência que se soma.<br /><em>Cuidado que se multiplica.</em></h2>
            </Reveal>
            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {clinic.doctors?.map((doctor) => (
                <Reveal key={doctor.name}>
                  <article className="cw-team-card">
                    <div className="cw-team-photo">
                      <Image src={doctor.image} alt={doctor.name} fill className="cw-team-source" sizes="(max-width: 768px) 100vw, 33vw" />
                    </div>
                    <div className="p-6 sm:p-7">
                      <h3>{doctor.name}</h3>
                      <p className="cw-team-specialty">{doctor.specialty}</p>
                      {doctor.cro && <p className="cw-team-cro">{doctor.cro}</p>}
                      <p className="cw-team-description">{teamDescriptions[doctor.name]}</p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section-space cw-testimonials">
          <div className="container-site">
            <Reveal>
              <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
                <div>
                  <p className="cw-eyebrow"><span /> Experiências reais</p>
                  <h2 className="cw-section-title mt-5">O acolhimento é percebido <em>em cada detalhe.</em></h2>
                </div>
                <div className="flex items-center gap-3 lg:justify-self-end">
                  <span className="flex text-[#f2a531]">{[1, 2, 3, 4, 5].map((star) => <Star key={star} className="size-5 fill-current" />)}</span>
                  <strong className="text-sm text-[#183b40]">Avaliação 5,0</strong>
                </div>
              </div>
            </Reveal>
            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {clinic.testimonials?.map((testimonial) => (
                <Reveal key={testimonial.name}>
                  <blockquote className="cw-quote">
                    <Quote className="size-8 text-[#10aeb4]" strokeWidth={1.5} />
                    <p>“{testimonial.text}”</p>
                    <footer><strong>{testimonial.name}</strong><span>{testimonial.detail}</span></footer>
                  </blockquote>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="contato" className="px-4 pb-4 sm:px-6 sm:pb-6">
          <Reveal>
            <div className="cw-cta container-site relative overflow-hidden rounded-[34px] px-6 py-16 text-white sm:px-12 lg:px-16 lg:py-20">
              <div className="cw-cta-ring" aria-hidden="true" />
              <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#8ee8df]">Sua experiência começa aqui</p>
                  <h2 className="mt-5 max-w-3xl text-4xl font-extrabold tracking-[-0.05em] sm:text-5xl">Vamos conversar sobre o cuidado que faz sentido para você?</h2>
                  <p className="mt-5 max-w-xl leading-7 text-white/65">Fale com a equipe Care Way e dê o primeiro passo com tranquilidade, clareza e acolhimento.</p>
                  <div className="mt-7 flex flex-wrap gap-5 text-sm text-white/70">
                    <span className="flex items-center gap-2"><MapPin className="size-4 text-[#8ee8df]" /> Santos • SP</span>
                    <a href={instagramUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white"><Instagram className="size-4 text-[#8ee8df]" /> @care.way</a>
                    <a href="tel:+5513981178037" className="flex items-center gap-2 hover:text-white"><MessageCircle className="size-4 text-[#8ee8df]" /> (13) 9 8117-8037</a>
                  </div>
                </div>
                <a href={contactUrl} target="_blank" rel="noreferrer" className="cw-button-light min-h-14 px-7">
                  <MessageCircle className="size-5" /> Agendar atendimento
                </a>
              </div>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="cw-footer py-10 text-white">
        <div className="container-site flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
          <div className="cw-brand cw-brand-footer">
            <Image src="/careway/logo.png" alt="Care Way" width={64} height={64} className="cw-logo-image" />
            <span><small>Odontologia humanizada em Santos</small></span>
          </div>
          <div className="text-xs text-white/45 sm:text-right">
            <p>© {new Date().getFullYear()} Care Way Odontologia.</p>
            <p className="mt-1">Cada tratamento depende de avaliação individual.</p>
          </div>
        </div>
      </footer>

      <a href={contactUrl} target="_blank" rel="noreferrer" aria-label="Falar com a Care Way" className="cw-floating-contact">
        <MessageCircle className="size-6" fill="currentColor" strokeWidth={1.5} />
      </a>
    </div>
  );
}
