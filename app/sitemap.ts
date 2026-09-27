import type { MetadataRoute } from "next"
import { SITE_URL } from "@/lib/constants"

const LAST_MOD = new Date("2026-09-27")

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: LAST_MOD,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/services`,
      lastModified: LAST_MOD,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/services/brake-repair-springfield-or`,
      lastModified: LAST_MOD,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/services/oil-change-springfield-or`,
      lastModified: LAST_MOD,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/services/transmission-service-springfield-or`,
      lastModified: LAST_MOD,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/services/auto-diagnostics-springfield-or`,
      lastModified: LAST_MOD,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/services/timing-belt-chain-springfield-or`,
      lastModified: LAST_MOD,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/services/coolant-system-service-springfield-or`,
      lastModified: LAST_MOD,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/services/fuel-injection-service-springfield-or`,
      lastModified: LAST_MOD,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/services/power-steering-service-springfield-or`,
      lastModified: LAST_MOD,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/locations`,
      lastModified: LAST_MOD,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/locations/springfield-or-auto-repair`,
      lastModified: LAST_MOD,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/locations/eugene-or-auto-repair`,
      lastModified: LAST_MOD,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/locations/junction-city-or-auto-repair`,
      lastModified: LAST_MOD,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/reviews`,
      lastModified: LAST_MOD,
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: LAST_MOD,
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ]
}
