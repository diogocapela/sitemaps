import fs from 'fs';

export interface SitemapItem {
  loc: string;
  lastmod?: string;
}

export interface CreateSitemapIndexOptions {
  filePath: string | undefined;
  sitemaps: SitemapItem[];
}

export function createSitemapIndex({ filePath, sitemaps }: CreateSitemapIndexOptions): string {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n\n';

  xml += '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n\n';

  sitemaps.forEach(({ loc, lastmod }) => {
    xml += '\t<sitemap>\n';
    xml += `\t\t<loc>${loc}</loc>\n`;
    xml += typeof lastmod === 'string' ? `\t\t<lastmod>${lastmod}</lastmod>\n` : '';
    xml += '\t</sitemap>\n';
  });

  xml += '\n</sitemapindex>\n';

  if (filePath) {
    fs.writeFileSync(filePath, xml);
  }

  return xml;
}
