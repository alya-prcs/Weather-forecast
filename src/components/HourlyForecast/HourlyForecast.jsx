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

export default function HourlyForecast({ forecast = [] }) {
  if (!forecast || forecast.length === 0) {
    return <p>No forecast data available</p>;
  }

  const data = forecast.map((item) => {
    const date = new Date(item.dt_txt);
    return {
      time: `${date.getHours()}:00`,
      temp: Math.round(item.main.temp),
    };
  });

  return (
    <div style={{ width: "100%", height: 300 }}>
      <h2>Hourly forecast</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="temp" stroke="#ff7300" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
