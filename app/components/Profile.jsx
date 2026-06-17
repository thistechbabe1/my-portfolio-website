'use client';
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { BsTwitterX } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import profilePic from '../assets/ProfilePic.jpg';
import AnimatedBackground from './AnimatedBackground';
import OrbitingIcons from './OrbitingIcons';
import { siteConfig, roles, socialLinks } from '../lib/data';

const TYPING_SPEED   = 120;
const DELETING_SPEED = 60;
const PAUSE_DURATION = 2000;

// Orbit radius passed to OrbitingIcons — kept in sync here and in OrbitingIcons.jsx
export const ORBIT_RADIUS = 148;

const ArrowRight = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/>
    <polyline points="12 5 19 12 12 19"/>
  </svg>
);

const getSocialIcon = (platform) => {
  switch (platform) {
    case 'linkedin':
      return <FaLinkedinIn size={16} />;
    case 'github':
      return <FaGithub size={16} />;
    case 'twitter':
      return <BsTwitterX size={15} />;
    case 'email':
      return <MdEmail size={18} />;
    default:
      return null;
  }
};

const Profile = () => {
  const [currentText, setCurrentText] = useState('');
  const roleIndexRef  = useRef(0);
  const charIndexRef  = useRef(0);
  const isDeletingRef = useRef(false);

  useEffect(() => {
    let timer;
    const tick = () => {
      const currentRole = roles[roleIndexRef.current];
      const isDeleting  = isDeletingRef.current;
      const charIndex   = charIndexRef.current;
      if (isDeleting) {
        if (charIndex > 0) {
          charIndexRef.current -= 1;
          setCurrentText(currentRole.substring(0, charIndexRef.current));
          timer = setTimeout(tick, DELETING_SPEED);
        } else {
          isDeletingRef.current = false;
          roleIndexRef.current  = (roleIndexRef.current + 1) % roles.length;
          charIndexRef.current  = 0;
          timer = setTimeout(tick, TYPING_SPEED);
        }
      } else {
        if (charIndex < currentRole.length) {
          charIndexRef.current += 1;
          setCurrentText(currentRole.substring(0, charIndexRef.current));
          timer = setTimeout(tick, TYPING_SPEED);
        } else {
          timer = setTimeout(() => { isDeletingRef.current = true; tick(); }, PAUSE_DURATION);
        }
      }
    };
    timer = setTimeout(tick, TYPING_SPEED);
    return () => clearTimeout(timer);
  }, []);

  const longestRole = useMemo(() => roles.reduce((a, b) => (b.length > a.length ? b : a), ''), []);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };
  const itemVariants = {
    hidden:  { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section
      id="home"
      className="relative flex items-center min-h-[calc(100vh-80px)] lg:h-[calc(100vh-80px)] lg:max-h-[calc(100vh-80px)] overflow-y-auto lg:overflow-hidden py-12 lg:py-0"
    >
      <AnimatedBackground />

      <div
        className="max-w-6xl mx-auto px-6 w-full"
        style={{ paddingTop: '24px', paddingBottom: '24px' }}
      >
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-12 h-full">

          {/* ── Text Column ── */}
          <motion.div
            className="w-full lg:w-[54%] text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.p
              variants={itemVariants}
              className="text-sm tracking-[0.14em] uppercase mb-3 font-medium"
              style={{ color: 'var(--text-muted)' }}
            >
              Hello, I&apos;m
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="font-display leading-[1.05] mb-3"
              style={{
                fontSize: 'clamp(3.2rem, 6vw, 6rem)',
                fontWeight: 500,
                color: 'var(--text)',
                letterSpacing: '-0.02em',
              }}
            >
              {siteConfig.name}
            </motion.h1>

            {/* Typing role */}
            <motion.div
              variants={itemVariants}
              className="relative mb-5 flex items-center justify-center lg:justify-start"
              style={{ minHeight: '2rem' }}
            >
              <span
                className="invisible absolute pointer-events-none font-medium"
                style={{ fontSize: '1.25rem', letterSpacing: '0.01em' }}
              >
                {longestRole}
              </span>
              <span
                className="font-medium"
                style={{ fontSize: '1.25rem', color: 'var(--gold)', letterSpacing: '0.01em' }}
              >
                {currentText}
                <span
                  style={{
                    width: '2px',
                    height: '1em',
                    background: 'var(--gold)',
                    verticalAlign: 'text-bottom',
                    display: 'inline-block',
                    marginLeft: '2px',
                    animation: 'cursorBlink 1.1s step-end infinite',
                  }}
                />
              </span>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-base leading-relaxed mb-7 max-w-lg mx-auto lg:mx-0"
              style={{ color: 'var(--text-muted)' }}
            >
              {siteConfig.tagline}
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center sm:flex-row sm:justify-center lg:justify-start lg:items-start gap-3"
            >
              <Link href="/cv" className="btn-solid">
                View CV <ArrowRight />
              </Link>
              <a
                href="#projects"
                className="btn-outline"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                See Projects
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              variants={itemVariants}
              className="mt-7 flex gap-4 justify-center lg:justify-start"
            >
              {socialLinks.map(({ label, href, platform }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors duration-300"
                  style={{
                    width: '38px',
                    height: '38px',
                    border: '1px solid var(--border-gold)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text-muted)',
                  }}
                >
                  {getSocialIcon(platform)}
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Photo + Orbit Column ── */}
          <motion.div
            className="relative flex items-center justify-center flex-shrink-0 w-[240px] h-[240px] lg:w-[340px] lg:h-[340px]"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          >
            {/* Decorative orbit ring — desktop only */}
            <div
              className="hidden lg:block absolute pointer-events-none rounded-full"
              style={{
                inset: '22px',          // pulls ring inward to icon centres
                border: '1px dashed var(--border-gold)',
                opacity: 0.32,
              }}
            />

            {/* Profile photo */}
            <motion.div
              className="rounded-full overflow-hidden relative z-10"
              style={{
                width: '180px',
                height: '180px',
                width: '220px',
                height: '220px',
                boxShadow: '0 0 0 1px var(--border-gold), 0 0 0 7px var(--gold-subtle)',
              }}
              animate={{ y: ['0%', '-3%', '0%'] }}
              transition={{ duration: 5, ease: 'easeInOut', repeat: Infinity, repeatType: 'mirror' }}
            >
              <Image
                src={profilePic}
                alt={siteConfig.name}
                className="w-full h-full object-cover"
                style={{ objectPosition: 'top' }}
                priority
              />
            </motion.div>

            {/* Orbiting icons — desktop only */}
            <OrbitingIcons radius={ORBIT_RADIUS} />
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Profile;
