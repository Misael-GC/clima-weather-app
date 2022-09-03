import React from 'react'
import { Day } from '../Day';
import { useApi } from '../../context/ApiContext';
import './style.css'

export const  ListDays = () => {
  const weather = useApi();

  if (!weather) {
    return <p>Loading</p>
  }

  return (
    <ul className='daily'> 
    {weather.daily.map((day, id) => <Day key={id} {...day} dayNumber={id}/>)}
    </ul>
  )
}
