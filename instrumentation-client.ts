import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,

  integrations: [
    Sentry.replayIntegration({
      maskAllText: false,
      blockAllMedia: false,
    }),
    Sentry.feedbackIntegration({
      colorScheme: "dark",
      autoInject: false, // <-- disable auto-injection
    }),
  ],

  replaysSessionSampleRate: 1.0,
  replaysOnErrorSampleRate: 1.0,
});

export const onRouterTransitionStart =
  Sentry.captureRouterTransitionStart;