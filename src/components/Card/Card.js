import React from "react";
import { useNavigate } from "react-router-dom";
import classes from "./card.module.css";

const Card = (props) => {
  const navigate = useNavigate();

  const singlePage = () => {
    // 👇️ navigate to /
    navigate(`${props.countryName}`);
  };

  return (
    <div className={classes.card} onClick={singlePage} title="Click to view">
      <img src={props.src} alt={props.name}></img>
      <h2 className={classes.countryName}> {props.countryName}</h2>
      <div className={classes.countryDetailsContainer}>
        <div className={classes.countryDetails}>
          <h4 className="countryCapital">Capital: {props.capital}</h4>
          <h4 className="countryContinent">
            Continent:
            {props.continent}
          </h4>
          <h4 className="countryPopulation">Population: {props.population}</h4>
        </div>
        <div className={classes.countryDetailsContainer}>
          <h4 className="countryLanguage">
            Language:
            {props.language}
          </h4>
          <h4 className="countryTimezone">
            Currency:
            {props.currency}
          </h4>
          <h4 className="countryTimezone">
            Time-zone:
            {props.timezone}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Card;
