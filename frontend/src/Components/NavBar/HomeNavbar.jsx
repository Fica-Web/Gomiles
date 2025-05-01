import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import navOptions from '../../Data/navOptions';
import logo from "../../assets/Images/logo.png";

const HomeNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="w-11/12 mx-auto sm:px-4 lg:px-7">
            <div className="flex items-center justify-between h-[10vh]">
                <img src={logo} alt="Gomiles Logo" className="w-36" />
                
                <div className="hidden lg:flex space-x-6 text-lg font-medium">
                    {navOptions.map(({ name, link, end }) => (
                        <NavLink key={name} to={link} end={end} className={({ isActive }) => `px-3 py-2 rounded-md ${isActive ? "text-cyan-600" : "hover:text-cyan-600"}`}>
                            {name}
                        </NavLink>
                    ))}
                </div>

                <button className="lg:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
                    <svg className={`h-6 w-6 transition-transform duration-300 ${isOpen ? "rotate-90" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                    </svg>
                </button>
            </div>

            <div className={`overflow-hidden transition-[max-height] duration-700 ease-in-out bg-gray-100 ${isOpen ? "max-h-screen" : "max-h-0"}`}>
                <div className="px-4 py-2 space-y-2">
                    {navOptions.map(({ name, link, end }) => (
                        <NavLink key={name} to={link} end={end} className={({ isActive }) => `block px-3 py-2 rounded-md text-base font-medium ${isActive ? "text-cyan-700" : "text-gray hover:text-cyan-700"}`} onClick={() => setIsOpen(false)}>
                            {name}
                        </NavLink>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default HomeNavbar;