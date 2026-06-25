'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { experiences } from '../lib/data';

const fadeUp = {
  hidden:  { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

const TimelineItem = ({ exp, index }) => (
  <motion.div
    className="relative pl-8 pb-10 last:pb-0"
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    transition={{ delay: index * 0.06 }}
  >
    <div className="absolute left-0 top-0 bottom-0 w-px" style={{ background: 'var(--border)' }} />
    <div className="absolute left-[-3px] top-[6px] w-[7px] h-[7px] rounded-full" style={{ background: 'var(--gold)' }} />

    <div>
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
        <h3 className="text-base sm:text-lg font-semibold" style={{ color: 'var(--text)' }}>
          {exp.title}
        </h3>
        <span className="text-xs tracking-wider whitespace-nowrap shrink-0" style={{ color: 'var(--text-faint)', letterSpacing: '0.06em' }}>
          {exp.duration}
        </span>
      </div>
      <p className="text-sm mb-3 font-medium" style={{ color: 'var(--gold)' }}>
        {exp.company}
        {exp.location && <span style={{ color: 'var(--text-faint)', fontWeight: 400 }}> · {exp.location}</span>}
      </p>
      <ul className="space-y-1.5">
        {exp.description.map((point, i) => (
          <li key={i} className="text-sm leading-relaxed flex gap-2" style={{ color: 'var(--text-muted)' }}>
            <span style={{ color: 'var(--gold)', marginTop: '0.35rem', flexShrink: 0, fontSize: '0.45rem' }}>◆</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);

const Experience = () => {
  const [activeTab, setActiveTab] = useState('professional');
  const professional = experiences.filter(e => e.type === 'professional');
  const community    = experiences.filter(e => e.type === 'community');
  const displayed    = activeTab === 'professional' ? professional : community;

  return (
    <section id="experience" className="py-24 theme-text">
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          className="mb-14"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className="section-divider mb-6" />
          <p className="text-xs tracking-[0.14em] uppercase mb-3 font-medium" style={{ color: 'var(--text-muted)' }}>
            My Journey
          </p>
          <h2
            className="font-display leading-tight"
            style={{ fontSize: 'clamp(2.2rem, 4vw, 3.4rem)', fontWeight: 500, color: 'var(--text)' }}
          >
            Experience
          </h2>
        </motion.div>

        {/* Tabs */}
        <div className="flex gap-6 mb-12 border-b" style={{ borderColor: 'var(--border)' }}>
          {[
            { key: 'professional', label: 'Professional' },
            { key: 'community',    label: 'Leadership & Community' },
          ].map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className="pb-3 text-sm font-medium tracking-wide transition-colors duration-300 relative"
              style={{
                color: activeTab === key ? 'var(--gold)' : 'var(--text-faint)',
                letterSpacing: '0.06em',
              }}
            >
              {label}
              {activeTab === key && (
                <motion.span
                  layoutId="tab-indicator"
                  className="absolute bottom-0 left-0 w-full h-px"
                  style={{ background: 'var(--gold)' }}
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Timeline — AnimatePresence for smooth tab switch */}
        <div className="max-w-3xl overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{    opacity: 0 }}
              transition={{ duration: 0.32, ease: 'easeOut' }}
            >
              {displayed.map((exp, i) => (
                <TimelineItem key={`${exp.title}-${i}`} exp={exp} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default Experience;
