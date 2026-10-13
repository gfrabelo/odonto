import { clinics } from "@/data/clinics";
import { ClinicLanding } from "@/components/clinic-landing";
import { YohanaLanding } from "@/components/yohana-landing";
import { GilvanLanding } from "@/components/gilvan-landing";
import { CareWayLanding } from "@/components/careway-landing";
import { SteinertLanding } from "@/components/steinert-landing";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type PageProps = { params: Promise<{ clinicSlug: string }> };

export function generateStaticParams() {
  return Object.keys(clinics).map((clinicSlug) => ({ clinicSlug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { clinicSlug } = await params;
  const clinic = clinics[clinicSlug];
  if (!clinic) return {};

  const isGilvan = clinic.slug === "dr-gilvan-salvadori";
  const isYohana = clinic.slug === "dra-yohana-vitoria";
  const isCareWay = clinic.slug === "care-way-odontologia";
  const isDentsPremium = clinic.slug === "dents-premium";
  const isSteinert = clinic.slug === "clinica-steinert";
  
  const title = isSteinert
    ? "Clínica Steinert | Implantes e Facetas em Praia Grande"
    : isDentsPremium
    ? "Dents Premium Implantes | Dentista em Praia Grande"
    : isGilvan
    ? `${clinic.clinicName} | Implantes, Biomimética & Odontologia Digital em Santos`
    : isYohana
    ? `${clinic.clinicName} | Odontologia & Harmonização Facial em ${clinic.city}`
    : isCareWay
    ? `${clinic.clinicName} | Odontologia Humanizada em Santos`
    : `Dentista em ${clinic.city} | ${clinic.clinicName}`;

  const description = isSteinert
    ? "Implantes, facetas, alinhadores e reabilitação oral com atendimento humanizado em Praia Grande. Mais de 2 mil sorrisos transformados."
    : isDentsPremium
    ? "Implantes dentários, próteses dentárias, estética e harmonização facial no Boqueirão, Praia Grande. Dents Premium: nota 4,8 em 229 avaliações."
    : isGilvan
    ? `${clinic.clinicName} (CRO/SP 81.026): Implantes dentários, escaneamento digital 3D sem moldagens, biomimética e facetas no Boqueirão, Santos. Avaliação 5.0 no Google.`
    : isYohana
    ? `${clinic.clinicName}: odontologia estética e harmonização facial com naturalidade em ${clinic.city}, ${clinic.state}.`
    : isCareWay
    ? `${clinic.clinicName}: prevenção, reabilitação oral e atendimento odontológico humanizado em Santos, SP.`
    : `${clinic.clinicName}: odontologia moderna e atendimento humanizado em ${clinic.city}, ${clinic.state}.`;

  return {
    title,
    description,
    openGraph: { title, description, locale: "pt_BR", type: "website" },
  };
}

export default async function ClinicPage({ params }: PageProps) {
  const { clinicSlug } = await params;
  const clinic = clinics[clinicSlug];
  if (!clinic) notFound();
  if (clinic.slug === "dr-gilvan-salvadori") return <GilvanLanding clinic={clinic} />;
  if (clinic.slug === "dra-yohana-vitoria") return <YohanaLanding clinic={clinic} />;
  if (clinic.slug === "care-way-odontologia") return <CareWayLanding clinic={clinic} />;
  if (clinic.slug === "clinica-steinert") return <SteinertLanding clinic={clinic} />;
  return <ClinicLanding clinic={clinic} />;
}
