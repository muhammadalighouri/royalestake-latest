import React from "react";
import "../../scss/invite.scss";
const Invite = () => {
    return (
        <>
            <section className="invite">
                <div className="heading">
                    <h1>Invite Your Friends and Earn Together</h1>
                    <p>Earn a 1% commission of the BNB Staked for your friends</p>
                </div>
                <div className="container">
                    <div className="item">
                        <h2>My Referral Link</h2>
                        <div className="input">
                            <input placeholder="Copy referel link" type="text" />
                            <button>Copy</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Invite;
