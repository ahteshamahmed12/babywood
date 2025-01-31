
import Care from "./Components/Care";
import Footer from "./Components/Footer";
import HeroSection from "./Components/HeroSection";
import Navbar from "./Components/Navbar";
import Suggest from "./Components/Suggest";
import FeedBack from "./Components/FeedBack";
export default function Home() {
  return (
   <div>
    <div >
      <Navbar />
    </div>
    <div>
    < HeroSection  />
    </div>
    <div>
    <Suggest/>
    </div>
    <div>
      <Care />
    </div>
    <div>
      < FeedBack />
    </div>
    <div>
    <Footer/>
    </div>
   </div>
  );
}
