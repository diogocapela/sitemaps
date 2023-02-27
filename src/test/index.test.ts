import assert from 'assert';
import merge from 'lodash/merge';
import { createSitemap, UrlItem } from '..';

const urls: UrlItem[] = [
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
  urls.map((url) => `<loc>${url.loc}</loc>`),
  xmlTags
);

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
describe('sitemaps', () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  it('should work', () => {
    const xml = createSitemap({
      filePath: undefined,
      urls,
    });

    expected.forEach((tag) => {
      assert.equal(true, xml.includes(tag));
    });
  });
});
