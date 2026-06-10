const fs = require('fs');
for (const f of ['index.html', 'ar/index.html', 'keffiyehs.html']) {
  const t = fs.readFileSync(f, 'utf8');
  console.log(f, {
    weaveRefsLeft: (t.match(/hero-weave/g) || []).length,
    heroPatternDivLeft: t.includes('<div class="hero-pattern">'),
    premiumScript: t.includes('premium double-line'),
    gradientDef: t.includes('archGold'),
    apexKeystone: t.includes("'apex'"),
  });
}
