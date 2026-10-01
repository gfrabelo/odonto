import { Sparkles } from "lucide-react";
import Image from "next/image";

export function Brand({ name, shortName, logo }: { name: string; shortName?: string; logo?: string }) {
  return (
    <a href="#inicio" className="group flex items-center gap-3" aria-label={`${name} — início`}>
      {logo ? (
        <span className="relative block size-11 overflow-hidden rounded-xl bg-navy shadow-sm transition-transform group-hover:-rotate-2">
          <Image src={logo} alt="" fill className="object-cover" sizes="44px" />
        </span>
      ) : (
        <span className="grid size-10 place-items-center rounded-full bg-primary text-white transition-transform group-hover:-rotate-6">
          <Sparkles className="size-4" strokeWidth={2} />
        </span>
      )}
      <span className="leading-none">
        <strong className="block text-[15px] font-extrabold tracking-[-0.03em] text-navy">
          {shortName ?? name}
        </strong>
        <span className="mt-1 block text-[9px] font-bold uppercase tracking-[0.19em] text-muted">
          Odontologia
        </span>
      </span>
    </a>
  );
}
