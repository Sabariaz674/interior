import React from "react";
import interiorImg from "../assets/interior design.jpg";
import architectureImg from "../assets/Architure.webp";
import outdoorImg from "../assets/outdoor.webp";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Interior Design",
      description:
        "We create elegant and functional interiors tailored to your lifestyle. From concept development to final execution, our team ensures your home or office reflects your personality while providing comfort and luxury.",
      image: interiorImg,
    },
    {
      id: 2,
      title: "Architectural Designs",
      description:
        "Our architectural design service combines creativity with precision. We design modern and sustainable structures that meet your needs while enhancing aesthetics and ensuring long-lasting quality.",
      image: architectureImg,
    },
    {
      id: 3,
      title: "Outdoor Sitting Area Designs",
      description:
        "Transform your outdoor spaces into stylish and relaxing sitting areas. We specialize in creating inviting landscapes, patios, and lounge spaces that blend seamlessly with nature and your lifestyle.",
      image: outdoorImg,
    },
  ];

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-red-700 text-3xl md:text-4xl font-extrabold text-center mb-12 text-gray-800">
          Our Services
        </h2>

        {services.map((service) => (
          <div
            key={service.id}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16"
          >
            {/* Text Section (Always Left) */}
            <div>
              <h3 className="text-red-700 text-2xl md:text-3xl font-semibold  mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                {service.description}
              </p>
            </div>

            {/* Image Section (Always Right, Smaller Size) */}
            <div className="flex justify-center md:justify-end">
              <img
                src={service.image}
                alt={service.title}
                loading="lazy"
                className="rounded-lg shadow-lg w-full md:w-3/5 lg:w-1/1 object-cover"
              />

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
