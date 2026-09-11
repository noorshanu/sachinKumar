import { Link } from 'react-router-dom';
import { FiExternalLink } from 'react-icons/fi';
import Container from './Container';
import { footerLinks, socialLinks } from '../../data/navigation';
import { SITE } from '../../lib/constants';

export default function Footer() {
  return (
    <footer className="border-t border-brand-text/5 bg-brand-dark text-white">
      <Container className="py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link
              to="/"
              className="text-sm font-bold tracking-[0.18em] text-white transition-colors hover:text-brand-orange"
            >
              SACHIN KUMAR
            </Link>
            <p className="mt-3 text-sm font-medium tracking-[0.15em] text-white/50 uppercase">
              {SITE.tagline}
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              Crypto trader, educator, and author helping you navigate markets with discipline
              and clarity.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-brand-orange">
              Navigation
            </h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-brand-orange">
              Social
            </h3>
            <ul className="space-y-3">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {link.label}
                    <FiExternalLink className="h-3 w-3" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-brand-orange">
              Contact
            </h3>
            <p className="text-sm text-white/60">
              Ready to level up your trading journey?
            </p>
            <Link
              to="/contact"
              className="mt-3 inline-block text-sm font-semibold text-brand-orange transition-colors hover:text-brand-orange-bright"
            >
              Get in touch →
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Sachin Kumar. All rights reserved.
          </p>
          <p className="text-xs text-white/40">
            Trade with discipline. Learn with purpose. Grow with consistency.
          </p>
        </div>
      </Container>
    </footer>
  );
}
