import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
const data = [
  { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 300, pv: 2210, amt: 2290 },
  { name: "Page C", uv: 200, pv: 2290, amt: 2000 },
  { name: "Page D", uv: 278, pv: 2000, amt: 2181 },
  { name: "Page E", uv: 189, pv: 2181, amt: 2500 },
  { name: "Page F", uv: 239, pv: 2500, amt: 2100 },
  { name: "Page G", uv: 349, pv: 2100, amt: 2300 },
  { name: "Page H", uv: 420, pv: 2600, amt: 2700 },
  { name: "Page I", uv: 390, pv: 2400, amt: 2200 },
  { name: "Page J", uv: 450, pv: 2800, amt: 2900 },
];

const Chart = () => {
  return (
    <LineChart width={800} height={600} data={data}>
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
    </LineChart>
  );
};

export default Chart;
