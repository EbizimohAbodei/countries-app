import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import classes from "./favourites.module.css";
import Card from "../Card/Card";
import { updateLocalStorage } from "../../features/countries/countriesSlice";

const Favourites = () => {
  const favs = useSelector((state) => state.countries.favourites);

  useEffect(() => {
    updateLocalStorage(favs);
  }, [favs]);

  return (
    <>
      <div className={classes.favouritesMain}>
        <div className={classes.cardContainer}>
          {favs.map((country) => (
            <Card
              key={country.countryName}
              src={country.src}
              countryName={country.countryName}
              capital={country.capital}
              population={country.population}
              continent={country.continent}
              language={country.language}
              currency={country.currency}
              timezone={country.timezone}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Favourites;
