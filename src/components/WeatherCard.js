import React from 'react';

function WeatherCard({ weatherData }) {
  const {
    location,
    current: {
      temp_c,
      condition,
      wind_mph,
      humidity,
      feelslike_c,
      pressure_mb,
    },
  } = weatherData;

  return (
    <div className="bg-white p-5 rounded shadow-md">
      <h1 className="text-xl font-bold">{location.name}, {location.region}</h1>
      <p>{condition.text}</p>
      <img src={`https:${condition.icon}`} alt={condition.text} />
      <p>Temperature: {temp_c}°C</p>
      <p>Feels Like: {feelslike_c}°C</p>
      <p>Wind Speed: {wind_mph} mph</p>
      <p>Humidity: {humidity}%</p>
      <p>Pressure: {pressure_mb} mb</p>
    </div>
  );
}

export default WeatherCard;
