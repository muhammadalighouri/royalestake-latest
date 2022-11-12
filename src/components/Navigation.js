import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { nav } from "../assests/data";
import "../scss/navigation.scss";
import { FaDiscord } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaRedditAlien } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { BsChevronUp } from "react-icons/bs";
import gsap from "gsap";
import { Power4, Back, Expo } from "gsap";
import { Timeline } from "gsap/gsap-core";
const Navigation = () => {
  const [navToggler, setNavToggler] = useState(false);
  const [navColor, setNavColor] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [target, setTarget] = useState(false);
  const [length, setLength] = useState(null);
  const [modal, setmodal] = useState(false);
  const [lio, setlio] = useState(null);
  function mobilenav() {
    if (window.innerWidth > 991) {
      return "greater";
    }
  }
  mobilenav();

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
      setScroll(true);
    } else {
      setScroll(false);
    }
    if (window.scrollY >= 70) {
      setNavColor(true);
    } else {
      setNavColor(false);
      setNavToggler(false);
    }

  });

  function barBtn() {
    setNavToggler(!navToggler);
    setNavColor(!navColor);
  }

  // how to return true when page is scrolled up and false when page is scrolled down
  var doc = document.documentElement;
  var w = window;

  /*
  define four variables: curScroll, prevScroll, curDirection, prevDirection
  */

  var curScroll;
  var prevScroll = w.scrollY || doc.scrollTop;
  var curDirection = 0;
  var prevDirection = 0;

  var toggled;
  var threshold = 200;

  var checkScroll = function () {
    curScroll = w.scrollY || doc.scrollTop;
    if (curScroll > prevScroll) {
      // scrolled down
      curDirection = 2;
    } else {
      //scrolled up
      curDirection = 1;
    }

    if (curDirection !== prevDirection) {
      toggled = toggleHeader();
    }

    prevScroll = curScroll;
    if (toggled) {
      prevDirection = curDirection;
    }
  };

  const toggleHeader = () => {
    if (curDirection === 2 && curScroll > threshold) {
      setTarget(true);
    } else if (curDirection === 1) {
      setTarget(false);
    }
  };

  window.addEventListener("scroll", checkScroll);

  return (
    <>
      <header
        style={{
          top: !target ? "0" : "-100px",
          background: navColor ? '' : ''
        }}
        className={navColor ? "nav__active" : ""}
      >
        <div className="outer">
          <div className="container">
            <div className="nav__grid">
              <div className="logo">
                <a href="https://twitter.com/Caish3n" target={"_blank"}>
                  <img src="/images/nft/ui LOGO.webp" alt="" />
                </a>
              </div>
              <nav style={{ right: navToggler ? 0 : "-100%" }}>
                <ul>
                  {nav.map((ite, ind) => {
                    return (
                      <li key={ind} className="list-item">
                        <a href={ite.path} >{ite.name}</a>
                      </li>
                    );
                  })}

                  <li className="nav__links">
                    <a
                      href="https://discord.gg/3DUsna54
"
                      target="_blank"
                    >
                      <FaDiscord />
                    </a>
                    <a href="https://twitter.com/blkstarlabz " target="_blank">
                      <AiOutlineTwitter />
                    </a>
                    <a
                      href="https://www.instagram.com/blkstarlabz/"
                      target="_blank"
                    >
                      <FaInstagram />
                    </a>
                  </li>
                </ul>
              </nav>
              <div className="nav__btns">
                <a
                  href="https://discord.gg/3DUsna54
"
                  target="_blank"
                >
                  <FaDiscord />
                </a>
                <a href="https://twitter.com/blkstarlabz" target="_blank">
                  <AiOutlineTwitter />
                </a>
                <a
                  href="https://www.instagram.com/blkstarlabz/"
                  target="_blank"
                >
                  <FaInstagram />
                </a>
                <a href="https://twitter.com/adoptablebabes" target={"_blank"}>
                  <div className="btn">
                    <AiOutlineTwitter />
                    TWITTER
                  </div>
                </a>
                <a
                  href={"https://discord.com/invite/DcrwzT9WnD"}
                  target={"_blank"}
                >
                  <div className="btn">
                    {/* <FaDiscord /> */}
                    Opensea!
                  </div>
                </a>
                <div onClick={() => barBtn()}>
                  <span
                    style={{
                      transform: navToggler
                        ? "translateY(15px) rotate(45deg)"
                        : "unset",
                    }}
                  ></span>
                  <span
                    style={{
                      display: navToggler ? "none " : "unset",
                    }}
                  ></span>
                  <span
                    style={{
                      transform: navToggler
                        ? "translateY(-6px) rotate(-45deg) "
                        : "unset",
                    }}
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div
        onClick={() => window.scroll(0, 0)}
        className="auto_scroll"
        style={scroll ? { transform: "scale(1)" } : {}}
      >
        <BsChevronUp />
      </div>
      <section
        className={"modal-"}
        style={
          modal
            ? {
              transform: "  translate(-50%, -50%)  scale(1)",
              opacity: "1",
            }
            : {}
        }
      >
        {modal ? <ImCross onClick={() => setmodal(false)} /> : null}

        <p>MINT DATE TBA!</p>
      </section>
      <div
        className="shadow-"
        style={modal ? { display: "block" } : { display: "none" }}
        onClick={() => setmodal(false)}
      ></div>
    </>
  );
};

export default Navigation;
