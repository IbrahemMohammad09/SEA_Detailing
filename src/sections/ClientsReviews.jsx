import { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./Responsive.css";

import {
  FaStar,
  FaArrowLeft,
  FaArrowRight,
  FaTimes,
  FaComment,
  FaUserAlt,
} from "react-icons/fa";
import { Api,URL } from "../constant/Api";
import axios from "axios";
import { Navigate } from "react-router-dom";
// import Loading from "../pages/Loading";

const ClientsReviews = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [name, setName] = useState("");
  const [feedback, setFeedback] = useState("");
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [reviews, setReviews] = useState([]);

  const [isMobileView, setIsMobileView] = useState(false);
  const [isSwiperEnabled, setIsSwiperEnabled] = useState(false);

  const swiperNavPrev = useRef(null);
  const swiperNavNext = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(Api.GET.RATESLIST);
        setReviews(response.data.reverse());
      } catch {
        <Navigate to={"/error"} />;
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1280) {
        setIsMobileView(true);
        setIsSwiperEnabled(true);
      } else {
        setIsMobileView(false);
        setIsSwiperEnabled(reviews.length >= 4);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [reviews]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !feedback || rating === 0) {
      setError("All fields are required!");
      return;
    }

    setSubmitting(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await axios.post(Api.POST.CREATERATE, {
        name,
        message: feedback,
        rate: rating,
        state : false
      });

      setSuccess("Your review has been submitted successfully!");
      setShowPopup(false);
      setName("");
      setFeedback("");
      setRating(0);
    } catch (err) {
      setError("An error occurred while sending.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="mt-10">
      {/* {loading ? (
        <Loading />
      ) : ( */}
        <section className="fixRespo mt-10 md:-mt-0 sm:mt-52 md:px-20 bg-white text-center relative">
          <h2 className="text-5xl font-bold text-blue-600 mb-12">
            Our Clients Reviews
          </h2>

          {/* السلايدر */}
          <div className="relative sm:max-w-[50%] lg:max-w-[90%] mx-auto">
            {/* الأسهم خارج السلايدر */}
            <button
              ref={swiperNavPrev}
              className="absolute left-[-100px] top-1/2 transform -translate-y-1/2 border-2 border-[#1A78F2] text-[#1A78F2] p-5 rounded-full shadow-lg bg-white hover:bg-[#1A78F2] hover:text-white transition-all z-10 hidden md:block"
            >
              <FaArrowLeft className="text-sm sm:text-sm md:text-xl lg:text-3xl" />
            </button>

            <button
              ref={swiperNavNext}
              className="absolute right-[-100px] top-1/2 transform -translate-y-1/2 border-2 border-[#1A78F2] text-[#1A78F2] p-5 rounded-full shadow-lg bg-white hover:bg-[#1A78F2] hover:text-white transition-all z-10 hidden md:block"
            >
              <FaArrowRight className="text-sm sm:text-sm md:text-xl lg:text-3xl" />
            </button>

            {isSwiperEnabled ? (
              <Swiper
                modules={[Navigation]}
                spaceBetween={40}
                slidesPerView={reviews.length === 1 ? "auto" : 1}
                centeredSlides={reviews.length === 1}
                breakpoints={{
                  768: { slidesPerView: 1 },
                  1024: { slidesPerView: 2 },
                  1280: { slidesPerView: 3 },
                  1536: { slidesPerView: 4 },
                }}
                className="pb-10 h-[600px] flex justify-center"
                navigation={{
                  prevEl: swiperNavPrev.current,
                  nextEl: swiperNavNext.current,
                }}
              >
                {reviews.map((review, index) => (
                  <SwiperSlide key={index} className="flex justify-center">
                    <div
                      className="border-4 mt-10 border-[#1A78F2] p-8 rounded-xl text-center bg-white mx-auto max-w-[300px] h-[400px] flex flex-col justify-between"
                      style={{
                        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)",
                      }}
                    >
                      <h3 className="text-2xl  font-semibold text-gray-900">
                        {review.name}
                      </h3>
                      <p className="text-gray-600 text-lg ">{review.message}</p>
                      <div className="flex justify-center text-2xl space-x-5">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <FaStar
                            key={i}
                            className={
                              i < review.rate
                                ? "text-[#1A78F2]"
                                : "text-[#1A78F2] opacity-30"
                            }
                          />
                        ))}
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <div className="flex justify-center gap-10 h-[600px] pb-10 mx-auto">
                {reviews.slice(0, 3).map((review, index) => (
                  <div
                    key={index}
                    className={`border-4 mt-10 border-[#B47F3D] p-8 rounded-xl text-center bg-white mx-auto max-w-[300px] h-[400px] flex flex-col justify-between`}
                    style={{
                      boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)",
                      marginLeft: index === 1 ? "30px" : "0", // محاذاة الكرت الثاني
                      marginRight: index === 1 ? "30px" : "0", // محاذاة الكرت الثاني
                    }}
                  >
                    <h3 className="text-2xl font-semibold text-gray-900">
                      {review.name}
                    </h3>
                    <p className="text-gray-600 text-lg">{review.message}</p>
                    <div className="flex justify-center text-2xl space-x-5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <FaStar
                          key={i}
                          className={
                            i < review.rate
                              ? "text-[#F6973F]"
                              : "text-[#F6973F] opacity-30"
                          }
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* زر التقييم */}
          <button
            onClick={() => setShowPopup(true)}
            className="mt-4 px-6 py-3 w-[318px] border-4 border-[#1A78F2] text-[#1A78F2] text-lg font-medium rounded-3xl shadow-md bg-white hover:bg-[#1A78F2] hover:text-white transition-all"
          >
            Rate Us
          </button>

          {/* Popup التقييم */}
          {showPopup && (
            <div className="z-50 fixed top-0 left-0 w-full h-full  bg-black/50 flex items-center justify-center animate-fadeIn">
              <div className="bg-white p-8 rounded-3xl shadow-2xl lg:w-[400px] w-[350px] lg:h-[650px]  h-auto text-center animate-slideUp relative">
                {/* زر الإغلاق */}
                <button
                  onClick={() => setShowPopup(false)}
                  className="absolute top-4 left-4 text-gray-500 hover:text-red-500 transition-all"
                >
                  <FaTimes size={24} />
                </button>

                <h2 className="text-3xl font-bold text-[#1A78F2] mb-4">
                  Thank You
                </h2>
                <p className="text-gray-600 text-lg mb-6">
                  Please rate our service
                </p>

                {/* التقييم بالنجوم */}
                <div className="flex justify-center mb-6 text-2xl space-x-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <FaStar
                      key={i}
                      className={
                        i < (hoverRating || rating)
                          ? "text-[#1A78F2]"
                          : "text-gray-300"
                      }
                      onMouseEnter={() => setHoverRating(i + 1)}
                      onMouseLeave={() => setHoverRating(0)}
                      onClick={() => setRating(i + 1)}
                    />
                  ))}
                </div>

                {/* إدخال البريد والتعليق */}
                <div className="space-y-4">
                  <div className="relative">
                    <FaUserAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-10  py-2 border rounded-lg  focus:ring-[#1A78F2]  focus:border-[#1A78F2]"
                    />
                  </div>
                  <div className="relative">
                    <FaComment className="absolute left-3 top-6 transform -translate-y-1/2 text-gray-400" />
                    <textarea
                      maxLength={200}
                      placeholder="Leave feedback"
                      value={feedback}
                      onChange={(e) => setFeedback(e.target.value)}
                      className="w-full h-full lg:h-[250px] px-10 py-2 border rounded-lg  focus:ring-[#1A78F2] focus:border-[#1A78F2]"
                    />
                  </div>
                </div>

                {/* زر الإرسال */}
                <button
                  onClick={handleSubmit}
                  className="mt-6 px-6 py-3 w-full border-2 border-[#1A78F2] text-[#1A78F2] text-lg font-medium rounded-3xl shadow-md bg-white hover:bg-[#1A78F2] hover:text-white transition-all"
                >
                  {submitting ? "Submitting..." : "Submit"}
                </button>
                {error && <p className="text-[#1A78F2] mt-2">{error}</p>}
              </div>
            </div>
          )}
        </section>

    </div>
  );
};

export default ClientsReviews;