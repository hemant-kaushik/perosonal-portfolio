import { motion } from 'framer-motion';
import { softSkills, technicalSkills } from '../components/common';

export const Skills = () => {
    return (
        <motion.div
            className="skills-section flex flex-col items-center w-full min-h-screen bg-gray-50 px-4 py-20 gap-10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
        >
            <div className="heading flex flex-col items-center gap-3">
                <h1 className="font-bold tracking-tight text-2xl sm:text-3xl lg:text-4xl text-gray-800">
                    Skills
                </h1>
                <div className="w-24 border-b-4 border-emerald-600 rounded-full"></div>
            </div>

            {/* Technical Skills */}
            <p className='text-lg text-center text-gray-700 max-w-2xl mx-4'>A showcase of my technical expertise and professional capabilities.</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mx-5 w-full lg:max-w-5xl md:max-w-3xl sm:max-w-xl mb-16">
                {technicalSkills.map((skill, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
                    >
                        <div className={`text-4xl mb-2 ${skill.color}`}>{skill.icon}</div>
                        <p className="text-center font-semibold text-gray-700">{skill.name}</p>
                    </div>
                ))}
            </div>

            {/* Soft Skills */}
            <div className="soft-skills mx-5 w-full lg:max-w-5xl md:max-w-3xl sm:max-w-xl">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Soft Skills</h2>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4 text-center">
                    {softSkills.map((skill, index) => (
                        <li
                            key={index}
                            className="bg-white rounded-lg shadow p-4 font-medium text-gray-600 hover:bg-emerald-50 hover:text-emerald-600 transition-colors flex flex-col items-center"
                        >
                            <div className="text-2xl mb-2 text-emerald-500">{skill.icon}</div>
                            {skill.name}
                        </li>
                    ))}
                </ul>
            </div>
        </motion.div>
    );
};
