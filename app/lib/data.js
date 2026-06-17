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
import { VscVscode as VscVscodeIcon } from 'react-icons/vsc';

// We reuse the imported icons for categories
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
      { name: 'Visual Studio Code', icon: <VscVscodeIcon /> },
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

export const experiences = [
  {
    type: 'professional',
    title: 'Frontend Developer',
    company: 'Babcock University Computer Club',
    location: '',
    duration: 'Sep 2025 – Jun 2026',
    description: [
      "Built and maintained the Computer Club's primary web platform utilizing modern frontend frameworks (React/Next.js), ensuring cross-browser compatibility and optimized load times.",
      "Contributed to code reviews and upheld coding standards across development team projects."
    ]
  },
  {
    type: 'professional',
    title: 'Frontend Developer Intern',
    company: 'Remita Payment Services Limited (RPSL)',
    location: 'Hybrid',
    duration: 'Jan 2025 – Jun 2025',
    description: [
      "Developed web applications using Angular and TypeScript, implementing component-based architecture and following Angular best practices.",
      "Integrated RESTful APIs to enable seamless data exchange between frontend and backend services.",
      "Collaborated with frontend and QA teams to build responsive, cross-device web components.",
      "Managed code versioning with GitLab and handled merge requests and participated in structured code reviews.",
      "Conducted thorough application testing to identify and resolve bugs prior to production deployment."
    ]
  },
  {
    type: 'professional',
    title: 'Web Developer Intern',
    company: 'DavTech',
    location: 'Remote',
    duration: 'Jul 2024 – Sep 2024',
    description: [
      "Developed both frontend and backend components for web applications, delivering end-to-end features.",
      "Implemented Firebase for database management and user authentication across multiple client projects.",
      "Improved existing applications by adding new features and resolving performance bottlenecks.",
      "Managed version control with GitHub, gaining experience in collaborative branching and conflict resolution."
    ]
  },
  {
    type: 'community',
    title: 'Vice President (Operations)',
    company: 'New Horizon Tech-Hub · Babcock University',
    location: '',
    duration: 'Jan 2026 – Jul 2026',
    description: [
      "Orchestrated the operational lifecycle of cross-functional student-led projects, overseeing technical teams from product ideation through to successful deployment.",
      "Bridged the gap between engineering execution and strategic goals, ensuring strict team alignment and timely delivery of tech hub initiatives."
    ]
  },
  {
    type: 'community',
    title: 'Head of Operations',
    company: 'ORBIT 1.0 Industry Summit · GDG Babcock',
    location: '',
    duration: 'Mar 2026 – Apr 2026',
    description: [
      "Led operational coordination for a 3-day industry summit with 1,000+ attendees, overseeing logistics, scheduling, and on-the-day execution.",
      "Coordinated across stakeholder teams, managing resource allocation and timelines between speakers, sponsors, and field trip organizers."
    ]
  },
  {
    type: 'community',
    title: 'Head of Student Volunteers',
    company: 'AI & BIV Commercialization Summit 2026 · Babcock University',
    location: '',
    duration: 'Apr 2026',
    description: [
      "Managed student volunteer teams across operational units, ensuring alignment and smooth execution throughout the summit.",
      "Supported coordination of startup pitching sessions and technical programming across event days."
    ]
  },
  {
    type: 'community',
    title: 'Operations Lead',
    company: 'Google Developer Groups on Campus (GDG) · Babcock University',
    location: '',
    duration: 'Sep 2025 – Jun 2026',
    description: [
      "Oversaw day-to-day operations of GDG on Campus, coordinating logistics for technical events, workshops, and developer meetups.",
      "Managed event planning timelines, resource allocation, and vendor coordination to ensure smooth community programming.",
      "Tracked event metrics and community engagement data to continuously improve member experience."
    ]
  },
  {
    type: 'community',
    title: 'Community Relations Lead',
    company: 'Google Developer Groups on Campus (GDG) · Babcock University',
    location: '',
    duration: 'Aug 2024 – Aug 2025',
    description: [
      "Reached out to external companies and organisations to establish partnerships for on-campus tech events.",
      "Wrote formal partnership proposals and collaborated across teams to plan and execute successful tech workshops and meetups."
    ]
  }
];

