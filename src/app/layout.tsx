import type { Metadata } from "next";
import { Source_Serif_4, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { ThemeScript } from "@/components/ThemeScript";

// Source Serif for reading text and headings, Source Sans for the interface.
// The two were designed as a family, so they sit together without fuss.
const bodySerif = Source_Serif_4({
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
  variable: "--font-serif",
});

const uiSans = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Nuvex — Lesson notes for Liberian teachers",
  description:
    "Lesson notes, worked examples, quizzes and test questions for the Liberian MoE curriculum, organised by grade, subject and period.",
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
      className={`${bodySerif.variable} ${uiSans.variable}`}
    >
      <head>
        <ThemeScript />
      </head>
      <body className="min-h-screen font-sans antialiased">{children}</body>
    </html>
  );
}
