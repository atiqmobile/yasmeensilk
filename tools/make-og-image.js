// Generates images/og-image.jpg (1200x630) for WhatsApp/social link previews.
const sharp = require('sharp');
const path = require('path');
const IMG = path.join(__dirname, '..', 'images');

(async () => {
  const bg = await sharp(path.join(IMG, 'DSC_1865-01.jpeg'))
    .rotate()
    .resize(1200, 630, { fit: 'cover' })
    .modulate({ brightness: 0.55 })
    .toBuffer();

  const logo = await sharp(path.join(IMG, 'logo_final-removebg-preview.png'))
    .resize({ width: 420 })
    .toBuffer();
  const logoMeta = await sharp(logo).metadata();

  const textSvg = Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
    <text x="600" y="500" text-anchor="middle" font-family="Georgia, serif" font-size="34" fill="#F5F0E8">Premium Shawls, Keffiyehs &amp; Embroidered Textiles</text>
    <text x="600" y="548" text-anchor="middle" font-family="Georgia, serif" font-size="22" fill="#C9A96E" letter-spacing="6">WHOLESALE  ·  SINCE 1970  ·  MUMBAI</text>
  </svg>`);

  await sharp(bg)
    .composite([
      { input: logo, top: Math.round((630 - logoMeta.height) / 2) - 60, left: Math.round((1200 - 420) / 2) },
      { input: textSvg, top: 0, left: 0 },
    ])
    .jpeg({ quality: 85 })
    .toFile(path.join(IMG, 'og-image.jpg'));

  console.log('og-image.jpg created');
})();
