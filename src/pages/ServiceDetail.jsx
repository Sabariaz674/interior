import React from "react";
import { useParams } from "react-router-dom";

// ---------------- Interior Images ----------------
import interior1 from "../assets/interior1.jpeg";
import interior4 from "../assets/interior4.jpeg";
import interior5 from "../assets/interior5.jpeg";
import interior6 from "../assets/interior6.jpeg";
import interior7 from "../assets/interior7.jpeg";
import interior8 from "../assets/interior8.jpeg";
import interior9 from "../assets/interior9.jpeg";
import interior10 from "../assets/interior10.jpeg";


// ---------------- Kitchen Images ----------------
import kitchen from "../assets/kitchen.jpeg";
import kitchen2 from "../assets/kitchen2.jpeg";
import kitchen3 from "../assets/kitchen3.jpeg";
import kitchen4 from "../assets/kitchen4.jpeg";
import kitchen5 from "../assets/kitchen5.jpeg";
import kitchen6 from "../assets/kitchen6.jpeg";
import kitchen7 from "../assets/kitchen7.jpeg";
import kitchen8 from "../assets/kitchen8.jpeg";


// ---------------- Door Images ----------------
import door1 from "../assets/door1.jpg";
import door2 from "../assets/door2.jpg";
import door3 from "../assets/door9.jpg";
import door4 from "../assets/door4.jfif";
import door5 from "../assets/door5.jpg";
import door6 from "../assets/door6.jpg";
import door7 from "../assets/door7.jfif";
import door8 from "../assets/door8.jpeg";


// ---------------- TV Unit Images ----------------
import tv1 from "../assets/tv1.jpeg";
import tv2 from "../assets/tv2.jpeg";
import tv3 from "../assets/tv3.jpeg";
import tv4 from "../assets/tv4.jpeg";
import tv5 from "../assets/tv5.jpeg";
import tv6 from "../assets/tv6.jpeg";
import tv7 from "../assets/tv7.jpeg";
import tv8 from "../assets/tv8.jpeg";


// ---------------- Wardrobe Images ----------------
import w1 from "../assets/w1.jpeg";
import w2 from "../assets/w2.jpeg";
import w3 from "../assets/w3.jpeg";
import w4 from "../assets/w4.jpeg";
import w5 from "../assets/w5.jpeg";
import w6 from "../assets/w6.jpeg";
import w7 from "../assets/w7.jpeg";
import w8 from "../assets/w8.webp";


// ---------------- Washroom Images ----------------
import washroom1 from "../assets/washroom1.jpg";
import washroom2 from "../assets/washroom2.webp";
import washroom3 from "../assets/washroom3.webp";
import washroom4 from "../assets/washroom4.jfif";
import washroom5 from "../assets/washroom5.jpg";
import washroom6 from "../assets/washroom6.webp";
import washroom7 from "../assets/washroom7.jpg";
import washroom8 from "../assets/washroom8.webp";


// ---------------- Service Data ----------------
const serviceImages = {
  1: [tv1, tv2, tv3, tv4, tv5, tv6, tv7, tv8],
  2: [interior1, interior4, interior5, interior6, interior7, interior8, interior9, interior10],
  4: [kitchen, kitchen2, kitchen3, kitchen4, kitchen5, kitchen6, kitchen7, kitchen8],
  6: [door1, door2, door3, door4, door5, door6, door7, door8],
  7: [washroom1, washroom2, washroom3, washroom4, washroom5, washroom6, washroom7, washroom8],
  8: [w1, w2, w3, w4, w5, w6, w7, w8],
};

const serviceTitles = {
  1: "TV Unit",
  2: "Interior Design",
  4: "Kitchen Designing",
  6: "Door Designing",
  7: "Washroom Designing",
  8: "Wardrobe Designing",
};

// ---------------- Component ----------------
const ServiceDetail = () => {
  const { id } = useParams();
  const images = serviceImages[id] || [];
  const title = serviceTitles[id] || "Service";

  return (
    <div className="bg-white min-h-screen py-12 px-6">
      <h2 className="text-red-700 text-5xl font-bold text-center mb-8 mt-10">{title}</h2>

      {/* Grid: 4 columns on medium screens and up (md:grid-cols-4) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
        {images.map((img, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition"
          >
            <img
              src={img}
              alt={`${title} ${index + 1}`}
             
              className="w-full h-90 object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceDetail;