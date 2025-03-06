import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import cornerImage from "../assets/BookService/pattern.png";
import cornerImage1 from "../assets/BookService/pattern1.png";
import "./BookNowRadio.css";
import { Api } from "../constant/Api";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";

const BookNow = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("default@email.com");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [type, setType] = useState("");
  const [text, setText] = useState("");
  


  const sendBookingRequest = async (e) => {
    e.preventDefault(); 

    if (!name) {
      alert("Please enter your name.");
      return;
  }
  
  if (!address) {
      alert("Please enter your address.");
      return;
  }
  if (!phone) {
      alert("Please enter your phone number.");
      return;
  }
  if (!type) {
      alert("Please select a service type.");
      return;
  }
  if (!text) {
      alert("Please enter your message.");
      return;
  }

    try {
      const requestData = {
        name,
        email,
        address,
        phone,
        message: text,
        status: "new",
        type
      };


      const response = await axios.post(Api.POST.CREATEORDER, requestData, {
        headers: {
          "Content-Type": "application/json"
        }
      });

      if (response.status === 200 || response.status === 201) {
        navigate("/order-successful");
      } else {
        alert("Failed to send booking request. Please try again.");
      }
    } catch (error) {
      console.error("Error sending booking request:", error);
      alert("An error occurred while sending the request. Please check your information and try again.");
    }
};

  


  
  return (
    <div className="py-12 -mt-[400px] sm:-mt-[200px] md:mt-20 xl:mt-0 2xl:mt-52">
      {/* القسم الرئيسي */}
      <div className="container mx-auto px-4">
        {/* إضافة shadow-neon-blue هنا */}
        <div className=" shadow-neon-blue rounded-lg overflow-hidden flex flex-col md:flex-row">
          {/* الجزء الأيسر */}
          <div
            className="w-full md:w-2/6 p-8 relative overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, #3b82f6, #2563eb, #1d4ed8, #1e40af)",
            }}
          >
            <div className="bg-opacity-30 rounded-lg relative z-10">
              <h2 className="text-xl lg:text-3xl font-bold text-white mb-6">
                BOOK NOW
              </h2>

              {/* معلومات الاتصال */}
              <div className="space-y-4 md:space-y-10 pl-0 xl:pr-18 pt-20 poppins-regular text-white">
                {/* الهاتف */}
                <div className="flex items-start">
                  <FaPhone className="text-white mr-4 text-xl" />
                  <div>
                    <p className="text-sm lg:text-lg">
                    <a
                      href="https://wa.me/6476739380"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      647-673-9380 / {" "}
                    </a> 
                    <a
                      href="https://wa.me/6476730008"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      647-273-0008
                    </a>
                    </p>
                  </div>
                </div>

                {/* البريد الإلكتروني */}
                <div className="flex items-start">
                  
                  <a  href="mailto:info@sea-cardetailing.com" className="text-sm lg:text-md flex"><FaEnvelope className="text-white mr-4 text-xl" />info@sea-cardetailing.com</a>
                </div>

                {/* العنوان */}
                <div className="flex items-start">
                  
                  <p className="text-sm lg:text-lg">
                    <a
                      href="https://maps.app.goo.gl/fh9YV8Ki1vdzgxCs6"
                      target="_blank"
                      className="Aabhaya-libre-regular max-w-[500px] text-base flex items-start "
                    >
                      <FaMapMarkerAlt className="text-white mr-4 text-3xl" />
                      365 Murray Ross Pkwy, North York, ON, Canada
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* الصورة في نهاية القسم الأيسر من الأسفل */}
            <motion.img
              src={cornerImage1}
              alt="Corner Image"
              className="absolute bottom-10 left-90 w-32 h-32 object-cover"
              whileHover={{ scale: 1.1 }}
            />
            <motion.img
              src={cornerImage}
              alt="Corner Image"
              className="absolute -bottom-8 left-100 w-32 h-32 object-cover"
              whileHover={{ scale: 1.1 }}
            />
          </div>

          {/* الجزء الأيمن */}
          <div className="w-full md:w-3/5 p-8 pt-20 pl-20">
            <form onSubmit={sendBookingRequest} className="space-y-8">
              {" "}
              {/* زيادة التباعد بين العناصر */}
              {/* الصف الأول: Name - The address */}
              <div className="flex flex-col md:flex-row md:space-x-20 space-y-10 md:space-y-4">
                <motion.div
                  className="w-full md:w-1/2 relative"
                  whileFocus={{ scale: 1.02 }}
                >
                  <label
                    htmlFor="name"
                    className="absolute poppins-bold -top-6 left-0 text-sm text-gray-500 font-bold transition-all duration-300"
                  >
                    Name
                  </label>
                  <input
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    id="name"
                    placeholder="Enter Your Name"
                    className="w-full text-sm poppins-regular border-b-4 border-gray-300 focus:border-blue-500 outline-none py-2 rounded-b-md"
                  />
                </motion.div>
                <motion.div
                  className="w-full md:w-1/2 relative"
                  whileFocus={{ scale: 1.02 }}
                >
                  <label
                    htmlFor="address"
                    className="absolute poppins-bold -top-6 left-0 text-sm text-gray-500 font-bold transition-all duration-300"
                  >
                    Address
                  </label>
                  <input
                    onChange={ (e)=> setAddress(e.target.value)}
                    type="text"
                    id="address"
                    placeholder="Enter Your Address"
                    className="w-full text-sm poppins-regular border-b-4 border-gray-300 focus:border-blue-500 outline-none py-2 rounded-b-md"
                  />
                </motion.div>
              </div>
              {/* الصف الثاني: Email - Phone Number */}
              <div className="flex flex-col md:flex-row md:space-x-20 space-y-10 md:space-y-0">
                <motion.div
                  className="w-full md:w-1/2 relative"
                  whileFocus={{ scale: 1.02 }}
                >
                  <label
                    htmlFor="email"
                    className="absolute poppins-bold -top-6 left-0 text-sm text-gray-500 font-bold transition-all duration-300"
                  >
                    Email
                  </label>
                  <input
                    onChange={(e)=> setEmail(e.target.value)}
                    type="email"
                    id="email"
                    placeholder="Enter You Email"
                    className="w-full text-sm poppins-regular border-b-4 border-gray-300 focus:border-blue-500 outline-none py-2 rounded-b-md"
                  />
                </motion.div>
                <motion.div
                  className="w-full md:w-1/2 relative"
                  whileFocus={{ scale: 1.02 }}
                >
                  <label
                    htmlFor="phone"
                    className="absolute poppins-bold -top-6 left-0 text-sm text-gray-500 font-bold transition-all duration-300"
                  >
                    Phone Number
                  </label>
                  <input
                    onChange={(e)=> setPhone(e.target.value)}
                    type="tel"
                    id="phone"
                    placeholder="Enter Your Phone Number"
                    className="w-full text-sm poppins-regular border-b-4 border-gray-300 focus:border-blue-500 outline-none py-2 rounded-b-md"
                  />
                </motion.div>
              </div>
              <div className="space-y-4">
                <h1 className="poppins-bold">Choose Your Preferred Service Method:</h1>

                {/* خيار Cleaning at the Center */}
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="center"
                    name="service"
                    value="center"
                    checked={type === "center"}
                    onChange={(e) => setType(e.target.value)}
                    className="mr-2 text-sm poppins-regular appearance-none w-5 h-5 border-2 border-gray-300 rounded-full checked:bg-blue-500 checked:border-blue-500 relative"
                  />
                  <label htmlFor="center" className="text-gray-700 poppins-bold font-bold">
                    Cleaning at the Center
                  </label>
                </div>
                <p className="text-sm font-bold text-gray-500 ml-6">
                  – Bring your car, motorcycle, or any item to our center and experience top-tier professional cleaning services by our experts.
                </p>

                {/* خيار Cleaning at Home */}
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="home"
                    name="service"
                    value="home"
                    checked={type === "home"}
                    onChange={(e) => setType(e.target.value)}
                    className="mr-2 text-sm poppins-regular appearance-none w-5 h-5 border-2 border-gray-300 rounded-full checked:bg-blue-500 checked:border-blue-500 relative"
                  />
                  <label htmlFor="home" className="text-gray-700 poppins-bold font-bold">
                    Cleaning at Home
                  </label>
                </div>
                <p className="text-sm font-bold text-gray-500 ml-6">
                  – Let our team come to you and provide professional cleaning for your vehicle, furniture, or any item while you relax at home.
                </p>
              </div>

              {/* تلميح */}
              <div className="bg-blue-50 p-4 rounded-lg xl:w-[70%]">
                <p className="text-sm poppins-bold text-blue-700">
                  💡 Please provide your exact location if you choose the home
                  cleaning service to ensure our team arrives on time.
                </p>
              </div>
              {/* حقل الرسالة */}
              <motion.div
                className="relative mt-10"
                whileFocus={{ scale: 1.02 }}
              >
                <label
                  htmlFor="message"
                  className="absolute poppins-bold -top-6 left-0 text-sm text-gray-500 font-bold transition-all duration-300"
                >
                  Message
                </label>
                <textarea
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  id="message"
                  placeholder="Write Your Message"
                  className="w-full text-sm poppins-regular border-b-4 border-gray-300 focus:border-blue-500 outline-none py-2 rounded-b-md"
                  rows="1"
                ></textarea>
              </motion.div>
              {/* زر الإرسال */}
              <motion.button
                type="submit"
                className="bg-blue-500 text-white px-6 py-2 rounded-lg float-right"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onSubmit={sendBookingRequest}
              >
                Submit
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookNow;
