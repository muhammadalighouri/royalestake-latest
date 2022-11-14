import React from "react";
import { useNavigate } from "react-router-dom";
import "../../scss/navSec.scss"
const NavSec = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className="second__nav">
                <div className="container">
                    <div className="start">
                        <div className="logo" onClick={() => navigate('/')}>
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
