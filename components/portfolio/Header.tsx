import Link from "next/link";
import type { Portfolio } from "@/lib/types";

function ArrowIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z" fill="currentColor" />
    </svg>
  );
}

export default function Header({ portfolio }: { portfolio: Portfolio }) {
  const { name, title, links } = portfolio;

  const socialLinks = Object.entries(links)
    .filter(([, url]) => url)
    .map(([key, url]) => ({
      key,
      label: key,
      url: key === "email" ? `mailto:${url}` : url!,
      external: key !== "email",
    }));

  return (
    <header>
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

      <h1
        className="mb-2 text-2xl font-semibold tracking-tighter"
        style={{ color: "var(--accent)" }}
      >
        {name}
      </h1>
      <p className="mb-4 text-neutral-600 dark:text-neutral-400">{title}</p>

      {socialLinks.length > 0 && (
        <ul className="font-sm mt-4 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:flex-wrap md:space-x-4 md:space-y-0 dark:text-neutral-300">
          {socialLinks.map(({ key, url, label, external }) => (
            <li key={key}>
              <a
                className="flex items-center transition-all"
                style={{ color: "var(--accent)" }}
                rel={external ? "noopener noreferrer" : undefined}
                target={external ? "_blank" : undefined}
                href={url}
              >
                <ArrowIcon />
                <p className="ml-2 h-7">{label}</p>
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
