"use client";

import type { Portfolio } from "@/lib/types";

interface Props {
  data: Portfolio;
  onChange: (data: Portfolio) => void;
}

export default function BasicsForm({ data, onChange }: Props) {
  return (
    <div>
      <h2 className="mb-4 text-xl font-semibold tracking-tighter">Basics</h2>
      <div className="space-y-3">
        <input
          type="text"
          value={data.name}
          onChange={(e) => onChange({ ...data, name: e.target.value })}
          placeholder="Name"
          className="w-full bg-transparent border-b border-neutral-200 dark:border-neutral-800 py-2 text-sm text-foreground placeholder:text-neutral-400 focus:outline-none focus:border-neutral-500 transition-colors"
        />
        <input
          type="text"
          value={data.title}
          onChange={(e) => onChange({ ...data, title: e.target.value })}
          placeholder="Title / Role"
          className="w-full bg-transparent border-b border-neutral-200 dark:border-neutral-800 py-2 text-sm text-foreground placeholder:text-neutral-400 focus:outline-none focus:border-neutral-500 transition-colors"
        />
        <textarea
          value={data.bio}
          onChange={(e) => onChange({ ...data, bio: e.target.value })}
          placeholder="A short bio about yourself..."
          rows={3}
          className="w-full bg-transparent border-b border-neutral-200 dark:border-neutral-800 py-2 text-sm text-foreground placeholder:text-neutral-400 focus:outline-none focus:border-neutral-500 transition-colors resize-none"
        />
        <input
          type="url"
          value={data.avatar || ""}
          onChange={(e) => onChange({ ...data, avatar: e.target.value || undefined })}
          placeholder="Avatar URL (optional)"
          className="w-full bg-transparent border-b border-neutral-200 dark:border-neutral-800 py-2 text-sm text-foreground placeholder:text-neutral-400 focus:outline-none focus:border-neutral-500 transition-colors"
        />
      </div>
    </div>
  );
}
