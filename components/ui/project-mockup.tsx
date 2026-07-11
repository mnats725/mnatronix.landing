import { BarChart3, Check, Search, TrendingUp } from "lucide-react";

export function ProjectMockup({ variant, name }: { variant: string; name: string }) {
  return (
    <div
      className={`mockup mockup--${variant}`}
      role="img"
      aria-label={`Интерфейс проекта ${name}`}
    >
      <div className="mockup__browser">
        <div className="mockup__top">
          <i />
          <i />
          <i />
          <span>{name.toLowerCase()}.app</span>
        </div>
        <div className="mockup__body">
          <aside>
            <strong>M</strong>
            <i />
            <i />
            <i />
            <i />
          </aside>
          <div className="mockup__content">
            <div className="mockup__bar">
              <b>Dashboard</b>
              <Search size={14} />
            </div>
            <div className="mockup__cards">
              <span>
                <small>Текущий статус</small>
                <b>+24.8%</b>
                <TrendingUp size={18} />
              </span>
              <span>
                <small>Проектов</small>
                <b>128</b>
                <Check size={18} />
              </span>
              <span>
                <small>Аналитика</small>
                <b>92.4K</b>
                <BarChart3 size={18} />
              </span>
            </div>
            <div className="mockup__chart">
              <div className="mockup__chart-head">
                <b>Динамика</b>
                <small>Последние 30 дней</small>
              </div>
              <svg viewBox="0 0 500 130" aria-hidden="true">
                <path d="M0 112 C65 100 76 66 138 77 S223 105 278 53 S389 73 500 12" />
                <path
                  className="area"
                  d="M0 112 C65 100 76 66 138 77 S223 105 278 53 S389 73 500 12 V130 H0Z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
