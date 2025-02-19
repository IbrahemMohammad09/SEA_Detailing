import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion } from "framer-motion";
import Logo from "../assets/logo.png";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollWithOffset = (offset) => (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = offset;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-10 lg:px-36 xl:px-52 md:px-10 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg py-0" : "bg-transparent py-4"
      }`}
    >
      <div className="flex items-center space-x-4">
        <motion.img
          src={Logo}
          alt="Logo"
          className={`transition-all duration-300 ${
            isScrolled ? "md:h-32 h-16" : "md:h-52 h-20"
          }`}
          initial={{ scale: 1 }}
          animate={{ scale: isScrolled ? 0.8 : 1 }}
        />
      </div>

      {/* زر القائمة للشاشات الصغيرة */}
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

      {/* القائمة للشاشات الكبيرة */}
      <ul className="hidden md:flex text-2xl z-40 sm:space-x-10 md:space-x-20 text-gray-800 abhaya-libre-extrabold">
        <li>
          <HashLink
            smooth
            to="/#home"
            scroll={scrollWithOffset(-100)}
            className="hover:text-[#1A78F2] transition-colors"
          >
            Home
          </HashLink>
        </li>
        <li>
          <HashLink
            smooth
            to="/#our-services"
            scroll={scrollWithOffset(-80)}
            className="hover:text-[#1A78F2] transition-colors cursor-pointer"
          >
            Our Services
          </HashLink>
        </li>
        <li>
          <HashLink
            smooth
            to="/#contact-us"
            scroll={scrollWithOffset(-100)}
            className="hover:text-[#1A78F2] transition-colors cursor-pointer"
          >
            Contact Us
          </HashLink>
        </li>
        <li>
          <HashLink
            smooth
            to="/#about-us"
            scroll={scrollWithOffset(-150)}
            className="hover:text-[#1A78F2] transition-colors cursor-pointer"
          >
            About Us
          </HashLink>
        </li>
      </ul>

      {/* القائمة للشاشات الصغيرة */}
      <motion.ul
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
        transition={{ duration: 0.3 }}
        className={`absolute z-40 left-[10%] rounded-2xl h-48 text-center w-[80%] text-xl bg-white shadow-md md:hidden text-gray-800 
          ${isScrolled ? "top-16" : "top-24"}
          ${isOpen ? "block" : "hidden"}
        `}
      >
        <li>
          <HashLink
            smooth
            onClick={() => setIsOpen(false)}
            to="/"
            className="block py-2 px-4 hover:bg-[#1A78F2] hover:rounded-3xl hover:text-white hover:font-bold transition-colors"
          >
            Home
          </HashLink>
        </li>
        <li>
          <HashLink
            smooth
            onClick={() => setIsOpen(false)}
            to="/#our-services"
            className="block py-2 px-4 hover:bg-[#1A78F2] hover:rounded-3xl hover:text-white hover:font-bold transition-colors"
          >
            Our Services
          </HashLink>
        </li>
        <li>
          <HashLink
            smooth
            onClick={() => setIsOpen(false)}
            to="/#contact-us"
            className="block py-2 px-4 hover:bg-[#1A78F2] hover:rounded-3xl hover:text-white hover:font-bold transition-colors"
          >
            Contact Us
          </HashLink>
        </li>
        <li>
          <HashLink
            smooth
            onClick={() => setIsOpen(false)}
            to="/#about-us"
            className="block py-2 px-4 hover:bg-[#1A78F2] hover:rounded-3xl hover:text-white hover:font-bold transition-colors"
          >
            About Us
          </HashLink>
        </li>
      </motion.ul>
    </nav>
  );
};

export default Navbar;
