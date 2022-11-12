import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../scss/aboutnft.scss";
import { BsArrowRight } from "react-icons/bs";
import Marquee from "react-fast-marquee";
const AboutNft = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      offset: 100,
    });
  }, []);

  const steps = [
    {
      name: "AI technology",
      details: "",
      img: "https://toka.b-cdn.net/wp-content/uploads/2022/04/artificial-intelligence.png",
    },
    {
      name: "Trusted And Secure",
      details: "",
      img: "https://toka.b-cdn.net/wp-content/uploads/2022/04/grvg.png",
    },
    {
      name: "Works Automatically",
      details: "",
      img: "https://toka.b-cdn.net/wp-content/uploads/2022/04/gvgr.png",
    },
  ];
  return (
    <>
      <section id="about" className="about">
        <div data-aos="fade" className="heading aos-init aos-animate">
          <h5>WHY ROYAL STAKE </h5>
          <h1 data-aos="fade" className="aos-init aos-animate">
            Automatic AI-Based Crypto Investing App
          </h1>
          <p data-aos="fade" className="aos-init aos-animate">
            Save Time and Diversify Your Portfolio, Royal Stake App Work While
            You Just Live.
          </p>
        </div>
        <div className="container">
          <div className="about__grid">
            <div className="img">
              <img src="/images/aboutImg.png" alt="" />
            </div>
            <div className="details">
              <ul>
                {steps.map((item, index) => {
                  return (
                    <li>
                      <div className="img">
                        <img src={item.img} alt="" />
                      </div>
                      <div className="details">
                        <h3>{item.name}</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Ut elit tellus, luctus nec ullamcorper mattis,
                          pulvinar dapibus leo.
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
              <a
                style={{ display: "inline-block" }}
                href="https://twitter.com/Caish3n"
                target={"_blank"}
                class="item-desc aos-init aos-animate"
                data-aos="notific-right"
              >
                <button>
                  Read Whitepaper <BsArrowRight />
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutNft;
