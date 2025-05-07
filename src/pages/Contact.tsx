import { motion } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { Button } from '../components/Button';

export const Contact = () => {
    return (
        <motion.div
            className="contact-section flex flex-col items-center w-full min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 px-4 py-20 gap-10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
        >
            {/* Heading */}
            <div className="heading flex flex-col items-center gap-3">
                <h1 className="font-bold tracking-tight text-2xl sm:text-3xl lg:text-4xl text-gray-800">
                    Get in Touch
                </h1>
                <div className="w-24 border-b-4 border-emerald-600 rounded-full"></div>
            </div>

            {/* Description */}
            <p className="text-lg text-center text-gray-700 max-w-2xl mx-4">
                Have a project in mind or just want to say hello? Feel free to reach out. I'm always open to discussing new ideas and opportunities.
            </p>

            {/* Contact Grid */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 mx-4 lg:max-w-5xl md:max-w-3xl sm:max-w-xl">
                {/* Contact Info */}
                <div className="flex flex-col gap-6 text-gray-700 text-base mx-4">
                    <div className="flex items-center gap-4 hover:scale-105 transition-transform">
                        <FaEnvelope className="text-emerald-600 text-2xl" />
                        <span className="text-lg font-medium">kaushikhemant166@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-4 hover:scale-105 transition-transform">
                        <FaPhoneAlt className="text-emerald-600 text-2xl" />
                        <span className="text-lg font-medium">+91 80766 04312</span>
                    </div>
                    <div className="flex items-center gap-4 hover:scale-105 transition-transform">
                        <FaMapMarkerAlt className="text-emerald-600 text-2xl" />
                        <span className="text-lg font-medium">Jewar, Gautam Buddha Nagar, India</span>
                    </div>
                </div>

                {/* Contact Form */}
                <form className="bg-white rounded-lg shadow-lg p-8 flex flex-col gap-6 mx-4">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                    />
                    <textarea
                        rows={10}
                        placeholder="Your Message"
                        className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                    />
                    <Button
                        type="submit"
                        id='contact_button'
                        buttonType="fill"
                    >
                        Send Message
                    </Button>
                </form>
            </div>
        </motion.div>
    );
};