import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { Api } from "../constant/Api";

const OurPortfolio = () => {
  
  const [mediaFiles, setMediaFiles] = useState([]);
  const [selectedMedia, setSelectedMedia] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(Api.GET.PICTURELIST);
        const fetchedMedia = response.data.data.reverse();
        setMediaFiles(fetchedMedia);

        if (fetchedMedia.length > 0) {
          setSelectedMedia(fetchedMedia[0].image); // تعيين العنصر الافتراضي
        }
      } catch (error) {
        console.error("Error fetching media files:", error);
      }
    };

    fetchData();
  }, []);

  // دالة للتحقق مما إذا كان الملف فيديو
  const isVideo = (fileName) => {
    return /\.(mp4|webm|ogg)$/i.test(fileName);
  };

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
        {/* العنصر الرئيسي (صورة أو فيديو) */}
        <motion.div
          key={selectedMedia}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="md:col-span-3 flex items-center justify-center"
        >
          <div className="w-full aspect-video">
            {isVideo(selectedMedia) ? (
              <video
                src={selectedMedia}
                className="w-full h-full object-contain"
                controls
              />
            ) : (
              <img
                src={selectedMedia}
                alt="Selected Work"
                className="w-full h-full object-contain"
              />
            )}
          </div>
        </motion.div>

        {/* الصور المصغرة */}
        <div className="grid grid-cols-2 md:pl-10 gap-2">
          {mediaFiles.map((media, index) => (
            <motion.div
              key={index}
              className={`w-50 h-30 xl:w-30 rounded-md cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-md ${
                selectedMedia === media.image ? "border-4 border-blue-500" : ""
              }`}
              whileHover={{ scale: 1.1 }}
              onClick={() => setSelectedMedia(media.image)}
            >
              {isVideo(media.image) ? (
                <video
                  src={media.image}
                  className="w-full h-full object-cover rounded-md"
                  controls
                />
              ) : (
                <img
                  src={media.image}
                  alt={`Work ${index + 1}`}
                  className="w-full h-full object-cover rounded-md"
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPortfolio;
