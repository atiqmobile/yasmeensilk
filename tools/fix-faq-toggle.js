// faq.html has a minified variant of the language-toggle block
const fs = require('fs');
const RE = /let currentLang=localStorage[\s\S]*?if\(currentLang==='ar'\) applyLang\(\);/;

let en = fs.readFileSync('faq.html', 'utf8');
if (RE.test(en)) {
  en = en.replace(RE, "function applyLang(){}\nfunction toggleLang(){ location.href='ar/faq.html'; }");
  fs.writeFileSync('faq.html', en);
  console.log('faq.html: toggle fixed');
} else console.log('faq.html: pattern not found');

let ar = fs.readFileSync('ar/faq.html', 'utf8');
if (RE.test(ar)) {
  ar = ar.replace(RE, "function applyLang(){}\nfunction toggleLang(){ location.href='../faq.html'; }");
  fs.writeFileSync('ar/faq.html', ar);
  console.log('ar/faq.html: toggle fixed');
} else console.log('ar/faq.html: pattern not found');
