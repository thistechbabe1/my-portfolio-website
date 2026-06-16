'use client';
import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import profilePic from '../assets/ProfilePic.jpg';
import AnimatedBackground from './AnimatedBackground';

const roles = ['Software Engineer', 'Project Manager', 'Frontend Developer'];
const TYPING_SPEED   = 120;
const DELETING_SPEED = 60;
const PAUSE_DURATION = 2000;

const ArrowRight = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/>
    <polyline points="12 5 19 12 12 19"/>
  </svg>
);

const Profile = () => {
  const [currentText, setCurrentText] = useState('');
  const [roleIndex,   setRoleIndex]   = useState(0);
  const [charIndex,   setCharIndex]   = useState(0);
  const [isDeleting,  setIsDeleting]  = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const handleTyping = () => {
      if (isDeleting) {
        if (charIndex > 0) {
          setCurrentText(currentRole.substring(0, charIndex - 1));
          setCharIndex(c => c - 1);
        } else {
          setIsDeleting(false);
          setRoleIndex(i => (i + 1) % roles.length);
        }
      } else {
        if (charIndex < currentRole.length) {
          setCurrentText(currentRole.substring(0, charIndex + 1));
          setCharIndex(c => c + 1);
        } else {
          setTimeout(() => setIsDeleting(true), PAUSE_DURATION);
          return;
        }
      }
    };
    const timer = setTimeout(handleTyping, isDeleting ? DELETING_SPEED : TYPING_SPEED);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);

  const longestRole = useMemo(() =>
    roles.reduce((a, b) => (b.length > a.length ? b : a), ''), []);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };
  const itemVariants = {
    hidden:  { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <div className="relative min-h-screen flex items-center">
      <AnimatedBackground />

      <div className="max-w-6xl mx-auto px-6 w-full py-20">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16">

          {/* ── Text Column ── */}
          <motion.div
            className="w-full lg:w-[55%] text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Eyebrow */}
            <motion.p
              variants={itemVariants}
              className="text-sm tracking-[0.22em] uppercase mb-4 font-medium"
              style={{ color: 'var(--text-muted)' }}
            >
              Hello, I&apos;m
            </motion.p>

            {/* Name */}
            <motion.h1
              variants={itemVariants}
              className="font-display leading-[1.05] mb-4"
              style={{
                fontSize: 'clamp(3rem, 6vw, 5.5rem)',
                fontWeight: 500,
                color: 'var(--text)',
                letterSpacing: '-0.01em',
              }}
            >
              Sharon Lawal
            </motion.h1>

            {/* Typing role */}
            <motion.div
              variants={itemVariants}
              className="relative mb-8 flex items-center justify-center lg:justify-start"
              style={{ minHeight: '2.4rem' }}
            >
              {/* Invisible spacer to hold width */}
              <span
                className="invisible absolute pointer-events-none text-lg font-medium"
                style={{ letterSpacing: '0.01em' }}
              >
                {longestRole}
              </span>
              <span
                className="text-lg font-medium"
                style={{ color: 'var(--gold)', letterSpacing: '0.01em' }}
              >
                {currentText}
                <span
                  className="inline-block ml-0.5 animate-cursor-blink"
                  style={{
                    width: '2px',
                    height: '1.1em',
                    background: 'var(--gold)',
                    verticalAlign: 'text-bottom',
                    display: 'inline-block',
                    animation: 'cursorBlink 1.1s step-end infinite',
                  }}
                />
              </span>
            </motion.div>

            {/* Short bio */}
            <motion.p
              variants={itemVariants}
              className="text-base leading-relaxed mb-10 max-w-lg mx-auto lg:mx-0"
              style={{ color: 'var(--text-muted)' }}
            >
              Final-year Software Engineering student at Babcock University with frontend
              engineering experience and a strong record of technical community leadership.
              Passionate about building impactful digital experiences.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link href="/cv" className="btn-solid">
                View CV <ArrowRight />
              </Link>
              <Link href="/projects" className="btn-outline">
                See Projects
              </Link>
            </motion.div>

            {/* Social links row */}
            <motion.div
              variants={itemVariants}
              className="mt-10 flex gap-6 justify-center lg:justify-start text-xs tracking-widest uppercase"
              style={{ color: 'var(--text-faint)' }}
            >
              <a
                href="https://www.linkedin.com/in/sharon-lawal-9b7289261/"
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline hover:text-gold transition-colors duration-300"
                style={{ color: 'var(--text-muted)' }}
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/SharonLawal"
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline hover:text-gold transition-colors duration-300"
                style={{ color: 'var(--text-muted)' }}
              >
                GitHub
              </a>
              <a
                href="mailto:sharonayolawal@gmail.com"
                className="link-underline hover:text-gold transition-colors duration-300"
                style={{ color: 'var(--text-muted)' }}
              >
                Email
              </a>
            </motion.div>
          </motion.div>

          {/* ── Photo Column ── */}
          <motion.div
            className="w-64 h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 flex-shrink-0"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <motion.div
              className="w-full h-full rounded-full overflow-hidden"
              style={{
                boxShadow: '0 0 0 1px var(--border-gold), 0 0 0 8px var(--gold-subtle)',
              }}
              animate={{ y: ['0%', '-3%', '0%'] }}
              transition={{
                duration: 5,
                ease: 'easeInOut',
                repeat: Infinity,
                repeatType: 'mirror',
              }}
            >
              <Image
                src={profilePic}
                alt="Sharon Lawal"
                className="w-full h-full object-cover"
                style={{ objectPosition: 'top' }}
                priority
              />
            </motion.div>
          </motion.div>

        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          style={{ color: 'var(--text-faint)' }}
        >
          <span className="text-xs tracking-[0.2em] uppercase">Scroll</span>
          <motion.div
            className="w-px h-10"
            style={{ background: 'linear-gradient(to bottom, var(--gold), transparent)' }}
            animate={{ scaleY: [0, 1, 0], originY: 0 }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Profile;
