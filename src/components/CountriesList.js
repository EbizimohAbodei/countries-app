import React, { useState, useEffect } from "react";
import Card from "./Card";
import Loading from "./Loading";

const axios = require("axios").default;

const CountriesList = () => {
  const [countries, setCountries] = useState([]);
  const [weather, setWeather] = useState([]);
  const [loading, setLoading] = useState(false);
  const [language, setLanguage] = useState(true);
  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    const getApiData = async () => {
      const countryCall = await axios("https://restcountries.com/v3.1/all");

      // Setting response data to useState variables
      setCountries(countryCall.data);
      setLoading(false);
    };
    getApiData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Does the search by filtering data from local storage based on user input onChange
  const handleSearch = (e) => {
    setSearchData(e.target.value.toLocaleLowerCase());
    // eslint-disable-next-line
    const filteredArr = countries?.filter((country) => {
      if (country.name?.common?.toLocaleLowerCase().includes(searchData)) {
        return country;
      }
    });
    setCountries(filteredArr);
  };

  function k_mFormatter(num) {
    return Math.abs(num) > 999 && Math.abs(num) < 1000000
      ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k"
      : Math.sign(num) * (Math.abs(num) / 1000000).toFixed(1) + "m";
  }

  // const weather = (lat, lng) => {
  //   fetch(
  //     `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=bae02bad98891dafbb566c9bd8573582`
  //   )
  //     .then((res) => res.json())
  //     .then((resp) => {
  //       return console.log(resp.main);
  //     });
  // };

  // weather(20, 20);
  return (
    <div className="">
      <div className="searchContainer">
        <h3 className="title">Search Countries</h3>
        <input
          type="text"
          className="searchInput"
          onChange={handleSearch}
        ></input>
      </div>
      {loading && <Loading />}
      <div className="countriesContainer">
        {countries.map((country) => (
          <Card
            key={country.name.common}
            src={country.flags.svg}
            countryName={country.name.common}
            capital={country.capital}
            population={k_mFormatter(country.population)}
            continent={country.continents}
            timezone={country.timezones[0]}
            language={Object.values(country.languages || {}).join(", ")}
            currency={Object.values(
              Object.entries(country.currencies || {}) || {}
            ).join(" ")}
          />
        ))}
      </div>
    </div>
  );
};

export default CountriesList;
