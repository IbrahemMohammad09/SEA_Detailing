import Navbar from "../components/Navbar";
import HeroBookService from "../sections/HeroBookSection";
import BookNow from "../sections/BookNow";
import Footer from "../components/Footer";
import MainTitle from "../components/MainTitle";
import ScrollToTop from "../components/ScrollToTop";
function BookService() {
  return (
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
