import { Container, Grid, Link } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import banner from "../../Images/banner.png";
import "./Banner.css";
const Banner = () => {
  return (
    <Box
      sx={{
        marginTop: "1.5rem",
        paddingBottom: { lg: "5rem", md: "5rem", sm: "7rem" },
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
            <Box>
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
                  width: "80%",
                  color: "#251400",
                }}
              >
                Baby Grizz <br /> Rewards USDT with <br /> 1000 unique <br />{" "}
                NFTS
              </Box>
              <Box
                sx={{
                  width: "70%",
                  color: "#4A4A4A",
                  fontSize: { sm: ".8rem", md: "1rem", lg: "1rem" },
                }}
              >
                Because crypto doesnt have to be ugly. Lets go to the moon in
                style!
              </Box>
              {/* banner buy button here */}
              <Box>
                <Link style={{ textDecoration: "none" }} to="#">
                  <button className="banner-buy-btn">Buy on pancakeswap</button>
                </Link>
              </Box>
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
            <Box className="bannerImageContainer">
              <img className="bannerImg" src={banner} alt="banner" />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Banner;
