"use client";

import { useState } from "react";
import type { Portfolio } from "@/lib/types";

interface Props {
  data: Portfolio;
  onChange: (data: Portfolio) => void;
}

// ─── Tech Stack Definitions ───────────────────────────────────

interface Tech {
  id: string;
  label: string;
  color: string; // hex bg
  textColor?: string; // defaults to white
  category: string;
}

const TECHS: Tech[] = [
  // Languages
  { id: "typescript",  label: "TypeScript",  color: "#3178C6", category: "Language" },
  { id: "javascript",  label: "JavaScript",  color: "#F7DF1E", textColor: "#000", category: "Language" },
  { id: "python",      label: "Python",      color: "#3776AB", category: "Language" },
  { id: "rust",        label: "Rust",        color: "#CE422B", category: "Language" },
  { id: "go",          label: "Go",          color: "#00ADD8", category: "Language" },
  { id: "java",        label: "Java",        color: "#ED8B00", category: "Language" },
  { id: "csharp",      label: "C#",          color: "#239120", category: "Language" },
  { id: "cpp",         label: "C++",         color: "#00599C", category: "Language" },
  { id: "swift",       label: "Swift",       color: "#F05138", category: "Language" },
  { id: "kotlin",      label: "Kotlin",      color: "#7F52FF", category: "Language" },
  { id: "ruby",        label: "Ruby",        color: "#CC342D", category: "Language" },
  { id: "php",         label: "PHP",         color: "#777BB4", category: "Language" },
  // Frontend
  { id: "react",       label: "React",       color: "#61DAFB", textColor: "#000", category: "Frontend" },
  { id: "nextjs",      label: "Next.js",     color: "#000000", category: "Frontend" },
  { id: "vue",         label: "Vue.js",      color: "#4FC08D", category: "Frontend" },
  { id: "nuxt",        label: "Nuxt",        color: "#00DC82", textColor: "#000", category: "Frontend" },
  { id: "svelte",      label: "Svelte",      color: "#FF3E00", category: "Frontend" },
  { id: "angular",     label: "Angular",     color: "#DD0031", category: "Frontend" },
  { id: "tailwind",    label: "Tailwind CSS",color: "#06B6D4", category: "Frontend" },
  { id: "shadcn",      label: "shadcn/ui",   color: "#18181B", category: "Frontend" },
  { id: "threejs",     label: "Three.js",    color: "#049EF4", category: "Frontend" },
  // Backend
  { id: "nodejs",      label: "Node.js",     color: "#339933", category: "Backend" },
  { id: "express",     label: "Express",     color: "#000000", category: "Backend" },
  { id: "nestjs",      label: "NestJS",      color: "#E0234E", category: "Backend" },
  { id: "fastapi",     label: "FastAPI",     color: "#009688", category: "Backend" },
  { id: "django",      label: "Django",      color: "#092E20", category: "Backend" },
  { id: "rails",       label: "Rails",       color: "#CC0000", category: "Backend" },
  { id: "laravel",     label: "Laravel",     color: "#FF2D20", category: "Backend" },
  // Database
  { id: "postgresql",  label: "PostgreSQL",  color: "#316192", category: "Database" },
  { id: "mysql",       label: "MySQL",       color: "#4479A1", category: "Database" },
  { id: "mongodb",     label: "MongoDB",     color: "#47A248", category: "Database" },
  { id: "redis",       label: "Redis",       color: "#DC382D", category: "Database" },
  { id: "sqlite",      label: "SQLite",      color: "#003B57", category: "Database" },
  { id: "supabase",    label: "Supabase",    color: "#3ECF8E", textColor: "#000", category: "Database" },
  { id: "prisma",      label: "Prisma",      color: "#2D3748", category: "Database" },
  { id: "drizzle",     label: "Drizzle ORM", color: "#C5F74F", textColor: "#000", category: "Database" },
  // Cloud & DevOps
  { id: "aws",         label: "AWS",         color: "#FF9900", textColor: "#000", category: "Cloud" },
  { id: "gcp",         label: "GCP",         color: "#4285F4", category: "Cloud" },
  { id: "azure",       label: "Azure",       color: "#0078D4", category: "Cloud" },
  { id: "vercel",      label: "Vercel",      color: "#000000", category: "Cloud" },
  { id: "docker",      label: "Docker",      color: "#2496ED", category: "Cloud" },
  { id: "kubernetes",  label: "Kubernetes",  color: "#326CE5", category: "Cloud" },
  { id: "github-actions", label: "GitHub Actions", color: "#2088FF", category: "Cloud" },
  // Mobile
  { id: "react-native",label: "React Native",color: "#61DAFB", textColor: "#000", category: "Mobile" },
  { id: "expo",        label: "Expo",        color: "#000020", category: "Mobile" },
  { id: "flutter",     label: "Flutter",     color: "#02569B", category: "Mobile" },
];

