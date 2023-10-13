import React, { useState, useEffect } from 'react';
import { logo } from '../assets';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import DesktopNavbar from '../components/Desktopbar'; 

const Navbar = ({ isLoggedIn }) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const mobileNavbar = (
        <nav id="navbar">
            <div className="w-full flex flex-row justify-between mt-[1%]">
                <Link to="/">
                    <img src={logo} className="ml-2 md:ml-10 w-20 object-contain" alt="Logo" />
                </Link>
                <div
                    style={{ display: isMobile ? 'block' : 'none', cursor: 'pointer', fontSize: '24px' }}
                    onClick={toggleMenu}
                    className
                >
                    ☰
                </div>
            </div>
            {isMenuOpen && (
                <ul className="flex flex-col md:flex-row gap-4 md:gap-12 mr-12 items-center">
                    {!isLoggedIn && (
                        <li className="cursor-pointer text-xs md:text-lg transition-all hover:font-bold">
                            <Link to="/login" smooth={true}>
                                LOG IN
                            </Link>
                        </li>
                    )}
                    <li className="cursor-pointer text-xs md:text-lg transition-all hover:font-bold">
                        <ScrollLink to="products" smooth={true}>
                            PRODUCTS
                        </ScrollLink>
                    </li>
                    <li className="cursor-pointer text-xs md:text-lg transition-all hover:font-bold">
                        <ScrollLink to="about_us" smooth={true}>
                            ABOUT US
                        </ScrollLink>
                    </li>
                </ul>
            )}
        </nav>
    );

    return isMobile ? mobileNavbar : <DesktopNavbar isLoggedIn={isLoggedIn} />;
};

export default Navbar;
