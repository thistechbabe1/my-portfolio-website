'use client';
import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Image from 'next/image';
import { projects } from '../lib/data'; // Import projects from data.js

const Projects = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading if projects were fetched from an API
    // Since projects are static, we can just set loading to false after a small delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500); // Simulate a small loading delay
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <section id="projects" className="py-12 bg-transparent text-center text-text-light min-h-[400px] flex items-center justify-center">
        <div className="flex items-center justify-center space-x-2">
          <div className="w-4 h-4 rounded-full bg-accent-green animate-bounce delay-75"></div>
          <div className="w-4 h-4 rounded-full bg-accent-purple animate-bounce delay-150"></div>
          <div className="w-4 h-4 rounded-full bg-accent-green-light animate-bounce delay-225"></div>
          <p className="ml-4 text-xl">Loading projects...</p>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-12 bg-transparent">
      <div className="container mx-auto px-6">
        <motion.p
          className="text-lg font-medium text-accent-green text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Browse My Recent
        </motion.p>

        <motion.h1
          className="text-4xl font-bold text-text-light text-center mt-2"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Projects
        </motion.h1>

        <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3"> {/* Increased gap */}
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-dark-secondary rounded-lg shadow-md overflow-hidden flex flex-col justify-between
                         border-2 border-dark-tertiary group // Added group for hover effects
                         hover:border-accent-green hover:shadow-xl hover:scale-[1.02] hover:-translate-y-2 // Added hover effects
                         transition-all duration-300" // Smooth transition
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 * index }} // Staggered animation
              style={{ height: '100%' }}
            >
              {project.image && ( // Changed from imageUrl to image
                <div className="relative w-full h-48 sm:h-56 md:h-64 overflow-hidden bg-dark-tertiary flex items-center justify-center">
                  <Image
                    src={project.image}// Prepend '/' to construct public path
                    alt={project.title}
                    fill // Fills the parent div
                    className="object-cover object-center group-hover:scale-110 transition-transform duration-500" // Image zoom on hover
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Optimize image loading
                    quality={75} // Image quality
                    onError={(e) => { e.target.src = "/assets/images/il.png"; e.target.alt = "Image not found"; }} // Fallback to public path
                  />
                </div>
              )}
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-semibold text-accent-green text-center mb-3">{project.title}</h3>
                {/* Changed description rendering to a single paragraph */}
                <p className="text-text-muted mb-4 px-2 text-left leading-relaxed">
                  {project.description}
                </p>

                {project.languagesUsed && project.languagesUsed.length > 0 && (
                  <div className="mt-auto pt-4 border-t border-accent-green-dark"> {/* Added top border for separation */}
                    <p className="text-sm font-semibold text-text-light mb-2 text-center">Languages/Technologies Used:</p>
                    <div className="flex flex-wrap justify-center gap-2 text-sm text-text-light">
                      {project.languagesUsed.map((lang, i) => (
                        <span key={i} className="bg-dark-tertiary px-3 py-1 rounded-full border border-dark-secondary">
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <div className="p-6 flex justify-around items-center border-t border-accent-green-light"> {/* Border top */}
                <a
                  href={project.githubLink}
                  className="text-accent-green hover:text-accent-green-dark transition duration-300 flex items-center space-x-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub size={20} />
                  <span>GitHub</span>
                </a>
                <a
                  href={project.liveLink}
                  className="text-accent-green hover:text-accent-green-dark transition duration-300 flex items-center space-x-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaExternalLinkAlt size={20} />
                  <span>Live Demo</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
