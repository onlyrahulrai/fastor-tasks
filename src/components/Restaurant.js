import React from "react";
import { Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import useFastor from "../context/useFastor";

const Restaurant = ({restaurant_id,restaurant_name, images, cuisines }) => {
  const { captilizeText } = useFastor();
  const history = useHistory();

  return (
    <Card className="my-2 cursor-pointer" onClick={() => history.push(`/restaurents/${restaurant_id}`)}>
      {images.length ? (
        <Card.Img
          variant="top"
          src={images[0].url}
          alt={restaurant_name}
          width="100%"
          height="auto"
        />
      ) : null}

      <Card.Body>
        <h4>{captilizeText(restaurant_name)}</h4>
        <span>Total number of cuisines: {cuisines.length}</span>
      </Card.Body>
    </Card>
  );
};

export default Restaurant;
