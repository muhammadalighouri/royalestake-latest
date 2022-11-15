import React, { useState } from "react";
import "../../scss/dashboard.scss";
const Dashboard = () => {
    const [handleAmount, setHandleAmount] = useState();
    const [handleTime, setHandleTime] = useState();
    const amount = [
        {
            value: "100",
        },
        {
            value: "1K",
        },
        {
            value: "5K",
        },
        {
            value: "10K",
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
            value: "12M",
        },


    ];
    return (
        <>
            <section className="dashboard">
                <div className="heading">
                    {/* <h5>ABOUT TECHNOLOGY</h5> */}
                    <h1>Dashboard</h1>
                </div>
                <div className="container">
                    <div className="item">
                        <div className="flex">
                            <span>Total Value Locked</span>
                            <span>333632.5238 BNB</span>
                        </div>
                        <div className="flex">
                            <span>Investment Balance</span>
                            <span>0 BNB</span>
                        </div>
                        <div className="stake">
                            <input type="text" placeholder="Enter BNB Amount" />
                            <button>Stake</button>
                        </div>
                        <div className="btn___grid">
                            <div className="start">
                                <h3>Amount</h3>
                                <ul>
                                    {amount.map((item, index) => {
                                        return (
                                            <li
                                                style={
                                                    handleAmount === item.value
                                                        ? {
                                                            background:
                                                                "linear-gradient(160deg, #017bfd 0%, #20bfe1 100%) ",
                                                        }
                                                        : {}
                                                }
                                                onClick={() => setHandleAmount(item.value)}
                                                key={index}
                                            >
                                                {item.value}
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                            <div className="end">
                                <h3>Time for</h3>
                                <ul>
                                    {time.map((item, index) => {
                                        return (
                                            <li
                                                style={
                                                    handleAmount === item.value
                                                        ? {
                                                            background:
                                                                "linear-gradient(160deg, #017bfd 0%, #20bfe1 100%) ",
                                                        }
                                                        : {}
                                                }
                                                onClick={() => setHandleAmount(item.value)}
                                                key={index}
                                            >
                                                {item.value}
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                        <div className="income">
                            <div className="input">
                                <span>Monthly Income</span>
                                <span>3421US</span>
                            </div>
                            <div className="input">
                                <span>Monthly Income</span>
                                <span>3421US</span>
                            </div>
                        </div>
                        <div className="flex">
                            <span>Total BNB Earned</span>
                            <span>0 BNB</span>
                        </div>
                        <div className="btn__grid">
                            <button>Re-stake</button>
                            <button>Withdraw</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Dashboard;
