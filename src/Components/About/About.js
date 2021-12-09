import { Container, Grid } from "@mui/material";
import React from "react";
import "./About.css";
import aboutImage from "../../Images/aboutImage.png";
import samllImage from "../../Images/aboutSamllImage.png";
const About = () => {
  const [first, setFirst] = React.useState(false);
  const [second, setSecond] = React.useState(false);
  const [third, setThird] = React.useState(false);
  const switchSelected = (e) => {
    if (e === "first") {
      setFirst(!first);
    }
    if (e === "second") {
      setSecond(!second);
    }
    if (e === "third") {
      setThird(!third);
    }
  };
  return (
    <div className="AboutContainer" id="about">
      <Container>
        <Grid container spacing={1}>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            xl={6}
            sx={{ position: "relative" }}
          >
            <div className="aboutImageContainer">
              <img className="aboutImage" src={aboutImage} alt="aboutImage" />
            </div>
            <div className="aboutCercle1"></div>
            <div className="aboutCercle2"></div>
            <img className="aboutSmallImg" src={samllImage} alt="Taddy" />
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            xl={6}
            sx={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              top: "50px",
              height: "100%",
            }}
          >
            <div className="aboutContainer">
              <div>
                <div className="aboutTitleContainer">
                  <h2 className="aboutTitle">About Baby Grizz Crypto Token</h2>
                </div>
                <div className="aboutDescriptionContainer">
                  <p className="aboutDescription">
                    Baby Grizz aims to take our favorite parts of crypto and put
                    them together. We are here to make money, and get some sweet
                    NFT’s. That’s why BabyGrizz rewards its holders in USDT and
                    also why we have some of the best NFTs on BSC.
                  </p>
                </div>
                <div className="aboutSelectContainer">
                  <div className="select">
                    <input
                      className={
                        first ? "selectRedio selected " : "selectRedio"
                      }
                      type="radio"
                      name=""
                      id="first"
                      onClick={() => switchSelected("first")}
                    />
                    <label htmlFor="first" className="labelTxt">
                      Audited contract and dedicated dev team
                    </label>
                  </div>
                  <div className="select">
                    <input
                      className={
                        second ? "selectRedio selected " : "selectRedio"
                      }
                      type="radio"
                      name=""
                      id="second"
                      onClick={() => switchSelected("second")}
                    />
                    <label htmlFor="second" className="labelTxt">
                      Unique tokenomics built to keep a chart healthy
                    </label>
                  </div>
                  <div className="select">
                    <input
                      className={
                        third ? "selectRedio selected " : "selectRedio"
                      }
                      type="radio"
                      name=""
                      id="third"
                      onClick={() => switchSelected("third")}
                    />
                    <label htmlFor="third" className="labelTxt">
                      1000 cute grizzly NFT’s
                    </label>
                  </div>
                </div>
                <div className="aboutButtonContainer">
                  <button className="aboutBtn">Buy Now</button>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default About;
