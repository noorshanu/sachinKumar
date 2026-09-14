import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import Container from './Container';
import TelegramCta from '../common/TelegramCta';
import { navLinks } from '../../data/navigation';
import NavLink from '../common/NavLink';
import { useIsActive } from '../../hooks/useIsActive';
import { logoImage } from '../../lib/images';

const panelTransition = {
  type: 'tween',
  duration: 0.38,
  ease: [0.22, 1, 0.36, 1],
};

const backdropTransition = {
  duration: 0.28,
  ease: 'easeOut',
};

const listVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.045, delayChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 28 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
  },
};

function BrandLogo({ className = '' }) {
  if (logoImage) {
    return (
      <img
        src={logoImage}
        alt="Sachin Kumar"
        className={`h-12 w-auto object-contain md:h-14 ${className}`}
      />
    );
  }

  return (
    <span className="text-sm font-bold tracking-[0.18em] text-brand-text md:text-base">
      SACHIN KUMAR
    </span>
  );
}

function NavItem({ link }) {
  const active = useIsActive(link.href);

  return (
    <NavLink
      href={link.href}
      className={`relative text-sm font-medium transition-colors hover:text-brand-orange ${
        active ? 'text-brand-orange' : 'text-brand-text-secondary'
      }`}
    >
      {link.label}
      {active && (
        <span className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-brand-orange" />
      )}
    </NavLink>
  );
}

function MobileNavItem({ link, onNavigate, index }) {
  const active = useIsActive(link.href);

  return (
    <motion.div variants={itemVariants}>
      <NavLink
        href={link.href}
        onClick={onNavigate}
        className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-[17px] font-semibold transition-colors ${
          active
            ? 'bg-brand-soft-orange text-brand-orange'
            : 'text-brand-text hover:bg-brand-cream'
        }`}
      >
        <span className="flex items-center gap-3">
          <span className="text-[11px] font-bold tracking-wider text-brand-text-muted/50">
            {String(index + 1).padStart(2, '0')}
          </span>
          {link.label}
        </span>
        {active && <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" aria-hidden="true" />}
      </NavLink>
    </motion.div>
  );
}

function MobileSidebar({ open, onClose }) {
  if (typeof document === 'undefined') return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <div className="xl:hidden" role="dialog" aria-modal="true" aria-label="Mobile menu">
          {/* Backdrop */}
          <motion.button
            type="button"
            aria-label="Close menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={backdropTransition}
            className="fixed inset-0 z-[100] bg-[#0D0908]/55 backdrop-blur-[6px]"
            onClick={onClose}
          />

          {/* Sliding panel */}
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={panelTransition}
            className="fixed inset-y-0 right-0 z-[110] flex h-[100dvh] w-[min(100%,22rem)] flex-col bg-white shadow-[-20px_0_60px_rgba(0,0,0,0.18)]"
          >
            {/* Accent edge */}
            <div
              aria-hidden="true"
              className="absolute inset-y-0 left-0 w-[3px] bg-gradient-to-b from-brand-orange via-brand-orange/40 to-transparent"
            />

            <div className="flex items-center justify-between border-b border-brand-text/6 px-5 py-4">
              <Link to="/" onClick={onClose} aria-label="Sachin Kumar home">
                <BrandLogo className="!h-10" />
              </Link>
              <motion.button
                type="button"
                onClick={onClose}
                whileTap={{ scale: 0.92 }}
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-brand-text/10 bg-brand-cream text-brand-text"
                aria-label="Close menu"
              >
                <FiX className="h-5 w-5" />
              </motion.button>
            </div>

            <motion.nav
              variants={listVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-1 flex-col gap-1 overflow-y-auto overscroll-contain px-4 py-5"
            >
              {navLinks.map((link, i) => (
                <MobileNavItem key={link.href} link={link} index={i} onNavigate={onClose} />
              ))}
            </motion.nav>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28, duration: 0.35 }}
              className="border-t border-brand-text/6 p-5 pb-[max(1.25rem,env(safe-area-inset-bottom))]"
            >
              <TelegramCta className="w-full" iconPosition="right" onClick={onClose}>
                Join Now
              </TelegramCta>
              <p className="mt-3 text-center text-[11px] tracking-[0.12em] text-brand-text-muted uppercase">
                Trade · Learn · Grow
              </p>
            </motion.div>
          </motion.aside>
        </div>
      )}
    </AnimatePresence>,
    document.body,
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return undefined;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKey = (e) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    window.addEventListener('keydown', onKey);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'border-b border-brand-text/5 bg-white/90 shadow-sm backdrop-blur-md'
            : 'border-b border-brand-text/5 bg-white/80 backdrop-blur-sm'
        }`}
      >
        <Container>
          <nav
            className="flex h-[72px] items-center justify-between py-2 md:h-20 md:py-3"
            aria-label="Main navigation"
          >
            <Link to="/" className="inline-flex shrink-0 items-center" aria-label="Sachin Kumar home">
              <BrandLogo />
            </Link>

            <ul className="hidden items-center gap-5 xl:flex xl:gap-7">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <NavItem link={link} />
                </li>
              ))}
            </ul>

            <div className="hidden xl:block">
              <TelegramCta iconPosition="right">
                Join Now
              </TelegramCta>
            </div>

            <motion.button
              type="button"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-brand-text/10 text-brand-text xl:hidden"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              whileTap={{ scale: 0.94 }}
            >
              <FiMenu className="h-5 w-5" />
            </motion.button>
          </nav>
        </Container>
      </header>

      <MobileSidebar open={mobileOpen} onClose={closeMobile} />
    </>
  );
}
