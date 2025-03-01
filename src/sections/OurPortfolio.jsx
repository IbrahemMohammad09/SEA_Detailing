import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { Api } from "../constant/Api";

const OurPortfolio = () => {
  const [images , setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  
  useEffect(()=>{
    const fetchData = async () =>{
      try{
        const response = await axios.get(Api.GET.PICTURELIST);
        const fetchedImages = response.data.data.reverse();
        setImages(fetchedImages);
        if (fetchedImages.length > 0) {
          setSelectedImage(fetchedImages[0].image); // تعيين الصورة الافتراضية
        }
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    }
    
    fetchData();
  },[])


  


  return (
    <section
      id="our-portifolio"
      className="min-h-auto py-16 px-5 md:px-20 lg:px-32"
    >
      {/* العناوين */}
      <div className="text-center mb-10 flex-shrink-0">
        <h2 className="text-2xl font-bold text-blue-600">OUR PORTFOLIO</h2>
        <p className="text-5xl font-bold text-gray-700 mt-2">
          RECENT WORK SHOWCASE
        </p>
      </div>

      {/* قسم المعرض */}
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-6 items-center">
        {/* الصورة الكبيرة مع Aspect Ratio */}
        <motion.div
          key={selectedImage}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="md:col-span-3 flex items-center justify-center"
        >
          <div className="w-full aspect-video">
            <img
              src={selectedImage}
              alt="Selected Work"
              className="w-full h-full object-contain"
            />
          </div>
        </motion.div>

        {/* الصور المصغرة */}
        <div className="grid grid-cols-3 md:pl-10 gap-3">
          {images.map((img, index) => (
            <motion.img
              key={index}
              src={img.image}
              alt={`Work ${index + 1}`}
              className={`w-full w h-30 object-cover rounded-md cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-md ${
                selectedImage === img.image ? "border-4 border-blue-500" : ""
              }`}
              whileHover={{ scale: 1.1 }}
              onClick={() => setSelectedImage(img.image)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPortfolio;
