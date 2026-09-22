import { clinics } from "@/data/clinics";
import { ClinicLanding } from "@/components/clinic-landing";
import { YohanaLanding } from "@/components/yohana-landing";
import { GilvanLanding } from "@/components/gilvan-landing";
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
  
  const title = isGilvan
    ? `${clinic.clinicName} | Implantes, Biomimética & Odontologia Digital em Santos`
    : isYohana
    ? `${clinic.clinicName} | Odontologia & Harmonização Facial em ${clinic.city}`
    : `Dentista em ${clinic.city} | ${clinic.clinicName}`;

  const description = isGilvan
    ? `${clinic.clinicName} (CRO/SP 81.026): Implantes dentários, escaneamento digital 3D sem moldagens, biomimética e facetas no Boqueirão, Santos. Avaliação 5.0 no Google.`
    : isYohana
    ? `${clinic.clinicName}: odontologia estética e harmonização facial com naturalidade em ${clinic.city}, ${clinic.state}.`
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
  return <ClinicLanding clinic={clinic} />;
}
