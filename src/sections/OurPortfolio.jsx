import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { Api } from "../constant/Api";

// import image1 from "../assets/OurPortfolio/3de741510686044c3d10f3169d6447cb.jpeg";
// import image2 from "../assets/OurPortfolio/4cef68c40a9a4e3ed777edaafe8335a9.jpeg";
// import image3 from "../assets/OurPortfolio/e26d9f6439c3df92e810757a7b44218b.jpeg";
// import image4 from "../assets/OurPortfolio/01e36d90c7d4867eed0b3b77bc0d363f.jpeg";
// import image5 from "../assets/OurPortfolio/3fc85fa235aef293febf4a65565953cb.jpeg";
// import image6 from "../assets/OurPortfolio/e26d9f6439c3df92e810757a7b44218b.jpeg";

// const images = [
  // image1,
  // image2,
  // image3,
  // image4,
  // image5,
  // image6,
  // image1,
  // image2,
  // image3,
  // image4,
  // image5,
  // image6,
// ];

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
              className={`w-full h-30 object-cover rounded-md cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-md ${
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
