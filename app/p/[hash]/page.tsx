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
import TechStack from "@/components/portfolio/TechStack";
import SocialLinks from "@/components/portfolio/SocialLinks";
import ContactCTA from "@/components/portfolio/ContactCTA";
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
  const theme = portfolio.layoutTheme ?? "minimal";

  const themeWrapper =
    theme === "bold"
      ? "bg-[#0a0a0a] text-white -mx-6 px-6 -my-6 py-6 min-h-screen"
      : theme === "creative"
        ? "bg-[#faf8f5] text-[#222] -mx-6 px-6 -my-6 py-6 min-h-screen"
        : "";

  const headingClass =
    theme === "bold"
      ? "[&_h2]:text-2xl [&_h2]:font-black [&_h2]:tracking-tight [&_h2]:border-l-4 [&_h2]:pl-3"
      : theme === "creative"
        ? "[&_h1]:font-serif [&_h2]:font-serif [&_h3]:font-serif [&_h1]:italic [&_h2]:italic"
        : "";

  const boldHeadingBorder =
    theme === "bold" ? { "--accent-border": accentColor } as React.CSSProperties : {};

  if (theme === "creative") {
    return (
      <div
        className={`${themeWrapper} ${headingClass}`}
        style={{ "--accent": accentColor } as React.CSSProperties}
      >
        <div className="lg:grid lg:grid-cols-[1fr_1.5fr] lg:gap-12">
          {/* Left column: identity */}
          <div className="lg:sticky lg:top-6 lg:self-start">
            <Header portfolio={portfolio} />
            <About bio={portfolio.bio} />
            {portfolio.socialLinks && Object.values(portfolio.socialLinks).some(Boolean) && (
              <SocialLinks socialLinks={portfolio.socialLinks} />
            )}
            <Skills skills={portfolio.skills} />
            <TechStack techStack={portfolio.techStack ?? []} />
          </div>
          {/* Right column: work */}
          <div>
            <Experience experience={portfolio.experience} />
            <Projects projects={portfolio.projects} />
            <ContactCTA portfolio={portfolio} />
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div
      className={`${themeWrapper} ${headingClass}`}
      style={
        { "--accent": accentColor, ...boldHeadingBorder } as React.CSSProperties
      }
    >
      <style>{theme === "bold" ? `h2 { border-color: var(--accent) !important; }` : ""}</style>
      <Header portfolio={portfolio} />
      <About bio={portfolio.bio} />
      {portfolio.socialLinks && Object.values(portfolio.socialLinks).some(Boolean) && (
        <SocialLinks socialLinks={portfolio.socialLinks} />
      )}
      <Experience experience={portfolio.experience} />
      <Projects projects={portfolio.projects} />
      <Skills skills={portfolio.skills} />
      <TechStack techStack={portfolio.techStack ?? []} />
      <ContactCTA portfolio={portfolio} />
      <Footer />
    </div>
  );
}
