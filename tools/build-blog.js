// Generates the bilingual blog: blog.html, ar/blog.html, blog/<slug>.html ×5, ar/blog/<slug>.html ×5
// Arabic terminology mirrors the live site: شماغ، غترة، رداء، شيلان، معاوز، سجاد صلاة،
// تجار الجملة والموزعين، الحد الأدنى للطلب، عينات، الوزن والانسدال والمتانة.
const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '..');

const WA = 'https://wa.me/919967810489';
const WA_PATH = 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z';
const waIcon = (s) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="currentColor"><path d="${WA_PATH}"/></svg>`;
const DATE = '2026-06-10';
const DATE_EN = 'June 2026';
const DATE_AR = 'يونيو ٢٠٢٦';

// ----------------------------------------------------------------------------
// ARTICLES
// ----------------------------------------------------------------------------
const S = (h, ...ps) => ({ h, ps });

const ARTICLES = [
{
  slug: 'how-to-choose-keffiyeh-supplier',
  thumb: 'classic-black-white-keffiyeh-wholesale.webp',
  en: {
    title: 'How to Choose a Keffiyeh Supplier: 7 Things to Check Before a Bulk Order',
    metaTitle: 'How to Choose a Keffiyeh Supplier | 7-Point Buyer Checklist',
    metaDesc: 'A practical 7-point checklist for wholesalers choosing a keffiyeh and ghutra supplier: weave quality, fabrics, samples, MOQ, export experience and more.',
    excerpt: 'A practical checklist for wholesalers: weave quality, samples, MOQ, export documentation, and the questions that separate a reliable keffiyeh supplier from a risky one.',
    intro: 'A keffiyeh order is rarely small. With minimum quantities running into the thousands of pieces, choosing the wrong supplier doesn’t cost you a sale — it costs you a container. After more than five decades supplying keffiyehs and ghutra from Mumbai — with production by dedicated factories working under our brand and standards — we’ve seen what reliable supply looks like from the inside. Here are the seven things we’d check before placing a bulk order with anyone, including us.',
    sections: [
      S('1. How long have they been in the trade?',
        'Textile suppliers come and go; houses with real production behind them survive on repeat business. A supplier who has operated for decades has weathered demand swings, fabric price cycles, and shipping crises — and kept customers through them. Ask when the company was founded and whether production runs under their own brand and standards, or they simply resell whatever stock they can find.'),
      S('2. What exactly is the keffiyeh woven from?',
        'A trustworthy supplier tells you the fibre content without hesitation — ours are fine polyester and acrylic options chosen for breathability, weight, and durability. Be cautious of vague answers like “premium cotton blend” with no specifics. The fabric determines how the keffiyeh drapes, how it survives washing, and ultimately whether your customers come back.'),
      S('3. Will they send samples first?',
        'Never order thousands of pieces unseen. A confident supplier offers samples so you can judge the weave, weight, and finish in your own hands. If a supplier resists sampling or pushes you to commit first, walk away.'),
      S('4. Is the quality consistent across the batch?',
        'The real test of a supplier is not one beautiful piece — it is consistency across thousands. Keffiyehs are woven on traditional looms, so small variations from piece to piece are natural to the craft; what matters is that the overall standard holds across the batch. Ask what checking happens between the loom and the container, and how sub-standard pieces are filtered out before packing.'),
      S('5. Do their MOQ and capacity match your needs?',
        'Minimum order quantities in this trade typically run 5,000–10,000 pieces per style. Confirm the MOQ, but also ask the opposite question: can they scale when you grow? A supplier running at full capacity today may struggle with your reorder next season.'),
      S('6. Can they handle export paperwork?',
        'Documentation errors delay containers at port and cost real money. An experienced exporter handles invoices, packing lists, certificates of origin, and customs requirements as routine — and can ship FOB Mumbai or CIF to your port. Ask which countries they already export to; a supplier serving 30+ markets has solved problems you haven’t met yet.'),
      S('7. How do they communicate?',
        'Slow, vague answers before you pay become silence after you pay. Note how quickly and clearly a supplier responds on WhatsApp or email during the enquiry stage — it is the best preview of what working together will feel like.'),
    ],
    conclusion: 'Choosing well takes a week of questions; choosing badly takes a season to fix. If you’d like to put us through this checklist, message us on WhatsApp — we’ll answer all seven points and send samples from our <a href="../keffiyehs.html">keffiyeh and ghutra collection</a>.',
  },
  ar: {
    title: 'كيف تختار مورد شماغ: ٧ أمور تحقق منها قبل الطلب بالجملة',
    metaTitle: 'كيف تختار مورد شماغ | قائمة فحص من ٧ نقاط للمشترين',
    metaDesc: 'قائمة عملية من ٧ نقاط لتجار الجملة لاختيار مورد الشماغ والغترة: جودة النسج، الأقمشة، العينات، الحد الأدنى للطلب، خبرة التصدير وأكثر.',
    excerpt: 'قائمة عملية لتجار الجملة: جودة النسج، العينات، الحد الأدنى للطلب، وثائق التصدير، والأسئلة التي تميز مورد الشماغ الموثوق عن غيره.',
    intro: 'طلب الشماغ نادراً ما يكون صغيراً. فمع حد أدنى يصل إلى آلاف القطع، اختيار المورد الخاطئ لا يكلفك صفقة واحدة — بل يكلفك حاوية كاملة. بعد أكثر من خمسة عقود في توريد الشماغات والغتر من مومباي — بإنتاج من مصانع مخصصة تعمل تحت علامتنا ومعاييرنا — نعرف شكل التوريد الموثوق من الداخل. إليك الأمور السبعة التي ننصحك بالتحقق منها قبل الطلب بالجملة من أي مورد، بما في ذلك نحن.',
    sections: [
      S('١. منذ متى وهم في هذه التجارة؟',
        'موردو الأقمشة يأتون ويذهبون؛ أما البيوت التي يقف خلفها إنتاج حقيقي فتعيش على الطلبات المتكررة. المورد الذي عمل لعقود تجاوز تقلبات الطلب ودورات أسعار الأقمشة وأزمات الشحن — واحتفظ بعملائه خلالها. اسأل متى تأسست الشركة وهل يجري الإنتاج تحت علامتها ومعاييرها أم تعيد بيع أي مخزون متاح فقط.'),
      S('٢. ممَّ يُنسج الشماغ تحديداً؟',
        'المورد الموثوق يخبرك بمحتوى الألياف دون تردد — شماغاتنا خيارات بوليستر وأكريليك فاخرة مختارة للتهوية والوزن والمتانة. احذر الإجابات الغامضة مثل «مزيج قطن فاخر» دون تفاصيل. القماش يحدد انسدال الشماغ وتحمّله للغسل، وفي النهاية عودة عملائك من عدمها.'),
      S('٣. هل يرسلون العينات أولاً؟',
        'لا تطلب أبداً آلاف القطع دون رؤيتها. المورد الواثق يقدم العينات لتحكم على النسج والوزن والتشطيب بيديك. إذا رفض المورد إرسال العينات أو ضغط عليك للالتزام أولاً، فابتعد.'),
      S('٤. هل الجودة ثابتة عبر الدفعة؟',
        'الاختبار الحقيقي للمورد ليس قطعة واحدة جميلة — بل الاتساق عبر الآلاف. تُنسج الشماغات على أنوال تقليدية، لذا فالتفاوتات الصغيرة بين قطعة وأخرى طبيعة الحرفة؛ المهم أن يثبت المستوى العام عبر الدفعة. اسأل عن الفحص الذي يتم بين النول والحاوية، وكيف تُستبعد القطع دون المستوى قبل التعبئة.'),
      S('٥. هل الحد الأدنى للطلب وطاقتهم الإنتاجية يناسبانك؟',
        'الحد الأدنى للطلب في هذه التجارة عادة ٥٠٠٠ إلى ١٠٠٠٠ قطعة لكل موديل. تأكد من الحد الأدنى، واسأل السؤال المعاكس أيضاً: هل يستطيعون التوسع عندما تنمو؟ المورد الذي يعمل بكامل طاقته اليوم قد يتعثر مع طلبك المتكرر في الموسم القادم.'),
      S('٦. هل يتقنون وثائق التصدير؟',
        'أخطاء التوثيق تؤخر الحاويات في الموانئ وتكلف مالاً حقيقياً. المصدّر الخبير يتولى الفواتير وقوائم التعبئة وشهادات المنشأ ومتطلبات الجمارك كأمر روتيني — ويشحن FOB مومباي أو CIF إلى ميناءك. اسأل عن الدول التي يصدّرون إليها؛ مورد يخدم أكثر من ٣٠ سوقاً قد حل مشاكل لم تقابلها بعد.'),
      S('٧. كيف يتواصلون؟',
        'الإجابات البطيئة والغامضة قبل الدفع تتحول إلى صمت بعده. لاحظ سرعة ووضوح رد المورد على واتساب أو البريد في مرحلة الاستفسار — فهي أفضل مؤشر لما سيكون عليه العمل معاً.'),
    ],
    conclusion: 'الاختيار الجيد يستغرق أسبوعاً من الأسئلة؛ والاختيار السيئ يستغرق موسماً لإصلاحه. إن أردت اختبارنا بهذه القائمة، راسلنا على واتساب — سنجيب على النقاط السبع ونرسل عينات من <a href="../keffiyehs.html">مجموعة الشماغات والغتر</a> لدينا.',
  },
},
{
  slug: 'moq-guide-importing-textiles-india',
  thumb: 'certified-rida-collection-yasmeen.webp',
  en: {
    title: 'What is MOQ? A First-Time Importer’s Guide to Ordering Textiles from India',
    metaTitle: 'What is MOQ? Importing Wholesale Textiles from India — Guide',
    metaDesc: 'MOQ, samples, FOB vs CIF, production timelines — everything a first-time importer needs to know before ordering wholesale shawls, keffiyehs or scarves from India.',
    excerpt: 'MOQ, samples, FOB vs CIF, and production timelines — the practical basics every first-time textile importer should understand before contacting a manufacturer.',
    intro: 'If you’re planning your first wholesale textile import from India, you’ll meet the term MOQ in your very first conversation with a supplier. This guide explains what it means, why it exists, and how to plan a first order that actually goes smoothly.',
    sections: [
      S('What does MOQ mean?',
        'MOQ stands for Minimum Order Quantity — the smallest number of pieces a supplier will produce per order or per style. At Yasmeen Silk, our MOQ is 5,000–10,000 pieces depending on the product. If someone quotes no minimum at all, you are usually talking to a reseller clearing leftover stock — not a supplier with real production capacity behind them.'),
      S('Why do suppliers set minimums?',
        'Production runs have fixed costs: loom setup, dye batches, pattern calibration, and quality inspection are the same whether you weave 500 pieces or 5,000. Below a certain quantity the economics simply don’t work — for the factory or for you, because small runs price each piece far higher. The MOQ is the point where bulk pricing becomes possible.'),
      S('Planning your first order',
        'Start with fewer styles in larger quantities rather than many styles in small ones. One container of three proven designs is easier to produce, ship, and sell than a sampler of fifteen. Ask your supplier what already sells well in your region — a supplier exporting to 30+ countries knows which patterns move in which markets.'),
      S('Samples always come first',
        'Before committing to thousands of pieces, request samples. Judge the fabric, weave, weight, and finish in your own hands, and keep the sample as your reference standard for the bulk delivery. Any serious supplier — ourselves included — treats sampling as a normal part of the process.'),
      S('FOB vs CIF: who handles shipping?',
        'FOB (Free On Board) Mumbai means the goods are loaded on the vessel and the shipping from there is your responsibility — cheaper if you have a freight forwarder. CIF (Cost, Insurance, Freight) means the supplier delivers to your port with insurance included — simpler for first-time importers. We offer both, along with complete export documentation: invoice, packing list, and certificate of origin. For the full picture — including CNF and the difference between FCL and LCL containers — see our <a href="shipping-terms-fob-cif-fcl-lcl.html">guide to textile shipping terms</a>.'),
      S('Timelines to expect',
        'A typical bulk order moves through sampling (1–2 weeks), production, and sea shipping (2–6 weeks depending on your port). Production time depends on quantity, design, and season: smaller runs are often ready in 4–8 weeks, while very large orders — or orders placed in peak season before Ramadan and Hajj — can take three to four months. We confirm a realistic production window with every quotation and keep you updated as your order progresses, so you can plan your stock calendar around a date you can rely on. The golden rule of the trade: order early for seasonal stock.'),
    ],
    conclusion: 'The easiest way to learn is to ask. Message us on WhatsApp with your market and target products — whether <a href="../gents-shawls.html">gents shawls and rida</a>, <a href="../keffiyehs.html">keffiyehs</a>, or <a href="../sarongs.html">sarongs</a> — and we’ll walk you through MOQ, pricing, and timelines for your first order.',
  },
  ar: {
    title: 'ما هو الحد الأدنى للطلب؟ دليل المستورد الجديد لطلب الأقمشة من الهند',
    metaTitle: 'ما هو الحد الأدنى للطلب MOQ؟ دليل استيراد الأقمشة بالجملة من الهند',
    metaDesc: 'الحد الأدنى للطلب، العينات، FOB أو CIF، وجداول الإنتاج — كل ما يحتاجه المستورد الجديد قبل طلب الشالات أو الشماغات بالجملة من الهند.',
    excerpt: 'الحد الأدنى للطلب، العينات، FOB أو CIF، وجداول الإنتاج — الأساسيات العملية التي يجب أن يفهمها كل مستورد أقمشة جديد قبل التواصل مع المصنع.',
    intro: 'إذا كنت تخطط لأول استيراد أقمشة بالجملة من الهند، فستقابل مصطلح «الحد الأدنى للطلب» في أول محادثة مع المورد. يشرح هذا الدليل معناه وسبب وجوده وكيف تخطط لطلب أول يسير بسلاسة.',
    sections: [
      S('ماذا يعني الحد الأدنى للطلب؟',
        'الحد الأدنى للطلب (MOQ) هو أقل عدد من القطع يقبل المورد إنتاجه لكل طلب أو لكل موديل. في ياسمين للحرير، الحد الأدنى لدينا ٥٠٠٠ إلى ١٠٠٠٠ قطعة حسب المنتج. إذا عرض عليك أحدهم طلباً دون حد أدنى إطلاقاً، فأنت غالباً تتحدث مع من يصفّي مخزوناً متبقياً — لا مع مورد يقف خلفه إنتاج حقيقي.'),
      S('لماذا يضع الموردون حداً أدنى؟',
        'لدورات الإنتاج تكاليف ثابتة: تجهيز الأنوال ودفعات الصباغة ومعايرة النقشات وفحص الجودة، وهي نفسها سواء نسجت ٥٠٠ قطعة أو ٥٠٠٠. تحت كمية معينة لا تنجح الحسابات — لا للمصنع ولا لك، لأن الدفعات الصغيرة ترفع سعر القطعة كثيراً. الحد الأدنى هو النقطة التي يصبح عندها سعر الجملة ممكناً.'),
      S('خطط لطلبك الأول',
        'ابدأ بموديلات أقل وكميات أكبر، لا العكس. حاوية من ثلاثة تصاميم مجربة أسهل في الإنتاج والشحن والبيع من تشكيلة من خمسة عشر. اسأل موردك عما يُباع جيداً في منطقتك — المورد الذي يصدّر لأكثر من ٣٠ دولة يعرف أي النقشات تتحرك في أي الأسواق.'),
      S('العينات تأتي دائماً أولاً',
        'قبل الالتزام بآلاف القطع، اطلب العينات. احكم على القماش والنسج والوزن والتشطيب بيديك، واحتفظ بالعينة كمعيار مرجعي لتسليم الجملة. أي مورد جاد — ونحن منهم — يعتبر العينات جزءاً طبيعياً من العملية.'),
      S('FOB أم CIF: من يتولى الشحن؟',
        'FOB مومباي يعني تحميل البضاعة على السفينة ويكون الشحن بعدها مسؤوليتك — أرخص إذا كان لديك وكيل شحن. أما CIF فيعني أن المورد يوصّل إلى ميناءك مع التأمين — أبسط للمستوردين الجدد. نقدم الخيارين مع وثائق تصدير كاملة: الفاتورة وقائمة التعبئة وشهادة المنشأ. وللصورة الكاملة — بما فيها CNF والفرق بين الحاوية الكاملة FCL والشحن الجزئي LCL — اقرأ <a href="shipping-terms-fob-cif-fcl-lcl.html">دليلنا لمصطلحات شحن الأقمشة</a>.'),
      S('الجداول الزمنية المتوقعة',
        'الطلب النموذجي بالجملة يمر بالعينات (أسبوع إلى أسبوعين)، فالإنتاج، فالشحن البحري (أسبوعان إلى ٦ أسابيع حسب ميناءك). مدة الإنتاج تعتمد على الكمية والتصميم والموسم: الدفعات الأصغر تجهز غالباً في ٤ إلى ٨ أسابيع، بينما الطلبات الكبيرة جداً — أو طلبات موسم الذروة قبل رمضان والحج — قد تستغرق ثلاثة إلى أربعة أشهر. نؤكد لك مدة إنتاج واقعية مع كل عرض سعر ونبقيك على اطلاع بتقدم طلبك، لتخطط مخزونك على موعد يمكنك الاعتماد عليه. القاعدة الذهبية في التجارة: اطلب مبكراً لمخزون المواسم.'),
    ],
    conclusion: 'أسهل طريقة للتعلم هي السؤال. راسلنا على واتساب بسوقك ومنتجاتك المستهدفة — سواء <a href="../gents-shawls.html">الشالات الرجالية والرداء</a> أو <a href="../keffiyehs.html">الشماغات</a> أو <a href="../sarongs.html">المعاوز</a> — وسنشرح لك الحد الأدنى والأسعار والجداول لطلبك الأول.',
  },
},
{
  slug: 'shipping-terms-fob-cif-fcl-lcl',
  thumb: 'ladies-shawls-designer-colour-collection.webp',
  en: {
    title: 'FOB, CIF, CNF, FCL, LCL: Shipping Terms Every Textile Importer Should Know',
    metaTitle: 'FOB vs CIF vs CNF, FCL vs LCL — Textile Shipping Terms Explained',
    metaDesc: 'What FOB, CIF and CNF mean when importing wholesale textiles from India, and how to choose between a 20ft FCL container and LCL shipping for shawls, keffiyehs and scarves.',
    excerpt: 'FOB, CIF, CNF, FCL, LCL — five abbreviations that decide what you pay and who carries the risk. A plain-language guide for wholesale textile importers.',
    intro: 'Every textile import quotation comes wrapped in abbreviations: FOB, CIF, CNF, FCL, LCL. They look like jargon, but they answer the two most practical questions in any deal — who pays for what, and who carries the risk at each stage of the journey from Mumbai to your market. Here is what each term means in plain language, and how to choose the right combination for your order.',
    sections: [
      S('FOB — Free On Board',
        'Under FOB Mumbai, we handle everything up to and including loading your goods onto the vessel: production, packing, inland transport, and export customs clearance. The moment the goods are on board, cost and risk pass to you. FOB usually gives the best total price if you already work with a freight forwarder, because you control the ocean freight and insurance yourself and can negotiate your own rates.'),
      S('CIF — Cost, Insurance and Freight',
        'Under CIF, our price includes the goods, marine insurance, and freight all the way to your named port. You take over at destination: customs clearance and inland delivery. CIF is the simplest option for first-time importers — one price, one responsible party, insurance included. Most of our new customers start with CIF and move to FOB as their volumes grow.'),
      S('CNF (CFR) — Cost and Freight',
        'CNF — also written CFR or C&amp;F — sits between the two: we pay the freight to your port, but insurance is your responsibility. Buyers who hold their own annual cargo insurance policies usually prefer CNF, because paying for insurance twice makes no sense. If you are not sure whether you are covered, ask your insurer before choosing CNF over CIF.'),
      S('FCL — Full Container Load (20ft &amp; 40ft)',
        'FCL means the container is yours alone — sealed at our end, opened at yours. The 20ft container (a “20FCL”) is the workhorse of the textile trade, and a 40ft doubles the space for larger programmes. Folded textiles load densely, so a 20ft container carries a remarkable quantity of shawls, keffiyehs, or sarongs — we calculate the exact loadability for your product mix with every quotation. FCL clears ports faster, is safer because no other shipper’s cargo touches yours, and gives the lowest cost per piece once your volume fills most of a container.'),
      S('LCL — Less than Container Load',
        'LCL means your cargo shares a container with other shippers, and you pay by volume (per cubic metre). It is the right choice when your order doesn’t justify a full container — and it pairs naturally with our minimum order of 5,000–10,000 pieces, which often ships comfortably as LCL. Expect slightly longer handling at both ends, because the container is consolidated and deconsolidated at freight warehouses, and budget a little more per piece than FCL rates.'),
      S('Which combination is right for you?',
        'For a first order or a smaller quantity: CIF + LCL is the simplest — one all-in price to your port, no container to fill. For growing repeat business: CNF or FOB + FCL puts you in control and brings the per-piece cost down. Whichever you choose, we handle the export side completely: commercial invoice, packing list, certificate of origin, and bill of lading. Tell us your port and preferred terms with your enquiry, and your quotation will come back in exactly that format.'),
    ],
    conclusion: 'Shipping terms decide more of your landed cost than most buyers expect. If you’re unsure, send us your port and order size on WhatsApp — we’ll quote FOB, CNF, and CIF side by side so you can compare like for like. New to importing? Start with our <a href="moq-guide-importing-textiles-india.html">guide to MOQ and first orders</a>.',
  },
  ar: {
    title: 'FOB وCIF وCNF وFCL وLCL: مصطلحات الشحن التي يجب أن يعرفها كل مستورد أقمشة',
    metaTitle: 'الفرق بين FOB وCIF وCNF وبين FCL وLCL — مصطلحات شحن الأقمشة',
    metaDesc: 'ماذا تعني FOB وCIF وCNF عند استيراد الأقمشة بالجملة من الهند، وكيف تختار بين حاوية ٢٠ قدم كاملة FCL والشحن الجزئي LCL للشالات والشماغات.',
    excerpt: 'FOB وCIF وCNF وFCL وLCL — خمسة اختصارات تحدد ما تدفعه ومن يتحمل المخاطر. دليل بلغة بسيطة لمستوردي الأقمشة بالجملة.',
    intro: 'كل عرض سعر لاستيراد الأقمشة يأتي ملفوفاً بالاختصارات: FOB وCIF وCNF وFCL وLCL. تبدو مصطلحات تقنية، لكنها تجيب على أهم سؤالين عمليين في أي صفقة — من يدفع ماذا، ومن يتحمل المخاطر في كل مرحلة من الرحلة من مومباي إلى سوقك. إليك معنى كل مصطلح بلغة بسيطة، وكيف تختار التركيبة المناسبة لطلبك.',
    sections: [
      S('FOB — تسليم على ظهر السفينة',
        'بموجب FOB مومباي، نتولى كل شيء حتى تحميل بضاعتك على السفينة: الإنتاج والتعبئة والنقل الداخلي والتخليص الجمركي للتصدير. وبمجرد صعود البضاعة على متن السفينة، تنتقل التكلفة والمخاطر إليك. عادة ما يمنحك FOB أفضل سعر إجمالي إذا كنت تتعامل بالفعل مع وكيل شحن، لأنك تتحكم بالشحن البحري والتأمين بنفسك وتفاوض على أسعارك الخاصة.'),
      S('CIF — التكلفة والتأمين والشحن',
        'بموجب CIF، يشمل سعرنا البضاعة والتأمين البحري والشحن حتى ميناءك المحدد. وتتولى أنت الأمور عند الوصول: التخليص الجمركي والتوصيل الداخلي. CIF هو الخيار الأبسط للمستوردين الجدد — سعر واحد وطرف مسؤول واحد والتأمين مشمول. معظم عملائنا الجدد يبدأون بـ CIF ثم ينتقلون إلى FOB مع نمو كمياتهم.'),
      S('CNF (CFR) — التكلفة والشحن',
        'CNF — ويُكتب أيضاً CFR أو C&amp;F — يقع بين الاثنين: ندفع الشحن إلى ميناءك، لكن التأمين مسؤوليتك. المشترون الذين لديهم وثائق تأمين سنوية على البضائع يفضلون عادة CNF، لأن دفع التأمين مرتين لا معنى له. إن لم تكن متأكداً من تغطيتك، اسأل شركة التأمين قبل اختيار CNF بدلاً من CIF.'),
      S('FCL — حاوية كاملة (٢٠ و٤٠ قدماً)',
        'FCL يعني أن الحاوية لك وحدك — تُختم عندنا وتُفتح عندك. حاوية الـ٢٠ قدماً هي العمود الفقري لتجارة الأقمشة، وحاوية الـ٤٠ قدماً تضاعف المساحة للبرامج الأكبر. الأقمشة المطوية تُحمّل بكثافة عالية، لذا تتسع حاوية ٢٠ قدماً لكمية مدهشة من الشالات أو الشماغات أو المعاوز — ونحسب لك سعة التحميل الدقيقة لمزيج منتجاتك مع كل عرض سعر. حاويات FCL تمر عبر الموانئ أسرع، وأكثر أماناً لأن بضاعة غيرك لا تلمس بضاعتك، وتمنح أقل تكلفة للقطعة متى ملأت كمياتك معظم الحاوية.'),
      S('LCL — شحن جزئي',
        'LCL يعني أن بضاعتك تتشارك الحاوية مع شاحنين آخرين، وتدفع حسب الحجم (لكل متر مكعب). وهو الخيار الصحيح عندما لا يبرر طلبك حاوية كاملة — ويتناسب طبيعياً مع حدنا الأدنى للطلب من ٥٠٠٠ إلى ١٠٠٠٠ قطعة، الذي يُشحن غالباً بسهولة كشحن جزئي. توقع وقتاً أطول قليلاً في المناولة عند الطرفين، لأن الحاوية تُجمّع وتُفرّغ في مستودعات الشحن، واحسب تكلفة للقطعة أعلى قليلاً من أسعار FCL.'),
      S('أي تركيبة تناسبك؟',
        'لطلب أول أو كمية أصغر: CIF مع LCL هو الأبسط — سعر شامل واحد إلى ميناءك دون حاوية عليك ملؤها. للأعمال المتكررة المتنامية: CNF أو FOB مع FCL يمنحك التحكم ويخفض تكلفة القطعة. وأياً كان اختيارك، نتولى جانب التصدير بالكامل: الفاتورة التجارية وقائمة التعبئة وشهادة المنشأ وبوليصة الشحن. أخبرنا بميناءك والشروط المفضلة مع استفسارك، وسيصلك عرض السعر بالصيغة نفسها تماماً.'),
    ],
    conclusion: 'مصطلحات الشحن تحدد من تكلفتك النهائية أكثر مما يتوقع معظم المشترين. إن لم تكن متأكداً، أرسل لنا ميناءك وحجم طلبك على واتساب — وسنقدم لك عروض FOB وCNF وCIF جنباً إلى جنب لتقارن بوضوح. جديد على الاستيراد؟ ابدأ بـ<a href="moq-guide-importing-textiles-india.html">دليلنا للحد الأدنى للطلب والطلبات الأولى</a>.',
  },
},
{
  slug: 'ghutra-vs-shemagh-vs-keffiyeh',
  thumb: 'traditional-ghutra-yasmeen-brand.webp',
  en: {
    title: 'Ghutra vs Shemagh vs Keffiyeh: What’s the Difference?',
    metaTitle: 'Ghutra vs Shemagh vs Keffiyeh — What’s the Difference?',
    metaDesc: 'Ghutra, shemagh, keffiyeh, kufiya — different names you’ll hear for the traditional men’s headscarf. What each term usually refers to, and how to order the right one.',
    excerpt: 'Different markets use different names for the traditional men’s headscarf. Here’s what each term usually refers to — and how to make sure you order exactly what your customers expect.',
    intro: 'Ghutra, shemagh, keffiyeh, kufiya, hatta — if you trade in traditional headwear you’ll hear all of these, sometimes for the same garment. The names overlap, and usage varies from market to market. Here is a practical guide to the terminology, so that when you place a wholesale order, you and your supplier mean the same thing.',
    sections: [
      S('One family of garments, many names',
        'All of these terms describe the traditional square headscarf worn by men, typically folded into a triangle and worn draped over the head. The differences buyers care about in practice are colour, pattern, size, and fabric — not the name itself. The same factory loom may weave pieces that one customer calls a shemagh and another calls a keffiyeh.'),
      S('Keffiyeh',
        'Keffiyeh (also spelled kufiya) is the most widely recognised term internationally, and usually refers to the patterned woven scarf — the classic black-and-white and red-and-white checks being the most famous examples. But the classics are only the start: keffiyehs are woven in a wide spectrum of colours — greens, blues, greys, browns, golds, and bold multi-colour designs — and coloured patterns are a growing part of what our buyers order.'),
      S('Ghutra',
        'Ghutra is, for most of our customers, simply the Arabic name for the same garment — what one buyer calls a keffiyeh, another calls a ghutra. Usage varies from market to market, but in our catalogue the two words refer to the same family of woven headscarves, in the full range of patterns and colours. When you see ghutra on our pages, read it as keffiyeh.'),
      S('Shemagh',
        'Shemagh generally describes the heavier patterned scarf, often in red-and-white, and the term is common in many Gulf markets. In practice, shemagh and keffiyeh overlap heavily — many customers use them interchangeably.'),
      S('What matters when ordering wholesale',
        'Because the words mean slightly different things to different customers, never order by name alone. Specify: the pattern and colours, the size (standard sizes range roughly from 110×110 cm to 140×140 cm), the fabric and weight, and the edge finish. A photo plus those four details removes all ambiguity. We supply the full range — classic black-and-white, red-and-white, and coloured and multi-colour patterns — in all standard sizes under the Yasmeen brand.'),
    ],
    conclusion: 'Whatever your market calls it, what matters is the weave. Browse our <a href="../keffiyehs.html">keffiyeh, ghutra and scarf collection</a> — a small glimpse of a catalogue that runs to hundreds of designs — then message us on WhatsApp with your pattern, size, and quantity, and we’ll confirm exactly what will be produced before anything goes on the loom.',
  },
  ar: {
    title: 'الفرق بين الشماغ والغترة والكوفية',
    metaTitle: 'الفرق بين الشماغ والغترة والكوفية — دليل المشتري',
    metaDesc: 'شماغ، غترة، كوفية، حطّة — أسماء مختلفة لغطاء الرأس الرجالي التقليدي. ما الذي يشير إليه كل مصطلح عادة، وكيف تطلب الصحيح بالجملة.',
    excerpt: 'تستخدم الأسواق المختلفة أسماء مختلفة لغطاء الرأس الرجالي التقليدي. إليك ما يشير إليه كل مصطلح عادة — وكيف تضمن طلب ما يتوقعه عملاؤك تماماً.',
    intro: 'شماغ، غترة، كوفية، حطّة — إذا كنت تتاجر في أغطية الرأس التقليدية فستسمع كل هذه الأسماء، وأحياناً للقطعة نفسها. الأسماء تتداخل ويختلف استخدامها من سوق إلى آخر. إليك دليلاً عملياً للمصطلحات، حتى إذا قدمت طلباً بالجملة تعني أنت وموردك الشيء نفسه.',
    sections: [
      S('عائلة واحدة من الملابس، أسماء كثيرة',
        'كل هذه المصطلحات تصف غطاء الرأس المربع التقليدي للرجال، يُطوى عادة مثلثاً ويُلبس منسدلاً على الرأس. الفروق التي تهم المشترين عملياً هي اللون والنقشة والمقاس والقماش — لا الاسم نفسه. النول نفسه في المصنع قد ينسج قطعاً يسميها عميل شماغاً ويسميها آخر كوفية.'),
      S('الكوفية',
        'الكوفية هي المصطلح الأوسع انتشاراً عالمياً، وتشير عادة إلى الوشاح المنسوج المنقوش — وأشهر الأمثلة الكاروهات الكلاسيكية بالأسود والأبيض أو الأحمر والأبيض. لكن الكلاسيكيات ليست سوى البداية: تُنسج الشماغات بطيف واسع من الألوان — الأخضر والأزرق والرمادي والبني والذهبي والتصاميم الجريئة متعددة الألوان — والنقشات الملونة جزء متنامٍ مما يطلبه مشترونا.'),
      S('الغترة',
        'الغترة عند معظم عملائنا هي ببساطة الاسم العربي للقطعة نفسها — فما يسميه مشترٍ شماغاً يسميه آخر غترة. يختلف الاستخدام من سوق إلى آخر، لكن الكلمتين في تشكيلتنا تشيران إلى العائلة نفسها من أغطية الرأس المنسوجة، بكامل النقشات والألوان. عندما ترى «غترة» في صفحاتنا فاقرأها شماغاً.'),
      S('الشماغ',
        'الشماغ يصف عموماً الوشاح المنقوش الأثقل، غالباً بالأحمر والأبيض، والمصطلح شائع في كثير من أسواق الخليج. عملياً يتداخل الشماغ والكوفية كثيراً — وكثير من العملاء يستخدمونهما بالتبادل.'),
      S('ما يهم عند الطلب بالجملة',
        'لأن الكلمات تعني أشياء مختلفة قليلاً لعملاء مختلفين، لا تطلب بالاسم وحده أبداً. حدد: النقشة والألوان، والمقاس (المقاسات القياسية تتراوح تقريباً من ١١٠×١١٠ سم إلى ١٤٠×١٤٠ سم)، والقماش والوزن، وتشطيب الحواف. صورة مع هذه التفاصيل الأربعة تزيل كل غموض. نورّد التشكيلة الكاملة — الكلاسيكي الأسود والأبيض، والأحمر والأبيض، والنقشات الملونة ومتعددة الألوان — بجميع المقاسات القياسية تحت علامة ياسمين.'),
    ],
    conclusion: 'مهما كان اسمه في سوقك، المهم هو النسج. تصفح <a href="../keffiyehs.html">مجموعة الشماغات والغتر والأوشحة</a> لدينا — وهي لمحة صغيرة من تشكيلة تضم مئات التصاميم — ثم راسلنا على واتساب بالنقشة والمقاس والكمية، وسنؤكد لك بالضبط ما سيُنتج قبل أن يبدأ النول.',
  },
},
{
  slug: 'verify-textile-quality-samples',
  thumb: 'bordered-ghutra-paisley-detail.webp',
  en: {
    title: 'How to Verify Textile Quality from Samples Before a Bulk Order',
    metaTitle: 'How to Check Textile Samples Before a Bulk Order — Buyer’s Guide',
    metaDesc: 'Six practical checks for wholesale buyers: weave density, weight and drape, colour fastness, edges, sizing consistency — and how to use a sample as your contract.',
    excerpt: 'A sample is your contract with the factory. Six practical checks — weave, weight, colour fastness, edges, sizing — that protect you before committing to thousands of pieces.',
    intro: 'In wholesale textiles, the sample is more than a preview — it is your reference standard, the physical agreement of what 10,000 pieces should look like. Here is how experienced buyers examine a sample before committing to a bulk order, using nothing more than their hands, eyes, and a damp white cloth.',
    sections: [
      S('1. Look at the weave as a whole',
        'Start with the overall impression: the pattern should read clearly and the construction should feel sound, with no loose threads or weak patches. Keep in mind that keffiyehs and traditional scarves are woven on traditional looms — minor variations from piece to piece are part of the craft, a sign of authentic production rather than a defect. What a sample tells you is the overall standard: a clear pattern, a sound weave, and a finish you would happily put in front of your own customers.'),
      S('2. Feel the weight and drape',
        'Weight determines warmth, durability, and how the piece hangs when worn. Compare the sample against a piece you already sell, or ask your supplier for the GSM (grams per square metre) and verify it feels right. A shawl or scarf should fall in soft folds, not stand stiffly or collapse limply.'),
      S('3. Test colour fastness',
        'Rub a damp white cloth firmly against the dyed fabric. Significant colour transfer means the dye will bleed in washing — the fastest way to lose a retail customer. Good dye work survives this test with minimal marking.'),
      S('4. Inspect edges and finishing',
        'Edges, fringes, and borders fail first in daily use. Check that hems are straight and tightly stitched, fringes evenly twisted, and embroidered details — like the zari work on a <a href="../gents-shawls.html">rida or bordered shawl</a> — securely anchored with no loose ends.'),
      S('5. Measure it',
        'Measure the sample and compare against the agreed specification. Then, when your bulk order arrives, measure pieces from different bales against the sample. Consistent sizing across a production run is one of the clearest signs of a disciplined factory.'),
      S('6. Keep the sample as your contract',
        'Label the approved sample, photograph it, and confirm in writing that bulk production will match it. A reputable supplier welcomes this — it protects both sides. Yasmeen orders pass through a rigorous batch-checking process against the approved standard before packing, and our products carry our quality seal.'),
    ],
    conclusion: 'Samples cost a little time and save entire containers. Request yours via WhatsApp — tell us which products interest you, from <a href="../keffiyehs.html">keffiyehs</a> to <a href="../prayer-rugs.html">prayer rugs</a>, and we’ll arrange samples so you can run every one of these checks yourself.',
  },
  ar: {
    title: 'كيف تتحقق من جودة الأقمشة من العينات قبل الطلب بالجملة',
    metaTitle: 'كيف تفحص عينات الأقمشة قبل الطلب بالجملة — دليل المشتري',
    metaDesc: 'ستة فحوصات عملية لمشتري الجملة: كثافة النسج، الوزن والانسدال، ثبات الألوان، الحواف، توحيد المقاسات — وكيف تجعل العينة عقدك مع المصنع.',
    excerpt: 'العينة هي عقدك مع المصنع. ستة فحوصات عملية — النسج والوزن وثبات الألوان والحواف والمقاسات — تحميك قبل الالتزام بآلاف القطع.',
    intro: 'في تجارة الأقمشة بالجملة، العينة أكثر من مجرد معاينة — إنها معيارك المرجعي، والاتفاق المادي على ما يجب أن تكون عليه ١٠٠٠٠ قطعة. إليك كيف يفحص المشترون ذوو الخبرة العينة قبل الالتزام بطلب جملة، بلا أدوات سوى اليدين والعينين وقطعة قماش بيضاء مبللة.',
    sections: [
      S('١. انظر إلى النسج ككل',
        'ابدأ بالانطباع العام: يجب أن تُقرأ النقشة بوضوح وأن يكون البناء متيناً، بلا خيوط مفكوكة أو مواضع ضعيفة. وتذكر أن الشماغات والأوشحة التقليدية تُنسج على أنوال تقليدية — فالتفاوتات الصغيرة بين قطعة وأخرى جزء من الحرفة وعلامة إنتاج أصيل لا عيباً. ما تخبرك به العينة هو المستوى العام: نقشة واضحة ونسج متين وتشطيب يسرك أن تضعه أمام عملائك.'),
      S('٢. تحسس الوزن والانسدال',
        'الوزن يحدد الدفء والمتانة وطريقة انسدال القطعة عند ارتدائها. قارن العينة بقطعة تبيعها بالفعل، أو اطلب من موردك وزن المتر المربع (GSM) وتأكد أن الملمس مناسب. الشال أو الوشاح يجب أن ينسدل بطيات ناعمة، لا أن يقف متصلباً أو يرتخي بلا شكل.'),
      S('٣. اختبر ثبات الألوان',
        'افرك قطعة قماش بيضاء مبللة بقوة على القماش المصبوغ. انتقال اللون بشكل ملحوظ يعني أن الصبغة ستسيل في الغسيل — أسرع طريقة لخسارة عميل التجزئة. الصباغة الجيدة تجتاز هذا الاختبار بأثر ضئيل.'),
      S('٤. افحص الحواف والتشطيب',
        'الحواف والشراشيب والأطراف هي أول ما يتلف في الاستخدام اليومي. تأكد أن الحواف مستقيمة ومخيطة بإحكام، والشراشيب مبرومة بانتظام، والتفاصيل المطرزة — مثل الزري في <a href="../gents-shawls.html">الرداء أو الشال ذي الحواف</a> — مثبتة جيداً دون خيوط سائبة.'),
      S('٥. قس المقاسات',
        'قس العينة وقارنها بالمواصفات المتفق عليها. ثم عند وصول طلب الجملة، قس قطعاً من بالات مختلفة مقابل العينة. توحيد المقاسات عبر دفعة الإنتاج من أوضح علامات المصنع المنضبط.'),
      S('٦. احتفظ بالعينة كعقدك',
        'ضع علامة على العينة المعتمدة وصوّرها وأكّد كتابياً أن إنتاج الجملة سيطابقها. المورد المحترم يرحب بذلك — فهو يحمي الطرفين. تمر طلبات ياسمين بعملية فحص دقيقة على مستوى الدفعات مقابل المعيار المعتمد قبل التعبئة، وتحمل منتجاتنا ختم الجودة لدينا.'),
    ],
    conclusion: 'العينات تكلف قليلاً من الوقت وتوفر حاويات كاملة. اطلب عيناتك عبر واتساب — أخبرنا بالمنتجات التي تهمك، من <a href="../keffiyehs.html">الشماغات</a> إلى <a href="../prayer-rugs.html">سجاد الصلاة</a>، وسنرتب العينات لتجري كل هذه الفحوصات بنفسك.',
  },
},
{
  slug: 'choosing-the-right-shawl',
  thumb: 'black-gold-border-gents-shawl-wholesale.webp',
  en: {
    title: 'Choosing the Right Shawl for Every Occasion',
    metaTitle: 'Choosing the Right Shawl for Every Occasion — A Guide',
    metaDesc: 'From the black rida for prayer to richly bordered ceremonial shawls and everyday wraps — a guide to shawl types, fabrics, and building a wholesale range.',
    excerpt: 'From the black rida worn for prayer to gold-bordered ceremonial pieces and everyday wraps — how shawl styles differ, and how wholesalers build a range that sells.',
    intro: 'A shawl is never just fabric. Across many Muslim communities in Africa, the Middle East, and South Asia, shawls are worn as a mark of tradition, modesty, and identity — and different occasions call for different pieces. Whether you’re buying for yourself or building a wholesale range, here is how the styles differ and where each one belongs.',
    sections: [
      S('For daily prayer and worship',
        'The classic black rida is the quiet workhorse of the category: worn for prayer and religious gatherings, valued for its modesty and durability. Daily-wear pieces need fabrics that survive constant folding and regular washing — our rida and prayer shawls are woven from wool, acrylic, polyester, and viscose blends selected exactly for this.'),
      S('For ceremonies and special gatherings',
        'Weddings, Eid gatherings, and formal occasions call for richer pieces: shawls with woven gold or silver zari borders, deeper colours, and heavier drape. These are bought less often but noticed more — the piece a customer keeps for years. A small selection of <a href="../gents-shawls.html">bordered ceremonial shawls</a> elevates an entire product display.'),
      S('As gifts',
        'Shawls are a classic gift for Eid, for travellers returning from Hajj and Umrah, and for elders and guests of honour. Gift buyers choose with their eyes: presentation, border detail, and packaging matter as much as the fabric. Pieces that come labelled and well-packed — as all Yasmeen products do — sell better in this segment.'),
      S('For everyday warmth and wear',
        'Beyond occasions, shawls remain everyday garments — warmth in winter, cover from sun and dust, comfort in air-conditioned halls. Here value matters most: dependable fabric, honest weight, and colours that survive washing. This is the volume segment of the trade, where acrylic and polyester blends shine.'),
      S('For wholesalers: building a range',
        'A balanced shawl range covers all four needs: a core of daily-wear black rida, a mid-tier of patterned and coloured pieces, a premium tier with zari borders for ceremonies, and a gifting line. Start with proven sellers in your market, then expand — our team can tell you what moves in each of the 30+ countries we supply.'),
    ],
    conclusion: 'Browse a glimpse of the range — <a href="../gents-shawls.html">gents shawls and rida</a> and <a href="../ladies-shawls.html">ladies shawls</a> — and remember that what’s on the website is only a small sample: our full catalogue runs to hundreds of designs. Message us on WhatsApp, tell us your market, and we’ll send what suits it along with pricing and samples.',
  },
  ar: {
    title: 'اختيار الشال المناسب لكل مناسبة',
    metaTitle: 'اختيار الشال المناسب لكل مناسبة — دليل',
    metaDesc: 'من الرداء الأسود للصلاة إلى الشالات الاحتفالية ذات الحواف الذهبية واللفاعات اليومية — دليل أنواع الشالات والأقمشة وبناء تشكيلة الجملة.',
    excerpt: 'من الرداء الأسود الذي يُلبس للصلاة إلى القطع الاحتفالية بحواف ذهبية واللفاعات اليومية — كيف تختلف أنواع الشالات، وكيف يبني تجار الجملة تشكيلة تبيع.',
    intro: 'الشال ليس مجرد قماش. في كثير من المجتمعات المسلمة في أفريقيا والشرق الأوسط وجنوب آسيا، تُلبس الشالات كرمز للتقاليد والاحتشام والهوية — ولكل مناسبة قطعتها. سواء كنت تشتري لنفسك أو تبني تشكيلة جملة، إليك كيف تختلف الأنواع وأين ينتمي كل منها.',
    sections: [
      S('للصلاة والعبادة اليومية',
        'الرداء الأسود الكلاسيكي هو العمود الهادئ لهذه الفئة: يُلبس للصلاة والمناسبات الدينية، ويُقدّر لاحتشامه ومتانته. قطع الارتداء اليومي تحتاج أقمشة تتحمل الطي المستمر والغسل المنتظم — رداؤنا وشالات الصلاة لدينا تُنسج من مزائج الصوف والأكريليك والبوليستر والفسكوز المختارة لهذا تحديداً.'),
      S('للاحتفالات والمناسبات الخاصة',
        'الأعراس وتجمعات العيد والمناسبات الرسمية تستدعي قطعاً أغنى: شالات بحواف زري ذهبية أو فضية منسوجة، وألوان أعمق، وانسدال أثقل. تُشترى هذه القطع أقل لكنها تُلاحظ أكثر — وهي القطعة التي يحتفظ بها العميل سنوات. تشكيلة صغيرة من <a href="../gents-shawls.html">الشالات الاحتفالية ذات الحواف</a> ترفع مستوى العرض كاملاً.'),
      S('كهدايا',
        'الشالات هدية كلاسيكية في العيد، وللعائدين من الحج والعمرة، وللكبار وضيوف الشرف. مشترو الهدايا يختارون بأعينهم: العرض وتفاصيل الحواف والتغليف تهم بقدر القماش. القطع الموسومة والمعبأة جيداً — ككل منتجات ياسمين — تبيع أفضل في هذه الفئة.'),
      S('للدفء والارتداء اليومي',
        'بعيداً عن المناسبات، تبقى الشالات لباساً يومياً — دفء في الشتاء، ووقاية من الشمس والغبار، وراحة في القاعات المكيفة. هنا تهم القيمة أولاً: قماش موثوق ووزن صادق وألوان تتحمل الغسيل. هذه فئة الكميات الكبيرة في التجارة، حيث تتفوق مزائج الأكريليك والبوليستر.'),
      S('لتجار الجملة: بناء التشكيلة',
        'التشكيلة المتوازنة تغطي الاحتياجات الأربعة: قاعدة من الرداء الأسود اليومي، وفئة وسطى من القطع المنقوشة والملونة، وفئة فاخرة بحواف الزري للاحتفالات، وخط للهدايا. ابدأ بالأكثر مبيعاً في سوقك ثم توسع — وفريقنا يخبرك بما يتحرك في كل دولة من الدول الثلاثين التي نوردها.'),
    ],
    conclusion: 'تصفح لمحة من التشكيلة — <a href="../gents-shawls.html">الشالات الرجالية والرداء</a> و<a href="../ladies-shawls.html">الشالات النسائية</a> — وتذكر أن ما يظهر على الموقع ليس سوى عيّنة صغيرة: تشكيلتنا الكاملة تضم مئات التصاميم. راسلنا على واتساب وأخبرنا بسوقك، وسنرسل ما يناسبه مع الأسعار والعينات.',
  },
},
];

// ----------------------------------------------------------------------------
// TEMPLATE
// ----------------------------------------------------------------------------
const BASE_CSS = `
*,*::before,*::after{margin:0;padding:0;box-sizing:border-box}
:root{
--emerald:#0C1F17;--emerald-deep:#071410;--emerald-mid:#0F2B1F;
--gold:#C9A96E;--gold-light:#DBBF8C;--gold-dark:#A6844A;--gold-muted:rgba(201,169,110,0.15);
--cream:#F5F0E8;--cream-dim:#D9D0C2;--cream-dark:#A69C8E;
--serif:'Playfair Display',Georgia,serif;
--sans:'Inter',-apple-system,BlinkMacSystemFont,sans-serif;
--arabic:'Amiri','Noto Sans Arabic',serif;
--transition:0.5s cubic-bezier(0.25,0.46,0.45,0.94);
--luxury-ease:cubic-bezier(0.16,1,0.3,1);
}
html{scroll-behavior:smooth;overflow-x:hidden}
body{font-family:var(--sans);background:var(--emerald-deep);color:var(--cream);line-height:1.7;overflow-x:hidden}
[dir="rtl"] body{font-family:var(--arabic)}
a{text-decoration:none;color:inherit}
img{max-width:100%;display:block}
.container{max-width:1200px;margin:0 auto;padding:0 24px}
.gold-text{background:linear-gradient(135deg,var(--gold-dark),var(--gold),var(--gold-light));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.nav{position:fixed;top:0;left:0;right:0;z-index:1000;padding:16px 0;transition:var(--transition);background:rgba(7,20,16,0.4);backdrop-filter:blur(10px)}
.nav.scrolled{background:rgba(7,20,16,0.95);backdrop-filter:blur(30px);padding:8px 0;border-bottom:1px solid var(--gold-muted)}
.nav-inner{display:flex;align-items:center;justify-content:space-between}
.nav-logo img{height:70px;transition:var(--transition)}
.nav.scrolled .nav-logo img{height:45px}
.nav-links{display:flex;gap:14px;align-items:center}
.nav-links a{font-size:10px;letter-spacing:1.2px;text-transform:uppercase;color:var(--cream-dim);transition:var(--transition);font-weight:400;position:relative;white-space:nowrap}
.nav-links a::after{content:'';position:absolute;bottom:-4px;left:0;right:0;height:1px;background:var(--gold);transform:scaleX(0);transition:var(--transition)}
.nav-links a:hover{color:var(--gold)}
.nav-links a:hover::after{transform:scaleX(1)}
.nav-links a.active{color:var(--gold)}
.nav-links a.active::after{transform:scaleX(1)}
.nav-lang{cursor:pointer;font-size:10px;letter-spacing:1px;text-transform:uppercase;color:var(--gold);border:1px solid var(--gold);padding:5px 14px;transition:var(--transition);background:transparent;font-family:inherit;white-space:nowrap}
.nav-lang:hover{background:var(--gold);color:var(--emerald-deep)}
.nav-hamburger{display:none;flex-direction:column;gap:5px;cursor:pointer;background:none;border:none;padding:5px}
.nav-hamburger span{width:24px;height:1.5px;background:var(--cream);transition:var(--transition)}
.nav-lang-mobile{display:none;cursor:pointer;font-size:9px;letter-spacing:1px;text-transform:uppercase;color:var(--gold);border:1px solid rgba(201,169,110,0.4);padding:5px 12px;background:transparent;font-family:inherit;white-space:nowrap;transition:var(--transition)}
.mobile-menu{display:none;position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(7,20,16,0.98);z-index:999;flex-direction:column;align-items:center;justify-content:center;gap:28px}
.mobile-menu.open{display:flex}
.mobile-menu a{font-size:18px;letter-spacing:3px;text-transform:uppercase;color:var(--cream);transition:var(--transition)}
.mobile-menu a:hover{color:var(--gold)}
.mobile-close{position:absolute;top:24px;right:24px;background:none;border:none;color:var(--cream);font-size:28px;cursor:pointer}
.nav-drop{position:relative}
.nav-drop-btn{display:inline-flex;align-items:center;gap:6px;font-family:inherit;font-size:10px;font-weight:400;line-height:inherit;letter-spacing:1.2px;text-transform:uppercase;color:var(--cream-dim);background:none;border:none;cursor:pointer;padding:0;margin:0;transition:var(--transition);white-space:nowrap}
.nav-drop-btn::after{content:'\\25BE';font-size:9px;color:var(--gold);transition:var(--transition)}
.nav-drop:hover .nav-drop-btn{color:var(--gold)}
.nav-drop-menu{position:absolute;top:calc(100% + 16px);left:50%;transform:translateX(-50%) translateY(8px);background:rgba(7,20,16,0.97);backdrop-filter:blur(20px);border:1px solid rgba(201,169,110,0.25);min-width:220px;padding:10px 0;opacity:0;visibility:hidden;transition:opacity .3s ease,transform .3s ease,visibility .3s;z-index:1001}
.nav-drop-menu::before{content:'';position:absolute;top:-16px;left:0;right:0;height:16px}
.nav-drop:hover .nav-drop-menu,.nav-drop:focus-within .nav-drop-menu{opacity:1;visibility:visible;transform:translateX(-50%) translateY(0)}
.nav-drop-menu a{display:block;padding:11px 24px;font-size:10px;letter-spacing:1.5px;text-transform:uppercase;color:var(--cream-dim);transition:var(--transition)}
.nav-drop-menu a::after{display:none}
.nav-drop-menu a:hover{background:rgba(201,169,110,0.08);color:var(--gold)}
.page-hero{padding:170px 0 70px;text-align:center;background:var(--emerald-deep);border-bottom:1px solid rgba(201,169,110,0.08)}
.page-hero-label{font-size:11px;letter-spacing:5px;text-transform:uppercase;color:var(--gold);margin-bottom:16px;font-weight:500}
.page-hero h1{font-family:var(--serif);font-size:clamp(30px,4.5vw,52px);font-weight:400;line-height:1.25;margin-bottom:16px;color:var(--cream);max-width:900px;margin-left:auto;margin-right:auto}
.page-hero-desc{font-size:16px;color:var(--cream-dark);font-weight:300;line-height:1.9;max-width:700px;margin:0 auto}
.breadcrumb{margin-top:28px;font-size:11px;color:var(--cream-dark);letter-spacing:1px;text-transform:uppercase}
.breadcrumb a{color:var(--cream-dim);transition:var(--transition)}
.breadcrumb a:hover{color:var(--gold)}
.breadcrumb span{color:var(--gold);margin:0 8px}
.geo-sep{display:flex;align-items:center;justify-content:center;padding:54px 24px;gap:16px;max-width:600px;margin:0 auto}
.geo-sep::before,.geo-sep::after{content:'';flex:1;height:1px;background:linear-gradient(90deg,transparent,var(--gold),transparent)}
.sep-star .dr{stroke-dasharray:100;stroke-dashoffset:100;transition:stroke-dashoffset 1.6s cubic-bezier(0.16,1,0.3,1)}
.geo-sep.visible .sep-star .dr{stroke-dashoffset:0}
.sep-star .dr2{transition-delay:.35s}
.sep-star .dr3{transition-delay:.8s}
.article-meta{display:flex;justify-content:center;gap:18px;margin-top:20px;font-size:12px;letter-spacing:2px;text-transform:uppercase;color:var(--cream-dark)}
.article-meta b{color:var(--gold);font-weight:500}
.article-body{max-width:760px;margin:0 auto;padding:30px 24px 60px}
.article-body p{font-size:16px;color:var(--cream-dim);font-weight:300;line-height:2;margin-bottom:26px}
.article-body h2{font-family:var(--serif);font-size:26px;font-weight:400;color:var(--gold);margin:48px 0 18px;line-height:1.4}
.article-body a{color:var(--gold);border-bottom:1px solid rgba(201,169,110,0.4);transition:var(--transition)}
.article-body a:hover{border-bottom-color:var(--gold)}
.blog-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:40px;padding:60px 0 80px}
.blog-card{border:1px solid rgba(201,169,110,0.12);background:rgba(201,169,110,0.02);transition:var(--transition);display:flex;flex-direction:column}
.blog-card:hover{border-color:rgba(201,169,110,0.35);transform:translateY(-4px)}
.blog-card-img{aspect-ratio:16/9;overflow:hidden}
.blog-card-img img{width:100%;height:100%;object-fit:cover;transition:transform 1.2s var(--luxury-ease)}
.blog-card:hover .blog-card-img img{transform:scale(1.05)}
.blog-card-body{padding:28px;display:flex;flex-direction:column;flex:1}
.blog-card-body .date{font-size:10px;letter-spacing:2px;text-transform:uppercase;color:var(--gold);margin-bottom:12px}
.blog-card-body h2{font-family:var(--serif);font-size:21px;font-weight:400;color:var(--cream);line-height:1.45;margin-bottom:14px}
.blog-card-body p{font-size:14px;color:var(--cream-dark);font-weight:300;line-height:1.85;flex:1}
.blog-card-body .read-more{margin-top:20px;font-size:11px;letter-spacing:2px;text-transform:uppercase;color:var(--gold)}
.cta-banner{padding:80px 0;background:var(--emerald-mid);text-align:center;border-top:1px solid rgba(201,169,110,0.08);border-bottom:1px solid rgba(201,169,110,0.08)}
.cta-banner h2{font-family:var(--serif);font-size:clamp(24px,3vw,36px);font-weight:400;margin-bottom:16px;color:var(--cream)}
.cta-banner p{font-size:15px;color:var(--cream-dark);margin-bottom:32px;font-weight:300}
.btn{display:inline-flex;align-items:center;gap:8px;padding:14px 32px;font-size:12px;letter-spacing:2.5px;text-transform:uppercase;font-weight:500;transition:var(--transition);cursor:pointer;border:none;font-family:var(--sans);position:relative;overflow:hidden;margin:0 8px}
.btn-gold{background:linear-gradient(135deg,var(--gold-dark),var(--gold),var(--gold-light));color:var(--emerald-deep);font-weight:600}
.btn-gold:hover{box-shadow:0 8px 32px rgba(201,169,110,0.3)}
.btn-outline{background:transparent;color:var(--cream);border:1px solid rgba(201,169,110,0.4)}
.btn-outline:hover{border-color:var(--gold);color:var(--gold)}
.footer{background:var(--emerald-deep);border-top:1px solid rgba(201,169,110,0.08);padding:40px 0}
.footer-inner{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:16px}
.footer p{font-size:13px;color:var(--cream-dark)}
.whatsapp-float{position:fixed;bottom:28px;right:28px;z-index:900;width:56px;height:56px;background:#25D366;border-radius:50%;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 24px rgba(37,211,102,0.35);transition:var(--transition);cursor:pointer}
.whatsapp-float:hover{transform:scale(1.08)}
.whatsapp-float svg{width:28px;height:28px;fill:white}
.mobile-cta{display:none;position:fixed;bottom:0;left:0;right:0;z-index:950;grid-template-columns:1fr 1fr;box-shadow:0 -4px 20px rgba(0,0,0,0.45)}
.mobile-cta a{display:flex;align-items:center;justify-content:center;gap:8px;padding:15px 10px;font-size:11px;letter-spacing:2px;text-transform:uppercase;font-weight:600}
.mobile-cta-wa{background:#25D366;color:#fff}
.mobile-cta-wa svg{width:16px;height:16px;fill:#fff;flex-shrink:0}
.mobile-cta-enq{background:linear-gradient(135deg,var(--gold-dark),var(--gold));color:var(--emerald-deep)}
.reveal{opacity:0;transform:translateY(40px);transition:opacity 1s var(--luxury-ease),transform 1s var(--luxury-ease)}
.reveal.visible{opacity:1;transform:translateY(0)}
@media(max-width:900px){.blog-grid{grid-template-columns:1fr}}
@media(max-width:768px){
.nav-links{display:none}.nav-hamburger{display:flex}.nav-lang-mobile{display:block}
.mobile-cta{display:grid}.whatsapp-float{display:none}body{padding-bottom:52px}
.page-hero{padding:140px 0 50px}
.article-body p{font-size:15px}
}
@media(prefers-reduced-motion:reduce){*,*::before,*::after{animation-duration:0.01ms !important;transition-duration:0.01ms !important}}
[dir="rtl"] .nav-links{flex-direction:row-reverse}
[dir="rtl"] .article-body,[dir="rtl"] .page-hero-desc{direction:rtl}
[dir="rtl"] .whatsapp-float{right:auto;left:28px}
`;

const STAR_SVG = `<svg class="sep-star" viewBox="0 0 80 80" width="60" height="60" fill="none" stroke="#C9A96E" stroke-width="1.5" aria-hidden="true">
<rect class="dr dr1" x="22" y="22" width="36" height="36" pathLength="100"/>
<rect class="dr dr2" x="22" y="22" width="36" height="36" transform="rotate(45 40 40)" pathLength="100"/>
<circle class="dr dr3" cx="40" cy="40" r="5" pathLength="100" fill="rgba(201,169,110,0.25)"/>
</svg>`;

// labels per language
const L = {
  en: {
    dir: 'ltr', lang: 'en',
    home: 'Home', blog: 'Blog', contact: 'Contact', products: 'Products',
    cats: [['gents-shawls.html','Gents Shawls'],['ladies-shawls.html','Ladies Shawls'],['keffiyehs.html','Keffiyehs'],['yemeni-scarves.html','Yemeni Scarves'],['prayer-rugs.html','Prayer Rugs'],['sarongs.html','Sarongs']],
    blogLabel: 'The Journal', blogTitle: 'Insights from the <span class="gold-text">Loom</span>',
    blogDesc: 'Practical guides for wholesale textile buyers — sourcing, quality, terminology, and trade know-how from five decades in the textile trade in Mumbai.',
    readMore: 'Read Article', langBtn: 'العربية',
    ctaH: 'Ready to Place a Bulk Order?', ctaP: 'Minimum order: 5,000 pieces. Contact us for samples, pricing, and delivery timelines.',
    ctaWa: 'WhatsApp Us', ctaEnq: 'Send Enquiry', madeIn: 'Made in India', faq: 'FAQ',
    waText: encodeURIComponent('Hello, I’m interested in your products'),
    byline: 'Yasmeen Silk Corporation',
  },
  ar: {
    dir: 'rtl', lang: 'ar',
    home: 'الرئيسية', blog: 'المدونة', contact: 'اتصل بنا', products: 'منتجاتنا',
    cats: [['gents-shawls.html','شالات رجالية'],['ladies-shawls.html','شالات نسائية'],['keffiyehs.html','شماغات'],['yemeni-scarves.html','شيلان'],['prayer-rugs.html','سجاد صلاة'],['sarongs.html','معاوز']],
    blogLabel: 'المدونة', blogTitle: 'رؤى من <span class="gold-text">النول</span>',
    blogDesc: 'أدلة عملية لمشتري الأقمشة بالجملة — التوريد والجودة والمصطلحات وخبرة خمسة عقود في تجارة الأقمشة في مومباي.',
    readMore: 'اقرأ المقال', langBtn: 'English',
    ctaH: 'مستعد لتقديم طلب بالجملة؟', ctaP: 'الحد الأدنى للطلب: ٥٠٠٠ قطعة. تواصل معنا للعينات والأسعار ومواعيد التسليم.',
    ctaWa: 'تواصل واتساب', ctaEnq: 'أرسل استفساراً', madeIn: 'صنع في الهند', faq: 'الأسئلة الشائعة',
    waText: encodeURIComponent('Hello, I’m interested in your products'),
    byline: 'شركة ياسمين للحرير',
  },
};

// page shell. opts: {lang, depth(asset prefix), sitePrefix(to reach lang-root pages), head, body, langHref}
function shell(o) {
  const t = L[o.lang];
  const a = o.assetPrefix;   // to images/
  const s = o.sitePrefix;    // to the language's site pages (index.html etc.)
  const catLinks = t.cats.map(([h, n]) => `    <a href="${s}${h}">${n}</a>`).join('\n');
  return `<!DOCTYPE html>
<html lang="${t.lang}" dir="${t.dir}">
<head>
<script async src="https://www.googletagmanager.com/gtag/js?id=G-FQVY30TZNH"></script>
<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-FQVY30TZNH');</script>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
${o.head}
<link rel="icon" type="image/svg+xml" href="${a}images/favicon.svg">
<link rel="apple-touch-icon" href="${a}images/logo_final-removebg-preview.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600&family=Amiri:wght@400;700&display=swap" rel="stylesheet">
<style>${BASE_CSS}</style>
</head>
<body>

<nav class="nav" id="nav">
<div class="container nav-inner">
  <a href="${s}index.html" class="nav-logo"><img src="${a}images/yasmeen logo.png" alt="Yasmeen Silk Corporation"></a>
  <div class="nav-links">
    <a href="${s}index.html">${t.home}</a>
    <div class="nav-drop"><button class="nav-drop-btn">${t.products}</button><div class="nav-drop-menu">
${catLinks}
    </div></div>
    <a href="${o.blogHref}" class="active">${t.blog}</a>
    <a href="${s}index.html#contact">${t.contact}</a>
    <button class="nav-lang" onclick="location.href='${o.langHref}'">${t.langBtn}</button>
  </div>
  <button class="nav-lang nav-lang-mobile" onclick="location.href='${o.langHref}'">${t.langBtn}</button>
  <button class="nav-hamburger" onclick="document.getElementById('mobileMenu').classList.toggle('open')"><span></span><span></span><span></span></button>
</div>
</nav>

<div class="mobile-menu" id="mobileMenu">
<button class="mobile-close" onclick="document.getElementById('mobileMenu').classList.remove('open')">&times;</button>
<a href="${s}index.html">${t.home}</a>
${t.cats.map(([h, n]) => `<a href="${s}${h}">${n}</a>`).join('\n')}
<a href="${o.blogHref}">${t.blog}</a>
<a href="${s}index.html#contact">${t.contact}</a>
<button class="nav-lang" onclick="location.href='${o.langHref}'">${t.langBtn}</button>
</div>

${o.body}

<footer class="footer">
<div class="container footer-inner">
  <p>&copy; 2026 Yasmeen Silk Corporation. All rights reserved.</p>
  <div style="display:flex;gap:24px;align-items:center">
    <a href="${s}faq.html" style="font-size:11px;letter-spacing:1.5px;text-transform:uppercase;color:var(--cream-dark)">${t.faq}</a>
    <p style="color:var(--gold);font-size:11px;letter-spacing:1.5px">${t.madeIn}</p>
  </div>
</div>
</footer>

<a href="${WA}?text=${t.waText}" class="whatsapp-float" target="_blank" aria-label="Chat on WhatsApp">${waIcon(28)}</a>

<div class="mobile-cta">
<a href="${WA}?text=${t.waText}" class="mobile-cta-wa" target="_blank">${waIcon(16)}<span>${o.lang === 'ar' ? 'واتساب' : 'WhatsApp'}</span></a>
<a href="${s}index.html#contact" class="mobile-cta-enq"><span>${t.ctaEnq}</span></a>
</div>

<script>
window.addEventListener('scroll',function(){document.getElementById('nav').classList.toggle('scrolled',window.scrollY>60)});
var obs=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target)}})},{threshold:0.12});
document.querySelectorAll('.reveal,.geo-sep').forEach(function(el){obs.observe(el)});
document.addEventListener('click',function(e){
  var a=e.target.closest&&e.target.closest('a[href*="wa.me"]');
  if(a&&typeof gtag==='function'){gtag('event','whatsapp_click',{page_title:document.title,link_label:((a.textContent||'').trim().replace(/\\s+/g,' ').slice(0,90))||'icon_only'});}
});
</script>
</body>
</html>`;
}

function ctaBanner(lang, sitePrefix) {
  const t = L[lang];
  return `<section class="cta-banner reveal">
