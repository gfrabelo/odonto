import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-canvas px-6 text-center">
      <div>
        <p className="eyebrow">Página não encontrada</p>
        <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-navy">Esta clínica não está disponível.</h1>
        <Link href="/lumina-odontologia" className="button-primary mt-8">
          Ver página de demonstração
        </Link>
      </div>
    </main>
  );
}
