import { useEffect, useId, useState } from "react";
import "./Contact.css";
import SectionHeader from "../SectionHeader/SectionHeader";
import { CONTACT_EMAIL, socials } from "../../data/socials";

const MIN_MESSAGE_LEN = 20;

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

export default function Contact() {
  const baseId = useId();
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [copyLabel, setCopyLabel] = useState("Copy email");

  useEffect(() => {
    if (!submitted) return undefined;
    const t = setTimeout(() => {
      setForm(initialForm);
      setSubmitted(false);
      setErrors({});
    }, 4500);
    return () => clearTimeout(t);
  }, [submitted]);

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
      next.email = "Email is required.";
    } else if (!isValidEmail(form.email)) {
      next.email = "Enter a valid email.";
    }
    if (!form.message.trim() || form.message.trim().length < MIN_MESSAGE_LEN) {
      next.message = `Message must be at least ${MIN_MESSAGE_LEN} characters.`;
    }
    if (form.inquiryType === "company") {
      if (!form.companyName.trim()) next.companyName = "Company name is required.";
      if (!form.contactName.trim()) next.contactName = "Your name is required.";
    } else {
      if (!form.firstName.trim()) next.firstName = "First name is required.";
      if (!form.lastName.trim()) next.lastName = "Last name is required.";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  }

  async function handleCopyEmail() {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopyLabel("Copied");
      setTimeout(() => setCopyLabel("Copy email"), 2000);
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
        setCopyLabel("Copied");
        setTimeout(() => setCopyLabel("Copy email"), 2000);
      } catch {
        setCopyLabel("Copy failed");
        setTimeout(() => setCopyLabel("Copy email"), 2000);
      }
    }
  }

  return (
    <section id="contact" className="contact section-bleed">
      <SectionHeader
        index="05"
        name="Contact"
        subtitle="Hiring teams, founders, and collaborators — tell me what you're building"
        align="left"
      />

      <div className="contact-panel">
        <div className="contact-layout">
          <aside className="contact-aside" aria-labelledby={`${baseId}-aside-heading`}>
            <h3 id={`${baseId}-aside-heading`} className="contact-aside-title">
              Let&apos;s work together
            </h3>
            <p className="contact-aside-lead">
              Full-stack product work, scoped engagements, and long-term roles. Share
              context and timelines — I reply with next steps, not auto-replies.
            </p>

            <div className="contact-terminal" role="group" aria-label="Quick status">
              <p className="contact-terminal-line">
                <span className="contact-terminal-k">//</span> availability:{" "}
                <span className="contact-terminal-v">open_to_roles</span>
              </p>
              <p className="contact-terminal-line">
                <span className="contact-terminal-k">//</span> response_sla:{" "}
                <span className="contact-terminal-v">~48h</span>
              </p>
              <p className="contact-terminal-line">
                <span className="contact-terminal-k">//</span> preferred_stack:{" "}
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

            <p className="contact-meta">
              <span className="contact-meta-label">Timezone</span>
              <span className="contact-meta-value">Europe (UTC+1 / CET)</span>
            </p>

            <ul className="contact-socials">
              {socials.map(({ label, href, icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="contact-social-link"
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
          </aside>

          <div className="contact-form-shell">
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <fieldset className="contact-fieldset contact-fieldset--segment">
                <legend className="contact-legend">I&apos;m contacting as</legend>
                <div className="contact-segment" role="radiogroup" aria-label="Inquiry type">
                  <label className="contact-segment-option">
                    <input
                      type="radio"
                      name="inquiryType"
                      value="company"
                      checked={form.inquiryType === "company"}
                      onChange={() => update("inquiryType", "company")}
                    />
                    <span>Hiring / company</span>
                  </label>
                  <label className="contact-segment-option">
                    <input
                      type="radio"
                      name="inquiryType"
                      value="individual"
                      checked={form.inquiryType === "individual"}
                      onChange={() => update("inquiryType", "individual")}
                    />
                    <span>Individual / project</span>
                  </label>
                </div>
              </fieldset>

              {form.inquiryType === "company" ? (
                <div className="contact-fields-group">
                  <div className="contact-field">
                    <label htmlFor={`${baseId}-company`}>Company name</label>
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
                      <label htmlFor={`${baseId}-cname`}>Your name</label>
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
                      <label htmlFor={`${baseId}-role`}>Role (optional)</label>
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
                      <label htmlFor={`${baseId}-fname`}>First name</label>
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
                      <label htmlFor={`${baseId}-lname`}>Last name</label>
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
                <label htmlFor={`${baseId}-email`}>Email</label>
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
                <label htmlFor={`${baseId}-phone`}>Phone (optional)</label>
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
                <label htmlFor={`${baseId}-message`}>Message</label>
                <textarea
                  id={`${baseId}-message`}
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={(e) => update("message", e.target.value)}
                  className={errors.message ? "contact-input contact-textarea contact-input--error" : "contact-input contact-textarea"}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? `${baseId}-message-err` : undefined}
                  placeholder="Role, stack, timeline, project description..."
                />
                {errors.message && (
                  <span id={`${baseId}-message-err`} className="contact-field-error" role="alert">
                    {errors.message}
                  </span>
                )}
              </div>

              <div className="contact-form-actions">
                <button type="submit" className="contact-submit">
                  Submit message
                </button>
              </div>

              <div
                className="contact-form-status"
                aria-live="polite"
                aria-atomic="true"
              >
                {submitted && (
                  <p className="contact-success">
                    Message received (demo). In production this would hit your inbox or
                    API.
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
