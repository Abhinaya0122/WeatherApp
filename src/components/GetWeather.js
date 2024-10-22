import React, { useState } from "react";
import WeatherCard from "./WeatherCard"; // Adjust the path as necessary
import '../css/GetWeather.css';
function GetWeather({onBack}) {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchWeather = async () => {
    if (city === "") {
      setError("Please enter a city name.");
      return;
    }

    setLoading(true);
    setError("");
    try {
      const url = `https://api.weatherapi.com/v1/current.json?key=8868e7d431964dd89a265801230604&q=${city}&aqi=no`;
      const result = await fetch(url);
      const data = await result.json();

      if (data.error) {
        setError("City not found.");
        setWeather(null);
      } else {
        setWeather(data); // Set the entire data object
        setError("");
      }
    } catch (err) {
      setError("Error fetching data. Please try again.");
      setWeather(null);
    }
    setLoading(false);
  };

  return (
    <div className="container">
      <main className="main">
        <div className="input-group">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter your city name"
            className="city-input"
          />
          <button onClick={fetchWeather} className="search-btn">
            {loading ? "Loading..." : "Search"}
          </button>
        </div>

        {error && <p className="error-message">{error}</p>}

        {weather && <WeatherCard weatherData={weather} />}
      </main>
      <button onClick={onBack}>Back to Home</button>
    </div>
  );
}

export default GetWeather;
