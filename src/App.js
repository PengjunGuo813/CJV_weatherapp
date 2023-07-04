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

import React from 'react';
import WeatherCard from './WeatherCard';

const App = () => {
  const apiKey = '2a55adf227390eb193d1b568f39f42cb';
  const cities = [
    'Toronto',
    'Ottawa',
    'Montreal',
    'Vancouver',
    'Edmonton',
    'New York',
    'Los Angeles',
    'Chicago',
    'Boston',
    'Austin'
  ];

  return (
    <div className="App">
      <h1>Weather Information</h1>
      <div className="weather-container">
        {cities.map((city, index) => (
          <WeatherCard key={index} city={city} apiKey={apiKey} />
        ))}
      </div>
    </div>
  );
};

export default App;
