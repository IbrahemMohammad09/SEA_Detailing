import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import HeroSection1 from "../sections/HeroSection1";
import ContactUs from "../sections/ContactUs";

function HomePage() {

  return (
    <>
      <div>
        <Navbar />
        <HeroSection1 />
         <ContactUs/>
        <Footer />
      </div>
    </>
  );
}

export default HomePage;
