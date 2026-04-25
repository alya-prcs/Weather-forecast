import { useState, useEffect } from "react";
import WeatherCard from "../WeatherCardSignup/WeatherCardSignup";
import WeatherDetails from "../WeatherDetails/WeatherDetails";
import HourlyForecast from "../HourlyForecast/HourlyForecast";
import WeeklyForecast from "../WeeklyForecast/WeeklyForecast";
import { getWeather } from "../../services/weatherApi";

const WeatherListSignup = ({ city, onShowForecast }) => {
  const [cards, setCards] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [openDetailsId, setOpenDetailsId] = useState(null);
  const [openWeeklyId, setOpenWeeklyId] = useState(null); // ✅ новий стан

  useEffect(() => {
    const savedCards = localStorage.getItem("weatherCardsSignup");
    if (savedCards) setCards(JSON.parse(savedCards));
    const savedFavorites = localStorage.getItem("weatherFavoritesSignup");
    if (savedFavorites) setFavorites(JSON.parse(savedFavorites));
  }, []);

  useEffect(() => {
    localStorage.setItem("weatherCardsSignup", JSON.stringify(cards));
  }, [cards]);

  useEffect(() => {
    localStorage.setItem("weatherFavoritesSignup", JSON.stringify(favorites));
  }, [favorites]);

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
        forecast: data.list,
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
    setFavorites((prev) => prev.filter((el) => el.id !== id));
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

  const toggleWeekly = (id) => {
    setOpenWeeklyId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="weather-sectionSignup">
      {cards.map((item) => (
        <div key={item.id} className="card-with-details">
          <WeatherCard
            item={item}
            forecast={item.forecast}
            onDelete={deleteCard}
            onFavorite={toggleFavorite}
            isFavorite={favorites.some((el) => el.id === item.id)}
            onShowDetails={() => toggleDetails(item.id)}
            onShowForecast={onShowForecast}
            onShowWeekly={() => toggleWeekly(item.id)} // ✅ передаємо проп
          />

          {/* ✅ модальне вікно з деталями */}
          {openDetailsId === item.id && (
            <WeatherDetails
              item={item}
              onClose={() => setOpenDetailsId(null)}
            />
          )}

          {/* ✅ секція з графіком під карткою */}
          {item.showForecast && (
            <HourlyForecast forecast={item.forecast} />
          )}

          {/* ✅ секція з тижневим прогнозом */}
          {openWeeklyId === item.id && (
  <WeeklyForecast
    forecast={item.forecast}
    onClose={() => setOpenWeeklyId(null)} // ✅ закриття модалки
  />
)}

        </div>
      ))}
    </div>
  );
};

export default WeatherListSignup;
