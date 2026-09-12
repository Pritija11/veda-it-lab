import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "VedAIT Labs is a technology startup exploring artificial intelligence, software engineering, and emerging technologies to build useful digital products.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About VedAIT Labs",
    description:
      "VedAIT Labs is a technology startup exploring artificial intelligence, software engineering, and emerging technologies to build useful digital products.",
    url: "/about",
    type: "website",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
