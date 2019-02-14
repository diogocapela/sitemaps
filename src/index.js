const fs = require('fs');

module.exports = (highPriority, lowPriority, filePath, callback) => {
    const timestamp = new Date().toISOString();
    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n\n';

    xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n';
    xml += '\txmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n';
    xml += '\txsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9\n';
    xml += '\thttp://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">\n\n';

    highPriority.forEach((link) => {
        xml += '\t<url>\n';
        xml += `\t\t<loc>${link}</loc>\n`;
        xml += `\t\t<lastmod>${timestamp}</lastmod>\n`;
        xml += '\t\t<priority>1.00</priority>\n';
        xml += '\t</url>\n';
    });

    lowPriority.forEach((link) => {
        xml += '\t<url>\n';
        xml += `\t\t<loc>${link}</loc>\n`;
        xml += `\t\t<lastmod>${timestamp}</lastmod>\n`;
        xml += '\t\t<priority>0.80</priority>\n';
        xml += '\t</url>\n';
    });

    xml += '\n</urlset>\n';

    fs.writeFile(filePath, xml, (error) => {
        if (error) {
            callback(null, error);
        } else {
            callback(xml, null);
        }
    });
};
