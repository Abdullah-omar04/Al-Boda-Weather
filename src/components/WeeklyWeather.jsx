function WeeklyWeather({ weatherData }) {
  if (!weatherData) {
    return (
      <div className="weekly-weather-container">
        <div className="weekly-cards-wrapper">
          <div className="weekly-card">
            <span className="day-name">Loading...</span>
          </div>
        </div>
      </div>
    );
  }

  const daysOfWeek = ["Today", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  const forecastData = weatherData.time.slice(0, 7).map((date, index) => {
    const maxTemp = Math.round(weatherData.temperature_2m_max[index]);
    const minTemp = Math.round(weatherData.temperature_2m_min[index]);
    
    return {
      day: daysOfWeek[index] || "Day",
      temp: `${maxTemp}° / ${minTemp}°`,
      condition: "Sunny"
    };
  });

  return (
    <div className="weekly-weather-container">
      <div className="weekly-cards-wrapper">
        {forecastData.map((item, index) => (
          <div key={index} className="weekly-card">
            <span className="day-name">{item.day}</span>
            <span className="weather-status">{item.condition}</span>
            <span className="day-temp">{item.temp}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WeeklyWeather;