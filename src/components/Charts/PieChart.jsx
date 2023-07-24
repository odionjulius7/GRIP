import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Pie } from "@ant-design/plots";

const PieChart = () => {
  const data = [
    {
      type: "Admins",
      value: 7,
    },
    {
      type: "Creators",
      value: 15,
    },
    {
      type: "Subscribers",
      value: 40,
    },
    // {
    //   type: "D",
    //   value: 15,
    // },
    // {
    //   type: "E",
    //   value: 10,
    // },
    // {
    //   type: "F",
    //   value: 5,
    // },
  ];
  const config = {
    appendPadding: 10,
    data,
    angleField: "value",
    colorField: "type",
    radius: 0.8,
    label: {
      type: "outer",
      content: "{name} {percentage}",
    },
    interactions: [
      {
        type: "pie-legend-active",
      },
      {
        type: "element-active",
      },
    ],
  };
  return <Pie {...config} />;
};

export default PieChart;
