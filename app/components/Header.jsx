'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from './ThemeProvider';

const navLinks = [
  { label: 'Home',     href: '/' },
  { label: 'About',    href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact',  href: '/contact' },
];

const SunIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5"/>
    <line x1="12" y1="1" x2="12" y2="3"/>
    <line x1="12" y1="21" x2="12" y2="23"/>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
    <line x1="1" y1="12" x2="3" y2="12"/>
    <line x1="21" y1="12" x2="23" y2="12"/>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
  </svg>
);

const MoonIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>
);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen]   = useState(false);
  const [isScrolled, setIsScrolled]   = useState(false);
  const { theme, toggleTheme }        = useTheme();
  const pathname                      = usePathname();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? 'backdrop-blur-md border-b theme-border'
            : 'border-b border-transparent'
        }`}
        style={{
          backgroundColor: isScrolled ? 'var(--bg)' : 'transparent',
          boxShadow: isScrolled ? 'var(--shadow)' : 'none',
        }}
      >
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          {/* Logo / Name */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <Link
              href="/"
              className="font-display text-xl tracking-widest uppercase theme-text hover:text-gold transition-colors duration-300"
              style={{ fontWeight: 400, letterSpacing: '0.18em' }}
            >
              Sharon Lawal
            </Link>
          </motion.div>

          {/* Desktop Nav */}
          <motion.nav
            className="hidden md:flex items-center gap-8"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          >
            {navLinks.map(({ label, href }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`link-underline text-sm tracking-wider uppercase font-medium transition-colors duration-300 ${
                    isActive ? 'text-gold' : 'theme-muted hover:theme-text'
                  }`}
                  style={{ letterSpacing: '0.1em', fontSize: '0.78rem' }}
                >
                  {label}
                  {isActive && (
                    <span
                      className="absolute left-0 bottom-0 w-full h-px"
                      style={{ background: 'var(--gold)' }}
                    />
                  )}
                </Link>
              );
            })}

            {/* CV Link */}
            <Link
              href="/cv"
              className="btn-outline text-xs py-2 px-5"
              style={{ letterSpacing: '0.12em' }}
            >
              CV
            </Link>

            {/* Theme Toggle */}
            <button
              id="theme-toggle"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="theme-muted hover:text-gold transition-colors duration-300 ml-2 flex items-center"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={theme}
                  initial={{ opacity: 0, rotate: -30, scale: 0.7 }}
                  animate={{ opacity: 1, rotate: 0,   scale: 1 }}
                  exit={{    opacity: 0, rotate:  30, scale: 0.7 }}
                  transition={{ duration: 0.25 }}
                >
                  {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
                </motion.span>
              </AnimatePresence>
            </button>
          </motion.nav>

          {/* Mobile Controls */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="theme-muted hover:text-gold transition-colors duration-300"
            >
              {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              className="theme-muted hover:text-gold transition-colors duration-300 flex flex-col gap-1.5 w-6"
            >
              <span className={`block h-px w-full bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block h-px w-full bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-px w-full bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1,  y: 0   }}
            exit={{    opacity: 0,  y: -16  }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
            className="fixed top-[73px] left-0 right-0 z-40 border-b theme-border"
            style={{ backgroundColor: 'var(--bg)', boxShadow: 'var(--shadow-md)' }}
          >
            <nav className="max-w-6xl mx-auto px-6 py-8 flex flex-col gap-6">
              {navLinks.map(({ label, href }) => {
                const isActive = pathname === href;
                return (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`text-sm tracking-widest uppercase font-medium transition-colors duration-300 ${
                      isActive ? 'text-gold' : 'theme-muted hover:theme-text'
                    }`}
                    style={{ letterSpacing: '0.14em' }}
                  >
                    {label}
                  </Link>
                );
              })}
              <Link
                href="/cv"
                onClick={() => setIsMenuOpen(false)}
                className="btn-outline text-xs self-start py-2 px-5"
                style={{ letterSpacing: '0.12em' }}
              >
                View CV
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
