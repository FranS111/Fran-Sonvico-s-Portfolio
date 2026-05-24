import "./Footer.css";
import { CONTACT_EMAIL, socials } from "../../data/socials";

export default function Footer() {
  const year = new Date().getFullYear();
  const featuredSocials = socials.filter(({ href }) => !href.startsWith("mailto:")).slice(0, 2);

  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__brand">
          <p className="footer__brand-name">franSonvico</p>
          <p className="footer__brand-copy">
            © {year} franSonvico. Todos los derechos reservados.
          </p>
          <p className="footer__brand-note">
            Este sitio y su contenido no pueden reutilizarse sin permiso.
          </p>
        </div>

        <nav className="footer__links" aria-label="Enlaces útiles">
          <p className="footer__heading">Útil</p>
          <a href="#contact">Contacto</a>
          {featuredSocials.map(({ label, href }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer noopener">
              {label}
            </a>
          ))}
        </nav>

        
        <nav className="footer__links" aria-label="Enlaces legales">
          <p className="footer__heading">Legal</p>
          <a href={`${import.meta.env.BASE_URL}privacy.html`}>Política de privacidad</a>
        </nav>

        <div className="footer__signature" aria-label="Firma de marca">
          <div className="footer__mini-logo">
            <span className="footer__mini-logo-text">&lt;f/&gt;</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
