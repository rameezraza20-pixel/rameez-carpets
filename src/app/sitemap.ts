import type { MetadataRoute } from "next";

const SITE_URL = "https://www.rameezcarpets.com";

const staticRoutes = [
  "",
  "/about",
  "/contact",
  "/export",
  "/certifications",
];

const productSlugs = [
  "wedding",
  "events-exhibition",
  "vip-runner",
  "grass-carpet",
  "vinyl-flooring",
  "rugs",
  "spc-flooring",
  "tile-carpet",
  "design-carpet",
  "mosque-carpet",
  "loop-pile-carpets",
  "cut-pile-carpets",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...staticRoutes.map((route) => ({
      url: `${SITE_URL}${route}`,
    })),
    ...productSlugs.map((slug) => ({
      url: `${SITE_URL}/products/${slug}`,
    })),
  ];
}
