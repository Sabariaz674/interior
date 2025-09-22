import React from "react";

const ContactUs = () => {
  return (
    <section className="bg-gray-100 py-12" id="contact">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Contact Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Side - Text/Info */}
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-semibold text-yellow-600 mb-4">
              Get in Touch
            </h3>
            <p className="text-gray-600 mb-6">
              Have a project in mind? Let’s connect and bring your vision to
              life. Fill out the form or reach us directly at:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>
                📍 <span className="font-medium">Address:</span> Lahore, Pakistan
              </li>
              <li>
                📞 <span className="font-medium">Phone:</span> +92 300 1234567
              </li>
              <li>
                ✉️ <span className="font-medium">Email:</span> info@yourcompany.com
              </li>
            </ul>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="Write your message"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-yellow-600 text-white font-medium px-6 py-2 rounded-md hover:bg-yellow-700 transition-all"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
