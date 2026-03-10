"use client";

import type { Portfolio } from "@/lib/types";

interface Props {
  data: Portfolio;
  onChange: (data: Portfolio) => void;
}

const SOCIAL_FIELDS: Array<{ key: keyof NonNullable<Portfolio["socialLinks"]>; label: string; placeholder: string; type?: string }> = [
  { key: "github",   label: "GitHub",    placeholder: "https://github.com/username" },
  { key: "linkedin", label: "LinkedIn",  placeholder: "https://linkedin.com/in/username" },
  { key: "twitter",  label: "Twitter/X", placeholder: "https://x.com/handle or @handle" },
  { key: "email",    label: "Email",     placeholder: "you@example.com", type: "email" },
  { key: "website",  label: "Website",   placeholder: "https://yoursite.com" },
];

export default function LinksForm({ data, onChange }: Props) {
  const socialLinks = data.socialLinks ?? {};

  const updateSocial = (key: keyof NonNullable<Portfolio["socialLinks"]>, value: string) => {
    onChange({
      ...data,
      socialLinks: {
        ...socialLinks,
        [key]: value.trim() || undefined,
      },
      // keep legacy links in sync for backward compat
      links: {
        ...data.links,
        [key]: value.trim() || undefined,
      },
    });
  };

  const updateContactBlurb = (value: string) => {
    onChange({ ...data, contactBlurb: value || undefined });
  };

  return (
    <div>
      <h2 className="mb-1 text-xl font-semibold tracking-tighter">Social Links</h2>
      <p className="mb-4 text-xs text-neutral-500 dark:text-neutral-400">
        These appear as icon pill buttons on your portfolio and power the contact section.
      </p>
      <div className="space-y-3">
        {SOCIAL_FIELDS.map(({ key, label, placeholder, type }) => (
          <div key={key} className="flex items-center gap-3">
            <span className="w-[80px] text-xs text-neutral-400 font-mono shrink-0">{label}</span>
            <input
              type={type ?? "url"}
              value={socialLinks[key] ?? ""}
              onChange={(e) => updateSocial(key, e.target.value)}
              placeholder={placeholder}
              className="flex-1 bg-transparent border-b border-neutral-200 dark:border-neutral-800 py-2 text-sm text-foreground placeholder:text-neutral-400 focus:outline-none focus:border-neutral-500 transition-colors"
            />
          </div>
        ))}
      </div>

      <div className="mt-6">
        <label className="block text-xs text-neutral-500 dark:text-neutral-400 mb-2">
          Contact blurb <span className="text-neutral-400">(shown in "Get in Touch" section)</span>
        </label>
        <textarea
          rows={2}
          value={data.contactBlurb ?? ""}
          onChange={(e) => updateContactBlurb(e.target.value)}
          placeholder="Open to new opportunities and collaborations"
          className="w-full bg-transparent border-b border-neutral-200 dark:border-neutral-800 py-2 text-sm text-foreground placeholder:text-neutral-400 focus:outline-none focus:border-neutral-500 transition-colors resize-none"
        />
      </div>
    </div>
  );
}
