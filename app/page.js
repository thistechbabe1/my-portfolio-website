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
      {/* 1. Hero (Odd - theme-bg) */}
      <div className="theme-bg">
        <Profile />
      </div>

      {/* 2. About (Even - theme-surface) */}
      <div className="theme-surface">
        <About />
      </div>

      {/* 3. Education (Odd - theme-bg) */}
      <div className="theme-bg">
        <Education />
      </div>

      {/* 4. Technologies (Even - theme-surface) */}
      <div className="theme-surface">
        <Technologies />
      </div>

      {/* 5. Experience (Odd - theme-bg) */}
      <div className="theme-bg">
        <Experience />
      </div>

      {/* 6. Projects (Even - theme-surface) */}
      <div className="theme-surface">
        <Projects />
      </div>

      {/* 7. Contact (Odd - theme-bg) */}
      <div className="theme-bg">
        <Contact />
      </div>
    </>
  );
}
