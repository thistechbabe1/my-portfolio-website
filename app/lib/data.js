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
      "Developed and shipped production-ready Angular and TypeScript components integrated into a platform serving millions of active users across Nigeria.",
      "Integrated RESTful APIs across 3+ frontend modules, enabling real-time data exchange between frontend and backend services.",
      "Collaborated with frontend and QA teams to build responsive, cross-device web components, reducing reported UI defects through thorough pre-release testing.",
      "Participated in structured code reviews across a team of 6+ engineers, maintaining code quality and consistency on GitLab.",
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
      "Oversaw the operational lifecycle of 3 cross-functional student-led projects across 3 teams within 4 months, with 3 projects reaching live deployment.",
      "Coordinated 20+ contributors across parallel product teams, bridging engineering execution and strategic delivery timelines to ensure on-schedule releases."
    ]
  },
  {
    type: 'community',
    title: 'Head of Operations',
    company: 'ORBIT 1.0 Industry Summit · GDG Babcock',
    location: '',
    duration: 'Mar 2026 – Apr 2026',
    description: [
      "Led operational coordination for a 3-day industry summit with 1,000+ attendees, managing logistics for 9 industry speakers including representatives from Google, Mastercard, and Moniepoint.",
      "Coordinated across 8 external partners and oversaw ₦5,000,000 in secured sponsorships, managing resource allocation and timelines between speakers, sponsors, and field trip organizers."
    ]
  },
  {
    type: 'community',
    title: 'Head of Student Volunteers',
    company: 'AI & BIV Commercialization Summit 2026 · Babcock University',
    location: '',
    duration: 'Apr 2026',
    description: [
      "Managed 53 student volunteers across 7 operational units, maintaining alignment and smooth execution throughout the summit.",
      "Supported coordination of startup pitching sessions featuring 29 startups and 8 judges, standardising slide submission and technical processes to prevent live-session disruptions."
    ]
  },
  {
    type: 'community',
    title: 'Operations Lead',
    company: 'Google Developer Groups on Campus (GDG) · Babcock University',
    location: '',
    duration: 'Sep 2025 – Jun 2026',
    description: [
      "Coordinated operations for a community of 300+ active members, achieving approximately 70% member retention across the academic year.",
      "Planned and executed 5 monthly meetups (averaging 100 attendees each) and 10 weekly sessions (averaging 50 participants per session).",
      "Led cross-functional collaboration across community relations, marketing, and technical teams of 10+ organizers, tracking event metrics to improve future programming."
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
  rolesText: 'Operations Executive | Project Manager | Software Engineer',
  bio: [
    "Software Engineer with experience building web applications using Angular, React, and TypeScript. Gained hands-on experience in API integration, feature development, and cross-functional collaboration through internships at Remita Payment Services Limited (RPSL) and DavTech. Strong foundation in problem-solving and delivering user-focused solutions, complemented by a proven track record in operations leadership, event management, and cross-functional team coordination across large-scale technical programmes.",
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
  period:   '2022-2026',
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
