import SideBar from "./SideBar"
import { Link } from "react-router-dom"
import { RiProfileFill } from "react-icons/ri";
import { MdBorderColor } from "react-icons/md";

export default function HomeDahboard(){
    return<>
   <div className=" md:flex  gap-14 ">
    <SideBar/>
    <div>
        <p className=" mb-20 text-[#1A78F2] font-bold text-3xl mt-16 pl-5 md:pl-0 font-source">Dashboard</p>
        <div className="flex flex-col justify-center items-start md:flex-row flex-wrap  gap-24 mx-4 ">
            <Link to={"/dashboard/portfolio"} className="bg-[#EAEEF3] flex gap-6 w-[315px] font-semibold text-base text-[#1A78F2] rounded shadow-xl  py-16 px-20 hover:border hover:border-[#1A78F2]">
            <RiProfileFill  className="text-[#1A78F2]  text-4xl" />
                <p className=" font-semibold text-2xl font-source">Portfolio</p>
            </Link>
            <Link to={"/dashboard-order"} className="bg-[#EAEEF3] flex gap-6 w-[315px] font-semibold text-xl text-[#1A78F2] rounded shadow-xl py-16 px-20 hover:border hover:border-[#1A78F2]">
            <MdBorderColor className="text-[#1A78F2] text-4xl" />
                <p className="  font-semibold text-2xl font-source">Orders</p>
            </Link>
        
        </div>
       
     
    </div>
  </div>
    </>
}