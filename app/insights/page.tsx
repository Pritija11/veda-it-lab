import type { Metadata } from "next";
import InsightsContent from "./InsightsContent";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "From early experiments to digital products, VedAIT Labs explores ideas in AI, software, and emerging technology.",
  alternates: {
    canonical: "/insights",
  },
  openGraph: {
    title: "Insights | VedAIT Labs",
    description:
      "From early experiments to digital products, VedAIT Labs explores ideas in AI, software, and emerging technology.",
    url: "/insights",
    type: "website",
  },
};

export default function InsightsPage() {
  return <InsightsContent />;
}
