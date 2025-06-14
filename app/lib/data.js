import React from 'react';
import { FaJsSquare, FaPython, FaReact, FaAngular, FaHtml5, FaCss3Alt, FaAws, FaGithub } from 'react-icons/fa';
import { SiNotion, SiTrello, SiTypescript, SiNextdotjs, SiNodedotjs, SiMongodb, SiMysql, SiMicrosoftazure, SiTailwindcss, SiBootstrap } from 'react-icons/si';
import { MdApi } from 'react-icons/md';
import { BiMicrochip } from 'react-icons/bi';
import { AiOutlineDeploymentUnit } from 'react-icons/ai';

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
      { name: "Notion", icon: <SiNotion /> },
      { name: "Trello", icon: <SiTrello /> },
    ],
  },
];

export const experiences = [
  {
    title: "Web Developer Intern",
    company: "DavTech",
    location: "Remote",
    duration: "July 2024 – Present",
    description: [
      `Engaged in comprehensive frontend and backend development activities.`,
      `Successfully integrated Firebase for robust database management across web applications.`,
      `Collaborated effectively within a development team to enhance web application functionality and performance.`,
      `Utilized GitHub extensively for version control, ensuring smooth collaborative workflows.`
    ],
  },
  {
    title: "Web Developer Intern",
    company: "TechnoHacks EduTech Official",
    location: "Remote",
    duration: "Jan 2024 – Feb 2024",
    description: [
      `Developed and customized various websites using core web technologies including HTML, CSS, and JavaScript.`,
      `Managed the full lifecycle of multiple web projects, consistently delivering within strict timelines.`,
      `Focused on improving overall user experience through responsive design and intuitive interfaces.`
    ],
  },
];

export const projects = [
  {
    title: "Solex - Innovative Footwear Brand",
    description:
      "Designed and developed a highly responsive e-commerce website, 'Solex', using React and Tailwind CSS.",
      // "The platform is specifically engineered to elegantly showcase the latest footwear arrivals.",
      // "Implemented a user-friendly interface to provide a seamless browsing and shopping experience."
    githubLink: "https://github.com/SharonLawal/Solex",
    liveLink: "https://solex1.netlify.app/",
    image: "/assets/images/Illustration.png",
    languagesUsed: ["React", "Tailwind CSS", "JavaScript", "HTML", "CSS"]
  },
  {
    title: "Skin Sphere",
    description: 
      "Developed 'Skin Sphere', a responsive web application designed for beauty and skincare product showcasing.",
      // "Focused on creating an intuitive user interface that enhances product discovery and engagement.",
      // "The project demonstrates strong frontend development skills in a real-world application context."
    githubLink: "https://github.com/SharonLawal/SkinsphereHNG",
    liveLink: "https://skinsphere.netlify.app/",
    image: "/assets/images/Illustration.png",
    languagesUsed: ["HTML", "CSS", "JavaScript", "React"]
  },
  {
    title: "Kuda Clone",
    description:
      "Engineered a functional clone of the Kuda banking application, replicating key features.",
      // "Implemented core functionalities for user authentication, transaction processing, and profile management.",
      // "This project highlights proficiency in full-stack development and secure API integrations."
    githubLink: "https://github.com/Shadowdevsbu/kuda-clone",
    liveLink: "https://kuda-clone-9bzr.vercel.app/",
    image: "/assets/images/Illustration.png",
    languagesUsed: ["React", "Node.js", "Express", "MongoDB", "JavaScript"]
  },
  {
    title: "Portfolio Website",
    description:
      "Designed and developed my personal portfolio website to showcase my diverse technical skills and projects.",
      // "The site features a responsive design, dynamic animations, and an intuitive user interface.",
      // "It serves as a comprehensive overview of my professional journey and capabilities as a software developer."
    githubLink: "https://github.com/SharonLawal/my-portfolio-website",
    liveLink: "https://sharonlawal.me/",
    image: "/assets/images/Illustration.png",
    languagesUsed: ["Next.js", "React", "Tailwind CSS", "JavaScript"]
  },
];
