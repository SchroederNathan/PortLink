export default function Skills({ skills }: { skills: string[] }) {
  if (skills.length === 0) return null;

  return (
    <section className="my-8">
      <h2
        className="mb-4 text-xl font-semibold tracking-tighter"
        style={{ color: "var(--accent)" }}
      >
        Skills
      </h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="text-sm px-2.5 py-0.5 rounded-full font-medium border"
            style={{
              color: "var(--accent)",
              borderColor: "var(--accent)",
              opacity: 0.9,
            }}
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
