const fs = require('fs');
const anchor = '<a href="index.html#contact" data-en="Contact" data-ar="اتصل بنا" onclick="closeMobile()">';

let en = fs.readFileSync('yemeni-scarves.html', 'utf8');
if (en.includes(anchor) && !en.match(/blog\.html[^\n]*\n<a href="index\.html#contact"[^>]*closeMobile/)) {
  en = en.replace(anchor, '<a href="blog.html" data-en="Blog" data-ar="المدونة">Blog</a>\n' + anchor);
  fs.writeFileSync('yemeni-scarves.html', en);
  console.log('yemeni-scarves.html: mobile blog link added');
}

let ar = fs.readFileSync('ar/yemeni-scarves.html', 'utf8');
const arAnchor = ar.match(/<a href="index\.html#contact" data-en="Contact" data-ar="اتصل بنا" onclick="closeMobile\(\)">/);
if (arAnchor) {
  ar = ar.replace(arAnchor[0], '<a href="blog.html" data-en="Blog" data-ar="المدونة">المدونة</a>\n' + arAnchor[0]);
  fs.writeFileSync('ar/yemeni-scarves.html', ar);
  console.log('ar/yemeni-scarves.html: mobile blog link added');
} else {
  console.log('ar/yemeni-scarves.html: anchor not found — check manually');
}
