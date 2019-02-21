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

const highPriority = [
    'https://example.com',
];
const lowPriority = [
    'https://example.com/about',
    'https://example.com/services',
    'https://example.com/contact',
];
const filePath = `${__dirname}/sitemap.xml`;

sitemaps(highPriority, lowPriority, filePath, (xml, error) => {
    if (error) {
        console.log(error);
        return;
    }
    console.log(`Sitemap.xml generated at: ${filePath}`);
});
```

## License

Open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
