'use client';
import React from 'react';
import Link from 'next/link';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { BsTwitterX } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';

const socialLinks = [
  {
    icon: <FaLinkedin size={17} />,
    href: 'https://www.linkedin.com/in/sharon-lawal-9b7289261/',
    label: 'LinkedIn',
  },
  {
    icon: <FaGithub size={17} />,
    href: 'https://github.com/SharonLawal',
    label: 'GitHub',
  },
  {
    icon: <BsTwitterX size={15} />,
    href: 'https://x.com/thistechbabe',
    label: 'X / Twitter',
  },
  {
    icon: <SiGmail size={15} />,
    href: 'mailto:sharonayolawal@gmail.com',
    label: 'Email',
  },
];

const Footer = () => (
  <footer
    className="py-10 border-t theme-border"
    style={{ backgroundColor: 'var(--bg)' }}
  >
    <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">

      {/* Left — name + copyright */}
      <div>
        <Link
          href="/"
          className="font-display text-base tracking-widest uppercase hover:text-gold transition-colors duration-300"
          style={{ fontWeight: 400, letterSpacing: '0.16em', color: 'var(--text-muted)' }}
        >
          Sharon Lawal
        </Link>
        <p className="text-xs mt-1" style={{ color: 'var(--text-faint)', letterSpacing: '0.04em' }}>
          © {new Date().getFullYear()} · All rights reserved
        </p>
      </div>

      {/* Right — social icons */}
      <div className="flex items-center gap-5">
        {socialLinks.map(({ icon, href, label }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel="noopener noreferrer"
            className="transition-colors duration-300 hover:text-gold"
            style={{ color: 'var(--text-faint)' }}
          >
            {icon}
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;