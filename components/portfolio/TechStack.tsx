// Tech badge data (mirrors create form)
const TECH_MAP: Record<string, { label: string; color: string; textColor?: string }> = {
  typescript:    { label: "TypeScript",   color: "#3178C6" },
  javascript:    { label: "JavaScript",   color: "#F7DF1E", textColor: "#000" },
  python:        { label: "Python",       color: "#3776AB" },
  rust:          { label: "Rust",         color: "#CE422B" },
  go:            { label: "Go",           color: "#00ADD8" },
  java:          { label: "Java",         color: "#ED8B00" },
  csharp:        { label: "C#",           color: "#239120" },
  cpp:           { label: "C++",          color: "#00599C" },
  swift:         { label: "Swift",        color: "#F05138" },
  kotlin:        { label: "Kotlin",       color: "#7F52FF" },
  ruby:          { label: "Ruby",         color: "#CC342D" },
  php:           { label: "PHP",          color: "#777BB4" },
  react:         { label: "React",        color: "#61DAFB", textColor: "#000" },
  nextjs:        { label: "Next.js",      color: "#000000" },
  vue:           { label: "Vue.js",       color: "#4FC08D" },
  nuxt:          { label: "Nuxt",         color: "#00DC82", textColor: "#000" },
  svelte:        { label: "Svelte",       color: "#FF3E00" },
  angular:       { label: "Angular",      color: "#DD0031" },
  tailwind:      { label: "Tailwind CSS", color: "#06B6D4" },
  shadcn:        { label: "shadcn/ui",    color: "#18181B" },
  threejs:       { label: "Three.js",     color: "#049EF4" },
  nodejs:        { label: "Node.js",      color: "#339933" },
  express:       { label: "Express",      color: "#000000" },
  nestjs:        { label: "NestJS",       color: "#E0234E" },
  fastapi:       { label: "FastAPI",      color: "#009688" },
  django:        { label: "Django",       color: "#092E20" },
  rails:         { label: "Rails",        color: "#CC0000" },
  laravel:       { label: "Laravel",      color: "#FF2D20" },
  postgresql:    { label: "PostgreSQL",   color: "#316192" },
  mysql:         { label: "MySQL",        color: "#4479A1" },
  mongodb:       { label: "MongoDB",      color: "#47A248" },
  redis:         { label: "Redis",        color: "#DC382D" },
  sqlite:        { label: "SQLite",       color: "#003B57" },
  supabase:      { label: "Supabase",     color: "#3ECF8E", textColor: "#000" },
  prisma:        { label: "Prisma",       color: "#2D3748" },
  drizzle:       { label: "Drizzle ORM",  color: "#C5F74F", textColor: "#000" },
  aws:           { label: "AWS",          color: "#FF9900", textColor: "#000" },
  gcp:           { label: "GCP",          color: "#4285F4" },
  azure:         { label: "Azure",        color: "#0078D4" },
  vercel:        { label: "Vercel",       color: "#000000" },
  docker:        { label: "Docker",       color: "#2496ED" },
  kubernetes:    { label: "Kubernetes",   color: "#326CE5" },
  "github-actions": { label: "GitHub Actions", color: "#2088FF" },
  "react-native":{ label: "React Native", color: "#61DAFB", textColor: "#000" },
  expo:          { label: "Expo",         color: "#000020" },
  flutter:       { label: "Flutter",      color: "#02569B" },
};

export default function TechStack({ techStack }: { techStack: string[] }) {
  if (!techStack || techStack.length === 0) return null;

  const techs = techStack
    .map((id) => ({ id, ...TECH_MAP[id] }))
    .filter((t) => t.label); // skip unknown ids

  if (techs.length === 0) return null;

  return (
    <section className="my-8">
      <h2
        className="mb-4 text-xl font-semibold tracking-tighter"
        style={{ color: "var(--accent)" }}
      >
        Tech Stack
      </h2>
      <div className="flex flex-wrap gap-2">
        {techs.map((t) => (
          <span
            key={t.id}
            className="inline-block px-3 py-1 rounded-full text-xs font-semibold"
            style={{
              backgroundColor: t.color,
              color: t.textColor ?? "#fff",
            }}
          >
            {t.label}
          </span>
        ))}
      </div>
    </section>
  );
}
