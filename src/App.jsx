import { useState } from "react";
import Banner from "./components/Banner/Banner";
import HomeSection from "./components/HomeSection/HomeSection";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Banner/>
        <HomeSection/>
      </div>
    </>
  );
}

export default App;
