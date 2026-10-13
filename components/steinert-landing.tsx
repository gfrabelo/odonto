import type { ClinicConfig } from "@/data/clinics";
import { createWhatsAppUrl } from "@/lib/whatsapp";
import {
  ArrowDownRight,
  ArrowRight,
  Award,
  Check,
  Instagram,
  MapPin,
  MessageCircle,
  Quote,
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
  ["A clínica", "#clinica"],
  ["Dra. Nathalia", "#nathalia"],
  ["Avaliações", "#avaliacoes"],
];

const otherServices = ["Endodontia", "Periodontia", "Dentística", "Clínico geral"];

export function SteinertLanding({ clinic }: { clinic: ClinicConfig }) {
  const whatsappUrl = createWhatsAppUrl(
    clinic.whatsapp,
    "Olá! Conheci a Clínica Steinert pelo site e gostaria de agendar uma avaliação.",
  );
  const instagramUrl = "https://instagram.com/clinicasteinert";
  const doctor = clinic.doctors?.[0];

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: clinic.clinicName,
    telephone: clinic.phoneDisplay,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Praça Dr. Roberto Andraus, 11",
      addressLocality: "Praia Grande",
      addressRegion: "SP",
      postalCode: "11704-320",
      addressCountry: "BR",
    },
    sameAs: [instagramUrl],
  };

  return (
    <div className="steinert-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} />

      <header className="st-header fixed inset-x-0 top-0 z-50">
        <div className="container-site flex h-[82px] items-center justify-between">
          <a href="#inicio" className="st-brand" aria-label="Clínica Steinert — início">
            <Image src="/steinert/logo.png" alt="Clínica Steinert" width={148} height={56} priority />
          </a>
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
            {navLinks.map(([label, href]) => <a key={href} href={href} className="st-nav-link">{label}</a>)}
          </nav>
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="st-button st-button-dark hidden lg:inline-flex">
            Agendar avaliação <ArrowRight className="size-4" />
          </a>
          <MobileNav whatsappUrl={whatsappUrl} variant="steinert" links={navLinks} />
        </div>
      </header>

      <main>
        <section id="inicio" className="st-hero relative overflow-hidden pt-[82px]">
          <div className="st-hero-line st-line-one" aria-hidden="true" />
          <div className="st-hero-line st-line-two" aria-hidden="true" />
          <div className="container-site grid min-h-[790px] items-center gap-12 py-14 lg:grid-cols-[1.02fr_.98fr] lg:py-20">
            <div className="relative z-10 max-w-[660px]">
              <p className="st-eyebrow"><span /> {clinic.hero.eyebrow}</p>
              <h1 className="st-hero-title mt-7">Seu sorriso<br />de volta. <em>Sua<br />confiança também.</em></h1>
              <p className="mt-7 max-w-[570px] text-base leading-7 text-[#4d5f80] sm:text-lg sm:leading-8">{clinic.hero.description}</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href={whatsappUrl} target="_blank" rel="noreferrer" className="st-button st-button-gold min-h-14 px-6">
                  <MessageCircle className="size-5" /> Agendar minha avaliação
                </a>
                <a href="#tratamentos" className="st-button st-button-outline min-h-14 px-6">
                  Conhecer tratamentos <ArrowDownRight className="size-4" />
                </a>
              </div>
              <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 border-t border-[#0b1938]/10 pt-6 text-[11px] font-extrabold uppercase tracking-[.13em] text-[#0b1938]/55">
                <span className="flex items-center gap-2"><ShieldCheck className="size-4 text-[#b28b4f]" /> Atendimento humanizado</span>
                <span className="flex items-center gap-2"><MapPin className="size-4 text-[#b28b4f]" /> Cidade Ocian • Praia Grande</span>
              </div>
            </div>

            <div className="st-portrait-stage relative mx-auto h-[550px] w-full max-w-[560px] sm:h-[650px]">
              <div className="st-portrait-bg absolute inset-x-3 bottom-0 top-6 sm:inset-x-8" />
              <div className="st-portrait absolute inset-x-7 bottom-0 top-0 overflow-hidden sm:inset-x-12">
                <Image src="/steinert/nathalia.jpg" alt="Dra. Nathalia Steinert na Clínica Steinert" fill priority className="object-cover object-[center_22%]" sizes="(max-width: 1024px) 100vw, 46vw" />
                <div className="st-photo-vignette" />
              </div>
              <div className="st-proof-card absolute -left-1 bottom-8 sm:-left-5 sm:bottom-12">
                <strong>+2 mil</strong><span>sorrisos<br />transformados</span>
              </div>
              <div className="st-review-card absolute right-0 top-10 sm:-right-4">
                <div className="flex text-[#c79c58]">{[0,1,2,3,4].map((i) => <Star key={i} className="size-3 fill-current" />)}</div>
                <strong>Excelente</strong><span>60+ avaliações</span>
              </div>
            </div>
          </div>
        </section>

        <section className="st-trust-strip">
          <div className="container-site grid gap-6 py-7 sm:grid-cols-3">
            {clinic.stats?.map((stat) => (
              <div key={stat.label} className="st-stat"><strong>{stat.value}</strong><span>{stat.label}</span></div>
            ))}
          </div>
        </section>

        <section id="tratamentos" className="section-space st-services">
          <div className="container-site">
            <Reveal>
              <div className="grid gap-7 lg:grid-cols-[1fr_.8fr] lg:items-end">
                <div>
                  <p className="st-eyebrow"><span /> Cuidado completo</p>
                  <h2 className="st-section-title mt-5 max-w-3xl">Tratamentos para voltar a sorrir <em>sem insegurança.</em></h2>
                </div>
                <p className="max-w-lg leading-7 text-[#5c6b87] lg:justify-self-end">Cada tratamento começa com uma avaliação cuidadosa. Você entende as possibilidades e participa das decisões em todas as etapas.</p>
              </div>
            </Reveal>
            <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {clinic.services.slice(0, 6).map((service, index) => (
                <Reveal key={service.name}>
                  <article className={`st-service-card ${index === 0 ? "st-service-featured" : ""}`}>
                    <span className="st-service-index">0{index + 1}</span>
                    <div className="st-service-icon">{index === 0 ? <Award /> : index === 1 ? <Sparkles /> : <ShieldCheck />}</div>
                    <h3>{service.name}</h3>
                    <p>{service.description}</p>
                    <a href={whatsappUrl} target="_blank" rel="noreferrer">Quero saber mais <ArrowRight className="size-4" /></a>
                  </article>
                </Reveal>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
              <span className="mr-2 text-xs font-bold uppercase tracking-[.12em] text-[#0b1938]/45">Também cuidamos de</span>
              {otherServices.map((item) => <span key={item} className="st-service-pill"><Check className="size-3" /> {item}</span>)}
            </div>
          </div>
        </section>

        <section id="clinica" className="section-space st-clinic-section overflow-hidden">
          <div className="container-site grid items-center gap-14 lg:grid-cols-[.86fr_1.14fr] lg:gap-20">
            <Reveal>
              <div>
                <p className="st-eyebrow st-eyebrow-light"><span /> Uma experiência diferente</p>
                <h2 className="st-section-title st-title-light mt-5">Um espaço pensado para você se sentir <em>seguro e acolhido.</em></h2>
                <p className="mt-7 max-w-xl text-lg leading-8 text-white/65">A clínica nasceu para unir excelência técnica a uma experiência leve. Aqui, o cuidado começa na escuta e continua com transparência durante todo o tratamento.</p>
                <div className="mt-9 grid gap-4 sm:grid-cols-2">
                  {["Explicações claras", "Planejamento individual", "Equipe especializada", "Ambiente acolhedor"].map((item) => (
                    <span key={item} className="flex items-center gap-3 text-sm font-bold text-white/85"><Check className="size-4 text-[#dfbb7d]" /> {item}</span>
                  ))}
                </div>
                <a href={whatsappUrl} target="_blank" rel="noreferrer" className="st-button st-button-light mt-10">Conhecer a clínica <ArrowRight className="size-4" /></a>
              </div>
            </Reveal>
            <div className="st-gallery-grid">
              <Reveal><div className="st-gallery-main"><Image src="/steinert/gallery-1.jpg" alt="Recepção da Clínica Steinert" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 36vw" /></div></Reveal>
              <Reveal><div className="st-gallery-small"><Image src="/steinert/gallery-2.jpg" alt="Ambiente da Clínica Steinert" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 18vw" /></div></Reveal>
              <Reveal><div className="st-gallery-small"><Image src="/steinert/gallery-3.jpg" alt="Consultório da Clínica Steinert" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 18vw" /></div></Reveal>
            </div>
          </div>
        </section>

        <section id="nathalia" className="section-space st-about">
          <div className="container-site grid items-center gap-14 lg:grid-cols-[.92fr_1.08fr] lg:gap-24">
            <Reveal>
              <div className="relative mx-auto max-w-[490px] pb-10 pr-7">
                <div className="st-about-photo relative aspect-[4/5] overflow-hidden">
                  <Image src="/steinert/clinic-1.jpg" alt="Dra. Nathalia Steinert" fill className="object-cover object-top" sizes="(max-width: 1024px) 100vw, 42vw" />
                </div>
                <div className="st-cro-card absolute bottom-0 right-0"><Award className="size-6" /><div><strong>Dra. Nathalia Steinert</strong><span>CRO/SP 120.954</span></div></div>
              </div>
            </Reveal>
            <Reveal>
              <p className="st-eyebrow"><span /> À frente da Clínica Steinert</p>
              <h2 className="st-section-title mt-5">Conhecimento técnico com um cuidado <em>genuinamente humano.</em></h2>
              <p className="mt-7 text-lg leading-8 text-[#425577]">{clinic.about.description}</p>
              <p className="mt-4 leading-7 text-[#68758d]">{clinic.about.secondaryText}</p>
              <div className="mt-8 border-l-2 border-[#c79c58] pl-6">
                <p className="font-serif text-xl italic leading-8 text-[#0b1938]">“Cada pessoa é única e merece atenção especializada em todas as etapas do tratamento.”</p>
              </div>
              <div className="mt-8 grid gap-3 text-sm sm:grid-cols-2">
                {["Graduação — UNISANTA, 2016", "Residência em Saúde da Família", "Formação em Implantodontia", "Laminados Cerâmicos"].map((item) => <span key={item} className="flex items-center gap-3 font-bold text-[#0b1938]"><Check className="size-4 text-[#b28b4f]" /> {item}</span>)}
              </div>
            </Reveal>
          </div>
        </section>

        <section id="avaliacoes" className="section-space st-testimonials">
          <div className="container-site">
            <Reveal>
              <div className="mx-auto max-w-3xl text-center">
                <p className="st-eyebrow justify-center"><span /> Histórias reais</p>
                <h2 className="st-section-title mt-5">O cuidado que fica na <em>memória de quem viveu.</em></h2>
                <div className="mt-6 flex items-center justify-center gap-3 text-sm font-bold text-[#0b1938]"><span className="flex text-[#c79c58]">★★★★★</span> Excelente, com base em 60+ avaliações</div>
              </div>
            </Reveal>
            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {clinic.testimonials?.map((testimonial) => (
                <Reveal key={testimonial.name}>
                  <blockquote className="st-quote">
                    <Quote className="size-8 text-[#c79c58]" strokeWidth={1.4} />
                    <p>“{testimonial.text}”</p>
                    <footer><div className="flex text-[#c79c58]">★★★★★</div><strong>{testimonial.name}</strong><span>{testimonial.detail}</span></footer>
                  </blockquote>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="contato" className="st-cta-section py-16 sm:py-20">
          <div className="container-site">
            <Reveal>
              <div className="st-cta relative overflow-hidden px-6 py-14 sm:px-12 lg:px-16 lg:py-20">
                <div className="st-cta-ring" aria-hidden="true" />
                <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
                  <div>
                    <p className="st-eyebrow st-eyebrow-light"><span /> Seu próximo passo</p>
                    <h2 className="st-section-title st-title-light mt-5 max-w-3xl">Seu novo sorriso pode começar com <em>uma conversa.</em></h2>
                    <p className="mt-5 max-w-xl leading-7 text-white/65">Fale com nossa equipe e agende uma avaliação na Clínica Steinert, em Praia Grande.</p>
                    <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/65"><span className="flex items-center gap-2"><MapPin className="size-4 text-[#dfbb7d]" /> Cidade Ocian • Praia Grande</span><span>{clinic.phoneDisplay}</span></div>
                  </div>
                  <a href={whatsappUrl} target="_blank" rel="noreferrer" className="st-button st-button-gold min-h-14 px-7"><MessageCircle className="size-5" /> Agendar pelo WhatsApp</a>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="st-footer">
        <div className="container-site grid gap-8 py-10 md:grid-cols-[1fr_auto] md:items-end">
          <div><Image src="/steinert/logo.png" alt="Clínica Steinert" width={160} height={61} className="st-footer-logo" /><p className="mt-4 max-w-md text-xs leading-6 text-white/45">Odontologia humanizada, implantes e estética na Baixada Santista.</p></div>
          <div className="flex flex-wrap items-center gap-5 text-xs text-white/55"><a href={instagramUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white"><Instagram className="size-4" /> @clinicasteinert</a><span>Dra. Nathalia Steinert • CRO/SP 120.954</span></div>
        </div>
      </footer>

      <a href={whatsappUrl} target="_blank" rel="noreferrer" className="st-floating-whatsapp" aria-label="Agendar pelo WhatsApp"><MessageCircle className="size-6" /></a>
    </div>
  );
}
