// Site-wide conversion + UI upgrades:
// 1. Homepage product cards: per-product "Enquire on WhatsApp" buttons
// 2. Lightbox: dynamic enquire button (all pages with lightbox)
// 3. GA4 events: whatsapp_click + generate_lead
// 4. Nav: group product links under a "Products" dropdown
// 5. Sticky mobile CTA bar (WhatsApp + Enquire)
// 6. Contact form: Country + Quantity qualifying fields
const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '..');

const WA_PATH = 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z';
const waIcon = (s) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="currentColor"><path d="${WA_PATH}"/></svg>`;

const SHARED_CSS = `
/* ===== ENHANCEMENTS: dropdown, mobile CTA, enquire buttons ===== */
.nav-drop{position:relative}
.nav-drop-btn{display:inline-flex;align-items:center;gap:6px;font-size:10px;letter-spacing:1.2px;text-transform:uppercase;color:var(--cream-dim);background:none;border:none;cursor:pointer;font-family:var(--sans);padding:0;transition:var(--transition);white-space:nowrap}
.nav-drop-btn::after{content:'\\25BE';font-size:9px;color:var(--gold);transition:var(--transition)}
.nav-drop:hover .nav-drop-btn,.nav-drop-btn.active{color:var(--gold)}
.nav-drop:hover .nav-drop-btn::after{transform:translateY(2px)}
.nav-drop-menu{position:absolute;top:calc(100% + 16px);left:50%;transform:translateX(-50%) translateY(8px);background:rgba(7,20,16,0.97);backdrop-filter:blur(20px);border:1px solid rgba(201,169,110,0.25);min-width:220px;padding:10px 0;opacity:0;visibility:hidden;transition:opacity .3s ease,transform .3s ease,visibility .3s;z-index:1001}
.nav-drop-menu::before{content:'';position:absolute;top:-16px;left:0;right:0;height:16px}
.nav-drop:hover .nav-drop-menu,.nav-drop:focus-within .nav-drop-menu{opacity:1;visibility:visible;transform:translateX(-50%) translateY(0)}
.nav-drop-menu a{display:block;padding:11px 24px;font-size:10px;letter-spacing:1.5px;text-transform:uppercase;color:var(--cream-dim);transition:var(--transition)}
.nav-drop-menu a::after{display:none}
.nav-drop-menu a:hover{background:rgba(201,169,110,0.08);color:var(--gold)}
.nav-drop-menu a.active{color:var(--gold)}
.card-enquire{display:inline-flex;align-items:center;gap:7px;margin-top:12px;padding:9px 20px;font-size:10px;letter-spacing:1.5px;text-transform:uppercase;color:var(--gold);border:1px solid rgba(201,169,110,0.35);transition:var(--transition)}
.card-enquire:hover{background:var(--gold);color:var(--emerald-deep);border-color:var(--gold)}
.card-enquire svg{width:13px;height:13px;fill:currentColor;flex-shrink:0}
.lightbox-enquire{position:absolute;bottom:28px;left:50%;transform:translateX(-50%);z-index:2002;display:inline-flex;align-items:center;gap:8px;padding:13px 30px;background:linear-gradient(135deg,var(--gold-dark),var(--gold));color:var(--emerald-deep);font-size:11px;letter-spacing:2px;text-transform:uppercase;font-weight:600;white-space:nowrap}
.lightbox-enquire svg{width:15px;height:15px;fill:currentColor}
.mobile-cta{display:none;position:fixed;bottom:0;left:0;right:0;z-index:950;grid-template-columns:1fr 1fr;box-shadow:0 -4px 20px rgba(0,0,0,0.45)}
.mobile-cta a{display:flex;align-items:center;justify-content:center;gap:8px;padding:15px 10px;font-size:11px;letter-spacing:2px;text-transform:uppercase;font-weight:600}
.mobile-cta-wa{background:#25D366;color:#fff}
.mobile-cta-wa svg{width:16px;height:16px;fill:#fff;flex-shrink:0}
.mobile-cta-enq{background:linear-gradient(135deg,var(--gold-dark),var(--gold));color:var(--emerald-deep)}
.form-group select{width:100%;background:rgba(201,169,110,0.03);border:1px solid rgba(201,169,110,0.12);color:var(--cream);padding:14px 16px;font-size:15px;font-family:var(--sans);transition:var(--transition);outline:none;appearance:none;-webkit-appearance:none;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6'%3E%3Cpath d='M0 0l5 6 5-6z' fill='%23C9A96E'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 16px center}
.form-group select:focus{border-color:var(--gold)}
.form-group select option{background:#0C1F17;color:#F5F0E8}
@media(max-width:768px){.mobile-cta{display:grid}.whatsapp-float{display:none}body{padding-bottom:52px}}
`;

const SHARED_JS = `
<script>
/* Lightbox enquire button: updates with current product */
(function(){
  var img=document.getElementById('lightboxImg'),enq=document.getElementById('lightboxEnquire');
  if(!img||!enq||typeof allImages==='undefined')return;
  var hs=document.querySelectorAll('.product-card h3');
  var names=Array.prototype.map.call(hs,function(h){return h.getAttribute('data-en')||h.textContent.trim()});
  function update(){
    var src=img.getAttribute('src')||'';var i=-1;
    for(var k=0;k<allImages.length;k++){if(src.indexOf(allImages[k])>-1){i=k;break}}
    var n=(i>-1&&names[i])?names[i].replace(/&amp;/g,'&'):'your products';
    enq.href='https://wa.me/919967810489?text='+encodeURIComponent("Hello, I'm interested in the "+n+". Please share pricing and MOQ.");
  }
  new MutationObserver(update).observe(img,{attributes:true,attributeFilter:['src']});
  update();
})();
/* GA4 conversion events */
document.addEventListener('click',function(e){
  var a=e.target.closest&&e.target.closest('a[href*="wa.me"]');
  if(a&&typeof gtag==='function'){
    gtag('event','whatsapp_click',{page_title:document.title,link_label:((a.textContent||'').trim().replace(/\\s+/g,' ').slice(0,90))||'icon_only'});
  }
});
(function(){
  var cf=document.getElementById('contactForm');
  if(cf){cf.addEventListener('submit',function(){if(typeof gtag==='function')gtag('event','generate_lead',{form_id:'contact'});});}
})();
</script>
`;

const PRODUCT_LINKS = ['gents-shawls.html','ladies-shawls.html','keffiyehs.html','yemeni-scarves.html','prayer-rugs.html','sarongs.html'];
const FILES = ['index.html','gents-shawls.html','ladies-shawls.html','keffiyehs.html','yemeni-scarves.html','prayer-rugs.html','sarongs.html','faq.html'];

for (const file of FILES) {
  const p = path.join(ROOT, file);
  let t = fs.readFileSync(p, 'utf8');
  const log = [];

  // ---- 1. shared CSS ----
  if (!t.includes('ENHANCEMENTS: dropdown')) {
    t = t.replace('</style>', SHARED_CSS + '</style>');
    log.push('css');
  }

  // ---- 2. nav dropdown (desktop nav only) ----
  if (!t.includes('class="nav-drop"')) {
    const navStart = t.indexOf('<div class="nav-links">');
    if (navStart > -1) {
      const navEnd = t.indexOf('</div>', navStart);
      let nav = t.slice(navStart, navEnd);
      const first = nav.indexOf('<a href="gents-shawls.html"');
      const sarIdx = nav.indexOf('<a href="sarongs.html"');
      const last = nav.indexOf('</a>', sarIdx) + 4;
      if (first > -1 && sarIdx > -1) {
        const links = nav.slice(first, last);
        const isProductPage = PRODUCT_LINKS.includes(file);
        const btnCls = isProductPage ? 'nav-drop-btn active' : 'nav-drop-btn';
        const wrapped = `<div class="nav-drop"><button class="${btnCls}" data-en="Products" data-ar="منتجاتنا">Products</button><div class="nav-drop-menu">\n    ${links}\n    </div></div>`;
        nav = nav.slice(0, first) + wrapped + nav.slice(last);
        t = t.slice(0, navStart) + nav + t.slice(navEnd);
        log.push('dropdown');
      } else { log.push('DROPDOWN-SKIP(no links)'); }
    }
  }

  // ---- 3. lightbox enquire anchor ----
  const nextBtn = '<button class="lightbox-nav lightbox-next" onclick="navLightbox(1)">&#8250;</button>';
  if (t.includes(nextBtn) && !t.includes('lightboxEnquire')) {
    const anchor = `\n<a id="lightboxEnquire" class="lightbox-enquire" href="https://wa.me/919967810489" target="_blank">${waIcon(15)}<span data-en="Enquire on WhatsApp" data-ar="استفسر عبر واتساب">Enquire on WhatsApp</span></a>`;
    t = t.replace(nextBtn, nextBtn + anchor);
    log.push('lightbox-enquire');
  }

  // ---- 4. sticky mobile CTA bar ----
  if (!t.includes('class="mobile-cta"')) {
    const waMatch = t.match(/<a href="(https:\/\/wa\.me\/[^"]+)" class="whatsapp-float"/);
    const waHref = waMatch ? waMatch[1] : 'https://wa.me/919967810489';
    const enqHref = file === 'index.html' ? '#contact' : 'index.html#contact';
    const bar = `\n<!-- STICKY MOBILE CTA -->\n<div class="mobile-cta">\n<a href="${waHref}" class="mobile-cta-wa" target="_blank">${waIcon(16)}<span data-en="WhatsApp" data-ar="واتساب">WhatsApp</span></a>\n<a href="${enqHref}" class="mobile-cta-enq"><span data-en="Send Enquiry" data-ar="أرسل استفساراً">Send Enquiry</span></a>\n</div>\n`;
    t = t.replace('</body>', bar + '</body>');
    log.push('mobile-cta');
  }

  // ---- 5. shared JS ----
  if (!t.includes('whatsapp_click')) {
    t = t.replace('</body>', SHARED_JS + '</body>');
    log.push('ga-js');
  }

  // ---- 6. index-only: card enquire buttons + form fields ----
  if (file === 'index.html') {
    if (!t.includes('class="card-enquire"')) {
      let count = 0;
      t = t.replace(/(<div class="product-card-info"><h3 data-en="([^"]*)"[^>]*>[\s\S]*?<\/p>)(<\/div>)/g, (m, body, nameRaw, close) => {
        const name = nameRaw.replace(/&amp;/g, '&').replace(/&#39;/g, "'");
        const href = 'https://wa.me/919967810489?text=' + encodeURIComponent(`Hello, I'm interested in the ${name}. Please share pricing and MOQ.`);
        count++;
        return body + `<a href="${href}" class="card-enquire" target="_blank" onclick="event.stopPropagation()">${waIcon(13)}<span data-en="Enquire" data-ar="استفسر">Enquire</span></a>` + close;
      });
      log.push('card-buttons(' + count + ')');
    }
    if (!t.includes('name="country"')) {
      const msgAnchor = '<div class="form-group">\n        <label data-en="Your Message" data-ar="رسالتك">Your Message</label>';
      const fields = `<div class="form-group">
        <label data-en="Country" data-ar="الدولة">Country</label>
        <input type="text" name="country" placeholder="e.g. Saudi Arabia, Nigeria, UK" required>
      </div>
      <div class="form-group">
        <label data-en="Approx. Quantity" data-ar="الكمية التقريبية">Approx. Quantity</label>
        <select name="quantity">
          <option value="5,000 - 10,000 pieces" data-en="5,000 – 10,000 pieces" data-ar="٥٠٠٠ – ١٠٠٠٠ قطعة">5,000 – 10,000 pieces</option>
          <option value="10,000 - 25,000 pieces" data-en="10,000 – 25,000 pieces" data-ar="١٠٠٠٠ – ٢٥٠٠٠ قطعة">10,000 – 25,000 pieces</option>
          <option value="25,000+ pieces" data-en="25,000+ pieces" data-ar="أكثر من ٢٥٠٠٠ قطعة">25,000+ pieces</option>
          <option value="Retail / smaller" data-en="Retail / smaller quantity" data-ar="تجزئة / كمية أصغر">Retail / smaller quantity</option>
        </select>
      </div>
      ` + msgAnchor;
      if (t.includes(msgAnchor)) { t = t.replace(msgAnchor, fields); log.push('form-fields'); }
      else { log.push('FORM-SKIP(anchor not found)'); }
    }
  }

  fs.writeFileSync(p, t);
  console.log(file + ': ' + log.join(', '));
}
