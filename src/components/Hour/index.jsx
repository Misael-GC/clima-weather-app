import React from 'react'

export const Hour = () => {

  return (
    <li>
      <p>Temp</p>
      <img src='' alt=''/>
      <p>{new Date().getHours()}:{new Date().getMinutes()}</p>
      <p>PM</p>
    </li>
  )
}

