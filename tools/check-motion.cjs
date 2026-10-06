// Run against a served site: node tools/check-motion.cjs http://127.0.0.1:4000
// Uses Playwright when available; no test framework or site dependency required.
const assert = require('node:assert/strict');
const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ channel: process.env.BROWSER_CHANNEL || 'msedge', headless: true });
  try {
    const page = await browser.newPage({ viewport: { width: 390, height: 844 }, reducedMotion: 'reduce' });
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    await page.goto(process.argv[2] || 'http://127.0.0.1:4000');
    const button = page.locator('#site-nav > button');
    const menu = page.locator('#site-nav-hidden-links');
    async function checkState(open) {
      assert.equal(await button.getAttribute('aria-expanded'), String(open));
      assert.equal(await menu.isVisible(), open);
      assert.equal(await button.evaluate(el => el.classList.contains('close')), open);
    }
    async function checkFooterSpacing() {
      await page.waitForFunction(() => {
        const footer = document.querySelector('.page__footer');
        const style = getComputedStyle(footer);
        const outerHeight = footer.getBoundingClientRect().height + parseFloat(style.marginTop) + parseFloat(style.marginBottom);
        return Math.abs(parseFloat(getComputedStyle(document.body).marginBottom) - outerHeight) < 1;
      });
    }
    assert.equal(await button.getAttribute('aria-controls'), await menu.getAttribute('id'));
    await checkState(false);
    for (let i = 0; i < 3; i++) {
      await button.click();
      await checkState(true);
      assert.equal(await menu.evaluate(el => getComputedStyle(el).animationName), 'none');
      await menu.locator('a').first().focus();
      await page.keyboard.press('Escape');
      await checkState(false);
      assert.equal(await button.evaluate(el => el === document.activeElement), true);
      await page.keyboard.press('Tab');
      assert.equal(await menu.evaluate(el => el.contains(document.activeElement)), false);
    }
    await button.click();
    await page.setViewportSize({ width: 1440, height: 1000 });
    await button.waitFor({ state: 'hidden' });
    await checkFooterSpacing();
    await checkState(false);
    await page.locator('#site-nav a').last().focus();
    await page.setViewportSize({ width: 390, height: 844 });
    await button.waitFor({ state: 'visible' });
    await checkFooterSpacing();
    await checkState(false);
    assert.equal(await button.evaluate(el => el === document.activeElement), true);
    await button.click();
    await menu.locator('a').first().click();
    await checkState(false);
    assert.deepEqual(errors, []);
    console.log('Motion menu checks passed: toggle, Escape, hidden focus, resize, link activation, reduced motion.');
  } finally {
    await browser.close();
  }
})().catch(error => { console.error(error); process.exitCode = 1; });
