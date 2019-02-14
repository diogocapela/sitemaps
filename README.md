# sitemaps

[![](https://img.shields.io/npm/v/sitemaps.svg)](https://www.npmjs.com/package/sitemaps)

A simple sitemap.xml generator.

## Install

```bash
$ npm i sitemaps --save
```

## Usage

```javascript
const sitemaps = require('sitemaps');

const highPriority = ['https://example.com'];
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

## Scripts

```bash
# Install all the dependencies
$ npm i

# Run the tests
$ npm run test

# Delete node_modules and package-lock.json
$ npm run clean
```

## License

Open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
