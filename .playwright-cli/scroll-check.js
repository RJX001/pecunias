async (page) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await page.goto("http://localhost:3000/#premium-websites", { waitUntil: "networkidle" });
  await page.evaluate(() => {
    const section = document.getElementById("premium-websites");
    const top = section.getBoundingClientRect().top + window.scrollY;
    window.scrollTo(0, top + 8);
  });
  await page.waitForTimeout(200);
  const steps = [];
  for (let i = 0; i < 8; i += 1) {
    const label = await page.evaluate(() => {
      const live = document.querySelector("#premium-websites [aria-live]");
      return live ? live.textContent.replace(/\s+/g, " ").trim() : "";
    });
    const y = await page.evaluate(() => Math.round(window.scrollY));
    steps.push({ i, y, label });
    await page.mouse.wheel(0, 450);
    await page.waitForTimeout(250);
  }
  return steps;
}
