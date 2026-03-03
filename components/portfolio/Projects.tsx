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
      <h2 className="mb-4 text-xl font-semibold tracking-tighter">Projects</h2>
      <div className="space-y-4">
        {projects.map((project, i) => (
          <div key={i} className="flex flex-col space-y-1 mb-4">
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
              <div className="text-neutral-600 dark:text-neutral-400 w-[140px] shrink-0 flex flex-wrap gap-1">
                {project.tags.slice(0, 2).map((tag) => (
                  <span key={tag} className="text-sm">{tag}</span>
                ))}
                {project.tags.length > 2 && (
                  <span className="text-sm">+{project.tags.length - 2}</span>
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
                      className="text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
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
