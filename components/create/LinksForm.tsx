"use client";

import { useState } from "react";
import type { Portfolio } from "@/lib/types";

interface Props {
  data: Portfolio;
  onChange: (data: Portfolio) => void;
}

export default function LinksForm({ data, onChange }: Props) {
  const [newLabel, setNewLabel] = useState("");
  const [newUrl, setNewUrl] = useState("");

  const addLink = () => {
    const label = newLabel.trim();
    const url = newUrl.trim();
    if (!label || !url) return;
    onChange({
      ...data,
      links: { ...data.links, [label.toLowerCase()]: url },
    });
    setNewLabel("");
    setNewUrl("");
  };

  const removeLink = (key: string) => {
    const { [key]: _, ...rest } = data.links;
    onChange({ ...data, links: rest });
  };

  const linkEntries = Object.entries(data.links).filter(([k]) => k !== "email");

  return (
    <div>
      <h2 className="mb-4 text-xl font-semibold tracking-tighter">Links</h2>
      <div className="space-y-3">
        <input
          type="email"
          value={data.links.email || ""}
          onChange={(e) =>
            onChange({
              ...data,
              links: { ...data.links, email: e.target.value || undefined },
            })
          }
          placeholder="Email address"
          className="w-full bg-transparent border-b border-neutral-200 dark:border-neutral-800 py-2 text-sm text-foreground placeholder:text-neutral-400 focus:outline-none focus:border-neutral-500 transition-colors"
        />

        {linkEntries.length > 0 && (
          <div className="space-y-2 mt-4">
            {linkEntries.map(([key, url]) => (
              <div key={key} className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 min-w-0">
                  <span className="text-xs text-neutral-400 font-mono shrink-0">{key}</span>
                  <span className="text-sm text-neutral-600 dark:text-neutral-400 truncate">{url}</span>
                </div>
                <button
                  type="button"
                  onClick={() => removeLink(key)}
                  className="text-xs text-neutral-400 hover:text-red-500 transition-colors shrink-0"
                >
                  remove
                </button>
              </div>
            ))}
          </div>
        )}

        <div className="flex gap-2 mt-2">
          <input
            type="text"
            value={newLabel}
            onChange={(e) => setNewLabel(e.target.value)}
            placeholder="Label (e.g. github)"
            className="w-[140px] bg-transparent border-b border-neutral-200 dark:border-neutral-800 py-2 text-sm text-foreground placeholder:text-neutral-400 focus:outline-none focus:border-neutral-500 transition-colors"
          />
          <input
            type="url"
            value={newUrl}
            onChange={(e) => setNewUrl(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                addLink();
              }
            }}
            placeholder="URL"
            className="flex-1 bg-transparent border-b border-neutral-200 dark:border-neutral-800 py-2 text-sm text-foreground placeholder:text-neutral-400 focus:outline-none focus:border-neutral-500 transition-colors"
          />
          <button
            type="button"
            onClick={addLink}
            className="text-sm text-neutral-500 hover:text-foreground transition-colors shrink-0"
          >
            + add
          </button>
        </div>
      </div>
    </div>
  );
}
