import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Have an idea, a problem worth solving, or a technology you want to explore? Get in touch with VedAIT Labs.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact VedAIT Labs",
    description:
      "Have an idea, a problem worth solving, or a technology you want to explore? Get in touch with VedAIT Labs.",
    url: "/contact",
    type: "website",
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
