import { ArrowRight, Code2, Layers3 } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import type { LandingContent } from "@/content/landing-content";

export function HeroSection({ content }: { content: LandingContent["hero"] }) {
  return (
    <section className="hero" id="top">
      <div className="hero__grid container">
        <div className="hero__content">
          <p className="eyebrow">
            <span />
            {content.eyebrow}
          </p>
          <h1>
            {content.title} <em>{content.accent}</em>
          </h1>
          <p className="hero__lead">{content.lead}</p>
          <div className="hero__actions">
            <ButtonLink href="#contacts">{content.primaryAction}</ButtonLink>
            <ButtonLink href="#projects" variant="outline">
              {content.secondaryAction}
            </ButtonLink>
          </div>
          <div className="hero__stats">
            {content.stats.map(([value, label]) => (
              <div key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="hero-visual" aria-label={content.visualLabel} role="img">
          <div className="hero-visual__grid" />
          <div className="hero-visual__orb" />
          <span className="hero-visual__code">01 / DIGITAL SYSTEM</span>
          <div className="visual-card visual-card--main">
            <div className="visual-card__top">
              <span>
                <i />
                <i />
                <i />
              </span>
              <small>mnatronix / workspace</small>
            </div>
            <div className="visual-card__body">
              <aside>
                <b>M</b>
                <i />
                <i />
                <i />
                <i />
              </aside>
              <div className="visual-dashboard">
                <p>PRODUCT OVERVIEW</p>
                <h3>Build. Launch. Grow.</h3>
                <div className="visual-chart">
                  <svg viewBox="0 0 340 100">
                    <path d="M0 88 C55 75 72 90 112 57 S179 81 225 38 S288 48 340 10" />
                  </svg>
                </div>
                <div className="visual-metrics">
                  <span>
                    <b>94%</b>
                    <small>performance</small>
                  </span>
                  <span>
                    <b>2.4x</b>
                    <small>growth</small>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="floating-tile floating-tile--code">
            <Code2 />
            <span>
              <b>Clean code</b>
              <small>Scalable architecture</small>
            </span>
          </div>
          <div className="floating-tile floating-tile--layers">
            <Layers3 />
            <span>
              <b>UI System</b>
              <small>24 components</small>
            </span>
          </div>
          <div className="visual-arrow">
            <ArrowRight />
          </div>
        </div>
      </div>
    </section>
  );
}
