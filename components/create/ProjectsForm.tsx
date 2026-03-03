"use client";

import type { Portfolio } from "@/lib/types";

interface Props {
  data: Portfolio;
  onChange: (data: Portfolio) => void;
}

const emptyProject = { name: "", description: "", url: "", tags: [] as string[] };

export default function ProjectsForm({ data, onChange }: Props) {
  const add = () => {
    if (data.projects.length >= 6) return;
    onChange({ ...data, projects: [...data.projects, { ...emptyProject, tags: [] }] });
  };

  const update = (index: number, field: string, value: string | string[]) => {
    const updated = data.projects.map((proj, i) =>
      i === index ? { ...proj, [field]: value } : proj
    );
    onChange({ ...data, projects: updated });
  };

  const remove = (index: number) => {
    onChange({ ...data, projects: data.projects.filter((_, i) => i !== index) });
  };

  return (
    <div>
      <h2 className="mb-4 text-xl font-semibold tracking-tighter">Projects</h2>
      <div className="space-y-6">
        {data.projects.map((proj, i) => (
          <div key={i} className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs text-neutral-400 font-mono">project {i + 1}</span>
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
              value={proj.name}
              onChange={(e) => update(i, "name", e.target.value)}
              placeholder="Project name"
              className="w-full bg-transparent border-b border-neutral-200 dark:border-neutral-800 py-2 text-sm text-foreground placeholder:text-neutral-400 focus:outline-none focus:border-neutral-500 transition-colors"
            />
            <input
              type="url"
              value={proj.url || ""}
              onChange={(e) => update(i, "url", e.target.value)}
              placeholder="Project URL (optional)"
              className="w-full bg-transparent border-b border-neutral-200 dark:border-neutral-800 py-2 text-sm text-foreground placeholder:text-neutral-400 focus:outline-none focus:border-neutral-500 transition-colors"
            />
            <textarea
              value={proj.description}
              onChange={(e) => update(i, "description", e.target.value)}
              placeholder="What does it do?"
              rows={2}
              className="w-full bg-transparent border-b border-neutral-200 dark:border-neutral-800 py-2 text-sm text-foreground placeholder:text-neutral-400 focus:outline-none focus:border-neutral-500 transition-colors resize-none"
            />
            <div className="space-y-2">
              <div className="flex flex-wrap gap-1">
                {proj.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 text-xs text-neutral-600 dark:text-neutral-400"
                  >
                    {tag}
                    <button
                      type="button"
                      onClick={() => update(i, "tags", proj.tags.filter((t) => t !== tag))}
                      className="hover:text-red-500 transition-colors"
                    >
                      ×
                    </button>
                    {proj.tags.indexOf(tag) < proj.tags.length - 1 && ","}
                  </span>
                ))}
              </div>
              <input
                type="text"
                placeholder="Add tags (comma or enter)"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    const tag = e.currentTarget.value.trim();
                    if (tag && !proj.tags.includes(tag)) {
                      update(i, "tags", [...proj.tags, tag]);
                    }
                    e.currentTarget.value = "";
                  }
                }}
                onChange={(e) => {
                  const val = e.target.value;
                  if (val.endsWith(",")) {
                    const tag = val.slice(0, -1).trim();
                    if (tag && !proj.tags.includes(tag)) {
                      update(i, "tags", [...proj.tags, tag]);
                    }
                    e.target.value = "";
                  }
                }}
                className="w-full bg-transparent border-b border-neutral-200 dark:border-neutral-800 py-2 text-sm text-foreground placeholder:text-neutral-400 focus:outline-none focus:border-neutral-500 transition-colors"
              />
            </div>
          </div>
        ))}
        {data.projects.length < 6 && (
          <button
            type="button"
            onClick={add}
            className="text-sm text-neutral-500 hover:text-foreground transition-colors"
          >
            + add project
          </button>
        )}
      </div>
    </div>
  );
}
