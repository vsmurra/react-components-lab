import React from 'react'

function WeatherIcon(props) {
  return (
    <img src={props.weatherForecast.img} alt={props.weatherForecast.imgAlt} />
  )
}

export default WeatherIcon