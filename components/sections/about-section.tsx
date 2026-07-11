import { ArrowDownRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

const principles = [
  "Погружаемся в бизнес",
  "Думаем о пользователях",
  "Создаём решения с запасом на рост",
];

export function AboutSection() {
  return (
    <section className="section about" id="about">
      <div className="container">
        <Reveal>
          <div className="about__top">
            <div>
              <p className="eyebrow">О компании</p>
              <h2>
                Превращаем идеи в<br />
                работающие продукты
              </h2>
            </div>
            <p className="about__text">
              Мы создаём не просто красивые страницы, а полноценные цифровые решения. Изучаем задачи
              бизнеса, проектируем архитектуру, разрабатываем интерфейс и доводим продукт до
              стабильного запуска.
            </p>
          </div>
          <div className="about__wordmark">
            <span>DESIGN</span>
            <i>/</i>
            <span>CODE</span>
            <i>/</i>
            <span>GROWTH</span>
          </div>
          <div className="principles">
            {principles.map((item, index) => (
              <article key={item}>
                <span>0{index + 1}</span>
                <h3>{item}</h3>
                <ArrowDownRight />
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
