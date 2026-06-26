'use client';
import React from 'react';
import Link from 'next/link';
import { experiences, projects as projectsData, siteConfig, education, cvSkills } from '../lib/data';

/* ─────────────────────────────────────────────────────────────────────────────
   DERIVED DATA — from data.js (single source of truth)
   ───────────────────────────────────────────────────────────────────────────── */
const professionalExp = experiences.filter(e => e.type === 'professional');
const communityExp    = experiences.filter(e => e.type === 'community');

const contactList = [
  { label: 'Email',    value: siteConfig.email,       href: `mailto:${siteConfig.email}` },
  { label: 'Phone',    value: siteConfig.phone,       href: `tel:${siteConfig.phone.replace(/\s+/g, '')}` },
  { label: 'LinkedIn', value: siteConfig.linkedinUrl.replace('https://www.', '').replace('https://', ''),  href: siteConfig.linkedinUrl },
  { label: 'GitHub',   value: siteConfig.githubUrl.replace('https://github.com/', 'github.com/'),    href: siteConfig.githubUrl },
  { label: 'Website',  value: siteConfig.websiteUrl.replace('https://', ''),  href: siteConfig.websiteUrl },
];

const cvProfile = siteConfig.bio.join(' ');

/* ─────────────────────────────────────────────────────────────────────────────
   SHARED STYLES
   ───────────────────────────────────────────────────────────────────────────── */
const s = {
  sectionTitle: {
    fontFamily: "'Cormorant Garamond', Georgia, serif",
    fontSize: '0.7rem',
    letterSpacing: '0.22em',
    textTransform: 'uppercase',
    color: '#C9A84C',
    fontWeight: 600,
    marginBottom: '12px',
    paddingBottom: '6px',
    borderBottom: '1px solid #C9A84C',
  },
  rowHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    gap: '4px',
    marginBottom: '3px',
  },
  roleTitle: {
    fontFamily: "Inter, system-ui, sans-serif",
    fontSize: '0.92rem',
    fontWeight: 600,
    color: '#0D0D0D',
  },
  period: {
    fontSize: '0.72rem',
    color: '#888',
    letterSpacing: '0.04em',
    whiteSpace: 'nowrap',
  },
  org: {
    fontSize: '0.79rem',
    color: '#555',
    marginBottom: '6px',
  },
  bullet: {
    fontSize: '0.79rem',
    color: '#444',
    lineHeight: 1.65,
    marginBottom: '3px',
    paddingLeft: '14px',
    position: 'relative',
  },
};

const DOT = (
  <span style={{ position: 'absolute', left: 0, color: '#C9A84C', fontWeight: 700, fontSize: '0.55rem', top: '0.38rem' }}>◆</span>
);

function Section({ title, children }) {
  return (
    <section style={{ marginBottom: '26px' }}>
      <h2 style={s.sectionTitle}>{title}</h2>
      {children}
    </section>
  );
}

