import { Container, Grid } from "@mui/material";
import React from "react";
import journeyImg from "../../Images/journeyImg.png";
import journeyBackgroud from "../../Images/journeyBackground.png";
import journeyArrow from "../../Images/journeyArrow.png";
import "./OurJourney.css";
const OurJourney = () => {
  return (
    <div className="jounrneyContainer">
      <Container fixed>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
            <div className="journey-img-container">
              <img className="journeyImg" src={journeyImg} alt="journeyImg" />
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={9}
            lg={9}
            xl={9}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="journeyTimelineContainer">
              <div className="journeyArrow">
                <img
                  className="journeyArrowImg"
                  src={journeyArrow}
                  alt="journeyArrow"
                />
                <div className="journeyDot1">
                  <div className="journeySamllDot1"></div>
                </div>
                <div className="journeyDot2">
                  <div className="journeySamllDot2"></div>
                </div>
                <div className="journeyDot3">
                  <div className="journeySamllDot3"></div>
                </div>
                <div className="journeyDot4">
                  <div className="journeySamllDot4"></div>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default OurJourney;
