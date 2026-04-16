import { useState, useEffect } from "react";
import WeatherCard from "../WeatherCard/WeatherCard";
import { getWeather } from "../../services/weatherApi";

const WeatherList = ({ city }) => {
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    if (!city) return;

    const fetchWeather = async () => {
      const data = await getWeather(city);

      if (!data || !data.list) return;

      const filtered = [
        data.list[0],
        data.list[8],
        data.list[16],
      ];

      setWeather(filtered);
    };

    fetchWeather();
  }, [city]);

  return (
    <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
      {weather.map((item, index) => (
        <WeatherCard key={index} item={item} />
      ))}
    </div>
  );
};

export default WeatherList;