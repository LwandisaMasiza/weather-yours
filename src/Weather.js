import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  function updateCity(event) {
    setCity(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();

    const apiKey = "54e0822b2d0f39d02a7d537obef382at";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

    axios.get(apiUrl).then((response) => {
      setWeather(response.data);
    });
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Enter city name"
          value={city}
          onChange={updateCity}
        />
        <button type="submit">Search</button>
      </form>
      {weather && weather.main && (
        <div>
          <h2>{weather.name}</h2>
          <p>Temperature: {Math.round(weather.main.temp)}°C</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Wind: {weather.wind.speed} km/h</p>
        </div>
      )}
    </div>
  );
}
