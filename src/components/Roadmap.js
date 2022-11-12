import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../scss/roadmap.scss";
import { useParallax } from "react-scroll-parallax";
import { Parallax } from "react-scroll-parallax";
import { roadmap } from "../assests/data";
const Roadmap = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
      <section id="roadmap" className="roadmap">
        <div className="container">
          <div className="heading">
            <h1 data-aos="fade-up">Our Roadmap</h1>
          </div>
          <div className="grid">
            {roadmap.map((item, i) => {
              return (
                <div key={i} className="disk" data-aos="fade-up">
                  <div className="item">
                    <div className="top">
                      <h3>{item.date}</h3>
                      <img src="/images/tick.svg" alt="" />
                    </div>
                    <ul>
                      {item.points.map((ite, ind) => {
                        return <li key={ind}>{ite}</li>;
                      })}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Roadmap;
