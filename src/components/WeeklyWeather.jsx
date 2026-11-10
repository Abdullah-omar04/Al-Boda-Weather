function WeeklyWeather({ weatherData }) {
  if (!weatherData || !weatherData.time) {
    return (
      <div className="weekly-weather-container">
        <div className="weather-card">
          <span className="day-name">Loading...</span>
        </div>
      </div>
    );
  }

  const forecastData = weatherData.time.slice(0, 7).map((dateStr, index) => {
    const maxTemp = Math.round(weatherData.temperature_2m_max[index]);
    const minTemp = Math.round(weatherData.temperature_2m_min[index]);

    const dateObj = new Date(dateStr);
    const dayName =
      index === 0
        ? "Today"
        : dateObj.toLocaleDateString("en-US", { weekday: "long" });

    return {
      day: dayName,
      temp: `${maxTemp}° / ${minTemp}°`,
      condition: "Sunny",
    };
  });

  return (
    <div className="weekly-weather-container">
      {forecastData.map((item, index) => (
        <div className="weather-card" key={index}>
          <span className="day-name">{item.day}</span>
          <span className="temp">{item.temp}</span>
        </div>
      ))}
    </div>
  );
}

export default WeeklyWeather;
