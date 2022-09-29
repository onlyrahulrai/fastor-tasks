import React, { useEffect } from "react";
import { Card, Container } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import { Header } from "../components";
import useFastor from "../context/useFastor";

const RestaurantDetails = () => {
  const { id } = useParams();
  const { getRestaurant, captilizeText } = useFastor();
  const data = getRestaurant(id);
  const history = useHistory();

  useEffect(() => {
    if(!data){
      history.push('/restaurents')
    }
  },[])

  return (
    <Container className="d-flex justify-content-center align-items-center flex-column">
      <Header />
      <Card style={{ maxWidth: "28rem" }}>
        {data?.images?.length ? (
          <Card.Img
            variant="top"
            src={data?.images[0]?.url}
            alt={data?.restaurant_name}
            width="100%"
            height="auto"
          />
        ) : null}
        <Card.Body>
          <span>
            <strong>UUID:</strong> {data?.restaurant_uuid}
          </span><br />
          <span className="mt-2"><strong>Restaurant Name: </strong>{captilizeText(data?.restaurant_name)}</span><br />
          <span><b>Total number of cuisines:</b> {data?.cuisines?.length}</span><br />
          <span><b>Restaurant mode:</b>  {data?.restaurant_mode}</span>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default RestaurantDetails;
