import { useState } from "react";

function TodayWeather({ weatherData, hourlyData, cityName }) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!weatherData || !hourlyData) {
    return (
      <div className="today-weather-container">
        <div className="weather-card">
          <p className="weather-desc">Loading...</p>
        </div>
      </div>
    );
  }

  const todayDate = "Monday, 9 November";
  const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const temperature = `${Math.round(weatherData.temperature_2m)}°`;
  const weatherCondition = weatherData.weather_code === 0 ? "Sunny" : "Mostly Sunny";

  const realHourlyData = hourlyData.time.slice(0, 24).map((timeStr, index) => {
    const dateObj = new Date(timeStr);
    const formattedTime = dateObj.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const temp = `${Math.round(hourlyData.temperature_2m[index])}°`;
    
    return {
      time: formattedTime,
      temp: temp,
      icon: "🌤️"
    };
  });

  const handleCardClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="today-weather-container">
      <div 
        className={`weather-card ${isExpanded ? "expanded" : ""}`}
        onClick={handleCardClick}
      >
        <div className="time-date-section">
          <span className="date-text">{todayDate} - {cityName}</span>
          <h1 className="time-text">{currentTime}</h1>
        </div>

        <div className="temp-section">
          <h2 className="temp-value">{temperature}</h2>
          <p className="weather-desc">{weatherCondition}</p>
          <p className="weather-details" style={{ fontSize: "12px", marginTop: "5px", opacity: 0.8 }}>
            Wind: {weatherData.wind_speed_10m} km/h | Humidity: {weatherData.relative_humidity_2m}%
          </p>
        </div>

        {isExpanded && (
          <div className="hourly-section">
            <h3 className="hourly-title">close❌</h3>
            <div className="hourly-scroll-container">
              {realHourlyData.map((hourItem, index) => (
                <div key={index} className="hourly-card">
                  <span className="hourly-time">{hourItem.time}</span>
                  <span className="hourly-icon">{hourItem.icon}</span>
                  <span className="hourly-temp">{hourItem.temp}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default TodayWeather;