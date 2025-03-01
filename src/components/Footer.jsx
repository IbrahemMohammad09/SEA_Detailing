import { HashLink } from "react-router-hash-link";
import { Link as RouterLink, useLocation } from "react-router-dom";
import "./Footer.css";
import { FaWhatsapp  } from "react-icons/fa";

const scrollWithOffset = (offset) => (el) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = offset;
  window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
};

export default function Footer() {
  const location = useLocation();

  const handleLinkClick = (link) => {
    if (link === "home" && location.pathname !== "/") {
      window.location.href = "/";
    }
  };

  return (
    <>
      <div className="bg-[#F6F6F6] h-8 w-full py-8 mt-24 font-nunito"></div>
      <div className="flex flex-col lg:flex-row gap-8 px-16 justify-between mt-10 container-footer">
        <div className="flex flex-col gap-2 cursor-pointer">
          <p className="font-semibold text-xl font-source text-[#343536] letter-spacing-2">
            SEA DETALIING
          </p>
          <HashLink
            smooth
            to="/#home"
            scroll={scrollWithOffset(-100)}
            className="font-normal text-base text-[#585A5B] font-lora letter-spacing-2 hover:text-[#1A78F2]"
            onClick={() => handleLinkClick("home")}
          >
            Home
          </HashLink>
          <HashLink
            smooth
            to="/#about-us"
            scroll={scrollWithOffset(-150)}
            className="font-normal text-base text-[#585A5B] font-lora letter-spacing-2 hover:text-[#1A78F2]"
          >
            About Us
          </HashLink>
          <HashLink
            smooth
            to="/#our-services"
            scroll={scrollWithOffset(-80)}
            className="font-normal text-base text-[#585A5B] font-lora letter-spacing-2 hover:text-[#1A78F2]"
          >
            Our Services
          </HashLink>
          {/* <HashLink
            smooth
            to="/#why-choose-us"
            className="font-normal text-base text-[#585A5B] font-lora letter-spacing-2 hover:text-[#1A78F2]"
          >
            Why Choose Us
          </HashLink> */}
          <HashLink
            smooth
            to="/#contact-us"
            scroll={scrollWithOffset(-100)}
            className="font-normal text-base text-[#585A5B] font-lora letter-spacing-2 hover:text-[#1A78F2]"
          >
            Contact Us
          </HashLink>
        </div>

        <div className="flex flex-col gap-2 cursor-pointer">
          <p className="font-semibold text-xl font-source text-[#343536] letter-spacing-2">
            ALL SERVICES
          </p>
          <HashLink
            smooth
            to="/?filter=car#our-services"
            scroll={scrollWithOffset(-100)}
            className="font-normal text-base text-[#585A5B] font-lora letter-spacing-2 hover:text-[#1A78F2]"
          >
            Car Services
          </HashLink>
          <HashLink
            smooth
            to="/?filter=home#our-services"
            scroll={scrollWithOffset(-100)}
            className="font-normal text-base text-[#585A5B] font-lora letter-spacing-2 hover:text-[#1A78F2]"
          >
            Home Services
          </HashLink>
        </div>

        <div className="flex flex-col gap-2  ">
          <p className="font-semibold text-xl font-source text-[#343536] letter-spacing-2">
            BOOK YOUR SERVICE
          </p>
          <p className="font-normal text-base text-[#585A5B] max-w-[310px] letter-spacing-2 font-lora">
            Get best dedicated team of professionals for your service.
          </p>
          <RouterLink
            to="/book-service"
            className="border text-white font-normal md:font-semibold text-base letter-spacing-8 bg-[#1A78F2] rounded-4xl w-[193px] py-3.5 px-7 font-lora my-4 hover:shadow-xl hover:border hover:border-[#1A78F2] hover:bg-white hover:text-[#1A78F2]"
          >
            BOOK SERVICE
          </RouterLink>

          <div
            className="flex font-source text-base md:text-2xl font-light text-[#343536] letter-spacing-2"
          >
            <span className="px-2 mt-1"><FaWhatsapp />
            </span> 
            <a
              href="https://wa.me/6476739380"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#1A78F2]"
            >
              647-673-9380 
            </a>
          </div>

          <div
            className="flex font-source text-base md:text-2xl font-light text-[#343536] letter-spacing-2"
          >
            <span className="px-2 mt-1">< FaWhatsapp /></span>
            <a
              href="https://wa.me/6476730008"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#1A78F2]"
            >
              647-273-0008
            </a>
          </div>
            

        </div>
      </div>

      <div className="bg-[#F6F6F6] py-8 mt-14 font-nunito">
        <p className="text-black font-normal text-base text-center">
          © Copyright by{" "}
          <a
            style={{ color: "#2fb0cd" }}
            target="_blank"
            rel="noopener noreferrer"
            href="https://sparkengdev.com/"
          >
            SPARK
          </a>{" "}
          – All rights reserved.
        </p>
      </div>
    </>
  );
}
