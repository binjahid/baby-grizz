import { Container, Grid, Link } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import banner from "../../Images/banner.png";
import "./Banner.css";
import banner2 from "../../Images/banner2.png";
const Banner = () => {
  return (
    <Box
      sx={{
        marginTop: "1.5rem",
        paddingBottom: { lg: "5rem", md: "5rem", sm: "7rem", xs: "12rem" },
      }}
    >
      <Container fixed>
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={6}
            xl={6}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Box
              sx={{
                position: "relative",
                top: { md: "20px", lg: "20px", sm: "70px" },
              }}
            >
              <Box
                sx={{
                  fontFamily: "Nunito",
                  fontWeight: 900,
                  fontSize: {
                    lg: "2.4rem",
                    md: "2.4rem",
                    sm: "1.5rem",
                    xs: "2.4rem",
                  },
                  width: { md: "80%", lg: "80%", sm: "80%", xs: "100%" },
                  color: "#251400",
                  textAlign: {
                    xs: "center",
                    sm: "left",
                    md: "left",
                    lg: "left",
                    xl: "left",
                  },
                }}
              >
                Baby Grizz <br /> Rewards USDT with <br /> 1000 unique <br />{" "}
                NFTS
              </Box>
              <Box
                sx={{
                  width: { md: "70%", lg: "70%", sm: "70%", xs: "100%" },
                  color: "#4A4A4A",
                  fontSize: { sm: ".8rem", md: "1rem", lg: "1rem" },
                  textAlign: {
                    xs: "center",
                    sm: "left",
                    md: "left",
                    lg: "left",
                    xl: "left",
                  },
                }}
              >
                Because crypto doesnt have to be ugly. Lets go to the moon in
                style!
              </Box>
              {/* banner buy button here */}
              <Box
                sx={{
                  textAlign: {
                    xs: "center",
                    sm: "left",
                    md: "left",
                    lg: "left",
                    xl: "left",
                  },
                }}
              >
                <Link style={{ textDecoration: "none" }} to="#">
                  <button className="banner-buy-btn">Buy on pancakeswap</button>
                </Link>
              </Box>
              <div className="sercle-3"></div>
              <div className="miniSercle3"></div>
              <div className="miniSercle4">
                <div className="miniSercle5"></div>
              </div>
              <div className="bannerImage2">
                <img className="banner2" src={banner2} alt="banner" />
              </div>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={6}
            xl={6}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Box
              className="bannerImageContainer"
              sx={{ mt: { lg: 0, md: 0, sm: 0, xs: "1rem" } }}
            >
              <div className="img">
                <img className="bannerImg" src={banner} alt="banner" />
              </div>
              <div className="sercle-1"></div>
              <div className="sercle-2"></div>
              <div className="miniSercle1"></div>
              <div className="miniSercle2"></div>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Banner;
