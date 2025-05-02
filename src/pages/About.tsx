import { motion } from 'framer-motion';
import { TiTick } from "react-icons/ti";
import { aboutSectionBoxArray, aboutSectionContentArray, aboutSectionIconDataArray, aboutSectionSkillsArray } from '../components/common';
import { Button } from '../components/Button';

export const About = () => {
    return (
        <motion.div
            className="about-section flex flex-col items-center w-full min-h-screen bg-gray-50 px-4 py-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
        >
            <div className="heading flex flex-col items-center gap-3 mb-10">
                <h1 className="font-bold tracking-tight text-2xl sm:text-3xl lg:text-4xl text-gray-800">
                    About
                </h1>
                <div className="w-24 border-b-4 border-emerald-600 rounded-full"></div>
            </div>

            {/* Top Section */}
            <div className="top-section w-full mx-auto flex flex-col lg:flex-row lg:max-w-5xl md:max-w-3xl sm:max-w-xl items-stretch gap-10 mb-12">
                {/* Left Content */}
                <div className="left w-full lg:w-1/2 flex flex-col gap-4 p-2">
                    <h2 className="text-xl font-bold mx-4">Who I Am</h2>
                    {aboutSectionContentArray.map((item, index) => (
                        <p key={index} className="text-base text-gray-500 font-semibold mx-4">
                            {item.description}
                        </p>
                    ))}
                    <div className="flex flex-col gap-2 mx-4">
                        {aboutSectionIconDataArray.map((item, index) => (
                            <div key={index} className="flex items-start gap-4">
                                <div className="text-3xl text-emerald-600 bg-emerald-100 rounded-full p-2">
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 className="font-semibold">{item.title}</h3>
                                    <p className="text-gray-500 font-medium">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Boxes */}
                <div className="right w-full lg:w-1/2 flex">
                    <div className="grid grid-cols-2 gap-4 border border-gray-300 shadow-sm rounded-lg p-10 bg-emerald-50 w-full h-full mx-4">
                        {aboutSectionBoxArray.map((item, index) => (
                            <div
                                key={index}
                                className="border border-gray-200 shadow-md rounded-md bg-white flex flex-col items-center justify-center p-4"
                            >
                                <div className="lg:text-2xl md:text-2xl sm:text-xl font-bold text-emerald-600">{item}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Section: Skills */}
            <div className="bottom-section w-full lg:max-w-5xl md:max-w-3xl sm:max-w-xl mx-auto flex flex-col md:flex-row justify-between gap-6 mb-12">
                {aboutSectionSkillsArray.map((item, index) => (
                    <div
                        key={index}
                        className="flex-1 border border-gray-200 shadow-md rounded-md bg-white flex flex-col gap-2 px-6 py-4 mx-4"
                    >
                        <div className="text-xl font-bold text-emerald-600">{item.title}</div>
                        <ul className="list-none">
                            {item.skills.map((skill, skillIndex) => (
                                <li key={skillIndex} className="flex items-center gap-4 text-gray-500 font-semibold">
                                    <span className="text-white bg-emerald-600 rounded-full p-[1px]"><TiTick /></span>
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <div className="button">
                <Button
                    id='workTogether'
                    type='button'
                    buttonType="fill"
                >
                    Let's Work Together
                </Button>
            </div>
        </motion.div>
    );
};
