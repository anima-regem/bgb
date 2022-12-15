import { useState } from "react";
import About from "./components/About/About";
import Agenda from "./components/Agenda/Agenda";
import Banner from "./components/Banner/Banner";
import BottomSection from "./components/BottomSection/BottomSection";
import FAQ from "./components/Faq/FAQ";
import Footer from "./components/Footer/Footer";
import FooterSection from "./components/FooterSection/FooterSection";
import Guest from "./components/Guest/Guest";
import HomeSection from "./components/HomeSection/HomeSection";
import PrevEditions from "./components/PrevEditions/PrevEditions";
import Speaker from "./components/Speaker/Speaker";
import Tickets from "./components/Tickets/Tickets";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Banner />
        <HomeSection />
        <About />
        <div id="speakers"></div>
        <Speaker />
        <Guest/>
        <div id="agenda"></div>
        <Agenda />
        <BottomSection />
        <PrevEditions />
        <div id="tickets"></div>
        <Tickets />
        <div id="faq"></div>
        <FAQ />
        <FooterSection />
        <Footer />
      </div>
    </>
  );
}

export default App;
