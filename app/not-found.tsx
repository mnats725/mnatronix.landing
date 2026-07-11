import { ButtonLink } from "@/components/ui/button-link";

export default function NotFoundPage() {
  return (
    <main className="error-page">
      <div>
        <p className="eyebrow">Ошибка 404</p>
        <h1>Страница не найдена</h1>
        <p>Возможно, адрес изменился или страница была удалена.</p>
        <ButtonLink href="/" icon={false}>
          Вернуться на главную
        </ButtonLink>
      </div>
    </main>
  );
}
