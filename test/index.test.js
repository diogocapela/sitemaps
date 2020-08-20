/* eslint-disable no-undef */

const assert = require('assert');
const merge = require('lodash/merge');
const sitemaps = require('../src');

const filePath = `${__dirname}/sitemap.xml.log`;

const links = [
  {
    loc: 'https://example.com',
  },
  {
    loc: 'https://example.com/about',
  },
  {
    loc: 'https://example.com/contact',
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

const expected = merge(
  links.map((l) => `<loc>${l}</loc>`),
  xmlTags
);

describe('sitemaps', () => {
  it('should work', () => {
    const xml = sitemaps(filePath, links);

    expected.forEach((tag) => {
      assert.equal(true, xml.includes(tag));
    });
  });
});
