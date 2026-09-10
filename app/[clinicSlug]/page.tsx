import { clinics } from "@/data/clinics";
import { ClinicLanding } from "@/components/clinic-landing";
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

  const title = `Dentista em ${clinic.city} | ${clinic.clinicName}`;
  const description = `${clinic.clinicName}: odontologia moderna e atendimento humanizado em ${clinic.city}, ${clinic.state}. Agende sua avaliação.`;

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
  return <ClinicLanding clinic={clinic} />;
}
