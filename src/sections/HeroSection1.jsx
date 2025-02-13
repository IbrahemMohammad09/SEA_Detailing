import BigGreenCar from "../assets/HeroSection1/BigGreenCar.png";
import SmallGreenCar from "../assets/HeroSection1/SmallGreenCar.png";
import CleanSofa from "../assets/HeroSection1/CleanSofa.png";
import Pattern from "../assets/HeroSection1/patern.png";
import Pattern1 from "../assets/HeroSection1/pattern.png";

function HeroSection1() {
  
  return (
    <section className="relative ">
      {/* Pattern1 Background Images */}
      <img
        src={Pattern1}
        alt="Pattern Background"
        className="absolute top-[30%] left-[30%] sm:top-[55%] sm:left-[40%] w-20 sm:w-10 md:w-18 lg:w-24 xl:w-32 2xl:w-44 opacity-50 z-0"
      />{" "}
      <img
        src={Pattern1}
        alt="Pattern Background"
        className="absolute top-[20%] right-[10%] sm:top-[50%] sm:right-[25%] w-20 sm:w-18 md:w-24 lg:w-32 xl:w-44 2xl:w-52 opacity-50 z-0"
      />
      <div className="mx-auto px-4 text-center abhaya-libre-bold relative z-10">
        {/* Green Car */}
        <div className="relative md:-mt-28 lg:-mt-38 ">
          <img
            src={BigGreenCar}
            alt="Car Cleaning"
            className="mx-auto w-[60%] "
          />
        </div>

        {/* Title with Absolute Positioning for Images */}
        <div className="relative mt-20">
          {/* CleanSofa Image (Left) */}
          <div className="absolute left-0 top-32 sm:top-1/2 transform -translate-y-1/2 md:block">
            {/* Pattern Image Behind CleanSofa */}
            <img
              src={Pattern}
              alt="Pattern"
              className="absolute left-1/2 transform -translate-x-1/2 top-full   md:-mt-10 lg:-mt-36 w-20 sm:w-24 md:w-32 lg:w-40 xl:w-48 2xl:w-96 z-0"
            />
            {/* CleanSofa Image */}
            <img
              src={CleanSofa}
              alt="Sofa Cleaning"
              className="w-28 sm:w-48 md:w-56 lg:w-64 xl:w-72 2xl:w-[600px] relative z-10"
            />
          </div>

          {/* Titles */}
          <div className="space-y-2 -mt-20 md:-mt-20 lg:-mt-18">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold text-gray-900">
              Your One Stop Cleaning
            </h1>
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold text-[#1A78F2]">
              Centre For All Needs
            </h2>
          </div>

          {/* SmallGreenCar Image (Right) */}
          <div className="absolute right-0  lg:right-0 top-32 sm:top-1/2 transform -translate-y-1/2 md:block">
            {/* Pattern Image Behind SmallGreenCar */}
            <img
              src={Pattern}
              alt="Pattern"
              className="absolute left-[45%] right-[10%] transform -translate-x-1/2 top-full lg:-mt-32 md:-mt-10  w-20 sm:w-24 md:w-32 lg:w-40 xl:w-48 2xl:w-[900px]  z-0"
            />
            {/* SmallGreenCar Image */}
            <img
              src={SmallGreenCar}
              alt="Car Detailing"
              className="w-28 sm:w-48 sm:left-4 md:w-56 lg:w-64 xl:w-72 2xl:w-[550px] right-[2%] relative z-10"
            />
          </div>
        </div>

        {/* Car Detailing Title */}
        <h3 className="text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold text-[#1A78F2] mt-20">
          <span className="text-black">Car</span> DETAILING
        </h3>
      </div>
    </section>
  );
}

export default HeroSection1;
