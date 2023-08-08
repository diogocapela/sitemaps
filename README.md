# sitemaps

[![NPM](https://img.shields.io/npm/v/sitemaps.svg)](https://www.npmjs.com/package/sitemaps)
[![Build Status](https://travis-ci.org/diogocapela/sitemaps.svg?branch=master)](https://travis-ci.org/diogocapela/sitemaps)

A simple sitemap.xml generator.

## Installation

```bash
npm i sitemaps --save
```

## Usage

### `createSitemap()`

Generates a sitemap XML file with the custom URLs on the specified path.

```typescript
import path from 'path';
import { createSitemap } from 'sitemaps';

createSitemap({
  filePath: path.join(__dirname, 'sitemap.xml'),
  urls: [
    {
      loc: 'https://example.com',
      lastmod: '2023-01-31',
      changefreq: 'weekly',
      priority: 1,
    },
    {
      loc: 'https://example.com/about',
      lastmod: '2022-10-21',
      changefreq: 'monthly',
      priority: 0.8,
    },
    {
      loc: 'https://example.com/contact',
      lastmod: '2021-04-30',
      changefreq: 'yearly',
      priority: 0.4,
    },
  ],
});

// The sitemap.xml file will be created in the specified path.
```

| Attribute    | Type              | Description                                                                                                                                                                                                      |
| ------------ | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `loc`        | string (required) | URL of the page. This URL must begin with the protocol (such as http). This value must be less than 2,048 characters.                                                                                            |
| `lastmod`    | string (optional) | The date of last modification of the page. This date should be in [W3C Datetime](https://www.w3.org/TR/NOTE-datetime) format. This format allows you to omit the time portion, if desired, and use `YYYY-MM-DD`. |
| `changefreq` | enum (optional)   | How frequently the page is likely to change. Valid values are `always`, `hourly`, `daily`, `weekly`, `monthly`, `yearly`, and, `never`.                                                                          |
| `priority`   | number (optional) | The priority of this URL relative to other URLs on your site. Valid values range from `0` to `1`. The default `priority` of a page is `0.5`.                                                                     |

### `createSitemapIndex()`

Generates a sitemap index XML file with the custom sitemaps on the specified path.

```typescript
import path from 'path';
import { createSitemapIndex } from 'sitemaps';

createSitemapIndex({
  filePath: path.join(__dirname, 'sitemap-index.xml'),
  sitemaps: [
    {
      loc: 'https://example.com/sitemap-1.xml',
      lastmod: '2023-01-31',
    },
    {
      loc: 'https://example.com/sitemap-2.xml',
      lastmod: '2023-01-31',
    },
  ],
});

// The sitemapIndex.xml file will be created in the specified path.
```

| Attribute | Type              | Description                                                                                                                                              |
| --------- | ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `loc`     | string (required) | Identifies the location of the Sitemap.                                                                                                                  |
| `lastmod` | string (optional) | Identifies the time that the corresponding Sitemap file was modified. The value should be in [W3C Datetime](https://www.w3.org/TR/NOTE-datetime) format. |

## License

Open source under the terms of the [MIT License](/LICENSE).

Maintained by [Diogo Capela](https://diogocapela.com).
