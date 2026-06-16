'use client';
import React from 'react';
import Profile from './components/Profile';

export default function HomePage() {
  return (
    <div>
      <section id="home" className="relative">
        <Profile />
      </section>
    </div>
  );
}
