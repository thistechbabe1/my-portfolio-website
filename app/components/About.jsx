'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { siteConfig, skills, stats } from '../lib/data';

const fadeUp = {
  hidden:  { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

const About = () => {
  return (
    <section id="about" className="py-24 theme-text">
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
            Get to know me
          </p>
          <h2
            className="font-display leading-tight"
            style={{ fontSize: 'clamp(2.2rem, 4vw, 3.4rem)', fontWeight: 500, color: 'var(--text)' }}
          >
            About Me
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Bio */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-5"
          >
            {siteConfig.bio.map((para, idx) => (
              <p key={idx} className="text-base leading-[1.85]" style={{ color: 'var(--text-muted)' }}>
                {para}
              </p>
            ))}
          </motion.div>

          {/* Skills */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.15 }}
          >
            <p
              className="text-xs tracking-[0.18em] uppercase mb-5 font-medium"
              style={{ color: 'var(--text-muted)' }}
            >
              Technical Skills
            </p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs px-3 py-1.5 border"
                  style={{
                    borderColor: 'var(--border-gold)',
                    color: 'var(--text-muted)',
                    backgroundColor: 'var(--gold-subtle)',
                    letterSpacing: '0.04em',
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Quick stats */}
            <div
              className="mt-10 grid grid-cols-3 gap-4 pt-8 border-t"
              style={{ borderColor: 'var(--border)' }}
            >
              {stats.map(({ value, label }) => (
                <div key={label} className="text-center">
                  <p
                    className="font-display text-5xl"
                    style={{ fontWeight: 400, color: 'var(--gold)' }}
                  >
                    {value}
                  </p>
                  <p
                    className="text-xs mt-1 leading-snug whitespace-pre-line"
                    style={{ color: 'var(--text-faint)', letterSpacing: '0.04em' }}
                  >
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
