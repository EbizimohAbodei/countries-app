import React from "react";
import { useNavigate } from "react-router-dom";
import classes from "./card.module.css";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const Cards = (props) => {
  const navigate = useNavigate();

  const singlePage = () => {
    // 👇️ navigate to /
    navigate(`${props.countryName}`);
  };

  return (
    // <div className={classes.card} onClick={singlePage} title="Click to view">
    //   <img src={props.src} alt={props.name}></img>
    //   <h2 className={classes.countryName}> {props.countryName}</h2>
    //   <div className={classes.countryDetailsContainer}>
    //     <div className={classes.countryDetails}>
    //       <h4 className="countryCapital">Capital: {props.capital}</h4>
    //       <h4 className="countryContinent">
    //         Continent:
    //         {props.continent}
    //       </h4>
    //       <h4 className="countryPopulation">Population: {props.population}</h4>
    //     </div>
    //     <div className={classes.countryDetailsContainer}>
    //       <h4 className="countryLanguage">
    //         Language:
    //         {props.language}
    //       </h4>
    //       <h4 className="countryTimezone">
    //         Currency:
    //         {props.currency}
    //       </h4>
    //       <h4 className="countryTimezone">
    //         Time-zone:
    //         {props.timezone}
    //       </h4>
    //     </div>
    //   </div>
    // </div>
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Body
          variant="top"
          alt={props.name}
          style={{ height: "8rem" }}
          className={classes.imageBody}
        >
          <Card.Img
            variant="rounded-end"
            src={props.src}
            alt={props.name}
            style={{ height: "3rem", width: "4rem" }}
            className={classes.image}
          />
        </Card.Body>

        <Card.Title className={classes.countryName}>
          {props.countryName}
        </Card.Title>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Capital: {props.capital}</ListGroup.Item>
          <ListGroup.Item>Continent: {props.continent}</ListGroup.Item>
          <ListGroup.Item>Population: {props.population}</ListGroup.Item>
          <ListGroup.Item>Language(s): {props.language}</ListGroup.Item>
          <ListGroup.Item>Currency: {props.currency}</ListGroup.Item>
          <ListGroup.Item>Time-zone: {props.timezone}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Card.Link
            onClick={singlePage}
            title="Click to view"
            className={classes.seeMore}
          >
            See more
          </Card.Link>
        </Card.Body>
      </Card>
    </>
  );
};

export default Cards;
