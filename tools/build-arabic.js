// Generates indexable Arabic pages under /ar/ from the data-ar translations
// already embedded in each English page. Also converts the JS language toggle
// into real navigation between /en and /ar URLs (SEO-correct).
// Run after any content change: node tools/build-arabic.js
const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');
const ROOT = path.join(__dirname, '..');
const AR = path.join(ROOT, 'ar');

const META = {
  'index.html': {
    slug: '',
    title: 'شركة ياسمين للحرير | شالات وشماغات وأقمشة مطرزة فاخرة منذ ١٩٧٠',
    desc: 'شركة ياسمين للحرير — مصنع ومصدّر هندي موثوق للشالات والشماغات والأقمشة المطرزة الفاخرة منذ عام ١٩٧٠. توريد بالجملة لأكثر من ٣٠ دولة حول العالم.',
  },
  'gents-shawls.html': {
    slug: 'gents-shawls',
    title: 'شالات رجالية ورداء بالجملة | ياسمين للحرير',
    desc: 'شالات رجالية ورداء من الصوف والأكريليك والبوليستر والفسكوز. توريد بالجملة من المصنع في مومباي منذ ١٩٧٠ لتجار الجملة والموزعين حول العالم.',
  },
  'ladies-shawls.html': {
    slug: 'ladies-shawls',
    title: 'شالات نسائية بالجملة | ياسمين للحرير',
    desc: 'شالات نسائية مطبوعة ومنسوجة بألوان ونقشات غنية. مصنع وموّرد بالجملة منذ ١٩٧٠ — جودة ثابتة وأسعار تنافسية لتجار الجملة.',
  },
  'keffiyehs.html': {
    slug: 'keffiyehs',
    title: 'شماغ وغترة بالجملة من المصنع | ياسمين للحرير',
    desc: 'مصنع شماغ وغترة موثوق منذ ١٩٧٠. شماغات منسوجة بمعايير دقيقة للوزن والانسدال والمتانة. توريد بالجملة للخليج والشام وشمال أفريقيا.',
  },
  'yemeni-scarves.html': {
    slug: 'yemeni-scarves',
    title: 'شيلان يمنية وأوشحة مطرزة بالجملة | ياسمين للحرير',
    desc: 'شيلان على الطراز اليمني وأوشحة مطرزة بزخارف تقليدية دقيقة. تصنيع في مومباي منذ ١٩٧٠ وتوريد بالجملة لتجار الجملة والموزعين.',
  },
  'prayer-rugs.html': {
    slug: 'prayer-rugs',
    title: 'سجاد صلاة بالجملة | ياسمين للحرير',
    desc: 'سجاد صلاة مطرز بنقوش زهرية مستوحاة من كشمير. خامات متينة وجودة مفحوصة. توريد بالجملة من المصنع منذ ١٩٧٠.',
  },
  'sarongs.html': {
    slug: 'sarongs',
    title: 'معاوز بالجملة | ياسمين للحرير',
    desc: 'معاوز منسوجة بخطوط وحواف كلاسيكية تناسب أسواق الخليج وشرق أفريقيا وجنوب شرق آسيا. ألوان ثابتة ومقاسات موحدة. توريد بالجملة منذ ١٩٧٠.',
  },
  'faq.html': {
    slug: 'faq',
    title: 'الأسئلة الشائعة | ياسمين للحرير',
    desc: 'إجابات عن الأسئلة الشائعة: الحد الأدنى للطلب، الشحن الدولي، الأقمشة، العينات، والبيع بالتجزئة. شركة ياسمين للحرير — مومباي، الهند.',
  },
};

if (!fs.existsSync(AR)) fs.mkdirSync(AR);

const TOGGLE_RE = /let currentLang[\s\S]*?if \(currentLang === 'ar'\) applyLang\(\);/;

for (const [file, meta] of Object.entries(META)) {
  const src = fs.readFileSync(path.join(ROOT, file), 'utf8');

  // ---------- ARABIC PAGE ----------
  const $ = cheerio.load(src, { decodeEntities: false });

  // 1. apply translations
  $('[data-ar]').each((_, el) => {
    const $el = $(el);
    const val = $el.attr('data-ar');
    const tag = (el.tagName || '').toLowerCase();
    if (tag === 'input' || tag === 'textarea') $el.attr('placeholder', val);
    else $el.html(val);
  });

  // 2. lang/dir
  $('html').attr('lang', 'ar').attr('dir', 'rtl');

  // 3. head meta
  $('title').text(meta.title);
  $('meta[name="description"]').attr('content', meta.desc);
  $('meta[property="og:title"]').attr('content', meta.title);
  $('meta[property="og:description"]').attr('content', meta.desc);
  const arUrl = 'https://yasmeensilk.com/ar/' + meta.slug;
  $('meta[property="og:url"]').attr('content', arUrl);
  $('link[rel="canonical"]').attr('href', arUrl);
  $('meta[property="og:locale"]').attr('content', 'ar_AR');
  $('meta[property="og:locale:alternate"]').attr('content', 'en_US');

  // 4. asset paths -> ../
  $('img[src^="images/"]').each((_, el) => $(el).attr('src', '../' + $(el).attr('src')));
  $('link[href^="images/"]').each((_, el) => $(el).attr('href', '../' + $(el).attr('href')));

  let out = $.html();

  // 5. CSS background url for hero
  out = out.replace(/url\('images\//g, "url('../images/");

  // 6. lightbox image array paths
  out = out.replace(/'images\//g, "'../images/");
  // (revert any double-prefix from step 4/5 overlap)
  out = out.replace(/\.\.\/\.\.\//g, '../');

  // 7. nav-lang buttons -> link to English page
  const enHref = '../' + (meta.slug ? meta.slug + '.html' : 'index.html');
  out = out.replace(/<button class="nav-lang([^"]*)" onclick="toggleLang\(\);?(closeMobile\(\))?">[^<]*<\/button>/g,
    (m, cls, close) => `<button class="nav-lang${cls}" onclick="${close ? close + ';' : ''}location.href='${enHref}'">English</button>`);

  // 8. neutralize the JS toggle (page is statically Arabic)
  out = out.replace(TOGGLE_RE,
    `function applyLang(){}\nfunction toggleLang(){ location.href='${enHref}'; }`);

  fs.writeFileSync(path.join(AR, file), out);

  // ---------- ENGLISH PAGE: toggle becomes navigation to /ar/ ----------
  let en = src;
  const arHref = 'ar/' + (meta.slug ? meta.slug + '.html' : 'index.html');
  if (TOGGLE_RE.test(en)) {
    en = en.replace(TOGGLE_RE,
      `function applyLang(){}\nfunction toggleLang(){ location.href='${arHref}'; }`);
    fs.writeFileSync(path.join(ROOT, file), en);
  }
  console.log(file + ' -> ar/' + file);
}

// ---------- sitemap: add Arabic URLs ----------
const smPath = path.join(ROOT, 'sitemap.xml');
let sm = fs.readFileSync(smPath, 'utf8');
if (!sm.includes('/ar/')) {
  const today = '2026-06-10';
  const entries = Object.values(META).map(m => `  <url>
    <loc>https://yasmeensilk.com/ar/${m.slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${m.slug === '' ? '0.9' : '0.7'}</priority>
  </url>`).join('\n');
  sm = sm.replace('</urlset>', entries + '\n</urlset>');
  fs.writeFileSync(smPath, sm);
  console.log('sitemap.xml: 8 Arabic URLs added');
}
