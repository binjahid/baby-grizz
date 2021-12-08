import React from "react";
import About from "../About/About";
import Features from "../Features/Features";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import OurJourney from "../OurJourney/OurJourney";
import TokenDistribution from "../TokenDistribution/TokenDistribution";
import Tokenomics from "../Tokenomics/Tokenomics";

const Home = () => {
  return (
    <div style={{ backgroundColor: "#FFFBF6" }}>
      <Header></Header>
      <Features></Features>
      <About></About>
      <Tokenomics></Tokenomics>
      <OurJourney></OurJourney>
      <TokenDistribution></TokenDistribution>
      <Footer></Footer>
    </div>
  );
};

export default Home;
