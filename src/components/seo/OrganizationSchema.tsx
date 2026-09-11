export default function OrganizationSchema() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://vedaitlabs.com/#organization",
    name: "VedAIT Labs",
    legalName: "VedAIT Labs",
    alternateName: "VedAIT",
    description:
      "VedAIT Labs is an applied AI startup building machine learning, generative and agentic AI, data intelligence, computer vision, and production AI systems for growing teams.",
    slogan: "Applied AI & Intelligent Systems",
    foundingDate: "2026",
    url: "https://vedaitlabs.com",
    logo: "https://vedaitlabs.com/images/logo.png",
    image: "https://vedaitlabs.com/images/logo.png",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Sankhamul",
      addressRegion: "Kathmandu",
      addressCountry: "NP",
    },
    
    areaServed: "Worldwide",
    knowsAbout: [
      "Applied AI",
      "Machine Learning",
      "Generative AI",
      "Agentic AI",
      "Data Engineering",
      "Computer Vision",
      "MLOps",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(organizationSchema),
      }}
    />
  );
}
