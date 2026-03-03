"use client";

import type { Portfolio } from "@/lib/types";

interface Props {
  data: Portfolio;
  onChange: (data: Portfolio) => void;
}

const emptyExperience = { company: "", role: "", period: "", description: "" };

export default function ExperienceForm({ data, onChange }: Props) {
  const add = () => {
    if (data.experience.length >= 5) return;
    onChange({ ...data, experience: [...data.experience, { ...emptyExperience }] });
  };

  const update = (index: number, field: string, value: string) => {
    const updated = data.experience.map((exp, i) =>
      i === index ? { ...exp, [field]: value } : exp
    );
    onChange({ ...data, experience: updated });
  };

  const remove = (index: number) => {
    onChange({ ...data, experience: data.experience.filter((_, i) => i !== index) });
  };

  return (
    <div>
      <h2 className="mb-4 text-xl font-semibold tracking-tighter">Experience</h2>
      <div className="space-y-6">
        {data.experience.map((exp, i) => (
          <div key={i} className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs text-neutral-400 font-mono">position {i + 1}</span>
              <button
                type="button"
                onClick={() => remove(i)}
                className="text-xs text-neutral-400 hover:text-red-500 transition-colors"
              >
                remove
              </button>
            </div>
            <input
              type="text"
              value={exp.company}
              onChange={(e) => update(i, "company", e.target.value)}
              placeholder="Company"
              className="w-full bg-transparent border-b border-neutral-200 dark:border-neutral-800 py-2 text-sm text-foreground placeholder:text-neutral-400 focus:outline-none focus:border-neutral-500 transition-colors"
            />
            <input
              type="text"
              value={exp.role}
              onChange={(e) => update(i, "role", e.target.value)}
              placeholder="Role"
              className="w-full bg-transparent border-b border-neutral-200 dark:border-neutral-800 py-2 text-sm text-foreground placeholder:text-neutral-400 focus:outline-none focus:border-neutral-500 transition-colors"
            />
            <input
              type="text"
              value={exp.period}
              onChange={(e) => update(i, "period", e.target.value)}
              placeholder="2023 — Present"
              className="w-full bg-transparent border-b border-neutral-200 dark:border-neutral-800 py-2 text-sm text-foreground placeholder:text-neutral-400 focus:outline-none focus:border-neutral-500 transition-colors"
            />
            <textarea
              value={exp.description}
              onChange={(e) => update(i, "description", e.target.value)}
              placeholder="What did you do?"
              rows={2}
              className="w-full bg-transparent border-b border-neutral-200 dark:border-neutral-800 py-2 text-sm text-foreground placeholder:text-neutral-400 focus:outline-none focus:border-neutral-500 transition-colors resize-none"
            />
          </div>
        ))}
        {data.experience.length < 5 && (
          <button
            type="button"
            onClick={add}
            className="text-sm text-neutral-500 hover:text-foreground transition-colors"
          >
            + add position
          </button>
        )}
      </div>
    </div>
  );
}
