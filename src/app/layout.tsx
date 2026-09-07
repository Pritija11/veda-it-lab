import type { Metadata } from "next";
import { DM_Serif_Display, Manrope } from "next/font/google";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import OrganizationSchema from "@/components/seo/OrganizationSchema";

import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vedaitlabs.com"),

  title: {
    default: "VedAIT Labs | Technology Startup",
    template: "%s | VedAIT Labs",
  },

  description:
    "VedAIT Labs is a technology startup building modern digital and infrastructure solutions, with a strong focus on cloud engineering, DevOps, automation, and security.",

    alternates: {
  canonical: "/",
},

  keywords: [
    "VedAIT Labs",
    "VedAIT Labs startup",
    "technology startup",
    "IT startup",
    "cloud engineering",
    "DevOps",
    "cloud infrastructure",
    "DevOps automation",
    "IT solutions",
  ],

  authors: [{ name: "VedAIT Labs" }],
  creator: "VedAIT Labs",

  openGraph: {
    title: "VedAIT Labs | Technology Startup",
    description:
      "VedAIT Labs is a technology startup building modern digital and infrastructure solutions, with a strong focus on cloud engineering, DevOps, automation, and security.",
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
        className={`${manrope.variable} ${dmSerif.variable} antialiased`}
      >
        <OrganizationSchema />
        <Navbar />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}