import { useState } from 'react'
import './App.css'
import WeatherCard from '../components/WeatherCard'

function App() {
  
  //console.log(GetGeolocation()); 

  return (
    <div className="App">
      <WeatherCard/>
    </div>
  )
}

export default App
