import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import image1 from "../assets/OurServices/01e36d90c7d4867eed0b3b77bc0d363f.jpeg";
import image2 from "../assets/OurServices/3fc85fa235aef293febf4a65565953cb.jpeg";
import image3 from "../assets/OurServices/f429094570dd7d1caebf84042038d7a5.jpeg";
import { Link } from "react-router";

const servicesData = [
  {
    id: 1,
    type: "car",
    title: "Headlight polishing",
    description: "Begin by scheduling an initial consultation.",
    image: image1,
  },
  {
    id: 2,
    type: "car",
    title: "Steam Clean Upholstery",
    description: "Begin by scheduling an initial consultation.",
    image: image2,
  },
  {
    id: 3,
    type: "car",
    title: "Dashboard Cleaning",
    description: "We create design concepts tailored to your vision.",
    image: image3,
  },
  {
    id: 4,
    type: "car",
    title: "CAr polish & Wax",
    description: "Together, we select materials, colors.",
    image: image2,
  },
  {
    id: 5,
    type: "car",
    title: "Leather Cleaning",
    description: "We create design concepts tailored to your vision.",
    image: image3,
  },
  {
    id: 6,
    type: "home",
    title: " Detailed Door Panel",
    description: "We maintain quality standards for the final result.",
    image: image1,
  },
  {
    id: 7,
    type: "home",
    title: "Wheel changing",
    description: "We conduct final walkthroughs.",
    image: image2,
  },
  {
    id: 8,
    type: "home",
    title: "Cup Holder Cleaning",
    description: "make last minute adjustment.",
    image: image1,
  },
];

function OurServices() {
  const [filter, setFilter] = useState("all");
  const filteredServices =
    filter === "all"
      ? servicesData
      : servicesData.filter((service) => service.type === filter);

  return (
    <div className="container   mx-auto px-4 py-8 ">
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
          index >= filteredServices.length - (filteredServices.length % 3)
            ? " lg:left-40 xl:left-52 2xl:left-60 "
            : ""
        }`}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-16 h-16 md:w-28 md:h-28 rounded-full mr-4 "
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
        <Link to={"/book-service"} className="bg-gradient-to-r from-blue-500 to-blue-700 text-white mt-10 px-14 py-4 rounded-full hover:scale-105 transition duration-300">
          Book Services
        </Link>
      </div>
    </div>
  );
}

export default OurServices;
