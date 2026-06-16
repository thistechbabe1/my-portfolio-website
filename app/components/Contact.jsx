'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '../lib/data';

const fadeUp = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const SendIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13"/>
    <polygon points="22 2 15 22 11 13 2 9 22 2"/>
  </svg>
);

const Contact = () => {
  const [name,           setName]           = useState('');
  const [email,          setEmail]          = useState('');
  const [message,        setMessage]        = useState('');
  const [isLoading,      setIsLoading]      = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage,   setErrorMessage]   = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSuccessMessage('');
    setErrorMessage('');

    const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;
    if (!endpoint) {
      setErrorMessage(`Contact form is not configured. Please email me directly at ${siteConfig.email}`);
      setIsLoading(false);
      return;
    }

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });
      if (res.ok) {
        setSuccessMessage("Message sent — I'll be in touch soon.");
        setName(''); setEmail(''); setMessage('');
      } else {
        const data = await res.json();
        setErrorMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setErrorMessage('Unexpected error. Please check your connection or email me directly.');
    } finally {
      setIsLoading(false);
    }
  };

  const contactDetails = [
    { label: 'Email',    value: siteConfig.email,       href: `mailto:${siteConfig.email}` },
    { label: 'LinkedIn', value: siteConfig.linkedinUrl.replace('https://www.', '').replace('https://', ''),  href: siteConfig.linkedinUrl },
    { label: 'GitHub',   value: siteConfig.githubUrl.replace('https://', ''),    href: siteConfig.githubUrl },
    { label: 'Phone',    value: siteConfig.phone,       href: `tel:${siteConfig.phone.replace(/\s+/g, '')}` },
  ];

  return (
    <section id="contact" className="py-24 theme-text">
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          className="mb-14"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className="section-divider mb-6" />
          <p className="text-xs tracking-[0.14em] uppercase mb-3 font-medium" style={{ color: 'var(--text-muted)' }}>
            Let&apos;s connect
          </p>
          <h2
            className="font-display leading-tight"
            style={{ fontSize: 'clamp(2.2rem, 4vw, 3.4rem)', fontWeight: 500, color: 'var(--text)' }}
          >
            Get In Touch
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Contact Info */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-8"
          >
            <p className="text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              Whether you have an opportunity, a project in mind, or just want to say hello —
              I&apos;d love to hear from you.
            </p>

            <div className="space-y-5 pt-2">
              {contactDetails.map(({ label, value, href }) => (
                <div key={label} className="flex gap-6 items-baseline border-b pb-4" style={{ borderColor: 'var(--border)' }}>
                  <span className="text-xs tracking-[0.16em] uppercase w-20 shrink-0" style={{ color: 'var(--text-faint)' }}>
                    {label}
                  </span>
                  <a
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="text-sm link-underline transition-colors duration-300 break-all hover:text-gold"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    {value}
                  </a>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.15 }}
          >
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="contact-name" className="block text-xs tracking-[0.14em] uppercase mb-2" style={{ color: 'var(--text-faint)' }}>
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  className="theme-input"
                  placeholder="Your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-xs tracking-[0.14em] uppercase mb-2" style={{ color: 'var(--text-faint)' }}>
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  className="theme-input"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs tracking-[0.14em] uppercase mb-2" style={{ color: 'var(--text-faint)' }}>
                  Message
                </label>
                <textarea
                  id="contact-message"
                  className="theme-input resize-y"
                  style={{ minHeight: '140px' }}
                  placeholder="Tell me what you have in mind…"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>

              {successMessage && (
                <p className="text-sm" style={{ color: 'var(--gold)' }}>{successMessage}</p>
              )}
              {errorMessage && (
                <p className="text-sm text-red-400">{errorMessage}</p>
              )}

              <button
                id="contact-submit"
                type="submit"
                disabled={isLoading}
                className="btn-solid disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>{isLoading ? 'Sending…' : 'Send Message'}</span>
                <SendIcon />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
