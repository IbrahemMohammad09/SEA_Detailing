import locationicon from "../assets/image/locationicon.svg"
import { FiPhone } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import './ContactUs.css'
export default function ContactUs(){
    return<>
        <div className=" bg-[#EAEEF3] pt-7 mt-44 pb-28">
            <div className=" flex flex-col justify-center items-center text-center">
               <p className="abhaya-libre-bold text-6xl mb-16">Contact <span className="text-[#1A78F2]">Us</span></p> 
               <p className="abhaya-libre-regular px-2 md:px-0 text-base text-[#2B3641] mb-44 max-w-[670px]">If you call during our business hours you’ll get through to us instantly. If you email, 
                we’ll usually get back to you within the same business day. Our client services team members 
                are eager to answer all of your cleaning services questions.</p>
            </div>
            <div className="flex flex-col md:items-start gap-11 md:flex-row pl-16 contact-child2">
                <div className="flex gap-2 items-start lg:w-1/3 ">
                    <img className="w-4" src={locationicon} alt="location-icon"/>
                    <a href="#" className=" text-[#12153A] Aabhaya-libre-regular text-base hover:text-[#1A78F2]">Toronto, North York, Vaughan, Richmondhill, Maple, Oakville, Markham, Ajax, Mississauga, 
                    Brampton, Oshawa, Aurora, Newmarket</a>
                </div>
                <div className="flex gap-2 items-center lg:w-1/3">
                <FiPhone className="text-[#2B3641] w-5 hover:text-[#1A78F2] " />
                   <a href ='tel:647-673-9380/ 647-273-0008' target="_blank"  className="text-[#12153A] Abhaya-libre-regular text-base hover:text-[#1A78F2]" >
                    647-673-9380/ 647-273-0008</a>
                </div>
                <div className="flex gap-2 items-center  lg:w-1/3">
                <MdOutlineMail className="text-[#2B3641] w-5 hover:text-[#1A78F2]" />
                <a href="mailto:info@detailingcar.com"target="_blank" className="text-[#12153A] Abhaya-libre-regular text-base hover:text-[#1A78F2] ">
                    info@detailingcar.com</a>
                </div>
            </div>
        </div>
        
    
    </>
}