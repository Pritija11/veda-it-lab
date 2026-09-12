import type { Metadata } from "next";
import TechnologyContent from "./TechnologyContent";

export const metadata: Metadata = {
  title: "Technology",
  description:
    "From artificial intelligence and machine learning to software and emerging interfaces, explore the technology VedAIT Labs builds with.",
  alternates: {
    canonical: "/technology",
  },
  openGraph: {
    title: "Technology | VedAIT Labs",
    description:
      "From artificial intelligence and machine learning to software and emerging interfaces, explore the technology VedAIT Labs builds with.",
    url: "/technology",
    type: "website",
  },
};

export default function TechnologyPage() {
  return <TechnologyContent />;
}
