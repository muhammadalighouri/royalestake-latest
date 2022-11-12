import React from "react";
import "../../scss/calculator.scss"
const Calculator = () => {
    const amount = [
        {
            value: "1K",
        },
        {
            value: "5K",
        },
        {
            value: "10K",
        },
        {
            value: "100K",
        },
        {
            value: "250K",
        },
    ];
    const time = [
        {
            value: "3M",
        },
        {
            value: "6M",
        },
        {
            value: "9M",
        },
        {
            value: "1Y",
        },
        {
            value: "2Y",
        },
    ];

    const spaninsh = (e, value) => {
        if (e.target.value == value) {
            console.log('yes');
        }
    }
    return (
        <section className="calculator">
            <div className="heading">
                <h1>Calculator</h1>
            </div>
            <div className="container">
                <div className="item">
                    <div className="flex">
                        <div className="img">
                            <img src="/images/logo.png" alt="" />
                            <span>Staking BNB</span>
                        </div>
                        <span>547.5% APY</span>
                    </div>
                    <p>Stake BNB tokens and earn stable APY</p>
                    <div className="btn__grid">
                        <div className="start">
                            <h3>Amount</h3>
                            <ul>
                                {amount.map((item, index) => {
                                    return <li onClick={(e) => spaninsh(e, item.value)}>{item.value}</li>;
                                })}
                            </ul>
                        </div>
                        <div className="end">
                            <h3>Time for</h3>
                            <ul>
                                {time.map((item, index) => {
                                    return <li>{item.value}</li>;
                                })}
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className="input">
                            <span>Monthly Income</span>
                            <span>3421875.000000 US</span>
                        </div>
                        <div className="input">
                            <span>Monthly Income</span>
                            <span>3421875.000000 US</span>
                        </div>
                        <div className="input">
                            <span>Monthly Income</span>
                            <span>3421875.000000 US</span>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Calculator;
