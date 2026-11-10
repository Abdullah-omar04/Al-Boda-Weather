
import dayImage from "../assets/day.jpg";
import nightImage from "../assets/night.jpg";

function WeatherBackground({ children }) {
  const currentHour = new Date().getHours();
  const isDayTime = currentHour >= 6 && currentHour < 18;
  const bgImage = isDayTime ? dayImage : nightImage;

  return (
    <div 
      className="weather-app-container"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {children}
    </div>
  );
}

export default WeatherBackground;