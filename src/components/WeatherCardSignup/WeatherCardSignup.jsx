import "./WeatherCardSignup.css";
import heartIcon from "../../assets/icons/heart.png";
import sunIcon from "../../assets/icons/sun.png";
import deleteIcon from "../../assets/icons/delete.png";

const WeatherCard = ({
  item,
  forecast,
  onDelete,
  onFavorite,
  isFavorite,
  onShowForecast,
  onShowDetails,
  onShowWeekly, // ✅ тепер працює правильно
}) => {
  const date = new Date(item.dt_txt);

  return (
    <div className="cardSignup">
      <div className="cardSignup__top">
        <span>{item.city}</span>
        <span>{item.country}</span>
      </div>

      <h2 className="cardSignup__time">
        {date.getHours().toString().padStart(2, "0")}:00
      </h2>

      <div className="cardSignup__buttons">
        <button
          className="cardSignup__btn"
          onClick={() => onShowForecast(forecast)}
        >
          Hourly forecast
        </button>
        <button
          className="cardSignup__btn"
          onClick={onShowWeekly} // ✅ викликаємо без аргументів
        >
          Weekly forecast
        </button>
      </div>

      <p className="cardSignup__date">
        {date.toLocaleDateString()} |{" "}
        {date.toLocaleDateString("en-US", { weekday: "long" })}
      </p>

      <div className="cardSignup__sun">
        <img src={sunIcon} alt="sun" className="sunSignup-icon" />
      </div>

      <h1 className="cardSignup__temp">{Math.round(item.main.temp)}°C</h1>

      <div className="cardSignup__actions">
        <img
          src={heartIcon}
          alt="heart"
          className="iconSignup heartSignup-icon"
          onClick={() => onFavorite(item)}
          style={{ opacity: isFavorite ? 1 : 0.5 }}
        />

        <button className="see-moreSignup" onClick={onShowDetails}>
          See more
        </button>

        <img
          src={deleteIcon}
          alt="delete"
          className="iconSignup deleteSignup-icon"
          onClick={() => onDelete(item.id)}
        />
      </div>
    </div>
  );
};

export default WeatherCard;
