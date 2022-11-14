import React from "react";
import "../scss/start.scss"
const Start = () => {
    return (
        <section className="start__now">
            <div className="container">
                <div className="grid">
                    <div className="item">
                        <div className="start">
                            <h2>Let’s start your crypto staking now</h2>
                            <p>
                                {" "}
                                Try our auto staking tool for free.
                            </p>
                        </div>
                        <div className="end">
                            <button>Start Now!</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Start;
