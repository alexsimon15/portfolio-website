import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import homestoreImg from "../public/homestore.png";
import whsmithImg from "../public/whsmith.png";
import gatwickImg from "../public/gatwick.png";

export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Experience",
        hash: "#experience",
    },
    {
        name: "Contact",
        hash: "#contact",
    },
] as const;

export const experiencesData = [
    {
        title: "Web Developer Bootcamp - CODECOOL",
        location: "Bucharest, Romania",
        description: "I graduated the web developer bootcamp after 6 months.",
        icon: React.createElement(LuGraduationCap),
        date: "03/2021 - 08/2021",
    },
    {
        title: "Back-End Developer - OSF Digital",
        location: "Bucharest, Romania",
        description:
            "I worked as an SFCC back-end developer. Also worked on many front-end tasks with client-side JavaScript and React.",
        icon: React.createElement(CgWorkAlt),
        date: "01/2022 - 09/2023",
    },
    {
        title: "React Developer - Freelancer",
        location: "Bucharest, Romania",
        description:
            "Worked as a freelance developer with React on various projects.",
        icon: React.createElement(FaReact),
        date: "12/2023 - 10/2024",
    },
] as const;

export const projectsData = [
    {
        title: "Home Store and More",
        link: "https://www.homestoreandmore.ie/",
        description:
            "Ireland’s leading independent homeware retailer. Contributed to both back-end and front-end development, with a strong focus on client-side JavaScript.",
        tags: ["HTML", "CSS", "JavaScript", "SFRA"],
        imageUrl: homestoreImg,
    },
    {
        title: "WHSmith",
        link: "https://www.whsmith.co.uk/",
        description:
            "Developed multiple sections of the website using React and TypeScript, focusing on creating a seamless user experience and improving performance.",
        tags: ["React", "TypeScript", "PWA Kit", "Chakra UI"],
        imageUrl: whsmithImg,
    },
    {
        title: "Gatwick Parking",
        link: "https://www.gatwickairport.com/parking.html",
        description:
            "Improved website functionality and user experience across key sections for the Gatwick Airport parking website.",
        tags: ["HTML", "CSS", "JavaScript", "SiteGenesis", "Page Designer"],
        imageUrl: gatwickImg,
    },
] as const;

export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Redux",
    "Tailwind",
    "Next.js",
    "Node.js",
    "SFCC",
    "Git",
] as const;
