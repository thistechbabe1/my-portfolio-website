'use client';
import React from 'react';
import { FaLinkedin, FaPhoneAlt } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { BsTwitterX } from 'react-icons/bs';
import { motion } from 'framer-motion';

const Footer = () => {
  const iconVariants = {
    initial: { scale: 1, opacity: 0.8 },
    hover: { scale: 1.3, opacity: 1, rotate: 15 },
    tap: { scale: 1.1, rotate: 0 },
  };

  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      animate="visible"
      className="relative bg-dark-primary text-text-muted py-8 text-center shadow-inner"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-10 mb-4">
          <motion.a
            href="https://www.linkedin.com/in/sharon-lawal-9b7289261/"
            className="text-3xl text-text-muted hover:text-accent-green transition duration-300"
            variants={iconVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </motion.a>

          <motion.a
            href="tel:09134180175"
            className="text-3xl text-text-muted hover:text-accent-green transition duration-300"
            variants={iconVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
          >
            <FaPhoneAlt />
          </motion.a>

          <motion.a
            href="https://x.com/thistechbabe"
            className="text-3xl text-text-muted hover:text-accent-green transition duration-300"
            variants={iconVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsTwitterX />
          </motion.a>

          <motion.a
            href="mailto:sharonayolawal@gmail.com"
            className="text-3xl text-text-muted hover:text-accent-green transition duration-300"
            variants={iconVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
          >
            <SiGmail />
          </motion.a>
        </div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Sharon Lawal. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;