import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { BsArrowRight } from 'react-icons/bs'
// import required modules
import { EffectCoverflow, Pagination, Navigation } from "swiper";

import AOS from "aos";
import "aos/dist/aos.css";
import "../scss/Collection.scss";
import Marquee from "react-easy-marquee";
import { Nfts, Nfts_2 } from "../assests/data";
const Collection = () => {
  const [height, setHeight] = useState();
  window.addEventListener("scroll", () => {
    setHeight((window.scrollY / 4918) * 100);
  });
  return (
    <>
      <section className="collection" id="collection">
        <div data-aos="fade" className="heading aos-init aos-animate">
          <h5>NFT Collection</h5>
          <h1 data-aos="fade" className="aos-init aos-animate">
            Theta Capsules
          </h1>
          <p data-aos="fade" className="aos-init aos-animate">
            Build & conquer. Destroy your opponents with force and unique
            abilities.
          </p>
        </div>
        <div className="container">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={2.260}
            spaceBetween={170}
            coverflowEffect={{
              rotate: 0,
              stretch: 50,
              depth: 200,
              modifier: 1,
              slideShadows: false,
            }}
            parallax={true}
            autoplay={{
              delay: 1,
              disableOnInteraction: true,
            }}
            loop={true}
            pagination={false}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            {[1, 2, 3].map((item, i) => {
              return (
                <SwiperSlide key={i}>
                  <div className="img">
                    <figure>
                      <img src={`/images/nft/${item}.webp`} alt="" />
                      <div className="btn">
                        <button>Buy Now!</button>
                      </div>
                    </figure>
                    <div className="bottom">
                      <h2>Silver Time Capsule</h2>
                      {/* <button>Buy On Opensea</button> */}
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div style={{ display: "flex", justifyContent: "center", paddingTop: "40px" }}>
          <a
            style={{ display: "inline-block" }}
            href="https://twitter.com/Caish3n"
            target={"_blank"}
            class="item-desc aos-init aos-animate"
            data-aos="notific-right"
          >
            <button>
              View on Opensea! <BsArrowRight />
            </button>
          </a>
        </div>
      </section>
    </>
  );
};

export default Collection;
