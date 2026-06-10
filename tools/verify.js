const fs = require('fs');
const t = fs.readFileSync('index.html', 'utf8');
const m = t.match(/data-en="Products" data-ar="([^"]+)"/);
console.log('dropdown ar:', m && m[1]);
const m2 = t.match(/data-en="Enquire" data-ar="([^"]+)"/);
console.log('card btn ar:', m2 && m2[1]);
const m3 = t.match(/<a href="(https:\/\/wa\.me[^"]+)" class="card-enquire"/);
console.log('card href sample:', m3 && decodeURIComponent(m3[1]));
console.log('country field:', t.includes('name="country"'));
console.log('quantity field:', t.includes('name="quantity"'));
// basic structural sanity: balanced lightbox + nav divs on each page
for (const f of ['index.html','gents-shawls.html','ladies-shawls.html','keffiyehs.html','yemeni-scarves.html','prayer-rugs.html','sarongs.html','faq.html']) {
  const x = fs.readFileSync(f, 'utf8');
  const opens = (x.match(/<div/g) || []).length, closes = (x.match(/<\/div>/g) || []).length;
  console.log(f, 'div balance:', opens, '/', closes, opens === closes ? 'OK' : 'MISMATCH');
}
