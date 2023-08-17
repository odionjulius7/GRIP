import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Pie } from "@ant-design/plots";
import { useDispatch, useSelector } from "react-redux";
import { getUsersAggregate, resetState } from "../../features/Users/usersSlice";

const PieChart = () => {
  const usersAggreg = useSelector((state) => state.users.userAggregate);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetState());
    dispatch(getUsersAggregate());
  }, []);

  const data = [
    {
      type: "Admins",
      value: usersAggreg?.admins,
    },
    {
      type: "Creators",
      value: usersAggreg?.creators,
    },
    {
      type: "Subscribers",
      value: usersAggreg?.subscribers,
    },
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

  // const {}

  // console.log(usersAggreg);
  return <Pie {...config} />;
};

export default PieChart;
