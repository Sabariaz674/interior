import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-scroll";


import roundLogo from '../../assets/logo2.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinkClass =
    "px-3 py-2 hover:text-red-700 transition duration-300 cursor-pointer";

  return (
    <nav className="bg-gray-300 text-black fixed top-0 left-0 w-full z-50 shadow-md">
      
      <div className="w-full px-2 sm:px-4 lg:px-6">
        
        <div className="flex justify-between h-16 items-center">
          
          <div className="flex items-center">
            <img
              src={roundLogo}
              alt="Red Pearl Decor Logo"
              className="h-15 w-15 rounded-full object-cover border-3 border-red-600"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 font-extrabold text-red-700">
            <Link
              to="home"
              smooth={true}
              duration={600}
              offset={-64}
              className={navLinkClass}
            >
              HOME
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={600}
              offset={-64}
              className={navLinkClass}
            >
              CONTACT US
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={600}
              offset={-64}
              className={navLinkClass}
            >
              ABOUT US
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-black">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-[64px] left-0 w-full bg-gray-300 md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          } z-40`}
      >
        <div className="flex flex-col text-red-700 font-extrabold text-lg text-center py-4 space-y-2 ">
          <Link
            to="home"
            smooth={true}
            duration={600}
            offset={-64}
            onClick={toggleMenu}
            className={navLinkClass}
          >
            HOME
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={600}
            offset={-64}
            onClick={toggleMenu}
            className={navLinkClass}
          >
            CONTACT US
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={600}
            offset={-64}
            onClick={toggleMenu}
            className={navLinkClass}
          >
            ABOUT US
          </Link>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/+971523377569"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 animate-move"
      >
        <FaWhatsapp
          size={60}
          className="text-green-500 drop-shadow-lg hover:scale-110 transition-transform duration-300"
        />
      </a>
    </nav>
  );
};

export default Navbar;