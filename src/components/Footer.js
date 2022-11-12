import React from "react";
import "../scss/footer.scss";
import { AiFillYoutube } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { nav } from "../assests/data";
const Footer = () => {
  return (
    <footer>
      <div className="container">

        <div className="top__footer">
          <div className="grid">
            <div className="item">
              <h2>
                {" "}

                LOGO
              </h2>
              <p
                style={{
                  fontSize: '16px',
                  lineHeight: '1.4',
                  letterSpacing: '-0.009em',
                  width: '90%',

                }}
              >
                Promoting African Art, culture and positive change through web3
              </p>
            </div>
            <div className="item">
              <div className="email">
                <input
                  type="email"
                  name=""
                  placeholder="Enter your email"
                  id=""
                />
                <button>Subscribe</button>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom__footer">
          <p>Copyright ©2022 Name. All rights reserved.</p>
          <ul>
            {nav.map((ite, ind) => {
              return (
                <li key={ind} className="list-item">
                  <a href={ite.path} >{ite.name}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
