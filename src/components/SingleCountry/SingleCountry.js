import React from "react";
import Weather from "../Weather/Weather";
import classes from "./singlecountry.module.css";
import { useState, useEffect } from "react";
import axios from "axios";

const SingleCountry = (props) => {
  // Declaring useState variables
  const [countryData, setCountryData] = useState([]);

  useEffect(() => {
    const countryApi = `https://restcountries.com/v3.1/name/${props.params.singlecountry}`;

    const country = async () => {
      await axios(countryApi)
        .then((response) => setCountryData(response.data[0]))
        .catch((error) => console.error(error));
    };

    country();
  }, [props.params.singlecountry]);

  return (
    <div className={classes.singleContainer}>
      <div className={classes.countryDetails}>
        <h1 className={classes.countryName}>{countryData?.name?.official}</h1>
        <h3 className={classes.countryCapital}>{countryData?.capital}</h3>
      </div>
      <div className={classes.weatherContainer}>
        <Weather countryData={countryData} />
      </div>
      <a
        href={countryData?.maps?.googleMaps}
        target="blank"
        className={classes.mapLink}
      >
        See Country in GoogleMaps
      </a>
    </div>
  );
};

export default SingleCountry;
