import type { Metadata } from "next";
import { Source_Serif_4, Fraunces } from "next/font/google";
import "./globals.css";
import { ThemeScript } from "@/components/ThemeScript";

// A readable book serif for running text, and a warmer display serif for
// headings — together they give the app the feel of a printed textbook
// rather than a generic web dashboard.
const bodySerif = Source_Serif_4({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
});

const displaySerif = Fraunces({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Nuvex — Lesson notes and plans for teachers",
  description:
    "Ministry of Education-aligned lesson notes, plans, quizzes and an AI teaching assistant for Liberian teachers.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${bodySerif.variable} ${displaySerif.variable}`}
    >
      <head>
        <ThemeScript />
      </head>
      <body className="min-h-screen font-serif antialiased">{children}</body>
    </html>
  );
}
