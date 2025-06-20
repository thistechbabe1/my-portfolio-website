'use client';
import React from 'react';
import AboutComponent from '../components/About';
import TechnologiesComponent from '../components/Technologies';
import ExperienceComponent from '../components/Experience';

export default function AboutPage() {
  return (
    <div className="py-8">
      <section className="py-16 bg-dark-secondary text-text-light">
        <div className="container mx-auto px-6">
          <AboutComponent />
        </div>
      </section>

      <section className="py-16 bg-dark-primary text-text-light">
        <div className="container mx-auto px-6">
          <TechnologiesComponent />
        </div>
      </section>

      <section className="py-16 bg-dark-secondary text-text-light">
        <div className="container mx-auto px-6">
          <ExperienceComponent />
        </div>
      </section>
    </div>
  );
}
