import type { Metadata } from "next";

import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import { ThemeProvider } from "./provider";

import FeedbackWidget from "@/components/FeedbackWidget";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bisaka.com.np"),

  title: {
    default: "Bisaka Shrestha | Web Developer",
    template: "%s | Bisaka Shrestha",
  },

  description:
    "Bisaka Shrestha is a web developer and IT student from Nepal, specializing in modern web development with Next.js, React, TypeScript, and Django.",

  keywords: [
    "Bisaka Shrestha",
    "Bisaka",
    "Bisaka Shrestha web developer",
    "web developer Nepal",
    "Next.js developer",
    "React developer",
    "Django developer",
    "portfolio",
  ],

  authors: [
    {
      name: "Bisaka Shrestha",
      url: "https://bisaka.com.np",
    },
  ],

  creator: "Bisaka Shrestha",

  alternates: {
    canonical: "https://bisaka.com.np/",
  },

  openGraph: {
    title: "Bisaka Shrestha | Web Developer",
    description:
      "Portfolio of Bisaka Shrestha — web developer and IT student from Nepal.",
    url: "https://bisaka.com.np/",
    siteName: "Bisaka Shrestha",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full w-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>

        <FeedbackWidget />
      </body>
    </html>
  );
}