'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaPaperPlane } from 'react-icons/fa';
import Illustration from '../assets/Illustration.png';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSuccessMessage('');
    setErrorMessage('');

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          email: email,
          message: message,
        }),
      });

      if (response.ok) {
        setSuccessMessage('Your message has been sent successfully! I will get back to you soon.');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.error || 'Failed to send message. Please try again.');
        console.error('Formspree error:', errorData);
      }
    } catch (error) {
      setErrorMessage('An unexpected error occurred. Please check your internet connection and try again.');
      console.error('Submission error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-12 bg-dark-secondary text-text-light">
      <div className="container mx-auto px-6 text-center">
        <motion.p
          className="text-xl font-medium text-accent-green"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          Get in Touch
        </motion.p>
        <motion.h1
          className="text-4xl font-bold text-text-light mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          Contact Me
        </motion.h1>
      </div>

      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between">
        <motion.div
          className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:pr-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={Illustration}
            alt="Contact Illustration"
            className="w-full h-auto"
            priority
          />
        </motion.div>

        <motion.div
          className="w-full lg:w-1/2 p-8 bg-dark-primary rounded-lg shadow-xl flex items-center justify-center border border-dark-tertiary"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <form className="w-full max-w-md flex flex-col space-y-6" onSubmit={handleSubmit}>
            <input
              type="name"
              placeholder="Your Full Name"
              className="p-3 border-2 border-dark-tertiary shadow-md text-text-light rounded-lg
                         bg-dark-secondary focus:outline-none focus:ring-2 focus:ring-accent-green focus:border-accent-green
                         placeholder-text-muted"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Your Email Address"
              className="p-3 border-2 border-dark-tertiary shadow-md text-text-light rounded-lg
                         bg-dark-secondary focus:outline-none focus:ring-2 focus:ring-accent-green focus:border-accent-green
                         placeholder-text-muted"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <textarea
              placeholder="Your Message"
              className="p-3 border-2 border-dark-tertiary shadow-md text-text-light rounded-lg h-32
                         bg-dark-secondary focus:outline-none focus:ring-2 focus:ring-accent-green focus:border-accent-green
                         placeholder-text-muted resize-y"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>

            {isLoading && (
              <p className="text-accent-green text-center">Sending message...</p>
            )}
            {successMessage && (
              <p className="text-accent-green text-center font-bold">{successMessage}</p>
            )}
            {errorMessage && (
              <p className="text-red-500 text-center font-bold">{errorMessage}</p>
            )}

            <button
              type="submit"
              className="p-3 bg-accent-green bg-opacity-80 w-full max-w-xs shadow-lg text-text-light font-semibold rounded-full
                         border-2 border-accent-green hover:bg-opacity-50 hover:shadow-xl transition duration-300
                         flex items-center justify-center space-x-2 self-center disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isLoading}
            >
              <span>{isLoading ? 'Sending...' : 'Send Message'}</span>
              <FaPaperPlane />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
