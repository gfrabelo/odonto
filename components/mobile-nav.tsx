"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  ["Início", "#inicio"],
  ["Tratamentos", "#tratamentos"],
  ["A Clínica", "#clinica"],
  ["Equipe", "#equipe"],
  ["Depoimentos", "#depoimentos"],
  ["Contato", "#contato"],
];

export function MobileNav({ whatsappUrl }: { whatsappUrl: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="grid size-11 place-items-center rounded-full border border-line bg-white text-navy"
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        aria-expanded={open}
      >
        {open ? <X className="size-5" /> : <Menu className="size-5" />}
      </button>
      {open && (
        <div className="absolute left-4 right-4 top-[76px] rounded-3xl border border-line bg-white p-3 shadow-soft">
          <nav className="flex flex-col" aria-label="Navegação mobile">
            {links.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-semibold text-ink hover:bg-ice"
              >
                {label}
              </a>
            ))}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-2 rounded-full bg-primary px-5 py-3 text-center text-sm font-extrabold text-white"
            >
              Agendar avaliação
            </a>
          </nav>
        </div>
      )}
    </div>
  );
}
