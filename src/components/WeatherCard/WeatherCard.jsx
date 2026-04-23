import "./WeatherCard.css";
import heartIcon from "../../assets/icons/heart.png";
import sunIcon from "../../assets/icons/sun.png";
import deleteIcon from "../../assets/icons/delete.png";

const WeatherCard = ({ item, onDelete, onFavorite, isFavorite }) => {
  const date = new Date(item.dt_txt);

  return (

      <div className="card">
        <div className="card__top">
          {/* 🔥 реальні дані */}
          <span>{item.city}</span>
          <span>{item.country}</span>
        </div>

        {/* 🔥 актуальний час */}
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
          {/* ❤️ favorite */}
          <div onClick={() => onFavorite(item)}>
            <img
              src={heartIcon}
              alt="heart"
              className="heart-icon"
              style={{ opacity: isFavorite ? 1 : 0.5 }}
            />
          </div>

          {/* 🗑 delete */}
          <div onClick={() => onDelete(item.id)}>
            <img src={deleteIcon} alt="delete" className="delete-icon" />
          </div>
        </div>
      </div>

  );
};

export default WeatherCard;