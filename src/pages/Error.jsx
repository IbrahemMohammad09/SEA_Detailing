import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const Error404 = () => {
  return (
    <div className="  min-h-screen  bg-gray-100 p-4">
      <Navbar />
      <div className="sm:mt-28 lg:mt-0">
        <section className="  min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-bold text-blue-600 mb-4"
          >
            404
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-2xl md:text-3xl text-gray-700 mb-2"
          >
            Oops! Page Not Found.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-base md:text-lg text-gray-500 mb-8 text-center max-w-lg"
          >
            It seems that the page you are looking for does not exist. Please
            check the URL or return to the homepage.
          </motion.p>

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <Link
              to="/"
              className="px-8 py-3 bg-blue-600 text-white rounded-full text-lg font-medium transition duration-300 hover:bg-blue-700"
            >
              Back To Home
            </Link>
          </motion.div>
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default Error404;
