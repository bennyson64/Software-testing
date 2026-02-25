/** biome-ignore-all lint/performance/useTopLevelRegex: explanation */
import { expect, test } from "@playwright/test";

test.describe("Task CRUD flow", () => {
  test("user can create, update, and delete a task", async ({ page }) => {
    // Visit app
    await page.goto("/");

    // Assert page loaded
    await expect(page.getByText(/Task Fill-up Form/i)).toBeVisible();

    // CREATE task
    await page.getByPlaceholder(/title/i).fill("Playwright Task");
    await page
      .getByPlaceholder(/description/i)
      .fill("This task is created by Playwright E2E test.");

    await page.getByRole("button", { name: /submit/i }).click();

    await expect(page.getByText("Playwright Task")).toBeVisible();

    // UPDATE task
    await page.getByRole("button", { name: /edit task/i }).click();

    await page.getByPlaceholder(/task title/i).fill("Updated Playwright Task");

    await page.getByRole("button", { name: /save/i }).click();

    await expect(page.getByText("Updated Playwright Task")).toBeVisible();

    // DELETE task
    await page.getByRole("button", { name: /delete task/i }).click();

    await expect(page.getByText(/no task submitted yet/i)).toBeVisible();
  });
});
