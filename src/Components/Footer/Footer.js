import { Container, Grid, Link } from "@mui/material";
import React from "react";
import "./Footer.css";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";

import footerImg1 from "../../Images/footerImg1.png";
import footerImg2 from "../../Images/footerImg2.png";
import footerLogo from "../../Images/logo1.png";
const Footer = () => {
  const CurrentYear = new Date().getFullYear();
  return (
    <div className="footerContainer">
      <Container>
        <div className="footerContent">
          <div>
            <img
              className="footarSmallImg2"
              src={footerImg2}
              alt="footerImg2"
            />
          </div>
          <div className="footerTitleContainer">
            <Grid
              container
              spacing={2}
              sx={{
                backgroundImage: "linear-gradient(to right, #FF700A, #FFD12D)",
                borderRadius: "40px",
                padding: "10px 20px",
                position: "relative",
                top: "-50px",
              }}
            >
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
                  // alignItems: "center",
                  position: "relative",
                  top: "15px",
                  left: "-70px",
                }}
              >
                <div>
                  <h2 className="footerTitle">
                    Be part of our growing community on Telegram now
                  </h2>
                  <button className="footerBtn">Join NOW</button>
                </div>
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={3}
                lg={3}
                xl={3}
                sx={{ position: "relative" }}
              >
                <div className="footerImgContainer">
                  <img className="footerSmlImg" src={footerImg1} alt="footer" />
                  <div className="footerCercle"></div>
                </div>
              </Grid>
            </Grid>
          </div>
          {/* Footer Logo */}
          <div className="FooterLogoContainer">
            <Link style={{ textDecoration: "none" }} to="/">
              <div className="Footelogos">
                <img src={footerLogo} alt="logo" className="Footerlogo" />
                <p className="FooterlogoText">Baby Grizz</p>
              </div>
            </Link>
          </div>
          {/* Footer SLogan */}
          <div className="footerSloganContainer">
            <p className="footerSlogan">
              Baby Grizz - Reward yourself for being awesome
            </p>
          </div>
          {/* Footer Links */}
          <div className="footerLinksContainer">
            <div>
              <a
                className="footerLinks"
                href="www.facebook.com"
                alt="facebook"
                target="_blank"
              >
                <FaFacebook />
              </a>
              <a
                className="footerLinks"
                href="www.facebook.com"
                alt="facebook"
                target="_blank"
              >
                <AiOutlineTwitter />
              </a>
              <a
                className="footerLinks"
                href="www.facebook.com"
                alt="facebook"
                target="_blank"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
          {/* hr divider */}
          <div className="footerDivider">
            <div className="footerDividerLine" />
          </div>
          {/* Footer Copyright */}
          <div className="footerCopyrightContainer">
            <p className="footerCopyright">
              &copy; Copyright {CurrentYear} Baby Grizz
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
