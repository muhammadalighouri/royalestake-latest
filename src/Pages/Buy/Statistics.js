import React from "react";
import "../../scss/statstics.scss";
const Statistics = () => {
    return (
        <>
            <section className="statistics">
                <div className="heading">
                    <h1>Statistics</h1>
                </div>
                <div className="container">
                    <div className="item">
                        <h2>Statistics</h2>
                        <div className="flex">
                            <span>Daily ROI</span>
                            <span>1.50%</span>
                        </div>
                        <div className="flex">
                            <span>APY</span>
                            <span>547.50%</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Statistics;
