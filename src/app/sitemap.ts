import type { MetadataRoute } from 'next';
import { PAGES, SITE } from '@/data/site';
export default function sitemap(): MetadataRoute.Sitemap { return [SITE.url, ...PAGES.map((p) => `${SITE.url}/${p.slug}`)].map((url) => ({ url, lastModified: new Date() })); }
