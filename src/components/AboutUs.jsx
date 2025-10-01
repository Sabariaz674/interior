import React from "react";
import luxuryImg from "../assets/us.jpg"; 

const AboutUs = () => {
  return (
    <section className="relative bg-gradient-to-r from-gray-50 via-white to-gray-50 py-20 px-6 md:px-12 lg:px-20 ">
      <div className="max-w-7xl mx-auto">
        
        {/* Title Center */}
        <h2 className="text-3xl text-red-700 md:text-4xl font-extrabold text-gray-900 mb-16 leading-tight text-center">
          About Us
        </h2>

        {/* Grid Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side - Image */}
          <div className="relative group">
            <div className="overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={luxuryImg}
                alt="Luxury Interior"
                className="w-full h-[480px] object-cover transform group-hover:scale-105 transition duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-red-700 text-white px-6 py-3 rounded-xl shadow-lg">
              <p className="font-semibold text-lg">10+ Years of Excellence</p>
            </div>
          </div>

          {/* Right Side - Content */}
          <div>
            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
              We are <span className="font-semibold">vision builders</span>, dedicated to transforming houses 
              into homes of distinction. With passion for exquisite design and flawless execution, 
              we specialize in providing <span className="font-semibold">end-to-end luxury solutions</span> 
              for residential and commercial spaces.
            </p>
            <p className="text-gray-600 mb-10 leading-relaxed text-lg">
              Every project reflects a deep understanding of our client’s lifestyle and aspirations. 
              From the first sketch to the final installation, we ensure a seamless journey 
              to create timeless, elegant living spaces.
            </p>

            {/* Core Values */}
            <div className="space-y-6">
              {[
                {
                  title: "Bespoke Design",
                  desc: "Every Wardrobe, Door and Interior Design project is uniquely tailor-made.",
                },
                {
                  title: "Uncompromising Quality",
                  desc: "Only premium materials are used for durable and luxurious solutions.",
                },
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-start bg-white rounded-xl p-5 shadow-md hover:shadow-xl transition"
                >
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-red-700 text-white rounded-full mr-4">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">{item.title}</h4>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
