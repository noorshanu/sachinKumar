import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiArrowRight } from 'react-icons/fi';
import Container from './Container';
import Button from '../common/Button';
import { navLinks } from '../../data/navigation';
import NavLink from '../common/NavLink';
import { useIsActive } from '../../hooks/useIsActive';

function NavItem({ link, onNavigate }) {
  const active = useIsActive(link.href);

  return (
    <NavLink
      href={link.href}
      onClick={onNavigate}
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

function MobileNavItem({ link, onNavigate }) {
  const active = useIsActive(link.href);

  return (
    <NavLink
      href={link.href}
      onClick={onNavigate}
      className={`block rounded-lg px-4 py-3 text-base font-medium transition-colors hover:bg-brand-soft-orange ${
        active ? 'text-brand-orange' : 'text-brand-text-secondary'
      }`}
    >
      {link.label}
    </NavLink>
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
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-brand-text/5 bg-white/90 shadow-sm backdrop-blur-md'
          : 'border-b border-brand-text/5 bg-white/80 backdrop-blur-sm'
      }`}
    >
      <Container>
        <nav
          className="flex h-16 items-center justify-between md:h-[72px]"
          aria-label="Main navigation"
        >
          <Link
            to="/"
            className="text-sm font-bold tracking-[0.18em] text-brand-text transition-colors hover:text-brand-orange md:text-base"
          >
            SACHIN KUMAR
          </Link>

          <ul className="hidden items-center gap-6 lg:flex xl:gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <NavItem link={link} />
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <Button href="/#club" icon={FiArrowRight}>
              Join Now
            </Button>
          </div>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-brand-text/10 text-brand-text lg:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            aria-expanded={mobileOpen}
          >
            <FiMenu className="h-5 w-5" />
          </button>
        </nav>
      </Container>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-brand-dark/40 backdrop-blur-sm lg:hidden"
              onClick={closeMobile}
              aria-hidden="true"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col bg-white shadow-2xl lg:hidden"
            >
              <div className="flex items-center justify-between border-b border-brand-text/5 px-6 py-4">
                <span className="text-sm font-bold tracking-[0.18em]">SACHIN KUMAR</span>
                <button
                  type="button"
                  onClick={closeMobile}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-brand-text/10"
                  aria-label="Close menu"
                >
                  <FiX className="h-5 w-5" />
                </button>
              </div>

              <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-6 py-6">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <MobileNavItem link={link} onNavigate={closeMobile} />
                  </motion.div>
                ))}
              </nav>

              <div className="border-t border-brand-text/5 p-6">
                <Button href="/#club" className="w-full" icon={FiArrowRight} onClick={closeMobile}>
                  Join Now
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
