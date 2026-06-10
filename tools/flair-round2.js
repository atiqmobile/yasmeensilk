// Round 2:
// A. Fix "Products" dropdown button font + vertical alignment (EN + AR)
// B. Arch trace reveal on product images
// C. Animated weave lines in homepage hero
// D. Golden thread underline beneath stats
const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '..');

const OLD_BTN = '.nav-drop-btn{display:inline-flex;align-items:center;gap:6px;font-size:10px;letter-spacing:1.2px;text-transform:uppercase;color:var(--cream-dim);background:none;border:none;cursor:pointer;font-family:var(--sans);padding:0;transition:var(--transition);white-space:nowrap}';
const NEW_BTN = '.nav-drop-btn{display:inline-flex;align-items:center;gap:6px;font-family:inherit;font-size:10px;font-weight:400;line-height:inherit;letter-spacing:1.2px;text-transform:uppercase;color:var(--cream-dim);background:none;border:none;cursor:pointer;padding:0;margin:0;transition:var(--transition);white-space:nowrap}';

const FLAIR2_CSS = `
/* ===== FLAIR2: arch trace, hero weave, stat underline ===== */
.arch-frame.trace-init img{opacity:0;transition:opacity .9s ease .75s}
.arch-frame.traced img{opacity:1}
.arch-trace{position:absolute;inset:0;width:100%;height:100%;z-index:2;pointer-events:none}
.arch-trace path{stroke:rgba(201,169,110,0.55);stroke-width:1.2;fill:none;stroke-dasharray:100;stroke-dashoffset:100;vector-effect:non-scaling-stroke}
.arch-frame.traced .arch-trace path{stroke-dashoffset:0;transition:stroke-dashoffset 1.5s cubic-bezier(0.16,1,0.3,1)}
.hero-weave{position:absolute;inset:0;width:100%;height:100%;pointer-events:none;opacity:0.1;z-index:1}
.hero-weave line{stroke:#C9A96E;stroke-width:1;stroke-dasharray:100;stroke-dashoffset:100;animation:weaveDraw 2.8s cubic-bezier(0.16,1,0.3,1) forwards}
@keyframes weaveDraw{to{stroke-dashoffset:0}}
.stat{position:relative;padding-bottom:16px}
.stat::after{content:'';position:absolute;bottom:0;left:22%;right:22%;height:1px;background:linear-gradient(90deg,transparent,var(--gold),transparent);transform:scaleX(0);transition:transform 1.3s cubic-bezier(0.16,1,0.3,1) .5s}
.about-stats.visible .stat::after{transform:scaleX(1)}
@media(prefers-reduced-motion:reduce){.arch-frame.trace-init img{opacity:1}.hero-weave{display:none}.arch-trace{display:none}}
`;

const FLAIR2_JS = `
<script>
/* Arch trace reveal */
(function(){
  var frames=document.querySelectorAll('.arch-frame');
  if(!frames.length)return;
  var d='M0 16 L2 10.6 L5 6.6 L10 3.3 L18 1 L30 0.2 L50 0 L70 0.2 L82 1 L90 3.3 L95 6.6 L98 10.6 L100 16 L100 133 L0 133 Z';
  var ns='http://www.w3.org/2000/svg';
  frames.forEach(function(f){
    var svg=document.createElementNS(ns,'svg');
    svg.setAttribute('class','arch-trace');svg.setAttribute('viewBox','0 0 100 133');svg.setAttribute('preserveAspectRatio','none');
    var p=document.createElementNS(ns,'path');
    p.setAttribute('d',d);p.setAttribute('pathLength','100');
    svg.appendChild(p);f.appendChild(svg);f.classList.add('trace-init');
  });
  var o=new IntersectionObserver(function(es){es.forEach(function(e){
    if(e.isIntersecting){var f=e.target;f.classList.add('traced');setTimeout(function(){f.classList.remove('trace-init')},2600);o.unobserve(f);}
  });},{threshold:0.25});
  frames.forEach(function(f){o.observe(f)});
})();
/* Hero weave */
(function(){
  var hero=document.querySelector('.hero');
  if(!hero)return;
  var ns='http://www.w3.org/2000/svg';
  var svg=document.createElementNS(ns,'svg');
  svg.setAttribute('class','hero-weave');svg.setAttribute('viewBox','0 0 1440 800');svg.setAttribute('preserveAspectRatio','xMidYMid slice');
  var i,l;
  for(i=1;i<=7;i++){l=document.createElementNS(ns,'line');l.setAttribute('x1',0);l.setAttribute('x2',1440);l.setAttribute('y1',i*100);l.setAttribute('y2',i*100);l.setAttribute('pathLength','100');l.style.animationDelay=(i*0.18)+'s';svg.appendChild(l);}
  for(i=1;i<=13;i++){l=document.createElementNS(ns,'line');l.setAttribute('y1',0);l.setAttribute('y2',800);l.setAttribute('x1',i*110);l.setAttribute('x2',i*110);l.setAttribute('pathLength','100');l.style.animationDelay=(0.6+i*0.14)+'s';svg.appendChild(l);}
  var pat=hero.querySelector('.hero-pattern');
  hero.insertBefore(svg,pat?pat.nextSibling:hero.firstChild);
})();
</script>
`;

const ALL = ['index.html','gents-shawls.html','ladies-shawls.html','keffiyehs.html','yemeni-scarves.html','prayer-rugs.html','sarongs.html','faq.html'];
const WITH_VISUALS = ALL.filter(f => f !== 'faq.html');

for (const dir of ['', 'ar']) {
  for (const file of ALL) {
    const p = path.join(ROOT, dir, file);
    let t = fs.readFileSync(p, 'utf8');
    const log = [];

    // A. nav button fix
    if (t.includes(OLD_BTN)) {
      t = t.replace(OLD_BTN, NEW_BTN);
      log.push('btn-fix');
    } else if (!t.includes(NEW_BTN)) {
      log.push('BTN-RULE-NOT-FOUND');
    }

    if (WITH_VISUALS.includes(file)) {
      // B/C/D CSS
      if (!t.includes('FLAIR2')) {
        t = t.replace('</style>', FLAIR2_CSS + '</style>');
        log.push('css');
      }
      // B/C JS
      if (!t.includes('Arch trace reveal')) {
        t = t.replace('</body>', FLAIR2_JS + '</body>');
        log.push('js');
      }
    }

    fs.writeFileSync(p, t);
    console.log((dir ? dir + '/' : '') + file + ': ' + (log.join(', ') || 'no changes'));
  }
}
