import React from "react";

function WeatherData(props) {
  return (
    <div>
      <p>
        <span>conditions: </span> {props.weatherForecast.conditions}
      </p>
      <p>
        <span>time: </span> {props.weatherForecast.time}
      </p>
    </div>
  );
}

export default WeatherData;
