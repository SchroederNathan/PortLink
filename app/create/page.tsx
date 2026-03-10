"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import type { Portfolio } from "@/lib/types";
import { encode } from "@/lib/codec";
import BasicsForm from "@/components/create/BasicsForm";
import LinksForm from "@/components/create/LinksForm";
import ExperienceForm from "@/components/create/ExperienceForm";
import ProjectsForm from "@/components/create/ProjectsForm";
import SkillsForm from "@/components/create/SkillsForm";
import TechStackForm from "@/components/create/TechStackForm";

const ACCENT_COLORS = [
  { label: "Blue",   value: "#2563eb" },
  { label: "Violet", value: "#7c3aed" },
  { label: "Cyan",   value: "#0891b2" },
  { label: "Green",  value: "#16a34a" },
  { label: "Amber",  value: "#d97706" },
  { label: "Orange", value: "#ea580c" },
  { label: "Rose",   value: "#e11d48" },
  { label: "Pink",   value: "#db2777" },
];

const emptyPortfolio: Portfolio = {
  name: "",
  title: "",
  bio: "",
  links: {},
  socialLinks: {},
  contactBlurb: "",
  experience: [],
  projects: [],
  skills: [],
  techStack: [],
  accentColor: "#2563eb",
};

export default function CreatePage() {
  const [data, setData] = useState<Portfolio>(emptyPortfolio);
  const [generatedUrl, setGeneratedUrl] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const estimatedLength = useMemo(() => {
    try {
      const hash = encode(data);
      return hash.length;
    } catch {
      return 0;
    }
  }, [data]);

  const isValid = data.name.trim() && data.title.trim() && data.bio.trim();

  const generate = () => {
    if (!isValid) return;
    const socialLinksClean = data.socialLinks
      ? Object.fromEntries(
          Object.entries(data.socialLinks).filter(([, v]) => v)
        )
      : undefined;
    const cleaned: Portfolio = {
      ...data,
      avatar: data.avatar || undefined,
      accentColor: data.accentColor || "#2563eb",
      links: Object.fromEntries(
        Object.entries(data.links).filter(([, v]) => v)
      ),
      socialLinks: Object.keys(socialLinksClean ?? {}).length ? (socialLinksClean as Portfolio["socialLinks"]) : undefined,
      contactBlurb: data.contactBlurb?.trim() || undefined,
      experience: data.experience.filter((e) => e.company && e.role),
      projects: data.projects
        .filter((p) => p.name)
        .map((p) => ({ ...p, url: p.url || undefined })),
    };
    const hash = encode(cleaned);
    const url = `${window.location.origin}/p/${hash}`;
    setGeneratedUrl(url);
  };

  const copyUrl = async () => {
    if (!generatedUrl) return;
    await navigator.clipboard.writeText(generatedUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const selectedAccent = data.accentColor ?? "#2563eb";

  return (
    <section className="pb-20">
      <nav className="-ml-[8px] mb-16 tracking-tight">
        <div className="lg:sticky lg:top-20">
          <div className="flex flex-row items-start relative px-0 pb-0 md:overflow-auto scroll-pr-6 md:relative">
            <div className="flex flex-row space-x-0 pr-10">
              <Link
                href="/"
                className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
              >
                home
              </Link>
              <Link
                href="/create"
                className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
              >
                create
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Create your portfolio
      </h1>
      <p className="mb-8 text-neutral-600 dark:text-neutral-400">
        Fill in your details below. Everything is encoded into the URL. Nothing is stored.
      </p>

      <div className="space-y-8">
        <BasicsForm data={data} onChange={setData} />
        <LinksForm data={data} onChange={setData} />
        <ExperienceForm data={data} onChange={setData} />
        <ProjectsForm data={data} onChange={setData} />
        <SkillsForm data={data} onChange={setData} />
        <TechStackForm data={data} onChange={setData} />

        {/* Accent Color Picker */}
        <div>
          <h2 className="text-sm font-medium text-neutral-900 dark:text-neutral-100 mb-3">
            Accent Color
          </h2>
          <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-3">
            Applied to your name, section headings, skill badges, and links.
          </p>
          <div className="flex flex-wrap gap-3">
            {ACCENT_COLORS.map(({ label, value }) => (
              <button
                key={value}
                type="button"
                title={label}
                onClick={() => setData((d) => ({ ...d, accentColor: value }))}
                className="relative w-8 h-8 rounded-full transition-all focus:outline-none"
                style={{ backgroundColor: value }}
              >
                {selectedAccent === value && (
                  <span className="absolute inset-0 flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-white drop-shadow"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                )}
                <span className="sr-only">{label}</span>
              </button>
            ))}
          </div>
          {/* Live preview sample */}
          <div
            className="mt-4 p-3 border border-neutral-200 dark:border-neutral-800 rounded-sm text-sm"
            style={{ "--accent": selectedAccent } as React.CSSProperties}
          >
            <p className="font-semibold text-base" style={{ color: "var(--accent)" }}>
              Your Name
            </p>
            <p className="text-neutral-500 dark:text-neutral-400 text-xs mb-2">Full Stack Developer</p>
            <div className="flex gap-1 flex-wrap">
              {["React", "TypeScript", "Node.js"].map((s) => (
                <span
                  key={s}
                  className="text-xs px-2 py-0.5 rounded-full border font-medium"
                  style={{ color: "var(--accent)", borderColor: "var(--accent)" }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 flex items-center justify-between text-sm text-neutral-500 font-mono">
        <span>~{estimatedLength} chars</span>
        <span className={estimatedLength > 2000 ? "text-red-500" : estimatedLength > 1500 ? "text-amber-500" : ""}>
          {estimatedLength > 2000 ? "url too long" : estimatedLength > 1500 ? "getting long" : ""}
        </span>
      </div>

      <button
        onClick={generate}
        disabled={!isValid}
        className="mt-4 w-full bg-neutral-900 dark:bg-neutral-100 text-white dark:text-black py-3 text-sm font-medium hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
      >
        Generate Portfolio
      </button>

      {generatedUrl && (
        <div className="mt-8 space-y-4">
          <p className="text-neutral-800 dark:text-neutral-200 font-medium">
            Your portfolio is ready.
          </p>
          <div className="flex gap-2">
            <input
              type="text"
              readOnly
              value={generatedUrl}
              className="flex-1 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 px-3 py-2 text-sm font-mono text-foreground truncate focus:outline-none"
            />
            <button
              onClick={copyUrl}
              className="shrink-0 px-4 py-2 text-sm border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
            >
              {copied ? "Copied" : "Copy"}
            </button>
          </div>
          <Link
            href={generatedUrl.replace(window.location.origin, "")}
            className="inline-flex items-center text-sm underline transition-all decoration-neutral-400 dark:decoration-neutral-600 underline-offset-2 decoration-[0.1em] hover:text-neutral-800 dark:hover:text-neutral-100"
          >
            View portfolio →
          </Link>
        </div>
      )}
    </section>
  );
}
