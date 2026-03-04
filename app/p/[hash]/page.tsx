"use client";

import { useParams } from "next/navigation";
import { useMemo } from "react";
import Link from "next/link";
import { decode } from "@/lib/codec";
import Header from "@/components/portfolio/Header";
import About from "@/components/portfolio/About";
import Experience from "@/components/portfolio/Experience";
import Projects from "@/components/portfolio/Projects";
import Skills from "@/components/portfolio/Skills";
import Footer from "@/components/portfolio/Footer";

export default function PortfolioPage() {
  const params = useParams<{ hash: string }>();

  const portfolio = useMemo(() => {
    if (!params.hash) return null;
    return decode(params.hash);
  }, [params.hash]);

  if (!portfolio) {
    return (
      <section>
        <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
          Invalid Portfolio
        </h1>
        <p className="mb-4 text-neutral-800 dark:text-neutral-200">
          This URL doesn&apos;t contain valid portfolio data. The link may be
          corrupted or incomplete.
        </p>
        <Link
          href="/create"
          className="underline transition-all decoration-neutral-400 dark:decoration-neutral-600 underline-offset-2 decoration-[0.1em]"
        >
          Create your own portfolio
        </Link>
      </section>
    );
  }

  const accentColor = portfolio.accentColor ?? "#2563eb";

  return (
    <section
      style={
        { "--accent": accentColor } as React.CSSProperties
      }
    >
      <Header portfolio={portfolio} />
      <About bio={portfolio.bio} />
      <Experience experience={portfolio.experience} />
      <Projects projects={portfolio.projects} />
      <Skills skills={portfolio.skills} />
      <Footer />
    </section>
  );
}
