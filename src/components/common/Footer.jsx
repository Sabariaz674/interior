import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1 - Company Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Our Company</h3>
            <p className="text-sm">
              We provide premium interior, architectural, and outdoor design
              solutions tailored to your lifestyle. Turning dreams into
              beautifully designed spaces.
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="hover:text-yellow-500">Services</a></li>
              <li><a href="#about" className="hover:text-yellow-500">About Us</a></li>
              <li><a href="#contact" className="hover:text-yellow-500">Contact</a></li>
            </ul>
          </div>

          {/* Column 3 - Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Get in Touch</h3>
            <ul className="space-y-2 text-sm">
              <li>📍 Lahore, Pakistan</li>
              <li>📞 +92 300 1234567</li>
              <li>✉️ info@yourcompany.com</li>
            </ul>
          </div>
        </div>

        {/* Bottom line */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
