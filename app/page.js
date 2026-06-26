'use client';
import React from 'react';
import Profile from './components/Profile';
import About from './components/About';
import Education from './components/Education';
import Technologies from './components/Technologies';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function HomePage() {
  return (
    <>
      {/* 1. Hero (Odd - transparent) */}
      <Profile />

      {/* 2. About (Even - translucent) */}
      <div className="theme-surface-translucent border-y border-[rgba(179,142,43,0.08)]">
        <About />
      </div>

      {/* 3. Education (Odd - transparent) */}
      <Education />

      {/* 4. Technologies (Even - translucent) */}
      <div className="theme-surface-translucent border-y border-[rgba(179,142,43,0.08)]">
        <Technologies />
      </div>

      {/* 5. Experience (Odd - transparent) */}
      <Experience />

      {/* 6. Projects (Even - translucent) */}
      <div className="theme-surface-translucent border-y border-[rgba(179,142,43,0.08)]">
        <Projects />
      </div>

      {/* 7. Contact (Odd - transparent) */}
      <Contact />
    </>
  );
}
