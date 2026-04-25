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

  // Беремо дату першого елемента як "актуальний день"
  const firstDate = new Date(forecast[0].dt_txt);
  const currentDay = firstDate.getDate();
  const currentMonth = firstDate.getMonth();
  const currentYear = firstDate.getFullYear();

  // Фільтруємо лише записи з цього дня
  const filteredForecast = forecast.filter((item) => {
    const date = new Date(item.dt_txt);
    return (
      date.getDate() === currentDay &&
      date.getMonth() === currentMonth &&
      date.getFullYear() === currentYear
    );
  });

  // Генеруємо часову шкалу з 00:00 до 23:30 (крок 30 хв)
  const times = [];
  for (let h = 0; h < 24; h++) {
    times.push({ hour: h, minute: 0 });
    times.push({ hour: h, minute: 30 });
  }

  // Функція для пошуку температури з інтерполяцією
  const getTempAt = (targetDate) => {
    let prev = null;
    let next = null;

    for (let i = 0; i < filteredForecast.length; i++) {
      const date = new Date(filteredForecast[i].dt_txt);
      if (date <= targetDate) prev = filteredForecast[i];
      if (date >= targetDate) {
        next = filteredForecast[i];
        break;
      }
    }

    const prevTemp = prev?.main?.temp;
    const nextTemp = next?.main?.temp;

    if (typeof prevTemp !== "number" && typeof nextTemp !== "number") {
      return null; // немає даних
    }
    if (typeof prevTemp !== "number") return Math.round(nextTemp);
    if (typeof nextTemp !== "number") return Math.round(prevTemp);

    const prevDate = new Date(prev.dt_txt).getTime();
    const nextDate = new Date(next.dt_txt).getTime();
    const ratio =
      (targetDate.getTime() - prevDate) / (nextDate - prevDate);

    const temp =
      prevTemp + (nextTemp - prevTemp) * ratio;

    return Math.round(temp);
  };

  // Формуємо дані для графіка
  const data = times
    .map(({ hour, minute }) => {
      const date = new Date(
        currentYear,
        currentMonth,
        currentDay,
        hour,
        minute
      );
      const temp = getTempAt(date);
      if (temp === null || isNaN(temp)) return null;
      return {
        time: `${hour.toString().padStart(2, "0")}:${minute
          .toString()
          .padStart(2, "0")}`,
        temp,
      };
    })
    .filter(Boolean); // видаляємо null

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
