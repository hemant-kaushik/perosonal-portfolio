import { MdWorkOutline } from "react-icons/md";
import { TbBulb } from "react-icons/tb";
import { FiBookOpen } from "react-icons/fi";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGithub, FaDatabase, FaUsers, FaComments, FaLightbulb, FaClock, FaBrain, FaSyncAlt } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiJavascript, SiTypescript, SiExpress } from 'react-icons/si';

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

export const educationData = [
    {
        degree: "Bachelor of Technology in Computer Science",
        institution: "Guru Jambheshwar University of Science & Technology, Hisar, Haryana",
        year: "2020 - 2024",
        description: "Graduated with distinction, focusing on web development, data structures and algorithms, and software engineering.",
    },
    {
        degree: "Senior Secondary Education",
        institution: "Aggarwal Public School, Ballabgarh, Faridabad, Haryana",
        year: "2019 - 2020",
        description: "I finished 12th grade with 93.6%, focusing on Physics, Chemistry, and Math.",
    },
    {
        degree: "Secondary Education",
        institution: "Aggarwal Public School, Ballabgarh, Faridabad, Haryana",
        year: "2018 - 2019",
        description: "I finished 10th grade with 88%, focusing on Science, Math, and English.",
    },
];

export const technicalSkills = [
    { name: 'React', icon: <FaReact />, color: 'text-blue-500' },
    { name: 'Node.js', icon: <FaNodeJs />, color: 'text-green-600' },
    { name: 'Express.js', icon: <SiExpress />, color: 'text-gray-800' },
    { name: 'MongoDB', icon: <SiMongodb />, color: 'text-green-500' },
    { name: 'JavaScript', icon: <SiJavascript />, color: 'text-yellow-400' },
    { name: 'TypeScript', icon: <SiTypescript />, color: 'text-blue-700' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: 'text-cyan-500' },
    { name: 'HTML5', icon: <FaHtml5 />, color: 'text-orange-600' },
    { name: 'CSS3', icon: <FaCss3Alt />, color: 'text-blue-600' },
    { name: 'GitHub', icon: <FaGithub />, color: 'text-black' },
    { name: 'SQL', icon: <FaDatabase />, color: 'text-indigo-500' },
];

export const softSkills = [
    { name: 'Teamwork', icon: <FaUsers /> },
    { name: 'Communication', icon: <FaComments /> },
    { name: 'Problem Solving', icon: <FaLightbulb /> },
    { name: 'Time Management', icon: <FaClock /> },
    { name: 'Adaptability', icon: <FaSyncAlt /> },
    { name: 'Critical Thinking', icon: <FaBrain /> },
];