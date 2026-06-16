import React from 'react';
import {
  FaJsSquare, FaReact, FaAngular, FaHtml5, FaCss3Alt,
  FaAws, FaGithub, FaMobileAlt, FaCodeBranch, FaTools, FaGitAlt,
} from 'react-icons/fa';
import {
  SiNotion, SiTrello, SiTypescript, SiNextdotjs, SiNodedotjs,
  SiMongodb, SiMicrosoftazure, SiTailwindcss, SiBootstrap,
  SiGitlab, SiFirebase, SiSupabase,
} from 'react-icons/si';
import { MdApi } from 'react-icons/md';
import { VscVscode } from 'react-icons/vsc';

export const technologiesCategories = [
  {
    category: 'Frontend',
    items: [
      { name: 'JavaScript',   icon: <FaJsSquare /> },
      { name: 'TypeScript',   icon: <SiTypescript /> },
      { name: 'HTML5',        icon: <FaHtml5 /> },
      { name: 'CSS3',         icon: <FaCss3Alt /> },
      { name: 'React',        icon: <FaReact /> },
      { name: 'Angular',      icon: <FaAngular /> },
      { name: 'Next.js',      icon: <SiNextdotjs /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
      { name: 'Bootstrap',    icon: <SiBootstrap /> },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js',   icon: <SiNodedotjs /> },
      { name: 'REST APIs', icon: <MdApi /> },
    ],
  },
  {
    category: 'Databases',
    items: [
      { name: 'MongoDB',  icon: <SiMongodb /> },
      { name: 'Firebase', icon: <SiFirebase /> },
      { name: 'Supabase', icon: <SiSupabase /> },
    ],
  },
  {
    category: 'Cloud & DevOps',
    items: [
      { name: 'Git',    icon: <FaGitAlt /> },
      { name: 'GitHub', icon: <FaGithub /> },
      { name: 'GitLab', icon: <SiGitlab /> },
      { name: 'AWS',    icon: <FaAws /> },
      { name: 'Azure',  icon: <SiMicrosoftazure /> },
    ],
  },
  {
    category: 'Tools',
    items: [
      { name: 'Visual Studio Code', icon: <VscVscode /> },
      { name: 'Trello',             icon: <SiTrello /> },
      { name: 'Notion',             icon: <SiNotion /> },
    ],
  },
  {
    category: 'Practices',
    items: [
      { name: 'Agile Methodologies', icon: <FaTools /> },
      { name: 'Responsive Design',   icon: <FaMobileAlt /> },
      { name: 'Version Control',     icon: <FaCodeBranch /> },
      { name: 'Testing & Debugging', icon: <FaTools /> },
    ],
  },
];

// ── Professional & Community Experience ─────────────────────────────────────
export const experiences = [
  // ── Professional ──
  {
    type: 'professional',
    title: 'Frontend Developer Intern',
    company: 'Remita Payment Services Limited (RPSL)',
    location: 'Hybrid',
    duration: 'Jan 2025 – Jun 2025',
    description: [
      'Developed web applications using Angular and TypeScript, implementing component-based architecture and following Angular best practices.',
      'Integrated RESTful APIs to enable seamless data exchange between frontend and backend services.',
      'Collaborated with frontend and QA teams to build responsive, cross-device web components.',
      'Managed code versioning with GitLab; handled merge requests and participated in structured code reviews.',
      'Conducted thorough application testing to identify and resolve bugs prior to production deployment.',
    ],
  },
  {
    type: 'professional',
    title: 'Web Developer Intern',
    company: 'DavTech',
    location: 'Remote',
    duration: 'Jul 2024 – Sep 2024',
    description: [
      'Developed both frontend and backend components for web applications, delivering end-to-end features.',
      'Implemented Firebase for database management and user authentication across multiple client projects.',
      'Improved existing applications by adding new features and resolving performance bottlenecks.',
      'Managed version control with GitHub, gaining experience in collaborative branching and conflict resolution.',
    ],
  },

  // ── Community & Leadership ──
  {
    type: 'community',
    title: 'Operations Lead',
    company: 'Google Developer Groups on Campus (GDG) · Babcock University',
    location: '',
    duration: 'Sep 2025 – Jun 2026',
    description: [
      'Oversaw day-to-day operations of GDG on Campus, coordinating logistics for technical events, workshops, and developer meetups.',
      'Managed event planning timelines, resource allocation, and vendor coordination to ensure smooth community programming.',
      'Led cross-functional collaboration between community relations, marketing, and technical teams.',
      'Tracked event metrics and community engagement data to continuously improve member experience.',
    ],
  },
  {
    type: 'community',
    title: 'Head of Operations',
    company: 'ORBIT 1.0 Industry Summit · GDG Babcock',
    location: '',
    duration: 'Mar 2026 – Apr 2026',
    description: [
      'Led operational coordination for a 3-day industry summit with 1,000+ attendees, overseeing logistics, scheduling, and on-the-day execution.',
      'Coordinated across stakeholder teams including speakers, sponsors, and field trip organisers to deliver a seamless attendee experience.',
    ],
  },
  {
    type: 'community',
    title: 'Head of Student Volunteers',
    company: 'AI & BIV Commercialization Summit 2026',
    location: '',
    duration: 'Apr 2026',
    description: [
      'Managed student volunteer teams across operational units, ensuring alignment and smooth execution throughout the summit.',
      'Supported coordination of startup pitching sessions and technical programming across event days.',
    ],
  },
  {
    type: 'community',
    title: 'Frontend Developer',
    company: 'New Horizon Tech-Hub · Babcock University',
    location: '',
    duration: 'Jan 2026 – Jul 2026',
    description: [
      'Contributed to product development within the tech hub\'s cross-functional teams, building frontend features across student-led projects.',
    ],
  },
  {
    type: 'community',
    title: 'Frontend Developer',
    company: 'Babcock University Computer Club · Development Team',
    location: '',
    duration: 'Sep 2025 – Jun 2026',
    description: [
      'Built and maintained the Computer Club\'s web platform using modern frontend frameworks; implemented responsive UI components and ensured cross-browser compatibility.',
      'Contributed to code reviews and upheld coding standards across development team projects.',
    ],
  },
  {
    type: 'community',
    title: 'Community Relations Lead',
    company: 'Google Developer Groups on Campus (GDG) · Babcock University',
    location: '',
    duration: 'Aug 2024 – Aug 2025',
    description: [
      'Reached out to external companies and organisations to establish partnerships for on-campus tech events.',
      'Wrote formal partnership proposals and collaborated across teams to plan and execute successful tech workshops and meetups.',
    ],
  },
  {
    type: 'community',
    title: 'Co-Lead',
    company: 'She Code Africa · Babcock University Chapter',
    location: '',
    duration: 'Aug 2024 – Jun 2025',
    description: [
      'Co-led mentoring sessions and community events supporting women entering tech careers; built a supportive, sustainable campus chapter.',
    ],
  },
];

// ── Projects ─────────────────────────────────────────────────────────────────
export const projects = [
  {
    title: 'Kuda Clone',
    subtitle: 'Full-Stack Banking App',
    description: 'A functional replica of the Kuda banking app with user authentication, transaction processing, and profile management, applying secure API integration patterns.',
    githubLink: 'https://github.com/Shadowdevsbu/kuda-clone',
    liveLink:   'https://kuda-clone-9bzr.vercel.app/',
    image:      '/assets/images/kuda-clone.png',
    tags:       ['React', 'Node.js', 'REST APIs'],
    year:       '2024',
  },
  {
    title: 'DevJournal',
    subtitle: 'Developer Productivity Platform',
    description: 'A platform for developers to track coding progress, document learnings, and organise technical notes — built with a clean, distraction-free interface.',
    githubLink: 'https://github.com/SharonLawal/DevJournal',
    liveLink:   'https://devjournaal.netlify.app/',
    image:      '/assets/images/journal.png',
    tags:       ['Angular', 'Node.js', 'MongoDB'],
    year:       '2024',
  },
  {
    title: 'Solex',
    subtitle: 'E-Commerce Website',
    description: 'A fully responsive e-commerce site for an innovative footwear brand, showcasing collections with optimised layouts for desktop and mobile.',
    githubLink: 'https://github.com/SharonLawal/Solex',
    liveLink:   'https://solex1.netlify.app/',
    image:      '/assets/images/solex.png',
    tags:       ['React', 'Tailwind CSS'],
    year:       '2024',
  },
  {
    title: 'Skin Sphere',
    subtitle: 'Beauty & Skincare Showcase',
    description: 'A product showcase featuring filtering, item comparison, and optimised image loading for fast, user-friendly browsing.',
    githubLink: 'https://github.com/SharonLawal/SkinsphereHNG',
    liveLink:   'https://skinsphere.netlify.app/',
    image:      '/assets/images/skinsphere.png',
    tags:       ['React', 'JavaScript'],
    year:       '2024',
  },
  {
    title: 'Portfolio Website',
    subtitle: 'Personal Portfolio',
    description: 'My personal portfolio website, built with Next.js, showcasing projects, skills and community involvement with smooth animations and a dark/light theme.',
    githubLink: 'https://github.com/SharonLawal/my-portfolio-website',
    liveLink:   'https://sharonlawal.tech/',
    image:      '/assets/images/portfolio.png',
    tags:       ['Next.js', 'React', 'Tailwind CSS'],
    year:       '2024',
  },
];
