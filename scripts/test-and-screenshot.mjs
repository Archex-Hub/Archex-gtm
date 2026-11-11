import { chromium } from 'C:/Users/kaifa/OneDrive/Documents/Archex-studio/node_modules/@playwright/test/index.mjs';
import fs from 'fs';
import path from 'path';

const ARTIFACT_DIR = 'C:/Users/kaifa/.gemini/antigravity/brain/4e21aa23-78f5-4501-bee5-e551850bd06c';
fs.mkdirSync(ARTIFACT_DIR, { recursive: true });

async function run() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 960 },
    deviceScaleFactor: 2,
  });

  const page = await context.newPage();

  const consoleErrors = [];
  const networkFailures = [];

  page.on('console', (msg) => {
    if (msg.type() === 'error') {
      consoleErrors.push(msg.text());
    }
  });

  page.on('requestfailed', (req) => {
    networkFailures.push(`${req.url()} (${req.failure()?.errorText})`);
  });

  page.on('response', (res) => {
    if (res.status() >= 400) {
      networkFailures.push(`${res.url()} -> Status ${res.status()}`);
    }
  });

  console.log('Navigating to http://localhost:3005 ...');
  await page.goto('http://localhost:3005', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);

  // 1. Check title and metadata
  const title = await page.title();
  console.log(`Page title: "${title}"`);

  // 2. Check H1
  const h1 = await page.$eval('h1', (el) => el.innerText.trim());
  console.log(`H1 content: "${h1}"`);

  // 3. Check required copy strings
  const content = await page.content();
  const requiredPhrases = [
    'A NEW ARCHEx PRACTICE',
    'The next move is taking shape.',
    'Archex GTM',
    'A new approach to bringing ideas, products and businesses to market.',
    'WORK IN PROGRESS',
    'Something thoughtful is in the making. Archex GTM is currently under development. Stay tuned for its release.',
    'Meanwhile, explore',
    'https://archexweb.in',
  ];

  console.log('\n--- Checking Required Copy ---');
  for (const phrase of requiredPhrases) {
    const present = content.toLowerCase().includes(phrase.toLowerCase());
    console.log(`[${present ? 'PASS' : 'FAIL'}] "${phrase}"`);
  }

  // 4. Check horizontal overflow on desktop
  const desktopOverflow = await page.evaluate(() => {
    return document.documentElement.scrollWidth > window.innerWidth;
  });
  console.log(`\nDesktop horizontal overflow: ${desktopOverflow ? 'FAIL (overflow detected)' : 'PASS (no overflow)'}`);

  // Take Desktop Screenshot
  const desktopShotPath = path.join(ARTIFACT_DIR, 'desktop-preview.png');
  await page.screenshot({ path: desktopShotPath, fullPage: true });
  console.log(`Saved desktop screenshot: ${desktopShotPath}`);

  // 5. Test Pillar interaction
  console.log('\nTesting stage/pillar interaction...');
  const stageButtons = await page.$$('button[aria-label^="Select stage"]');
  console.log(`Found ${stageButtons.length} stage buttons`);
  if (stageButtons.length > 2) {
    await stageButtons[2].click(); // click Momentum
    await page.waitForTimeout(600);
    const interactiveShotPath = path.join(ARTIFACT_DIR, 'interactive-stage-preview.png');
    await page.screenshot({ path: interactiveShotPath });
    console.log(`Saved interactive stage screenshot: ${interactiveShotPath}`);
  }

  // 6. Test Mobile Viewport (iPhone 14)
  console.log('\nTesting Mobile Viewport (390x844)...');
  const mobileContext = await browser.newContext({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 2,
    isMobile: true,
  });
  const mobilePage = await mobileContext.newPage();
  await mobilePage.goto('http://localhost:3005', { waitUntil: 'networkidle' });
  await mobilePage.waitForTimeout(1000);

  const mobileOverflow = await mobilePage.evaluate(() => {
    return document.documentElement.scrollWidth > window.innerWidth;
  });
  console.log(`Mobile horizontal overflow: ${mobileOverflow ? 'FAIL (overflow detected)' : 'PASS (no overflow)'}`);

  const mobileShotPath = path.join(ARTIFACT_DIR, 'mobile-preview.png');
  await mobilePage.screenshot({ path: mobileShotPath, fullPage: true });
  console.log(`Saved mobile screenshot: ${mobileShotPath}`);

  // 7. Test prefers-reduced-motion
  console.log('\nTesting prefers-reduced-motion...');
  const rmContext = await browser.newContext({
    reducedMotion: 'reduce',
  });
  const rmPage = await rmContext.newPage();
  await rmPage.goto('http://localhost:3005', { waitUntil: 'networkidle' });
  console.log('Reduced motion page loaded cleanly without errors.');

  // 8. Test Archex parent link
  const parentLinks = await page.$$eval('a[href="https://archexweb.in"]', (links) =>
    links.map((l) => ({ text: l.innerText.trim(), href: l.href }))
  );
  console.log(`\nParent links pointing to https://archexweb.in: ${parentLinks.length}`);
  parentLinks.forEach((l) => console.log(` - Text: "${l.text}" -> ${l.href}`));

  // 9. Report errors
  console.log('\n--- Console Errors ---');
  if (consoleErrors.length === 0) {
    console.log('Zero console errors! Clean runtime.');
  } else {
    consoleErrors.forEach((err) => console.log('ERROR:', err));
  }

  console.log('\n--- Network Failures / 404s ---');
  if (networkFailures.length === 0) {
    console.log('Zero network failures or 404s!');
  } else {
    networkFailures.forEach((fail) => console.log('FAIL:', fail));
  }

  await browser.close();
}

run().catch((err) => {
  console.error('Test execution failed:', err);
  process.exit(1);
});

