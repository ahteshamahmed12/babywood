
import Care from "./Components/Care";
import Footer from "./Components/Footer";
import HeroSection from "./Components/HeroSection";
import Navbar from "./Components/Navbar";
import Suggest from "./Components/Suggest";
import FeedBack from "./Components/FeedBack";
import Ourproduct from "./Components/Ourproduct";
export default function Home() {
  return (
   <div>
    
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
      <Ourproduct />
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
