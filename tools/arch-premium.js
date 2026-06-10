// 1. Remove hero grids: the animated weave (everywhere) + the static lattice div (.hero-pattern)
// 2. Premium arch trace: double-line frame, gold gradient stroke, thicker, symmetric draw
//    from bottom-centre to apex, keystone diamond fades in at the top.
const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '..');

const NEW_SCRIPT = `<script>
/* Arch trace reveal (premium double-line) */
(function(){
  var frames=document.querySelectorAll('.arch-frame');
  if(!frames.length)return;
  var ns='http://www.w3.org/2000/svg';
  var paths=[
    ['M50 131.8 L1.2 131.8 L1.2 16.5 L3 11.5 L5.8 7.6 L10.8 4.3 L18.5 2 L30.5 1.3 L50 1.1',''],
    ['M50 131.8 L98.8 131.8 L98.8 16.5 L97 11.5 L94.2 7.6 L89.2 4.3 L81.5 2 L69.5 1.3 L50 1.1',''],
    ['M50 128.6 L4.4 128.6 L4.4 18 L6 13.3 L8.6 9.8 L13 6.6 L20 4.5 L31.2 3.8 L50 3.6','inner'],
    ['M50 128.6 L95.6 128.6 L95.6 18 L94 13.3 L91.4 9.8 L87 6.6 L80 4.5 L68.8 3.8 L50 3.6','inner']
  ];
  var first=true;
  frames.forEach(function(f){
    var svg=document.createElementNS(ns,'svg');
    svg.setAttribute('class','arch-trace');svg.setAttribute('viewBox','0 0 100 133');svg.setAttribute('preserveAspectRatio','none');
    if(first){
      svg.innerHTML='<defs><linearGradient id="archGold" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#A6844A"/><stop offset="0.5" stop-color="#C9A96E"/><stop offset="1" stop-color="#DBBF8C"/></linearGradient></defs>';
      first=false;
    }
    paths.forEach(function(pd){
      var p=document.createElementNS(ns,'path');
      p.setAttribute('d',pd[0]);p.setAttribute('pathLength','100');
      if(pd[1])p.setAttribute('class',pd[1]);
      svg.appendChild(p);
    });
    var apex=document.createElementNS(ns,'rect');
    apex.setAttribute('x','47.2');apex.setAttribute('y','4.7');apex.setAttribute('width','5.6');apex.setAttribute('height','5.6');
    apex.setAttribute('transform','rotate(45 50 7.5)');apex.setAttribute('fill','#C9A96E');apex.setAttribute('class','apex');
    svg.appendChild(apex);
    f.appendChild(svg);f.classList.add('trace-init');
  });
  var o=new IntersectionObserver(function(es){es.forEach(function(e){
    if(e.isIntersecting){var f=e.target;f.classList.add('traced');setTimeout(function(){f.classList.remove('trace-init')},2600);o.unobserve(f);}
  });},{threshold:0.25});
  frames.forEach(function(f){o.observe(f)});
})();
</script>`;

// exact old CSS lines (from flair-round2 injection)
const OLD_CSS_TRACE = `.arch-trace{position:absolute;inset:0;width:100%;height:100%;z-index:2;pointer-events:none}
.arch-trace path{stroke:rgba(201,169,110,0.55);stroke-width:1.2;fill:none;stroke-dasharray:100;stroke-dashoffset:100;vector-effect:non-scaling-stroke}
.arch-frame.traced .arch-trace path{stroke-dashoffset:0;transition:stroke-dashoffset 1.5s cubic-bezier(0.16,1,0.3,1)}`;

const NEW_CSS_TRACE = `.arch-trace{position:absolute;inset:0;width:100%;height:100%;z-index:2;pointer-events:none;filter:drop-shadow(0 0 4px rgba(201,169,110,0.35))}
.arch-trace path{stroke:url(#archGold);stroke-width:2.4;fill:none;stroke-dasharray:100;stroke-dashoffset:100;vector-effect:non-scaling-stroke;stroke-linecap:round}
.arch-trace path.inner{stroke-width:1;opacity:0.5}
.arch-trace .apex{opacity:0;transition:opacity .8s ease 1.5s}
.arch-frame.traced .arch-trace .apex{opacity:1}
.arch-frame.traced .arch-trace path{stroke-dashoffset:0;transition:stroke-dashoffset 1.6s cubic-bezier(0.16,1,0.3,1)}
.arch-frame.traced .arch-trace path.inner{transition-delay:.3s}`;

const OLD_CSS_WEAVE = `.hero-weave{position:absolute;inset:0;width:100%;height:100%;pointer-events:none;opacity:0.1;z-index:1}
.hero-weave line{stroke:#C9A96E;stroke-width:1;stroke-dasharray:100;stroke-dashoffset:100;animation:weaveDraw 2.8s cubic-bezier(0.16,1,0.3,1) forwards}
@keyframes weaveDraw{to{stroke-dashoffset:0}}
`;

const OLD_RM = '@media(prefers-reduced-motion:reduce){.arch-frame.trace-init img{opacity:1}.hero-weave{display:none}.arch-trace{display:none}}';
const NEW_RM = '@media(prefers-reduced-motion:reduce){.arch-frame.trace-init img{opacity:1}.arch-trace{display:none}}';

const FILES = ['index.html','gents-shawls.html','ladies-shawls.html','keffiyehs.html','yemeni-scarves.html','prayer-rugs.html','sarongs.html'];

for (const dir of ['', 'ar']) {
  for (const file of FILES) {
    const p = path.join(ROOT, dir, file);
    let t = fs.readFileSync(p, 'utf8');
    const log = [];

    // replace the whole FLAIR2 script block (arch + weave) with the new arch-only script
    const marker = t.indexOf('/* Arch trace reveal */');
    if (marker > -1) {
      const start = t.lastIndexOf('<script>', marker);
      const end = t.indexOf('</script>', marker) + '</script>'.length;
      t = t.slice(0, start) + NEW_SCRIPT + t.slice(end);
      log.push('script');
    } else if (!t.includes('premium double-line')) {
      log.push('SCRIPT-MARKER-MISSING');
    }

    // CSS swaps
    if (t.includes(OLD_CSS_TRACE)) { t = t.replace(OLD_CSS_TRACE, NEW_CSS_TRACE); log.push('trace-css'); }
    if (t.includes(OLD_CSS_WEAVE)) { t = t.replace(OLD_CSS_WEAVE, ''); log.push('weave-css-removed'); }
    if (t.includes(OLD_RM)) { t = t.replace(OLD_RM, NEW_RM); log.push('rm-css'); }

    // remove the static lattice overlay div on homepages
    if (file === 'index.html' && t.includes('<div class="hero-pattern"></div>')) {
      t = t.replace('<div class="hero-pattern"></div>\n', '').replace('<div class="hero-pattern"></div>', '');
      log.push('hero-pattern-removed');
    }

    fs.writeFileSync(p, t);
    console.log((dir ? dir + '/' : '') + file + ': ' + (log.join(', ') || 'no changes'));
  }
}
