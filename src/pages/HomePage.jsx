import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import HeroSection1 from "../sections/HeroSection1";
import AboutUs from "../sections/AboutUs";
import ContactUs from "../sections/ContactUs";
import HeroSection2 from "../sections/HeroSection2";
import OurServices from "../sections/OurServices";

function HomePage() {
  return (
    <>
      <div>
        <Navbar />
        <HeroSection1 />
        <HeroSection2 />
        <OurServices />
        <AboutUs />

        <ContactUs />

        <Footer />
      </div>
    </>
  );
}

export default HomePage;
