import { Grid } from "@mui/material";
import React from "react";
import { MdOutlineGroups } from "react-icons/md";
import half1 from "../../Images/halfIcon1.png";
import half2 from "../../Images/halfIcon2.png";
const SecondHalf = () => {
  // Edit here to upadte the data
  const data = {
    BNB: 300,
    contriution: "0.1/2.5",
    liquidity: "70",
  };
  const GridFlexStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4} sx={GridFlexStyle}>
          <div className="secondHalfContainer">
            <div className="secondHalfContainer__icon">
              <MdOutlineGroups />
            </div>
            <h2 className="secondHalfTitle">{data.BNB} BNB</h2>
            <p>Hardcap</p>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4} sx={GridFlexStyle}>
          <div className="secondHalfContainer">
            <div className="secondHalfContainer__icon2">
              <img src={half1} alt="half1" />
            </div>
            <h2 className="secondHalfTitle">{data.contriution} BNB</h2>
            <p>Contribution</p>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4} sx={GridFlexStyle}>
          <div className="secondHalfContainer">
            <div className="secondHalfContainer__icon3">
              <img src={half2} alt="half2" />
            </div>
            <h2 className="secondHalfTitle"> {data.liquidity} % </h2>
            <p>Liquidity</p>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default SecondHalf;
