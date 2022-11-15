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
      name: "AI Trading Bot",
      span: "AI Technology",
      details: "Royal Stake is an AI trading bot that will generate revenue for BNB holders. Royal Stake earns about 1% - 1.5% per day, just by trading the BNB coin.",
      img: "https://toka.b-cdn.net/wp-content/uploads/2022/04/artificial-intelligence.png",
    },
    {
      name: "Zero Fees",
      span: "Secure And Zero Fees",
      details: "We believe that passive income is for everyone. You shouldn't have to pay crazy high fees. Royal Stake is 100% free to use. You're welcome!",
      img: "https://toka.b-cdn.net/wp-content/uploads/2022/04/grvg.png",
    },
    {
      name: "Daily Income",
      span: "Works Automatically",
      details: "Holding and staking BNB is the best way to earn passive income from AI bot trading.Earn daily compound interest simply by staking BNB in your wallet.",
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

                        <h3>{item.span}</h3>
                        <p>
                          {item.details}
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
