"use client";

import * as Sentry from "@sentry/browser";
import { useState } from "react";

export default function SentryExamplePage() {
  const [sent, setSent] = useState(false);

  const testSentry = () => {
    try {
      throw new Error("Sentry test error from my portfolio");
    } catch (error) {
      Sentry.captureException(error);
      setSent(true);
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 px-6">
      <h1 className="text-3xl font-bold">
        Sentry Test
      </h1>

      <p className="text-center text-gray-400">
        Click the button to send a test error to Sentry.
      </p>

      <button
        type="button"
        onClick={testSentry}
        className="rounded-lg bg-yellow-300 px-6 py-3 font-bold text-black transition hover:bg-yellow-400"
      >
        Throw Sample Error
      </button>

      {sent && (
        <p className="text-green-400">
          Error sent to Sentry.
        </p>
      )}
    </main>
  );
}