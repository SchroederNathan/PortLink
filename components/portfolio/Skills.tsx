export default function Skills({ skills }: { skills: string[] }) {
  if (skills.length === 0) return null;

  return (
    <section className="my-8">
      <h2 className="mb-4 text-xl font-semibold tracking-tighter">Skills</h2>
      <p className="text-neutral-800 dark:text-neutral-200">
        {skills.join(", ")}
      </p>
    </section>
  );
}
