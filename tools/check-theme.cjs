// Run from the repository root: node tools/check-theme.cjs
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const source = fs.readFileSync('assets/js/_main.js', 'utf8');
const startup = fs.readFileSync('_includes/head.html', 'utf8').match(/<script>([\s\S]*?)<\/script>/)[1];

for (const failure of ['none', 'read', 'write']) {
  for (const initial of [null, 'light', 'dark']) {
    for (const dark of [false, true]) {
      let stored = initial, ready, systemChange, click, tocQueries = 0;
      const html = {}, button = {};
      const document = {
        documentElement: { setAttribute: (key, value) => { html[key] = value; } },
        querySelector: selector => { if (selector === '[data-project-toc]') tocQueries++; return null; }
      };
      const context = vm.createContext({
        document,
        window: { matchMedia: () => ({ matches: dark, addEventListener: (_, fn) => { systemChange = fn; } }) },
        localStorage: {
          getItem() { if (failure === 'read') throw new Error('Blocked'); return stored; },
          setItem(_, value) { if (failure !== 'none') throw new Error('Blocked'); stored = value; }
        },
        ResizeObserver: class { observe() {} },
        $: selector => ({
          ready(fn) { ready = fn; },
          attr(key, value) {
            const target = selector === 'html' ? html : button;
            if (typeof key === 'object') return Object.assign(target, key);
            if (value === undefined) return target[key];
            target[key] = value;
          },
          removeAttr(key) { delete html[key]; },
          on(_, fn) { if (selector === '#theme-toggle') click = fn; },
          css() {}, outerHeight() { return 0; }
        })
      });
      const effective = failure === 'read' ? null : initial;
      const initialDark = effective ? effective === 'dark' : dark;
      vm.runInContext(startup, context);
      assert.equal(html['data-theme'] === 'dark', initialDark);
      vm.runInContext(source, context);
      ready();
      assert.equal(tocQueries, 1, 'Storage failures must not skip project navigation setup');
      assert.equal(button['aria-pressed'], initialDark);
      systemChange({ matches: !dark });
      const followedDark = effective ? initialDark : !dark;
      assert.equal(html['data-theme'] === 'dark', followedDark);
      click();
      assert.equal(html['data-theme'] === 'dark', !followedDark);
      assert.equal(button['aria-pressed'], !followedDark);
      systemChange({ matches: followedDark });
      assert.equal(html['data-theme'] === 'dark', !followedDark, 'Manual choice must survive OS changes');
      if (failure === 'none') assert.equal(stored, followedDark ? 'light' : 'dark');
      click();
      assert.equal(html['data-theme'] === 'dark', followedDark);
    }
  }
}
console.log('Theme checks passed: startup, blocked reads/writes, toggles, OS changes, persistence, and initialization.');
