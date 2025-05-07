import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';
import { educationData } from '../components/common';

export const Education = () => {
    return (
        <motion.div
            className="education-section flex flex-col items-center w-full min-h-screen bg-gray-50 px-4 py-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
        >
            <div className="heading flex flex-col items-center gap-3 mb-10">
                <h1 className="font-bold tracking-tight text-2xl sm:text-3xl lg:text-4xl text-gray-800">
                    Education
                </h1>
                <div className="w-24 border-b-4 border-emerald-600 rounded-full"></div>
            </div>

            <div className="lg:max-w-5xl md:max-w-3xl sm:max-w-xl mx-4">
                <div className="timeline w-full  mx-4 relative border-l-2 border-emerald-600 p-6 space-y-10">
                    {educationData.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="relative group"
                        >
                            <div className="absolute -left-4 top-1 bg-white border-4 border-emerald-600 rounded-full w-4 h-4"></div>
                            <div className="bg-white shadow-md rounded-md p-6 hover:shadow-xl transition duration-300">
                                <h2 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                                    <FaGraduationCap className="text-emerald-600" />
                                    {edu.degree}
                                </h2>
                                <p className="text-gray-600 font-medium">{edu.institution}</p>
                                <p className="text-sm text-gray-500 italic">{edu.year}</p>
                                <p className="text-gray-600 mt-2">{edu.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

        </motion.div>
    );
};
