import React, { useState, useEffect, useRef, useCallback } from "react";
import "./scss/normalize.css";
import Banner from "./components/Banner";
// import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Roadmap from "./components/Roadmap";
import Teams from "./components/Teams";
import Faq from "./components/Faq";
import Collection from "./components/Collection";
import "./scss/reset.css";
import AboutNft from "./components/AboutNft";
import Info from "./components/Info";
import Loader from "./components/Loader";
import { gsap } from "gsap";
import { TimelineLite, Power4 } from "gsap/gsap-core";
import { ParallaxProvider } from "react-scroll-parallax";
import Cards from "./components/Cards";
import Navigation from "./components/Navigation";
import Vision from "./components/Vision";
import Holder from "./components/Holder";
import Partners from "./components/Partners";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import BuyPage from "./Pages/Buy/BuyPage";
var Spinner = require("react-spinkit");
function App() {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#fff");
  const containerRef = useRef(null);
  const tl = new gsap.timeline();
  let ease = Power4.easeOut();
  useEffect(() => { }, []);
  const particlesInit = useCallback(async engine => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    await console.log(container);
  }, []);
  return (
    <ParallaxProvider>
      <div className="App">
        {loading ? (
          <Loader setLoading={setLoading} />
        ) : (
          <>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/buy" element={<BuyPage />} />
            </Routes>
          </>
        )}
      </div>
    </ParallaxProvider>
  );
}

export default App;
