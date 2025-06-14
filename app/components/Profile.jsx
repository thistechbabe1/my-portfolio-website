'use client';
import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import profilePic from '../assets/ProfilePic1.jpg';
const AnimatedBackground = dynamic(() => import('./AnimatedBackground'), { ssr: false });

const roles = ["Software Engineer", "Full Stack Web Developer", "Problem Solver"];
const TYPING_SPEED = 150;
const DELETING_SPEED = 75;
const PAUSE_DURATION = 1500;

const Profile = () => {
  const [currentText, setCurrentText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const currentRole = roles[roleIndex];

      if (isDeleting) {
        if (charIndex > 0) {
          setCurrentText(currentRole.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
        }
      } else {
        if (charIndex < currentRole.length) {
          setCurrentText(currentRole.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), PAUSE_DURATION);
        }
      }
    };

    const timer = setTimeout(
      handleTyping,
      isDeleting ? DELETING_SPEED : TYPING_SPEED
    );

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);

  const longestRole = useMemo(() => {
    return roles.reduce((longest, current) => current.length > longest.length ? current : longest, "");
  }, []);

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center mx-auto py-12 px-6 lg:px-24 max-w-7xl h-screen-minus-header">
      <AnimatedBackground />

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center w-full">
        <div className="text-center lg:text-left lg:mr-16 w-full lg:max-w-xl">
          <motion.p
            className="text-xl lg:text-2xl font-medium text-text-light"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            Hi 👋, I’m
          </motion.p>
          <motion.p
            className="text-4xl lg:text-5xl font-bold text-text-light mb-2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.1 }}
          >
            Sharon Lawal
          </motion.p>
          <div className="relative min-h-[4rem] w-full max-w-lg mx-auto lg:w-[600px] xl:w-[700px] lg:mx-0">
            <div className="invisible absolute whitespace-nowrap text-2xl lg:text-4xl font-bold py-4 top-0 left-1/2 -translate-x-1/2">
              {longestRole}
            </div>
            <motion.h1
              className="text-3xl lg:text-4xl font-bold text-accent-green py-4 flex items-center justify-center lg:justify-start absolute top-0 left-0 w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              {currentText}
              <span className="inline-block bg-accent-green w-1 h-8 ml-1 animate-pulse"></span>
            </motion.h1>
          </div>
          <motion.a
            href="YOUR_GOOGLE_DRIVE_RESUME_LINK_HERE"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 px-8 py-3 bg-accent-green text-dark-primary font-semibold rounded-lg shadow-lg
                       border-2 border-accent-green hover:bg-opacity-80 hover:shadow-xl transition duration-300 inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            My Resume
          </motion.a>
        </div>

        <motion.div
          className="mt-12 lg:mt-0 h-72 w-72 lg:h-96 lg:w-96 rounded-lg overflow-hidden flex items-center justify-center relative flex-shrink-0"
          animate={{
            y: ["0%", "-5%", "0%"]
          }}
          transition={{
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror"
          }}
        >
          <Image
            src={profilePic}
            alt="Profile Picture"
            className="h-full w-full rounded-full object-cover"
            style={{ objectPosition: 'top' }}
            priority
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Profile;
