import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const html = await readFile(new URL('../index.html', import.meta.url), 'utf8');

test('presents the portfolio as a living product system', () => {
  assert.match(html, /class="system-signal"/);
  assert.match(html, /class="signal-path"/);
  assert.match(html, /data-phase="architecture"/);
  assert.match(html, /data-phase="production"/);
});

test('keeps authored motion accessible and progressively enhanced', () => {
  assert.match(html, /@media \(prefers-reduced-motion: reduce\)/);
  assert.match(html, /document\.documentElement\.classList\.add\('is-ready'\)/);
  assert.match(html, /document\.visibilityState/);
  assert.match(html, /aria-hidden="true"/);
});

test('reports experience and gallery progress without changing portfolio claims', () => {
  assert.match(html, /id="experienceProgress"/);
  assert.match(html, /--experience-progress/);
  assert.match(html, /aria-valuenow/);
  assert.match(html, /--gallery-progress/);
  assert.match(html, /12 years building SaaS platforms/);
});

test('lightbox behaves like an accessible dialog', () => {
  assert.match(html, /role="dialog"/);
  assert.match(html, /aria-modal="true"/);
  assert.match(html, /aria-label="Close screenshot viewer"/);
  assert.match(html, /visibility 0s linear 180ms/);
  assert.match(html, /setTimeout\(\(\) => lightbox\.querySelector\('\.lightbox-close'\)\.focus\(\), 50\)/);
  assert.match(html, /lightboxTrigger\.focus\(\)/);
});

test('avoids detector-flagged presentation shortcuts', () => {
  assert.doesNotMatch(html, /Inter|Space Grotesk/);
  assert.doesNotMatch(html, /transition:\s*width/);
  assert.doesNotMatch(html, /<img[^>]+src=""/);
});

test('gives employers a clear scan path and immediate contact action', () => {
  assert.match(html, /class="scan-nav"/);
  assert.match(html, /href="#experience"/);
  assert.match(html, /href="#projects"/);
  assert.match(html, /href="#contact"/);
  assert.match(html, /class="contact-cta"/);
  assert.match(html, /id="experience"/);
  assert.match(html, /id="projects"/);
  assert.match(html, /id="contact"/);
});

test('progressively discloses dense contribution evidence', () => {
  assert.match(html, /function enhanceEvidenceDetails\(\)/);
  assert.match(html, /document\.createElement\('details'\)/);
  assert.match(html, /className = 'evidence-details'/);
  assert.match(html, /Detailed contributions/);
});

test('uses the editorial green visual system for hierarchy', () => {
  assert.match(html, /--paper:\s*#f1f0ea/i);
  assert.match(html, /--forest:\s*#235f45/i);
  assert.match(html, /--sage:\s*#8dcf74/i);
  assert.match(html, /data-theme="editorial"/);
  assert.match(html, /class="col-middle casework-surface"/);
  assert.match(html, /class="col-right project-index"/);
});

test('shows the Chefgood product evidence in its project gallery', () => {
  assert.match(html, /id="chefgoodGallery"/);
  assert.match(html, /chefgood-1-meal-swap\.png/);
  assert.match(html, /chefgood-6-subscription-swap\.png/);
  assert.match(html, /Chefgood subscription swap confirmation/);
});
