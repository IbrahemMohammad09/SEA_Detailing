import locationicon from "../assets/image/locationicon.svg";
import { FaWhatsapp  } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import "./ContactUs.css";
export default function ContactUs() {
  return (
    <>
      <div id="contact-us" className=" bg-[#EAEEF3] pt-7 mt-20 pb-28">
        <div className=" flex flex-col justify-center items-center text-center">
          <p className="abhaya-libre-bold text-6xl mb-16">
            Contact <span className="text-[#1A78F2]">Us</span>
          </p>

          <p className="abhaya-libre-regular px-2 md:px-0 text-2xl text-[#2B3641] mb-44 max-w-[670px]">
            If you call during our business hours you’ll get through to us
            instantly. If you email, we’ll usually get back to you within the
            same business day. Our client services team members are eager to
            answer all of your cleaning services questions.
          </p>
        </div>

        <div className="flex flex-col justify-evenly p gap-2 px-2.5  sm:items-center md:flex-row  pl-8 contact-child2">
          <div className="flex gap-2 items-start  md:pb-4 lg:w-1/3 ">
            <img className="w-4" src={locationicon} alt="location-icon" />
            <a
              href="https://maps.app.goo.gl/fh9YV8Ki1vdzgxCs6"
              target="_blank"
              className=" text-[#12153A] text-lg Aabhaya-libre-regular max-w-[500px] text-base hover:text-[#1A78F2]"
            >
              365 Murray Ross Pkwy, North York, ON, Canada
            </a>
          </div>

          <div className="flex  gap-2 items-center ">
            <FaWhatsapp  className="text-[#2B3641] w-5 hover:text-[#1A78F2] " />
            <a
              href="https://wa.me/6476739380"
              target="_blank"
              className="text-[#12153A] text-lg Abhaya-libre-regular text-base hover:text-[#1A78F2] my-4 md:my-0"
            >
              647-673-9380 /
            </a>
            {/* <FaWhatsapp  className="text-[#2B3641] w-5 hover:text-[#1A78F2] " /> */}
            <a
              href="https://wa.me/6476730008"
              target="_blank"
              className="text-[#12153A] Abhaya-libre-regular text-lg text-base hover:text-[#1A78F2] my-4 md:my-0"
            >
              647-673-0008
            </a>
          </div>

          <div className="flex gap-2 items-center ">
            <MdOutlineMail className="text-[#2B3641] w-5 hover:text-[#1A78F2]" />

            <a
              href="mailto:info@sea-cardetailing.com"
              target="_blank"
              className="text-[#12153A] text-lg Abhaya-libre-regular text-base hover:text-[#1A78F2] "
            >
              info@sea-cardetailing.com
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
