export default function OrganizationSchema() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "VedAIT Labs",
    description:
      "VedAIT Labs is a technology startup building modern digital and infrastructure solutions, with a strong focus on cloud engineering, DevOps, automation, and security.",
    url: "https://vedaitlabs.com",
    logo: "https://vedaitlabs.com/images/logo.png",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kathmandu",
      addressCountry: "NP",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "01-523456",
      contactType: "customer service",
    },
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
