import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { useState } from "react";

export const Navbar = ({ isMobile }: { isMobile: boolean }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMobileMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navItems = [
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about' },
        { label: 'Projects', href: '/projects' },
        { label: 'Experience', href: '/experience' },
        { label: 'Skills', href: '/skills' },
        { label: 'Contact', href: '/contact' },
    ];

    const renderNavItems = (isMobileView: boolean) => (
        <div
            className={`${isMobileView ? "flex flex-col items-center bg-white px-6 py-4 space-y-4 shadow-md" : "flex space-x-8"
                }`}
        >
            {navItems.map((item) => (
                <a
                    key={item.label}
                    href={item.href}
                    onClick={isMobileView ? () => setIsMenuOpen(false) : undefined}
                    className={`text-lg font-medium ${isMobileView ? "text-gray-500" : "text-gray-800"
                        } hover:text-blue-600 transition-all duration-300`}
                >
                    {item.label}
                </a>
            ))}
        </div>
    );

    return (
        <div className="w-full border-b-[1px] border-gray-400 shadow-md bg-white transition-all duration-300">
            {isMobile ? (
                <>
                    {/* Mobile Navigation */}
                    <div className="w-full flex justify-between items-center px-10 py-4">
                        <div className="text-2xl font-extrabold text-gray-800">H</div>
                        {isMenuOpen ? (
                            <RxCross2
                                className="text-3xl cursor-pointer text-gray-700 hover:text-blue-600 transition-all duration-300"
                                onClick={handleMobileMenu}
                            />
                        ) : (
                            <RxHamburgerMenu
                                className="text-3xl cursor-pointer text-gray-700 hover:text-blue-600 transition-all duration-300"
                                onClick={handleMobileMenu}
                            />
                        )}
                    </div>

                    {/* Mobile Menu */}
                    {isMenuOpen && renderNavItems(true)}
                </>
            ) : (
                // Desktop Navigation
                <div className="w-full flex justify-between items-center px-10 py-4">
                    <div className="text-2xl font-extrabold text-gray-800">H</div>
                    {renderNavItems(false)}
                </div>
            )}
        </div>
    );
};