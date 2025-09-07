'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCode } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="py-16 bg-transparent text-text-light">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="text-xl font-semibold text-accent-green">Get To Know More</p>
          <h1 className="text-4xl font-bold mt-2">About Me</h1>
        </motion.div>

        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row lg:space-x-8 items-start">

          <motion.div
            className="w-full lg:w-1/2 mb-8 lg:mb-0 flex flex-col space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="bg-dark-secondary rounded-lg shadow-xl p-6 border-2 border-dark-tertiary flex items-center space-x-4">
              <div className="text-accent-green text-4xl p-3 rounded-full bg-dark-tertiary-lighter flex items-center justify-center border border-accent-green">
                <FaGraduationCap />
              </div>
              <div>
                <h3 className="text-2xl font-semibold">Education</h3>
                <p className="text-text-muted">B.Sc. Software Engineering</p>
                <p className="text-text-muted">Babcock University (Expected Graduation in 2026)</p>
              </div>
            </div>

            <div className="bg-dark-secondary rounded-lg shadow-xl p-6 border-2 border-dark-tertiary flex items-center space-x-4">
              <div className="text-accent-purple text-4xl p-3 rounded-full bg-dark-tertiary-lighter flex items-center justify-center border border-accent-purple">
                <FaCode />
              </div>
              <div>
                <h3 className="text-2xl font-semibold">Experience</h3>
                <p className="text-text-muted">Frontend & Backend Development</p>
                <p className="text-text-muted">API Integration & Testing</p>
                <p className="text-text-muted">Version Control (GitLab, GitHub)</p>
              </div>
            </div>

          </motion.div>

          <motion.div
            className="w-full lg:w-1/2 flex flex-col justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="text-lg leading-relaxed text-justify mb-4">
              I'm <strong className="text-accent-green-light">Sharon Lawal</strong>, a highly motivated Software Engineer student passionate about building impactful web solutions. With hands-on experience in both <strong className="text-accent-green">frontend and backend development</strong>, I excel at crafting intuitive user interfaces and seamlessly integrating robust backend systems. My expertise spans across Angular, React, Node.js, Python, and modern databases.
            </p>
            <p className="text-lg leading-relaxed text-justify">
              Beyond coding, I bring a strong foundation in <strong className="text-accent-green">project management</strong>, demonstrated by overseeing projects and coordinating cross-functional teams to ensure successful, on-time deliveries. My proactive approach to problem-solving, coupled with a dedication to continuous learning and agile methodologies, drives me to deliver comprehensive and effective software solutions that meet user needs.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
