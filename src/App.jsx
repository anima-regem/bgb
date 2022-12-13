import { useState } from "react";
import About from "./components/About/About";
import Banner from "./components/Banner/Banner";
import BottomSection from "./components/BottomSection/BottomSection";
import Footer from "./components/Footer/Footer";
import HomeSection from "./components/HomeSection/HomeSection";
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
        <Footer/>
      </div>
    </>
  );
}

export default App;
