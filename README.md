# Landing pages odontológicas

Landing page comercial multi-clínica construída com Next.js, TypeScript e Tailwind CSS.

## Desenvolvimento

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000/lumina-odontologia`.

## Clínicas disponíveis

- `/lumina-odontologia`
- `/clinica-sorriso`
- `/implante-center`

As configurações ficam em `data/clinics.ts`. Para adicionar uma clínica, inclua uma nova entrada no objeto `clinics` usando o slug da URL como chave.

## Validação

```bash
npm run lint
npm run typecheck
npm run build
```

## Deploy na Vercel

1. Importe este repositório na Vercel.
2. Mantenha o preset `Next.js` detectado automaticamente.
3. Use `npm run build` como Build Command.
4. Não é necessário configurar variáveis de ambiente nesta versão.

O projeto requer Node.js 20.9 ou superior.
