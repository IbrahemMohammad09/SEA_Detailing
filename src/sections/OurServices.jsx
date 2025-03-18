// OurServices.jsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams, Link } from "react-router-dom";
import image1 from "../assets/OurServices/service_1.jpg";
import image2 from "../assets/OurServices/service_2.jpg";
import image3 from "../assets/OurServices/service_3.jpg";
import image4 from "../assets/OurServices/service_4.jpeg";
import image5 from "../assets/OurServices/service_5.jpg";
import image6 from "../assets/OurServices/service_6.jpg";
import image7 from "../assets/OurServices/service_7.jpg";
import image8 from "../assets/OurServices/service_8.jpg";

const servicesData = [
  {
    id: 1,
    type: "home",
    title: "Deep Home Cleaning",
    description: "A top-to-bottom cleaning service that removes dust, grime, and allergens for a spotless home.",
    image: image1,
  },
  {
    id: 2,
    type: "home",
    title: "Upholstery & Carpet Steam Cleaning",
    description: "Refresh and sanitize your sofas, chairs, and carpets with deep steam cleaning.",
    image: image2,
  },
  {
    id: 3,
    type: "home",
    title: "Kitchen & Bathroom Sanitization",
    description: "Thoroughly disinfect and clean your kitchen and bathrooms for a healthier living space.",
    image: image3,
  },
  {
    id: 4,
    type: "car",
    title: "Premium Exterior Wash & Wax",
    description: "Enhance and protect your car’s paint with a professional hand wash and long-lasting wax.",
    image: image4,
  },
  {
    id: 5,
    type: "car",
    title: "Interior Deep Cleaning & Vacuuming",
    description: "Remove dust, stains, and odors from your car’s seats, carpets, and dashboard.",
    image: image5,
  },
  {
    id: 6,
    type: "car",
    title: "Leather Seat Cleaning & Conditioning",
    description: "Restore the softness and shine of your leather seats while preventing cracks.",
    image: image6,
  },
  {
    id: 7,
    type: "car",
    title: "Headlight Restoration & Polishing",
    description: "Improve night visibility and refresh the look of your headlights with professional polishing.",
    image: image7,
  },
  {
    id: 8,
    type: "car",
    title: "Tire & Rim Detailing",
    description: "Clean, shine, and protect your wheels and tires for a sleek and well-maintained look.",
    image: image8,
  },
];

function OurServices() {
  const [searchParams] = useSearchParams();
  const initialFilter = searchParams.get("filter") || "all";
  const [filter, setFilter] = useState(initialFilter);

  useEffect(() => {
    const newFilter = searchParams.get("filter") || "all";
    setFilter(newFilter);
  }, [searchParams]);

  const filteredServices =
    filter === "all"
      ? servicesData
      : servicesData.filter((service) => service.type === filter);

  return (
    <div id="our-services" className="container mx-auto px-4 py-8">
      <h2 className="text-3xl mt-10 md:text-5xl font-bold text-center mb-4 abhaya-libre-bold">
        OUR <span className="text-blue-500">SERVICES</span>
      </h2>
      <h2 className="text-center mt-10 text-3xl md:text-5xl font-bold mb-8 abhaya-libre-bold">
        Car <span className="text-blue-500">DETAILING </span> & House <span className="text-blue-500">CLEANING </span> 
      </h2>
      <div className="flex flex-col md:flex-row gap-4 text-center mt-10 text-2xl md:text-3xl font-bold mb-8 abhaya-libre-bold">
        <div>
          <span className="text-blue-500">Car DETAILING </span> 
          <h1>Expert detailing to restore, protect, and enhance your vehicle’s shine. Premium care for a showroom-quality finish.</h1>
        </div>
        <div>
          <span className="text-blue-500">House CLEANING </span> 
          <h1>Thorough, professional cleaning for a spotless and refreshed home. A healthier, cleaner space—hassle-free.</h1>
        </div>
      </div>

      <div className="flex justify-center mt-20 space-x-4 mb-8">
        {[
          { label: "All", value: "all" },
          { label: "Car Services", value: "car" },
          { label: "Home Services", value: "home" },
        ].map(({ label, value }) => (
          <button
            key={value}
            onClick={() => setFilter(value)}
            className={`px-6 py-2 cursor-pointer rounded-full transition duration-300 text-white font-semibold 
            ${
              filter === value
                ? "bg-gradient-to-r from-blue-500 to-blue-700"
                : "bg-blue-500 hover:bg-blue-600"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <AnimatePresence>
        <div className="grid grid-cols-1 abhaya-libre-medium md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-start grid-auto-rows-fr">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-white p-6 rounded-4xl shadow-2xl flex items-center relative transition duration-300 
                shadow-blue-400 hover:shadow-blue-500 hover:shadow-xl 
                ${
                  filteredServices.length % 3 !== 0 &&
                  index >=
                    filteredServices.length - (filteredServices.length % 3)
                    ? " lg:left-40 xl:left-52 2xl:left-60 "
                    : ""
                }`}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-16 h-16 md:w-28 md:h-28 rounded-full mr-4"
              />
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-blue-500">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </AnimatePresence>

      <div className="flex justify-center mt-8">
        <Link
          to={"/book-service"}
          className="bg-gradient-to-r from-blue-500 to-blue-700 text-white mt-10 px-14 py-4 rounded-full hover:scale-105 transition duration-300"
        >
          Book Services
        </Link>
      </div>
    </div>
  );
}

export default OurServices;
