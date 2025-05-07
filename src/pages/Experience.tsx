import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';
import { experiences } from '../components/common';

export const Experience = () => {

    const highlightKeywords = (text: string, keywords: string[]) => {
        const parts = text.split(new RegExp(`(${keywords.join('|')})`, 'gi'));
        return parts.map((part, index) =>
            keywords.some(keyword => part.toLowerCase() === keyword.toLowerCase()) ? (
                <span key={index} className="text-emerald-600 font-extrabold">{part}</span>
            ) : (
                <span key={index}>{part}</span>
            )
        );
    };

    return (
        <motion.div
            className="experience-section flex flex-col items-center w-full min-h-screen bg-gray-50 px-4 py-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
        >
            <div className="heading flex flex-col items-center gap-3 mb-10">
                <h1 className="font-bold tracking-tight text-2xl sm:text-3xl lg:text-4xl text-gray-800">
                    Experience
                </h1>
                <div className="w-24 border-b-4 border-emerald-600 rounded-full"></div>
            </div>

            <div className="w-full lg:max-w-5xl md:max-w-3xl sm:max-w-xl flex flex-col gap-8 mx-4">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        className="bg-white shadow-md rounded-xl p-6 mx-4 border-l-4 border-emerald-600 relative"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className="absolute -left-6 top-6 bg-emerald-600 text-white p-2 rounded-full">
                            <FaBriefcase />
                        </div>
                        <h2 className="text-xl font-bold text-gray-800">{exp.role}</h2>
                        <h3 className="text-sm text-gray-500 font-medium">{exp.company} • {exp.period}</h3>
                        {exp.description?.length > 0 && (
                            <ul className="list-disc list-inside space-y-2 mt-4">
                                {exp.description.map((desc: string, index: number) => (
                                    <li key={index} className="text-gray-600 font-medium">
                                        {highlightKeywords(desc, ['Wahbooks', 'OmniSync'])}
                                    </li>
                                ))}
                            </ul>
                        )}
                        <div className="flex flex-wrap gap-2 mt-4">
                            {exp.tools.map((tool, i) => (
                                <span
                                    key={i}
                                    className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium"
                                >
                                    {tool}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};
