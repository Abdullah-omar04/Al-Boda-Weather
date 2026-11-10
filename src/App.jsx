import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TodayWeather from "./components/TodayWeather";
import WeeklyWeather from "./components/WeeklyWeather";
import WeatherBackground from "./components/Background";
import CitySelector from "./components/CitySelector";
import { getWeatherData } from "./components/weatherService";

function App() {
  const [activeTab, setActiveTab] = useState("today");

  const [currentCity, setCurrentCity] = useState(() => {
    return localStorage.getItem("bodas_selected_city") || "Cairo";
  });

  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = await getWeatherData(currentCity);
      setWeatherData(data);
    }
    fetchData();
  }, [currentCity]);

  return (
    <WeatherBackground>
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <CitySelector onCityChange={(city) => setCurrentCity(city)} />

      <main className="main-content">
        {activeTab === "today" ? (
          <TodayWeather 
            weatherData={weatherData?.current} 
            hourlyData={weatherData?.hourly} 
            cityName={currentCity} 
          />
        ) : (
          <WeeklyWeather 
            weatherData={weatherData?.daily} 
          />
        )}
      </main>
    </WeatherBackground>
  );
}



export default App;