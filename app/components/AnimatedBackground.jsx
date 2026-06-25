'use client';
import React, { useEffect, useState } from 'react';

/**
 * Subtle animated gradient mesh with a grid overlay and cursor spotlight tracking.
 * Respects dark/light theme.
 */
const AnimatedBackground = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Only track cursor spotlight on non-touch devices
    if (!window.matchMedia('(pointer: coarse)').matches) {
      setIsDesktop(true);
      const handleMouseMove = (e) => {
        setMousePos({ x: e.clientX, y: e.clientY });
      };
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Dynamic Cursor Spotlight (desktop only) */}
      {isDesktop && (
        <div
          className="absolute pointer-events-none rounded-full opacity-[0.09] dark:opacity-[0.05] transition-opacity duration-300"
          style={{
            width: '450px',
            height: '450px',
            left: mousePos.x - 225,
            top: mousePos.y - 225,
            background: 'radial-gradient(circle, var(--gold) 0%, transparent 70%)',
            position: 'fixed',
            zIndex: -8,
          }}
        />
      )}

      {/* Grid pattern overlay with vignette fade */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.07] dark:opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--border-gold) 1px, transparent 1px),
            linear-gradient(to bottom, var(--border-gold) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(circle at 50% 50%, black 20%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(circle at 50% 50%, black 20%, transparent 80%)',
          zIndex: -9,
        }}
      />

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
          zIndex: -10,
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
          zIndex: -10,
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
