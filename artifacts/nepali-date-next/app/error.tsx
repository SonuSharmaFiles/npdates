"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="container mx-auto px-4 py-24 text-center">
      <p className="text-sm font-medium text-destructive tracking-widest uppercase">Error</p>
      <h1 className="mt-3 text-4xl font-serif font-bold md:text-5xl">Something went wrong</h1>
      <p className="mt-4 text-muted-foreground max-w-md mx-auto">
        An unexpected error occurred. You can try reloading the page.
      </p>
      <div className="mt-8">
        <button
          onClick={reset}
          className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium hover:opacity-90 transition-opacity"
        >
          Try again
        </button>
      </div>
    </section>
  );
}
