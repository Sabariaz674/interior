import React from "react";

const ContactUs = () => {
  return (
    <section className="bg-gray-100 py-12" id="contact">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Heading */}
        <h2 className=" text-red-700 text-3xl md:text-4xl font-extrabold  text-center text-gray-800 mb-12">
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
                📍 <span className="font-medium">Address:</span> UAE, Ajman,jerf 1
              </li>
              <li>
                📞 <span className="font-medium">Phone:</span> +971 52 3377 569
              </li>
              <li>
                ✉️ <span className="font-medium">Email:</span> redpearldecor@gmail.com
              </li>
            </ul>
          </div>

         

        </div>
      </div>
    </section>
  );
};

export default ContactUs;
