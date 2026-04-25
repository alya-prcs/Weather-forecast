// src/components/HourlyForecast/HourlyForecast.jsx
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  { time: "11 pm", temp: 15 },
  { time: "1 am", temp: 12 },
  { time: "3 am", temp: 10 },
  { time: "5 am", temp: 10 },
  { time: "9 am", temp: 14 },
  { time: "12 pm", temp: 20 },
  { time: "3 pm", temp: 23 },
  { time: "6 pm", temp: 25 },
];

export default function HourlyForecast() {
  return (
    <div style={{ width: "100%", height: 300 }}>
      <h2>Hourly forecast</h2>
      <ResponsiveContainer>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis domain={[5, 25]} />
          <Tooltip />
          <Line type="monotone" dataKey="temp" stroke="#ff7300" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
