const fs = require('fs');

module.exports = (filePath, links = []) => {
  const timestamp = new Date().toISOString();
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n\n';

  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n';
  xml += '\txmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n';
  xml += '\txsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9\n';
  xml += '\thttp://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">\n\n';

  links.forEach((link) => {
    xml += '\t<url>\n';
    xml += `\t\t<loc>${link.loc}</loc>\n`;
    xml += `\t\t<lastmod>${link.lastmod || timestamp}</lastmod>\n`;
    xml += `\t\t<changefreq>${link.changefreq || 'monthly'}</changefreq>\n`;
    xml += `\t\t<priority>${link.priority || '1.00'}</priority>\n`;
    xml += '\t</url>\n';
  });

  xml += '\n</urlset>\n';

  fs.writeFileSync(filePath, xml);

  return xml;
};
