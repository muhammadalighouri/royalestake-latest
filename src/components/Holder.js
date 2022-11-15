import React, { useState } from "react";
import "../scss/holder.scss";
const Holder = () => {
    const [active, setActive] = useState({
        heading: "MetaMask Wallet ",
        description:
            "To begin, make sure you have a MetaMask wallet installed on your browser, or use one of the wallets supported by Wallet Connect (we recommend Trust Wallet).Purchasing on a desktop browser will give you a smoother purchasing experience. For this we recommend Metamask. If you are purchasing on mobile, we recommend using Trust Wallet and connecting through the in built browser.",
        img: "https://toka.b-cdn.net/wp-content/uploads/2022/04/rvgrv-768x669.png",
        link: "",
    });
    const [handleAmount, setHandleAmount] = useState();
    const [handleTime, setHandleTime] = useState();
    const holder = [
        {
            head: "",
            desc: "MetaMask Wallet ",
            icon: "/images/icon/affiliate-marketing.png",
            data: {
                heading: "MetaMask Wallet ",
                description:
                    "To begin, make sure you have a MetaMask wallet installed on your browser, or use one of the wallets supported by Wallet Connect (we recommend Trust Wallet).Purchasing on a desktop browser will give you a smoother purchasing experience. For this we recommend Metamask. If you are purchasing on mobile, we recommend using Trust Wallet and connecting through the in built browser.",
                img: "https://toka.b-cdn.net/wp-content/uploads/2022/04/rvgrv-768x669.png",
                link: "",
            },
        },
        {
            head: "",
            desc: "Buy BNB ",
            icon: "/images/icon/content-management.png",
            data: {
                heading: "Buy BNB",
                description:
                    "Visit https://www.moonpay.com/buy this will allow you to purchase BNB that will be sent to your wallet. You will then be able to use this BNB to stake. Visit https://www.moonpay.com/buy  to begin and follow the on screen steps. We recommend purchasing a minimum of $105 worth of BNB to cover the minimum investment.",
                img: "https://toka.b-cdn.net/wp-content/uploads/2022/04/4rfrf-768x1000.png",
                link: "",
            },
        },
        {
            head: "",
            desc: "Connect Wallet",
            icon: "/images/icon/copy-writing.png",
            data: {
                heading: "Connect Wallet",
                description:
                    "Once you have your preferred wallet provider ready, click “Connect Wallet” and select the appropriate option. For mobile wallet apps you will need to select “Wallet Connect”.",
                img: "https://toka.b-cdn.net/wp-content/uploads/2022/04/ctgtgct-768x595.png",
                link: "",
            },
        },
        {
            head: "",
            desc: "Stake BNB",
            icon: "/images/icon/growth.png",
            data: {
                heading: "Stake BNB",
                description:
                    "Stake BNB earn interest, Choose the right plan for your needs, minimum deposit is 100$. ",
                img: "https://toka.b-cdn.net/wp-content/uploads/2022/04/5tgt5-768x798.png",
                link: "",
            },
        },
        {
            head: "",
            desc: "Profits ",
            icon: "/images/icon/online-marketing.png",
            data: {
                heading: "Profits",
                description:
                    "Let your BNB work for you through Royal Stake offers a solid up to 1.5% daily returns on your BNB investment or continuous use of the re-stake effect, you save yourself time and gas while watching your profits grow exponentially.",
                img: "https://toka.b-cdn.net/wp-content/uploads/2022/04/5tgt5-768x798.png",
                link: "",
            },
        },
    ];
    console.log(active);
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
                    <div className="tabs">
                        {
                            <ul>
                                {holder.map((item, index) => {
                                    return (
                                        <li
                                            style={
                                                handleAmount === item.desc
                                                    ? {
                                                        background:
                                                            "linear-gradient(160deg, #017bfd 0%, #20bfe1 100%) ",
                                                    }
                                                    : {}
                                            }
                                            onClick={() => {
                                                setHandleAmount(item.desc);
                                                setActive(item.data);
                                            }}
                                            key={index}
                                        >
                                            {item.desc}
                                        </li>
                                    );
                                })}
                            </ul>
                        }
                    </div>
                    <div className="grid">
                        <div className="active__item">
                            <div className="start">
                                <img src={active.img} alt="" />
                            </div>
                            <div className="end">
                                <h2>{active.heading}</h2>
                                <p>{active.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Holder;
