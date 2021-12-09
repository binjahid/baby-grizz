import { Container } from "@mui/material";
import React from "react";
import ProgressChart from "./ProgressChart";
import SecondHalf from "./SecondHalf";
import "./TokenDristribution.css";
const TokenDistribution = () => {
  // edit here to update the token distribution
  const data = {
    token: 20,
    liquidity: 25,
    presale: 35,
    future: 20,
  };
  return (
    <div id="nft" style={{ marginBottom: "200px" }}>
      <Container fixed>
        <div className="tokenTitileContainer">
          <h2 className="tokenTitle">Token Distribution</h2>
        </div>
        {/* Progress bar Goes here */}
        <div className="progressBarContainer">
          <div className="progressBar">
            <ProgressChart data={data}></ProgressChart>
            <div className="green">
              <div className="greenDot dotStyle"></div>
              <div className="progressBarContentGreen">
                <p className="semiTitle">{data.token} %</p>
                <span className="semiDes">
                  Teanm Tokens <br /> LOCKED
                </span>
              </div>
            </div>
            <div className="pink">
              <div className="pinkDot dotStyle"></div>
              <div className="progressBarContentPink">
                <p className="semiTitle">{data.liquidity} %</p>
                <span className="semiDes">Lequidity</span>
              </div>
            </div>
            <div className="cream">
              <div className="creamDot dotStyle"></div>
              <div className="progressBarContentCream">
                <p className="semiTitle">{data.presale} %</p>
                <span className="semiDes">Presale</span>
              </div>
            </div>
            <div className="mud">
              <div className="mudDot dotStyle"></div>
              <div className="progressBarContentMud">
                <p className="semiTitleMud">{data.future} %</p>
                <span className="semiDesmud">
                  Future Exchange <br /> Liquidity <br /> Locked for 1 year
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="pregressBarSecondHalfContainer">
          <SecondHalf></SecondHalf>
        </div>
      </Container>
    </div>
  );
};

export default TokenDistribution;
