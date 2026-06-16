'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { technologiesCategories } from '../lib/data';

const Technologies = () => {
  return (
    <section id="technologies" className="py-20 theme-bg theme-text">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-divider mb-6" />
          <p
            className="text-xs tracking-[0.22em] uppercase mb-3 font-medium"
            style={{ color: 'var(--text-muted)' }}
          >
            What I work with
          </p>
          <h2
            className="font-display leading-tight"
            style={{ fontSize: 'clamp(2.2rem, 4vw, 3.4rem)', fontWeight: 500, color: 'var(--text)' }}
          >
            Technologies & Tools
          </h2>
        </motion.div>

        {/* Categories */}
        <div className="space-y-10">
          {technologiesCategories.map((cat, catIdx) => (
            <div key={catIdx}>
              <p
                className="text-xs tracking-[0.18em] uppercase mb-4 font-medium"
                style={{ color: 'var(--text-faint)' }}
              >
                {cat.category}
              </p>
              <div className="flex flex-wrap gap-3">
                {cat.items.map((tech, itemIdx) => (
                  <motion.div
                    key={itemIdx}
                    className="flex items-center gap-2 px-4 py-2.5 border"
                    style={{
                      borderColor: 'var(--border)',
                      backgroundColor: 'var(--bg-surface)',
                      color: 'var(--text-muted)',
                      fontSize: '0.8rem',
                      cursor: 'default',
                      transition: 'border-color 0.3s, color 0.3s',
                    }}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: itemIdx * 0.04 }}
                    whileHover={{
                      borderColor: 'var(--gold)',
                      color: 'var(--gold)',
                    }}
                  >
                    <span style={{ fontSize: '1rem' }}>{tech.icon}</span>
                    <span style={{ letterSpacing: '0.03em' }}>{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
