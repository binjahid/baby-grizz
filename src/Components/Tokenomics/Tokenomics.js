import { Container, Grid, Paper } from "@mui/material";
import React from "react";
import "./Tokenomics.css";
import cardImg1 from "../../Images/cardImg1.png";
import cardImg2 from "../../Images/cardImg2.png";
import cardImg3 from "../../Images/cardImg3.png";
const Tokenomics = () => {
  return (
    <div style={{ paddingBottom: "18rem", overflow: "hidden" }}>
      <div className="TokonomicTitleContainer">
        <h2 className="TokonomicTitle">Tokenomics</h2>
        <p className="TokonomicDescription">
          Tokenomics designed with the investors in mind.
        </p>
        <div className="tokenCercle1"></div>
        <div className="tokenCercle2"></div>
        <div className="tokenCercle3"></div>
        <div className="tokenCercle4"></div>
        <div className="tokenCercle5"></div>
        <div className="tokenCercle6"></div>
        <div className="tokenCercle7"></div>
        <div className="tokenCercle8"></div>
      </div>
      <Container fixed>
        <Grid container spacing={4}>
          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            lg={4}
            xl={4}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <div className="tokenomicsCard">
              <Paper elevation={1} sx={{ backgroundColor: "#FFF9F1" }}>
                <div className="cardItemContainer">
                  <div>
                    <img className="cardImg" src={cardImg1} alt="card" />
                  </div>
                  <h2 className="cardTitle">Redistribution</h2>
                  <p className="cardDescription">
                    Holding doesn’t have to be it’s own reward, 6% will be
                    redistributed back as USDT
                  </p>
                </div>
              </Paper>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <div className="tokenomicsCard">
              <Paper elevation={1} sx={{ backgroundColor: "#FFF9F1" }}>
                <div className="cardItemContainer">
                  <div>
                    <img className="cardImg2" src={cardImg2} alt="card" />
                  </div>
                  <h2 className="cardTitle">Liquidity</h2>
                  <p className="cardDescription">
                    2% goes into the pool to help our token grow and stay
                    healthy
                  </p>
                </div>
              </Paper>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <div className="tokenomicsCard">
              <Paper elevation={1} sx={{ backgroundColor: "#FFF9F1" }}>
                <div className="cardItemContainer">
                  <div>
                    <img className="cardImg3" src={cardImg3} alt="card" />
                  </div>
                  <h2 className="cardTitle">Marketing</h2>
                  <p className="cardDescription">
                    4% goes to help get the word out about the greatest project
                    in DeFi
                  </p>
                </div>
              </Paper>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Tokenomics;
