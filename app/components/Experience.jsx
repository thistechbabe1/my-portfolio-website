"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { experiences } from "../lib/data";

const Experience = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <section
        id="experience"
        className="py-16 bg-transparent relative text-center text-text-light min-h-[400px] flex items-center justify-center"
      >
        <div className="flex items-center justify-center space-x-2">
          <div className="w-4 h-4 rounded-full bg-accent-green animate-bounce delay-75"></div>
          <div className="w-4 h-4 rounded-full bg-accent-purple animate-bounce delay-150"></div>
          <div className="w-4 h-4 rounded-full bg-accent-green-light animate-bounce delay-225"></div>
          <p className="ml-4 text-xl">Loading experience...</p>
        </div>
      </section>
    );
  }

  return (
    <section id="experience" className="py-16 bg-transparent relative">
      <div className="container mx-auto px-6 text-center">
        <motion.p
          className="text-xl font-medium text-accent-green uppercase tracking-wider"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          Experience
        </motion.p>
        <motion.h1
          className="text-4xl font-bold text-text-light mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          My Professional Journey
        </motion.h1>

        <div className="relative mt-12">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-accent-green"></div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`flex items-center w-full relative flex-col ${
                  index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
                }`}
              >
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 bg-accent-green w-4 h-4 rounded-full z-10 md:top-1/2 md:-translate-y-1/2 border-2 border-dark-primary"></div>

                <motion.div
                  className="relative bg-dark-secondary shadow-lg rounded-lg p-6 border-2 border-accent-green w-full md:w-5/12 transform
                             transition-transform duration-500 hover:scale-105 hover:-translate-y-2 text-left"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <h2 className="text-2xl font-semibold text-text-light mb-2">
                    {exp.title}
                  </h2>
                  <p className="text-xl text-accent-green mb-2">
                    {exp.company}
                  </p>
                  <p className="text-md text-text-muted mb-4">
                    {exp.location} | {exp.duration}
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-text-light">
                    {exp.description.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </motion.div>

                {index < experiences.length - 1 && (
                  <div className="block md:hidden my-4 bg-accent-green w-4 h-4 rounded-full border-2 border-dark-primary"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