function RoleBlock({ title, org, period, location, description, bullets }) {
  const items = description || bullets || [];
  return (
    <div style={{ marginBottom: '16px' }}>
      <div style={s.rowHeader}>
        <span style={s.roleTitle}>{title}</span>
        <span style={s.period}>{period}</span>
      </div>
      <div style={s.org}>
        {org || ''}
        {location && location.trim() && <span style={{ color: '#aaa' }}> · {location}</span>}
      </div>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {items.map((b, i) => (
          <li key={i} style={s.bullet}>{DOT}{b}</li>
        ))}
      </ul>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   PAGE
   ───────────────────────────────────────────────────────────────────────────── */
export default function CVPage() {
  return (
    <>
      {/* Print bar */}
      <div
        className="no-print"
        style={{
          position: 'sticky', top: '80px', zIndex: 30,
          borderBottom: '1px solid var(--border)',
          backgroundColor: 'var(--bg-surface)',
          padding: '10px 24px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px',
        }}
      >
        <Link href="/" style={{ fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', textDecoration: 'none' }}>
          ← Back
        </Link>
        <button
          onClick={() => window.print()}
          style={{
            fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase',
            padding: '8px 20px', border: '1px solid #C9A84C', color: '#C9A84C',
            background: 'transparent', cursor: 'pointer', fontFamily: 'Inter, sans-serif',
            transition: 'background 0.2s, color 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = '#C9A84C'; e.currentTarget.style.color = '#fff'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#C9A84C'; }}
        >
          Print / Save PDF
        </button>
      </div>

      {/* CV Document */}
      <div
        id="cv-document"
        style={{
          maxWidth: '820px', margin: '48px auto 80px', padding: '56px 60px',
          backgroundColor: '#FEFEFE', color: '#0D0D0D',
          fontFamily: 'Inter, system-ui, sans-serif', fontSize: '0.82rem', lineHeight: 1.6,
          boxShadow: '0 4px 40px rgba(0,0,0,0.08)',
        }}
      >
        {/* Header */}
        <header style={{ marginBottom: '32px', borderBottom: '2px solid #0D0D0D', paddingBottom: '20px' }}>
          <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '2.8rem', fontWeight: 500, letterSpacing: '-0.01em', color: '#0D0D0D', margin: 0, lineHeight: 1.1 }}>
            {siteConfig.name}
          </h1>
          <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1rem', color: '#555', marginTop: '6px', marginBottom: '16px', fontStyle: 'italic', letterSpacing: '0.03em' }}>
            {siteConfig.rolesText}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px 24px' }}>
            {contactList.map(({ label, value, href }) => (
              <span key={label} style={{ fontSize: '0.74rem', color: '#444' }}>
                <span style={{ color: '#C9A84C', fontWeight: 600, marginRight: '4px' }}>{label}:</span>
                <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" style={{ color: '#222', textDecoration: 'none' }}>
                  {value}
                </a>
              </span>
            ))}
          </div>
        </header>

        {/* Profile */}
        <Section title="Profile">
          <p style={{ fontSize: '0.81rem', color: '#444', lineHeight: 1.7 }}>{cvProfile}</p>
        </Section>

        {/* Education */}
        <Section title="Education">
          <div style={{ marginBottom: '12px' }}>
            <div style={s.rowHeader}>
              <span style={s.roleTitle}>{education.degree}</span>
              <span style={s.period}>{education.period}</span>
            </div>
            <div style={s.org}>{education.school} · {education.location}</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {education.details.map((d, i) => (
                <li key={i} style={s.bullet}>{DOT}{d}</li>
              ))}
            </ul>
          </div>
        </Section>

        {/* Professional Experience — from data.js */}
        <Section title="Professional Experience">
          {professionalExp.map((exp, i) => (
            <RoleBlock key={i} {...exp} />
          ))}
        </Section>

        {/* Projects — from data.js */}
        <Section title="Projects">
          {projectsData.map((proj, i) => (
            <div key={i} style={{ marginBottom: '16px' }}>
              <div style={s.rowHeader}>
                <span style={s.roleTitle}>
                  {proj.title}
                  {proj.subtitle && (
                    <span style={{ fontWeight: 400, fontSize: '0.9rem', color: '#666', marginLeft: '8px', fontFamily: 'inherit' }}>
                      — {proj.subtitle}
                    </span>
                  )}
                </span>
                <span style={s.period}>
                  <a href={proj.githubLink} target="_blank" rel="noopener noreferrer" style={{ color: '#C9A84C', textDecoration: 'none', marginRight: '6px' }}>GitHub</a>
                  <span style={{ color: '#ccc' }}>·</span>
                  <a href={proj.liveLink} target="_blank" rel="noopener noreferrer" style={{ color: '#C9A84C', textDecoration: 'none', marginLeft: '6px' }}>Live</a>
                </span>
              </div>
              {proj.tags && (
                <div style={{ ...s.org, color: '#C9A84C', marginBottom: '5px' }}>
                  {proj.tags.join(' · ')}
                </div>
              )}
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={s.bullet}>{DOT}{proj.description}</li>
              </ul>
            </div>
          ))}
        </Section>

        {/* Leadership & Community — from data.js */}
        <Section title="Leadership & Community Involvement">
          {communityExp.map((exp, i) => (
            <RoleBlock key={i} {...exp} />
          ))}
        </Section>

        {/* Technical Skills */}
        <Section title="Technical Skills">
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <tbody>
              {Object.entries(cvSkills).map(([category, items]) => (
                <tr key={category} style={{ borderBottom: '1px solid #F0EDE8' }}>
                  <td style={{ padding: '6px 12px 6px 0', fontSize: '0.72rem', fontWeight: 600, color: '#888', letterSpacing: '0.06em', textTransform: 'uppercase', whiteSpace: 'nowrap', verticalAlign: 'top', width: '155px' }}>
                    {category}
                  </td>
                  <td style={{ padding: '6px 0', fontSize: '0.8rem', color: '#333', lineHeight: 1.5 }}>
                    {items}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Section>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Inter:wght@300;400;500;600&display=swap');
        @media print {
          .no-print { display: none !important; }
          header[class], footer[class] { display: none !important; }
          #cv-document { box-shadow: none !important; margin: 0 !important; padding: 28px 36px !important; max-width: 100% !important; }
          body { background: white !important; }
        }
      `}</style>
    </>
  );
}
