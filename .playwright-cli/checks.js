async (page) => {
  const textOf = async (locator) => (await locator.textContent())?.replace(/\s+/g, " ").trim();

  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("http://localhost:3000/", { waitUntil: "networkidle" });

  const home = await page.evaluate(() => {
    const projects = [...document.querySelectorAll('#premium-websites a[href^="http"]')].map((a) => a.href);
    const panels = [...document.querySelectorAll("#services [aria-expanded]")].map((button) =>
      button.textContent.replace(/\s+/g, " ").trim(),
    );
    const topics = [...document.querySelectorAll('#search-visibility [role="tab"]')].map((tab) =>
      tab.textContent.replace(/\s+/g, " ").trim(),
    );
    const select = document.querySelector("#contact select, form select");
    return {
      overflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
      projects: [...new Set(projects)],
      panels,
      topicCount: topics.length,
      topics,
      hasContact: Boolean(document.querySelector("form")),
      serviceOptions: select ? [...select.options].map((option) => option.textContent.trim()) : [],
      whyMedia: Boolean(document.querySelector("#why img, #why svg")),
      commitment: Boolean(document.getElementById("commitment")),
      standard: document.body.innerText.includes("The Standard"),
    };
  });

  const panel = page.getByRole("button", { name: "Search Visibility & SEO" });
  await panel.click();
  const expanded = await panel.getAttribute("aria-expanded");
  const panelLink = await page.locator("#services a[href='/services/search-visibility']").count();

  await page.locator("#services").screenshot({ path: ".playwright-cli/services-1440.png" });

  const pause = page.getByRole("button", { name: "Pause topic cycle" });
  const beforeTopic = await page.locator('#search-visibility [role="tab"][aria-selected="true"]').textContent();
  await pause.click();
  const pauseLabel = await textOf(page.getByRole("button", { name: /topic cycle/ }));
  await page.waitForTimeout(1200);
  const duringPause = await page.locator('#search-visibility [role="tab"][aria-selected="true"]').textContent();
  await page.getByRole("button", { name: "Resume topic cycle" }).click();

  await page.locator("#search-visibility").screenshot({ path: ".playwright-cli/seo-home-1440.png" });

  const showcase = page.locator("#premium-websites");
  await showcase.scrollIntoViewIfNeeded();
  const beforeSkip = await page.evaluate(() => Math.round(window.scrollY));
  await page.getByRole("button", { name: "Skip previews" }).click();
  await page.waitForTimeout(500);
  const afterSkip = await page.evaluate(() => Math.round(window.scrollY));

  await page.evaluate(() => document.getElementById("premium-websites")?.scrollIntoView());
  await page.waitForTimeout(300);
  const firstProject = await textOf(page.locator("#premium-websites [aria-live], #premium-websites [aria-current='true']").first());
  await page.mouse.wheel(0, 700);
  await page.waitForTimeout(400);
  const afterWheel = await page.evaluate(() => {
    const current = document.querySelector("#premium-websites [aria-current='true'], #premium-websites [aria-live]");
    return current ? current.textContent.replace(/\s+/g, " ").trim() : null;
  });
  await page.mouse.wheel(0, -700);
  await page.waitForTimeout(400);
  const afterReverse = await page.evaluate(() => {
    const current = document.querySelector("#premium-websites [aria-current='true'], #premium-websites [aria-live]");
    return current ? current.textContent.replace(/\s+/g, " ").trim() : document.getElementById("premium-websites")?.innerText.slice(0, 180);
  });
  await showcase.screenshot({ path: ".playwright-cli/showcase-1440.png" });

  await page.locator("#why").screenshot({ path: ".playwright-cli/why-1440.png" });

  await page.goto("http://localhost:3000/services/search-visibility", { waitUntil: "networkidle" });
  const seoQuestions = await page.evaluate(() =>
    [...document.querySelectorAll("h3, summary, button")]
      .map((node) => node.textContent.replace(/\s+/g, " ").trim())
      .filter((text) => text.endsWith("?")),
  );
  await page.screenshot({ path: ".playwright-cli/seo-page-1440.png", fullPage: false });

  const otherFaqs = {};
  for (const slug of ["digital-ecommerce", "paid-growth", "organic-growth-content", "ai-automation-crm"]) {
    await page.goto(`http://localhost:3000/services/${slug}`, { waitUntil: "domcontentloaded" });
    otherFaqs[slug] = await page.evaluate(() =>
      [...document.querySelectorAll("h3, summary, button")]
        .map((node) => node.textContent.replace(/\s+/g, " ").trim())
        .filter((text) => text.endsWith("?")).length,
    );
  }

  await page.goto("http://localhost:3000/knowledge-centre", { waitUntil: "networkidle" });
  const search = page.getByRole("searchbox", { name: "Search the guides" });
  await search.fill("logo");
  await page.waitForTimeout(200);
  const logoCount = await textOf(page.locator("[role='status']"));
  await page.getByLabel("Browse by topic").selectOption({ label: "Paid Growth" });
  await page.waitForTimeout(200);
  const logoAndPaid = await textOf(page.locator("[role='status']"));
  const emptyPaid = await page.getByText("No guides match yet").count();
  await page.getByLabel("Browse by topic").selectOption({ label: "All topics" });
  await search.fill("zzzz-not-a-guide");
  await page.waitForTimeout(200);
  const empty = await page.getByText("No guides match yet").count();
  await search.fill("");
  await page.getByRole("button", { name: /Read guide/ }).first().click();
  const expandedGuide = await page.getByRole("button", { name: /Hide guide/ }).count();
  await page.screenshot({ path: ".playwright-cli/knowledge-1440.png" });

  const overflowByWidth = [];
  for (const width of [375, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: width < 800 ? 812 : 900 });
    await page.goto("http://localhost:3000/", { waitUntil: "domcontentloaded" });
    await page.waitForTimeout(250);
    overflowByWidth.push(await page.evaluate((viewport) => ({
      viewport,
      overflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
    }), width));
  }
  await page.setViewportSize({ width: 375, height: 812 });
  await page.screenshot({ path: ".playwright-cli/home-375.png" });

  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.setViewportSize({ width: 1280, height: 800 });
  await page.goto("http://localhost:3000/", { waitUntil: "networkidle" });
  const reduced = await page.evaluate(() => ({
    runwayHeight: getComputedStyle(document.getElementById("premium-websites")).height,
    viewport: window.innerHeight,
  }));

  return {
    home,
    expanded,
    panelLink,
    beforeTopic: beforeTopic?.replace(/\s+/g, " ").trim(),
    pauseLabel,
    duringPause: duringPause?.replace(/\s+/g, " ").trim(),
    beforeSkip,
    afterSkip,
    firstProject,
    afterWheel,
    afterReverse,
    seoQuestions,
    otherFaqs,
    logoCount,
    logoAndPaid,
    emptyPaid,
    empty,
    expandedGuide,
    overflowByWidth,
    reduced,
  };
}
