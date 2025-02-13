import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion } from "framer-motion";
import Logo from "../assets/logo.png";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between   px-10 lg:px-36 xl:px-52 md:px-10 py-4 bg-white w-full">
      <div className="flex items-center space-x-4">
        <img src={Logo} alt="Logo" className="md:h-52 h-20 " />
      </div>

      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-800 text-2xl"
        >
          {isOpen ? (
            <FiX className="cursor-pointer" />
          ) : (
            <FiMenu className="cursor-pointer" />
          )}
        </button>
      </div>

      <ul className="hidden md:flex text-2xl z-50 sm:space-x-10 md:space-x-20 text-gray-800 abhaya-libre-extrabold">
        <li>
          <a href="#" className="hover:text-[#1A78F2] transition-colors">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-[#1A78F2] transition-colors">
            Our Services
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-[#1A78F2] transition-colors">
            Contact Us
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-[#1A78F2] transition-colors">
            About Us
          </a>
        </li>
      </ul>

      <motion.ul
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
        transition={{ duration: 0.3 }}
        className={`absolute z-50 top-24 left-[10%] rounded-2xl h-48 text-center w-[80%] text-xl bg-white shadow-md md:hidden text-gray-800 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <li>
          <a
            href="#"
            className="block py-2 px-4 hover:bg-[#1A78F2] hover:rounded-3xl hover:text-white hover:font-bold  transition-colors"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block py-2 px-4 hover:bg-[#1A78F2] hover:rounded-3xl hover:text-white hover:font-bold  transition-colors"
          >
            Our Services
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block py-2 px-4 hover:bg-[#1A78F2] hover:rounded-3xl hover:text-white hover:font-bold  transition-colors"
          >
            Contact Us
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block py-2 px-4 hover:bg-[#1A78F2] hover:rounded-3xl hover:text-white hover:font-bold  transition-colors"
          >
            About Us
          </a>
        </li>
      </motion.ul>
    </nav>
  );
};

export default Navbar;
