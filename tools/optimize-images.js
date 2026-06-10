// One-time image optimizer: resize + convert to WebP with SEO filenames.
// Originals are kept untouched in images/. Run: node tools/optimize-images.js
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const IMG = path.join(__dirname, '..', 'images');

// old filename -> [new SEO name, max width]
const MAP = {
  'DSC_1573-01.jpeg': ['black-gold-border-gents-shawl-wholesale.webp', 1600],
  'DSC_1581-01.jpeg': ['patterned-keffiyeh-multicolour-wholesale.webp', 1600],
  'DSC_1571-01.jpeg': ['traditional-yemeni-scarf-wholesale.webp', 1600],
  'DSC_1587-01.jpeg': ['bordered-ghutra-paisley-detail.webp', 1600],
  'DSC_1595-01.jpeg': ['green-gents-shawl-premium.webp', 1600],
  'DSC_1602-01.jpeg': ['classic-black-white-keffiyeh-wholesale.webp', 1600],
  'DSC_1606-01.jpeg': ['black-rida-gold-zari-shawl.webp', 1600],
  'DSC_1607-01.jpeg': ['certified-rida-collection-yasmeen.webp', 1600],
  'DSC_1612-01.jpeg': ['kashmiri-floral-embroidered-prayer-rug.webp', 1600],
  'DSC_1614-01.jpeg': ['kashmiri-embroidered-prayer-rug-collection.webp', 1600],
  'DSC_1852-01.jpeg': ['red-white-striped-sarong-wholesale.webp', 1600],
  'DSC_1856-01.jpeg': ['white-sarong-red-border-wholesale.webp', 1600],
  'DSC_1865-01.jpeg': ['black-sarong-woven-border-hero.webp', 1920],
  'DSC_1868-01.jpeg': ['traditional-ghutra-yasmeen-brand.webp', 1600],
  'DSC_1910-01.jpeg': ['ladies-shawls-designer-colour-collection.webp', 1600],
  'DSC_1923-01.jpeg': ['red-black-patterned-keffiyeh-wholesale.webp', 1600],
  'IMG-20180917-WA0086.jpg': ['ladies-shela-yasmeen-quality-labels.webp', 1600],
};

(async () => {
  let totalBefore = 0, totalAfter = 0;
  for (const [oldName, [newName, width]] of Object.entries(MAP)) {
    const src = path.join(IMG, oldName);
    const dst = path.join(IMG, newName);
    if (!fs.existsSync(src)) { console.error('MISSING: ' + oldName); process.exitCode = 1; continue; }
    const before = fs.statSync(src).size;
    await sharp(src)
      .rotate() // respect EXIF orientation
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 78 })
      .toFile(dst);
    const after = fs.statSync(dst).size;
    totalBefore += before; totalAfter += after;
    console.log(`${oldName} (${(before/1048576).toFixed(1)}MB) -> ${newName} (${(after/1024).toFixed(0)}KB)`);
  }
  console.log(`\nTOTAL: ${(totalBefore/1048576).toFixed(1)}MB -> ${(totalAfter/1048576).toFixed(2)}MB`);
})();
