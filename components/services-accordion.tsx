"use client";

import type { Service } from "@/data/clinics";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export function ServicesAccordion({
  services,
  whatsappUrl,
}: {
  services: Service[];
  whatsappUrl: string;
}) {
  const [active, setActive] = useState(0);

  return (
    <div className="divide-y divide-line border-y border-line">
      {services.map((service, index) => {
        const isOpen = active === index;
        return (
          <article key={service.name}>
            <button
              type="button"
              onClick={() => setActive(isOpen ? -1 : index)}
              className="flex w-full items-center gap-4 py-5 text-left md:py-6"
              aria-expanded={isOpen}
            >
              <span className="w-8 text-xs font-bold tracking-[0.1em] text-primary">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="flex-1 text-lg font-bold tracking-[-0.02em] text-navy md:text-xl">
                {service.name}
              </span>
              <ChevronDown
                className={`size-5 text-primary transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
              />
            </button>
            <div className={`accordion-grid ${isOpen ? "is-open" : ""}`}>
              <div className="overflow-hidden">
                <div className="grid gap-5 pb-6 pl-0 md:grid-cols-[210px_1fr] md:pl-12">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-2xl md:aspect-[4/3]">
                    <Image
                      src={service.image}
                      alt={`Tratamento de ${service.name}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 210px"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-center md:max-w-md">
                    <p className="leading-7 text-muted">{service.description}</p>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-flex items-center gap-2 text-sm font-extrabold text-primary hover:text-navy"
                    >
                      Quero saber mais <ArrowUpRight className="size-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
