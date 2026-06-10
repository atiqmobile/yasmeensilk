// Aesthetic upgrades:
// 1. Section separators: self-drawing eight-pointed star (SVG stroke animation)
// 2. Golden thread: scroll-progress line down the left edge (homepage)
const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '..');

const STAR_SVG = `<svg class="sep-star" viewBox="0 0 80 80" width="60" height="60" fill="none" stroke="#C9A96E" stroke-width="1.5" aria-hidden="true">
<rect class="dr dr1" x="22" y="22" width="36" height="36" pathLength="100"/>
<rect class="dr dr2" x="22" y="22" width="36" height="36" transform="rotate(45 40 40)" pathLength="100"/>
<circle class="dr dr3" cx="40" cy="40" r="5" pathLength="100" fill="rgba(201,169,110,0.25)"/>
</svg>`;

const FLAIR_CSS = `
/* ===== SVG FLAIR: self-drawing star + golden thread ===== */
.geo-sep .sep-star .dr{stroke-dasharray:100;stroke-dashoffset:100;transition:stroke-dashoffset 1.6s cubic-bezier(0.16,1,0.3,1)}
.geo-sep.visible .sep-star .dr{stroke-dashoffset:0}
.geo-sep .sep-star .dr2{transition-delay:.35s}
.geo-sep .sep-star .dr3{transition-delay:.8s}
.thread-track,.thread-progress{position:fixed;top:0;left:34px;width:1px;height:100vh;pointer-events:none;z-index:500}
.thread-track{background:linear-gradient(to bottom,transparent,rgba(201,169,110,0.14) 12%,rgba(201,169,110,0.14) 88%,transparent)}
.thread-progress{background:var(--gold);transform-origin:top;transform:scaleY(0)}
.thread-gem{position:fixed;left:34px;top:0;width:7px;height:7px;background:var(--gold);transform:translate(-50%,-50%) rotate(45deg);pointer-events:none;z-index:501;box-shadow:0 0 10px rgba(201,169,110,0.7)}
@media(max-width:1100px){.thread-track,.thread-progress,.thread-gem{display:none}}
@media(prefers-reduced-motion:reduce){.thread-track,.thread-progress,.thread-gem{display:none}}
`;

const THREAD_HTML = `\n<!-- GOLDEN THREAD (scroll progress) -->\n<div class="thread-track" aria-hidden="true"></div><div class="thread-progress" id="threadProgress" aria-hidden="true"></div><div class="thread-gem" id="threadGem" aria-hidden="true"></div>\n`;

const FLAIR_JS = `
<script>
/* Golden thread scroll progress */
(function(){
  var tp=document.getElementById('threadProgress'),tg=document.getElementById('threadGem');
  if(!tp)return;
  var ticking=false;
  function update(){
    var max=document.documentElement.scrollHeight-window.innerHeight;
    var p=max>0?Math.min(1,window.scrollY/max):0;
    tp.style.transform='scaleY('+p+')';
    if(tg)tg.style.top=(p*100)+'vh';
    ticking=false;
  }
  window.addEventListener('scroll',function(){if(!ticking){ticking=true;requestAnimationFrame(update);}},{passive:true});
  update();
})();
/* Ensure geo-sep separators animate on all pages */
(function(){
  var seps=document.querySelectorAll('.geo-sep');
  if(!seps.length)return;
  var o=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('visible');o.unobserve(e.target);}});},{threshold:0.3});
  seps.forEach(function(s){o.observe(s);});
})();
</script>
`;

const FILES = ['index.html','gents-shawls.html','ladies-shawls.html','keffiyehs.html','yemeni-scarves.html','prayer-rugs.html','sarongs.html','faq.html'];

for (const file of FILES) {
  const p = path.join(ROOT, file);
  let t = fs.readFileSync(p, 'utf8');
  const log = [];

  // swap static geo-star for self-drawing SVG star in every separator
  if (!t.includes('sep-star')) {
    const before = t;
    t = t.split('<div class="geo-star"><div class="geo-star-inner"></div></div>').join(STAR_SVG);
    if (t !== before) log.push('sep-stars');
  }

  if (!t.includes('SVG FLAIR')) {
    t = t.replace('</style>', FLAIR_CSS + '</style>');
    log.push('css');
  }

  // golden thread on homepage only
  if (file === 'index.html' && !t.includes('threadProgress')) {
    t = t.replace('<body>', '<body>' + THREAD_HTML);
    log.push('thread');
  }

  if (!t.includes('Golden thread scroll progress') && file === 'index.html') {
    t = t.replace('</body>', FLAIR_JS + '</body>');
    log.push('flair-js');
  } else if (!t.includes('geo-sep separators animate') && file !== 'index.html') {
    // non-index pages need only the separator observer
    const sepJs = `\n<script>\n/* geo-sep separators animate */\n(function(){var seps=document.querySelectorAll('.geo-sep');if(!seps.length)return;var o=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('visible');o.unobserve(e.target);}});},{threshold:0.3});seps.forEach(function(s){o.observe(s);});})();\n</script>\n`;
    t = t.replace('</body>', sepJs + '</body>');
    log.push('sep-js');
  }

  fs.writeFileSync(p, t);
  console.log(file + ': ' + (log.join(', ') || 'no changes'));
}
