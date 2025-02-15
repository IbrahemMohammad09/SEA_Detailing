function HeroSection2() {
  return (
    <div className="container mx-auto px-4 py-12 abhaya-libre-bold">
      <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-8">
        {/* القسم الأيسر */}
        <div className="text-center md:text-left w-full md:w-1/3">
          <h2 className="text-3xl lg:text-6xl font-bold">
            Why Chose <span className="text-blue-500">US</span>?
          </h2>
        </div>

        {/* القسم الأوسط */}
        <div className="text-center md:text-start w-full md:w-1/3">
          <p className="text-gray-600 lg:text-xl">
            We understand your home is important to you. That’s why we focus on
            the quality of the clean. Our cleaners aren’t contract workers -
            they are full-time employees. They care as much as we do.
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
  );
}

export default HeroSection2;
