'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full flex justify-between items-center px-6 py-4 bg-dark-primary shadow-lg z-50">
      <motion.div
        className="flex items-center"
        initial={{ y: -250 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 50 }}
      >
        <div className="flex items-center">
          <img
            src="/favicon.svg"
            alt="Favicon"
            width={24}
            height={24}
            className="mr-2 rounded-full"
            priority
          />
          <Link href="/" className="text-xl font-bold text-text-light hover:text-accent-green">
            SHARON LAWAL
          </Link>
        </div>
      </motion.div>

      <div className="lg:hidden flex items-center">
        <button onClick={toggleMenu} className="text-text-light">
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      <nav className={`lg:flex flex-col lg:flex-row lg:space-x-6 lg:items-center transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'} fixed lg:static top-16 right-0 bg-dark-secondary lg:bg-transparent lg:shadow-none shadow-lg lg:p-0 p-6 space-y-4 lg:space-y-0 rounded-3xl`}>
        <ul className="flex flex-col lg:flex-row lg:space-x-6 space-y-4 lg:space-y-0">
          <li>
            <Link
              href="/"
              className="relative inline-block text-text-light font-medium hover:text-accent-green group"
              style={{ paddingBottom: '2px' }}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
              <span className="absolute left-0 bottom-0 block bg-accent-green transition-transform duration-300 transform scale-x-0 group-hover:scale-x-100" style={{ height: '2px', width: '100%', transformOrigin: 'bottom left' }}></span>
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="relative inline-block text-text-light font-medium hover:text-accent-green group"
              style={{ paddingBottom: '2px' }}
              onClick={() => setIsMenuOpen(false)}
            >
              About me
              <span className="absolute left-0 bottom-0 block bg-accent-green transition-transform duration-300 transform scale-x-0 group-hover:scale-x-100" style={{ height: '2px', width: '100%', transformOrigin: 'bottom left' }}></span>
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className="relative inline-block text-text-light font-medium hover:text-accent-green group"
              style={{ paddingBottom: '2px' }}
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
              <span className="absolute left-0 bottom-0 block bg-accent-green transition-transform duration-300 transform scale-x-0 group-hover:scale-x-100" style={{ height: '2px', width: '100%', transformOrigin: 'bottom left' }}></span>
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="relative inline-block text-text-light font-medium hover:text-accent-green group"
              style={{ paddingBottom: '2px' }}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact me
              <span className="absolute left-0 bottom-0 block bg-accent-green transition-transform duration-300 transform scale-x-0 group-hover:scale-x-100" style={{ height: '2px', width: '100%', transformOrigin: 'bottom left' }}></span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
