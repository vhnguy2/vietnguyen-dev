import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Viet Nguyen — Software Engineer · AI Agentic Systems",
  description:
    "Software engineer building AI-powered products — agentic systems, multi-modal pipelines, and production applications with Claude, Gemini, and Plaid.",
  openGraph: {
    title: "Viet Nguyen — Software Engineer · AI Agentic Systems",
    description:
      "Software engineer with experience building AI-powered products — agentic systems, multi-modal pipelines, and production applications.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Viet Nguyen — Software Engineer · AI Agentic Systems",
    description:
      "Software engineer with experience building AI-powered products — agentic systems, multi-modal pipelines, and production applications.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0a0a0a] text-zinc-100`}
      >
        {children}
      </body>
    </html>
  );
}
