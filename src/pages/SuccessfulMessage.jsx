import { GoCheckCircle } from "react-icons/go";
import { motion } from 'framer-motion';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

export default function Successful() {

    const navigate = useNavigate();
    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 20 },
        transition: { duration: 0.6 }
    };

    const bounce = {
        initial: { scale: 0.8 },
        animate: { scale: 1.1 },
        exit: { scale: 0.8 },
        transition: { duration: 0.6, yoyo: Infinity }
    };

    const delay = 6000; 

    useEffect(() => {
      const timer = setTimeout(() => {
        navigate("/");
      }, delay);
  
      return () => clearTimeout(timer);
    }, [navigate, delay]); 

    const title = "Order Successful";
    const message = "Your request has been sent successfully.";
    const message2 = "Thank you for choosing us!";
    return (
        <div>
            <ScrollToTop />
            <Navbar />
            <div className="flex flex-col items-center text-center font-source text-[#1A78F2] mt-50  mb-44 gap-1">
                <motion.div
                    {...bounce}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    transition={{ duration: 0.5, delay: 1 }}
                >
                    <GoCheckCircle className="text-7xl mb-10" />
                </motion.div>
                <motion.p {...fadeInUp} transition={{ duration: 0.6, delay: 0.2 }} className="font-medium text-5xl mb-2 ">
                    {title}
                </motion.p>
                <motion.p {...fadeInUp} transition={{ duration: 0.6, delay: 0.4 }} className="font-normal text-4xl  ">
                    {message}
                </motion.p>
                <motion.p {...fadeInUp} transition={{ duration: 0.6, delay: 0.6 }} className="font-normal text-4xl ">
                    {message2}
                </motion.p>
            </div>
            <Footer />
        </div>
    );
}
