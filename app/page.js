'use client';
import React from 'react';
import Profile from './components/Profile';

export default function HomePage() {
  return (
    <div>
      <section className="min-h-[calc(100vh-80px)] flex items-center justify-center bg-dark-primary">
        <Profile />
      </section>

      <section className="py-16 bg-dark-secondary text-center">
        <h2 className="text-4xl font-bold text-text-light mb-8">
          Learn More About Me & My Work!
        </h2>
        <div className="flex flex-col sm:flex-row justify-center gap-6 px-4">
          <a
            href="/about"
            className="px-8 py-3 bg-accent-green text-dark-primary font-semibold rounded-lg shadow-lg
                       border-2 border-accent-green hover:bg-opacity-80 hover:shadow-xl transition duration-300 inline-block w-full sm:w-auto"
          >
            About Me
          </a>
          <a
            href="/projects"
            className="px-8 py-3 bg-accent-green text-dark-primary font-semibold rounded-lg shadow-lg
                       border-2 border-accent-green hover:bg-opacity-80 hover:shadow-xl transition duration-300 inline-block w-full sm:w-auto"
          >
            My Projects
          </a>
          <a
            href="/contact"
            className="px-8 py-3 bg-accent-green text-dark-primary font-semibold rounded-lg shadow-lg
                       border-2 border-accent-green hover:bg-opacity-80 hover:shadow-xl transition duration-300 inline-block w-full sm:w-auto"
          >
            Get In Touch
          </a>
        </div>
      </section>
    </div>
  );
}
