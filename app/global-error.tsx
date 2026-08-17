"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html>
      <body>
        <main className="min-h-screen flex flex-col items-center justify-center gap-4">
          <h1 className="text-3xl font-bold">
            Something went wrong
          </h1>

          <p>
            An unexpected error occurred.
          </p>

          <button
            onClick={() => window.location.reload()}
            className="rounded-lg bg-yellow-300 px-6 py-3 font-bold text-black"
          >
            Try again
          </button>
        </main>
      </body>
    </html>
  );
}