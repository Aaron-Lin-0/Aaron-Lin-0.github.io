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
    const base = process.argv[2] || 'http://127.0.0.1:4000';
    await page.goto(base);
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

    const projectUrl = new URL('/projects/rocket-nozzle/', base).href;
    async function checkSection(id, anchored = false) {
      await page.waitForFunction(({ id, anchored }) => {
        const lists = [...document.querySelectorAll('[data-project-toc-list]')];
        const current = lists.every(list => {
          const links = list.querySelectorAll('[aria-current="location"]');
          return links.length === 1 && links[0].hash === '#' + id;
        });
        const heading = document.getElementById(id);
        const offset = parseFloat(getComputedStyle(heading).scrollMarginTop);
        return current && (!anchored || Math.abs(heading.getBoundingClientRect().top - offset) < 2);
      }, { id, anchored });
    }
    async function jumpToSection(id) {
      await page.locator('#' + id).evaluate(heading => {
        const offset = parseFloat(getComputedStyle(heading).scrollMarginTop);
        window.scrollTo({ top: window.scrollY + heading.getBoundingClientRect().top - offset + 100, behavior: 'instant' });
      });
      await checkSection(id);
    }
    await page.setViewportSize({ width: 1440, height: 1000 });
    await page.goto(projectUrl + '#analysis');
    await page.evaluate(() => document.fonts.ready);
    await checkSection('analysis', true);
    await jumpToSection('build-and-test');
    await jumpToSection('approach');
    await page.evaluate(() => window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'instant' }));
    await checkSection('build-and-test');
    await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
    await checkSection('objective');

    const desktopContents = page.locator('.project-toc__desktop');
    await desktopContents.locator('a[href="#analysis"]').click();
    await checkSection('analysis', true);
    for (const width of [1024, 390, 1440]) {
      await page.setViewportSize({ width, height: 844 });
      await page.waitForFunction(() => {
        const heading = document.querySelector('.engineering-content > h2');
        const nav = document.querySelector('.project-toc__desktop');
        const toc = document.querySelector('.project-toc');
        const offset = document.querySelector('.masthead').getBoundingClientRect().height + 16 + (nav.offsetHeight ? toc.offsetHeight + 8 : 0);
        return Math.abs(parseFloat(getComputedStyle(heading).scrollMarginTop) - offset) < 1;
      });
      await jumpToSection('analysis');
    }
    await desktopContents.locator('a[href="#approach"]').click();
    await checkSection('approach', true);
    await desktopContents.locator('a[href="#analysis"]').click();
    await checkSection('analysis', true);
    await page.goBack();
    await checkSection('approach', true);
    await page.goForward();
    await checkSection('analysis', true);
    await page.goto(new URL('/projects/', base).href);
    await page.goBack();
    await checkSection('analysis', true);

    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(new URL('/projects/', base).href);
    await page.goto(projectUrl + '#analysis');
    await checkSection('analysis', true);
    const disclosure = page.locator('.project-toc__mobile');
    const summary = disclosure.locator('summary');
    await summary.focus();
    await summary.press('Enter');
    assert.equal(await disclosure.getAttribute('open'), '');
    assert.equal(await summary.evaluate(el => getComputedStyle(el, '::after').transitionDuration), '0s');
    assert.notEqual(await summary.evaluate(el => getComputedStyle(el, '::after').content), 'none');
    await disclosure.locator('a[href="#approach"]').press('Enter');
    await checkSection('approach', true);
    assert.equal(await disclosure.getAttribute('open'), null);
    await page.emulateMedia({ reducedMotion: 'no-preference' });
    await summary.click();
    await disclosure.locator('a[href="#analysis"]').click();
    await checkSection('analysis', true);

    const noScript = await browser.newPage({ javaScriptEnabled: false, viewport: { width: 390, height: 844 } });
    await noScript.route('**/*', route => ['image', 'media'].includes(route.request().resourceType()) ? route.abort() : route.continue());
    await noScript.goto(projectUrl);
    assert.equal(await noScript.locator('.engineering-content > h2').count(), 4);
    assert.equal(await noScript.locator('.project-toc').isVisible(), false);
    assert.equal(await noScript.locator('.project-hero__full-size').isVisible(), true);
    assert.equal(await noScript.locator('.project-table-region').getAttribute('tabindex'), '0');
    assert.match(await noScript.locator('.engineering-content').innerText(), /minimum factor of safety/i);
    await noScript.close();
    assert.deepEqual(errors, []);
    console.log('Motion and contents checks passed: menu focus, reduced motion, fragments, large jumps, page bottom, native anchors, resizing, history restoration, disclosure keyboard control, and no-JS/media fallback.');
  } finally {
    await browser.close();
  }
})().catch(error => { console.error(error); process.exitCode = 1; });
