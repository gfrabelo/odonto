import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope, Tenor_Sans } from "next/font/google";
import "./globals.css";
import "./yohana.css";
import "./gilvan.css";
import "./careway.css";
import "./steinert.css";
import "./samara.css";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

const tenor = Tenor_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-tenor",
  weight: "400",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-cormorant",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Dra. Yohana Vitoria | Odontologia & Harmonização Facial",
  description: "Odontologia estética e harmonização facial com naturalidade em Peruíbe, SP.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${manrope.variable} ${cormorant.variable} ${tenor.variable}`}>{children}</body>
    </html>
  );
}
