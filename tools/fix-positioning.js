// Corrects positioning + factual claims on product pages, homepage and metas (EN + AR files).
// Trader/supplier (not manufacturer), ghutra = keffiyeh synonym, colour range,
// batch checking (not per-piece inspection), no loom-calibration claims.
const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '..');

// [old, new] — applied with global split/join to every file listed
const SWAPS = [
  // ---------- gents-shawls info section ----------
  ["Men's Shawls &amp; Rida — Wholesale from the Manufacturer",
   "Men's Shawls &amp; Rida — Wholesale Supply Since 1970"],
  ['شالات رجالية ورِداء — بالجملة من المصنع مباشرة',
   'شالات رجالية ورِداء — توريد بالجملة منذ ١٩٧٠'],
  ['Yasmeen Silk Corporation has manufactured men&#39;s shawls and rida in Mumbai since 1970. From the classic black rida worn for prayer and religious gatherings to richly bordered ceremonial shawls, every piece is woven, finished, and inspected in-house — then supplied in bulk',
   'Yasmeen Silk Corporation has supplied men&#39;s shawls and rida from Mumbai since 1970. From the classic black rida worn for prayer and religious gatherings to richly bordered ceremonial shawls, every style is produced by factories working under our brand and quality standards — and supplied in bulk'],
  ['تصنع شركة ياسمين للحرير الشالات الرجالية والرداء في مومباي منذ عام ١٩٧٠. من الرداء الأسود الكلاسيكي الذي يُلبس للصلاة والمناسبات الدينية إلى الشالات الاحتفالية ذات الحواف الغنية، كل قطعة تُنسج وتُشطب وتُفحص داخلياً — ثم تُورد بالجملة',
   'تورّد شركة ياسمين للحرير الشالات الرجالية والرداء من مومباي منذ عام ١٩٧٠. من الرداء الأسود الكلاسيكي الذي يُلبس للصلاة والمناسبات الدينية إلى الشالات الاحتفالية ذات الحواف الغنية، كل موديل يُنتج في مصانع تعمل تحت علامتنا ومعاييرنا — ويُورد بالجملة'],

  // ---------- ladies-shawls info ----------
  ['As a manufacturer and exporter since 1970, we supply wholesalers',
   'As a trusted supplier and exporter since 1970 — with production by factories working under our brand — we supply wholesalers'],
  ['كمصنّع ومصدّر منذ عام ١٩٧٠، نزوّد تجار الجملة',
   'كمورد ومصدّر موثوق منذ عام ١٩٧٠ — بإنتاج من مصانع تعمل تحت علامتنا — نزوّد تجار الجملة'],

  // ---------- keffiyehs info ----------
  ['Keffiyeh &amp; Ghutra Manufacturer — Bulk Supply Since 1970',
   'Keffiyeh &amp; Ghutra Supplier — Bulk Supply Since 1970'],
  ['مصنع شماغ وغترة — توريد بالجملة منذ ١٩٧٠',
   'مورد شماغ وغترة — توريد بالجملة منذ ١٩٧٠'],
  ['is a trusted keffiyeh and ghutra manufacturer supplying wholesalers',
   'is a trusted keffiyeh and ghutra supplier serving wholesalers'],
  ['شركة ياسمين للحرير مصنع موثوق للشماغ والغترة يزوّد',
   'شركة ياسمين للحرير مورد موثوق للشماغ والغترة يزوّد'],
  ['Our looms are calibrated for consistent pattern definition across entire production runs, so the 10,000th piece matches the first.',
   'Our keffiyehs are woven on traditional looms by factories working under our brand, and every batch passes through our checking process before packing — so your order stays consistent from the first bale to the last.'],
  ['أنوالنا معايرة لوضوح نقشة ثابت عبر دفعات الإنتاج الكاملة، فالقطعة رقم ١٠٠٠٠ تطابق الأولى.',
   'تُنسج شماغاتنا على أنوال تقليدية في مصانع تعمل تحت علامتنا، وتمر كل دفعة بعملية الفحص لدينا قبل التعبئة — ليبقى طلبك متناسقاً من أول بالة إلى آخرها.'],
  ['We produce the classic black-and-white, red-and-white, plain white ghutra, and multi-colour patterned keffiyehs in all standard sizes.',
   'We supply the classic black-and-white and red-and-white alongside greens, blues, greys, golds, and multi-colour patterns — in all standard sizes.'],
  ['ننتج الشماغ الكلاسيكي الأسود والأبيض، والأحمر والأبيض، والغترة البيضاء السادة، والشماغات المنقوشة متعددة الألوان بجميع المقاسات القياسية.',
   'نورّد الشماغ الكلاسيكي الأسود والأبيض والأحمر والأبيض إلى جانب الأخضر والأزرق والرمادي والذهبي والنقشات متعددة الألوان — بجميع المقاسات القياسية.'],

  // ---------- yemeni info ----------
  ['our scarves combine traditional motifs with the consistency of modern manufacturing. Produced in Mumbai since 1970 and supplied in bulk',
   'our scarves combine traditional motifs with dependable bulk consistency. Supplied from Mumbai since 1970 in bulk'],
  ['تجمع شيلاننا بين الزخارف التقليدية وثبات التصنيع الحديث. تُنتج في مومباي منذ ١٩٧٠ وتُورد بالجملة',
   'تجمع شيلاننا بين الزخارف التقليدية وثبات يُعتمد عليه في الجملة. تُورد من مومباي منذ ١٩٧٠ بالجملة'],

  // ---------- prayer-rugs info ----------
  ['Manufactured in Mumbai and supplied in bulk',
   'Supplied from Mumbai in bulk'],
  ['يُصنع في مومباي ويُورد بالجملة',
   'يُورد من مومباي بالجملة'],
  ['Each rug is inspected for embroidery quality and finish before packing, and every piece carries the Yasmeen quality seal.',
   'Batches are checked for embroidery quality and finish before packing, and our products carry the Yasmeen quality seal.'],
  ['تُفحص كل سجادة لجودة التطريز والتشطيب قبل التعبئة، وتحمل كل قطعة ختم جودة ياسمين.',
   'تُفحص الدفعات لجودة التطريز والتشطيب قبل التعبئة، وتحمل منتجاتنا ختم جودة ياسمين.'],

  // ---------- site metas / schema / descriptions ----------
  ["India's trusted manufacturer and exporter of premium shawls",
   "India's trusted supplier and exporter of premium shawls"],
  ["India&#39;s trusted manufacturer and exporter of premium shawls",
   "India&#39;s trusted supplier and exporter of premium shawls"],
  ["India's trusted keffiyeh manufacturer since 1970",
   "India's trusted keffiyeh supplier since 1970"],
  ['مصنع ومصدّر هندي موثوق',
   'مورد ومصدّر هندي موثوق'],
  ['شماغ وغترة بالجملة من المصنع | ياسمين للحرير',
   'شماغ وغترة بالجملة | ياسمين للحرير'],
  ['مصنع شماغ وغترة موثوق منذ ١٩٧٠',
   'مورد شماغ وغترة موثوق منذ ١٩٧٠'],
  ['توريد بالجملة من المصنع في مومباي منذ ١٩٧٠',
   'توريد بالجملة من مومباي منذ ١٩٧٠'],
  // JSON-LD: drop the manufacturer property (they are not the manufacturer)
  ['"manufacturer": {"@type": "Organization", "name": "Yasmeen Silk Corporation"},\n  ', ''],
  ['"manufacturer": {"@type": "Organization", "name": "Yasmeen Silk Corporation"},', ''],
];

