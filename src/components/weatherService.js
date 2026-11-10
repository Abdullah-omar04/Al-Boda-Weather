const cityCoordinates = {
  "Cairo": { lat: 30.0444, lon: 31.2357 },
  "Alexandria": { lat: 31.2001, lon: 29.9187 },
  "Giza": { lat: 30.0131, lon: 31.2089 },
  "Aswan": { lat: 24.0889, lon: 32.8998 },
  "Riyadh": { lat: 24.7136, lon: 46.6753 },
  "Makkah": { lat: 21.3891, lon: 39.8579 },
  "Jeddah": { lat: 21.4858, lon: 39.1925 },
  "Dubai": { lat: 25.2048, lon: 55.2708 },
  "Abu Dhabi": { lat: 24.4539, lon: 54.3773 },
  "Sharjah": { lat: 25.3463, lon: 55.4209 }
};

export async function getWeatherData(cityName) {
  const coords = cityCoordinates[cityName] || cityCoordinates["Cairo"];
  
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lon}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&hourly=temperature_2m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return null;
  }
}