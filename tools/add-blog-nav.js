// Adds "Blog" to desktop nav + mobile menu on all existing site pages (EN + AR)
const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '..');
const FILES = ['index.html','gents-shawls.html','ladies-shawls.html','keffiyehs.html','yemeni-scarves.html','prayer-rugs.html','sarongs.html','faq.html'];

for (const dir of ['', 'ar']) {
  const isAr = dir === 'ar';
  const label = isAr ? 'المدونة' : 'Blog';
  const link = `<a href="blog.html" data-en="Blog" data-ar="المدونة">${label}</a>\n    `;
  const linkMobile = `<a href="blog.html" data-en="Blog" data-ar="المدونة">${label}</a>\n`;

  for (const file of FILES) {
    const p = path.join(ROOT, dir, file);
    let t = fs.readFileSync(p, 'utf8');
    if (t.includes('href="blog.html"')) { console.log((dir ? dir + '/' : '') + file + ': already has blog link'); continue; }
    let n = 0;

    // desktop nav (contact link without onclick)
    for (const anchor of ['<a href="#contact" data-en="Contact"', '<a href="index.html#contact" data-en="Contact"']) {
      if (t.includes(anchor)) { t = t.replace(anchor, link + anchor); n++; break; }
    }
    // mobile menu (contact link with closeMobile)
    for (const anchor of ['<a href="#contact" onclick="closeMobile()"', '<a href="index.html#contact" onclick="closeMobile()"']) {
      if (t.includes(anchor)) { t = t.replace(anchor, linkMobile + anchor); n++; break; }
    }

    fs.writeFileSync(p, t);
    console.log((dir ? dir + '/' : '') + file + ': ' + n + '/2 insertions');
  }
}
