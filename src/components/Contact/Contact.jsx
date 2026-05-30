import { useEffect, useId, useState } from "react";
import "./Contact.css";
import SectionHeader from "../SectionHeader/SectionHeader";
import { CONTACT_EMAIL, getSocials } from "../../data/socials";
import useI18n from "../../hooks/useI18n";

const MIN_MESSAGE_LEN = 20;
const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT?.trim() ?? "";

const initialForm = {
  inquiryType: "company",
  companyName: "",
  contactName: "",
  jobTitle: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  message: "",
};

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

function buildDisplayName(form, fallbackName) {
  if (form.inquiryType === "company") {
    return form.contactName.trim() || form.companyName.trim() || fallbackName;
  }
  const full = `${form.firstName} ${form.lastName}`.trim();
  return full || fallbackName;
}

function buildFormspreePayload(form, fallbackName, companyInquiryLabel) {
  const displayName = buildDisplayName(form, fallbackName);
  const subject =
    form.inquiryType === "company"
      ? `Portfolio · ${form.companyName.trim() || companyInquiryLabel}`
      : `Portfolio · ${displayName}`;

  const payload = {
    name: displayName,
    email: form.email.trim(),
    _replyto: form.email.trim(),
    _subject: subject,
    inquiryType: form.inquiryType,
    message: form.message.trim(),
  };

  if (form.inquiryType === "company") {
    payload.companyName = form.companyName.trim();
    payload.contactName = form.contactName.trim();
    if (form.jobTitle.trim()) payload.jobTitle = form.jobTitle.trim();
  } else {
    payload.firstName = form.firstName.trim();
    payload.lastName = form.lastName.trim();
  }

  if (form.phone.trim()) payload.phone = form.phone.trim();

  return payload;
}

