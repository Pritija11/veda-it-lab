import type { Metadata } from "next";
import SolutionsContent from "./SolutionsContent";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "VedAIT Labs combines AI, software engineering, and experimentation to turn ideas into intelligent technology and digital products.",
  alternates: {
    canonical: "/solutions",
  },
  openGraph: {
    title: "Solutions | VedAIT Labs",
    description:
      "VedAIT Labs combines AI, software engineering, and experimentation to turn ideas into intelligent technology and digital products.",
    url: "/solutions",
    type: "website",
  },
};

export default function SolutionsPage() {
  return <SolutionsContent />;
}
