const fs = require('fs');
const files = ['index.html','gents-shawls.html','ladies-shawls.html','keffiyehs.html','yemeni-scarves.html','prayer-rugs.html','sarongs.html','faq.html'];
let fail = 0;
for (const f of files) {
  const t = fs.readFileSync('ar/' + f, 'utf8');
  const checks = {
    'rtl': /<html[^>]*dir="rtl"/.test(t),
    'lang=ar': /<html[^>]*lang="ar"/.test(t),
    'ar title': /<title>[^<]*\|?[^<]*ياسمين/.test(t) || /<title>[^<]*شركة ياسمين/.test(t),
    'canonical /ar/': t.includes('rel="canonical" href="https://yasmeensilk.com/ar/'),
    'hreflang en': t.includes('hreflang="en"'),
    'no bad img path': !t.includes('src="images/') && !t.includes('../../'),
    'toggle->EN': t.includes("location.href='../"),
    'arabic body text': /شال|شماغ|معاوز|سجاد|أسئلة|ياسمين/.test(t),
    'div balance': (t.match(/<div/g)||[]).length === (t.match(/<\/div>/g)||[]).length,
  };
  const bad = Object.entries(checks).filter(([k,v]) => !v).map(([k]) => k);
  if (bad.length) { fail++; console.log('ar/' + f + ' FAIL: ' + bad.join(', ')); }
  else console.log('ar/' + f + ' OK');
}
// EN pages: toggle now navigates to ar/
for (const f of files) {
  const t = fs.readFileSync(f, 'utf8');
  const ok = t.includes("location.href='ar/");
  if (!ok) { fail++; console.log(f + ' FAIL: toggle not redirecting to ar/'); }
}
console.log(fail ? 'FAILURES: ' + fail : 'ALL OK');
