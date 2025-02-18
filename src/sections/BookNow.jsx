import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import cornerImage from "../assets/BookService/pattern.png";
import cornerImage1 from "../assets/BookService/pattern1.png";
import "./BookNowRadio.css";

const BookNow = () => {
  return (
    <div className="py-12 -mt-[100%] sm:mt-0 xl:mt-0 2xl:mt-52">
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
                      647-673-9380 / 647-273-0008
                    </p>
                  </div>
                </div>

                {/* البريد الإلكتروني */}
                <div className="flex items-start">
                  <FaEnvelope className="text-white mr-4 text-xl" />
                  <p className="text-sm lg:text-lg">demo@gmail.com</p>
                </div>

                {/* العنوان */}
                <div className="flex items-start">
                  <FaMapMarkerAlt className="text-white mr-4 text-6xl" />
                  <p className="text-sm lg:text-lg">
                    Toronto, North York, Vaughan, Richmondhill, Maple, Oakville,
                    Markham, Ajax, Mississauga, Brampton, Oshawa, Aurora,
                    Newmarket
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
            <form className="space-y-8">
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
                    The address
                  </label>
                  <input
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
                    type="tel"
                    id="phone"
                    placeholder="Enter Your Phone Number"
                    className="w-full text-sm poppins-regular border-b-4 border-gray-300 focus:border-blue-500 outline-none py-2 rounded-b-md"
                  />
                </motion.div>
              </div>
              <div className="space-y-4">
                <h1 className="poppins-bold">
                  Choose Your Preferred Service Method:
                </h1>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="center"
                    name="service"
                    value="center"
                    className="mr-2 text-sm poppins-regular appearance-none w-5 h-5 border-2 border-gray-300 rounded-full checked:bg-blue-500 checked:border-blue-500 relative"
                  />
                  <label
                    htmlFor="center"
                    className="text-gray-700 poppins-bold font-bold"
                  >
                    {" "}
                    Cleaning at the Center
                  </label>
                </div>
                <p className="text-sm font-bold text-gray-500 ml-6">
                  – Bring your car to our center and enjoy a professional
                  cleaning service by our experts.
                </p>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="home"
                    name="service"
                    value="home"
                    className="mr-2 text-sm poppins-regular appearance-none w-5 h-5 border-2 border-gray-300 rounded-full checked:bg-blue-500 checked:border-blue-500 relative"
                  />
                  <label
                    htmlFor="home"
                    className="text-gray-700 poppins-bold font-bold"
                  >
                    {" "}
                    Cleaning at Home
                  </label>
                </div>
                <p className="text-sm font-bold text-gray-500 ml-6">
                  – Let our team come to you and clean your car while you relax
                  at home.
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
              >
                Send Message
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookNow;
