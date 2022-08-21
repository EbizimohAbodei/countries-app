import React from "react";
import { useState, useEffect } from "react";
import classes from "./weather.module.css";
import axios from "axios";

const Weather = ({ countryData }) => {
  const [weather, setWeather] = useState();

  const key = process.env.REACT_APP_WEATHER_API_KEY;

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${countryData.capital}&appid=${key}&units=metric`
      )
      .then((res) => {
        setWeather(res.data);
      })
      .catch((error) => console.error(error));
  }, [countryData]);

  return (
    <div className={classes.weatherContainer}>
      <div className={classes.weatherIconContainer}>
        <img
          className={classes.weatherIcon}
          alt={weather?.weather[0]?.description}
          src={`http://openweathermap.org/img/wn/${weather?.weather[0]?.icon}@2x.png`}
        />
        <p className={classes.temperature}>
          {weather?.main?.temp.toFixed(1)}°C
        </p>
      </div>

      <p className={classes.weatherDescription}>
        Feels like {weather?.main?.feels_like} -{" "}
        {weather?.weather[0]?.description.charAt(0).toUpperCase() +
          weather?.weather[0]?.description.slice(1)}
        .
      </p>
    </div>
  );
};

export default Weather;
