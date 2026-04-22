import type { MetadataRoute } from "next";
import { business } from "@/lib/business";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = business.siteUrl.replace(/\/$/, "");
  const now = new Date();

  const routes = [
    { path: "/", priority: 1.0 },
    { path: "/services/", priority: 0.9 },
    { path: "/blog/", priority: 0.9 },
    { path: "/v2/", priority: 0.5 },
    { path: "/v3/", priority: 0.8 },
    { path: "/v4/", priority: 0.9 },
    { path: "/v5/", priority: 0.9 },
    { path: "/v6/", priority: 1.0 },
  ];

  return routes.map((r) => ({
    url: `${base}${r.path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: r.priority,
  }));
}
