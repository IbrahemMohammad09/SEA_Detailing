import image1 from "../assets/HeroSection2/Book.png";
import image2 from "../assets/HeroSection2/e239695702d887addeaee6ebe0568b87.png";
import image3 from "../assets/HeroSection2/HappyClient.png";
import path from "../assets/HeroSection2/path.png";
import pattern from "../assets/HeroSection1/pattern.png";

function HeroSection2() {
  const steps = [
    {
      id: 1,
      title: "BOOK",
      description: "Tell us when and where you want your cleaning.",
      icon: image1,
    },
    {
      id: 2,
      title: "CLEAN",
      description: "A Professional cleaner comes over and cleans your place.",
      icon: image2,
    },
    {
      id: 3,
      title: "HAPPY CLIENT",
      description: "Enjoy your life and come back to a clean space!",
      icon: image3,
    },
  ];

  return (
    <div>
      <div className="mx-auto px-4 py-12 abhaya-libre-bold">
        <div className="flex flex-col px-20 md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-8">
          {/* القسم الأيسر */}
          <div className="text-center md:text-left w-full md:w-1/3">
            <h2 className="text-3xl lg:text-6xl font-bold">
              Why Chose <span className="text-blue-500">US</span>?
            </h2>
          </div>

          {/* القسم الأوسط */}
          <div className="text-center md:text-start w-full md:w-1/3">
            <p className="text-gray-600 lg:text-xl">
              We understand your home is important to you. That’s why we focus
              on the quality of the clean. Our cleaners aren’t contract workers
              - they are full-time employees. They care as much as we do.
            </p>
          </div>

          {/* القسم الأيمن */}
          <div className="text-center md:text-start md:pl-20 lg:text-2xl w-full md:w-1/3">
            <button className="bg-blue-500 text-white px-10 py-2 rounded-full hover:bg-blue-600 transition duration-300 cursor-pointer">
              Book Service
            </button>
          </div>
        </div>
      </div>

      {/* القسم الاخير */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto p-8">
        {steps.map((step, index) => (
          <div
            key={step.id}
            className={`relative flex flex-col items-center w-full ${
              index === 2 ? "md:col-span-2 lg:col-span-1" : ""
            }`}
          >
            {/* المعين */}
            <div className="w-40 h-40 z-10 md:w-48 md:h-48 bg-white rounded-xl shadow-xl transform rotate-45 flex items-center justify-center overflow-hidden hover:scale-110 hover:shadow-2xl transition-transform duration-300">
              <img
                src={step.icon}
                alt={step.title}
                className="w-14 h-18 md:w-20 md:h-24 transform -rotate-45"
              />
            </div>
            {/* النص */}
            <div className="text-start mt-20 w-56">
              <p className="text-blue-500 text-xl font-bold abhaya-libre-extrabold">
                {step.title}
              </p>
              <p className="text-gray-600 mt-4 abhaya-libre-semibold">
                {step.description}
              </p>
            </div>

            {index < steps.length - 1 && (
              <img
                src={path}
                alt="path"
                className="hidden lg:block absolute top-[30%] z-0 -ml-[35%] transform -translate-y-1/2 w-52 h-28"
                style={{ left: "calc(100% + 2rem)" }}
              />
            )}
          </div>
        ))}
        <img
          src={pattern}
          alt="pattern"
          className="hidden lg:block absolute top-[30%] z-0 -ml-[16%] transform -translate-y-1/2 w-32 h-28"
          style={{ left: "calc(100% + 2rem)" }}
        />
        <img
          src={pattern}
          alt="pattern"
          className="hidden lg:block absolute top-[0%] z-0 -ml-[60%] transform -translate-y-1/2 w-32 h-28"
          style={{ left: "calc(100% + 2rem)" }}
        />
        <img
          src={pattern}
          alt="pattern"
          className="hidden lg:block absolute top-[35%] z-0 -ml-[103%] transform -translate-y-1/2 w-32 h-28"
          style={{ left: "calc(100% + 2rem)" }}
        />
      </div>
    </div>
  );
}

export default HeroSection2;
