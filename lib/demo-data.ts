import type { Portfolio } from "./types";

export const demoPortfolios: Portfolio[] = [
  {
    name: "Alex Chen",
    title: "Full-Stack Engineer",
    bio: "I build delightful web experiences with modern tools. Passionate about clean code, great UX, and open source. Currently exploring the intersection of AI and developer tooling.",
    links: {
      github: "https://github.com/alexchen",
      linkedin: "https://linkedin.com/in/alexchen",
      twitter: "https://x.com/alexchen",
      website: "https://alexchen.dev",
      email: "alex@example.com",
    },
    experience: [
      {
        company: "Vercel",
        role: "Senior Frontend Engineer",
        period: "2023 — Present",
        description:
          "Building next-generation deployment infrastructure and developer tools. Led the redesign of the dashboard, improving load times by 40%.",
      },
      {
        company: "Stripe",
        role: "Software Engineer",
        period: "2021 — 2023",
        description:
          "Worked on the Payments team building checkout components used by millions of merchants worldwide.",
      },
    ],
    projects: [
      {
        name: "DevSync",
        description:
          "Real-time collaborative code editor with AI-powered completions and pair programming features.",
        url: "https://github.com/alexchen/devsync",
        tags: ["TypeScript", "WebRTC", "React", "Node.js"],
      },
      {
        name: "Chromatic",
        description:
          "A beautiful color palette generator for designers and developers with accessibility scoring.",
        url: "https://chromatic.dev",
        tags: ["Next.js", "Canvas API", "WCAG"],
      },
      {
        name: "TinyORM",
        description:
          "Lightweight TypeScript ORM for SQLite with zero dependencies and full type safety.",
        tags: ["TypeScript", "SQLite", "Open Source"],
      },
    ],
    skills: [
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "Tailwind CSS",
      "GraphQL",
      "AWS",
      "Docker",
      "Figma",
    ],
  },
  {
    name: "Priya Sharma",
    title: "UX Designer & Developer",
    bio: "Design-minded developer who bridges the gap between pixels and code. I care deeply about accessibility and inclusive design.",
    links: {
      github: "https://github.com/priyasharma",
      linkedin: "https://linkedin.com/in/priyasharma",
      website: "https://priya.design",
      email: "priya@example.com",
    },
    experience: [
      {
        company: "Figma",
        role: "Design Engineer",
        period: "2022 — Present",
        description:
          "Building design system components and prototyping tools. Championed accessibility improvements across the platform.",
      },
    ],
    projects: [
      {
        name: "a11y-toolkit",
        description:
          "Open-source accessibility testing toolkit with automated WCAG compliance checking.",
        url: "https://github.com/priyasharma/a11y-toolkit",
        tags: ["Accessibility", "React", "Testing"],
      },
      {
        name: "Palette",
        description:
          "Design token management system for scaling design systems across products.",
        tags: ["Design Systems", "CSS", "TypeScript"],
      },
    ],
    skills: [
      "Figma",
      "React",
      "CSS",
      "Accessibility",
      "Design Systems",
      "User Research",
      "Prototyping",
      "TypeScript",
    ],
  },
];
