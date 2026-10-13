import type { ClinicConfig } from "@/data/clinics";
import { createWhatsAppUrl } from "@/lib/whatsapp";
import {
  ArrowDownRight,
  ArrowRight,
  Clock,
  Coffee,
  GraduationCap,
  Instagram,
  MapPin,
  MessageCircle,
  Navigation,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";
import Image from "next/image";
import { MobileNav } from "./mobile-nav";
import { Reveal } from "./reveal";

const navLinks = [
  ["Início", "#inicio"],
  ["Tratamentos", "#tratamentos"],
  ["Consultório", "#consultorio"],
  ["Dra. Samara", "#sobre"],
  ["Avaliações", "#avaliacoes"],
  ["Como chegar", "#contato"],
];

const marquee = ["Preenchimento labial", "Rinomodelação", "Bioestimulador de colágeno", "Clareamento", "Bigode chinês", "Perfiloplastia", "Alinhadores", "Clínica geral"];

const odontoItems = ["Clareamento • Protocolo Diamond", "Alinhadores invisíveis", "Restaurações e prevenção", "Clínica geral para adultos"];
const hofItems = ["Preenchimento labial", "Rinomodelação", "Bioestimulador de colágeno", "Bigode chinês e perfiloplastia"];

const steps = [
  { title: "Escuta", text: "A primeira consulta é uma conversa. Você conta o que te incomoda e o que espera, sem pressa." },
  { title: "Planejamento", text: "Análise do sorriso e do rosto como um todo, com o plano e as possibilidades explicadas com calma." },
  { title: "Naturalidade", text: "Resultado que valoriza seus traços. A meta é você se reconhecer no espelho, só que melhor." },
];

const spaces = [
  { src: "/samara/recepcao.jpg", label: "Recepção" },
  { src: "/samara/sala-hof.jpg", label: "Sala de HOF" },
  { src: "/samara/cantinho-cafe.jpg", label: "Cantinho do café" },
  { src: "/samara/sala-dentista.jpg", label: "Sala de odontologia" },
  { src: "/samara/vista-por-do-sol.jpg", label: "Vista do 9º andar" },
];

const mapsUrl = "https://www.google.com/maps/search/?api=1&query=Dra.+Samara+Oliveira+Alameda+dos+Jurupis+455+Moema";
const mapsEmbed = "https://maps.google.com/maps?q=Dra.%20Samara%20Oliveira%2C%20Alameda%20dos%20Jurupis%2C%20455%2C%20Moema&z=16&output=embed";

function Stars({ className = "size-3.5" }: { className?: string }) {
  return (
    <span className="flex text-[var(--sa-gold-soft)]" aria-label="5 estrelas">
      {[0, 1, 2, 3, 4].map((i) => <Star key={i} className={`${className} fill-current`} />)}
    </span>
  );
}

export function SamaraLanding({ clinic }: { clinic: ClinicConfig }) {
  const whatsappUrl = createWhatsAppUrl(
    clinic.whatsapp,
    "Olá, Dra. Samara! Vi o seu site e gostaria de agendar uma avaliação.",
  );
  const instagramUrl = "https://instagram.com/drasamaraoliveira_";
  const clinicInstagramUrl = "https://instagram.com/samaraoliveiraclinic";
  const results = clinic.services.slice(0, 4);

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: clinic.clinicName,
    telephone: clinic.phoneDisplay,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Alameda dos Jurupis, 455 — Sala 92",
      addressLocality: "São Paulo",
      addressRegion: "SP",
      postalCode: "04088-001",
      addressCountry: "BR",
    },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "81" },
    openingHours: ["Mo-Fr 09:00-19:00", "Sa 08:30-15:00"],
    sameAs: [instagramUrl, clinicInstagramUrl],
  };

  return (
    <div className="samara-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} />

      <header className="sa-header fixed inset-x-0 top-0 z-50">
        <div className="container-site flex h-[78px] items-center justify-between">
          <a href="#inicio" className="flex items-center gap-3" aria-label="Dra. Samara Oliveira — início">
            <span className="sa-monogram" aria-hidden="true"><span /></span>
            <span className="sa-wordmark">Dra. Samara Oliveira<small>Odontologia & HOF</small></span>
          </a>
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
            {navLinks.map(([label, href]) => <a key={href} href={href} className="sa-nav-link">{label}</a>)}
          </nav>
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="sa-button sa-button-dark hidden lg:inline-flex">
            Agendar avaliação <ArrowRight className="size-4" />
          </a>
          <MobileNav whatsappUrl={whatsappUrl} variant="samara" links={navLinks} />
        </div>
      </header>

      <main>
        <section id="inicio" className="sa-hero relative overflow-hidden pt-[78px]">
          <span className="sa-vertical sa-vertical-left" aria-hidden="true">Dra. Samara Oliveira HOF</span>
          <div className="container-site grid min-h-[760px] items-center gap-12 py-14 lg:grid-cols-[1.05fr_.95fr] lg:py-16">
            <div className="relative z-10 max-w-[640px]">
              <p className="sa-eyebrow"><span /> {clinic.hero.eyebrow}</p>
              <h1 className="sa-hero-title mt-7">
                {clinic.hero.title}
                <em>{clinic.hero.highlight}</em>
              </h1>
              <p className="mt-7 max-w-[540px] text-base leading-7 text-[var(--sa-muted)] sm:text-lg sm:leading-8">{clinic.hero.description}</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href={whatsappUrl} target="_blank" rel="noreferrer" className="sa-button sa-button-gold min-h-14 px-7">
                  <MessageCircle className="size-5" /> Agendar minha avaliação
                </a>
                <a href="#tratamentos" className="sa-button sa-button-outline min-h-14 px-7">
                  Ver tratamentos <ArrowDownRight className="size-4" />
                </a>
              </div>
              <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-4 border-t border-[var(--sa-line)] pt-6">
                <div className="flex items-center gap-3">
                  <Stars />
                  <span className="text-sm font-bold text-[var(--sa-ink)]">5,0 no Google</span>
                  <span className="text-xs text-[var(--sa-muted)]">81 avaliações</span>
                </div>
                <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-[.14em] text-[var(--sa-muted)]"><MapPin className="size-4 text-[var(--sa-gold)]" /> Moema • São Paulo</span>
              </div>
            </div>

            <div className="relative mx-auto h-[540px] w-full max-w-[470px] sm:h-[620px]">
              <div className="sa-arch-outline absolute inset-x-0 bottom-0 top-0" aria-hidden="true" />
              <div className="sa-arch-photo absolute inset-x-5 bottom-4 top-5 overflow-hidden">
                <Image src={clinic.doctors?.[0].image ?? ""} alt="Dra. Samara Oliveira, cirurgiã-dentista em Moema" fill priority className="object-cover object-[center_18%]" sizes="(max-width: 1024px) 100vw, 40vw" />
              </div>
              <Image src="/samara/logo-selo.png" alt="" width={132} height={132} className="sa-seal absolute -right-2 top-4 sm:-right-8" aria-hidden="true" />
              <div className="sa-float-card absolute -left-2 bottom-10 sm:-left-10">
                <ShieldCheck className="size-6 text-[var(--sa-gold)]" strokeWidth={1.5} />
                <div><strong>Cirurgiã-dentista</strong><span>Esp. Harmonização Orofacial • {clinic.cro}</span></div>
              </div>
            </div>
          </div>
        </section>

        <div className="sa-marquee" aria-hidden="true">
          <div className="sa-marquee-track">
            {[...marquee, ...marquee].map((item, index) => <span key={`${item}-${index}`}>{item}<i>✦</i></span>)}
          </div>
        </div>

        <section className="section-space sa-duo">
          <div className="container-site">
            <Reveal>
              <div className="mx-auto max-w-3xl text-center">
                <p className="sa-eyebrow justify-center"><span /> Um só olhar, dois cuidados <span /></p>
                <h2 className="sa-section-title mt-6">Sorriso e rosto pensados <em>juntos.</em></h2>
                <p className="mx-auto mt-6 max-w-xl leading-7 text-[var(--sa-muted)]">Você não precisa de um profissional para os dentes e outro para o rosto. Aqui, o planejamento considera os dois, para que tudo converse.</p>
              </div>
            </Reveal>
            <div className="mt-14 grid gap-6 lg:grid-cols-2">
              <Reveal>
                <article className="sa-duo-card">
                  <div className="sa-duo-photo"><Image src="/samara/sala-hof.jpg" alt="Sala de harmonização orofacial" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 20vw" /></div>
                  <div>
                    <span className="sa-duo-tag">HOF</span>
                    <h3>Harmonização Orofacial</h3>
                    <p>Equilíbrio e naturalidade para lábios, nariz, contorno e pele.</p>
                    <ul>{hofItems.map((item) => <li key={item}><Sparkles className="size-3.5" /> {item}</li>)}</ul>
                  </div>
                </article>
              </Reveal>
              <Reveal>
                <article className="sa-duo-card">
                  <div className="sa-duo-photo"><Image src="/samara/sala-dentista.jpg" alt="Consultório odontológico" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 20vw" /></div>
                  <div>
                    <span className="sa-duo-tag">Odonto</span>
                    <h3>Odontologia</h3>
                    <p>Saúde, estética e alinhamento do sorriso, do check-up ao clareamento.</p>
                    <ul>{odontoItems.map((item) => <li key={item}><Sparkles className="size-3.5" /> {item}</li>)}</ul>
                  </div>
                </article>
              </Reveal>
            </div>
          </div>
        </section>

        <section id="tratamentos" className="section-space sa-results">
          <div className="container-site">
            <Reveal>
              <div className="grid gap-7 lg:grid-cols-[1fr_.75fr] lg:items-end">
                <div>
                  <p className="sa-eyebrow"><span /> Tratamentos em destaque</p>
                  <h2 className="sa-section-title mt-6">Resultados que respeitam <em>quem você é.</em></h2>
                </div>
                <p className="max-w-md leading-7 text-[var(--sa-muted)] lg:justify-self-end">Casos reais publicados pela Dra. Samara. Cada rosto é único: o seu plano começa na avaliação.</p>
              </div>
            </Reveal>
            <div className="mt-14 grid grid-cols-2 gap-x-4 gap-y-10 lg:grid-cols-4 lg:gap-6">
              {results.map((service, index) => (
                <Reveal key={service.name}>
                  <article className="sa-result-card">
                    <div className="sa-result-photo">
                      <Image src={service.image} alt={`${service.name} — caso da Dra. Samara Oliveira`} fill className="object-cover" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
                      <span>0{index + 1}</span>
                    </div>
                    <h3>{service.name}</h3>
                    <p>{service.description}</p>
                    <a href={createWhatsAppUrl(clinic.whatsapp, `Olá, Dra. Samara! Vi o seu site e gostaria de saber mais sobre ${service.name.toLowerCase()}.`)} target="_blank" rel="noreferrer">Quero avaliar <ArrowRight className="size-3.5" /></a>
                  </article>
                </Reveal>
              ))}
            </div>
            <p className="mt-8 text-center text-[11px] uppercase tracking-[.14em] text-[var(--sa-muted)]/80">Resultados podem variar de pessoa para pessoa.</p>

            <Reveal>
              <div className="sa-diamond mt-16">
                <div className="sa-diamond-icon">◇</div>
                <div className="flex-1">
                  <p className="sa-eyebrow sa-eyebrow-light"><span /> Protocolo exclusivo</p>
                  <h3 className="mt-3">Clareamento <em>Diamond</em></h3>
                  <p className="mt-3 max-w-xl text-white/65">Seu sorriso mais branco e iluminado, com resultado natural e acompanhamento da Dra. Samara em cada etapa.</p>
                </div>
                <a href={createWhatsAppUrl(clinic.whatsapp, "Olá, Dra. Samara! Vi o seu site e quero saber mais sobre o Clareamento Diamond.")} target="_blank" rel="noreferrer" className="sa-button sa-button-light">Quero meu sorriso Diamond <ArrowRight className="size-4" /></a>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="section-space sa-method">
          <div className="container-site">
            <Reveal>
              <div className="mx-auto max-w-3xl text-center">
                <p className="sa-eyebrow justify-center"><span /> Como funciona <span /></p>
                <h2 className="sa-section-title mt-6">Planejado em detalhes, <em>do primeiro “oi”.</em></h2>
              </div>
            </Reveal>
            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {steps.map((step, index) => (
                <Reveal key={step.title}>
                  <div className="sa-step">
                    <span className="sa-step-number">0{index + 1}</span>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="consultorio" className="section-space sa-space overflow-hidden">
          <div className="container-site">
            <Reveal>
              <div className="grid gap-7 lg:grid-cols-[1fr_.8fr] lg:items-end">
                <div>
                  <p className="sa-eyebrow sa-eyebrow-light"><span /> O consultório</p>
                  <h2 className="sa-section-title sa-title-light mt-6">Do cafezinho à vista <em>do nono andar.</em></h2>
                </div>
                <p className="max-w-md leading-7 text-white/60 lg:justify-self-end">Um espaço pensado para você chegar e já se sentir bem: recepção aconchegante, cantinho do café e salas com luz natural no coração de Moema.</p>
              </div>
            </Reveal>
            <div className="sa-arch-gallery mt-14">
              {spaces.map((space) => (
                <Reveal key={space.src}>
                  <figure className="sa-arch-item">
                    <div className="sa-arch-frame"><Image src={space.src} alt={space.label} fill className="object-cover" sizes="(max-width: 640px) 70vw, 20vw" /></div>
                    <figcaption>{space.label}</figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
            <Reveal>
              <blockquote className="sa-space-quote mt-14">
                <Coffee className="size-6 text-[var(--sa-gold-soft)]" strokeWidth={1.4} />
                <p>“Fui recebido com um delicioso chocolate quente e um biscoito de Nutella, um cuidado que faz toda a diferença.”</p>
                <footer>Lucas C. • avaliação no Google</footer>
              </blockquote>
            </Reveal>
          </div>
        </section>

        <section id="sobre" className="section-space sa-about">
          <div className="container-site grid items-center gap-14 lg:grid-cols-[.9fr_1.1fr] lg:gap-24">
            <Reveal>
              <div className="relative mx-auto max-w-[460px] pb-8 pl-6">
                <div className="sa-about-photo relative aspect-[4/5] overflow-hidden">
                  <Image src="/samara/instagram/post-014.jpg" alt="Dra. Samara Oliveira no centro cirúrgico" fill className="object-cover object-[center_30%]" sizes="(max-width: 1024px) 100vw, 40vw" />
                </div>
                <div className="sa-float-card absolute bottom-0 left-0">
                  <GraduationCap className="size-6 text-[var(--sa-gold)]" strokeWidth={1.5} />
                  <div><strong>Professora de HOF</strong><span>Forma outros profissionais</span></div>
                </div>
              </div>
            </Reveal>
            <Reveal>
              <p className="sa-eyebrow"><span /> {clinic.about.eyebrow}</p>
              <h2 className="sa-section-title mt-6">Técnica de quem ensina. <em>Cuidado de quem acolhe.</em></h2>
              <p className="mt-7 text-lg leading-8 text-[var(--sa-ink)]/80">{clinic.about.description}</p>
              <p className="mt-4 leading-7 text-[var(--sa-muted)]">{clinic.about.secondaryText}</p>
              <div className="sa-about-quote mt-8">
                <p>“Meu primeiro contato com a Dra. Samara foi ainda na faculdade, e a confiança foi tanta que continuei aos cuidados dela no consultório.”</p>
                <span>Elda O. S. • paciente</span>
              </div>
              <div className="mt-8 flex flex-wrap gap-2">
                {[clinic.cro ?? "", "Esp. Harmonização Orofacial", "Cursos de HOF", "Moema • SP"].map((item) => <span key={item} className="sa-pill">{item}</span>)}
              </div>
            </Reveal>
          </div>
        </section>

        <section id="avaliacoes" className="section-space sa-reviews">
          <div className="container-site">
            <Reveal>
              <div className="flex flex-col items-center text-center">
                <p className="sa-eyebrow justify-center"><span /> Quem já viveu a experiência <span /></p>
                <h2 className="sa-section-title mt-6">81 pacientes. <em>Nota 5,0.</em></h2>
                <div className="sa-google-badge mt-7">
                  <strong>5,0</strong>
                  <div><Stars className="size-4" /><span>Média de 81 avaliações no Google</span></div>
                </div>
              </div>
            </Reveal>
            <div className="mt-14 columns-1 gap-5 md:columns-2 lg:columns-3">
              {clinic.testimonials?.map((testimonial) => (
                <Reveal key={testimonial.name} className="mb-5 break-inside-avoid">
                  <blockquote className="sa-quote">
                    <Stars />
                    <p>“{testimonial.text}”</p>
                    <footer>
                      <span className="sa-avatar">{testimonial.name.charAt(0)}</span>
                      <div><strong>{testimonial.name}</strong><span>{testimonial.detail} • Google</span></div>
                    </footer>
                  </blockquote>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="contato" className="section-space sa-visit">
          <div className="container-site grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-stretch">
            <Reveal>
              <div className="flex h-full flex-col">
                <p className="sa-eyebrow"><span /> Como chegar</p>
                <h2 className="sa-section-title mt-6">Moema Office Building, <em>sala 92.</em></h2>
                <div className="mt-9 grid gap-6">
                  <div className="sa-info-row">
                    <MapPin className="size-5" strokeWidth={1.5} />
                    <div><strong>Endereço</strong><p>Alameda dos Jurupis, 455 — Sala 92<br />Moema, São Paulo — SP • 04088-001</p></div>
                  </div>
                  <div className="sa-info-row">
                    <Navigation className="size-5" strokeWidth={1.5} />
                    <div><strong>Ao chegar</strong><p>Entrada pela recepção do prédio. Suba ao 9º andar e, ao sair do elevador, vire à esquerda: a sala já estará à vista.</p></div>
                  </div>
                  <div className="sa-info-row">
                    <Clock className="size-5" strokeWidth={1.5} />
                    <div><strong>Horários</strong>{clinic.hours?.map((hour) => <p key={hour}>{hour}</p>)}</div>
                  </div>
                </div>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <a href={whatsappUrl} target="_blank" rel="noreferrer" className="sa-button sa-button-gold min-h-13 px-6"><MessageCircle className="size-5" /> {clinic.whatsappDisplay}</a>
                  <a href={mapsUrl} target="_blank" rel="noreferrer" className="sa-button sa-button-outline min-h-13 px-6"><MapPin className="size-4" /> Abrir no Maps</a>
                </div>
              </div>
            </Reveal>
            <Reveal>
              <div className="sa-map">
                <iframe title="Mapa do consultório da Dra. Samara Oliveira" src={mapsEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              </div>
            </Reveal>
          </div>
        </section>

        <section className="sa-cta-section pb-16 sm:pb-24">
          <div className="container-site">
            <Reveal>
              <div className="sa-cta relative overflow-hidden px-6 py-16 text-center sm:px-12 lg:py-20">
                <Image src="/samara/logo-selo.png" alt="" width={110} height={110} className="sa-cta-seal mx-auto" aria-hidden="true" />
                <h2 className="sa-section-title sa-title-light mx-auto mt-8 max-w-3xl">Sua beleza merece ser <em>planejada em detalhes.</em></h2>
                <p className="mx-auto mt-5 max-w-lg leading-7 text-white/60">Agende sua avaliação pelo WhatsApp e converse diretamente com a equipe da Dra. Samara.</p>
                <a href={whatsappUrl} target="_blank" rel="noreferrer" className="sa-button sa-button-gold mt-9 min-h-14 px-8"><MessageCircle className="size-5" /> Agendar pelo WhatsApp</a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="sa-footer">
        <div className="container-site grid gap-8 py-10 md:grid-cols-[1fr_auto] md:items-center">
          <div className="flex items-center gap-4">
            <span className="sa-monogram" aria-hidden="true"><span /></span>
            <div>
              <p className="sa-wordmark">Dra. Samara Oliveira<small>Odontologia & Harmonização Orofacial</small></p>
              <p className="mt-2 text-xs text-[var(--sa-muted)]">Cirurgiã-dentista • {clinic.cro} • Moema, São Paulo</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-5 text-xs text-[var(--sa-muted)]">
            <a href={instagramUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-[var(--sa-gold)]"><Instagram className="size-4" /> @drasamaraoliveira_</a>
            <a href={clinicInstagramUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-[var(--sa-gold)]"><Instagram className="size-4" /> @samaraoliveiraclinic</a>
          </div>
        </div>
      </footer>

      <a href={whatsappUrl} target="_blank" rel="noreferrer" className="sa-floating-whatsapp" aria-label="Agendar pelo WhatsApp"><MessageCircle className="size-6" /></a>
    </div>
  );
}
