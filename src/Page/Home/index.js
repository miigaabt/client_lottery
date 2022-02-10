import React, { useState, useContext } from "react";
import { Container } from "react-bootstrap";
import UserContext from "../../Context/UserContext";

const HomePage = (props) => {
  const ctx = useContext(UserContext);

  return <Container>Hello</Container>;
};

export default HomePage;
