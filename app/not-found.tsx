import Link from "next/link";

export default function NotFound() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        404 - Page not found
      </h1>
      <p className="mb-4 text-neutral-800 dark:text-neutral-200">
        The page you're looking for doesn't exist.
      </p>
      <Link
        href="/"
        className="underline transition-all decoration-neutral-400 dark:decoration-neutral-600 underline-offset-2 decoration-[0.1em]"
      >
        Go home
      </Link>
    </section>
  );
}
