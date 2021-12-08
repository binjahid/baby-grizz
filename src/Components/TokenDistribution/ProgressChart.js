import React from "react";

import { PieChart } from "react-minimal-pie-chart";
const ProgressChart = ({ data }) => {
  const { token, liquidity, presale, future } = data;

  const dataMock = [
    { title: "One", value: token, color: "#248943" },
    { title: "Two", value: liquidity, color: "#FF6262" },
    { title: "Three", value: future, color: "#B74F04" },
    { title: "Four", value: presale, color: "#FFEFC7" },
  ];
  return (
    <div style={{ width: "330px", transform: "rotate(-160deg)" }}>
      <PieChart data={dataMock} lineWidth={40} />
    </div>
  );
};

export default ProgressChart;
