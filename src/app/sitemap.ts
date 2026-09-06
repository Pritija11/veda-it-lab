import type { MetadataRoute } from "next";

const baseUrl = "https://vedaitlabs.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // Homepage
    {
      url: baseUrl,
      changeFrequency: "weekly",
      priority: 1,
    },

    // Main pages
    {
      url: `${baseUrl}/solutions`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/research`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/careers`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    // Solution pages
    {
      url: `${baseUrl}/solutions/cloud-engineering`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/solutions/devops-automation`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/solutions/infrastructure-security`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/solutions/software-engineering`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/solutions/data-ai`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/solutions/it-consulting`,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    // Legal pages
    {
      url: `${baseUrl}/privacy`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}