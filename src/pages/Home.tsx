import homeBackgroundImage from '../assets/dotted.jpg';
import profilePic from '../assets/profilepic.jpg';
import { Button } from '../components/Button';
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsArrowDown } from "react-icons/bs";
import { Navbar } from '../components/Navbar';

export const Home = ({ isMobile }: { isMobile: boolean }) => {
    const renderTextSection = () => (
        <>
            <div className={`flex flex-col w-[80%] mx-auto ${isMobile ? 'text-3xl' : 'text-6xl'} font-semibold`}>
                <span className="bg-gradient-to-r from-gray-600 to-black bg-clip-text text-transparent">
                    Hello, I'm
                </span>
                <span className="bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">
                    Hemant Kaushik
                </span>
            </div>
            <p className="text-xl font-normal text-gray-800 w-[80%] mx-auto">
                Software Engineer & Full-Stack Developer
            </p>
            <div className="profile-desc text-md font-normal text-gray-700 w-[80%] mx-auto">
                <p>I build exceptional digital experiences with clean, efficient code.</p>
                <p>Specializing in modern web technologies and thoughtful UX design.</p>
            </div>
        </>
    );

    const renderButtons = () => (
        <>
            <div className="nav-buttons flex gap-4 w-[80%] mx-auto">
                <Button
                    id='view-work-btn'
                    type='button'
                    buttonType="fill"
                    className={`view-work-btn ${isMobile && '!text-sm'}`}
                >
                    View My Work
                </Button>
                <Button
                    id='get-in-touch-btn'
                    type='button'
                    className={`view-work-btn ${isMobile && '!text-sm'}`}
                >
                    Get In Touch
                </Button>
            </div>
            <div className="social-media-buttons w-[80%] mx-auto flex gap-4">
                <Button
                    id='get-in-touch-btn'
                    type='button'
                    className={`view-work-btn !border-none !text-2xl !px-[1px] ${isMobile && '!text-base'}`}
                >
                    <FaGithub />
                </Button>
                <Button
                    id='get-in-touch-btn'
                    type='button'
                    className={`view-work-btn !border-none !text-2xl !px-[1px] ${isMobile && '!text-base'}`}
                >
                    <FaLinkedinIn />
                </Button>
            </div>
        </>
    );

    return (
        <>
            <Navbar isMobile={isMobile} />
            <div
                className="relative pt-[80px] w-full h-screen flex flex-col items-center justify-center overflow-hidden" // 👈 Added relative
                style={{
                    backgroundImage: `url(${homeBackgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                {/* 👇 Overlay Layer */}
                <div className="absolute inset-0 bg-white opacity-88 z-0"></div>

                {/* 👇 Content Layer */}
                <div className={`w-full h-full flex flex-col ${!isMobile ? 'md:flex-row' : ''} items-center justify-center z-10 px-4`}>
                    {/* Right Section */}
                    <div
                        className={`right-section w-full ${isMobile ? 'h-[40%]' : 'h-full'
                            } flex items-center justify-center ${isMobile ? 'order-1' : 'order-2'}`}
                    >
                        <img
                            src={profilePic}
                            alt="Profile"
                            className={`rounded-full object-cover shadow-xl border-[6px] border-white ${isMobile ? 'w-[200px] h-[200px]' : 'w-[400px] h-[400px]'
                                } transition-transform duration-500 hover:scale-105 hover:ring-2 hover:ring-emerald-400
`}
                        />
                    </div>

                    {/* Left Section */}
                    <div
                        className={`left-section w-full ${isMobile ? 'h-[60%]' : 'h-full'
                            } flex flex-col items-center justify-center gap-6 ${isMobile ? 'order-2' : 'order-1'}`}
                    >
                        {renderTextSection()}
                        {renderButtons()}
                    </div>
                </div>

                <div className="scroll-down w-full absolute bottom-4 flex flex-col items-center justify-center gap-2 text-gray-600 animate-bounce z-10">
                    Scroll Down
                    <div className={`${isMobile ? '' : 'text-2xl'}`}><BsArrowDown /></div>
                </div>
            </div>
        </>
    );
};