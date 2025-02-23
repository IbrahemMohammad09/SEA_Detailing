
import { FaUser, FaLock} from 'react-icons/fa';
import { LuEyeClosed } from "react-icons/lu";
import { FaRegEye } from "react-icons/fa6";
import { useState } from 'react';
import {Api} from "../../constant/Api";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {useDispatch} from 'react-redux';
import {login} from '../../redux/authSlice'

export default function Login() {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [userName , setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [loading , setLoading]= useState(false);



    const handleSubmit = async (e) =>{
        
        e.preventDefault();
        setLoading(true);
        
        const requestData = {
            "username": userName,
            "password": password
          }

        try{
            const response = await axios.post(Api.POST.LOGIN, requestData);

            const message = response.data.state;

            const token = response.data.data.token;
            
            dispatch(login(token))
            
            if (message){
                navigate ('/dashboard-home');
            }else{
                navigate('/login')
            }
        } catch{
            navigate('/')
        }

    }

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <>
        <div className=' bg-[#EAEEF3] h-screen flex justify-center items-center p-10 '>
                <div className=" flex flex-col justify-center items-center mb-7  mt-24  py-12 md:rounded-lg md:shadow-gray-500 md:shadow-2xl px-4 md:px-24  ">
                    <p className="text-center font-normal text-7xl text-[#241E1E]  mb-12">Welcome</p>
                    <form>
                        <div className="flex flex-col mb-10">
                            <label className="font-semibold text-2xl  text-black">User Name</label>
                            <div className="relative">
                                <span className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2">
                                    <FaUser className='text-[#1A78F2]' /> 
                                </span>
                                <input
                                    type="text"
                                    className=" w-full border-0 border-b-2  bg-[#EAEEF3]  pb-5 border-black mt-4 focus:outline-none focus:border-b-2 focus:border-[#1A78F2] pl-8" 
                                    placeholder=" | demo@email.com | "
                                    value={userName}
                                    onChange={(e)=>setUserName(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <label className="font-semibold text-2xl  text-black">Password</label>
                            <div className="relative flex items-center">
                                <span className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2">
                                    <FaLock className='text-[#1A78F2]' /> 
                                </span>
                                <input
                                    type={passwordVisible ? "text" : "password"}
                                    className="border-0 w-full border-b-2  border-black bg-[#EAEEF3] mt-4 pb-5 focus:outline-none focus:border-b-2 focus:border-[#1A78F2] pl-8 "
                                    placeholder=" | ********* "
                                    value={password}
                                    onChange={(e)=>setPassword(e.target.value)}
                                />
                                <span
                                    className="absolute right-0  top-1/2 transform -translate-y-1/2 cursor-pointer  p-2"
                                    onClick={togglePasswordVisibility}
                                >
                                    {passwordVisible ? <FaRegEye />: <LuEyeClosed />} 
                                </span>
                            </div>
                        </div>
                        <button 
                            type="submit" 
                            className="w-full bg-[#1A78F2]  font-semibold text-3xl  font-loar  mt-9 rounded-3xl text-[#EAEEF3] py-6 px-28   hover:bg-blue-600  hover:shadow-xl" 
                            onClick={handleSubmit}
                            >{
                                loading?("Login..."):("login")
                            }</button>
                    </form>
                </div>
                </div>
          
        </>
    );
}
