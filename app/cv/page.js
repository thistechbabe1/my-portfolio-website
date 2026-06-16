'use client';
import React from 'react';
import Link from 'next/link';

/* ─────────────────────────────────────────────────────────────────────────────
   CV DATA
───────────────────────────────────────────────────────────────────────────── */
const CV = {
  name:    'Sharon Lawal',
  roles:   'Software Engineer  ·  Project Manager',
  contact: [
    { label: 'Email',    value: 'sharonayolawal@gmail.com',                         href: 'mailto:sharonayolawal@gmail.com' },
    { label: 'Phone',    value: '+234 913 418 0175',                                  href: 'tel:+2349134180175' },
    { label: 'LinkedIn', value: 'linkedin.com/in/sharon-lawal-9b7289261',             href: 'https://www.linkedin.com/in/sharon-lawal-9b7289261/' },
    { label: 'GitHub',   value: 'github.com/SharonLawal',                            href: 'https://github.com/SharonLawal' },
    { label: 'Website',  value: 'sharonlawal.tech',                                   href: 'https://sharonlawal.tech' },
  ],
  profile: `Final-year Software Engineering student at Babcock University (expected graduation July 2026), with hands-on frontend engineering experience at Remita Payment Services Limited and a strong record of technical community leadership. Proficient in Angular, React, and TypeScript, with a complementary background in operations and project management. Seeking graduate opportunities at the intersection of software engineering and technical management.`,

  education: [
    {
      degree:    'B.Sc. Software Engineering',
      school:    'Babcock University',
      location:  'Ilishan-Remo, Ogun State, Nigeria',
      period:    'Expected: July 2026',
      details: [
        'Cumulative GPA: 4.58 / 5.00',
        'Relevant Coursework: Data Structures & Algorithms, Operating Systems, Web Development, Model-Based Software Engineering, Software Security Engineering, Programming in Java, Embedded Systems, Object-Oriented Software Development, Linux System Administration, Artificial Intelligence & Applications',
      ],
    },
  ],

  professional: [
    {
      title:    'Frontend Developer Intern',
      org:      'Remita Payment Services Limited (RPSL)',
      period:   'Jan 2025 – Jun 2025',
      location: 'Hybrid',
      bullets: [
        'Developed web applications using Angular and TypeScript, implementing component-based architecture and following Angular best practices.',
        'Integrated RESTful APIs to enable seamless data exchange between frontend and backend services.',
        'Collaborated with frontend and QA teams to build responsive, cross-device web components.',
        'Managed code versioning with GitLab; handled merge requests and participated in structured code reviews.',
        'Conducted thorough application testing to identify and resolve bugs prior to production deployment.',
      ],
    },
    {
      title:    'Web Developer Intern',
      org:      'DavTech',
      period:   'Jul 2024 – Sep 2024',
      location: 'Remote',
      bullets: [
        'Developed both frontend and backend components for web applications, delivering end-to-end features.',
        'Implemented Firebase for database management and user authentication across multiple client projects.',
        'Improved existing applications by adding new features and resolving performance bottlenecks.',
        'Managed version control with GitHub, gaining experience in collaborative branching and conflict resolution.',
      ],
    },
  ],

  projects: [
    {
      title:    'Kuda Clone',
      subtitle: 'Full-Stack Banking App',
      stack:    'React · Node.js · REST APIs',
      year:     '2024',
      bullets: [
        'Built a functional replica of the Kuda banking app with user authentication, transaction processing, and profile management, applying secure API integration patterns.',
      ],
    },
    {
      title:    'DevJournal',
      subtitle: 'Developer Productivity Platform',
      stack:    'Angular · Node.js · MongoDB',
      year:     '2024',
      bullets: [
        'Created a platform for developers to track coding progress, document learnings, and organise technical notes, with a focus on clean, distraction-free UI.',
      ],
    },
    {
      title:    'Solex',
      subtitle: 'E-Commerce Website',
      stack:    'React · Tailwind CSS',
      year:     '2024',
      bullets: [
        'Built a fully responsive e-commerce site for an innovative footwear brand, showcasing collections with optimised layouts for desktop and mobile.',
      ],
    },
    {
      title:    'Skin Sphere',
      subtitle: 'Beauty & Skincare Showcase',
      stack:    'React · JavaScript',
      year:     '2024',
      bullets: [
        'Developed a product showcase featuring filtering, item comparison, and optimised image loading for fast, user-friendly browsing.',
      ],
    },
  ],

  leadership: [
    {
      title:    'Operations Lead',
      org:      'Google Developer Groups on Campus (GDG) · Babcock University',
      period:   'Sep 2025 – Jun 2026',
      bullets: [
        'Oversaw day-to-day operations of GDG on Campus, coordinating logistics for technical events, workshops, and developer meetups.',
        'Managed event planning timelines, resource allocation, and vendor coordination to ensure smooth community programming.',
        'Led cross-functional collaboration between community relations, marketing, and technical teams.',
        'Tracked event metrics and community engagement data to continuously improve member experience.',
      ],
    },
    {
      title:    'Head of Operations',
      org:      'ORBIT 1.0 Industry Summit · GDG Babcock',
      period:   'Mar 2026 – Apr 2026',
      bullets: [
        'Led operational coordination for a 3-day industry summit with 1,000+ attendees, overseeing logistics, scheduling, and on-the-day execution.',
        'Coordinated across stakeholder teams including speakers, sponsors, and field trip organisers to deliver a seamless attendee experience.',
      ],
    },
    {
      title:    'Head of Student Volunteers',
      org:      'AI & BIV Commercialization Summit 2026',
      period:   'Apr 2026',
      bullets: [
        'Managed student volunteer teams across operational units, ensuring alignment and smooth execution throughout the summit.',
        'Supported coordination of startup pitching sessions and technical programming across event days.',
      ],
    },
    {
      title:    'Frontend Developer',
      org:      'New Horizon Tech-Hub · Babcock University',
      period:   'Jan 2026 – Jul 2026',
      bullets: [
        'Contributed to product development within the tech hub\'s cross-functional teams, building frontend features across student-led projects.',
      ],
    },
    {
      title:    'Frontend Developer',
      org:      'Babcock University Computer Club · Development Team',
      period:   'Sep 2025 – Jun 2026',
      bullets: [
        'Built and maintained the Computer Club\'s web platform using modern frontend frameworks; implemented responsive UI components and ensured cross-browser compatibility.',
        'Contributed to code reviews and upheld coding standards across development team projects.',
      ],
    },
    {
      title:    'Community Relations Lead',
      org:      'Google Developer Groups on Campus (GDG) · Babcock University',
      period:   'Aug 2024 – Aug 2025',
      bullets: [
        'Reached out to external companies and organisations to establish partnerships for on-campus tech events.',
        'Wrote formal partnership proposals and collaborated across teams to plan and execute successful tech workshops and meetups.',
      ],
    },
    {
      title:    'Co-Lead',
      org:      'She Code Africa · Babcock University Chapter',
      period:   'Aug 2024 – Jun 2025',
      bullets: [
        'Co-led mentoring sessions and community events supporting women entering tech careers; built a supportive, sustainable campus chapter.',
      ],
    },
  ],

  skills: {
    'Frontend':          'JavaScript, TypeScript, HTML, CSS, React, Angular, Next.js, Tailwind CSS, Bootstrap',
    'Backend & Databases': 'Node.js, REST APIs, MongoDB, Firebase, Supabase',
    'Cloud & DevOps':    'Git, GitHub, GitLab, AWS, Azure',
    'Tools':             'Visual Studio Code, Trello, Notion',
    'Practices':         'Agile Methodologies, Responsive Design, Version Control, Testing & Debugging, Component-Based Architecture',
    'Management':        'Event Planning, Stakeholder Communication, Cross-Functional Collaboration, Team Coordination, Project Management',
  },
};

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
  role: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    gap: '4px',
    marginBottom: '4px',
  },
  roleTitle: {
    fontFamily: "'Cormorant Garamond', Georgia, serif",
    fontSize: '1.05rem',
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
    fontSize: '0.8rem',
    color: '#555',
    marginBottom: '6px',
  },
  bullet: {
    fontSize: '0.8rem',
    color: '#444',
    lineHeight: 1.65,
    marginBottom: '3px',
    paddingLeft: '14px',
    position: 'relative',
  },
};

