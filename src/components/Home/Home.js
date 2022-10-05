import React from "react";

const Home = () => {
  return (
    <div className="homeContainer">
      <div className="heroText">
        <p>
          Welcome to Countries App. The web application provides basic
          information about countries in the world and their current weather
          when viewed using the "see more" button. <br />
          <br />A feature is enabled to track countries marked as favourites and
          the data stored on local storage.
        </p>
        <br />
        <a
          href="https://restcountries.com/#api-endpoints-v3"
          className="heroLink"
        >
          Countries API-Link:
        </a>
      </div>
    </div>
  );
};

export default Home;
