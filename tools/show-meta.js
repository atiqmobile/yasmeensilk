const fs = require('fs');
for (const f of ['gents-shawls.html', 'ladies-shawls.html']) {
  const t = fs.readFileSync(f, 'utf8');
  const m = t.match(/<meta name="description" content="([^"]+)"/);
  console.log(f + ':\n  ' + m[1]);
}
// also show the residual data-en on ar/gents
const ar = fs.readFileSync('ar/gents-shawls.html', 'utf8');
const i = ar.indexOf('has manufactured');
console.log('\nar/gents-shawls.html residual:\n  ' + ar.slice(i - 80, i + 200));
