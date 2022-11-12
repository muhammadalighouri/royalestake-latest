import React from "react";
import "../../scss/navSec.scss"
const NavSec = () => {
    return (
        <>
            <div className="second__nav">
                <div className="container">
                    <div className="start">
                        <div className="logo">
                            <img src="/images/logo.png" alt="" />
                        </div>
                    </div>
                    <div className="end">
                        <button>Connect Wallet!</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NavSec;
