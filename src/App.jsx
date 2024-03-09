import React, { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./components/About";
import About2 from "./components/About2";
import Events from "./components/Events";
import Intro from "./components/Intro";
import Sponsor from "./components/sponsor"

function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []); 

  return (
    <>
      {showIntro ? (
        <Intro />
      ) : (
        <>
          <Navbar />
          <About />
          <About2 />
          <Events />
          <Sponsor/>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
