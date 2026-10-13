import { SteinertLanding } from "@/components/steinert-landing";
import { clinics, defaultClinicSlug } from "@/data/clinics";

export default function Home() {
  return <SteinertLanding clinic={clinics[defaultClinicSlug]} />;
}