<div class="container">
  <h2>${t.ctaH}</h2>
  <p>${t.ctaP}</p>
  <a href="${WA}?text=${t.waText}" class="btn btn-gold" target="_blank">${waIcon(16)}<span>${t.ctaWa}</span></a>
  <a href="${sitePrefix}index.html#contact" class="btn btn-outline">${t.ctaEnq}</a>
</div>
</section>`;
}

// ---------------- article pages ----------------
function renderArticle(lang, art) {
  const t = L[lang];
  const c = art[lang];
  const isAr = lang === 'ar';
  const assetPrefix = isAr ? '../../' : '../';
  const sitePrefix = '../';
  const enUrl = `https://yasmeensilk.com/blog/${art.slug}`;
  const arUrl = `https://yasmeensilk.com/ar/blog/${art.slug}`;
  const url = isAr ? arUrl : enUrl;
  const langHref = isAr ? `../../blog/${art.slug}.html` : `../ar/blog/${art.slug}.html`;
  const blogHref = 'index.html' === 'x' ? '' : (isAr ? '../blog.html' : '../blog.html');
  const img = `https://yasmeensilk.com/images/${art.thumb}`;

  const head = `<title>${c.metaTitle}</title>
<meta name="description" content="${c.metaDesc}">
<meta property="og:title" content="${c.metaTitle}">
<meta property="og:description" content="${c.metaDesc}">
<meta property="og:type" content="article">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${img}">
<meta property="og:locale" content="${isAr ? 'ar_AR' : 'en_US'}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:image" content="${img}">
<link rel="alternate" hreflang="en" href="${enUrl}">
<link rel="alternate" hreflang="ar" href="${arUrl}">
<link rel="alternate" hreflang="x-default" href="${enUrl}">
<link rel="canonical" href="${url}">
<script type="application/ld+json">
${JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: c.title,
    description: c.metaDesc,
    image: img,
    datePublished: DATE,
    dateModified: DATE,
    inLanguage: lang,
    author: { '@type': 'Organization', name: 'Yasmeen Silk Corporation', url: 'https://yasmeensilk.com' },
    publisher: { '@type': 'Organization', name: 'Yasmeen Silk Corporation', logo: { '@type': 'ImageObject', url: 'https://yasmeensilk.com/images/yasmeen%20logo.png' } },
    mainEntityOfPage: url,
  }, null, 1)}
</script>
<script type="application/ld+json">
${JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: t.home, item: 'https://yasmeensilk.com' + (isAr ? '/ar/' : '/') },
      { '@type': 'ListItem', position: 2, name: t.blog, item: 'https://yasmeensilk.com' + (isAr ? '/ar/blog' : '/blog') },
      { '@type': 'ListItem', position: 3, name: c.title, item: url },
    ],
  }, null, 1)}
</script>`;

  const sectionsHtml = c.sections.map(sec =>
    `<h2>${sec.h}</h2>\n` + sec.ps.map(p => `<p>${p}</p>`).join('\n')
  ).join('\n');

  const body = `<section class="page-hero">
<div class="container">
  <p class="page-hero-label">${t.blogLabel}</p>
  <h1>${c.title}</h1>
  <div class="article-meta"><b>${t.byline}</b><span>·</span><span>${isAr ? DATE_AR : DATE_EN}</span></div>
  <div class="breadcrumb">
    <a href="../index.html">${t.home}</a><span>/</span><a href="../blog.html">${t.blog}</a><span>/</span>
  </div>
</div>
</section>

<div class="geo-sep">${STAR_SVG}</div>

<article class="article-body">
<p>${c.intro}</p>
${sectionsHtml}
<p>${c.conclusion}</p>
</article>

${ctaBanner(lang, sitePrefix)}`;

  return shell({ lang, assetPrefix, sitePrefix, head, body, langHref, blogHref });
}

