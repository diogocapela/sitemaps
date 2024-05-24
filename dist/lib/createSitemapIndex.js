"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSitemapIndex = void 0;
const fs_1 = __importDefault(require("fs"));
function createSitemapIndex({ filePath, sitemaps }) {
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
        fs_1.default.writeFileSync(filePath, xml);
    }
    return xml;
}
exports.createSitemapIndex = createSitemapIndex;
