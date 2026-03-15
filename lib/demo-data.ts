import type { Portfolio } from "./types";

export const demoPortfolios: Portfolio[] = [
  {
    name: "Nathan Schroeder",
    title: "Software Developer & UI/UX Designer",
    bio: "I build cool stuff that actually feels good to use whether its a personal tool or a large-scale application. I care about the details. Elegant UI, great performance, and code that doesn't feel like a mess. I dabble in a lot of frontend and backend frameworks, but currently I'm focused on React Native development and Next.js for web.",
    links: {
      github: "https://github.com/SchroederNathan",
      linkedin: "https://www.linkedin.com/in/nathan-schroeder-a40aa2210/",
      twitter: "https://x.com/nater02",
      instagram: "https://www.instagram.com/nathanschroederr/",
      website: "https://nathanschroeder.dev",
    },
    socialLinks: {
      github: "https://github.com/SchroederNathan",
      linkedin: "https://www.linkedin.com/in/nathan-schroeder-a40aa2210/",
      twitter: "https://x.com/nater02",
      email: "nathan@nathanschroeder.dev",
      website: "https://nathanschroeder.dev",
    },
    contactBlurb: "Open to new opportunities and collaborations. Let's build something great together.",
    experience: [
      {
        company: "Red Piston",
        role: "Software Developer",
        period: "2025 - Present",
        description:
          "Designing, building, and maintaining mobile apps in React Native, SwiftUI, and Java with products that reached over 130k monthly active users. Also working on several web applications using React and Laravel. Helped shape parts of the DevOps workflow, setting up servers, managing CI/CD pipelines, and working with AWS.",
      },
      {
        company: "St. Clair College",
        role: "Mobile Applications Development",
        period: "2020 - 2024",
        description:
          "Learned to develop, test, and deploy native mobile and web applications for multiple platforms. Designed user-friendly prototypes using Figma. Led teams to accomplish larger scale projects.",
      },
    ],
    projects: [
      {
        name: "Movati",
        description:
          "Class booking and account management app with 130K+ monthly active users.",
        url: "https://movatiathletic.com",
        tags: ["React Native", "Expo", "Laravel"],
      },
      {
        name: "FocusGrid",
        description: "Productivity app for focused work.",
        url: "https://focusgridapp.com",
        tags: ["React Native", "Expo"],
      },
      {
        name: "ThemeGen",
        description:
          "Theme generator with WCAG contrast auditing.",
        url: "https://themegen.dev",
        tags: ["Next.js", "Tailwind CSS", "WCAG"],
      },
    ],
    skills: [
      "React Native",
      "Next.js",
      "TypeScript",
      "UI/UX Design",
      "SwiftUI",
      "Laravel",
      "Tailwind CSS",
      "AWS",
      "Figma",
    ],
    techStack: ["typescript", "react", "nextjs", "react-native", "tailwind", "laravel", "aws", "postgresql"],
  },
];
