import "./WeatherDetails.css";
import tempIcon from "../../assets/icons/temp.png";
import rainIcon from "../../assets/icons/rain.png";
import windIcon from "../../assets/icons/wind.png";
import eyeIcon from "../../assets/icons/eye.png";
import pressureIcon from "../../assets/icons/pressure.png";

const WeatherDetails = ({ item }) => {
  return (
    <div className="details">
      <div className="details__grid">

        <div className="box">
          <p>Feels like</p>
          <h3>{Math.round(item.main.feels_like)}°C</h3>
          <img src={tempIcon} alt="" />
        </div>

        <div className="box">
          <p>Min °C</p>
          <h3>{Math.round(item.main.temp_min)}°C</h3>
          <p>Max °C</p>
          <h3>{Math.round(item.main.temp_max)}°C</h3>
        </div>

        <div className="box">
          <p>Humidity</p>
          <h3>{item.main.humidity}%</h3>
          <img src={rainIcon} alt="" />
        </div>

        <div className="box">
          <p>Pressure</p>
          <h3>{item.main.pressure} hPa</h3>
          <img src={pressureIcon} alt="" />
        </div>

        <div className="box">
          <p>Wind speed</p>
          <h3>{item.wind.speed} m/s</h3>
          <img src={windIcon} alt="" />
        </div>

        <div className="box">
          <p>Visibility</p>
          <h3>
            {item.visibility
              ? `${item.visibility / 1000} km`
              : "Unlimited"}
          </h3>
          <img src={eyeIcon} alt="" />
        </div>

      </div>
    </div>
  );
};

export default WeatherDetails;