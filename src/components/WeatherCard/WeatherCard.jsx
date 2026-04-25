import "./WeatherCard.css";
import heartIcon from "../../assets/icons/heart.png";
import sunIcon from "../../assets/icons/sun.png";
import deleteIcon from "../../assets/icons/delete.png";

const WeatherCard = ({ item, onDelete, onFavorite, isFavorite }) => {
  // Використовуємо dt_txt напряму, як у SignupCard
  const date = new Date(item.dt_txt);

  return (
    <div className="card">
      <div className="card__top">
        <span>{item.city}</span>
        <span>{item.country}</span>
      </div>

      {/* актуальний час у місті */}
      <h2 className="card__time">
        {date.getHours().toString().padStart(2, "0")}:00
      </h2>

      <button className="hourly-btn">Hourly forecast</button>

      {/* дата + день тижня */}
      <p className="card__date">
        {date.toLocaleDateString()} |{" "}
        {date.toLocaleDateString("en-US", { weekday: "long" })}
      </p>

      <div className="sun">
        <img src={sunIcon} alt="sun" className="sun-icon" />
      </div>

      <h1 className="card__temp">{Math.round(item.main.temp)}°C</h1>

      <div className="card__actions">
        <div onClick={() => onFavorite(item)}>
          <img
            src={heartIcon}
            alt="heart"
            className="heart-icon"
            style={{ opacity: isFavorite ? 1 : 0.5 }}
          />
        </div>

        <div onClick={() => onDelete(item.id)}>
          <img src={deleteIcon} alt="delete" className="delete-icon" />
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
