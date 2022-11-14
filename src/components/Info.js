import React from "react";
import "../scss/info.scss";

const Info = () => {
    const info = [
        {
            name: "Trial",
            desc: "Customize your uniquely owned Starships with PAINT, TRAIL, and OPTICS available in the market",
            price: "$100",
            img: "/images/icon/4.png",
            ul: [

                '1% Daily ROI',
                'Minimum deposit  ',
                'Currency BNB ',

            ]
        },
        {
            name: "Standard ",
            desc: "Take your finished mobile fighter jet to battle in different map & game modes. Conquer the galaxy.",
            price: "$1,000",
            img: "/images/icon/5.png",
            ul: [
                '1.2% Daily ROI',
                'Minimum deposit  ',
                'Currency BNB',

            ]
        },
        {
            name: "Medium",
            desc: "Destroy and take your side to victory.",
            price: "$100",
            img: "/images/icon/6.png",
            ul: [
                '1.4% Daily ROI',
                'Minimum deposit  ',
                'Currency BNB',
            ]
        },
        {
            name: "Premium ",
            desc: "Destroy and take your side to victory.",
            price: "$1000",
            img: "/images/icon/6.png",
            ul: [
                '1.5% Daily ROI',
                'Minimum deposit  ',
                'Currency BNB',
            ]
        },

    ];
    return (
        <section className="info" id="info">
            <div data-aos="fade" className="heading aos-init aos-animate">
                {/* <h5>Lorem ipsum dolor sit amet.</h5> */}
                <h1 data-aos="fade" className="aos-init aos-animate">
                    Pricing
                </h1>
                <p data-aos="fade" className="aos-init aos-animate">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, deleniti?
                </p>
            </div>
            <div className="container">
                <div className="grid">
                    {info.map((item, ind) => {
                        return (
                            <div
                                className="item aos-init aos-animate"
                                data-aos="fade"
                                data-aos-delay={ind * 100}
                            >
                                <div className="top">
                                    <img src={item.img} alt="" />
                                    <span>{item.name}</span>
                                    <h3 className="price">
                                        {item.price}
                                    </h3>
                                </div>
                                <ul>
                                    {
                                        item.ul.map((ite, i) => {
                                            return (
                                                <li>
                                                    <img src="/images/icon/check.png" alt="" />
                                                    {ite}
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                                <button>Subscribe</button>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Info;
