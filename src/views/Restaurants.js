import React, { useEffect } from "react";
import { Card, Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { Header, Restaurant } from "../components";
import useFastor from "../context/useFastor";

const Restaurants = () => {
  const { token, restuarents, setRestuarents, axiosClient } = useFastor();
  const history = useHistory();

  useEffect(() => {
    if (!token) return history.push("/");

    const fetchRestaurants = async () => {
      await axiosClient
        .get("http://staging.fastor.in/v1/m/restaurant")
        .then((response) => {
          setRestuarents(response.data);
        })
        .catch((error) => {
          localStorage.removeItem("token");
          history.push("/");
        });
    };
    if (token) {
      fetchRestaurants();
    }
  }, []);
  return (
    <Container className="d-flex align-items-center justify-content-center flex-column">
      <Header />
      <div style={{ maxWidth: "468px" }}>
        {restuarents.map((restuarent, index) => (
          <Restaurant {...restuarent} key={index} />
        ))}
      </div>
    </Container>
  );
};

export default Restaurants;
