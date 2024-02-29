import React, { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./components/About";
import About2 from "./components/About2";
import Events from "./components/Events";
import Intro from "./components/Intro";
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
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
