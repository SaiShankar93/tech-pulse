import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./components/About";
import About2 from "./components/About2";
import Events from "./components/Events";
import Intro from "./components/Intro";
import Sponsor from "./components/Sponsor";
import Register from "./components/register"; // Make sure you have this component created

function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []); 

  return (
    <Router>
      {showIntro ? (
        <Intro />
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={
              <>
                <About />
                <About2 />
                <Events />
                <Sponsor />
                <Footer />
              </>
            }/>
            <Route path="/register" element={<Register />} />
          </Routes>
        </>
      )}
    </Router>
  );
}

export default App;
