import React from "react";
import Cards from "../../components/Cards";
import Info from "../../components/Info";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import Calculator from "./Calculator";
import Dashboard from "./Dashboard";
import Invite from "./Invite";
import NavSec from "./NavSec";
import Statistics from "./Statistics";

const BuyPage = () => {
    return (
        <>
            <NavSec />
            <Dashboard />

            <Info />
            <div className="back">
                <Statistics />
                <Invite />

            </div>
            <Calculator />
            <Footer />
        </>
    );
};

export default BuyPage;
