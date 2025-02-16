import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import HeroSection1 from "../sections/HeroSection1";

import ContactUs from "../sections/ContactUs";
import HeroSection2 from "../sections/HeroSection2";

function HomePage() {
  return (
    <>
      <div>
        <Navbar />
        <HeroSection1 />
        <HeroSection2 />
        <ContactUs />

        <Footer />
      </div>
    </>
  );
}

export default HomePage;
