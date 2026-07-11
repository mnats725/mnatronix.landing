import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
});

test("показывает основное предложение и форму", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Создаём сайты");
  await expect(page.getByRole("heading", { name: "Расскажите о вашем проекте" })).toBeVisible();
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
