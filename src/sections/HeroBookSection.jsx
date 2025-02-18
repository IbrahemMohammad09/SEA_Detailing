import right from "../assets/BookService/right.png";
import center from "../assets/BookService/center.png";
import left from "../assets/BookService/left.png";

const HeroBookService = () => {
  return (
    <div className="relative  h-[750px] xl:h-screen flex items-center justify-center overflow-hidden">
      {/* النص في منتصف الصفحة */}
      <div className="absolute top-[180px] sm:top-[250px] md:top-[400px] lg:top-[250px] xl:top-[350px]  left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 text-center">
        <h1 className="abhaya-libre-medium text-lg sm:text-4xl md:text-5xl 2xl:text-7xl font-bold text-black">
          Happy to Help You
        </h1>
      </div>

      {/* الصور مع التداخل */}
      <div className="relative w-full -top-[300px] h-full">
        {/* الصورة اليسرى */}
        <img
          src={left}
          alt="Left Image"
          className=" absolute top-[485px] w-[100px] left-0 sm:w-[170px] sm:top-[540px] md:w-[200px] md:top-[750px] lg:w-[300px] lg:top-[530px] xl:top-[580px] xl:w-[350px] 2xl:top-[635px] 2xl:w-[500px] h-auto z-20 transform -translate-y-1/4"
        />

        {/* الصورة الوسطى */}
        <img
          src={center}
          alt="Center Image"
          className="absolute top-[350px] w-[250px] left-0 sm:w-[450px] sm:top-[300px] md:w-[550px] md:top-[450px] lg:w-[800px] lg:top-[100px] xl:w-[900px] xl:top-[100px] 2xl:top-0  2xl:w-[1200px] h-auto z-10 transform translate-y-1/4"
        />

        {/* الصورة اليمنى */}
        <img
          src={right}
          alt="Right Image"
          className=" absolute top-[530px] right-[5%] w-[100px] sm:w-[150px] sm:top-[650px] md:w-[200px] md:top-[850px] md:left-[68%] lg:w-[250px] lg:left-[75%] lg:top-[700px] xl:top-[750px] xl:w-[400px] xl:left-[60%] 2xl:left-[1200px] 2xl:top-[850px] 2xl:right-0 2xl:w-[500px] h-auto z-30 transform -translate-y-1/4"
        />
      </div>
    </div>
  );
};

export default HeroBookService;
