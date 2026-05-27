import "./Footer.css";
import { getSocials } from "../../data/socials";
import useI18n from "../../hooks/useI18n";

export default function Footer() {
  const { language, t } = useI18n();
  const socials = getSocials(language);
  const year = new Date().getFullYear();
  const featuredSocials = socials.filter(({ href }) => !href.startsWith("mailto:")).slice(0, 2);

  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__brand">
          <p className="footer__brand-name">franSonvico</p>
          <p className="footer__brand-copy">
            {t("footer.rights", { year })}
          </p>
          <p className="footer__brand-note">
            {t("footer.note")}
          </p>
        </div>

        <nav className="footer__links" aria-label={t("footer.usefulAria")}>
          <p className="footer__heading">{t("footer.useful")}</p>
          <a href="#contact">{t("footer.contact")}</a>
          {featuredSocials.map(({ label, href }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer noopener">
              {label}
            </a>
          ))}
        </nav>

        
        <nav className="footer__links" aria-label={t("footer.legalAria")}>
          <p className="footer__heading">{t("footer.legal")}</p>
          <a href={`${import.meta.env.BASE_URL}privacy.html`}>{t("footer.privacy")}</a>
        </nav>

      </div>
    </footer>
  );
}
