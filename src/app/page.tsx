
import Footer from "./Components/Footer";
import HeroSection from "./Components/HeroSection";
import Navbar from "./Components/Navbar";
import Suggest from "./Components/Suggest";

export default function Home() {
  return (
   <div>
    <div>
      <Navbar />
    </div>
    <div>
    < HeroSection />
    </div>
    <div>
    <Suggest/>
    </div>
    <div>
    {/* <Footer/> */}
    </div>
   </div>
  );
}
