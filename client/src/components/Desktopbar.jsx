import React from 'react';
import { logo } from '../assets';
import { Link } from 'react-router-dom';

const DesktopNavbar = ({ isLoggedIn }) => {
    // Add your desktop navbar content here
    return (
        <nav id="desktop-navbar">
            <div className="w-full flex flex-row justify-between items-center py-4">
                <Link to="/">
                    <img src={logo} className="ml-2 md:ml-10 w-20 object-contain" alt="Logo" />
                </Link>
                <div className="justify-end">
                {isLoggedIn ? (
                    <Link to="/profile" className="text-lg font-bold mr-10">
                        PROFILE
                    </Link>
                ) : (
                    <>
                    <Link to="/login" className="text-lg font-bold mr-10">
                        LOG IN
                    </Link>
                     <Link to="/login" className="text-lg font-bold mr-10">
                     Products
                 </Link>
                  <Link to="/login" className="text-lg font-bold mr-10">
                  About Us
              </Link>
              
                    </>
                    
                    
                )}
                </div>
            </div>
        </nav>
    );
};

export default DesktopNavbar;
