import { z } from "zod";

const requiredText = (fieldName: string, maxLength: number) =>
  z.string().trim().min(1, `Заполните поле «${fieldName}»`).max(maxLength);

export const contactRequestSchema = z.object({
  name: requiredText("Имя", 100),
  contact: requiredText("Телефон или Telegram", 100),
  email: z.string().trim().email("Укажите корректный email").max(254),
  projectType: requiredText("Тип проекта", 100),
  message: requiredText("Описание задачи", 4_000),
  budget: requiredText("Бюджет", 100),
  privacy: z.literal(true, { message: "Необходимо согласие на обработку данных" }),
  website: z.string().max(0, "Заявка отклонена"),
  turnstileToken: z.string().optional(),
});

export type ContactRequest = z.infer<typeof contactRequestSchema>;
