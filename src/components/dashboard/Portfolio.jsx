import { useState } from "react";
import SideBar from "./SideBar";
import image1 from "../../assets/OurPortfolio/3de741510686044c3d10f3169d6447cb.jpeg";
import image2 from "../../assets/OurPortfolio/4cef68c40a9a4e3ed777edaafe8335a9.jpeg";
import image3 from "../../assets/OurPortfolio/e26d9f6439c3df92e810757a7b44218b.jpeg";
import image4 from "../../assets/OurPortfolio/01e36d90c7d4867eed0b3b77bc0d363f.jpeg";
import image5 from "../../assets/OurPortfolio/3fc85fa235aef293febf4a65565953cb.jpeg";
import image6 from "../../assets/OurPortfolio/e26d9f6439c3df92e810757a7b44218b.jpeg";
const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
];

export default function Portfolio() {
  const [addImage, setaddImage] = useState(null);
  const handleImageChange = (event, setImage) => {
    const file = event.target.files[0];
    if (file) {
      const fileURL = URL.createObjectURL(file);  
      setImage(fileURL);
    }
  };

  return (
    <>
      <div className="md:flex gap-14">
        <SideBar />
        <div className="font-source mx-3">
        <p className="font-bold text-3xl text-[#1A78F2]  mt-12 ">Dashboard</p>
        <p className="font-bold text-2xl text-[#1A78F2]  my-12">Portfolio</p>

          <div>
            <p className="text-2xl text-gray-500 mb-3">Add your profile picture here .</p>
            <label className="cursor-pointer border-dashed border-2 rounded-lg max-w-[300px] border-gray-400 p-16 w-full flex items-center justify-center">
              {addImage ? (
                <a href="#" className="block">
                  <img
                    src={addImage}
                    alt="photo-portfolio"
                    className="w-full h-full object-cover"
                  />
                </a>
              ) : (
                <span className="text-gray-500 text-xl ">Upload</span>
              )}
              <input
                type="file"
                className="hidden"
                onChange={(e) => handleImageChange(e, setaddImage)}
              />
            </label>
          </div>
          <button className="px-8 py-4 text-2xl font-medium  bg-[#1A78F2] text-white rounded-lg  hover:bg-[#EAEEF3] hover:text-[#1A78F2] mt-6">
            Add
            </button>
            <hr className="mt-7 text-gray-400"></hr>

          <div className="flex flex-col justify-center items-center mt-10">
            {Array.from({ length: 4 }).map((_, rowIndex) => (
              <div className="flex flex-col lg:flex-row gap-7 mb-9" key={rowIndex}>
                {images.slice(rowIndex * 3, rowIndex * 3 + 3).map((image, index) => (
                  <div className="mb-3" key={index}>
                    <img src={image} className="w-[350px] h-[250px] rounded-xl" alt="photo-portfolio" />
                    <button className="px-4 py-2 bg-[#1A78F2] font-medium text-2xl text-white rounded-lg  hover:bg-[#EAEEF3] hover:text-[#1A78F2] mt-6 font-source">Delete</button>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
