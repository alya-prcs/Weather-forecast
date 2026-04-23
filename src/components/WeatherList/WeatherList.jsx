import { useState, useEffect } from "react";
import WeatherCard from "../WeatherCard/WeatherCard";
import { getWeather } from "../../services/weatherApi";


const WeatherList = ({ city }) => {
  const [cards, setCards] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
  if (!city) return;

  const fetchWeather = async () => {
    const data = await getWeather(city);

    if (!data || !data.list) return;

    const item = data.list[0];

    const newCard = {
      id: Date.now(),
      city: data.city.name,
      country: data.city.country,
      ...item,
    };

    setCards((prev) => {
      const exists = prev.find(
        (c) => c.city.toLowerCase() === data.city.name.toLowerCase()
      );

      if (exists) return prev;

      return [...prev, newCard];
    });
  };

  fetchWeather();
}, [city]);

  // 🗑 delete
  const deleteCard = (id) => {
    setCards((prev) => prev.filter((item) => item.id !== id));
  };

  // ❤️ favorite
  const toggleFavorite = (item) => {
    setFavorites((prev) => {
      const exists = prev.find((el) => el.id === item.id);

      if (exists) {
        return prev.filter((el) => el.id !== item.id);
      } else {
        return [...prev, item];
      }
    });
  };

  return (
    <div className="weather-section">
      {cards.map((item) => (
        <WeatherCard
          key={item.id}
          item={item}
          onDelete={deleteCard}
          onFavorite={toggleFavorite}
          isFavorite={favorites.some((el) => el.id === item.id)}
        />
      ))}
    </div>
  );
};

export default WeatherList;