import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-scroll';

export const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-200">
            <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
                {/* Branding */}
                <div className="text-center md:text-left">
                    <h2 className="text-xl font-semibold text-gray-800">Hemant Kaushik</h2>
                    <p className="text-gray-500 text-sm">Software Engineer and Full-Stack Developer</p>
                </div>

                {/* Navigation */}
                <ul className="flex gap-6 text-gray-600 font-medium">
                    <li>
                        <Link to="about" spy={true} smooth={true} duration={500} offset={-70} className="hover:text-emerald-600 transition">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="experience" spy={true} smooth={true} duration={500} offset={-70} className="hover:text-emerald-600 transition">
                            Experience
                        </Link>
                    </li>
                    <li>
                        <Link to="education" spy={true} smooth={true} duration={500} offset={-70} className="hover:text-emerald-600 transition">
                            Education
                        </Link>
                    </li>
                    <li>
                        <Link to="skills" spy={true} smooth={true} duration={500} offset={-70} className="hover:text-emerald-600 transition">
                            Skills
                        </Link>
                    </li>
                    <li>
                        <Link to="contact" spy={true} smooth={true} duration={500} offset={-70} className="hover:text-emerald-600 transition">
                            Contact
                        </Link>
                    </li>
                </ul>

                {/* Social Icons */}
                <div className="flex gap-5 text-xl text-gray-600">
                    <a href="https://github.com/hemant-kaushik" target="_blank" className="hover:text-emerald-600 transition">
                        <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/hemant-kaushik17/" target="_blank" className="hover:text-emerald-600 transition">
                        <FaLinkedin />
                    </a>
                    <a href="mailto:kaushikhemant166@gmail.com" className="hover:text-emerald-600 transition">
                        <FaEnvelope />
                    </a>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="text-center text-md text-gray-400 py-4 border-t border-gray-100">
                © {new Date().getFullYear()} Hemant Kaushik
            </div>
        </footer>
    );
};