export default function Contact() {
  const { language, t } = useI18n();
  const socials = getSocials(language);
  const baseId = useId();
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState("idle");
  const [submitError, setSubmitError] = useState("");
  const [copyLabel, setCopyLabel] = useState(t("contact.copyEmail"));

  const isSubmitting = submitStatus === "submitting";

  useEffect(() => {
    if (submitStatus !== "success") return undefined;
    const t = setTimeout(() => {
      setForm(initialForm);
      setSubmitStatus("idle");
      setSubmitError("");
      setErrors({});
    }, 4500);
    return () => clearTimeout(t);
  }, [submitStatus]);

  useEffect(() => {
    setCopyLabel(t("contact.copyEmail"));
  }, [language, t]);

  function update(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  }

  function validate() {
    const next = {};
    if (!form.email.trim()) {
      next.email = t("contact.errors.emailRequired");
    } else if (!isValidEmail(form.email)) {
      next.email = t("contact.errors.emailInvalid");
    }
    if (!form.message.trim() || form.message.trim().length < MIN_MESSAGE_LEN) {
      next.message = t("contact.errors.messageMin", { min: MIN_MESSAGE_LEN });
    }
    if (form.inquiryType === "company") {
      if (!form.companyName.trim()) next.companyName = t("contact.errors.companyNameRequired");
      if (!form.contactName.trim()) next.contactName = t("contact.errors.contactNameRequired");
    } else {
      if (!form.firstName.trim()) next.firstName = t("contact.errors.firstNameRequired");
      if (!form.lastName.trim()) next.lastName = t("contact.errors.lastNameRequired");
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (isSubmitting) return;
    if (!validate()) return;

    if (!FORMSPREE_ENDPOINT) {
      setSubmitStatus("error");
      setSubmitError(t("contact.envError"));
      return;
    }

    setSubmitStatus("submitting");
    setSubmitError("");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(
          buildFormspreePayload(
            form,
            t("navbar.contact"),
            form.inquiryType === "company" ? t("contact.hiringCompany") : t("contact.individualProject")
          )
        ),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        const apiMessage =
          typeof data.error === "string"
            ? data.error
            : Array.isArray(data.errors)
              ? data.errors.map((err) => err.message).filter(Boolean).join(" ")
              : "";
        throw new Error(apiMessage || t("contact.submitErrorFallback"));
      }

      setSubmitStatus("success");
    } catch (err) {
      setSubmitStatus("error");
      setSubmitError(
        err instanceof Error && err.message
          ? err.message
          : t("contact.networkError")
      );
    }
  }

  async function handleCopyEmail() {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopyLabel(t("contact.copied"));
      setTimeout(() => setCopyLabel(t("contact.copyEmail")), 2000);
    } catch {
      try {
        const ta = document.createElement("textarea");
        ta.value = CONTACT_EMAIL;
        ta.setAttribute("readonly", "");
        ta.style.position = "fixed";
        ta.style.left = "-9999px";
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
        setCopyLabel(t("contact.copied"));
        setTimeout(() => setCopyLabel(t("contact.copyEmail")), 2000);
      } catch {
        setCopyLabel(t("contact.copyFailed"));
        setTimeout(() => setCopyLabel(t("contact.copyEmail")), 2000);
      }
    }
  }

  return (
    <section id="contact" className="contact section-bleed">
      <SectionHeader
        index="05"
        name={t("contact.title")}
        subtitle={t("contact.subtitle")}
        align="left"
      />

      <div className="contact-panel">
        <div className="contact-layout">
          <aside className="contact-aside" aria-labelledby={`${baseId}-aside-heading`}>
            <h3 id={`${baseId}-aside-heading`} className="contact-aside-title">
              {t("contact.letsWorkTogether")}
            </h3>
            <p className="contact-aside-lead">
              {t("contact.lead")}
            </p>

            <div className="contact-terminal" role="group" aria-label="Quick status">
              <p className="contact-terminal-line">
                <span className="contact-terminal-k">//</span> {t("contact.availability")}:{" "}
                <span className="contact-terminal-v">open_to_roles</span>
              </p>
              <p className="contact-terminal-line">
                <span className="contact-terminal-k">//</span> {t("contact.responseSla")}:{" "}
                <span className="contact-terminal-v">~48h</span>
              </p>
              <p className="contact-terminal-line">
                <span className="contact-terminal-k">//</span> {t("contact.preferredStack")}:{" "}
                <span className="contact-terminal-v">
                  React · TypeScript · Node.js
                </span>
              </p>
            </div>

            <div className="contact-email-row">
              <a className="contact-email-link" href={`mailto:${CONTACT_EMAIL}`}>
                {CONTACT_EMAIL}
              </a>
              <button
                type="button"
                className="contact-copy-btn"
                onClick={handleCopyEmail}
              >
                {copyLabel}
              </button>
            </div>

            <div className="contact-meta-social-row">
              <p className="contact-meta">
                <span className="contact-meta-label">{t("contact.timezone")}</span>
                <span className="contact-meta-value">{t("contact.timezoneValue")}</span>
              </p>

              <ul className="contact-socials">
                {socials.map(({ label, href, icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="contact-social-link"
                      aria-label={label}
                      {...(href.startsWith("mailto:")
                        ? {}
                        : { target: "_blank", rel: "noreferrer noopener" })}
                    >
                      {icon}
                      <span>{label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <div className="contact-form-shell">
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <fieldset className="contact-fieldset contact-fieldset--segment">
                <legend className="contact-legend">{t("contact.contactingAs")}</legend>
                <div className="contact-segment" role="radiogroup" aria-label={t("contact.inquiryTypeLabel")}>
                  <label className="contact-segment-option">
                    <input
                      type="radio"
                      name="inquiryType"
                      value="company"
                      checked={form.inquiryType === "company"}
                      onChange={() => update("inquiryType", "company")}
                    />
                    <span>{t("contact.hiringCompany")}</span>
                  </label>
                  <label className="contact-segment-option">
                    <input
                      type="radio"
                      name="inquiryType"
                      value="individual"
                      checked={form.inquiryType === "individual"}
                      onChange={() => update("inquiryType", "individual")}
                    />
                    <span>{t("contact.individualProject")}</span>
                  </label>
                </div>
              </fieldset>

              {form.inquiryType === "company" ? (
                <div className="contact-fields-group">
                  <div className="contact-field">
                    <label htmlFor={`${baseId}-company`}>{t("contact.companyName")}</label>
                    <input
                      id={`${baseId}-company`}
                      type="text"
                      name="companyName"
                      autoComplete="organization"
                      value={form.companyName}
                      onChange={(e) => update("companyName", e.target.value)}
                      className={errors.companyName ? "contact-input contact-input--error" : "contact-input"}
                      aria-invalid={!!errors.companyName}
                      aria-describedby={errors.companyName ? `${baseId}-company-err` : undefined}
                    />
                    {errors.companyName && (
                      <span id={`${baseId}-company-err`} className="contact-field-error" role="alert">
                        {errors.companyName}
                      </span>
                    )}
                  </div>
                  <div className="contact-field-row">
                    <div className="contact-field">
                      <label htmlFor={`${baseId}-cname`}>{t("contact.yourName")}</label>
                      <input
                        id={`${baseId}-cname`}
                        type="text"
                        name="contactName"
                        autoComplete="name"
                        value={form.contactName}
                        onChange={(e) => update("contactName", e.target.value)}
                        className={errors.contactName ? "contact-input contact-input--error" : "contact-input"}
                        aria-invalid={!!errors.contactName}
                        aria-describedby={errors.contactName ? `${baseId}-cname-err` : undefined}
                      />
                      {errors.contactName && (
                        <span id={`${baseId}-cname-err`} className="contact-field-error" role="alert">
                          {errors.contactName}
                        </span>
                      )}
                    </div>
                    <div className="contact-field">
                      <label htmlFor={`${baseId}-role`}>{t("contact.roleOptional")}</label>
                      <input
                        id={`${baseId}-role`}
                        type="text"
                        name="jobTitle"
                        autoComplete="organization-title"
                        value={form.jobTitle}
                        onChange={(e) => update("jobTitle", e.target.value)}
                        className="contact-input"
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="contact-fields-group">
                  <div className="contact-field-row">
                    <div className="contact-field">
                      <label htmlFor={`${baseId}-fname`}>{t("contact.firstName")}</label>
                      <input
                        id={`${baseId}-fname`}
                        type="text"
                        name="firstName"
                        autoComplete="given-name"
                        value={form.firstName}
                        onChange={(e) => update("firstName", e.target.value)}
                        className={errors.firstName ? "contact-input contact-input--error" : "contact-input"}
                        aria-invalid={!!errors.firstName}
                        aria-describedby={errors.firstName ? `${baseId}-fname-err` : undefined}
                      />
                      {errors.firstName && (
                        <span id={`${baseId}-fname-err`} className="contact-field-error" role="alert">
                          {errors.firstName}
                        </span>
                      )}
                    </div>
                    <div className="contact-field">
                      <label htmlFor={`${baseId}-lname`}>{t("contact.lastName")}</label>
                      <input
                        id={`${baseId}-lname`}
                        type="text"
                        name="lastName"
                        autoComplete="family-name"
                        value={form.lastName}
                        onChange={(e) => update("lastName", e.target.value)}
                        className={errors.lastName ? "contact-input contact-input--error" : "contact-input"}
                        aria-invalid={!!errors.lastName}
                        aria-describedby={errors.lastName ? `${baseId}-lname-err` : undefined}
                      />
                      {errors.lastName && (
                        <span id={`${baseId}-lname-err`} className="contact-field-error" role="alert">
                          {errors.lastName}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              )}

              <div className="contact-field">
                <label htmlFor={`${baseId}-email`}>{t("contact.email")}</label>
                <input
                  id={`${baseId}-email`}
                  type="email"
                  name="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  className={errors.email ? "contact-input contact-input--error" : "contact-input"}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? `${baseId}-email-err` : undefined}
                />
                {errors.email && (
                  <span id={`${baseId}-email-err`} className="contact-field-error" role="alert">
                    {errors.email}
                  </span>
                )}
              </div>

              <div className="contact-field">
                <label htmlFor={`${baseId}-phone`}>{t("contact.phoneOptional")}</label>
                <input
                  id={`${baseId}-phone`}
                  type="tel"
                  name="phone"
                  autoComplete="tel"
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  className="contact-input"
                />
              </div>

              <div className="contact-field">
                <label htmlFor={`${baseId}-message`}>{t("contact.message")}</label>
                <textarea
                  id={`${baseId}-message`}
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={(e) => update("message", e.target.value)}
                  className={errors.message ? "contact-input contact-textarea contact-input--error" : "contact-input contact-textarea"}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? `${baseId}-message-err` : undefined}
                  placeholder={t("contact.messagePlaceholder")}
                />
                {errors.message && (
                  <span id={`${baseId}-message-err`} className="contact-field-error" role="alert">
                    {errors.message}
                  </span>
                )}
              </div>

              <div className="contact-form-actions">
                <button
                  type="submit"
                  className="contact-submit"
                  disabled={isSubmitting}
                  aria-busy={isSubmitting}
                >
                  {isSubmitting ? t("contact.sending") : t("contact.submitMessage")}
                </button>
              </div>

              <div
                className="contact-form-status"
                aria-live="polite"
                aria-atomic="true"
              >
                {submitStatus === "success" && (
                  <p className="contact-success">
                    {t("contact.sentSuccess")}
                  </p>
                )}
                {submitStatus === "error" && submitError && (
                  <p className="contact-error" role="alert">
                    {submitError}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
