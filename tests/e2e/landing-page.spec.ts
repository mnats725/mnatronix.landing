import { expect, test } from "@playwright/test";
import { THEME_STORAGE_KEY } from "../../lib/theme";

test.beforeEach(async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
});

test("показывает основное предложение и форму", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Создаём сайты");
  await expect(page.getByRole("heading", { name: "Расскажите о вашем проекте" })).toBeVisible();
});

test("располагает действия шапки в соответствии с viewport", async ({ page }) => {
  await page.goto("/");
  const viewportWidth = page.viewportSize()?.width ?? 0;
  const header = page.locator(".site-header__inner");
  const headerTheme = header.getByRole("button", { name: /тему|тема/i });
  const headerCta = header.getByRole("link", { name: "Обсудить проект" });
  const menuButton = header.getByRole("button", { name: "Открыть меню" });

  if (viewportWidth <= 760) {
    await expect(headerTheme).toBeHidden();
    await expect(headerCta).toBeHidden();
    await menuButton.click();
    await expect(page.locator(".mobile-nav__theme").getByRole("button")).toBeVisible();
    return;
  }

  await expect(headerTheme).toBeVisible();
  await expect(headerCta).toBeVisible();

  if (viewportWidth <= 1100) {
    await expect(menuButton).toBeVisible();
    const ctaBox = await headerCta.boundingBox();
    const themeBox = await headerTheme.boundingBox();
    const menuBox = await menuButton.boundingBox();
    expect(ctaBox && themeBox && menuBox).toBeTruthy();
    expect(ctaBox!.x).toBeLessThan(themeBox!.x);
    expect(themeBox!.x).toBeLessThan(menuBox!.x);
  }
});

test("не создаёт горизонтальный скролл и растягивает футер на ширину экрана", async ({ page }) => {
  await page.goto("/");

  const layout = await page.evaluate(() => {
    const footer = document.querySelector("footer");
    if (!footer) throw new Error("Footer not found");
    const footerRect = footer.getBoundingClientRect();
    return {
      viewportWidth: window.innerWidth,
      documentWidth: document.documentElement.scrollWidth,
      footerLeft: footerRect.left,
      footerRight: footerRect.right,
    };
  });

  expect(layout.documentWidth).toBe(layout.viewportWidth);
  expect(layout.footerLeft).toBe(0);
  expect(layout.footerRight).toBe(layout.viewportWidth);
});

test("переключает и сохраняет цветовую тему", async ({ page }) => {
  await page.addInitScript(
    (storageKey) => localStorage.setItem(storageKey, "light"),
    THEME_STORAGE_KEY,
  );
  await page.goto("/");

  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
  if ((page.viewportSize()?.width ?? 0) <= 760) {
    await page.getByRole("button", { name: "Открыть меню" }).click();
    await page
      .locator(".mobile-nav__theme")
      .getByRole("button", { name: "Включить тёмную тему" })
      .click();
  } else {
    await page.getByRole("button", { name: "Включить тёмную тему" }).click();
  }
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  await expect
    .poll(() => page.evaluate((storageKey) => localStorage.getItem(storageKey), THEME_STORAGE_KEY))
    .toBe("dark");
});

test("отправляет валидную форму после подтверждения API", async ({ page }) => {
  await page.route("/api/contact", (route) =>
    route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({ message: "Заявка отправлена" }),
    }),
  );
  await page.goto("/#contacts");
  await page.getByLabel("Имя").fill("Иван");
  await page.getByLabel("Телефон или Telegram").fill("@ivan");
  await page.getByLabel("Email").fill("ivan@example.com");
  await page.getByLabel("Тип проекта").selectOption({ label: "Веб-сервис" });
  await page.getByLabel("Описание задачи").fill("Разработать личный кабинет");
  await page.getByLabel("Предполагаемый бюджет").selectOption({ label: "300 000–700 000 ₽" });
  await page.getByRole("checkbox").check({ force: true });
  await page.getByRole("button", { name: "Отправить заявку" }).click();
  await expect(page.getByRole("status")).toContainText("Заявка отправлена");
});
