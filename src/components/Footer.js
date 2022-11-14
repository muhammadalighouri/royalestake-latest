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
                  fontSize: '15px',
                  lineHeight: '1.4',
                  letterSpacing: '-0.009em',
                  width: '100%',
                  fontWeight: '100',
                  opacity: '.8'
                }}
              >
                Join the most user oriented Staking platform and generate a
                predictable income on your crypto assets. Keep calm, no matter
                if crypto prices rise or fall.
              </p>
            </div>
            <div className="item">
              <h2 style={{
                fontSize: '18px',
                fontWeight: '600',
                marginBottom: '15px'
              }}> CONTACT US</h2>
              <p
                style={{
                  fontSize: '16px',
                  lineHeight: '1.4',
                  letterSpacing: '-0.009em',
                  width: '100%',
                  opacity: '.8'
                }}
              >
                Edelweiss Corporate Finance GmbH
                <b>Support@royalstake.app</b>
              </p>
            </div>
            <div className="item">
              <h2
                style={{
                  fontSize: '18px',
                  fontWeight: '600',
                  marginBottom: '15px'
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
              <p style={{ marginTop: '15px' }}>
                Sign up with your email address to receive news and updates</p>
            </div>
          </div>
        </div>
        <div className="bottom__footer">
          <p>Copyright ©2022 Royal Stake.All rights reserved.</p>
          <ul>
            <li>
              <a href="">Twitter</a>
            </li>
            <li>
              <a href="">Instagram</a>
            </li>
            <li>
              <a href="">Discord</a>
            </li>
            {nav.map((ite, ind) => {
              return (
                <li key={ind} className="list-item">
                  <a href={ite.path}>{ite.name}</a>
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
