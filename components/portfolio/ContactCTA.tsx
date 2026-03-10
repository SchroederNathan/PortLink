import type { Portfolio } from "@/lib/types";

interface Props {
  portfolio: Pick<Portfolio, "socialLinks" | "contactBlurb">;
}

export default function ContactCTA({ portfolio }: Props) {
  const { socialLinks, contactBlurb } = portfolio;

  // Determine the primary CTA
  const email = socialLinks?.email;
  const linkedin = socialLinks?.linkedin;

  if (!email && !linkedin) return null;

  const ctaHref = email ? `mailto:${email}` : linkedin!;
  const ctaLabel = email ? "Send Email" : "View LinkedIn";
  const blurb = contactBlurb || "Open to new opportunities and collaborations";

  return (
    <section className="my-12 py-12 border-t border-neutral-200 dark:border-neutral-800 text-center">
      <h2 className="mb-3 text-2xl font-semibold tracking-tighter">
        Let&apos;s Work Together
      </h2>
      <p className="mb-6 text-neutral-600 dark:text-neutral-400 max-w-md mx-auto">
        {blurb}
      </p>
      <a
        href={ctaHref}
        rel={email ? undefined : "noopener noreferrer"}
        target={email ? undefined : "_blank"}
        className="inline-flex items-center gap-2 px-6 py-3 rounded-sm text-sm font-medium text-white transition-all hover:opacity-90"
        style={{ backgroundColor: "var(--accent)" }}
      >
        {ctaLabel}
      </a>
    </section>
  );
}
