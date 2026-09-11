import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import OrganizationSchema from "@/components/seo/OrganizationSchema";

import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vedaitlabs.com"),

  title: {
    default: "VedAIT Labs | Applied AI & Machine Learning Startup",
    template: "%s | VedAIT Labs",
  },

  description:
    "VedAIT Labs is an applied AI startup building machine learning, generative and agentic AI, data intelligence, computer vision, and production AI systems for growing teams.",

  alternates: {
    canonical: "/",
  },

  keywords: [
    "VedAIT Labs",
    "VedAIT Labs startup",
    "applied AI startup",
    "AI research",
    "machine learning",
    "generative AI",
    "agentic AI",
    "computer vision",
    "MLOps",
    "AI engineering",
  ],

  authors: [{ name: "VedAIT Labs" }],
  creator: "VedAIT Labs",

  openGraph: {
    title: "VedAIT Labs | Applied AI & Machine Learning Startup",
    description:
      "VedAIT Labs is an applied AI startup building machine learning, generative and agentic AI, data intelligence, computer vision, and production AI systems for growing teams.",
    type: "website",
    siteName: "VedAIT Labs",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jakarta.variable} ${fraunces.variable} antialiased`}
      >
        <OrganizationSchema />
        <Navbar />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}