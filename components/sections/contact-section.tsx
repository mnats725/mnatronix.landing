"use client";

import { ArrowRight, Clock3, Mail, Phone, Send } from "lucide-react";
import { useMessages } from "next-intl";
import { siteConfig } from "@/config/site-config";
import type { Locale } from "@/i18n/config";
import { getLocalizedPath } from "@/i18n/config";
import type { LandingContent } from "@/content/landing-content";
import { useContactForm } from "@/features/contact/presentation/use-contact-form";
import { Reveal } from "@/components/ui/reveal";

export function ContactSection({ locale }: { locale: Locale }) {
  const messages = useMessages();
  const content = (messages.Landing as LandingContent).contact;
  const { state, submit } = useContactForm(content.messages);
  const isSubmitting = state.status === "submitting";

  return (
    <section className="section contacts" id="contacts">
      <div className="container">
        <Reveal>
          <div className="contacts__heading">
            <p className="eyebrow">{content.eyebrow}</p>
            <h2>{content.title}</h2>
            <p>{content.text}</p>
          </div>
        </Reveal>
        <div className="contacts__layout">
          <Reveal className="contacts__panel">
            <form className="contact-form" onSubmit={submit} noValidate aria-busy={isSubmitting}>
              <label className="honeypot" aria-hidden="true">
                {content.honeypot}
                <input name="website" tabIndex={-1} autoComplete="off" />
              </label>
              <div className="form-row">
                <Field
                  label={content.fields.name}
                  name="name"
                  placeholder={content.fields.namePlaceholder}
                  required
                />
                <Field
                  label={content.fields.contact}
                  name="contact"
                  placeholder={content.fields.contactPlaceholder}
                  required
                />
              </div>
              <div className="form-row">
                <Field
                  label={content.fields.email}
                  name="email"
                  type="email"
                  placeholder={content.fields.emailPlaceholder}
                  required
                />
                <SelectField
                  label={content.fields.projectType}
                  name="project-type"
                  options={content.projectTypes}
                  placeholder={content.fields.selectPlaceholder}
                />
              </div>
              <label className="field">
                <span>{content.fields.message}</span>
                <textarea
                  name="message"
                  rows={5}
                  placeholder={content.fields.messagePlaceholder}
                  required
                />
              </label>
              <SelectField
                label={content.fields.budget}
                name="budget"
                options={content.budgets}
                placeholder={content.fields.selectPlaceholder}
              />
              <label className="checkbox">
                <input type="checkbox" name="privacy" required />
                <span>
                  {content.fields.privacyPrefix}{" "}
                  <a href={getLocalizedPath(locale, siteConfig.legal.privacyPath)}>
                    {content.fields.privacyLink}
                  </a>
                </span>
              </label>
              {process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY && (
                <div
                  className="cf-turnstile"
                  data-sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
                />
              )}
              <button
                className="button button--primary submit-button"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? content.submitting : content.submit} <ArrowRight size={18} />
              </button>
              <div className="form-message" role="status" aria-live="polite" id="form-status">
                {state.message && (
                  <p className={`form-message--${state.status}`}>{state.message}</p>
                )}
              </div>
            </form>
          </Reveal>
          <Reveal className="contacts__panel">
            <aside className="contact-card">
              <div>
                <p className="eyebrow">{content.directEyebrow}</p>
                <h3>{content.directTitle}</h3>
                <p>{content.directText}</p>
              </div>
              <ul>
                <ContactItem
                  icon={<Send />}
                  label="Telegram"
                  value={siteConfig.contacts.telegram.display}
                  href={siteConfig.contacts.telegram.href}
                />
                <ContactItem
                  icon={<Mail />}
                  label="Email"
                  value={siteConfig.contacts.email}
                  href={`mailto:${siteConfig.contacts.email}`}
                />
                <ContactItem
                  icon={<Phone />}
                  label={content.phoneLabel}
                  value={siteConfig.contacts.phone.display}
                  href={siteConfig.contacts.phone.href}
                />
                <ContactItem
                  icon={<Clock3 />}
                  label={content.hoursLabel}
                  value={
                    locale === "ru" ? siteConfig.contacts.workingHours : "Mon–Fri, 10:00–19:00"
                  }
                />
              </ul>
              <div className="contact-card__note">
                <span className="status-dot" />
                {content.online}
              </div>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <label className="field">
      <span>{label}</span>
      <input {...props} />
    </label>
  );
}
function SelectField({
  label,
  name,
  options,
  placeholder,
}: {
  label: string;
  name: string;
  options: string[];
  placeholder: string;
}) {
  return (
    <label className="field">
      <span>{label}</span>
      <select name={name} required defaultValue="">
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </label>
  );
}
function ContactItem({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <>
      <i>{icon}</i>
      <span>
        <small>{label}</small>
        <b>{value}</b>
      </span>
      {href && <ArrowRight size={18} />}
    </>
  );
  return <li>{href ? <a href={href}>{content}</a> : <div>{content}</div>}</li>;
}
