# sitemaps

[![NPM](https://img.shields.io/npm/v/sitemaps.svg)](https://www.npmjs.com/package/sitemaps)
[![Build Status](https://travis-ci.org/diogocapela/sitemaps.svg?branch=master)](https://travis-ci.org/diogocapela/sitemaps)

A simple sitemap.xml generator.

## Install

```bash
$ npm i sitemaps --save
```

## Usage

```javascript
const sitemaps = require('sitemaps');

const filePath = `${__dirname}/sitemap.xml`;

const links = [
    {
        loc: 'https://example.com',
        priority: '1.00',
        changefreq: 'weekly',
    },
    {
        loc: 'https://example.com/about',
        priority: '0.80',
        changefreq: 'monthly',
    },
    {
        loc: 'https://example.com/services',
        priority: '0.80',
        changefreq: 'monthly',
    },
    {
        loc: 'https://example.com/contact',
        priority: '0.60',
        changefreq: 'monthly',
    },
];

sitemaps(filePath, links);

console.log(`Sitemap.xml generated at: ${filePath}`);
```

## License

Open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
