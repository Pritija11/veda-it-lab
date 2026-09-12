import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import OrganizationSchema from "@/components/seo/OrganizationSchema";
import "./globals.css";

import SmoothScroll from "@/components/layout/SmoothScroll";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vedaitlabs.com"),
  title: {
    default: "VedAIT Labs | Technology Startup Building Intelligent Solutions",
    template: "%s | VedAIT Labs",
  },
  description:
    "VedAIT Labs is a technology startup building intelligent digital solutions with AI, software, and emerging technologies.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "VedAIT Labs | Technology Startup Building Intelligent Solutions",
    description:
      "VedAIT Labs is a technology startup building intelligent digital solutions with AI, software, and emerging technologies.",
    siteName: "VedAIT Labs",
    url: "/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VedAIT Labs | Technology Startup Building Intelligent Solutions",
    description:
      "VedAIT Labs is a technology startup building intelligent digital solutions with AI, software, and emerging technologies.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={dmSans.variable}>
        <OrganizationSchema />
        <SmoothScroll />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}