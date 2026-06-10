// Inserts a keyword-rich, bilingual info section before the CTA banner on each product page.
// Content rules respected: wholesalers (not retailers), fabrics = wool/acrylic/polyester/viscose,
// no pashmina, no private label, no region-specific keffiyeh tradition claims.
const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '..');

const CSS = `
/* ===== INFO SECTION (SEO copy) ===== */
.info-section{padding:90px 0;background:var(--emerald-mid);border-top:1px solid rgba(201,169,110,0.08)}
.info-section .container{max-width:1100px}
.info-title{font-family:var(--serif);font-size:clamp(24px,3.2vw,38px);font-weight:400;color:var(--cream);text-align:center;margin-bottom:12px}
.info-intro{font-size:15px;color:var(--cream-dark);font-weight:300;line-height:1.9;max-width:760px;margin:0 auto 56px;text-align:center}
.info-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:40px}
.info-block h3{font-family:var(--serif);font-size:19px;font-weight:400;color:var(--gold);margin-bottom:14px}
.info-block p{font-size:14px;color:var(--cream-dark);font-weight:300;line-height:1.9}
@media(max-width:900px){.info-grid{grid-template-columns:1fr;gap:32px}}
[dir="rtl"] .info-block{text-align:right}
`;

const block = (h_en, h_ar, p_en, p_ar) =>
  `    <div class="info-block reveal"><h3 data-en="${h_en}" data-ar="${h_ar}">${h_en}</h3><p data-en="${p_en}" data-ar="${p_ar}">${p_en}</p></div>`;

const section = (title_en, title_ar, intro_en, intro_ar, blocks) => `
<!-- INFO SECTION (SEO) -->
<section class="info-section">
<div class="container">
  <h2 class="info-title reveal" data-en="${title_en}" data-ar="${title_ar}">${title_en}</h2>
  <p class="info-intro reveal" data-en="${intro_en}" data-ar="${intro_ar}">${intro_en}</p>
  <div class="info-grid">
${blocks.join('\n')}
  </div>
</div>
</section>

`;

