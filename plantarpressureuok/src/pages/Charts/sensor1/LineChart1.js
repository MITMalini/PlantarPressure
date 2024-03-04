import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const MyLineChart = ({ sensorData }) => {
  return (
    <LineChart width={600} height={200} data={sensorData}>
      <XAxis dataKey="time" />
      <YAxis />
      <CartesianGrid stroke="#ccc" />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="sensor1" stroke="blue" name="Sensor 1" />
    </LineChart>
  );
};

export default MyLineChart;
