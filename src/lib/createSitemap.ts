import fs from 'fs';

export interface UrlItem {
  loc: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

export interface CreateSitemapOptions {
  filePath: string | undefined;
  urls: UrlItem[];
}

export function createSitemap({ filePath, urls }: CreateSitemapOptions): string {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n\n';

  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n';
  xml += '\txmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n';
  xml += '\txsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9\n';
  xml += '\thttp://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">\n\n';

  urls.forEach(({ loc, lastmod, changefreq, priority }) => {
    xml += '\t<url>\n';
    xml += `\t\t<loc>${loc}</loc>\n`;
    xml += typeof lastmod === 'string' ? `\t\t<lastmod>${lastmod}</lastmod>\n` : '';
    xml += typeof changefreq === 'string' ? `\t\t<changefreq>${changefreq}</changefreq>\n` : '';
    xml += typeof priority === 'number' ? `\t\t<priority>${priority.toFixed(2)}</priority>\n` : '';
    xml += '\t</url>\n';
  });

  xml += '\n</urlset>\n';

  if (filePath) {
    fs.writeFileSync(filePath, xml);
  }

  return xml;
}
