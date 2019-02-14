/* eslint-disable no-undef */

const assert = require('assert');
const merge = require('lodash/merge');
const sitemaps = require('../src');

const filePath = `${__dirname}/sitemap.xml.log`;

const highPriority = [
    'https://example.com',
];

const lowPriority = [
    'https://example.com/about',
    'https://example.com/services',
    'https://example.com/contact',
    'https://example.com/legal',
    'https://example.com/privacy',
    'https://example.com/terms',
];

const xmlTags = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"',
    'xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"',
    'xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9',
    'http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">',
    '<priority>1.00</priority>',
    '<priority>0.80</priority>',
    '</urlset>',
];

const expected = merge(
    highPriority.map(l => `<loc>${l}</loc>`),
    lowPriority.map(l => `<loc>${l}</loc>`),
    xmlTags,
);

describe('sitemap-genesis', () => {
    it('should work', () => {
        sitemaps(highPriority, lowPriority, filePath, (xml, error) => {
            expected.forEach((tag) => {
                assert.equal(true, xml.includes(tag));
            });
            assert.equal(null, error);
        });
    });
});
