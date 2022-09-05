import React, { useEffect, useState } from 'react';
import GetGeolocation from './GetGeolocation';
import axios from 'axios';

const WeatherCard = () => {

  const wInfo = GetGeolocation(); 
  let weatherBG = '';

  switch(wInfo.weather?.[0].main){
    case 'Clouds': weatherBG = '../src/assets/cloudy_sky.jpg'; break;
    case 'Rain' : weatherBG = '../src/assets/rain.jpg'; break;
    case 'Clear' : weatherBG = '../src/assets/sunny.jpg'; break;
    default: weatherBG = '../src/assets/weather.jpg'; break;
  }

  const formatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });

  const [isCelsius, setIsCelsius] = useState(true);

  const changeUnits = () => {
    setIsCelsius(!isCelsius)
  }

  return (
    <div className='weather-card' style={{background: `url(${weatherBG}) center`}}>
      <div className="title-container">
        <h1 className='weather-location'>{wInfo.name}{', '}{ wInfo.sys?.country}</h1>
      </div>
      <div className="weather-condition-container">
        <div className="weather-status">
          <div className="weather-temps">
            <h3 className='temps'>{isCelsius? `${formatter.format(wInfo.main?.temp-272.15)} °C` : `${formatter.format(1.8 * (wInfo.main?.temp -272.15) + 32)} °F`}</h3>
            <h3 className='condition'>{wInfo.weather?.[0].description}</h3> 
          </div>
        </div>
        <div className="weather-info">
          <ul className='weather-info-list'>
            <li><i className="fa-solid fa-wind"></i> {wInfo.wind?.speed+'m/s'}</li>
            <li><i className="fa-solid fa-cloud"></i> {wInfo.clouds?.all+'%'}</li>
            <li> <i className="fa-solid fa-temperature-half"></i> {wInfo.main?.pressure+'mb'}</li>
          </ul>
          <button className='changeUnits-btn' onClick={changeUnits}>Switch to {isCelsius? "°F" : "°C"}</button>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;