import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../../assets/logo.png"
import { RiProfileFill } from "react-icons/ri";
// import { useDispatch } from "react-redux";
// import {logout} from '../../../redux/authSlice';
// import { useNavigate } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { MdBorderColor } from "react-icons/md";

export default function SideBar() {
    const [isOpen, setIsOpen] = useState(false);
    // const dispatch = useDispatch();
    // const navigate = useNavigate();
    const handleLogout = () =>{

        // dispatch(logout());
        // navigate("/dashboard");
          
    }

    return (
        <>
            {/* Menu icon*/}
            <div className="md:hidden p-4  ">
                <FiMenu className="text-[#1A78F2] text-3xl cursor-pointer" onClick={() => setIsOpen(true)} />
            </div>
            
            <div className={`bg-[#EAEEF3] w-64 flex flex-col items-center gap-6 fixed top-0 left-0 h-full z-50 transition-transform transform ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:relative md:w-28`}>
                {/* close icon*/}
                <div className="w-full  p-4 md:hidden">
                    <FiX className="text-[#1A78F2] text-3xl cursor-pointer" onClick={() => setIsOpen(false)} />
                </div>
                
                <img src={logo} className="w-32 mt-4" alt="logo" />
                
                <div className="flex flex-col items-center gap-16 h-screen mt-6 px-4">
                    <div className="flex flex-col items-center">
                        <Link to="/dashboard/home" className="font-semibold text-xl text-[#1A78F2] font-source">
                        <IoHome className="text-[#1A78F2] text-4xl" />Home</Link>
                    </div>
                   
                    <div className="flex flex-col items-center">
                        <Link to="/dashboard/orders" className="font-semibold text-xl text-[#1A78F2] font-source">
                        <MdBorderColor className="text-[#1A78F2] text-4xl" />Orders</Link>
                    </div>
                    <div className="flex flex-col items-center">
                        <Link to="/dashboard/portfolio" className="font-semibold text-xl text-[#1A78F2] font-source">
                        <RiProfileFill  className="text-[#1A78F2]  text-4xl" />Protfolio</Link>
                    </div>
                    <button
                    onClick={handleLogout}
                    className="mt- w-[100px] border-4 border-[#1A78F2] text-[#1A78F2] text-xl font-medium font-source rounded-3xl shadow-md bg-white hover:bg-[#1A78F2] hover:text-white transition-all">
                      log out 
                    </button>
                </div>
            </div>
        </>
    );
}
