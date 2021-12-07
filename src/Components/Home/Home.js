import React from "react";
import About from "../About/About";
import Features from "../Features/Features";
import Header from "../Header/Header";
import Tokenomics from "../Tokenomics/Tokenomics";

const Home = () => {
  return (
    <div style={{ backgroundColor: "#FFFBF6" }}>
      <Header></Header>
      <Features></Features>
      <About></About>
      <Tokenomics></Tokenomics>
    </div>
  );
};

export default Home;
