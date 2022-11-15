import React, { useEffect, useRef } from "react";
import "../scss/banner.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import Marquee from "react-fast-marquee";
import "swiper/css";
import "swiper/css/pagination";
import Typewriter from "typewriter-effect";
// import required modules
import { Pagination } from "swiper";
import { Nfts } from "../assests/data";
import { useNavigate } from "react-router-dom";
import Hover from "react-3d-hover";
import Background from "./Background";
const Banner = () => {
  const navigate = useNavigate();
  const data = [
    {
      name: "ACTIVE USERS",
      value: "19K+",
    },
    {
      name: "ALREADY INVESTED ",
      value: "$115M",
    },
    {
      name: "RATING",
      value: "4.8",
    },
    {
      name: "TOTAL FEES EARNED",
      value: "70M+",
    },
  ];
  return (
    <>

      <section className="banner">
        {/* <div className="animation__wrap bounce">
          <img src="/images/hero-shape-4.png" className="moveVertical" alt="" />
          <img src="/images/hero-shape-6.png" className="moveVertical" alt="" />
          <img src="/images/hero-shape-8.png" className="moveVertical" alt="" />
        </div> */}
        <div className="container">
          <div className="grid">
            <div className="start">
              <h3>AI CRYPTO INVESTMENT APP</h3>
              <h1>Invest without any doubt with Royal Stake app
              </h1>
              {/* <p>
                Developing in the 4th SECTOR TO generate resources for social
              </p> */}
              <div className="btn__container">
                <button
                  className="first"
                  onClick={() => navigate('/buy')}
                >
                  Start Now
                </button>
                {/* <button
                  className="second"
                  onClick={() =>
                    window.open(
                      "https://docs.adoptablebabes.com/introduction/overview",
                      "_blank"
                    )
                  }
                >
                  Discord
                </button> */}
              </div>
            </div>
            <div className="end">
              <Hover>
                <div className="img">
                  <figure>
                    <img src="/images/bannerImg.png" alt="" />
                  </figure>
                </div>
              </Hover>
            </div>
          </div>
        </div>
      </section>
      <section className="bottom__banner">
        <div className="container">
          <div className="grid">
            {data.map((item, index) => {
              return (
                <div className="item">
                  <h3>{item.value}</h3>
                  <h6>{item.name}</h6>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
