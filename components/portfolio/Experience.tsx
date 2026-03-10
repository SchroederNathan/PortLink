import type { Portfolio } from "@/lib/types";

export default function Experience({
  experience,
}: {
  experience: Portfolio["experience"];
}) {
  if (experience.length === 0) return null;

  return (
    <section className="my-8">
      <h2
        className="mb-4 text-xl font-semibold tracking-tighter"
        style={{ color: "var(--accent)" }}
      >
        Work
      </h2>
      <div className="space-y-6">
        {experience.map((exp, i) => (
          <div key={i}>
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
              <p className="text-neutral-600 dark:text-neutral-400 w-[140px] tabular-nums shrink-0">
                {exp.period}
              </p>
              <div>
                <p className="text-neutral-900 dark:text-neutral-100 tracking-tight font-medium">
                  {exp.role}
                </p>
                <p
                  className="font-medium"
                  style={{ color: "var(--accent)", opacity: 0.85 }}
                >
                  {exp.company}
                </p>
                <p className="mt-2 text-neutral-800 dark:text-neutral-200 text-sm">
                  {exp.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
