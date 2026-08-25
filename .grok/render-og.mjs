import { chromium } from "playwright";
import { pathToFileURL } from "node:url";
import { resolve } from "node:path";

const html = resolve("/workspace/.grok/og-card.html");
const out = resolve("/workspace/.grok/og-raw.png");

const browser = await chromium.launch({
  headless: true,
  args: ["--no-sandbox", "--disable-dev-shm-usage"],
});

try {
  const page = await browser.newPage({
    viewport: { width: 1200, height: 630 },
    deviceScaleFactor: 1,
  });
  await page.goto(pathToFileURL(html).href, { waitUntil: "networkidle", timeout: 30000 });
  await page.evaluate(async () => {
    if (document.fonts?.ready) await document.fonts.ready;
  });
  await page.waitForTimeout(400);
  await page.screenshot({ path: out, type: "png", omitBackground: false });
  console.log(JSON.stringify({ ok: true, out }));
} finally {
  await browser.close();
}
