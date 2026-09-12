import type { Metadata } from "next";
import WorkContent from "./WorkContent";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "See how VedAIT Labs combines AI, software engineering, and experimentation to turn ideas into intelligent technology.",
  alternates: {
    canonical: "/work",
  },
  openGraph: {
    title: "Our Work | VedAIT Labs",
    description:
      "See how VedAIT Labs combines AI, software engineering, and experimentation to turn ideas into intelligent technology.",
    url: "/work",
    type: "website",
  },
};

export default function WorkPage() {
  return <WorkContent />;
}
