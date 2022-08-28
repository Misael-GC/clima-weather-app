import { type } from '@testing-library/user-event/dist/type';
import React, { useEffect, useState } from 'react'

export const CurrentWeather = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() =>{
    fetch(`${process.env.REACT_APP_API_URL}weather?lat=35&lon=139&appid=${process.env.REACT_APP_API_KEY}`)
    .then(response => response.json())
    .then(data => {
      setWeather(data)
      setLoading(false)
      console.log(data)
    })
  },[])

  if (loading) {
    return <p>Loading....</p>
  }
  return (
    <section className='CurrentWeather'>
    <div className='CurrentWeather--details'>
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
      ppp
      </div>
    </div>
    <div className='CurrentWeather--img'>
     <img src='' alt='Weather'></img>
    </div>
    </section>
  )
}
