import { useState } from "react";
import Banner from "./components/Banner/Banner";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Banner/>
      </div>
    </>
  );
}

export default App;
