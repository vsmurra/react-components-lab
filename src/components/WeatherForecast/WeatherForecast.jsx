import WeatherIcon from "../WeatherIcon/WeatherIcon.jsx";
import WeatherData from "../WeatherData/WeatherData.jsx";
import "./WeatherForecast.css";

function WeatherForecast(props) {
  return (
    <div className="weather">
      <h2>Day of the Week</h2>
      <WeatherIcon weatherForecast={props.weatherForecast} />
      <WeatherData weatherForecast={props.weatherForecast} />
    </div>
  );
}

export default WeatherForecast;
