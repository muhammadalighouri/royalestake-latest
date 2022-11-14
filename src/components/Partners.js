import React from "react";
import { Partners_1, Partners_2 } from "../assests/data";
import "../scss/partners.scss";
import Marquee from "react-fast-marquee";
const Partners = () => {
    return (
        <>
            <section className="partners">

                <div data-aos="fade" className="heading aos-init aos-animate">
                    {/* <h5>HOW IT WORKS </h5> */}
                    <h1 data-aos="fade" className="aos-init aos-animate">
                        Our Partners
                    </h1>
                    {/* <p data-aos="fade" className="aos-init aos-animate">
                        Fully Automated Crypto Staking
                    </p> */}
                </div>
                <div className="container">
                    <div className="grid__second">
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
                        <img src="/images/partners/partner-14.webp" style={{ filter: 'invert(1)' }} alt="" />
                    </div>
                    {/* <div>
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
                    </div> */}

                </div>
            </section>
        </>
    );
};

export default Partners;
