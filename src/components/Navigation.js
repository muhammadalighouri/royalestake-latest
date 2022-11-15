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
import { useNavigate } from "react-router-dom";
import "../scss/navSec.scss"
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
            <a href="#faq"></a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
