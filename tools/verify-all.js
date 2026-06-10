// Full-site static check: div balance, local link resolution, local image resolution.
const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '..');

const pages = [];
for (const f of fs.readdirSync(ROOT)) if (f.endsWith('.html') && f !== 'option1.html' && f !== 'google0102ad0f38cbbbb8.html') pages.push(f);
for (const f of fs.readdirSync(path.join(ROOT, 'ar'))) if (f.endsWith('.html')) pages.push('ar/' + f);
for (const f of fs.readdirSync(path.join(ROOT, 'blog'))) if (f.endsWith('.html')) pages.push('blog/' + f);
for (const f of fs.readdirSync(path.join(ROOT, 'ar', 'blog'))) if (f.endsWith('.html')) pages.push('ar/blog/' + f);

let issues = 0;
for (const page of pages) {
  const full = path.join(ROOT, page);
  const t = fs.readFileSync(full, 'utf8');
  const dirOf = path.dirname(full);
  const probs = [];

  const o = (t.match(/<div/g) || []).length, c = (t.match(/<\/div>/g) || []).length;
  if (o !== c) probs.push(`div ${o}/${c}`);

  // local hrefs/srcs
  const refs = [...t.matchAll(/(?:href|src)="([^"#]+?)(?:#[^"]*)?"/g)].map(m => m[1])
    .filter(u => !/^(https?:|mailto:|tel:|data:|\/\/)/.test(u) && u.trim() !== '');
  for (const r of new Set(refs)) {
    const target = path.resolve(dirOf, decodeURIComponent(r));
    if (!fs.existsSync(target)) probs.push('missing: ' + r);
  }

  if (probs.length) { issues++; console.log(page + ' -> ' + probs.join(' | ')); }
}
console.log(issues === 0 ? `ALL ${pages.length} PAGES OK` : `${issues} pages with issues`);
