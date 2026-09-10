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
}: {
  whatsappUrl: string;
  variant?: "default" | "yohana";
}) {
  const [open, setOpen] = useState(false);
  const isYohana = variant === "yohana";

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className={`grid size-11 place-items-center rounded-full border ${isYohana ? "border-espresso/15 bg-ivory text-espresso" : "border-line bg-white text-navy"}`}
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        aria-expanded={open}
      >
        {open ? <X className="size-5" /> : <Menu className="size-5" />}
      </button>
      {open && (
        <div className={`absolute left-4 right-4 top-[76px] rounded-3xl border p-3 shadow-soft ${isYohana ? "border-espresso/10 bg-ivory" : "border-line bg-white"}`}>
          <nav className="flex flex-col" aria-label="Navegação mobile">
            {links.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={`rounded-2xl px-4 py-3 text-sm font-semibold ${isYohana ? "text-espresso hover:bg-sand/60" : "text-ink hover:bg-ice"}`}
              >
                {label}
              </a>
            ))}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className={`mt-2 rounded-full px-5 py-3 text-center text-sm font-extrabold text-white ${isYohana ? "bg-espresso" : "bg-primary"}`}
            >
              Agendar avaliação
            </a>
          </nav>
        </div>
      )}
    </div>
  );
}
