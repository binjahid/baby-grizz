import { Container, Grid, Paper } from "@mui/material";
import React from "react";
import journeyImg from "../../Images/journeyImg.png";
import journeyArrow from "../../Images/journeyArrow.png";
import "./OurJourney.css";
import journeySmallImg from "../../Images/journeySmallImg.png";
const OurJourney = () => {
  const paperStyle = {
    width: {
      lg: "350px",
      xl: "350px",
      md: "250px",
      sm: "300px",
      xs: "340px",
    },
    p: "5px 20px",
    borderRadius: "10px",
    backgroundColor: "#FFFEF9",
    margin: "0px",
  };
  // Edit Data here to update Jounrney timeline
  const jourNeyData = {
    questionOne: {
      name: "December 2021",
      description:
        "Presale - Marketing - Launch We will build the strongest foundation for this token so it can withstand the test of time.",
    },
    questionTwo: {
      name: "Q1 2022",
      description:
        "NFT Marketplace and NFT Partnerships Because NFT’s are awesome!",
    },
    questionThree: {
      name: "Q2 2022",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae adipiscing.",
    },
    questionFour: {
      name: "Q3 2022",
      description:
        "Purchase Tesla Company from Elon Musk for $1,000,000,000,000",
    },
  };
  return (
    <div className="jounrneyContainer">
      <div className="ourJourneyTitleContainer">
        <h2 className="ourJourneyTitle">Our Journey</h2>
        <p className="ourJourneyDescription">
          Having been investors in this space for a while, we wanted to take all
          of our favorite pieces of crypto and put them together in one safe
          project. Building something that is fun while also being financially
          impactful. We want to set an example for others to follow, so we have.
          Welcome to Baby Grizz.
        </p>
        <div className="journeyCercle2"></div>
        <div>
          <img
            className="journeySmallImg"
            src={journeySmallImg}
            alt="journeySmallImg"
            style={{ display: "none" }}
          />
        </div>
        <div className="jouneyCercle3"></div>
        <div className="jouneyCercle4"></div>
        <div className="jouneyCercle5"></div>
      </div>
      <Container fixed>
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            sm={12}
            md={3}
            lg={3}
            xl={3}
            sx={{ position: "relative" }}
          >
            <div className="journey-img-container">
              <img className="journeyImg" src={journeyImg} alt="journeyImg" />
              <div className="journeyCercle"></div>
            </div>
          </Grid>
          {/* Time line Container */}
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
              <div className="journeyTimelineLeft">
                <div className="journeyTimeline1">
                  <Paper elevation={1} sx={paperStyle}>
                    <h2 className="timeLineHeader">
                      {jourNeyData.questionTwo.name}
                    </h2>
                    <p className="timeLineDes">
                      {jourNeyData.questionTwo.description}
                    </p>
                  </Paper>
                </div>
                <div className="journeyTimeline2">
                  <Paper elevation={1} sx={paperStyle}>
                    <h2 className="timeLineHeader">
                      {jourNeyData.questionFour.name}
                    </h2>
                    <p className="timeLineDes">
                      {jourNeyData.questionFour.description}
                    </p>
                  </Paper>
                </div>
              </div>
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
              <div className="journeyTimelineRight">
                <div className="journeyTimeline3">
                  <Paper elevation={1} sx={paperStyle}>
                    <h2 className="timeLineHeader">
                      {jourNeyData.questionOne.name}
                    </h2>
                    <p className="timeLineDes">
                      {jourNeyData.questionOne.description}
                    </p>
                  </Paper>
                </div>
                <div className="journeyTimeline4">
                  <Paper elevation={1} sx={paperStyle}>
                    <h2 className="timeLineHeader">
                      {jourNeyData.questionThree.name}
                    </h2>
                    <p className="timeLineDes">
                      {jourNeyData.questionThree.description}
                    </p>
                  </Paper>
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