const CATEGORIES = ["Language", "Frontend", "Backend", "Database", "Cloud", "Mobile"] as const;

export default function TechStackForm({ data, onChange }: Props) {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const techStack = data.techStack ?? [];

  const toggle = (id: string) => {
    const updated = techStack.includes(id)
      ? techStack.filter((t) => t !== id)
      : [...techStack, id];
    onChange({ ...data, techStack: updated });
  };

  const filtered = TECHS.filter((t) => {
    const matchesSearch = search
      ? t.label.toLowerCase().includes(search.toLowerCase())
      : true;
    const matchesCategory = activeCategory ? t.category === activeCategory : true;
    return matchesSearch && matchesCategory;
  });

  const selectedTechs = TECHS.filter((t) => techStack.includes(t.id));

  return (
    <div>
      <h2 className="mb-4 text-xl font-semibold tracking-tighter">Tech Stack</h2>
      <div className="space-y-4">
        {/* Selected preview */}
        {selectedTechs.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {selectedTechs.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => toggle(t.id)}
                title="Click to remove"
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold transition-opacity hover:opacity-75"
                style={{
                  backgroundColor: t.color,
                  color: t.textColor ?? "#fff",
                }}
              >
                {t.label}
                <span className="opacity-60 text-[10px] ml-0.5">✕</span>
              </button>
            ))}
          </div>
        )}

        {/* Search */}
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search technologies…"
          className="w-full bg-transparent border-b border-neutral-200 dark:border-neutral-800 py-2 text-sm text-foreground placeholder:text-neutral-400 focus:outline-none focus:border-neutral-500 transition-colors"
        />

        {/* Category filter */}
        <div className="flex flex-wrap gap-1.5">
          <button
            type="button"
            onClick={() => setActiveCategory(null)}
            className={`px-2.5 py-1 rounded-full text-xs font-medium border transition-colors ${
              activeCategory === null
                ? "border-foreground text-foreground bg-foreground/10"
                : "border-neutral-200 dark:border-neutral-800 text-neutral-500 hover:border-neutral-400 hover:text-foreground"
            }`}
          >
            All
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(activeCategory === cat ? null : cat)}
              className={`px-2.5 py-1 rounded-full text-xs font-medium border transition-colors ${
                activeCategory === cat
                  ? "border-foreground text-foreground bg-foreground/10"
                  : "border-neutral-200 dark:border-neutral-800 text-neutral-500 hover:border-neutral-400 hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tech grid */}
        <div className="flex flex-wrap gap-2">
          {filtered.map((t) => {
            const selected = techStack.includes(t.id);
            return (
              <button
                key={t.id}
                type="button"
                onClick={() => toggle(t.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold border-2 transition-all ${
                  selected ? "scale-105 shadow-sm" : "opacity-50 hover:opacity-80"
                }`}
                style={{
                  backgroundColor: selected ? t.color : "transparent",
                  borderColor: t.color,
                  color: selected ? (t.textColor ?? "#fff") : t.color,
                }}
              >
                {t.label}
              </button>
            );
          })}
          {filtered.length === 0 && (
            <p className="text-sm text-neutral-400">No techs match &ldquo;{search}&rdquo;</p>
          )}
        </div>

        {selectedTechs.length > 0 && (
          <p className="text-xs text-neutral-500">{selectedTechs.length} selected</p>
        )}
      </div>
    </div>
  );
}
