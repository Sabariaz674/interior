import React from "react";
import { useNavigate } from "react-router-dom";
import img1 from "../assets/tvunit.jpeg";
import img2 from "../assets/interior.jpg";
import img4 from "../assets/kitchen.jpeg";
import img6 from "../assets/door.jpg";
import img7 from "../assets/washroom.jpeg";
import img8 from "../assets/wardrobe.jpeg";

// Detailed descriptions for the hover effect
const SERVICE_DETAILS = {
  1: "Elegantly designed TV units that merge functionality with modern aesthetics, providing the perfect centerpiece for your living space.", // Tv Unit
  2: "Complete interior design solutions from concept to execution, creating personalized and luxurious environments.", // INTERIOR DESIGN
  4: "Bespoke kitchen layouts featuring smart storage, premium finishes, and ergonomic design for the ultimate culinary experience.", // KITCHEN DESIGNING
  6: "Custom-crafted doors that offer security, style, and a grand entrance, tailored to your home's unique architecture.", // Door DESIGNING
  7: "Sophisticated washroom designs with high-end fixtures and contemporary tiling, transforming your space into a private spa.", // WASHROOM DESIGNING
  8: "Innovative wardrobe systems, including walk-in and sliding designs, optimized for storage and designed for seamless integration.", // WARDROBE DESIGNING
};

const services = [
  { id: 1, title: "TV UNIT", image: img1 },
  { id: 2, title: "INTERIOR DESIGN", image: img2 },
  { id: 4, title: "KITCHEN DESIGNING", image: img4 },
  { id: 6, title: "DOOR DESIGNING", image: img6 },
  { id: 7, title: "WASHROOM DESIGNING", image: img7 },
  { id: 8, title: "WARDROBE DESIGNING", image: img8 },
];

const LuxurySolutions = () => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/service/${id}`);
  };

  return (
    <section className="bg-white py-12">
      <h2 className="text-center text-3xl md:text-4xl font-extrabold mb-8 text-red-700">
        LUXURY SOLUTIONS
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 md:px-8 lg:px-16">
        {services.map((service) => (
          <div
            key={service.id}
            onClick={() => handleClick(service.id)}
            className="relative cursor-pointer group overflow-hidden transition-all duration-500"
          >
            {/* Image with Lazy Loading */}
            <img
              src={service.image}
              alt={service.title}
              loading="lazy"   // ✅ Lazy load
              className="w-full h-56 md:h-72 lg:h-80 object-cover transform transition-transform duration-500 group-hover:scale-105"
            />

            {/* Dark overlay with Title (Always Visible) */}
            <div className="absolute inset-0 flex items-end justify-start p-4 transition-all duration-300 bg-black/40 group-hover:bg-beigh/60">
              <h3 className="text-white text-xl md:text-2xl font-bold text-left">
                {service.title}
              </h3>
            </div>

            {/* Detail Overlay (Appears on Hover) */}
            <div
              className="absolute inset-0 flex items-center justify-center p-6 text-white text-center 
                          bg-black/80 transition-all duration-500 
                          transform translate-y-full opacity-0 
                          group-hover:translate-y-0 group-hover:opacity-100"
            >
              <p className="text-base md:text-lg font-medium">
                {SERVICE_DETAILS[service.id]}
                <span className="block mt-3 text-sm font-semibold underline">
                  CLICK TO VIEW PORTFOLIO
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LuxurySolutions;
