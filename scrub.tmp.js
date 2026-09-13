const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1600, height: 900 } });
  await p.goto('http://localhost:4321/about/', { waitUntil: 'networkidle' });
  const box = await p.evaluate(() => {
    const e = document.querySelector('.st-process-sticky');
    return { top: e.getBoundingClientRect().top + window.scrollY, h: e.offsetHeight };
  });
  // sample the pinned card row at four points through its 300vh travel
  for (const f of [0.05, 0.3, 0.55, 0.85]) {
    await p.evaluate(y => window.scrollTo(0, y), box.top - 200 + box.h * f);
    await p.waitForTimeout(1400);
    const ys = await p.$$eval('.st-process-card', els =>
      els.map(e => getComputedStyle(e).transform.match(/[-\d.]+\)$/) ? Math.round(+getComputedStyle(e).transform.split(',')[5].replace(')','')) : 0));
    console.log('progress~' + f, 'card offsets:', ys.join(', '));
  }
  await b.close();
})();
