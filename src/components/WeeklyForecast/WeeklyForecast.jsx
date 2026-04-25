import "./WeeklyForecast.css";

const WeeklyForecast = ({ forecast, onClose }) => {
  const dailyData = forecast
    .filter((item) => item.dt_txt.includes("12:00:00"))
    .slice(0, 8);

  const weatherDescriptions = dailyData.map(day => day.weather[0].description);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>

        <div className="weekly-forecast">
          <h2>8-day forecast</h2>
          <table className="forecast-table">
            <thead>
              <tr>
                <th>Day</th>
                <th>Weather</th>
                <th>Temperature (°C)</th>
              </tr>
            </thead>
            <tbody>
              {dailyData.map((day, index) => {
                const date = new Date(day.dt_txt);
                return (
                  <tr key={index}>
                    <td className="forecast-date">
                      {date.toLocaleDateString("en-US", {
                        weekday: "short",
                        month: "short",
                        day: "numeric",
                      })}
                    </td>
                    <td className="weather-icons">
                      <img
                        src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
                        alt={day.weather[0].description}
                      />
                    </td>
                    <td className="temp-range">
                      {Math.round(day.main.temp_max)}°/{Math.round(day.main.temp_min)}°C
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="weather-descriptions">
            {weatherDescriptions.map((desc, idx) => (
              <span key={idx}>{desc}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeeklyForecast;
