// Bug: ar/index.html is served at "/ar" (no trailing slash) under Vercel cleanUrls,
// so relative links like blog.html resolve to /blog.html (English) instead of /ar/blog.html.
// Fix: make the Arabic homepage's internal page-links root-absolute (/ar/...).
// Sub-pages (/ar/keffiyehs etc.) keep the /ar/ segment so relative links work there.
const fs = require('fs');
const p = 'ar/index.html';
let t = fs.readFileSync(p, 'utf8');
const pages = ['blog','faq','gents-shawls','ladies-shawls','keffiyehs','yemeni-scarves','prayer-rugs','sarongs'];
let n = 0;
for (const slug of pages) {
  const from = `href="${slug}.html"`;
  const to = `href="/ar/${slug}.html"`;
  const parts = t.split(from);
  n += parts.length - 1;
  t = parts.join(to);
}
fs.writeFileSync(p, t);
console.log(p + ': ' + n + ' links made absolute');
// verify none remain relative
const left = (t.match(/href="[a-z0-9-]+\.html"/g) || []);
console.log('remaining relative page-links: ' + (left.length ? left.join(', ') : 'none'));
