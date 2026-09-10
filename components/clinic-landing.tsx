import type { ClinicConfig } from "@/data/clinics";
import { createWhatsAppUrl } from "@/lib/whatsapp";
import {
  ArrowDownRight,
  ArrowRight,
  BadgeCheck,
  CalendarDays,
  Check,
  Clock3,
  HeartHandshake,
  Instagram,
  MapPin,
  MessageCircle,
  Microscope,
  Phone,
  Quote,
  ShieldCheck,
  Sparkles,
  Star,
  UsersRound,
} from "lucide-react";
import Image from "next/image";
import { Brand } from "./brand";
import { MobileNav } from "./mobile-nav";
import { Reveal } from "./reveal";
import { ServicesAccordion } from "./services-accordion";

const navLinks = [
  ["Início", "#inicio"],
  ["Tratamentos", "#tratamentos"],
  ["A Clínica", "#clinica"],
  ["Equipe", "#equipe"],
  ["Depoimentos", "#depoimentos"],
  ["Contato", "#contato"],
];

const benefits = [
  { title: "Tecnologia moderna", text: "Recursos que apoiam diagnósticos e tratamentos precisos.", icon: Microscope },
  { title: "Profissionais qualificados", text: "Uma equipe que une experiência e atualização constante.", icon: BadgeCheck },
  { title: "Atendimento humanizado", text: "Escuta atenta e cuidado respeitoso em cada consulta.", icon: HeartHandshake },
  { title: "Agendamento simples", text: "Fale com a equipe diretamente pelo WhatsApp.", icon: CalendarDays },
];

const reasons = [
  { title: "Tecnologia", text: "Estrutura atual para um atendimento mais preciso.", icon: Microscope },
  { title: "Experiência", text: "Profissionais dedicados ao cuidado integral.", icon: ShieldCheck },
  { title: "Atendimento individual", text: "Cada plano começa pela sua história e necessidade.", icon: UsersRound },
  { title: "Conforto", text: "Ambientes leves para consultas mais tranquilas.", icon: Sparkles },
  { title: "Transparência", text: "Orientações claras em todas as etapas do tratamento.", icon: Check },
];

