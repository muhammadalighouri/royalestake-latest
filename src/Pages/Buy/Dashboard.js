import React from "react";
import "../../scss/dashboard.scss"
const Dashboard = () => {
    return (
        <>
            <section className="dashboard">
                <div className="heading">

                    <h5>ABOUT TECHNOLOGY</h5>
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
