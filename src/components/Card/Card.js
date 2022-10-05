import React from "react";
import { useNavigate } from "react-router-dom";
import classes from "./card.module.css";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { useDispatch, useSelector } from "react-redux";
import { addFav, removeFav } from "../../features/countries/countriesSlice";
import { BsSuitHeartFill, BsSuitHeart } from "react-icons/bs";

const Cards = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const singlePage = () => {
    // 👇️ navigate to /
    navigate(`${props.countryName}`);
  };

  const favs = useSelector((state) => state.countries.favourites);

  return (
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
          {favs
            .map((country) => country.countryName)
            .includes(props.countryName) ? (
            <BsSuitHeartFill
              onClick={() => dispatch(removeFav(props))}
              title="remove from favourite"
              className={classes.addRemoveButtons}
            />
          ) : (
            <BsSuitHeart
              onClick={() => dispatch(addFav(props))}
              title="add to favourite"
              className={classes.addRemoveButtons}
            />
          )}
        </Card.Body>
      </Card>
    </>
  );
};

export default Cards;
