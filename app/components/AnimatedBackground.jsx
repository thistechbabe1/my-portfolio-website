'use client';
import React, { useEffect, useState } from 'react';

/**
 * Subtle animated gradient mesh with a grid overlay, cursor spotlight tracking,
 * and slow floating golden embers. Respects dark/light theme.
 */
const AnimatedBackground = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isDesktop, setIsDesktop] = useState(false);
  const [particles, setParticles] = useState([]);

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

  useEffect(() => {
    // Generate particles on client mount to avoid SSR hydration mismatch
    const generated = Array.from({ length: 14 }, (_, i) => ({
      id: i,
      size: Math.random() * 4 + 2.5,
      left: Math.random() * 100,
      delay: Math.random() * 8,
      duration: Math.random() * 10 + 12,
    }));
    setParticles(generated);
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

      {/* Floating golden embers */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[-8]">
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full bg-gold opacity-[0.25] dark:opacity-[0.16]"
            style={{
              width: `${p.size}px`,
              height: `${p.size}px`,
              left: `${p.left}%`,
              bottom: '-20px',
              animation: `floatUp ${p.duration}s linear infinite`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Primary orb — top left */}
      <div
        className="absolute rounded-full opacity-[0.08] dark:opacity-[0.06]"
        style={{
          width: '600px',
          height: '600px',
          top: '-120px',
          left: '-180px',
          background: 'radial-gradient(circle, #C9A84C 0%, transparent 70%)',
          animation: 'drift1 12s ease-in-out infinite alternate',
          zIndex: -10,
        }}
      />
      {/* Secondary orb — bottom right */}
      <div
        className="absolute rounded-full opacity-[0.06] dark:opacity-[0.05]"
        style={{
          width: '500px',
          height: '500px',
          bottom: '-100px',
          right: '-120px',
          background: 'radial-gradient(circle, #C9A84C 0%, transparent 70%)',
          animation: 'drift2 16s ease-in-out infinite alternate',
          zIndex: -10,
        }}
      />
      {/* Tertiary orb — middle left */}
      <div
        className="absolute rounded-full opacity-[0.07] dark:opacity-[0.05]"
        style={{
          width: '450px',
          height: '450px',
          top: '35%',
          left: '-120px',
          background: 'radial-gradient(circle, #C9A84C 0%, transparent 70%)',
          animation: 'drift3 14s ease-in-out infinite alternate',
          zIndex: -10,
        }}
      />
      <style>{`
        @keyframes drift1 {
          from { transform: translate(0, 0) scale(1); }
          to   { transform: translate(90px, 70px) scale(1.12); }
        }
        @keyframes drift2 {
          from { transform: translate(0, 0) scale(1); }
          to   { transform: translate(-70px, -50px) scale(1.15); }
        }
        @keyframes drift3 {
          from { transform: translate(0, 0) scale(1); }
          to   { transform: translate(60px, -60px) scale(1.1); }
        }
        @keyframes floatUp {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 0.35;
          }
          90% {
            opacity: 0.35;
          }
          100% {
            transform: translateY(-105vh) translateX(50px);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default AnimatedBackground;
