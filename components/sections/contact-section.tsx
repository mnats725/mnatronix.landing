"use client";

import { ArrowRight, Clock3, Mail, Phone, Send } from "lucide-react";
import { siteConfig } from "@/config/site-config";
import { budgets, projectTypes } from "@/content/site-content";
import { useContactForm } from "@/features/contact/presentation/use-contact-form";
import { Reveal } from "@/components/ui/reveal";

export function ContactSection() {
  const { state, submit } = useContactForm();
  const isSubmitting = state.status === "submitting";

  return (
    <section className="section contacts" id="contacts">
      <div className="container">
        <Reveal>
          <div className="contacts__heading">
            <p className="eyebrow">Связаться с нами</p>
            <h2>Расскажите о вашем проекте</h2>
            <p>Коротко опишите задачу — вернёмся с первыми вопросами и предложим следующий шаг.</p>
          </div>
        </Reveal>
        <div className="contacts__layout">
          <Reveal className="contacts__panel">
            <form className="contact-form" onSubmit={submit} noValidate aria-busy={isSubmitting}>
              <label className="honeypot" aria-hidden="true">
                Не заполняйте это поле
                <input name="website" tabIndex={-1} autoComplete="off" />
              </label>
              <div className="form-row">
                <Field label="Имя" name="name" placeholder="Как к вам обращаться" required />
                <Field
                  label="Телефон или Telegram"
                  name="contact"
                  placeholder="+7 999 000-00-00"
                  required
                />
              </div>
              <div className="form-row">
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="mail@company.ru"
                  required
                />
                <SelectField label="Тип проекта" name="project-type" options={projectTypes} />
              </div>
              <label className="field">
                <span>Описание задачи</span>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Что нужно разработать и какую задачу решить?"
                  required
                />
              </label>
              <SelectField label="Предполагаемый бюджет" name="budget" options={budgets} />
              <label className="checkbox">
                <input type="checkbox" name="privacy" required />
                <span>
                  Я согласен с{" "}
                  <a href={siteConfig.legal.privacyPath}>политикой обработки персональных данных</a>
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
                {isSubmitting ? "Отправляем…" : "Отправить заявку"} <ArrowRight size={18} />
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
                <p className="eyebrow">Напрямую</p>
                <h3>Предпочитаете написать сами?</h3>
                <p>Свяжитесь с нами удобным способом. Отвечаем лично, без ботов и длинных анкет.</p>
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
                  label="Телефон"
                  value={siteConfig.contacts.phone.display}
                  href={siteConfig.contacts.phone.href}
                />
                <ContactItem
                  icon={<Clock3 />}
                  label="Время работы"
                  value={siteConfig.contacts.workingHours}
                />
              </ul>
              <div className="contact-card__note">
                <span className="status-dot" />
                Сейчас на связи
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
function SelectField({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <label className="field">
      <span>{label}</span>
      <select name={name} required defaultValue="">
        <option value="" disabled>
          Выберите вариант
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
