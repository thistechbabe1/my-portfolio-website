'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaReact, FaAngular, FaNodeJs, FaGitAlt,
} from 'react-icons/fa';
import {
  SiTypescript, SiMongodb, SiTailwindcss, SiNextdotjs, SiFirebase,
} from 'react-icons/si';

/**
 * OrbitingIcons
 *
 * Props:
 *   radius {number} — distance in px from container centre to icon centre.
 *                     Should match ORBIT_RADIUS exported from Profile.jsx.
 *
 * Layout:  CSS absolute + cos/sin trig — no canvas, no orbit library.
 * Float:   Framer Motion y-animation, unique speed + phase per icon.
 * Hover:   pauses float, shows brand-colour glow ring + label tooltip.
 * Mobile:  hidden (lg:block wrapper).
 */

const ORBIT_ICONS = [
  { icon: <FaReact      size={20} />, label: 'React',      color: '#61DAFB', angle:   0 },
  { icon: <SiNextdotjs  size={18} />, label: 'Next.js',    color: '#E0E0E0', angle:  40 },
  { icon: <SiTypescript size={18} />, label: 'TypeScript',  color: '#3178C6', angle:  80 },
  { icon: <FaAngular    size={20} />, label: 'Angular',     color: '#DD0031', angle: 130 },
  { icon: <FaNodeJs     size={20} />, label: 'Node.js',     color: '#8BC34A', angle: 170 },
  { icon: <SiMongodb    size={18} />, label: 'MongoDB',     color: '#47A248', angle: 210 },
  { icon: <SiFirebase   size={18} />, label: 'Firebase',    color: '#FFA000', angle: 250 },
  { icon: <SiTailwindcss size={18} />, label: 'Tailwind',   color: '#38BDF8', angle: 295 },
  { icon: <FaGitAlt     size={18} />, label: 'Git',         color: '#F05032', angle: 335 },
];

// Unique float speed + vertical phase so icons never all move in sync
const FLOAT_PARAMS = [
  { duration: 3.8, delay: 0.0, distance: 9  },
  { duration: 4.5, delay: 0.6, distance: 7  },
  { duration: 3.2, delay: 1.1, distance: 10 },
  { duration: 5.0, delay: 0.3, distance: 8  },
  { duration: 4.1, delay: 1.7, distance: 11 },
  { duration: 3.6, delay: 0.9, distance: 8  },
  { duration: 4.8, delay: 0.4, distance: 9  },
  { duration: 3.4, delay: 1.4, distance: 7  },
  { duration: 4.3, delay: 0.7, distance: 10 },
];

const ICON_SIZE = 40; // bubble diameter in px

const OrbitingIcons = ({ radius = 148 }) => {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <div
      className="hidden lg:block"
      aria-hidden="true"
      style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
    >
      {ORBIT_ICONS.map((item, idx) => {
        const angleRad = (item.angle * Math.PI) / 180;
        const { duration, delay, distance } = FLOAT_PARAMS[idx];
        const isHovered = hoveredIdx === idx;

        // Position: centre of container + offset along angle
        const left = `calc(50% + ${Math.round(radius * Math.cos(angleRad))}px)`;
        const top  = `calc(50% + ${Math.round(radius * Math.sin(angleRad))}px)`;

        return (
          <div
            key={item.label}
            style={{
              position: 'absolute',
              left,
              top,
              transform: 'translate(-50%, -50%)',
              pointerEvents: 'auto',
              zIndex: 10,
            }}
          >
            <motion.div
              animate={isHovered ? { y: 0 } : { y: [0, -distance, 0] }}
              transition={
                isHovered
                  ? { duration: 0 }
                  : { duration, delay, ease: 'easeInOut', repeat: Infinity, repeatType: 'mirror' }
              }
              onHoverStart={() => setHoveredIdx(idx)}
              onHoverEnd={()  => setHoveredIdx(null)}
            >
              {/* Icon bubble */}
              <div
                title={item.label}
                style={{
                  width:  `${ICON_SIZE}px`,
                  height: `${ICON_SIZE}px`,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'var(--bg-elevated)',
                  border: `1.5px solid ${isHovered ? item.color : 'var(--border-gold)'}`,
                  boxShadow: isHovered
                    ? `0 0 12px ${item.color}55, 0 0 0 3px var(--gold-subtle)`
                    : '0 2px 10px rgba(0,0,0,0.16)',
                  color: isHovered ? item.color : 'var(--text-muted)',
                  transition: 'border-color 0.28s ease, box-shadow 0.28s ease, color 0.28s ease',
                  cursor: 'default',
                }}
              >
                {item.icon}
              </div>
            </motion.div>

            {/* Hover tooltip */}
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, y: 3 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                  position: 'absolute',
                  top: '100%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  marginTop: '5px',
                  whiteSpace: 'nowrap',
                  fontSize: '0.58rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--gold)',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 500,
                  background: 'var(--bg)',
                  padding: '2px 7px',
                  border: '1px solid var(--border-gold)',
                }}
              >
                {item.label}
              </motion.div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default OrbitingIcons;
