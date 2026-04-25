import { useState } from "react";
import "./SearchBar.css";
import bgImage from "../../assets/icons/bg.jpg"; 

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState("");
  const [error, setError] = useState("");

  const now = new Date();

  const monthYear = now.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  const weekdayDay = now.toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
  });

  const handleSearch = () => {
    if (city.trim() === "") {
      setError("Enter city name");
      return;
    }

    setError(""); // очистити помилку
    onSearch(city);
    setCity(""); // очистити input
  };

  return (
    <div
      className="search"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="overlay"></div>

      <div className="search__content">
        <h1>Weather dashboard</h1>

        <div className="search__content_inside">
          <p>
            Create your personal list of favorite cities and always be aware of the weather.
          </p>

          <div className="data__day">
            <div className="date__month-year">{monthYear}</div>
            <div className="date__weekday-day">{weekdayDay}</div>
          </div>
        </div>

        <div className="search__box">
          <input
            type="text"
            placeholder="Search city..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />

          <button onClick={handleSearch}>
            Search
          </button>
        </div>

        {/* 🔥 показ помилки */}
        {error && <p className="error-text">{error}</p>}
      </div>
    </div>
  );
};

export default SearchBar;