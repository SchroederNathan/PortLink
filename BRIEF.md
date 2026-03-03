# PortBuilder — URL-Encoded Portfolio Builder

## Concept
A Next.js app where users create a personal portfolio site with ZERO hosting/accounts. All data lives in the URL.

## How It Works
1. User visits `/create` — a multi-step form to input their portfolio info
2. On submit, the JSON data is compressed (pako deflate → base64url) into a hash
3. User is redirected to `/p/[hash]` which decodes and renders a beautiful portfolio
4. User shares that URL — that's their portfolio. No backend, no database.

## Tech Stack
- Next.js 15 (App Router)
- Tailwind CSS v4
- Geist font (sans + mono)
- pako for compression
- All client-side rendering for the portfolio page

## Pages

### `/` — Landing Page
- Hero: "Build your portfolio in 60 seconds. No hosting. No accounts. Just a URL."
- CTA button → `/create`
- Show example portfolios (hardcoded demo hashes)
- Clean, minimal design matching Vercel blog template aesthetic

### `/create` — Portfolio Builder Form
Multi-section form with live preview:

**Sections:**
1. **Basics** — Name, title/role, bio (short paragraph), avatar URL (optional)
2. **Links** — GitHub, LinkedIn, Twitter/X, website, email (all optional)
3. **Work Experience** — Company, role, dates, description (add up to 5)
4. **Projects** — Name, description, URL, tech stack tags (add up to 6)
5. **Skills** — Simple tag list

**UX:**
- Each section is a collapsible card
- "Generate Portfolio" button at bottom
- Show estimated URL length as user fills in data
- Copy URL button after generation

### `/p/[hash]` — Portfolio Page
Renders the decoded portfolio data in a clean layout:
- Header: Name, title, avatar, social links as icons
- About section: bio
- Work experience: timeline-style
- Projects: card grid with tags
- Skills: pill/badge list
- Footer: "Built with PortBuilder" link

**Design:**
- Match the Vercel blog template aesthetic: clean, minimal, great typography
- Light/dark mode (respect system preference)
- Fully responsive
- Geist font throughout

## Data Schema
```typescript
interface Portfolio {
  name: string
  title: string
  bio: string
  avatar?: string
  links: {
    github?: string
    linkedin?: string
    twitter?: string
    website?: string
    email?: string
  }
  experience: Array<{
    company: string
    role: string
    period: string
    description: string
  }>
  projects: Array<{
    name: string
    description: string
    url?: string
    tags: string[]
  }>
  skills: string[]
}
```

## Compression Strategy
1. JSON.stringify the portfolio data
2. pako.deflate to compress
3. Base64url encode (URL-safe: +→-, /→_, no padding)
4. Result goes in URL: `/p/<encoded>`

This should get a typical portfolio down to 500-800 chars.

## File Structure
```
app/
  layout.tsx          — Root layout with Geist font, metadata
  page.tsx            — Landing page
  create/
    page.tsx          — Portfolio builder form
  p/
    [hash]/
      page.tsx        — Portfolio renderer
lib/
  codec.ts            — encode/decode functions (pako + base64url)
  types.ts            — Portfolio interface
  demo-data.ts        — Example portfolios for landing page
components/
  portfolio/
    Header.tsx
    About.tsx
    Experience.tsx
    Projects.tsx
    Skills.tsx
    Footer.tsx
  create/
    BasicsForm.tsx
    LinksForm.tsx
    ExperienceForm.tsx
    ProjectsForm.tsx
    SkillsForm.tsx
```

## Important
- Use `npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir=false --import-alias="@/*"` to scaffold
- Install pako: `pnpm add pako && pnpm add -D @types/pako`
- The portfolio page (`/p/[hash]`) must be a client component since it decodes from the URL
- Make it look GOOD. This is a portfolio site — design matters.
- Dark mode support via Tailwind dark: classes + system preference
- Geist font via next/font/google or the geist package
