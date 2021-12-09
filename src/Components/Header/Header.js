import { Container } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Banner from "../Banner/Banner";
import "./Header.css";
import logo from "../../Images/logo1.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineCancel } from "react-icons/md";
const Header = ({ open, setOpen }) => {
  return (
    <div className="headerContainer">
      <header className="Header">
        <Container
          fixed
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div className="logoContainer">
            <Link style={{ textDecoration: "none" }} to="/">
              <div className="logos">
                <img src={logo} alt="logo" className="logo1" />
                <p className="logoText">Baby Grizz</p>
              </div>
            </Link>
          </div>
          <nav>
            <ul
              className={
                open
                  ? "nav-container menuActive "
                  : "nav-container hidden MenuHidden"
              }
            >
              <li>
                <MdOutlineCancel
                  className="menuClose"
                  onClick={() => {
                    setOpen(!open);
                  }}
                />
              </li>
              <li>
                <Link
                  onClick={() => {
                    setOpen(false);
                  }}
                  className="navLink"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => {
                    setOpen(false);
                  }}
                  className="navLink"
                  to="/"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => {
                    setOpen(false);
                  }}
                  className="navLink"
                  to="/"
                >
                  Roadmap
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => {
                    setOpen(false);
                  }}
                  className="navLink"
                  to="/"
                >
                  NFT Mint
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => {
                    setOpen(false);
                  }}
                  className="navLink"
                  to="/"
                >
                  WhitePapers
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => {
                    setOpen(false);
                  }}
                  className="navLink"
                  to="/"
                >
                  <button className="buyBtnForMobile">
                    <Link className="buyLink" to="/">
                      Buy pancakeswop
                    </Link>
                  </button>
                </Link>
              </li>
            </ul>
          </nav>
          <div className="buyBtnContainer">
            {/* Buy Button Here */}

            <button className="buyBtn">
              <Link className="buyLink" to="/">
                Buy on pancakeswop
              </Link>
            </button>
          </div>
          <div className="menuToggleBtn">
            <GiHamburgerMenu
              onClick={() => {
                setOpen(!open);
              }}
              className="menuToggle"
            />
          </div>
        </Container>
      </header>
      <Banner></Banner>
    </div>
  );
};

export default Header;
