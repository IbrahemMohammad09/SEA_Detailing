import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion } from "framer-motion";
import Logo from "../assets/logo.png";
import { HashLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const location = useLocation();

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

  useEffect(() => {
    const sectionIds = ["home", "our-services", "contact-us", "about-us"];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observerOptions = {
      root: null,
      threshold: 0.5,
      rootMargin: "0px 0px -20% 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveLink(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsOpen(false);

    if (link === "home" && location.pathname !== "/") {
      window.location.href = "/";
    }
  };

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
            className={`hover:text-[#1A78F2] transition-colors ${
              activeLink === "home" ? "text-[#1A78F2]" : ""
            }`}
            onClick={() => handleLinkClick("home")}
          >
            Home
          </HashLink>
        </li>
        <li>
          <HashLink
            smooth
            to="/#our-services"
            scroll={scrollWithOffset(-80)}
            className={`hover:text-[#1A78F2] transition-colors cursor-pointer ${
              activeLink === "our-services" ? "text-[#1A78F2]" : ""
            }`}
            onClick={() => handleLinkClick("our-services")}
          >
            Our Services
          </HashLink>
        </li>
        <li>
          <HashLink
            smooth
            to="/#about-us"
            scroll={scrollWithOffset(-150)}
            className={`hover:text-[#1A78F2] transition-colors cursor-pointer ${
              activeLink === "about-us" ? "text-[#1A78F2]" : ""
            }`}
            onClick={() => handleLinkClick("about-us")}
          >
            About Us
          </HashLink>
        </li>

        <li>
          <HashLink
            smooth
            to="/#contact-us"
            scroll={scrollWithOffset(-100)}
            className={`hover:text-[#1A78F2] transition-colors cursor-pointer ${
              activeLink === "contact-us" ? "text-[#1A78F2]" : ""
            }`}
            onClick={() => handleLinkClick("contact-us")}
          >
            Contact Us
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
            onClick={() => handleLinkClick("home")}
            to="/#home"
            className={`block py-2 px-4 hover:bg-[#1A78F2] hover:rounded-3xl hover:text-white hover:font-bold transition-colors ${
              activeLink === "home" ? "bg-[#1A78F2] text-white font-bold" : ""
            }`}
          >
            Home
          </HashLink>
        </li>
        <li>
          <HashLink
            smooth
            onClick={() => handleLinkClick("our-services")}
            to="/#our-services"
            className={`block py-2 px-4 hover:bg-[#1A78F2] hover:rounded-3xl hover:text-white hover:font-bold transition-colors ${
              activeLink === "our-services"
                ? "bg-[#1A78F2] text-white font-bold"
                : ""
            }`}
          >
            Our Services
          </HashLink>
        </li>
        <li>
          <HashLink
            smooth
            onClick={() => handleLinkClick("about-us")}
            to="/#about-us"
            className={`block py-2 px-4 hover:bg-[#1A78F2] hover:rounded-3xl hover:text-white hover:font-bold transition-colors ${
              activeLink === "about-us"
                ? "bg-[#1A78F2] text-white font-bold"
                : ""
            }`}
          >
            About Us
          </HashLink>
        </li>
        <li>
          <HashLink
            smooth
            onClick={() => handleLinkClick("contact-us")}
            to="/#contact-us"
            className={`block py-2 px-4 hover:bg-[#1A78F2] hover:rounded-3xl hover:text-white hover:font-bold transition-colors ${
              activeLink === "contact-us"
                ? "bg-[#1A78F2] text-white font-bold"
                : ""
            }`}
          >
            Contact Us
          </HashLink>
        </li>
      </motion.ul>
    </nav>
  );
};

export default Navbar;
