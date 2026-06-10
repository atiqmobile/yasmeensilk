// Extends the self-drawing star to pages using the `.geo-separator` markup variant
const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '..');

const STAR_SVG = `<svg class="sep-star" viewBox="0 0 80 80" width="60" height="60" fill="none" stroke="#C9A96E" stroke-width="1.5" aria-hidden="true">
<rect class="dr dr1" x="22" y="22" width="36" height="36" pathLength="100"/>
<rect class="dr dr2" x="22" y="22" width="36" height="36" transform="rotate(45 40 40)" pathLength="100"/>
<circle class="dr dr3" cx="40" cy="40" r="5" pathLength="100" fill="rgba(201,169,110,0.25)"/>
</svg>`;

const FILES = ['index.html','gents-shawls.html','ladies-shawls.html','keffiyehs.html','yemeni-scarves.html','prayer-rugs.html','sarongs.html','faq.html'];

for (const file of FILES) {
  const p = path.join(ROOT, file);
  let t = fs.readFileSync(p, 'utf8');
  const log = [];

  // swap geo-separator icon/motif variants for the SVG star
  for (const variant of ['icon', 'motif']) {
    const old = `<div class="geo-separator"><div class="geo-separator-${variant}"><div class="geo-separator-star"></div></div></div>`;
    if (t.includes(old)) {
      t = t.split(old).join(`<div class="geo-separator">${STAR_SVG}</div>`);
      log.push('swap-' + variant);
    }
  }

  // generalize CSS selectors
  if (t.includes('.geo-sep .sep-star .dr{')) {
    t = t.replace('.geo-sep .sep-star .dr{', '.sep-star .dr{');
    t = t.replace('.geo-sep.visible .sep-star .dr{', '.geo-sep.visible .sep-star .dr,.geo-separator.visible .sep-star .dr{');
    t = t.replace('.geo-sep .sep-star .dr2{', '.sep-star .dr2{');
    t = t.replace('.geo-sep .sep-star .dr3{', '.sep-star .dr3{');
    log.push('css');
  }

  // observer watches both variants
  if (t.includes("querySelectorAll('.geo-sep')")) {
    t = t.split("querySelectorAll('.geo-sep')").join("querySelectorAll('.geo-sep,.geo-separator')");
    log.push('observer');
  }

  fs.writeFileSync(p, t);
  console.log(file + ': ' + (log.join(', ') || 'no changes'));
}
