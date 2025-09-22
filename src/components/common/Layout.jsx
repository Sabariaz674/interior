import React from 'react';
import Navbar from '../common/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../common/Footer';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-gray-50">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
