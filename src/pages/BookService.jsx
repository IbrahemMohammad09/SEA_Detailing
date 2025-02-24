import Navbar from "../components/Navbar";
import HeroBookService from "../sections/HeroBookSection";
import BookNow from "../sections/BookNow";
import Footer from "../components/Footer";
import MainTitle from "../components/MainTitle";
import ScrollToTop from "../components/ScrollToTop";
import { useEffect,useState } from "react";
import GifLoader from "../components/GifLoader";

function BookService() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  return  isLoading ?
   (
    <GifLoader />
  ) : (
    <>
      <ScrollToTop />
      <MainTitle title={"Book Your Service"} />
      <Navbar />
      <HeroBookService />
      <BookNow />
      <Footer />
    </>
  );
}

export default BookService;
