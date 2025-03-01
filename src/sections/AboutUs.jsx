import photo1 from "../assets/image/About/photo1.svg";
import photo2 from "../assets/image/About/photo2.jpg";
import photo3 from "../assets/image/About/photo3.jpg";
import photo4 from "../assets/image/About/photo4.svg";
import { useNavigate } from "react-router";

export default function AboutUs() {
  const navigate = useNavigate();

  return (
    <>
      <div id="about-us" className="mt-24 mx-auto">
        <p className="abhaya-libre-bold text-5xl text-[#12153A] text-center mb-28">
          About <span className="text-[#1A78F2]">Us</span>
        </p>
        <div className="flex flex-col-reverse  justify-center items-center lg:flex-row gap-28 px-10 md:px-32 container-about">
          <div>
            <p className="font-work font-bold text-3xl text-[#555555] max-w-[600px]">
              QUICKLY AND EASY TO CLEAN YOUR OFFICE AND HOUSE
            </p>
            <p className="font-work font-normal text-base text-[#292929] mt-4 max-w-[500px]">
            At SEA Detaling, we believe that true luxury lies in the details. That’s why we offer a premium cleaning experience that goes beyond expectations, ensuring that your offices and luxury vehicles maintain their impeccable elegance.

With a team of highly trained professionals and the latest cleaning technologies, we deliver meticulous care using high-end, eco-friendly products. Our tailored approach guarantees a pristine environment that reflects sophistication, excellence, and refinement.

Because luxury begins with cleanliness, we provide a seamless, discreet, and top-tier service designed for those who appreciate the finest things in life.
            </p>
            <button
              onClick={() => navigate("/book-service")}
              className="text-white bg-[#1195FF]  font-semibold text-3xl rounded-4xl w-64 py-3.5 px-9 hover:bg-blue-600  hover:shadow-xl font-lora mt-8 mb-12"
            >
              Book Services
            </button>
          </div>
          <div className="flex gap-6">
            <div className="flex-col">
              <img
                className=" hover:scale-110 transition rounded-tl-md mb-10"
                src={photo1}
                alt="photo"
              />
              <img
                className=" hover:scale-110 transition w-[245px] rounded-bl-md "
                src={photo2}
                alt="photo"
              />
            </div>
            <div className="flex-col ">
              <img
                className=" hover:scale-110 transition mb-5 w-[299px] rounded-tr-md"
                src={photo3}
                alt="photo"
              />
              <img
                className=" hover:scale-110 transition rounded-br-md"
                src={photo4}
                alt="photo"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
