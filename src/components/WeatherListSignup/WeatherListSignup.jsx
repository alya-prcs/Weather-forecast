import { useState, useEffect } from "react";
import WeatherCard from "../WeatherCardSignup/WeatherCardSignup";
import WeatherDetails from "../WeatherDetails/WeatherDetails";
import { getWeather } from "../../services/weatherApi";

const WeatherList = ({ city }) => {
  const [cards, setCards] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [openDetailsId, setOpenDetailsId] = useState(null);

  useEffect(() => {
    if (!city) return;

    const fetchWeather = async () => {
      const data = await getWeather(city);

      if (!data) {
        alert("City not found ❌");
        return;
      }

      if (!data.list) return;

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

  const deleteCard = (id) => {
    setCards((prev) => prev.filter((item) => item.id !== id));
  };

  const toggleFavorite = (item) => {
    setFavorites((prev) => {
      const exists = prev.find((el) => el.id === item.id);
      return exists
        ? prev.filter((el) => el.id !== item.id)
        : [...prev, item];
    });
  };

  const toggleDetails = (id) => {
    setOpenDetailsId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="weather-sectionSignup">
      {cards.map((item) =>
        openDetailsId === item.id ? (
          <WeatherDetails key={item.id} item={item} />
        ) : (
          <WeatherCard
            key={item.id}
            item={item}
            onDelete={deleteCard}
            onFavorite={toggleFavorite}
            isFavorite={favorites.some((el) => el.id === item.id)}
            onShowDetails={() => toggleDetails(item.id)}
          />
        )
      )}
    </div>
  );
};

export default WeatherList;