const CONTENT = {
  'gents-shawls.html': section(
    "Men's Shawls &amp; Rida — Wholesale from the Manufacturer",
    'شالات رجالية ورِداء — بالجملة من المصنع مباشرة',
    'Yasmeen Silk Corporation has manufactured men&#39;s shawls and rida in Mumbai since 1970. From the classic black rida worn for prayer and religious gatherings to richly bordered ceremonial shawls, every piece is woven, finished, and inspected in-house — then supplied in bulk to wholesalers and distributors across the Middle East, Africa, Europe, and Southeast Asia.',
    'تصنع شركة ياسمين للحرير الشالات الرجالية والرداء في مومباي منذ عام ١٩٧٠. من الرداء الأسود الكلاسيكي الذي يُلبس للصلاة والمناسبات الدينية إلى الشالات الاحتفالية ذات الحواف الغنية، كل قطعة تُنسج وتُشطب وتُفحص داخلياً — ثم تُورد بالجملة لتجار الجملة والموزعين في الشرق الأوسط وأفريقيا وأوروبا وجنوب شرق آسيا.',
    [
      block('Fabrics &amp; Construction', 'الأقمشة والصناعة',
        'Our gents shawls are woven from wool, acrylic, polyester, and viscose — and carefully chosen blends of these fibres. Each fabric is selected for weight, warmth, and drape, so you can offer your market the right balance of quality and price point. Borders range from understated tonal weaves to gold and silver zari detail.',
        'تُنسج شالاتنا الرجالية من الصوف والأكريليك والبوليستر والفسكوز — ومزائج مختارة بعناية من هذه الألياف. يُختار كل قماش حسب الوزن والدفء والانسدال، لتقدم لسوقك التوازن الصحيح بين الجودة والسعر. تتنوع الحواف من النسج الهادئ أحادي اللون إلى تفاصيل الزري الذهبية والفضية.'),
      block('Cultural Significance', 'الأهمية الثقافية',
        'Shawls hold deep cultural meaning across many Muslim communities — worn as a mark of tradition, modesty, and identity in countries across Africa, the Middle East, and South Asia. Our designs respect these traditions while maintaining the consistent sizing and finish that bulk buyers depend on.',
        'تحمل الشالات معنى ثقافياً عميقاً في العديد من المجتمعات المسلمة — تُلبس كرمز للتقاليد والاحتشام والهوية في دول أفريقيا والشرق الأوسط وجنوب آسيا. تصاميمنا تحترم هذه التقاليد مع الحفاظ على المقاسات والتشطيب الثابت الذي يعتمد عليه مشترو الجملة.'),
      block('Ordering in Bulk', 'الطلب بالجملة',
        'Minimum order quantity is 5,000–10,000 pieces, with samples available before you commit. We ship FOB Mumbai or CIF to your port, handling documentation and customs end-to-end. Message us on WhatsApp with the styles you need and we&#39;ll respond with pricing and production timelines.',
        'الحد الأدنى للطلب هو ٥٠٠٠ إلى ١٠٠٠٠ قطعة، مع توفر العينات قبل الالتزام. نشحن FOB مومباي أو CIF إلى ميناءك، ونتولى التوثيق والجمارك بالكامل. راسلنا على واتساب بالموديلات التي تحتاجها وسنرد بالأسعار وجداول الإنتاج.'),
    ]),

  'ladies-shawls.html': section(
    'Ladies Shawls — Printed &amp; Woven, Wholesale Supply',
    'شالات نسائية — مطبوعة ومنسوجة، توريد بالجملة',
    'Our ladies&#39; shawl collection spans hand-printed paisleys, geometric weaves, and rich colour collections designed for elegance and versatility. As a manufacturer and exporter since 1970, we supply wholesalers and distributors with consistent quality, dependable lead times, and competitive bulk pricing.',
    'تشمل مجموعة الشالات النسائية لدينا نقوش البيزلي المطبوعة يدوياً والنسج الهندسي ومجموعات الألوان الغنية المصممة للأناقة والتنوع. كمصنّع ومصدّر منذ عام ١٩٧٠، نزوّد تجار الجملة والموزعين بجودة ثابتة ومواعيد تسليم موثوقة وأسعار جملة تنافسية.',
    [
      block('Designs &amp; Colourways', 'التصاميم والألوان',
        'From timeless paisley prints to contemporary geometric patterns, our range covers everyday wear and special occasions alike. Collections are produced in coordinated colourways so your shelves stay consistent across reorders — and new designs are added throughout the year.',
        'من نقوش البيزلي الخالدة إلى الأنماط الهندسية المعاصرة، تغطي تشكيلتنا الاستخدام اليومي والمناسبات الخاصة على حد سواء. تُنتج المجموعات بألوان منسقة لتبقى رفوفك متناسقة عبر الطلبات المتكررة — وتُضاف تصاميم جديدة على مدار العام.'),
      block('Fabrics for Every Market', 'أقمشة لكل سوق',
        'We work in wool, acrylic, polyester, and viscose, offering a range of weights and finishes to suit different climates and price points. Tell us your market and we&#39;ll recommend the fabric and finish that sells best — backed by five decades of export experience.',
        'نعمل بالصوف والأكريليك والبوليستر والفسكوز، ونقدم مجموعة من الأوزان والتشطيبات لتناسب مختلف المناخات ونقاط الأسعار. أخبرنا عن سوقك وسنوصي بالقماش والتشطيب الأكثر مبيعاً — بدعم من خمسة عقود من خبرة التصدير.'),
      block('Wholesale Terms', 'شروط الجملة',
        'Orders start at 5,000 pieces with samples available on request. We supply wholesalers and distributors across the Middle East, Africa, Europe, and Southeast Asia, with worldwide shipping and full export documentation handled by our team in Mumbai.',
        'تبدأ الطلبات من ٥٠٠٠ قطعة مع توفر العينات عند الطلب. نزوّد تجار الجملة والموزعين في الشرق الأوسط وأفريقيا وأوروبا وجنوب شرق آسيا، مع شحن عالمي ووثائق تصدير كاملة يتولاها فريقنا في مومباي.'),
    ]),

  'keffiyehs.html': section(
    'Keffiyeh &amp; Ghutra Manufacturer — Bulk Supply Since 1970',
    'مصنع شماغ وغترة — توريد بالجملة منذ ١٩٧٠',
    'Yasmeen Silk Corporation is a trusted keffiyeh and ghutra manufacturer supplying wholesalers across the Gulf, Levant, and North Africa. Every keffiyeh is woven to exacting standards for weight, drape, and durability — the qualities bulk buyers and their customers notice first.',
    'شركة ياسمين للحرير مصنع موثوق للشماغ والغترة يزوّد تجار الجملة في الخليج والشام وشمال أفريقيا. يُنسج كل شماغ وفق معايير دقيقة للوزن والانسدال والمتانة — وهي الصفات التي يلاحظها مشترو الجملة وعملاؤهم أولاً.',
    [
      block('Weave Quality', 'جودة النسج',
        'A keffiyeh is judged by its weave: the tightness of the pattern, the evenness of the border, and how it holds shape after repeated wear and washing. Our looms are calibrated for consistent pattern definition across entire production runs, so the 10,000th piece matches the first.',
        'يُحكم على الشماغ من نسجه: إحكام النقشة، وانتظام الحافة، وثبات شكله بعد الارتداء والغسل المتكرر. أنوالنا معايرة لوضوح نقشة ثابت عبر دفعات الإنتاج الكاملة، فالقطعة رقم ١٠٠٠٠ تطابق الأولى.'),
      block('Patterns &amp; Sizes', 'النقشات والمقاسات',
        'We produce the classic black-and-white, red-and-white, plain white ghutra, and multi-colour patterned keffiyehs in all standard sizes. Fabrics are fine polyester and acrylic options chosen for breathability and durability, sold under the Yasmeen brand with our quality seal.',
        'ننتج الشماغ الكلاسيكي الأسود والأبيض، والأحمر والأبيض، والغترة البيضاء السادة، والشماغات المنقوشة متعددة الألوان بجميع المقاسات القياسية. الأقمشة خيارات بوليستر وأكريليك فاخرة مختارة للتهوية والمتانة، تُباع تحت علامة ياسمين مع ختم الجودة.'),
      block('Supplying Your Market', 'توريد سوقك',
        'From single containers to ongoing programmes, we supply wholesalers and distributors with dependable lead times. Minimum order is 5,000 pieces per style. Request samples via WhatsApp to verify the weave, weight, and finish before placing your bulk order.',
        'من حاوية واحدة إلى برامج توريد مستمرة، نزوّد تجار الجملة والموزعين بمواعيد تسليم موثوقة. الحد الأدنى للطلب ٥٠٠٠ قطعة لكل موديل. اطلب العينات عبر واتساب للتحقق من النسج والوزن والتشطيب قبل تقديم طلبك بالجملة.'),
    ]),

  'yemeni-scarves.html': section(
    'Yemeni-Style &amp; Embroidered Scarves — Wholesale',
    'شيلان يمنية وأوشحة مطرزة — بالجملة',
    'Intricately patterned in the Yemeni style prized across the Arabian Peninsula and the Horn of Africa, our scarves combine traditional motifs with the consistency of modern manufacturing. Produced in Mumbai since 1970 and supplied in bulk to wholesalers and distributors worldwide.',
    'بنقوش دقيقة على الطراز اليمني المرغوب في شبه الجزيرة العربية والقرن الأفريقي، تجمع شيلاننا بين الزخارف التقليدية وثبات التصنيع الحديث. تُنتج في مومباي منذ ١٩٧٠ وتُورد بالجملة لتجار الجملة والموزعين حول العالم.',
    [
      block('Traditional Motifs', 'الزخارف التقليدية',
        'Floral, geometric, and traditional patterns are reproduced with precision across every batch. These scarves are worn for cultural and traditional occasions, and our buyers value the faithful detailing that distinguishes an authentic-looking piece from a generic one.',
        'تُستنسخ النقوش الزهرية والهندسية والتقليدية بدقة في كل دفعة. تُلبس هذه الشيلان في المناسبات الثقافية والتقليدية، ويقدّر مشترونا التفاصيل الأمينة التي تميز القطعة الأصيلة المظهر عن القطعة العادية.'),
      block('Fabric &amp; Finish', 'القماش والتشطيب',
        'Woven from wool, acrylic, polyester, and viscose options depending on the design, each scarf is finished with attention to edge detail and colour fastness. Multiple weights are available to suit Gulf summers and East African highlands alike.',
        'تُنسج من خيارات الصوف والأكريليك والبوليستر والفسكوز حسب التصميم، وتُشطب كل شيلة بعناية بتفاصيل الحواف وثبات الألوان. تتوفر أوزان متعددة لتناسب صيف الخليج ومرتفعات شرق أفريقيا على حد سواء.'),
      block('Bulk Orders &amp; Samples', 'الطلبات بالجملة والعينات',
        'We supply wholesalers and distributors with a minimum order of 5,000 pieces. Samples are available so you can verify embroidery quality and fabric before committing. Contact us on WhatsApp with your requirements for pricing and timelines.',
        'نزوّد تجار الجملة والموزعين بحد أدنى للطلب ٥٠٠٠ قطعة. تتوفر العينات للتحقق من جودة التطريز والقماش قبل الالتزام. تواصل معنا عبر واتساب بمتطلباتك للحصول على الأسعار والمواعيد.'),
    ]),

  'prayer-rugs.html': section(
    'Prayer Rugs — Embroidered &amp; Woven, Wholesale Supply',
    'سجاد صلاة — مطرز ومنسوج، توريد بالجملة',
    'Our prayer rugs combine Kashmiri-inspired floral embroidery with durable, easy-care construction. Manufactured in Mumbai and supplied in bulk to wholesalers and distributors serving communities across the Middle East, Africa, Europe, and Southeast Asia.',
    'يجمع سجاد الصلاة لدينا بين التطريز الزهري المستوحى من كشمير والبناء المتين سهل العناية. يُصنع في مومباي ويُورد بالجملة لتجار الجملة والموزعين الذين يخدمون المجتمعات في الشرق الأوسط وأفريقيا وأوروبا وجنوب شرق آسيا.',
    [
      block('Embroidery &amp; Detail', 'التطريز والتفاصيل',
        'Vibrant floral and geometric threadwork is applied over rich base fabrics, creating prayer rugs that feel special in daily use and as gifts. Designs are produced in coordinated collections, making it easy to offer a consistent range in your market.',
        'تُطبق خيوط زهرية وهندسية نابضة بالحياة على أقمشة أساس غنية، لتنتج سجاجيد صلاة مميزة في الاستخدام اليومي وكهدايا. تُنتج التصاميم في مجموعات منسقة، مما يسهل تقديم تشكيلة متناسقة في سوقك.'),
      block('Materials &amp; Durability', 'الخامات والمتانة',
        'We use hard-wearing acrylic, polyester, and viscose constructions chosen for softness underfoot, colour fastness, and easy care. Each rug is inspected for embroidery quality and finish before packing, and every piece carries the Yasmeen quality seal.',
        'نستخدم تراكيب متينة من الأكريليك والبوليستر والفسكوز مختارة للنعومة وثبات الألوان وسهولة العناية. تُفحص كل سجادة لجودة التطريز والتشطيب قبل التعبئة، وتحمل كل قطعة ختم جودة ياسمين.'),
      block('Wholesale Programme', 'برنامج الجملة',
        'Minimum order is 5,000 pieces, with samples available first. Whether you stock religious goods stores, gift retailers, or distribute across a region, our export team handles production, quality control, and shipping to your port.',
        'الحد الأدنى للطلب ٥٠٠٠ قطعة، مع توفر العينات أولاً. سواء كنت تزوّد متاجر السلع الدينية أو موزعاً إقليمياً، يتولى فريق التصدير لدينا الإنتاج ومراقبة الجودة والشحن إلى ميناءك.'),
    ]),

  'sarongs.html': section(
    'Sarongs &amp; Maawis — Woven for Daily Wear, Wholesale',
    'معاوز — منسوجة للارتداء اليومي، بالجملة',
    'Our sarongs and maawis are woven for the way they&#39;re actually worn: daily, in warm climates, washed often. Since 1970 we have supplied wholesalers and distributors with sarongs that hold their colour, keep their drape, and arrive in dependable bulk quantities.',
    'تُنسج معاوزنا بالطريقة التي تُلبس بها فعلاً: يومياً، في المناخات الدافئة، وتُغسل كثيراً. منذ عام ١٩٧٠ نزوّد تجار الجملة والموزعين بمعاوز تحافظ على لونها وانسدالها وتصل بكميات جملة موثوقة.',
    [
      block('Weaves &amp; Patterns', 'النسج والنقشات',
        'Classic stripes, woven borders, and check patterns are produced in colourways suited to Gulf, East African, and Southeast Asian markets. Patterns are woven in — not printed — so they stay sharp through repeated washing.',
        'تُنتج الخطوط الكلاسيكية والحواف المنسوجة ونقشات الكاروهات بألوان تناسب أسواق الخليج وشرق أفريقيا وجنوب شرق آسيا. النقشات منسوجة — وليست مطبوعة — لتبقى واضحة رغم الغسل المتكرر.'),
      block('Comfort &amp; Construction', 'الراحة والبناء',
        'Woven from breathable polyester, viscose, and acrylic blends, our sarongs balance softness with everyday durability. Edges are finished to resist fraying, and sizing is consistent across production runs — essential when your customers buy by feel and fit.',
        'منسوجة من مزائج البوليستر والفسكوز والأكريليك القابلة للتنفس، توازن معاوزنا بين النعومة والمتانة اليومية. الحواف مشطبة لمقاومة التنسل، والمقاسات ثابتة عبر دفعات الإنتاج — أمر أساسي عندما يشتري عملاؤك باللمس والمقاس.'),
      block('Bulk Supply', 'التوريد بالجملة',
        'Minimum order is 5,000 pieces per style. We supply wholesalers and distributors worldwide with FOB Mumbai or CIF shipping, full documentation, and samples before you order. WhatsApp us to discuss patterns, weights, and pricing for your market.',
        'الحد الأدنى للطلب ٥٠٠٠ قطعة لكل موديل. نزوّد تجار الجملة والموزعين حول العالم بشحن FOB مومباي أو CIF، مع وثائق كاملة وعينات قبل الطلب. راسلنا على واتساب لمناقشة النقشات والأوزان والأسعار لسوقك.'),
    ]),
};

for (const [file, html] of Object.entries(CONTENT)) {
  const p = path.join(ROOT, file);
  let t = fs.readFileSync(p, 'utf8');
  if (t.includes('INFO SECTION (SEO)')) { console.log(file + ': already present'); continue; }
  t = t.replace('</style>', CSS + '</style>');
  t = t.replace('<!-- CTA BANNER -->', html + '<!-- CTA BANNER -->');
  fs.writeFileSync(p, t);
  console.log(file + ': info section added');
}
