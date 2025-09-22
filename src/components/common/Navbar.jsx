import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import heroImage from '../../assets/bg-navbar.jpg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinkClass =
    "hover:text-gray-200 transition duration-200 block py-2 px-4";

  return (
    <nav
      className="w-full flex items-center justify-between px-6 md:px-10 py-4 bg-cover bg-center relative z-20"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Overlay effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-800/70 to-white/30 pointer-events-none"></div>

      {/* Navbar content */}
      <div className="relative z-10 flex items-center justify-between w-full">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <h1 className="text-xl font-bold flex items-center text-white">
            <span className="border-2 border-white px-1 mr-1">Red</span> Pearl
          </h1>
        </div>

        {/* Mobile menu button (Hamburger) */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white text-2xl focus:outline-none"
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center space-x-8 text-white font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-gray-100 font-semibold " + navLinkClass
                : navLinkClass
            }
          >
            HOME
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-gray-100 font-semibold " + navLinkClass
                : navLinkClass
            }
          >
            CONTACT US
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-gray-100 font-semibold " + navLinkClass
                : navLinkClass
            }
          >
            ABOUT US
          </NavLink>
        </div>

        {/* Contact Button for all screens */}
        <div className="hidden md:block">
          <a
            href="tel:+971585861866"
            className="bg-white/90 text-black font-semibold rounded-full px-6 py-2 shadow-md hover:shadow-lg transition"
          >
            +971 58 586 1866
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-full left-0 w-full bg-gray-800/90 md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } z-10`}
      >
        <div className="flex flex-col text-white font-medium text-lg text-center py-4 space-y-2">
          <NavLink
            to="/"
            onClick={toggleMenu}
            className={({ isActive }) =>
              isActive
                ? "text-gray-100 font-semibold " + navLinkClass
                : navLinkClass
            }
          >
            HOME
          </NavLink>
          <NavLink
            to="/contact"
            onClick={toggleMenu}
            className={({ isActive }) =>
              isActive
                ? "text-gray-100 font-semibold " + navLinkClass
                : navLinkClass
            }
          >
            CONTACT US
          </NavLink>
          <NavLink
            to="/about"
            onClick={toggleMenu}
            className={({ isActive }) =>
              isActive
                ? "text-gray-100 font-semibold " + navLinkClass
                : navLinkClass
            }
          >
            ABOUT US
          </NavLink>
          <a
            href="tel:+971585861866"
            onClick={toggleMenu}
            className="bg-white/90 text-black font-semibold rounded-full px-6 py-2 shadow-md hover:shadow-lg transition mt-4 mx-auto"
          >
            +971 58 586 1866
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
