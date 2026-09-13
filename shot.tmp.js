const { chromium } = require('playwright');
(async () => {
  const [url, out, sel, wait, hover] = process.argv.slice(2);
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1600, height: 900 }, deviceScaleFactor: 2 });
  await p.goto(url, { waitUntil: 'networkidle' });
  const el = p.locator(sel).first();
  await el.scrollIntoViewIfNeeded();
  await p.waitForTimeout(1200);
  if (hover) { await p.locator(hover).first().hover(); await p.waitForTimeout(900); }
  await p.waitForTimeout(Number(wait) || 1500);
  await el.screenshot({ path: out });
  await b.close();
})();
