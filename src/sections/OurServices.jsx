// OurServices.jsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams, Link } from "react-router-dom";
import image1 from "../assets/OurServices/service_1.jpeg";
import image2 from "../assets/OurServices/service_2.jpg";
import image3 from "../assets/OurServices/service_3.jpeg";
import image4 from "../assets/OurServices/service_4.jpg";
import image5 from "../assets/OurServices/service_5.webp";
import image6 from "../assets/OurServices/service_6.jpeg";
import image7 from "../assets/OurServices/service_7.jpg";
import image8 from "../assets/OurServices/service_8.jpg";
const servicesData = [
  {
    id: 1,
    type: "car",
    title: "Headlight Restoration",
    description: "Restore clarity and brightness to your headlights for safer nighttime driving.",
    image: image1,
  },
  {
    id: 2,
    type: "home",
    title: "Steam Upholstery Cleaning",
    description: "Deep-clean your car’s seats and fabric surfaces, removing dirt, stains, and odors.",
    image: image2,
  },
  {
    id: 3,
    type: "car",
    title: "Dashboard & Interior Detailing",
    description: "Give your dashboard and interior a fresh, polished look with professional cleaning and conditioning.",
    image: image3,
  },
  {
    id: 4,
    type: "car",
    title: "Car Polish & Wax",
    description: "Enhance your car’s shine and protect its paint with a premium polish and wax treatment.",
    image: image4,
  },
  {
    id: 5,
    type: "car",
    title: "Leather Seat Conditioning",
    description: "Keep your leather seats soft, clean, and crack-free with our conditioning service.",
    image: image5,
  },
  {
    id: 6,
    type: "car",
    title: "Door Panel Detailing",
    description: "Thoroughly clean and restore your car’s door panels for a sleek and refined interior.",
    image: image6,
  },
  {
    id: 7,
    type: "car",
    title: "Tire & Wheel Maintenance",
    description: "Ensure your wheels and tires stay clean and in top condition with expert care.",
    image: image7,
  },
  {
    id: 8,
    type: "car",
    title: "Cup Holder & Console Cleaning",
    description: "Remove dirt, dust, and spills from your cup holders and center console for a spotless interior.",
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
        Car <span className="text-blue-500">DETAILING &</span> clean house
      </h2>

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