const FILES = [];
for (const dir of ['', 'ar']) {
  for (const f of ['index.html','gents-shawls.html','ladies-shawls.html','keffiyehs.html','yemeni-scarves.html','prayer-rugs.html','sarongs.html','faq.html']) {
    FILES.push(path.join(dir, f));
  }
}

let totalSwaps = 0;
for (const rel of FILES) {
  const p = path.join(ROOT, rel);
  let t = fs.readFileSync(p, 'utf8');
  let n = 0;
  for (const [oldS, newS] of SWAPS) {
    if (t.includes(oldS)) {
      const parts = t.split(oldS);
      n += parts.length - 1;
      t = parts.join(newS);
    }
  }
  if (n) { fs.writeFileSync(p, t); totalSwaps += n; }
  console.log(rel + ': ' + n + ' replacements');
}
console.log('TOTAL: ' + totalSwaps);

// report any remaining "manufactur" mentions for review
console.log('\n--- remaining "manufactur" mentions (excluding meta keywords) ---');
for (const rel of FILES) {
  const t = fs.readFileSync(path.join(ROOT, rel), 'utf8');
  const lines = t.split('\n');
  lines.forEach((line, i) => {
    if (/manufactur/i.test(line) && !line.includes('name="keywords"')) {
      console.log(rel + ':' + (i + 1) + ': ' + line.trim().slice(0, 140));
    }
  });
}
