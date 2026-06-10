// Adds og:image, twitter card, og:locale and hreflang tags to all EN pages.
// Also noindexes option1.html (old design draft = duplicate content).
const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '..');

const PAGES = {
  'index.html': '',
  'gents-shawls.html': 'gents-shawls',
  'ladies-shawls.html': 'ladies-shawls',
  'keffiyehs.html': 'keffiyehs',
  'yemeni-scarves.html': 'yemeni-scarves',
  'prayer-rugs.html': 'prayer-rugs',
  'sarongs.html': 'sarongs',
  'faq.html': 'faq',
};

for (const [file, slug] of Object.entries(PAGES)) {
  const p = path.join(ROOT, file);
  let t = fs.readFileSync(p, 'utf8');
  if (t.includes('og:image')) { console.log(file + ': og:image already present, skipped'); continue; }

  const enUrl = 'https://yasmeensilk.com/' + slug;
  const arUrl = 'https://yasmeensilk.com/ar/' + (slug || '');
  const block = [
    '<meta property="og:image" content="https://yasmeensilk.com/images/og-image.jpg">',
    '<meta property="og:image:width" content="1200">',
    '<meta property="og:image:height" content="630">',
    '<meta property="og:locale" content="en_US">',
    '<meta property="og:locale:alternate" content="ar_AR">',
    '<meta name="twitter:card" content="summary_large_image">',
    '<meta name="twitter:image" content="https://yasmeensilk.com/images/og-image.jpg">',
    `<link rel="alternate" hreflang="en" href="${enUrl}">`,
    `<link rel="alternate" hreflang="ar" href="${arUrl}">`,
    `<link rel="alternate" hreflang="x-default" href="${enUrl}">`,
  ].join('\n');

  const anchor = '<link rel="canonical"';
  if (!t.includes(anchor)) { console.error(file + ': NO CANONICAL TAG FOUND — skipped'); continue; }
  t = t.replace(anchor, block + '\n' + anchor);
  fs.writeFileSync(p, t);
  console.log(file + ': meta added');
}

// noindex option1.html
const opt = path.join(ROOT, 'option1.html');
let o = fs.readFileSync(opt, 'utf8');
if (!o.includes('noindex')) {
  o = o.replace('<meta charset="UTF-8">', '<meta charset="UTF-8">\n<meta name="robots" content="noindex, nofollow">');
  fs.writeFileSync(opt, o);
  console.log('option1.html: noindex added');
}
