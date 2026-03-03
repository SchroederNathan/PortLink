# PortLink

Build your portfolio in 60 seconds. No hosting, no accounts, no database. Just a URL.

## How it works

1. Go to `/create` and fill in your info (name, bio, links, experience, projects, skills)
2. Click "Generate Portfolio" to compress everything into a URL
3. Share that URL anywhere. That's your portfolio.

All data is encoded directly into the URL using deflate compression + base64url. Nothing is stored on any server.

## Tech

- [Next.js](https://nextjs.org) 15 (App Router)
- [Tailwind CSS](https://tailwindcss.com) v4
- [Geist](https://vercel.com/font) font
- [pako](https://github.com/nodeca/pako) for compression

## Getting started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
app/
  page.tsx              Landing page
  create/page.tsx       Portfolio builder form
  p/[hash]/page.tsx     Portfolio renderer (decodes from URL)
lib/
  types.ts              Portfolio TypeScript interface
  codec.ts              Encode/decode (pako deflate + base64url)
  demo-data.ts          Example portfolios
components/
  create/               Form components (basics, links, experience, projects, skills)
  portfolio/            Render components (header, about, experience, projects, skills, footer)
```

## License

MIT
