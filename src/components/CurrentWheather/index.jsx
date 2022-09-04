import React from 'react';
import { useApi } from '../../context/ApiContext';
import './style.css'
// import { getCurrentDay } from '../../utilities/getDay'

export const CurrentWeather = () => {
  const weather = useApi()

  if(!weather){
    return <p>Loading...</p>
  }
  // console.log(weather)
  return (
    <section className='currentWeather'>
    <div className='CurrentWeather--details'>
    <h2>{weather.sys.country}</h2>
      <h2>Temp</h2>
      <span>{weather.main.temp}°</span>
      <ul>
        <li>
          <span>Wind </span>
          <span>{weather.wind.speed} km/h</span>
        </li>
        <li>
          <span>Humidity </span>
          <span>{weather.main.humidity}%</span>
        </li>
      </ul>
      <div className='CurrentWeather--actual'>
      {weather.weather.map((type) => <h3 key={type.id}>{type.main}</h3>)}
      </div>
    </div>
    <div className='CurrentWeather--img'>
     <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt='Weather'></img>
    <p>{new Date().toUTCString()}</p>
    </div>
    </section>
  )
}

