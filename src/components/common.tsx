import { MdWorkOutline } from "react-icons/md";
import { TbBulb } from "react-icons/tb";
import { FiBookOpen } from "react-icons/fi";

export const aboutSectionContentArray = [
    { description: 'I am a software developer with a passion for creating dynamic and responsive web applications. My journey in the tech world has been fueled by curiosity and a desire to solve real-world problems.' },
    { description: 'I specialize in full-stack development with expertise in modern frameworks. My approach combines technical excellence with creative problem-solving.' },
    { description: 'When I\'m not coding, you can find me exploring new technologies, reading tech blogs, or enjoying a good cup of coffee.' }
]

export const aboutSectionBoxArray = ['React', 'NodeJs', 'ExpressJs', 'MongoDB'];

export const aboutSectionIconDataArray = [
    {
        icon: <MdWorkOutline />,
        title: '1+ Years Experience',
        description: 'Working on enterprise applications'
    },
    {
        icon: <TbBulb />,
        title: 'Problem Solver',
        description: 'Technical challenges are my forte'
    },
    {
        icon: <FiBookOpen />,
        title: 'Lifelong Learner',
        description: 'Always eager to learn new technologies and expand my skill set'
    }
]
export const aboutSectionSkillsArray = [
    {
        title: 'Frontend',
        skills: ['React', 'Redux & Context API', 'Tailwind CSS', 'JavaScript ES6+'],
    },
    {
        title: 'Backend',
        skills: ['Node.js & Express', 'MongoDB & PostgreSQL', 'REST APIs'],
    },
    {
        title: 'Programming & Tools',
        skills: ['C++', 'Data Structure & Algorithms', 'Git & GitHub'],
    },
]

export const experiences = [
    {
        role: "Junior Software Developer & Engineer",
        company: "Repozitory Technologies Pvt. Ltd.",
        period: "Jan 2024 - Present",
        description: [
            `Developed and maintained a scalable web application using the MERN stack, called Wahbooks designed as an Accounting & Inventory Management Software for the Wholesale Pharmaceutical Market.`,
            `Worked on a enterprise application, called OmniSync designed as an Accounting & Inventory Management Software for the Wholesale Steel Market.`,
            `Optimized database queries resulting in 60% faster page loads and improved user experience.`,
            `Collaborated with cross-functional teams to gather requirements and implement new features, enhancing user satisfaction by 30%.`,
        ],
        tools: ["React", "Tailwind", "TypeScript", "Node.js", "Express", "PostgreSQL", "Sequalize"],
    },
    {
        role: "MERN Stack Developer Intern",
        company: "Croxaint Digital Pvt. Ltd.",
        period: "Oct 2022 - Jan 2023",
        description: [
            `Designed and implemented responsive web pages compatible across multiple browsers and devices.`,
            `Collaborated with the design team to create user-friendly interfaces and improve user experience.`,
            `Participated in code reviews and contributed to team knowledge sharing sessions.`,
        ],
        tools: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    },
];