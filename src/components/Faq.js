import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "../scss/faq.scss";
import { FAQ, FAQ2 } from "../assests/data";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const Faq = () => {
  const classes = useStyles();
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
      <section id="faq" className="accordian">

        <div className="heading">
          <div className="heading">
            <h5>Still have questions?</h5>
            <h1 data-aos="fade" className="aos-init aos-animate">
              Frequently Asked Questions
            </h1>
            {/* <p data-aos="fade" className="aos-init aos-animate">
              Discover over 200+ magical artifacts, hunt deadly beasts with
              incredible strength and unique abilities.
            </p> */}
          </div>
        </div>
        <div className="container">
          <div className="accordian__grid">
            <div className="start">
              <div style={{ width: "100%" }} className={classes.root}>
                {FAQ.map((item, i) => {
                  return (
                    <Accordion key={i}>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography className={classes.heading}>
                          {item.q}
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>{item.ans.map((ite, ind) => {
                          return (
                            <li> {ite}</li>
                          )
                        })}</Typography>
                      </AccordionDetails>
                    </Accordion>
                  );
                })}
              </div>
            </div>
            <div className="end">
              <div style={{ width: "100%" }} className={classes.root}>
                {FAQ2.map((item, i) => {
                  return (
                    <Accordion key={i}>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography className={classes.heading}>
                          {item.q}
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>{item.ans}</Typography>
                      </AccordionDetails>
                    </Accordion>
                  );
                })}
              </div>

            </div>
            {/* <div className="start">
              <div className="img">
                <img src="/images/nft/4.jpeg" width="100%" alt="" />
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
