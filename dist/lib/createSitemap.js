"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSitemap = void 0;
const fs_1 = __importDefault(require("fs"));
function createSitemap({ filePath, urls }) {
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
        fs_1.default.writeFileSync(filePath, xml);
    }
    return xml;
}
exports.createSitemap = createSitemap;
