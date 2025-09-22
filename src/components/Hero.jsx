import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroImage1 from "../assets/bg-navbar.jpg"; 
import heroImage2 from "../assets/heroImage1.jpg"; 
import heroImage3 from "../assets/heroImage2.jpg"; 

const slides = [
  {
    id: 1,
    image: heroImage1,
    label: "PREMIUM",
    title: "Interior Design, Build and Fit-Out Services",
  },
  {
    id: 2,
    image: heroImage2,
    label: "MODERN",
    title: "Creative Home & Office Renovations",
  },
  {
    id: 3,
    image: heroImage3,
    label: "LUXURY",
    title: "Elegant Spaces With Perfect Finishing",
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  return (
    <div className="relative w-full h-[70vh] md:h-[90vh] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === current ? "opacity-100 z-20" : "opacity-0 z-0"
          }`}
        >
          {/* Background Image */}
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
            <span className="text-sm md:text-base font-medium tracking-widest mb-2">
              {slide.label}
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-3xl">
              {slide.title}
            </h1>
          </div>
        </div>
      ))}

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full z-30"
      >
        <ChevronLeft size={28} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full z-30"
      >
        <ChevronRight size={28} />
      </button>
    </div>
  );
};

export default HeroSection;
