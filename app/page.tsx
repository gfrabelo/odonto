import { defaultClinicSlug } from "@/data/clinics";
import { redirect } from "next/navigation";

export default function Home() {
  redirect(`/${defaultClinicSlug}`);
}
