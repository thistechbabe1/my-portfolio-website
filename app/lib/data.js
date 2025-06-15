import React from 'react';
import { FaJsSquare, FaPython, FaReact, FaAngular, FaHtml5, FaCss3Alt, FaAws, FaGithub, FaMobileAlt, FaCodeBranch, FaTools } from 'react-icons/fa';
import { SiNotion, SiTrello, SiTypescript, SiNextdotjs, SiNodedotjs, SiMongodb, SiMysql, SiMicrosoftazure, SiTailwindcss, SiBootstrap, SiGitlab, SiAnaconda, SiJupyter } from 'react-icons/si';
import { MdApi } from 'react-icons/md';
import { BiMicrochip } from 'react-icons/bi';
import { AiOutlineDeploymentUnit } from 'react-icons/ai';
import { VscVscode } from 'react-icons/vsc';

export const technologiesCategories = [
  {
    category: "Frontend",
    items: [
      { name: "ReactJS", icon: <FaReact /> },
      { name: "AngularJS", icon: <FaAngular /> },
      { name: "NextJS", icon: <SiNextdotjs /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
      { name: "JavaScript", icon: <FaJsSquare /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Bootstrap5", icon: <SiBootstrap /> },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "Python", icon: <FaPython /> },
      { name: "REST APIs", icon: <MdApi /> },
      { name: "Microservices", icon: <BiMicrochip /> },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "MySQL", icon: <SiMysql /> },
      { name: "MongoDB", icon: <SiMongodb /> },
    ],
  },
  {
    category: "DevOps & Tools",
    items: [
      { name: "AWS", icon: <FaAws /> },
      { name: "Azure", icon: <SiMicrosoftazure /> },
      { name: "CI/CD", icon: <AiOutlineDeploymentUnit /> },
      { name: "Git & GitHub", icon: <FaGithub /> },
      { name: "GitLab", icon: <SiGitlab /> },
      { name: "Visual Studio Code", icon: <VscVscode /> },
      { name: "Trello", icon: <SiTrello /> },
      { name: "Notion", icon: <SiNotion /> },
      { name: "Anaconda", icon: <SiAnaconda /> },
      { name: "Jupyter Notebooks", icon: <SiJupyter /> },
    ],
  },
  {
    category: "Practices",
    items: [
      { name: "Agile methodologies", icon: <FaTools /> },
      { name: "Responsive Design", icon: <FaMobileAlt /> },
      { name: "Version Control", icon: <FaCodeBranch /> },
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
      `Collaborated with cross-functional frontend and QA teams to implement responsive and accessible UI components.`,
      `Developed scalable web applications using Angular and TypeScript, adhering to best practices and coding standards.`,
      `Integrated various APIs for data fetching, ensuring seamless communication between frontend and backend systems.`,
      `Conducted comprehensive testing (including Next.js for specific environments) to identify and resolve bugs, ensuring a stable user experience.`,
      `Leveraged GitLab for version control, managing merge requests and facilitating effective code reviews.`
    ],
  },
  {
    title: "Web Developer Intern",
    company: "DavTech",
    location: "Remote",
    duration: "July 2024 – Sep 2024",
    description: [
      `Gained hands-on experience in backend development, integrating Firebase for robust database management and user authentication.`,
      `Collaborated effectively within a dynamic team, contributing to multiple project phases.`,
      `Utilized GitHub extensively for version control, ensuring smooth collaboration, code tracking, and efficient merge conflict resolution.`,
      `Contributed to enhancing the functionality and performance of web applications, streamlining the development process.`
    ],
  },
  {
    title: "Web Developer Intern",
    company: "TechnoHacks EduTech Official",
    location: "Remote",
    duration: "Jan 2024 – Feb 2024",
    description: [
      `Developed and customized interactive websites using core web technologies including HTML, CSS, and JavaScript.`,
      `Successfully managed and delivered multiple web projects within strict, often tight, timelines.`,
      `Focused on optimizing user experience through intuitive design and responsive interfaces across various devices.`
    ],
  },
];

export const projects = [
  {
    title: "Solex - Innovative Footwear Brand",
    description: "Designed and developed a highly responsive e-commerce website for 'Solex', a footwear brand, using React and Tailwind CSS. The platform is engineered to elegantly showcase the latest arrivals and provide a seamless browsing experience for customers.",
    githubLink: "https://github.com/SharonLawal/Solex",
    liveLink: "https://solex1.netlify.app/",
    image: "/assets/images/solex.png",
    languagesUsed: ["React", "Tailwind CSS", "JavaScript"]
  },
  {
    title: "Skin Sphere - Beauty & Skincare E-commerce",
    description: "Developed 'Skin Sphere', a responsive web application designed for beauty and skincare product showcasing. Focused on creating an intuitive UI that enhances product discovery and engagement, demonstrating strong frontend development skills in a real-world application context.",
    githubLink: "https://github.com/SharonLawal/SkinsphereHNG",
    liveLink: "https://skinsphere.netlify.app/",
    image: "/assets/images/skinsphere.png",
    languagesUsed: ["React", "Tailwind CSS", "JavaScript"]
  },
  {
    title: "Kuda Clone - Banking App Recreation",
    description: "Engineered a functional clone of the Kuda banking application, replicating key features like user authentication, transaction processing, and profile management. This project highlights proficiency in full-stack development and secure API integrations.",
    githubLink: "https://github.com/Shadowdevsbu/kuda-clone",
    liveLink: "https://kuda-clone-9bzr.vercel.app/",
    image: "/assets/images/kuda-clone.png",
    languagesUsed: ["React", "Tailwind CSS", "Node.js", "Express", "JavaScript"]
  },
  {
    title: "Portfolio Website",
    description: "My personal portfolio website, meticulously designed and developed to comprehensively showcase my diverse technical skills and professional projects. Features a modern, responsive design with dynamic animations and an intuitive UI.",
    githubLink: "https://github.com/SharonLawal/my-portfolio-website",
    liveLink: "https://sharonlawal.me/",
    image: "/assets/images/portfolio.png",
    languagesUsed: ["Next.js", "React", "Tailwind CSS", "JavaScript"]
  }
];
