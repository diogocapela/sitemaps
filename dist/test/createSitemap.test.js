"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("..");
const urls = [
    {
        loc: 'https://example.com',
        changefreq: 'monthly',
        priority: 1,
    },
    {
        loc: 'https://example.com/about',
        changefreq: 'weekly',
        priority: 0.5,
    },
];
const xmlTags = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"',
    'xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"',
    'xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9',
    'http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">',
    '<priority>1.00</priority>',
    '<changefreq>monthly</changefreq>',
    '</urlset>',
];
const expected = [...urls.map((url) => `<loc>${url.loc}</loc>`), ...xmlTags];
describe('createSitemap', () => {
    it('should work', () => {
        const xml = (0, __1.createSitemap)({
            filePath: undefined,
            urls,
        });
        expected.forEach((tag) => {
            expect(xml.includes(tag)).toBe(true);
        });
    });
});
