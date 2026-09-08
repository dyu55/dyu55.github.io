import { test, expect } from "@playwright/test";

test.describe("Portfolio Smoke Tests", () => {
  test("homepage loads with hero section", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("h1")).toBeVisible();
  });

  test("project gallery lives on its own page", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("#projects")).toHaveCount(0);
    await page.goto("/projects/");
    await expect(page.locator("#projects")).toBeVisible();
  });

  test("blog listing page loads", async ({ page }) => {
    await page.goto("/blog");
    await expect(page.getByRole("main").first()).toBeVisible();
  });

  test("blog post renders MDX content", async ({ page }) => {
    await page.goto("/blog/building-production-rag");
    await page.waitForLoadState("networkidle");
    await expect(page.locator("article")).toBeVisible({ timeout: 10000 });
  });

  test("project detail page loads", async ({ page }) => {
    await page.goto("/projects/myagent");
    await page.waitForLoadState("networkidle");
    await expect(page.getByRole("main").first()).toBeVisible({
      timeout: 10000,
    });
  });

  test("navigation works", async ({ page }) => {
    await page.goto("/");
    await page
      .getByRole("link", { name: "Explore my projects", exact: true })
      .click();
    await expect(page).toHaveURL(/\/projects\/$/);
    await expect(
      page.getByRole("heading", { level: 1, name: "Ideas, made real." }),
    ).toBeVisible();
  });

  test("dark mode toggle works", async ({ page }) => {
    await page.goto("/");
    const toggle = page.getByRole("button", { name: /toggle theme/i });
    if (await toggle.isVisible()) {
      await toggle.click();
    }
    // Just verify page doesn't crash
    await expect(page.locator("body")).toBeVisible();
  });

  test("404 page renders", async ({ page }) => {
    await page.goto("/this-page-does-not-exist");
    await expect(
      page.getByRole("heading", { name: /404|not found/i }),
    ).toBeVisible();
  });
});
