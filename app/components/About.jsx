'use client';
import React from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const skills = [
  'JavaScript', 'TypeScript', 'React', 'Angular', 'Next.js',
  'Node.js', 'REST APIs', 'MongoDB', 'Firebase', 'Tailwind CSS',
  'Git / GitHub / GitLab', 'Agile', 'Project Management',
];

const About = () => {
  return (
    <section id="about" className="py-24 theme-bg theme-text">
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
            className="text-xs tracking-[0.22em] uppercase mb-3 font-medium"
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
            <p className="text-base leading-[1.85]" style={{ color: 'var(--text-muted)' }}>
              I&apos;m <strong className="font-medium" style={{ color: 'var(--text)' }}>Sharon Lawal</strong>, a final-year
              Software Engineering student at Babcock University (expected July 2026), with hands-on
              frontend engineering experience at Remita Payment Services Limited.
            </p>
            <p className="text-base leading-[1.85]" style={{ color: 'var(--text-muted)' }}>
              Proficient in <span style={{ color: 'var(--gold)' }}>Angular, React, and TypeScript</span>, I
              specialise in building clean, responsive interfaces and integrating backend systems.
              I bring a complementary background in <span style={{ color: 'var(--gold)' }}>operations and project management</span>,
              demonstrated through leading cross-functional teams for large-scale technical events.
            </p>
            <p className="text-base leading-[1.85]" style={{ color: 'var(--text-muted)' }}>
              I&apos;m seeking graduate opportunities at the intersection of software engineering and
              technical leadership — where I can build both great products and great teams.
            </p>

            {/* Education block */}
            <div
              className="mt-8 pt-8 border-t"
              style={{ borderColor: 'var(--border)' }}
            >
              <p
                className="text-xs tracking-[0.18em] uppercase mb-3 font-medium"
                style={{ color: 'var(--text-muted)' }}
              >
                Education
              </p>
              <p className="font-display text-xl" style={{ fontWeight: 500 }}>
                B.Sc. Software Engineering
              </p>
              <p className="text-sm mt-1" style={{ color: 'var(--text-muted)' }}>
                Babcock University · Ilishan-Remo, Nigeria
              </p>
              <p className="text-sm mt-0.5" style={{ color: 'var(--text-faint)' }}>
                Expected July 2026 · GPA 4.58 / 5.00
              </p>
            </div>
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
              {[
                { value: '2+',  label: 'Years of\nCoding' },
                { value: '5+',  label: 'Projects\nDelivered' },
                { value: '3+',  label: 'Community\nRoles' },
              ].map(({ value, label }) => (
                <div key={label} className="text-center">
                  <p
                    className="font-display text-3xl"
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