export function ClinicLanding({ clinic }: { clinic: ClinicConfig }) {
  const whatsappUrl = createWhatsAppUrl(clinic.whatsapp);
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
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/60 bg-white/85 backdrop-blur-xl">
        <div className="container-site flex h-[76px] items-center justify-between">
          <Brand name={clinic.clinicName} shortName={clinic.shortName} />
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
            {navLinks.map(([label, href]) => (
              <a key={href} href={href} className="text-[13px] font-bold text-ink/75 transition-colors hover:text-primary">
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
        <section id="inicio" className="relative overflow-hidden bg-ice pt-[76px]">
          <div className="hero-orbit hero-orbit-one" />
          <div className="hero-orbit hero-orbit-two" />
          <div className="container-site grid min-h-[730px] items-center gap-4 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:py-10">
            <div className="relative z-10 max-w-[640px] pt-3 lg:pt-0">
              <p className="eyebrow">{clinic.hero.eyebrow ?? "Odontologia moderna e humanizada"}</p>
              <h1 className="mt-6 text-[2.62rem] font-extrabold leading-[1.04] tracking-[-0.052em] text-navy sm:text-5xl lg:text-[3.35rem] xl:text-[4rem]">
                <span className="block text-balance xl:whitespace-nowrap">{clinic.hero.title}</span>
                <span className="block text-balance text-primary">{clinic.hero.highlight}</span>
              </h1>
              <p className="mt-6 max-w-lg text-base leading-7 text-muted sm:text-lg sm:leading-8">
                {clinic.hero.description}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={whatsappUrl} target="_blank" rel="noreferrer" className="button-primary min-h-14 px-6">
                  <MessageCircle className="size-5" /> Agendar avaliação
                </a>
                <a href="#tratamentos" className="button-secondary min-h-14 px-6">
                  Conheça os tratamentos <ArrowDownRight className="size-4" />
                </a>
              </div>
              {clinic.hero.socialProof && (
                <div className="mt-7 flex items-center gap-3 text-sm font-semibold text-ink/75">
                  <span className="flex -space-x-2" aria-hidden="true">
                    {[0, 1, 2].map((item) => (
                      <span key={item} className="grid size-8 place-items-center rounded-full border-2 border-ice bg-white text-[10px] font-extrabold text-primary">
                        {item + 1}
                      </span>
                    ))}
                  </span>
                  <span>{clinic.hero.socialProof}</span>
                </div>
              )}
            </div>

            <div className="hero-visual relative mx-auto h-[390px] w-full max-w-[620px] sm:h-[540px] lg:h-[650px]">
              <div className="tooth-halo" aria-hidden="true" />
              <div className="tooth-ring tooth-ring-outer" aria-hidden="true" />
              <div className="tooth-ring tooth-ring-inner" aria-hidden="true" />
              <svg
                aria-hidden="true"
                className="tooth-light-trail"
                viewBox="0 0 620 650"
                fill="none"
              >
                <path d="M68 411C153 513 362 548 516 417C624 324 568 169 429 124" />
                <path d="M97 449C235 584 485 510 536 345" />
              </svg>
              <span className="tooth-particle particle-one" aria-hidden="true" />
              <span className="tooth-particle particle-two" aria-hidden="true" />
              <span className="tooth-particle particle-three" aria-hidden="true" />
              <Image
                src="/images/hero-tooth-v2.png"
                alt="Dente em porcelana representando cuidado odontológico"
                fill
                priority
                className="hero-tooth object-contain"
                sizes="(max-width: 1024px) 100vw, 52vw"
              />
              <div className="absolute bottom-5 right-0 flex items-center gap-3 rounded-2xl border border-white bg-white/90 p-3.5 pr-5 shadow-soft backdrop-blur sm:bottom-16 sm:right-2">
                <span className="grid size-10 place-items-center rounded-xl bg-ice text-primary"><Clock3 className="size-5" /></span>
                <span><strong className="block text-xs font-extrabold text-navy">Horários flexíveis</strong><span className="text-[11px] text-muted">Agende pelo WhatsApp</span></span>
              </div>
            </div>
          </div>
        </section>

        <section aria-label="Diferenciais" className="border-b border-line bg-white">
          <div className="container-site grid sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map(({ title, text, icon: Icon }, index) => (
              <div key={title} className={`flex gap-4 py-7 sm:px-6 lg:py-9 ${index !== 0 ? "lg:border-l lg:border-line" : ""}`}>
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-ice text-primary"><Icon className="size-5" strokeWidth={1.8} /></span>
                <div><h2 className="text-sm font-extrabold text-navy">{title}</h2><p className="mt-1 text-xs leading-5 text-muted">{text}</p></div>
              </div>
            ))}
          </div>
        </section>

        <section id="tratamentos" className="section-space bg-canvas">
          <div className="container-site">
            <Reveal>
              <div className="mb-12 grid gap-6 lg:grid-cols-2 lg:items-end">
                <div><p className="eyebrow">Nossos tratamentos</p><h2 className="section-title mt-5">Cuidado completo para o seu sorriso.</h2></div>
                <p className="max-w-lg leading-7 text-muted lg:justify-self-end">Da prevenção aos tratamentos especializados, cada indicação parte de uma avaliação cuidadosa e de um plano feito para você.</p>
              </div>
            </Reveal>
            <div className="grid gap-8 lg:grid-cols-[1fr_340px] lg:gap-14">
              <Reveal><ServicesAccordion services={clinic.services} whatsappUrl={whatsappUrl} /></Reveal>
              <Reveal className="lg:sticky lg:top-28 lg:self-start">
                <aside className="relative overflow-hidden rounded-[28px] bg-navy p-7 text-white md:p-9">
                  <div className="absolute -right-10 -top-10 size-40 rounded-full border border-white/10" />
                  <MessageCircle className="size-8 text-sky-300" />
                  <h3 className="mt-10 text-2xl font-extrabold tracking-[-0.03em]">Não sabe qual tratamento procura?</h3>
                  <p className="mt-4 text-sm leading-6 text-white/65">Nossa equipe ajuda você a entender o melhor próximo passo com atenção e clareza.</p>
                  <a href={whatsappUrl} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-extrabold text-navy hover:bg-ice">Agende sua avaliação <ArrowRight className="size-4" /></a>
                </aside>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="section-space bg-white">
          <div className="container-site">
            <Reveal className="text-center"><p className="eyebrow justify-center">Por que nos escolher</p><h2 className="section-title mx-auto mt-5 max-w-2xl">Confiança se constrói em cada detalhe.</h2></Reveal>
            <div className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
              {reasons.map(({ title, text, icon: Icon }, index) => (
                <Reveal key={title}>
                  <article className="border-t border-line pt-6">
                    <span className="mb-8 flex items-center justify-between text-primary"><Icon className="size-6" strokeWidth={1.6} /><span className="text-[10px] font-extrabold text-muted/50">0{index + 1}</span></span>
                    <h3 className="font-extrabold text-navy">{title}</h3><p className="mt-3 text-sm leading-6 text-muted">{text}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="clinica" className="section-space overflow-hidden bg-ice/60">
          <div className="container-site grid items-center gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
            <Reveal>
              <p className="eyebrow">{clinic.about.eyebrow ?? "A clínica"}</p>
              <h2 className="section-title mt-5">{clinic.about.title}</h2>
              <p className="mt-6 leading-7 text-muted">{clinic.about.description}</p>
              {clinic.about.secondaryText && <p className="mt-4 leading-7 text-muted">{clinic.about.secondaryText}</p>}
              <a href="#contato" className="mt-8 inline-flex items-center gap-2 text-sm font-extrabold text-primary hover:text-navy">Conheça nossa estrutura <ArrowRight className="size-4" /></a>
            </Reveal>
            <Reveal>
              <div className="grid h-[460px] grid-cols-[1.15fr_.85fr] grid-rows-2 gap-3 sm:h-[560px] sm:gap-4">
                {clinic.clinicImages.slice(0, 3).map((src, index) => (
                  <div key={src} className={`relative overflow-hidden rounded-2xl sm:rounded-[28px] ${index === 0 ? "row-span-2" : ""}`}>
                    <Image src={src} alt={`Ambiente da ${clinic.clinicName}`} fill className="object-cover transition-transform duration-700 hover:scale-[1.03]" sizes={index === 0 ? "(max-width: 1024px) 60vw, 35vw" : "(max-width: 1024px) 40vw, 25vw"} />
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {clinic.stats && clinic.stats.length > 0 && (
          <section className="bg-primary py-12 text-white md:py-16">
            <div className="container-site grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {clinic.stats.map((stat) => <div key={stat.label} className="border-l border-white/25 pl-6"><strong className="block text-4xl font-extrabold tracking-[-0.05em] md:text-5xl">{stat.value}</strong><span className="mt-2 block text-sm text-white/70">{stat.label}</span></div>)}
            </div>
          </section>
        )}

        {clinic.doctors && clinic.doctors.length > 0 && (
          <section id="equipe" className="section-space bg-white">
            <div className="container-site">
              <Reveal><div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="eyebrow">Nossa equipe</p><h2 className="section-title mt-5">Especialistas que cuidam de pessoas.</h2></div><p className="max-w-sm text-sm leading-6 text-muted">Conhecimento técnico e um olhar atento para tornar cada atendimento mais tranquilo.</p></div></Reveal>
              <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {clinic.doctors.map((doctor) => (
                  <Reveal key={doctor.name}>
                    <article className="group">
                      <div className="relative aspect-[4/4.7] overflow-hidden rounded-[26px] bg-ice"><Image src={doctor.image} alt={doctor.name} fill className="object-cover object-top grayscale-[10%] transition duration-700 group-hover:scale-[1.025] group-hover:grayscale-0" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" /></div>
                      <div className="px-1 pt-5"><h3 className="text-lg font-extrabold tracking-[-0.02em] text-navy">{doctor.name}</h3><p className="mt-1 text-sm font-semibold text-primary">{doctor.specialty}</p>{doctor.cro && <p className="mt-1 text-xs text-muted">{doctor.cro}</p>}</div>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="px-4 pb-4 sm:px-6 sm:pb-6">
          <Reveal>
            <div className="container-site relative overflow-hidden rounded-[32px] bg-navy px-6 py-14 text-white sm:px-12 md:py-20">
              <div className="absolute -right-20 -top-32 size-80 rounded-full border border-white/10" /><div className="absolute -bottom-32 right-28 size-72 rounded-full border border-white/10" />
              <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div><p className="text-xs font-extrabold uppercase tracking-[0.18em] text-sky-300">Seu próximo passo</p><h2 className="mt-5 max-w-2xl text-3xl font-extrabold tracking-[-0.04em] sm:text-4xl md:text-5xl">Pronto para cuidar do seu sorriso?</h2><p className="mt-4 max-w-xl leading-7 text-white/65">Converse com nossa equipe e encontre o melhor horário para sua avaliação.</p></div>
                <a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-extrabold text-navy transition hover:bg-ice"> <MessageCircle className="size-5" /> Agendar pelo WhatsApp</a>
              </div>
            </div>
          </Reveal>
        </section>

        {clinic.testimonials && clinic.testimonials.length > 0 && (
          <section id="depoimentos" className="section-space bg-canvas">
            <div className="container-site">
              <Reveal className="text-center"><p className="eyebrow justify-center">Depoimentos</p><h2 className="section-title mx-auto mt-5 max-w-2xl">Cuidado percebido por quem passa por aqui.</h2></Reveal>
              <div className="mt-12 grid gap-5 lg:grid-cols-3">
                {clinic.testimonials.map((testimonial) => (
                  <Reveal key={testimonial.name}>
                    <blockquote className="flex h-full flex-col rounded-[24px] border border-line bg-white p-7">
                      <div className="flex items-center justify-between"><Quote className="size-7 text-primary" /><span className="flex text-amber-400" aria-label="5 estrelas">{[1,2,3,4,5].map((star) => <Star key={star} className="size-3.5 fill-current" />)}</span></div>
                      <p className="mt-8 flex-1 text-[15px] leading-7 text-ink">“{testimonial.text}”</p>
                      <footer className="mt-7 border-t border-line pt-5"><strong className="text-sm text-navy">{testimonial.name}</strong>{testimonial.detail && <span className="ml-2 text-xs text-muted">{testimonial.detail}</span>}</footer>
                    </blockquote>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        )}

        <section id="contato" className="section-space bg-white">
          <div className="container-site grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20">
            <Reveal>
              <p className="eyebrow">Contato e localização</p><h2 className="section-title mt-5">Estamos perto de você.</h2><p className="mt-5 max-w-md leading-7 text-muted">Escolha o melhor canal para falar com a nossa equipe. Será um prazer receber você.</p>
              <div className="mt-9 space-y-6">
                <ContactRow icon={MapPin} title="Endereço" lines={[clinic.address]} />
                <ContactRow icon={Phone} title="WhatsApp" lines={[clinic.whatsappDisplay]} />
                {clinic.hours && <ContactRow icon={Clock3} title="Horários" lines={clinic.hours} />}
                {clinic.instagram && <ContactRow icon={Instagram} title="Instagram" lines={[clinic.instagram]} />}
              </div>
            </Reveal>
            <Reveal>
              <div className="relative grid min-h-[450px] place-items-center overflow-hidden rounded-[30px] border border-line bg-ice p-8 text-center">
                <div className="map-grid absolute inset-0 opacity-50" /><div className="relative"><span className="mx-auto grid size-16 place-items-center rounded-full bg-primary text-white shadow-soft"><MapPin className="size-7" /></span><strong className="mt-6 block text-xl text-navy">{clinic.city} — {clinic.state}</strong><p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-muted">{clinic.address}</p><a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(clinic.address)}`} target="_blank" rel="noreferrer" className="button-secondary mt-7 bg-white">Ver no Google Maps <ArrowRight className="size-4" /></a></div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="bg-navy py-10 text-white">
        <div className="container-site flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div><p className="text-xl font-extrabold tracking-[-0.03em]">{clinic.clinicName}</p><p className="mt-2 text-xs text-white/50">Odontologia moderna e humanizada em {clinic.city}.</p></div>
          <div className="text-xs text-white/45"><p>© {new Date().getFullYear()} {clinic.clinicName}</p><p className="mt-1">As informações deste site têm caráter institucional.</p></div>
        </div>
      </footer>

      <a href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Agendar pelo WhatsApp" className="fixed bottom-5 right-5 z-40 grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#20bd5a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"><MessageCircle className="size-6" fill="currentColor" strokeWidth={1.5} /></a>
    </>
  );
}

function ContactRow({ icon: Icon, title, lines }: { icon: typeof MapPin; title: string; lines: string[] }) {
  return <div className="flex gap-4"><span className="grid size-11 shrink-0 place-items-center rounded-full bg-ice text-primary"><Icon className="size-5" /></span><div><h3 className="text-sm font-extrabold text-navy">{title}</h3>{lines.map((line) => <p key={line} className="mt-1 text-sm leading-6 text-muted">{line}</p>)}</div></div>;
}
