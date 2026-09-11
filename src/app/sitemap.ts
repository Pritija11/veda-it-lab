import type { MetadataRoute } from "next";

import { pillars } from "@/data/pillars";
import { researchArticles } from "@/data/research";

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
      url: `${baseUrl}/industries`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/how-we-work`,
      changeFrequency: "monthly",
      priority: 0.7,
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
    ...pillars.map((pillar) => ({
      url: `${baseUrl}/solutions/${pillar.id}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),

    // Research articles
    ...researchArticles.map((article) => ({
      url: `${baseUrl}/research/${article.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),

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
