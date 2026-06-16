'use client';
import React from 'react';

/**
 * Subtle animated gradient mesh that respects dark/light theme.
 * Replaces the previous particle canvas — far lighter, no JS overhead.
 */
const AnimatedBackground = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Primary orb — top left */}
      <div
        className="absolute rounded-full opacity-[0.07] dark:opacity-[0.05]"
        style={{
          width: '600px',
          height: '600px',
          top: '-120px',
          left: '-180px',
          background: 'radial-gradient(circle, #C9A84C 0%, transparent 70%)',
          animation: 'drift1 18s ease-in-out infinite alternate',
        }}
      />
      {/* Secondary orb — bottom right */}
      <div
        className="absolute rounded-full opacity-[0.05] dark:opacity-[0.04]"
        style={{
          width: '500px',
          height: '500px',
          bottom: '-100px',
          right: '-120px',
          background: 'radial-gradient(circle, #C9A84C 0%, transparent 70%)',
          animation: 'drift2 22s ease-in-out infinite alternate',
        }}
      />
      <style>{`
        @keyframes drift1 {
          from { transform: translate(0,   0)   scale(1);    }
          to   { transform: translate(40px, 30px) scale(1.06); }
        }
        @keyframes drift2 {
          from { transform: translate(0,   0)    scale(1);    }
          to   { transform: translate(-30px, -20px) scale(1.08); }
        }
      `}</style>
    </div>
  );
};

export default AnimatedBackground;
