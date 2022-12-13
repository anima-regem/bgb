import { useState } from "react";
import About from "./components/About/About";
import Banner from "./components/Banner/Banner";
import BottomSection from "./components/BottomSection/BottomSection";
import FAQ from "./components/Faq/FAQ";
import Footer from "./components/Footer/Footer";
import FooterSection from "./components/FooterSection/FooterSection";
import HomeSection from "./components/HomeSection/HomeSection";
import PrevEditions from "./components/PrevEditions/PrevEditions";
import Speaker from "./components/Speaker/Speaker";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Banner/>
        <HomeSection/>
        <About/>
        <Speaker/>
        <BottomSection/>
        <PrevEditions/>
        <FAQ/>
        <FooterSection/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
