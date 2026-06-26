'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { education } from '../lib/data';

const fadeUp = {
  hidden:  { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

const Education = () => {
  return (
    <section id="education" className="py-24 theme-text">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          className="mb-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className="section-divider mb-6" />
          <p
            className="text-xs tracking-[0.14em] uppercase mb-3 font-medium"
            style={{ color: 'var(--text-muted)' }}
          >
            Academics
          </p>
          <h2
            className="font-display leading-tight"
            style={{ fontSize: 'clamp(2.2rem, 4vw, 3.4rem)', fontWeight: 500, color: 'var(--text)' }}
          >
            Education
          </h2>
        </motion.div>

        {/* Content */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-3xl"
        >
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
            <div>
              <h3 className="font-display text-2xl md:text-3xl" style={{ fontWeight: 500, color: 'var(--text)' }}>
                {education.degree}
              </h3>
              <p className="text-base mt-2" style={{ color: 'var(--gold)', fontWeight: 500 }}>
                {education.school}
              </p>
              <p className="text-sm mt-0.5" style={{ color: 'var(--text-faint)' }}>
                {education.location}
              </p>
            </div>
            <span
              className="text-sm font-medium px-3 py-1 border self-start md:self-auto"
              style={{
                borderColor: 'var(--border-gold)',
                color: 'var(--gold)',
                backgroundColor: 'var(--gold-subtle)',
                letterSpacing: '0.06em',
              }}
            >
              {education.period}
            </span>
          </div>

          <ul className="space-y-4 pt-4 border-t" style={{ borderColor: 'var(--border)' }}>
            {education.details.map((detail, i) => (
              <li key={i} className="text-sm leading-relaxed flex gap-3" style={{ color: 'var(--text-muted)' }}>
                <span style={{ color: 'var(--gold)', marginTop: '0.35rem', flexShrink: 0, fontSize: '0.45rem' }}>◆</span>
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </motion.div>

      </div>
    </section>
  );
};

export default Education;
