const fs = require('fs');
const anchor = '<link rel="preconnect" href="https://fonts.googleapis.com">';

let en = fs.readFileSync('index.html', 'utf8');
if (!en.includes('rel="preload"')) {
  en = en.replace(anchor, '<link rel="preload" as="image" href="images/black-sarong-woven-border-hero.webp">\n' + anchor);
  fs.writeFileSync('index.html', en);
  console.log('index: preload added');
}

let ar = fs.readFileSync('ar/index.html', 'utf8');
if (!ar.includes('rel="preload"')) {
  ar = ar.replace(anchor, '<link rel="preload" as="image" href="../images/black-sarong-woven-border-hero.webp">\n' + anchor);
  fs.writeFileSync('ar/index.html', ar);
  console.log('ar/index: preload added');
}
