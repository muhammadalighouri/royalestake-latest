import React from "react";
import Banner from "../components/Banner";
// import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Roadmap from "../components/Roadmap";
import Teams from "../components/Teams";
import Faq from "../components/Faq";
import Collection from "../components/Collection";
import "../scss/reset.css";
import AboutNft from "../components/AboutNft";
import Info from "../components/Info";
import Cards from "../components/Cards";
import Navigation from "../components/Navigation";
import Vision from "../components/Vision";
import Holder from "../components/Holder";
import Partners from "../components/Partners";
import Start from "./Start";
import Rating from "../components/Rating";
const Home = () => {
    return (
        <>
            <div className="top__banner">
                <Navigation />
                <Banner />
                <AboutNft />
            </div>
            <Holder />
            {/* <Teams /> */}
            <Rating />
            <Start />
            <Partners />
            <Faq />
            <Footer />
            {/* </div> */}
        </>
    );
};

export default Home;
