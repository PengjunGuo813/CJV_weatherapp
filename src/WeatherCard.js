/**********************************************
Task # 2
Full Name : Pengjun Guo
Student ID#: 139448229
Email : pguo9@myseneca.ca
Section : NAA

Authenticity Declaration: 
I declare this submission is the result of my own work and has not been. shared with any other student or 3rd party 
content provider. This submitted. 
piece of work is entirely of my own creation. 
***********************************************************************************************
Date: Jun 27, 2023
**********************************************/

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const WeatherCard = ({ city, apiKey }) => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
        );
        setWeatherData(response.data);
      } catch (error) {
        console.log('Error fetching weather data:', error);
      }
    };

    fetchWeatherData();
  }, [city, apiKey]);

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  const { name, main, weather } = weatherData;
  const { temp } = main;
  const { description, icon } = weather[0];

  return (
    <div className="weather-card">
      <h2>{name}</h2>
      <p>Temperature: {temp}°C</p>
      <p>Description: {description}</p>
      <img src={`http://openweathermap.org/img/w/${icon}.png`} alt={description} />
    </div>
  );
};

export default WeatherCard;
