import {
  FaXTwitter,
  FaYoutube,
  FaInstagram,
  FaLinkedinIn,
  FaTelegram,
} from 'react-icons/fa6';
import Container from './Container';
import NavLink from '../common/NavLink';
import {
  footerQuickLinks,
  socialLinks,
  footerLegal,
} from '../../data/navigation';

const socialIcons = {
  x: FaXTwitter,
  youtube: FaYoutube,
  instagram: FaInstagram,
  linkedin: FaLinkedinIn,
  telegram: FaTelegram,
};

/** Brand-colored icons to match the reference footer */
const socialStyles = {
  x: 'bg-black text-white ring-1 ring-white/25',
  youtube: 'bg-[#FF0000] text-white',
  instagram: 'bg-gradient-to-br from-[#f58529] via-[#dd2a7b] to-[#8134af] text-white',
  linkedin: 'bg-[#0A66C2] text-white',
  telegram: 'rounded-full bg-[#26A5E4] text-white',
};

function FooterLinkList({ title, links }) {
  return (
    <div>
      <h3 className="mb-5 text-[15px] font-bold text-white md:text-base">{title}</h3>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={`${link.label}-${link.href}`}>
            <NavLink
              href={link.href}
              className="text-[13px] text-[#9a9a9a] transition-colors hover:text-white md:text-[14px]"
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <Container className="py-14 md:py-16 lg:py-[72px]">
        {/* Brand · Quick Links · Legal · Regulatory */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-5 xl:gap-x-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <NavLink href="/" className="inline-block">
              <span className="text-[26px] font-extrabold leading-none tracking-[0.04em] text-white uppercase sm:text-[28px]">
                Sachin Kumar
              </span>
            </NavLink>

            <p className="mt-4 text-[13px] leading-relaxed text-[#8f8f8f] md:text-[14px]">
              Crypto Trader | Author | Educator
            </p>
            <p className="mt-1 text-[13px] text-[#8f8f8f] md:text-[14px]">Trade. Learn. Grow.</p>

            <div className="mt-6 flex flex-wrap items-center gap-2.5">
              {socialLinks.map((link) => {
                const Icon = socialIcons[link.id];
                if (!Icon) return null;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className={`flex h-9 w-9 items-center justify-center rounded-[6px] transition-transform hover:scale-105 ${socialStyles[link.id] || 'bg-white/10 text-white'}`}
                  >
                    <Icon className="h-[17px] w-[17px]" aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <FooterLinkList title="Quick Links" links={footerQuickLinks} />

          {/* Legal disclaimer */}
          <div>
            <h3 className="mb-5 text-[15px] font-bold text-white md:text-base">
              {footerLegal.riskTitle}
            </h3>
            <p className="text-[12px] leading-[1.75] text-[#7a7a7a] md:text-[13px]">
              {footerLegal.riskText}
            </p>
          </div>

          {/* Regulatory */}
          <div>
            <h3 className="mb-5 text-[15px] font-bold text-white md:text-base">
              {footerLegal.regulatoryTitle}
            </h3>
            <p className="text-[12px] leading-[1.75] text-[#7a7a7a] md:text-[13px]">
              {footerLegal.regulatoryText}
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 sm:mt-14 sm:flex-row sm:items-center md:pt-7">
          <p className="text-[12px] text-[#6b6b6b] md:text-[13px]">
            © {new Date().getFullYear()} Sachin Kumar. All rights reserved.
          </p>
          <p className="flex items-center gap-2 text-[12px] text-[#cfcfcf] md:text-[13px]">
            <span className="inline-block h-[2px] w-5 shrink-0 bg-[#FF4D0A]" aria-hidden="true" />
            Markets Change. Principles Don&apos;t.
          </p>
        </div>
      </Container>
    </footer>
  );
}
