import React from 'react'
import { getCurrentDay } from '../../utilities/getDay'
import './style.css'

export const Day = ({weather, main, dayNumber}) => {
  console.log(main)
  return (
    <li className='day'>
      <span>{main.temp}</span>
      <img src='https://picsum.photos/80' alt='weather img'></img>
      <h3>{weather[0].main}</h3>
      <p>{getCurrentDay(new Date().getDate(), dayNumber)}</p>
    </li>
  )
}