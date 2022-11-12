import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../scss/team.scss";
import { team } from "../assests/data";
import { AiOutlineTwitter, AiFillTwitterSquare } from "react-icons/ai";
import { FaLinkedinIn, FaTwitterSquare } from "react-icons/fa";
import { CgInstagram } from "react-icons/cg";
import { ImLinkedin } from "react-icons/im";
import { IoLogoLinkedin } from "react-icons/io";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const Teams = () => {
  const [item, setItem] = useState(1);
  const [padding, setPadding] = useState(40);
  const [offsetY, setOffsetY] = useState(0);
  const [presentTeam, setPresentTeam] = useState({});
  const [show, setshow] = useState(false);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    sliderResponsive();
  }, [item]);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  function sliderResponsive() {
    if (window.innerWidth > 1000) {
      setItem(4);
    }
    if (window.innerWidth < 1000) {
      setItem(3);
    }
    if (window.innerWidth < 780) {
      setItem(2);
    }
    if (window.innerWidth < 520) {
      setItem(1);
      setPadding(70);
    }
  }
  useEffect(() => {
    sliderResponsive();
  }, []);
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
    });
  }, []);
  window.addEventListener("resize", () => {
    // sliderResponsive();
  });
  const teamModal = (item) => {
    setPresentTeam(item);
    setshow(true);
  };
  return (
    <>
      <section id="team" className="team">
        <div
          className="present__team"
          style={{
            position: "fixed",
            top: "0px",
            left: "0px",
            width: "100%",
            height: "100%",
            background: "rgba(0, 0, 0, 0.83)",
            zIndex: "10000",
            display: show ? "grid" : "none",
            placeContent: "center",
            placeItems: "center",
          }}
          onClick={() => setshow(false)}
        >
          <div
            className="item"
            style={{
              maxWidth: "550px",
              background: "rgb(20, 27, 34)",
              padding: "50px 25px",
              textAlign: "center",
              margin: "0px 10px",
              boxShadow: "rgba(0, 0, 0, 0.19) 0px 0px 10px",
            }}
          >
            <div>
              {" "}
              <h3
                className="name"
                style={{
                  fontWeight: "500",
                  textTransform: "capitalize",
                  fontSize: "2.2rem",
                  textAlign: "start",
                  fontFamily: "'relative'",
                  marginBottom: "7px",
                  marginRight: "12px",
                }}
              >
                {presentTeam?.name}
              </h3>
              <h4
                style={{
                  textTransform: "capitalize",
                  marginTop: "5px",
                  textAlign: "start",
                  fontSize: "18px",
                  fontFamily: "'outfit-medium'",
                  fontWeight: "600",
                  opacity: ".5",
                }}
              >
                {presentTeam?.position}
              </h4>
              <p
                style={{
                  fontSize: "18px",
                  marginTop: "10px",
                  textAlign: "start",
                  lineHeight: "1.3",
                  fontFamily: "'outfit-medium'",
                  fontWeight: "100",
                }}
              >
                {presentTeam?.desc}
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div data-aos="fade" className="heading aos-init aos-animate">
            <h5>THE TEAM</h5>
            <h1 data-aos="fade" className="aos-init aos-animate">
              UI OPERATIVES
            </h1>
            <p data-aos="fade" className="aos-init aos-animate">
              Build & conquer. Destroy your opponents with force and unique
              abilities.
            </p>
          </div>
          <div className="team__grid">
            {team.map((ite, ind) => {
              return (
                <div className="outer">
                  <div
                    key={ind}
                    className="item"
                    data-aos="fade-up"
                    data-aos-delay={150 * ind}
                    data-aos-easing="ease-out"
                    onClick={() => teamModal(ite)}
                  >
                    <div className="inner">
                      <div className="img">
                        <img src={ite.path} alt="" />
                      </div>
                      <div className="detail">
                        <div>
                          {" "}
                          <h3 className="name">{ite.name}</h3>
                          <h4>{ite.position}</h4>
                        </div>
                        <div className="btns">
                          {ite.twitter && (
                            <a className="twitter" href={ite.twitter}>
                              <FaTwitterSquare />
                            </a>
                          )}
                          {ite.linkedin && (
                            <a className="linkedin" href={ite.linkedin}>
                              <IoLogoLinkedin />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {/* <div className="team__grid">
            <img src="/images/crownWBackground.png" alt="" />
            {team.map((ite, ind) => {
              return (
                <div
                  key={ind}
                  className={`item ${ind % 2 === 0 ? 'left' : 'right'}`}
                  data-aos="fade-up"
                  data-aos-delay={150 * ind}
                  data-aos-easing="ease-out"
                  onClick={() => teamModal(ite)}
                >
                  <div className="img">
                    <img src={`https://www.nyolings.io/images/Group-110458-p-500.png`} alt="" />
                  </div>
                  <div className="detail">
                    <div>
                      {" "}
                      <h3 className="name">{ite.name}</h3>
                      <h4>{ite.position}</h4>
                    </div>
                  </div>
                  <a>
                    <img
                      src="https://www.nyolings.io/images/Group-11052.svg"
                      alt=""
                    />
                  </a>
                </div>
              );
            })}
          </div> */}
        </div>
      </section>
    </>
  );
};

export default Teams;
