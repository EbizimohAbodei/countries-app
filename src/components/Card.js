import React from "react";

const Card = (props) => {
  return (
    <div className="cardContainer">
      <img src={props.src} alt={props.name}></img>
      <h2 className="countryName"> {props.countryName}</h2>
      <h4 className="countryCapital">Capital: {props.capital}</h4>
      <h4 className="countryContinent">Continent: {props.continent}</h4>
      <h4 className="countryPopulation">Population: {props.population}</h4>
      <h4 className="countryLanguage">Language(s): {props.language}</h4>
      <h4 className="countryWeather">Weather in Celsius: {props.weather}</h4>
      <h4 className="countryTimezone">Timezone: {props.timezone}</h4>
      <h4 className="countryTimezone">Currency: {props.currency}</h4>
      {/* <Link to={props.name} className="seeMoreLink">
        See more
      </Link> */}
    </div>
  );
};

export default Card;
