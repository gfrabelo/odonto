"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  ["Início", "#inicio"],
  ["Tratamentos", "#tratamentos"],
  ["Sobre", "#sobre"],
  ["Naturalidade", "#naturalidade"],
  ["Contato", "#contato"],
];

export function MobileNav({
  whatsappUrl,
  variant = "default",
  links: customLinks,
  contactLabel = "Agendar avaliação",
}: {
  whatsappUrl: string;
  variant?: "default" | "yohana" | "careway";
  links?: string[][];
  contactLabel?: string;
}) {
  const [open, setOpen] = useState(false);
  const isYohana = variant === "yohana";
  const isCareWay = variant === "careway";
  const menuLinks = customLinks ?? links;

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className={`grid size-11 place-items-center rounded-full border ${isYohana ? "border-espresso/15 bg-ivory text-espresso" : isCareWay ? "border-[#183b40]/10 bg-white text-[#183b40]" : "border-line bg-white text-navy"}`}
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        aria-expanded={open}
      >
        {open ? <X className="size-5" /> : <Menu className="size-5" />}
      </button>
      {open && (
        <div className={`absolute left-4 right-4 top-[76px] rounded-3xl border p-3 shadow-soft ${isYohana ? "border-espresso/10 bg-ivory" : isCareWay ? "border-[#183b40]/10 bg-[#f7fcfb]" : "border-line bg-white"}`}>
          <nav className="flex flex-col" aria-label="Navegação mobile">
            {menuLinks.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={`rounded-2xl px-4 py-3 text-sm font-semibold ${isYohana ? "text-espresso hover:bg-sand/60" : isCareWay ? "text-[#183b40] hover:bg-[#dff6f3]" : "text-ink hover:bg-ice"}`}
              >
                {label}
              </a>
            ))}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className={`mt-2 rounded-full px-5 py-3 text-center text-sm font-extrabold text-white ${isYohana ? "bg-espresso" : isCareWay ? "bg-[#70247f]" : "bg-primary"}`}
            >
              {contactLabel}
            </a>
          </nav>
        </div>
      )}
    </div>
  );
}
