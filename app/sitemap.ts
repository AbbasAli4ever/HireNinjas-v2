import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://hireninjas.io";
  const lastModified = new Date("2026-06-10");

  return [
    { url: `${base}/`, lastModified, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/digital-strategy`, lastModified, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/lead-generation`, lastModified, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/seo-ppc`, lastModified, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/marketing-consultations`, lastModified, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/ai-marketing`, lastModified, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/website-development`, lastModified, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/social-media`, lastModified, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/video-production`, lastModified, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/branding`, lastModified, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/staff-augmentation`, lastModified, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/industries/b2b-marketing`, lastModified, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/industries/real-estate`, lastModified, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/industries/healthcare`, lastModified, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/industries/education-marketing`, lastModified, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/industries/hospitality`, lastModified, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/industries/automotive-marketing`, lastModified, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/industries/ecommerce-marketing`, lastModified, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/industries/finance-fintech-marketing`, lastModified, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/contact`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/packages`, lastModified, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/privacy-policy`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/terms-and-conditions`, lastModified, changeFrequency: "yearly", priority: 0.3 },
  ];
}