// ---------------- blog index pages ----------------
function renderBlogIndex(lang) {
  const t = L[lang];
  const isAr = lang === 'ar';
  const assetPrefix = isAr ? '../' : '';
  const sitePrefix = '';
  const enUrl = 'https://yasmeensilk.com/blog';
  const arUrl = 'https://yasmeensilk.com/ar/blog';
  const url = isAr ? arUrl : enUrl;
  const langHref = isAr ? '../blog.html' : 'ar/blog.html';
  const metaTitle = isAr ? 'المدونة | ياسمين للحرير — أدلة لمشتري الأقمشة بالجملة' : 'Blog | Yasmeen Silk — Guides for Wholesale Textile Buyers';
  const metaDesc = isAr
    ? 'أدلة عملية لتجار الجملة: اختيار مورد الشماغ، الحد الأدنى للطلب، فحص العينات، أنواع الشالات وأكثر — من شركة ياسمين للحرير، مومباي.'
    : 'Practical guides for wholesale buyers: choosing a keffiyeh supplier, MOQ explained, checking samples, shawl types and more — from Yasmeen Silk Corporation, Mumbai.';

  const head = `<title>${metaTitle}</title>
<meta name="description" content="${metaDesc}">
<meta property="og:title" content="${metaTitle}">
<meta property="og:description" content="${metaDesc}">
<meta property="og:type" content="website">
<meta property="og:url" content="${url}">
<meta property="og:image" content="https://yasmeensilk.com/images/og-image.jpg">
<meta name="twitter:card" content="summary_large_image">
<link rel="alternate" hreflang="en" href="${enUrl}">
<link rel="alternate" hreflang="ar" href="${arUrl}">
<link rel="alternate" hreflang="x-default" href="${enUrl}">
<link rel="canonical" href="${url}">
<script type="application/ld+json">
${JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: metaTitle,
    description: metaDesc,
    url,
    inLanguage: lang,
    publisher: { '@type': 'Organization', name: 'Yasmeen Silk Corporation' },
  }, null, 1)}
</script>`;

  const cards = ARTICLES.map((art, i) => {
    const c = art[lang];
    return `    <a href="blog/${art.slug}.html" class="blog-card reveal">
      <div class="blog-card-img"><img src="${assetPrefix}images/${art.thumb}" alt="${c.title}" loading="lazy"></div>
      <div class="blog-card-body">
        <p class="date">${isAr ? DATE_AR : DATE_EN}</p>
        <h2>${c.title}</h2>
        <p>${c.excerpt}</p>
        <span class="read-more">${t.readMore} ${isAr ? '←' : '→'}</span>
      </div>
    </a>`;
  }).join('\n');

  const body = `<section class="page-hero">
<div class="container">
  <p class="page-hero-label">${t.blogLabel}</p>
  <h1>${t.blogTitle}</h1>
  <p class="page-hero-desc">${t.blogDesc}</p>
  <div class="breadcrumb"><a href="index.html">${t.home}</a><span>/</span><span>${t.blog}</span></div>
</div>
</section>

<div class="geo-sep">${STAR_SVG}</div>

<section><div class="container">
  <div class="blog-grid">
${cards}
  </div>
</div></section>

${ctaBanner(lang, sitePrefix)}`;

  return shell({ lang, assetPrefix, sitePrefix, head, body, langHref, blogHref: 'blog.html' });
}

