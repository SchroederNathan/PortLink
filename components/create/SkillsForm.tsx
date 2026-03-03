"use client";

import { useState } from "react";
import type { Portfolio } from "@/lib/types";

interface Props {
  data: Portfolio;
  onChange: (data: Portfolio) => void;
}

export default function SkillsForm({ data, onChange }: Props) {
  const [input, setInput] = useState("");

  const addSkill = (skill: string) => {
    const trimmed = skill.trim();
    if (trimmed && !data.skills.includes(trimmed)) {
      onChange({ ...data, skills: [...data.skills, trimmed] });
    }
    setInput("");
  };

  const removeSkill = (skill: string) => {
    onChange({ ...data, skills: data.skills.filter((s) => s !== skill) });
  };

  return (
    <div>
      <h2 className="mb-4 text-xl font-semibold tracking-tighter">Skills</h2>
      <div className="space-y-3">
        {data.skills.length > 0 && (
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {data.skills.map((skill, i) => (
              <span key={skill}>
                <button
                  type="button"
                  onClick={() => removeSkill(skill)}
                  className="hover:text-red-500 hover:line-through transition-colors"
                >
                  {skill}
                </button>
                {i < data.skills.length - 1 && ", "}
              </span>
            ))}
          </p>
        )}
        <input
          type="text"
          value={input}
          onChange={(e) => {
            const val = e.target.value;
            if (val.endsWith(",")) {
              addSkill(val.slice(0, -1));
            } else {
              setInput(val);
            }
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              addSkill(input);
            }
          }}
          placeholder="Type a skill, press enter or comma"
          className="w-full bg-transparent border-b border-neutral-200 dark:border-neutral-800 py-2 text-sm text-foreground placeholder:text-neutral-400 focus:outline-none focus:border-neutral-500 transition-colors"
        />
      </div>
    </div>
  );
}
