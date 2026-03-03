export default function About({ bio }: { bio: string }) {
  return (
    <section className="my-8">
      <p className="text-neutral-800 dark:text-neutral-200">{bio}</p>
    </section>
  );
}
