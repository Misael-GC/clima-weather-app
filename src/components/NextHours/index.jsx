import React from 'react'
import { Hour } from '../Hour'
import { useApi } from '../../context/ApiContext'

export const NextHours = () => {
  const weather = useApi()
  if (!weather) {
    return <p>Loading...</p>
  }
  console.log('ooo', weather)
  return (
    
    <ul className='container'>
      <Hour/>
    </ul>
  )
}