function Section({ title, children }) {
  return (
    <section style={{ marginBottom: '28px' }}>
      <h2 style={s.sectionTitle}>{title}</h2>
      {children}
    </section>
  );
}

function RoleBlock({ title, org, period, location, bullets, stack }) {
  return (
    <div style={{ marginBottom: '18px' }}>
      <div style={s.role}>
        <span style={s.roleTitle}>{title}</span>
        <span style={s.period}>{period}</span>
      </div>
      <div style={s.org}>
        {org}
        {location && <span style={{ color: '#aaa' }}> · {location}</span>}
        {stack && <span style={{ color: '#C9A84C' }}> · {stack}</span>}
      </div>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {bullets.map((b, i) => (
          <li key={i} style={s.bullet}>
            <span style={{
              position: 'absolute',
              left: 0,
              color: '#C9A84C',
              fontWeight: 700,
              fontSize: '0.6rem',
              top: '0.35rem',
            }}>◆</span>
            {b}
          </li>
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
      {/* Print / Download bar — hidden on print */}
      <div
        className="no-print"
        style={{
          position: 'sticky',
          top: '80px',
          zIndex: 30,
          borderBottom: '1px solid var(--border)',
          backgroundColor: 'var(--bg-surface)',
          padding: '10px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '12px',
        }}
      >
        <Link
          href="/"
          style={{
            fontSize: '0.75rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--text-muted)',
            textDecoration: 'none',
          }}
        >
          ← Back
        </Link>
        <button
          onClick={() => window.print()}
          style={{
            fontSize: '0.72rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            padding: '8px 20px',
            border: '1px solid #C9A84C',
            color: '#C9A84C',
            background: 'transparent',
            cursor: 'pointer',
            fontFamily: 'Inter, sans-serif',
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
          maxWidth: '820px',
          margin: '48px auto 80px',
          padding: '56px 60px',
          backgroundColor: '#FEFEFE',
          color: '#0D0D0D',
          fontFamily: 'Inter, system-ui, sans-serif',
          fontSize: '0.82rem',
          lineHeight: 1.6,
          boxShadow: '0 4px 40px rgba(0,0,0,0.08)',
        }}
      >
        {/* ── Header ── */}
        <header style={{ marginBottom: '32px', borderBottom: '2px solid #0D0D0D', paddingBottom: '20px' }}>
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: '2.8rem',
              fontWeight: 500,
              letterSpacing: '-0.01em',
              color: '#0D0D0D',
              margin: 0,
              lineHeight: 1.1,
            }}
          >
            {CV.name}
          </h1>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: '1rem',
              color: '#555',
              marginTop: '6px',
              marginBottom: '16px',
              fontStyle: 'italic',
              letterSpacing: '0.03em',
            }}
          >
            {CV.roles}
          </p>

          {/* Contact row — plain text links */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px 24px' }}>
            {CV.contact.map(({ label, value, href }) => (
              <span key={label} style={{ fontSize: '0.74rem', color: '#444' }}>
                <span style={{ color: '#C9A84C', fontWeight: 600, marginRight: '4px' }}>{label}:</span>
                <a
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  style={{ color: '#222', textDecoration: 'none' }}
                >
                  {value}
                </a>
              </span>
            ))}
          </div>
        </header>

        {/* ── Profile ── */}
        <Section title="Profile">
          <p style={{ fontSize: '0.81rem', color: '#444', lineHeight: 1.7 }}>{CV.profile}</p>
        </Section>

        {/* ── Education ── */}
        <Section title="Education">
          {CV.education.map((edu, i) => (
            <div key={i} style={{ marginBottom: '12px' }}>
              <div style={s.role}>
                <span style={s.roleTitle}>{edu.degree}</span>
                <span style={s.period}>{edu.period}</span>
              </div>
              <div style={s.org}>{edu.school} · {edu.location}</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {edu.details.map((d, j) => (
                  <li key={j} style={s.bullet}>
                    <span style={{ position: 'absolute', left: 0, color: '#C9A84C', fontWeight: 700, fontSize: '0.6rem', top: '0.35rem' }}>◆</span>
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Section>

        {/* ── Professional Experience ── */}
        <Section title="Professional Experience">
          {CV.professional.map((item, i) => (
            <RoleBlock key={i} {...item} />
          ))}
        </Section>

        {/* ── Projects ── */}
        <Section title="Projects">
          {CV.projects.map((proj, i) => (
            <div key={i} style={{ marginBottom: '16px' }}>
              <div style={s.role}>
                <span style={s.roleTitle}>
                  {proj.title}
                  <span style={{ fontWeight: 400, fontSize: '0.9rem', color: '#666', marginLeft: '8px', fontFamily: 'inherit' }}>
                    — {proj.subtitle}
                  </span>
                </span>
                <span style={s.period}>{proj.year}</span>
              </div>
              <div style={{ ...s.org, color: '#C9A84C', marginBottom: '5px' }}>{proj.stack}</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {proj.bullets.map((b, j) => (
                  <li key={j} style={s.bullet}>
                    <span style={{ position: 'absolute', left: 0, color: '#C9A84C', fontWeight: 700, fontSize: '0.6rem', top: '0.35rem' }}>◆</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Section>

        {/* ── Leadership & Community ── */}
        <Section title="Leadership & Community Involvement">
          {CV.leadership.map((item, i) => (
            <RoleBlock key={i} {...item} />
          ))}
        </Section>

        {/* ── Technical Skills ── */}
        <Section title="Technical Skills">
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <tbody>
              {Object.entries(CV.skills).map(([category, items]) => (
                <tr key={category} style={{ borderBottom: '1px solid #F0EDE8' }}>
                  <td
                    style={{
                      padding: '6px 12px 6px 0',
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      color: '#888',
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      whiteSpace: 'nowrap',
                      verticalAlign: 'top',
                      width: '155px',
                    }}
                  >
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

      {/* Inline font for CV */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Inter:wght@300;400;500;600&display=swap');
        @media print {
          .no-print { display: none !important; }
          header[class], footer[class] { display: none !important; }
          #cv-document {
            box-shadow: none !important;
            margin: 0 !important;
            padding: 28px 36px !important;
            max-width: 100% !important;
          }
          body { background: white !important; }
        }
      `}</style>
    </>
  );
}
