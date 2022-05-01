import React, { Component } from "react";

class SingleCountry extends Component {
  //   state = {
  //     data: [],
  //     isLoading: false,
  //   };

  //   componentDidMount() {
  //     this.setState({ isLoading: true });
  //     fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.params.pokesingle}`)
  //       .then((req) => req.json())
  //       .then((reqs) => this.setState({ data: reqs, isLoading: false }));
  //   }
  render() {
    console.log(this.state.data);
    if (this.state.isLoading) {
      return <p>Loading...</p>;
    }
    return (
      <div className="singleCountryContainer">
        <img
          className="single"
          src={this.state.data.sprites?.other.dream_world.front_default}
          alt={this.state.data.name}
        ></img>
        <img
          className="single"
          src={this.state.data.sprites?.other.home.front_shiny}
          alt={this.state.data.name}
        ></img>
        <h3> Name: {this.state.data.name}</h3>
        <h3>Abilities: {this.state.data.abilities?.ability?.name}</h3>
        <h3>Weight: {this.state.data.weight}</h3>
      </div>
    );
  }
}

export default SingleCountry;
