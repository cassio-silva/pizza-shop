import { test, expect } from "@playwright/test";

test("display day orders amount metric", async ({ page }) => {
  await page.goto("/", {
    waitUntil: "networkidle",
  });

  expect(page.getByText("20", { exact: true })).toBeVisible();
  expect(page.getByText("-5% em relação a ontem.")).toBeVisible();
});

test("display month orders amount metric", async ({ page }) => {
  await page.goto("/", {
    waitUntil: "networkidle",
  });

  expect(page.getByText("200", { exact: true })).toBeVisible();
  expect(page.getByText("-3% em relação ao mês passado.")).toBeVisible();
});

test("display month canceled orders amount metric", async ({ page }) => {
  await page.goto("/", {
    waitUntil: "networkidle",
  });

  expect(page.getByText("12")).toBeVisible();
  expect(page.getByText("+5% em relação ao mês passado.")).toBeVisible();
});

test("display month revenue metric", async ({ page }) => {
  await page.goto("/", {
    waitUntil: "networkidle",
  });

  expect(page.getByText("R$ 200,00")).toBeVisible();
  expect(page.getByText("-5% em relação ao mês passado.")).toBeVisible();
});
