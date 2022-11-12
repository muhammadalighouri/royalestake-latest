import React from "react";
import { Partners_1, Partners_2 } from "../assests/data";
import "../scss/partners.scss";
import Marquee from "react-fast-marquee";
const Partners = () => {
    return (
        <>
            <section className="partners">
                <div className="heading">
                    <h1 data-aos="fade-down" className="aos-init aos-animate">
                        Partners
                    </h1>
                </div>
                <div className="container">
                    <div>
                        {" "}
                        <Marquee
                            speed={60}
                            height="250px"
                            gradient={false}
                            direction="right"
                        >
                            <div className="grid">
                                {Partners_1.map((item, index) => {
                                    return (
                                        <img
                                            key={index}
                                            data-aos-once="true"
                                            className="aos-init aos-animate"
                                            data-aos="zoom-in-up"
                                            data-aos-delay={100 * index}
                                            src={item}
                                            alt="collection"
                                        />
                                    );
                                })}
                            </div>
                        </Marquee>
                    </div>
                    <div>
                        {" "}
                        <Marquee speed={60} height="250px" gradient={false}>
                            <div className="grid">
                                {Partners_2.map((item, index) => {
                                    return (
                                        <img
                                            key={index}
                                            data-aos-once="true"
                                            className="aos-init aos-animate"
                                            data-aos="zoom-in-up"
                                            data-aos-delay={100 * index}
                                            src={item}
                                            alt="collection"
                                        />
                                    );
                                })}
                            </div>
                        </Marquee>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Partners;
