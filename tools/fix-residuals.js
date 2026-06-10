const fs = require('fs');
const SWAPS = [
  ["Wholesale supply from India's trusted manufacturer since 1970.",
   "Wholesale supply from India's trusted supplier since 1970."],
  ["Wholesale supply from India's trusted textile manufacturer since 1970.",
   "Wholesale supply from India's trusted textile supplier since 1970."],
  // ar/gents data-en attr: entities were decoded to plain apostrophes during AR generation
  ["Yasmeen Silk Corporation has manufactured men's shawls and rida in Mumbai since 1970. From the classic black rida worn for prayer and religious gatherings to richly bordered ceremonial shawls, every piece is woven, finished, and inspected in-house — then supplied in bulk",
   "Yasmeen Silk Corporation has supplied men's shawls and rida from Mumbai since 1970. From the classic black rida worn for prayer and religious gatherings to richly bordered ceremonial shawls, every style is produced by factories working under our brand and quality standards — and supplied in bulk"],
];
const FILES = ['gents-shawls.html','ladies-shawls.html','ar/gents-shawls.html','ar/ladies-shawls.html'];
for (const f of FILES) {
  let t = fs.readFileSync(f, 'utf8');
  let n = 0;
  for (const [o, w] of SWAPS) if (t.includes(o)) { t = t.split(o).join(w); n++; }
  if (n) fs.writeFileSync(f, t);
  console.log(f + ': ' + n);
}
// final sweep
console.log('--- remaining manufactur mentions (non-keyword) ---');
const all = ['index.html','gents-shawls.html','ladies-shawls.html','keffiyehs.html','yemeni-scarves.html','prayer-rugs.html','sarongs.html','faq.html'];
let found = 0;
for (const dir of ['', 'ar/']) for (const f of all) {
  const t = fs.readFileSync(dir + f, 'utf8');
  t.split('\n').forEach((line, i) => {
    if (/manufactur/i.test(line) && !line.includes('name="keywords"')) { found++; console.log(dir + f + ':' + (i + 1)); }
  });
}
for (const dir of ['blog/', 'ar/blog/']) for (const f of fs.readdirSync(dir)) {
  const t = fs.readFileSync(dir + f, 'utf8');
  t.split('\n').forEach((line, i) => {
    if (/manufactur/i.test(line)) { found++; console.log(dir + f + ':' + (i + 1) + ': ' + line.trim().slice(0, 100)); }
  });
}
console.log(found ? found + ' remaining' : 'CLEAN');
