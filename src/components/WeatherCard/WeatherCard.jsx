import "./WeatherCard.css";
import heartIcon from "../../assets/icons/heart.png";
import sunIcon from "../../assets/icons/sun.png";
import deleteIcon from "../../assets/icons/delete.png";

const WeatherCard = ({ item }) => {
  const date = new Date(item.dt_txt);

  return (
    <div className="weather-section">
    <div className="card">
      <div className="card__top">
        <span>City</span>
        <span>Country</span>
      </div>

      <h2>{date.getHours()}:00</h2>

      <button className="hourly-btn">Hourly forecast</button>

      <p>
        {date.toLocaleDateString()} |{" "}
        {date.toLocaleDateString("en-US", { weekday: "long" })}
      </p>

      <div className="sun">
        <img src={sunIcon} alt="sun" className="sun-icon" />
      </div>

      <h1>{Math.round(item.main.temp)}°C</h1>

      <div className="card__actions">
        <div className="Heart__icon">
          <a href="#">
            <img src={heartIcon} alt="heart" className="heart-icon" />
          </a>
        </div>

        <div className="delete">
          <img src={deleteIcon} alt="delete" className="delete-icon" />
        </div>
      </div>
    </div>
  </div>
);
};

export default WeatherCard;