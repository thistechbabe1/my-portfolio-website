'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { projects } from '../lib/data';

const fadeUp = {
  hidden:  { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 theme-text">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          className="mb-14"
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
            Selected Work
          </p>
          <h2
            className="font-display leading-tight"
            style={{ fontSize: 'clamp(2.2rem, 4vw, 3.4rem)', fontWeight: 500, color: 'var(--text)' }}
          >
            Projects
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.article
              key={index}
              className="card flex flex-col overflow-hidden group"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: index * 0.08 }}
            >
              {/* Image */}
              {project.image && (
                <div className="relative w-full h-48 overflow-hidden" style={{ backgroundColor: 'var(--bg-elevated)' }}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    quality={75}
                    onError={(e) => { e.target.src = '/assets/images/il.png'; }}
                  />
                </div>
              )}

              {/* Body */}
              <div className="p-6 flex flex-col flex-grow">
                <p
                  className="text-xs tracking-[0.14em] uppercase mb-1.5"
                  style={{ color: 'var(--gold)', letterSpacing: '0.1em' }}
                >
                  {project.subtitle}
                </p>
                <h3
                  className="font-display text-xl mb-3"
                  style={{ fontWeight: 500, color: 'var(--text)' }}
                >
                  {project.title}
                </h3>
                <p
                  className="text-sm leading-relaxed flex-grow"
                  style={{ color: 'var(--text-muted)' }}
                >
                  {project.description}
                </p>

                {/* Tags */}
                {project.tags && project.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t" style={{ borderColor: 'var(--border)' }}>
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1"
                        style={{
                          border: '1px solid var(--border)',
                          color: 'var(--text-faint)',
                          letterSpacing: '0.04em',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Links */}
                <div className="flex gap-5 mt-5 pt-4 border-t" style={{ borderColor: 'var(--border)' }}>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs tracking-wider uppercase link-underline transition-colors duration-300 font-medium"
                    style={{ color: 'var(--text-muted)', letterSpacing: '0.1em' }}
                  >
                    <FaGithub size={13} />
                    GitHub
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs tracking-wider uppercase link-underline transition-colors duration-300 font-medium"
                    style={{ color: 'var(--gold)', letterSpacing: '0.1em' }}
                  >
                    <FaExternalLinkAlt size={11} />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
