import React from "react";
import { Link } from "react-scroll"; // ✅ react-scroll import

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1 - Company Info */}
          {/* Column 1 - Company Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Our Company</h3>
            <p className="text-sm">
              <span className="text-red-600 font-semibold">Red Pearl Decor</span> is a
              premium interior and architectural design company based in Ajman, UAE.
              We specialize in creating luxurious, functional, and modern spaces — from
              elegant TV units and bespoke kitchens to wardrobes, washrooms, and complete
              interior solutions.
              Our mission is to transform your vision into reality with creativity,
              precision, and style.
            </p>
          </div>


          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">

              <li>
                <Link
                  to="about"
                  smooth={true}
                  duration={600}
                  className="hover:text-red-700 cursor-pointer"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  smooth={true}
                  duration={600}
                  className="hover:text-red-700 cursor-pointer"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Get in Touch</h3>
            <ul className="space-y-2 text-sm">
              <li>📍 UAE, Ajman jerf 1</li>
              <li>📞 +971 52 3377 569</li>
              <li>✉️ redpearldecor@gmail.com</li>
            </ul>
          </div>
        </div>

        {/* Bottom line */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Red Pearl Decor. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