// ---------------- write everything ----------------
for (const d of ['blog', path.join('ar', 'blog')]) {
  const p = path.join(ROOT, d);
  if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true });
}

fs.writeFileSync(path.join(ROOT, 'blog.html'), renderBlogIndex('en'));
fs.writeFileSync(path.join(ROOT, 'ar', 'blog.html'), renderBlogIndex('ar'));
console.log('blog.html + ar/blog.html written');

for (const art of ARTICLES) {
  fs.writeFileSync(path.join(ROOT, 'blog', art.slug + '.html'), renderArticle('en', art));
  fs.writeFileSync(path.join(ROOT, 'ar', 'blog', art.slug + '.html'), renderArticle('ar', art));
  console.log('blog/' + art.slug + ' (en+ar) written');
}

// ---------------- sitemap ----------------
const smPath = path.join(ROOT, 'sitemap.xml');
let sm = fs.readFileSync(smPath, 'utf8');
const urls = ['https://yasmeensilk.com/blog', 'https://yasmeensilk.com/ar/blog']
  .concat(ARTICLES.flatMap(a => [`https://yasmeensilk.com/blog/${a.slug}`, `https://yasmeensilk.com/ar/blog/${a.slug}`]));
const missing = urls.filter(u => !sm.includes('<loc>' + u + '</loc>'));
if (missing.length) {
  const entries = missing.map(u => `  <url>
    <loc>${u}</loc>
    <lastmod>${DATE}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`).join('\n');
  sm = sm.replace('</urlset>', entries + '\n</urlset>');
  fs.writeFileSync(smPath, sm);
  console.log('sitemap.xml: ' + missing.length + ' blog URLs added');
} else {
  console.log('sitemap.xml: up to date');
}
