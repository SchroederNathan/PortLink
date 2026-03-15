import type { Portfolio } from "@/lib/types";

function ArrowIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z" fill="currentColor" />
    </svg>
  );
}

export default function Projects({
  projects,
}: {
  projects: Portfolio["projects"];
}) {
  if (projects.length === 0) return null;

  return (
    <section className="my-8">
      <h2
        className="mb-4 text-xl font-semibold tracking-tighter"
        style={{ color: "var(--accent)" }}
      >
        Projects
      </h2>
      <div className="space-y-4">
        {projects.map((project, i) => (
          <div key={i} className="flex flex-col space-y-1 mb-4">
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
              <div className="w-[140px] shrink-0 flex flex-wrap gap-1">
                {project.tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 rounded-full border font-medium"
                    style={{
                      color: "var(--accent)",
                      borderColor: "var(--accent)",
                      opacity: 0.8,
                    }}
                  >
                    {tag}
                  </span>
                ))}
                {project.tags.length > 2 && (
                  <span
                    className="text-xs px-2 py-0.5 rounded-full border font-medium"
                    style={{
                      color: "var(--accent)",
                      borderColor: "var(--accent)",
                      opacity: 0.6,
                    }}
                  >
                    +{project.tags.length - 2}
                  </span>
                )}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-neutral-900 dark:text-neutral-100 tracking-tight font-medium">
                    {project.name}
                  </p>
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-all"
                      style={{ color: "var(--accent)" }}
                    >
                      <ArrowIcon />
                    </a>
                  )}
                </div>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                  {project.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
