import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import classes from "./countries.module.css";
import Loading from "../Loading/Loading";
import { RiSearch2Line } from "react-icons/ri";

const axios = require("axios").default;

const CountriesList = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchData, setSearchData] = useState("");

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

  const countryList = countries.filter((res) => {
    res.name.common = res?.name?.common.toLowerCase();
    return res.name.common.includes(searchData.toLowerCase());
  });

  const handleSearch = (e) => {
    setSearchData(e.target.value);
  };

  function k_mFormatter(num) {
    return Math.abs(num) > 999 && Math.abs(num) < 1000000
      ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k"
      : Math.sign(num) * (Math.abs(num) / 1000000).toFixed(1) + "m";
  }

  function capitalize(string) {
    const words = string.split(" ");

    for (let i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    return words.join(" ");
  }

  return (
    <>
      <div className={classes.searchForm}>
        <input
          type="text"
          className={classes.searchInput}
          onChange={handleSearch}
        ></input>
        <button type="button" className={classes.searchButton}>
          <RiSearch2Line className="searchIcon" />
        </button>
      </div>
      {loading && <Loading />}
      <div className={classes.countriesContainer}>
        <div className={classes.cardContainer}>
          {countryList.map((country) => (
            <Card
              key={country.name.common}
              src={country.flags.svg}
              countryName={capitalize(country.name.common)}
              capital={country.capital}
              population={k_mFormatter(country.population)}
              continent={country.continents}
              timezone={country.timezones[0]}
              language={Object.values(country.languages || {}).join(", ")}
              currency={Object.values(country.currencies || {}).map(
                (currency) => currency.name
              )}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default CountriesList;
