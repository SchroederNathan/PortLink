import Link from "next/link";
import { encode } from "@/lib/codec";
import { demoPortfolios } from "@/lib/demo-data";

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "PortLink",
    url: "https://portlink.me",
    description:
      "Create a free portfolio website in 60 seconds. No hosting, no accounts, no database. Your entire portfolio is encoded into a shareable URL.",
    applicationCategory: "DesignApplication",
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  return (
    <section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
        PortLink
      </h1>
      <p className="mb-4 text-neutral-800 dark:text-neutral-200">
        {`Build your portfolio in 60 seconds. No hosting, no accounts, no database. Your entire portfolio lives in a URL. Fill in your details, generate a link, and share it anywhere.`}
      </p>
      <p className="mb-4 text-neutral-800 dark:text-neutral-200">
        {`Your data is compressed and encoded directly into the URL. Nothing is stored on any server. As long as you have the link, you have your portfolio.`}
      </p>

      <div className="my-8">
        <Link
          href="/create"
          className="inline-flex items-center gap-2 transition-all hover:text-neutral-800 dark:hover:text-neutral-200"
        >
          <ArrowIcon />
          <span className="ml-1">Create your portfolio</span>
        </Link>
      </div>

      <div className="my-8">
        <h2 className="mb-4 text-xl font-semibold tracking-tighter">
          Examples
        </h2>
        <div className="space-y-4">
          {demoPortfolios.map((p) => {
            const hash = encode(p);
            return (
              <Link
                key={p.name}
                className="flex flex-col space-y-1 mb-4"
                href={`/p/${hash}`}
              >
                <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
                  <p className="text-neutral-600 dark:text-neutral-400 w-[140px] tabular-nums">
                    {p.title}
                  </p>
                  <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                    {p.name}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      <footer className="mb-16">
        <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
          <li>
            <Link
              className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
              href="/create"
            >
              <ArrowIcon />
              <p className="ml-2 h-7">create</p>
            </Link>
          </li>
          <li>
            <a
              className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com"
            >
              <ArrowIcon />
              <p className="ml-2 h-7">github</p>
            </a>
          </li>
        </ul>
        <p className="mt-8 text-neutral-600 dark:text-neutral-300">
          © {new Date().getFullYear()} PortLink
        </p>
      </footer>
    </section>
  );
}
