"use client";

import { useEffect } from "react";
import * as Sentry from "@sentry/nextjs";

export default function FeedbackWidget() {
  useEffect(() => {
    const feedback = Sentry.getFeedback();
    const widget = feedback?.createWidget();
    return () => widget?.removeFromDom();
  }, []);

  return null;
}