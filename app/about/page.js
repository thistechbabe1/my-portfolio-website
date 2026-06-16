'use client';
import React from 'react';
import AboutComponent from '../components/About';
import TechnologiesComponent from '../components/Technologies';
import ExperienceComponent from '../components/Experience';

export default function AboutPage() {
  return (
    <div>
      <AboutComponent />
      <TechnologiesComponent />
      <ExperienceComponent />
    </div>
  );
}
