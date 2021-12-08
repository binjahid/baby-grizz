import { Container, Grid, Paper } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "./Features.css";
import featureIcon1 from "../../Images/fetureIcon1.png";
import featureIcon2 from "../../Images/featureIcon2.png";
import featureIcon3 from "../../Images/featureIcon3.png";
import featureImage from "../../Images/featureImage.png";
const Features = () => {
  return (
    <div>
      <Container>
        <Box sx={{ position: "relative" }}>
          <p className="features-title">Some of Our Features</p>
          {/* <div className="titleCercle"></div> */}
        </Box>
      </Container>
      <Grid container>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          xl={6}
          sx={{ position: "relative", padding: "0px 10px" }}
        >
          {/* Passive Income */}
          <Paper elevation={2} sx={{ p: 1, borderRadius: "10px", mb: 2.5 }}>
            <Box sx={{ display: "flex" }}>
              <div className="feature-icon-container">
                <img
                  className="feature-icon"
                  src={featureIcon1}
                  alt="featureIcon1"
                />
              </div>
              <div className="feature-description-container">
                <p className="featureTitle">Passive Income</p>
                <p className="featureDescription">
                  6% of every transaction goes directly from BNB to USDT and is
                  distributed to our holders. That way you don’t impact the
                  charts just by collecting your rewards.
                </p>
              </div>
            </Box>
          </Paper>
          {/* NFT */}
          <Paper
            elevation={2}
            sx={{
              position: "relative",
              p: 1,
              borderRadius: "10px",
              backgroundImage: "linear-gradient(to right, #fe6806, #ff9900)",
              mb: 2.5,
              left: {
                md: "65px",
                lg: "65px",
                xl: "65px",
                sm: "0px",
                xs: "0px",
              },
            }}
          >
            <Box sx={{ display: "flex" }}>
              <div className="feature-icon-container">
                <img
                  className="feature-icon-NFT"
                  src={featureIcon2}
                  alt="featureIcon1"
                />
              </div>
              <div className="feature-description-container-NFT">
                <p className="featureTitle">NFT</p>
                <p className="featureDescription">
                  Unique and lovable NFTs made for the BabyGrizz community.
                  Limited number with rare characteristics. These were built to
                  be featured and will brighten your day. Taking the ugly out of
                  crypto.
                </p>
              </div>
            </Box>
          </Paper>
          {/* Zero Risk Factors */}
          <Paper elevation={2} sx={{ p: 1, borderRadius: "10px" }}>
            <Box sx={{ display: "flex" }}>
              <div className="feature-icon-container">
                <img
                  className="feature-icon"
                  src={featureIcon3}
                  alt="featureIcon1"
                />
              </div>
              <div className="feature-description-container">
                <p className="featureTitle">Zero Risk Factors</p>
                <p className="featureDescription">
                  Audited by Tech Audit and KYC’D Dev Team here to push this
                  into a 1000x moonshot. Built for the community this is as safe
                  as it gets.
                </p>
              </div>
            </Box>
          </Paper>
          <div className="descriptionSmallCercle1"></div>
          <div className="descriptionSmallCercle2"></div>
        </Grid>
        {/* Feature Image Goes Here */}
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          xl={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
        >
          <div className="featureImageContianer">
            <img className="featureImage" src={featureImage} alt="feature" />
            <div className="featureCercle1"></div>
            <div className="featureCercle2"></div>
            <div className="miniCercle1"></div>
            <div className="miniCercle2"></div>
            <div className="miniCercle3"></div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Features;
