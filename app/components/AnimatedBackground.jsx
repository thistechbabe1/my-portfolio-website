'use client';
import React from 'react';
import { motion } from 'framer-motion';

import { FaReact, FaNodeJs, FaPython, FaJsSquare, FaJava, FaHtml5, FaCss3Alt, FaGitAlt, FaAws } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiMongodb, SiDocker, SiMicrosoftazure, SiDjango, SiSpringboot } from 'react-icons/si';

const backgroundIcons = [
  { icon: <FaReact />, color: 'text-accent-green' },
  { icon: <FaNodeJs />, color: 'text-accent-purple' },
  { icon: <FaPython />, color: 'text-accent-green-light' },
  { icon: <FaJsSquare />, color: 'text-accent-purple-light' },
  { icon: <FaHtml5 />, color: 'text-accent-green' },
  { icon: <FaCss3Alt />, color: 'text-accent-purple' },
  { icon: <FaGitAlt />, color: 'text-accent-green-light' },
  { icon: <SiTailwindcss />, color: 'text-accent-purple-light' },
  { icon: <SiNextdotjs />, color: 'text-accent-green' },
  { icon: <SiMongodb />, color: 'text-accent-purple' },
];

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 z-0 opacity-30 overflow-hidden">
      {backgroundIcons.map((item, index) => (
        item.icon && React.isValidElement(item.icon) ? (
          <motion.div
            key={index}
            className={`absolute ${item.color}`}
            initial={{
              x: `${Math.random() * 100}vw`,
              y: `${Math.random() * 100}vh`,
              opacity: 0,
              scale: Math.random() * 0.5 + 0.5,
            }}
            animate={{
              y: [`${Math.random() * 100}vh`, `${Math.random() * 100}vh`, `${Math.random() * 100}vh`],
              x: [`${Math.random() * 100}vw`, `${Math.random() * 100}vw`, `${Math.random() * 100}vw`],
              opacity: [0.4, 0.7, 0.4],
              scale: [Math.random() * 0.5 + 0.5, Math.random() * 0.5 + 0.5, Math.random() * 0.5 + 0.5],
            }}
            transition={{
              duration: Math.random() * 30 + 30,
              ease: "linear",
              repeat: Infinity,
              delay: Math.random() * 10,
            }}
            style={{ fontSize: `${Math.random() * 50 + 30}px` }}
          >
            {item.icon}
          </motion.div>
        ) : (
          null
        )
      ))}
    </div>
  );
};

export default AnimatedBackground;
