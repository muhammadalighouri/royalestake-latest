import React from "react";
import "../scss/holder.scss";
const Holder = () => {
    const holder = [
        {
            head: "",
            desc: "Download MetaMask App",
            icon: "/images/icon/affiliate-marketing.png",
        },
        {
            head: "",
            desc: "Buy BNB ",
            icon: "/images/icon/content-management.png",
        },
        {
            head: "",
            desc: "Connect Wallet",
            icon: "/images/icon/copy-writing.png",
        },
        {
            head: "",
            desc: "Stake Your BNB",
            icon: "/images/icon/growth.png",
        },
        {
            head: "",
            desc: "Get Profits ",
            icon: "/images/icon/online-marketing.png",
        },
    ];

    return (
        <>
            <section className="holder">
                <div data-aos="fade" className="heading aos-init aos-animate">
                    <h5>HOW IT WORKS </h5>
                    <h1 data-aos="fade" className="aos-init aos-animate">
                        How Our AI’s Staking Strategy Works
                    </h1>
                    <p data-aos="fade" className="aos-init aos-animate">
                        Fully Automated Crypto Staking
                    </p>
                </div>

                <div className="container">
                    <div className="grid">
                        {holder.map((item, i) => {
                            return (
                                <div className="item">
                                    <img width={"60px"} src={item.icon} alt="" />
                                    {/* <span>0{i + 1}</span> */}
                                    <h3>{item.desc}</h3>
                                    <p>{item.head}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Holder;
