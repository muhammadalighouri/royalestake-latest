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
              <h2> Royal Stake</h2>
              <p
                style={{
                  fontSize: "15px",
                  lineHeight: "1.5",
                  letterSpacing: ".5px",
                  width: "100%",
                  fontWeight: "100",
                  marginTop: "15px",
                }}
              >
                Join the most user oriented Staking platform and generate a
                predictable income on your crypto assets. Keep calm, no matter
                if crypto prices rise or fall.
              </p>
            </div>
            <div className="item">
              <h2
                style={{
                  fontSize: "18px",
                  fontWeight: "600",
                  marginBottom: "15px",
                }}
              >
                {" "}
                CONTACT US
              </h2>
              <p
                style={{
                  fontSize: "15px",
                  lineHeight: "1.5",
                  letterSpacing: "0.5px",
                  width: "100%",
                  opacity: "1",
                  fontWeight: "100",
                }}
              >
                15 Golden Square, London W1F 9JG, United Kingdom
                <b
                  style={{
                    display: "block",
                    fontWeight: "100",
                  }}
                >
                  {" "}
                  Email: Support@royalstake.app
                </b>
              </p>
            </div>
            <div className="item">
              <h2
                style={{
                  fontSize: "18px",
                  fontWeight: "600",
                  marginBottom: "15px",
                }}
              >
                SIGN UP FOR EMAIL UPDATES
              </h2>
              {/* <p>Sign up with your email address to receive news and updates</p> */}
              <div className="email">
                <input
                  type="email"
                  name=""
                  placeholder="Enter your email"
                  id=""
                />
                <button>Subscribe</button>
              </div>
              <p
                style={{
                  marginTop: "15px",
                  fontWeight: "100",
                  letterSpacing: ".5px",
                }}
              >
                Sign up with your email address to receive news and updates
              </p>
            </div>
          </div>
        </div>
        <div className="bottom__footer">
          <p>Copyright ©2022 Royal Stake. All rights reserved.</p>
          <ul>
            <li>
              <a href="">Contact Us </a>
            </li>
            <li>
              <a href="">FAQs</a>
            </li>
            <li>
              <a href="">Get Started</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
