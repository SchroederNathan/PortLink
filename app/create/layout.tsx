import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Your Portfolio",
  description:
    "Build a free portfolio website in seconds. Add your name, bio, links, experience, projects, and skills. Everything is encoded into a shareable URL.",
  openGraph: {
    title: "Create Your Portfolio | PortLink",
    description:
      "Build a free portfolio website in seconds. No hosting, no accounts. Just fill in your details and share the link.",
  },
};

export default function CreateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
