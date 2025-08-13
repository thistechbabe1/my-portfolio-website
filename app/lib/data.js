import React from 'react';
import { FaJsSquare, FaReact, FaAngular, FaHtml5, FaCss3Alt, FaAws, FaGithub, FaMobileAlt, FaCodeBranch, FaTools, FaGitAlt } from 'react-icons/fa';
import { SiNotion, SiTrello, SiTypescript, SiNextdotjs, SiNodedotjs, SiMongodb, SiMicrosoftazure, SiTailwindcss, SiBootstrap, SiGitlab, SiFirebase, SiSupabase } from 'react-icons/si';
import { MdApi } from 'react-icons/md';
import { VscVscode } from 'react-icons/vsc';

export const technologiesCategories = [
  {
    category: "Frontend",
    items: [
      { name: "JavaScript", icon: <FaJsSquare /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
      { name: "React", icon: <FaReact /> },
      { name: "Angular", icon: <FaAngular /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Bootstrap", icon: <SiBootstrap /> },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "REST APIs", icon: <MdApi /> },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Firebase", icon: <SiFirebase /> },
      { name: "Supabase", icon: <SiSupabase /> },
    ],
  },
  {
    category: "Cloud & DevOps",
    items: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "GitLab", icon: <SiGitlab /> },
      { name: "AWS", icon: <FaAws /> },
      { name: "Azure", icon: <SiMicrosoftazure /> },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Visual Studio Code", icon: <VscVscode /> },
      { name: "Trello", icon: <SiTrello /> },
      { name: "Notion", icon: <SiNotion /> },
    ],
  },
  {
    category: "Practices",
    items: [
      { name: "Agile methodologies", icon: <FaTools /> },
      { name: "Responsive Design", icon: <FaMobileAlt /> },
      { name: "Version Control", icon: <FaCodeBranch /> },
      { name: "Testing", icon: <FaTools /> },
    ],
  },
];

export const experiences = [
  {
    title: "Frontend Developer Intern",
    company: "Remita Payment Services Limited (RPSL)",
    location: "Hybrid",
    duration: "Jan 2025 – June 2025",
    description: [
      `Worked with frontend and QA teams to build user-friendly web components that work well on all devices.`,
      `Built web applications using Angular and TypeScript, making sure to follow good coding practices.`,
      `Connected different APIs to fetch data and make sure the frontend and backend communicate properly.`,
      `Tested applications thoroughly to find and fix bugs before users encountered them.`,
      `Used GitLab for code management, handled merge requests, and participated in code reviews.`
    ],
  },
  {
    title: "Web Developer Intern",
    company: "DavTech",
    location: "Remote",
    duration: "July 2024 – Sep 2024",
    description: [
      `Got hands-on experience building both frontend and backend parts of web applications.`,
      `Used Firebase to handle databases and user authentication for the projects I worked on.`,
      `Worked closely with my team throughout different phases of our projects.`,
      `Used GitHub for version control and learned how to handle merge conflicts effectively.`,
      `Helped improve existing web applications by adding new features and fixing performance issues.`
    ],
  },
];

export const projects = [
  {
    title: "Kuda Clone - Banking App Recreation",
    description: "Built a working copy of the Kuda banking app with features like user login, processing transactions, and managing user profiles. This project helped me practice full-stack development and learn how to integrate APIs securely.",
    githubLink: "https://github.com/Shadowdevsbu/kuda-clone",
    liveLink: "https://kuda-clone-9bzr.vercel.app/",
    image: "/assets/images/kuda-clone.png",
    languagesUsed: ["React", "Tailwind CSS", "Node.js", "Express", "JavaScript"]
  },
  {
    title: "DevJournal - Developer's Journal",
    description: "Created a productivity tool for developers using Angular and Node.js. The platform helps developers track their coding progress, document what they learn, and organize their technical notes. I used MongoDB for data storage and focused on making the interface easy to use.",
    githubLink: "https://github.com/SharonLawal/DevJournal",
    liveLink: "https://devjournaal.netlify.app/",
    image: "/assets/images/journal.png",
    languagesUsed: ["Angular", "Bootstrap", "JavaScript", "Node.js", "Express", "MongoDB"]
  },
  {
    title: "Solex - Innovative Footwear Brand",
    description: "Built a responsive e-commerce website for a footwear brand using React and Tailwind CSS. The site showcases different shoe collections with clean layouts and works smoothly on both desktop and mobile devices.",
    githubLink: "https://github.com/SharonLawal/Solex",
    liveLink: "https://solex1.netlify.app/",
    image: "/assets/images/solex.png",
    languagesUsed: ["React", "Tailwind CSS", "JavaScript"]
  },
  {
    title: "Skin Sphere - Beauty & Skincare E-commerce",
    description: "Developed a website for showcasing beauty and skincare products using React. I added features like filtering products, comparing different items, and optimized how images load to make the site fast and user-friendly.",
    githubLink: "https://github.com/SharonLawal/SkinsphereHNG",
    liveLink: "https://skinsphere.netlify.app/",
    image: "/assets/images/skinsphere.png",
    languagesUsed: ["React", "Tailwind CSS", "JavaScript"]
  },
  {
    title: "Portfolio Website",
    description: "Built my personal portfolio website to showcase my projects and skills. I added CSS animations and interactive elements to make it engaging while ensuring it loads quickly and is accessible to all users.",
    githubLink: "https://github.com/SharonLawal/my-portfolio-website",
    liveLink: "https://sharonlawal.tech/",
    image: "/assets/images/portfolio.png",
    languagesUsed: ["Next.js", "React", "Tailwind CSS", "JavaScript"]
  }
];
