'use client';
import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="py-12 bg-transparent">
      <div className="text-center mb-10">
        <p className="text-lg font-semibold text-accent-green">Get To Know More</p>
        <h1 className="text-4xl font-bold text-text-light mt-4">About Me</h1>
      </div>

      <div className="max-w-3xl mx-auto px-6">
        <div className="mb-8">
          <div className="flex items-center space-x-4">
            <div className="text-accent-green text-4xl p-3 rounded-full bg-dark-tertiary flex items-center justify-center border border-accent-green">
              <FaGraduationCap />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-text-light">Education</h3>
              <p className="text-text-muted">
                B.Sc. Bachelor's Degree (In Progress)
              </p>
            </div>
          </div>
        </div>

        <div>
          <p className="text-lg text-text-light leading-relaxed text-justify">
            I'm Sharon Lawal, a proactive Software Developer with practical experience in both frontend and backend development. My expertise includes designing and implementing user interfaces as well as integrating and managing backend systems. In addition to my development skills, I have a strong background in project management, overseeing projects and coordinating teams to ensure successful outcomes. Currently pursuing a B.Sc. in Software Engineering, I am passionate about continuous learning and dedicated to enhancing my skills to deliver comprehensive and effective software solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
