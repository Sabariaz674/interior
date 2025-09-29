import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-scroll"; // ✅ react-scroll se import

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinkClass =
    "px-3 py-2 hover:text-gray-300 transition duration-300 cursor-pointer";

  return (
    <nav className="bg-gray-900 text-white fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo / Brand Text */}
          <div className="text-2xl font-bold">
            <span className="animate-bounce block text-red-600">Red Pearl</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link
              to="home"
              smooth={true}
              duration={600}
              offset={-64} // ✅ navbar height adjust
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
            <button onClick={toggleMenu} className="text-white">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-[64px] left-0 w-full bg-gray-900/95 md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } z-40`}
      >
        <div className="flex flex-col text-white font-medium text-lg text-center py-4 space-y-2">
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
