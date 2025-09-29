import React from 'react';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';
import Home from '../../pages/Home';
import ContactUs from '../ContactUs';
import AboutUs from '../AboutUs';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-gray-50">
        {/* Home Section */}
        <section
          id="home"
          className="min-h-screen flex items-center justify-center pt-20"
        >
          <Home />
        </section>
<section
          id="about"
          className="min-h-screen flex items-center justify-center pt-20"
        >
          <AboutUs />
        </section>
        {/* Contact Section */}
        <section
          id="contact"
          className="min-h-screen flex items-center justify-center pt-20"
        >
          <ContactUs />
        </section>

       
        
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
