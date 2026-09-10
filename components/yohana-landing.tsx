import type { ClinicConfig } from "@/data/clinics";
import { createWhatsAppUrl } from "@/lib/whatsapp";
import {
  ArrowDownRight,
  ArrowRight,
  Check,
  Instagram,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import { MobileNav } from "./mobile-nav";
import { Reveal } from "./reveal";

const navLinks = [
  ["Início", "#inicio"],
  ["Tratamentos", "#tratamentos"],
  ["Sobre", "#sobre"],
  ["Naturalidade", "#naturalidade"],
  ["Contato", "#contato"],
];

const pillars = [
  {
    number: "01",
    title: "Escuta antes de tudo",
    text: "Cada plano começa entendendo o que incomoda você — e também o que deseja preservar.",
  },
  {
    number: "02",
    title: "Indicação consciente",
    text: "Procedimentos escolhidos com critério, respeitando proporções, anatomia e individualidade.",
  },
  {
    number: "03",
    title: "Resultado que faz sentido",
    text: "Mudanças sutis, elegantes e coerentes com a sua expressão. Você continua sendo você.",
  },
];

export function YohanaLanding({ clinic }: { clinic: ClinicConfig }) {
  const isYohana = clinic.slug === "dra-yohana-vitoria";
  const instagramUrl = `https://instagram.com/${clinic.instagram?.replace("@", "") ?? ""}`;
  const hasWhatsapp = Boolean(clinic.whatsapp);
  const contactUrl = hasWhatsapp
    ? createWhatsAppUrl(
        clinic.whatsapp,
        `Olá! Conheci o trabalho de ${clinic.clinicName} pelo site e gostaria de agendar uma avaliação.`,
      )
    : instagramUrl;
  const contactLabel = hasWhatsapp ? "Agendar avaliação" : "Falar pelo Instagram";
  const doctor = clinic.doctors?.[0];
  const professionalName = doctor?.name ?? clinic.clinicName;
  const registration = doctor?.cro;

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: clinic.clinicName,
    address: clinic.address,
    areaServed: `${clinic.city}, ${clinic.state}`,
    ...(clinic.whatsapp ? { telephone: clinic.whatsappDisplay } : {}),
    ...(clinic.instagram ? { sameAs: [instagramUrl] } : {}),
  };

  return (
    <div className="yohana-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />

      <header className="site-header fixed inset-x-0 top-0 z-50">
        <div className="container-site flex h-[78px] items-center justify-between">
          <a href="#inicio" className="brand-signature" aria-label={`${clinic.clinicName} — início`}>
            <Image src="/yohana/logo-restaurada.png" alt="" width={42} height={42} className="brand-logo" />
            <span>
              <strong>{clinic.shortName ?? clinic.clinicName}</strong>
              <small>{isYohana ? "Odontologia & Estética Facial" : "Odontologia"}</small>
            </span>
          </a>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Navegação principal">
            {navLinks.map(([label, href]) => (
              <a key={href} href={href} className="nav-link">
                {label}
              </a>
            ))}
          </nav>

          <a href={contactUrl} target="_blank" rel="noreferrer" className="y-button-primary hidden lg:inline-flex">
            {contactLabel} <ArrowRight className="size-4" />
          </a>
          <MobileNav whatsappUrl={contactUrl} variant="yohana" />
        </div>
      </header>

      <main>
        <section id="inicio" className="hero-section relative overflow-hidden pt-[78px]">
          <div className="hero-grain" aria-hidden="true" />
          <div className="container-site grid min-h-[760px] items-center gap-10 py-14 lg:grid-cols-[0.94fr_1.06fr] lg:py-16">
            <div className="relative z-10 max-w-[650px]">
              <p className="y-eyebrow">{clinic.hero.eyebrow ?? "Odontologia moderna e humanizada"}</p>
              <h1 className="hero-title mt-7">
                <span>{clinic.hero.title}</span>
                <span><em>{clinic.hero.highlight}</em></span>
              </h1>
              <p className="mt-7 max-w-[550px] text-base leading-7 text-espresso/70 sm:text-lg sm:leading-8">
                {clinic.hero.description}
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href={contactUrl} target="_blank" rel="noreferrer" className="y-button-primary inline-flex min-h-14 px-6">
                  {hasWhatsapp ? <MessageCircle className="size-5" /> : <Instagram className="size-5" />}
                  {contactLabel}
                </a>
                <a href="#tratamentos" className="y-button-secondary inline-flex min-h-14 px-6">
                  Conhecer tratamentos <ArrowDownRight className="size-4" />
                </a>
              </div>
              <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-espresso/10 pt-6 text-xs font-bold uppercase tracking-[0.13em] text-espresso/55">
                <span>{professionalName}</span>
                <span className="hidden size-1 rounded-full bg-copper/50 sm:block" />
                {registration && <span>{registration}</span>}
                {registration && <span className="hidden size-1 rounded-full bg-copper/50 sm:block" />}
                <span>{clinic.city} • {clinic.state}</span>
              </div>
            </div>

            <div className="hero-portrait-wrap relative mx-auto h-[530px] w-full max-w-[600px] sm:h-[640px] lg:h-[670px]">
              <div className="hero-portrait-frame absolute inset-x-4 bottom-0 top-10 overflow-hidden sm:inset-x-10 lg:inset-x-0">
                <Image
                  src={doctor?.image ?? clinic.clinicImages[0]}
                  alt={doctor?.name ?? clinic.clinicName}
                  fill
                  priority
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 52vw"
                />
                <div className="hero-photo-wash" />
              </div>
              <div className="hero-seal absolute right-0 top-4 sm:right-3 lg:-right-8">
                <Sparkles className="size-5" strokeWidth={1.3} />
                <span>Naturalidade<br />em cada detalhe</span>
              </div>
              <div className="absolute bottom-5 left-0 max-w-[250px] rounded-[22px] border border-white/70 bg-ivory/90 p-5 shadow-editorial backdrop-blur-md sm:left-2 sm:bottom-10">
                <p className="font-serif text-xl italic leading-tight text-espresso">“Sem excessos.<br />Sem perder a identidade.”</p>
              </div>
            </div>
          </div>
        </section>

        <section className="marquee-strip" aria-label="Áreas de atuação">
          <div className="container-site flex flex-wrap items-center justify-center gap-x-8 gap-y-3 py-5 text-[11px] font-bold uppercase tracking-[0.2em] sm:justify-between">
            <span>Odontologia estética</span><i>✦</i><span>Harmonização facial</span><i>✦</i><span>Saúde bucal</span><i>✦</i><span>Beleza com identidade</span>
          </div>
        </section>

        <section id="tratamentos" className="section-space bg-ivory">
          <div className="container-site">
            <Reveal>
              <div className="grid gap-7 lg:grid-cols-[1fr_.8fr] lg:items-end">
                <div>
                  <p className="y-eyebrow">Possibilidades de cuidado</p>
                  <h2 className="y-section-title mt-5 max-w-2xl">Sorriso e face pensados <em>em harmonia.</em></h2>
                </div>
                <p className="max-w-lg leading-7 text-espresso/65 lg:justify-self-end">
                  Tratamentos planejados a partir de uma avaliação individual. A indicação certa não segue tendências: respeita você.
                </p>
              </div>
            </Reveal>

            <div className="mt-14 grid gap-x-5 gap-y-12 md:grid-cols-2 lg:grid-cols-4">
              {clinic.services.map((service) => {
                const isBotox = service.name === "Toxina botulínica";
                return (
                <Reveal key={service.name}>
                  <article className="service-card group">
                    <div className="service-media relative aspect-[4/5] overflow-hidden rounded-[26px]">
                      {isBotox ? (
                        <div className="absolute inset-0 grid grid-rows-2 gap-px bg-ivory">
                          <div className="relative overflow-hidden">
                            <Image src={service.image} alt="Resultado antes da aplicação de toxina botulínica" fill className="object-cover object-top transition duration-700 group-hover:scale-[1.025]" sizes="(max-width: 768px) 100vw, 25vw" />
                            <span className="comparison-label">Antes</span>
                          </div>
                          <div className="relative overflow-hidden">
                            <Image src={service.image} alt="Resultado depois da aplicação de toxina botulínica" fill className="object-cover object-bottom transition duration-700 group-hover:scale-[1.025]" sizes="(max-width: 768px) 100vw, 25vw" />
                            <span className="comparison-label">Depois</span>
                          </div>
                        </div>
                      ) : (
                        <Image src={service.image} alt={service.name} fill className="object-cover transition duration-700 group-hover:scale-[1.025]" sizes="(max-width: 768px) 100vw, 25vw" />
                      )}
                    </div>
                    <div className="px-1 pt-6">
                      <h3 className="font-serif text-[1.7rem] leading-none text-espresso">{service.name}</h3>
                      <p className="mt-4 text-sm leading-6 text-espresso/60">{service.description}</p>
                      <a href={contactUrl} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.12em] text-copper">
                        Saiba mais <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                      </a>
                    </div>
                  </article>
                </Reveal>
                );
              })}
            </div>
            <p className="mt-7 text-center text-xs leading-5 text-espresso/45">A indicação de qualquer procedimento depende de avaliação clínica individual.</p>
          </div>
        </section>

        <section id="sobre" className="section-space overflow-hidden bg-sand">
          <div className="container-site grid items-center gap-14 lg:grid-cols-[.9fr_1.1fr] lg:gap-24">
            <Reveal>
              <div className="relative mx-auto max-w-[500px] pb-12 pl-5 sm:pl-12">
                <div className="relative aspect-[4/5.1] overflow-hidden rounded-[180px_180px_24px_24px]">
                  <Image src={clinic.clinicImages[0]} alt="Dra. Yohana Vitoria em atendimento" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 45vw" />
                </div>
                <div className="about-signature absolute bottom-0 left-0 flex items-center gap-3 rounded-full border border-white/70 bg-ivory/90 p-2.5 pr-5 shadow-editorial backdrop-blur-md sm:left-3">
                  <Image src="/yohana/logo-restaurada.png" alt="" width={52} height={52} className="rounded-full" />
                  <p className="text-[9px] font-extrabold uppercase tracking-[0.16em] text-espresso/60">Cuidado<br />autoral</p>
                </div>
              </div>
            </Reveal>
            <Reveal>
              <p className="y-eyebrow">{clinic.about.eyebrow ?? `Sobre ${professionalName}`}</p>
              <h2 className="y-section-title mt-5">{isYohana ? <>Técnica para transformar.<br /><em>Sensibilidade para preservar.</em></> : clinic.about.title}</h2>
              <p className="mt-7 max-w-xl text-lg leading-8 text-espresso/70">{clinic.about.description}</p>
              {clinic.about.secondaryText && <p className="mt-4 max-w-xl leading-7 text-espresso/60">{clinic.about.secondaryText}</p>}
              <div className="mt-9 grid gap-3 border-t border-espresso/10 pt-7 text-sm sm:grid-cols-2">
                {(isYohana
                  ? ["Cirurgiã-Dentista", registration, "Odontologia estética", "Harmonização facial"]
                  : ["Atendimento individual", registration, "Planejamento cuidadoso", "Resultados naturais"]
                ).filter(Boolean).map((item) => (
                  <span key={item} className="flex items-center gap-3 font-bold text-espresso"><Check className="size-4 text-copper" /> {item}</span>
                ))}
              </div>
              <a href={instagramUrl} target="_blank" rel="noreferrer" className="mt-9 inline-flex items-center gap-2 text-sm font-extrabold text-copper">
                <Instagram className="size-5" /> Acompanhe no Instagram <ArrowRight className="size-4" />
              </a>
            </Reveal>
          </div>
        </section>

        <section id="naturalidade" className="section-space bg-espresso text-ivory">
          <div className="container-site">
            <Reveal>
              <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr]">
                <div>
                  <p className="y-eyebrow y-eyebrow-light">A beleza do natural</p>
                  <ShieldCheck className="mt-12 size-12 text-rose" strokeWidth={1.1} />
                </div>
                <h2 className="y-section-title y-section-title-light max-w-4xl">Não é sobre mudar quem você é.<br /><em>É sobre se reconhecer ainda mais.</em></h2>
              </div>
            </Reveal>
            <div className="mt-16 grid border-y border-white/15 lg:grid-cols-3">
              {pillars.map((pillar, index) => (
                <Reveal key={pillar.number}>
                  <article className={`min-h-[260px] py-9 lg:px-9 ${index > 0 ? "border-t border-white/15 lg:border-l lg:border-t-0" : ""}`}>
                    <span className="text-[10px] font-bold tracking-[0.2em] text-rose">{pillar.number}</span>
                    <h3 className="mt-10 font-serif text-2xl">{pillar.title}</h3>
                    <p className="mt-4 max-w-sm text-sm leading-6 text-white/55">{pillar.text}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="contato" className="section-space bg-blush">
          <div className="container-site">
            <Reveal>
              <div className="relative overflow-hidden rounded-[32px] bg-ivory px-6 py-14 shadow-editorial sm:px-12 lg:px-16 lg:py-20">
                <Image src="/yohana/logo-restaurada.png" alt="" width={430} height={430} className="pointer-events-none absolute -right-20 -top-32 opacity-[0.075] mix-blend-multiply" />
                <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
                  <div>
                    <p className="y-eyebrow">Seu cuidado começa aqui</p>
                    <h2 className="y-section-title mt-5 max-w-3xl">Vamos conversar sobre o que faz sentido <em>para você?</em></h2>
                    <p className="mt-5 max-w-xl leading-7 text-espresso/60">Agende uma avaliação com a Dra. Yohana e receba uma orientação personalizada para o seu momento.</p>
                    <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm text-espresso/65">
                      <span className="flex items-center gap-2"><MapPin className="size-4 text-copper" /> Peruíbe • SP</span>
                      <a href={instagramUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-copper"><Instagram className="size-4 text-copper" /> {clinic.instagram}</a>
                    </div>
                  </div>
                  <a href={contactUrl} target="_blank" rel="noreferrer" className="y-button-primary inline-flex min-h-14 px-7">
                    {hasWhatsapp ? <MessageCircle className="size-5" /> : <Instagram className="size-5" />}
                    {contactLabel}
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="bg-espresso py-9 text-white">
        <div className="container-site flex flex-col gap-6 text-xs text-white/45 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <strong className="font-serif text-2xl font-normal text-ivory">{professionalName}</strong>
            <p className="mt-2">{doctor?.specialty}{registration ? ` • ${registration}` : ""}</p>
          </div>
          <div className="sm:text-right"><p>© {new Date().getFullYear()} Todos os direitos reservados.</p><p className="mt-1">Resultados variam conforme cada paciente.</p></div>
        </div>
      </footer>

      <a href={contactUrl} target="_blank" rel="noreferrer" aria-label={contactLabel} className="floating-contact">
        {hasWhatsapp ? <MessageCircle className="size-6" fill="currentColor" strokeWidth={1.5} /> : <Instagram className="size-6" />}
      </a>
    </div>
  );
}
