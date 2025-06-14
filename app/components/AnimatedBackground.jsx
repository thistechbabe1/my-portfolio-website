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
  { icon: <FaJava />, color: 'text-accent-green-dark' },
  { icon: <FaHtml5 />, color: 'text-accent-purple-dark' },
  { icon: <FaCss3Alt />, color: 'text-accent-green' },
  { icon: <FaGitAlt />, color: 'text-accent-purple' },
  { icon: <SiTailwindcss />, color: 'text-accent-green-light' },
  { icon: <SiNextdotjs />, color: 'text-accent-purple-light' },
  { icon: <SiMongodb />, color: 'text-accent-green-dark' },
  { icon: <SiDocker />, color: 'text-accent-purple-dark' },
  { icon: <FaAws />, color: 'text-accent-green' },
  { icon: <SiMicrosoftazure />, color: 'text-accent-purple' },
  { icon: <SiDjango />, color: 'text-accent-green-light' },
  { icon: <SiSpringboot />, color: 'text-accent-purple-light' },
  { icon: <FaReact />, color: 'text-accent-blue' },
  { icon: <FaNodeJs />, color: 'text-accent-orange' },
  { icon: <FaPython />, color: 'text-accent-blue' },
  { icon: <FaJsSquare />, color: 'text-accent-orange' },
  { icon: <FaJava />, color: 'text-accent-blue' },
  { icon: <FaHtml5 />, color: 'text-accent-orange' },
  { icon: <FaCss3Alt />, color: 'text-accent-blue' },
  { icon: <FaGitAlt />, color: 'text-accent-orange' },
  { icon: <FaReact />, color: 'text-accent-green' },
  { icon: <FaNodeJs />, color: 'text-accent-purple' },
  { icon: <FaPython />, color: 'text-accent-green-light' },
  { icon: <FaJsSquare />, color: 'text-accent-purple-light' },
  { icon: <FaJava />, color: 'text-accent-green-dark' },
  { icon: <FaHtml5 />, color: 'text-accent-purple-dark' },
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
              opacity: [0, 0.6, 0.3, 0],
              scale: [Math.random() * 0.5 + 0.5, Math.random() * 0.5 + 0.5, Math.random() * 0.5 + 0.5],
            }}
            transition={{
              duration: Math.random() * 120 + 150,
              ease: "linear",
              repeat: Infinity,
              delay: Math.random() * 60,
            }}
            style={{ fontSize: `${Math.random() * 60 + 40}px` }}
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