export const projects = [
  {
    title: 'DevJournal',
    subtitle: 'Developer Productivity Platform',
    description: 'Created a platform for developers to track coding progress, document learnings, and organise technical notes, with a focus on clean, distraction-free UI.',
    githubLink: 'https://github.com/thistechbabe1/DevJournal',
    liveLink:   'https://devjournaal.netlify.app/',
    image:      '/assets/images/journal.png',
    tags:       ['Angular', 'Node.js', 'MongoDB'],
    year:       '2024',
  },
  {
    title: 'Solex',
    subtitle: 'E-Commerce Website',
    description: 'Built a fully responsive e-commerce site for an innovative footwear brand, showcasing collections with optimised layouts for desktop and mobile.',
    githubLink: 'https://github.com/thistechbabe1/Solex',
    liveLink:   'https://solex1.netlify.app/',
    image:      '/assets/images/solex.png',
    tags:       ['React', 'Tailwind CSS'],
    year:       '2024',
  },
  {
    title: 'Skin Sphere',
    subtitle: 'Beauty & Skincare Showcase',
    description: 'Developed a product showcase featuring filtering, item comparison, and optimised image loading for fast, user-friendly browsing.',
    githubLink: 'https://github.com/thistechbabe1/SkinsphereHNG',
    liveLink:   'https://skinsphere.netlify.app/',
    image:      '/assets/images/skinsphere.png',
    tags:       ['React', 'JavaScript'],
    year:       '2024',
  },
];

export const siteConfig = {
  name: 'Sharon Lawal',
  tagline: 'Software Engineer with experience building web applications using Angular, React, and TypeScript, and a strong background in operations and project management. Passionate about building impactful digital experiences.',
  rolesText: 'Software Engineer  ·  Project Manager',
  bio: [
    "Software Engineer with experience building web applications using Angular, React, and TypeScript. Gained hands-on experience in API integration, feature development, and cross-functional collaboration through internships at Remita Payment Services Limited (RPSL) and DavTech. Strong foundation in problem-solving and delivering user-focused solutions, complemented by leadership experience in operations, event management, and team coordination.",
    "Brings a blend of technical expertise, organizational skills, and adaptability, with an interest in opportunities that combine technology, operations, and management."
  ],
  email: 'sharonayolawal@gmail.com',
  phone: '+234 913 418 0175',
  linkedinUrl: 'https://www.linkedin.com/in/sharon-lawal-9b7289261/',
  githubUrl: 'https://github.com/thistechbabe1',
  twitterUrl: 'https://x.com/thistechbabe',
  websiteUrl: 'https://sharonlawal.tech',
};

export const roles = ['Software Engineer', 'Project Manager', 'Frontend Developer'];

export const navLinks = [
  { label: 'About',      href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Contact',    href: '#contact' },
];

export const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sharon-lawal-9b7289261/', platform: 'linkedin' },
  { label: 'GitHub',   href: 'https://github.com/thistechbabe1',                    platform: 'github' },
  { label: 'Twitter',  href: 'https://x.com/thistechbabe',                           platform: 'twitter' },
  { label: 'Email',    href: 'mailto:sharonayolawal@gmail.com',                      platform: 'email' },
];

export const skills = [
  'JavaScript', 'TypeScript', 'React', 'Angular', 'Next.js',
  'Node.js', 'REST APIs', 'MongoDB', 'Firebase', 'Tailwind CSS',
  'Git / GitHub / GitLab', 'Agile', 'Project Management',
];

export const stats = [
  { value: '2+',  label: 'Years of\nCoding' },
  { value: '3+',  label: 'Projects\nDelivered' },
  { value: '5+',  label: 'Community\nRoles' },
];

export const education = {
  degree:   'B.Sc. Software Engineering',
  school:   'Babcock University',
  location: 'Ilishan-Remo, Ogun State, Nigeria',
  period:   '2022 – 2026',
  details: [
    'Cumulative GPA: 4.58 / 5.00',
    'Relevant Coursework: Data Structures & Algorithms, Operating Systems, Web Development, Model-Based Software Engineering, Software Security Engineering, Programming in Java, Embedded Systems, Object-Oriented Software Development, Linux System Administration, Artificial Intelligence & Applications',
  ],
};

export const cvSkills = {
  'Frontend':            'JavaScript, TypeScript, HTML, CSS, React, Angular, Next.js, Tailwind CSS, Bootstrap',
  'Backend & Databases': 'Node.js, REST APIs, MongoDB, Firebase, Supabase',
  'Cloud & DevOps':      'Git, GitHub, GitLab, AWS, Azure',
  'Tools':               'Visual Studio Code, Trello, Notion',
  'Practices':           'Agile Methodologies, Responsive Design, Version Control, Testing & Debugging, Component-Based Architecture',
  'Management':          'Event Planning, Stakeholder Communication, Cross-Functional Collaboration, Team Coordination, Project Management',
};
