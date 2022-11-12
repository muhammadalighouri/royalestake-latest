import React from "react";
import "../scss/start.scss"
const Start = () => {
    return (
        <section className="start__now">
            <div className="container">
                <div className="grid">
                    <div className="item">
                        <div className="start">
                            <h2> Want to start investing in crypto now?</h2>
                            <p>
                                {" "}
                                Connect our AI to your exchange account and invest crypto
                                automatically.
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
