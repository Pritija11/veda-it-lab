const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "VedAIT Labs",
  legalName: "VedAIT Labs",
  url: "https://vedaitlabs.com",
  logo: "https://vedaitlabs.com/logo/logo-1.png",
  description:
    "VedAIT Labs is a technology startup building intelligent digital solutions with AI, software, and emerging technologies.",
  email: "hello@vedaitlabs.com",
  telephone: "+977-01-5234567",
  address: {
    "@type": "PostalAddress",
    streetAddress: "New Baneshwor",
    addressLocality: "Kathmandu",
    addressCountry: "NP",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    email: "hello@vedaitlabs.com",
    telephone: "+977-01-5234567",
  },
};

export default function OrganizationSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  );
}
