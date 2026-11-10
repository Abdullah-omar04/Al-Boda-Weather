import { useState, useEffect } from "react";

function CitySelector({ onCityChange }) {
  const cities = [
    "Cairo",
    "Alexandria",
    "Giza",
    "Aswan",
    "Riyadh",
    "Makkah",
    "Jeddah",
    "Dubai",
    "Abu Dhabi",
    "Sharjah"
  ];

  const [selectedCity, setSelectedCity] = useState(() => {
    return localStorage.getItem("bodas_selected_city") || "Cairo";
  });

  useEffect(() => {
    localStorage.setItem("bodas_selected_city", selectedCity);
    if (onCityChange) {
      onCityChange(selectedCity);
    }
  }, [selectedCity, onCityChange]);

  const handleChange = (e) => {
    setSelectedCity(e.target.value);
  };

  return (
    <div className="city-selector-container">
      <select 
        value={selectedCity} 
        onChange={handleChange} 
        className="city-select-dropdown"
      >
        {cities.map((city, index) => (
          <option key={index} value={city} className="city-option">
            {city}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CitySelector;