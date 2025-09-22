import React, { useState } from "react";
import img1 from "../assets/tvunit.jpeg";
import img2 from "../assets/interior.jpeg";
import img4 from "../assets/kitchen.jpeg";
import img6 from "../assets/door.jpeg";
import img7 from "../assets/washroom.jpeg";
import img8 from "../assets/wardrobe.jpeg";

const services = [
  { id: 1, title: "Tv Unit", image: img1 },
  { id: 2, title: "INTERIOR DESIGN", image: img2 },
  { id: 4, title: "KITCHEN DESIGNING", image: img4 },
  { id: 6, title: "Door DESIGNING", image: img6 },
  { id: 7, title: "WASHROOM DESIGNING", image: img7 },
  { id: 8, title: "WARDROBE DESIGNING", image: img8 },
];

const LuxurySolutions = () => {
  const [active, setActive] = useState(null);

  return (
    <section className="bg-white py-12">
      <h2 className="text-center text-2xl md:text-3xl font-bold  mb-8">
        LUXURY SOLUTIONS
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 md:px-8 lg:px-16">
        {services.map((service) => (
          <div
            key={service.id}
            onClick={() => setActive(service.id)}
            className={`relative cursor-pointer group overflow-hidden transition-all duration-500 ${
              active === null
                ? "opacity-100"
                : active === service.id
                ? "opacity-100"
                : "opacity-40"
            }`}
          >
            {/* Image */}
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-56 md:h-72 lg:h-80 object-cover transform transition-transform duration-500 group-hover:scale-105"
            />

            {/* Dark overlay */}
            <div
              className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
                active === service.id
                  ? "bg-black/40"
                  : "bg-black/70 group-hover:bg-black/60"
              }`}
            >
              <h3 className="text-white text-lg md:text-xl font-medium text-center px-2">
                {service.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LuxurySolutions;
