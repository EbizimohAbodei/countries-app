import React, { Component } from "react";
import Card from "./Card";

class CountriesList extends Component {
  state = {
    countries: [],
    weather: [],
    isLoading: false,
    language: [],
  };

  componentDidMount() {
    fetch("https://restcountries.com/v3.1/all")
      .then((res1) => res1.json())
      .then((data1) => {
        this.setState({ countries: data1 });
      })

      .then((res) => console.log(res));
  }

  render() {
    if (this.state.isLoading) {
      return <p>Loading...</p>;
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
      <div className="countriesContainer">
        {this.state.countries.map((country) => (
          <Card
            key={country.name.common}
            src={country.flags.svg}
            countryName={country.name.common}
            capital={country.capital}
            population={country.population.toLocaleString()}
            continent={country.continents}
            timezone={country.timezones[0]}
            // language={JSON.stringify(country.languages)}
            currency={JSON.stringify(country.currencies)}
          />
        ))}
      </div>
    );
  }
}

export default CountriesList;
