import React, { useState, useEffect, useContext } from "react";
import { Container } from "react-bootstrap";
import UserContext from "../../Context/UserContext";
import API from "../../config/axios";

const HomePage = (props) => {
  const ctx = useContext(UserContext);
  const cardId = ctx.state.cardId;
  //Баазаас авах утгууд
  const getJson = {
    data: null,
  };
  const [apiData, setApiData] = useState({ getJson });

  useEffect(() => {
    const link = `users/${cardId}`;
    API.getData(link)
      .then((response) => {
        setApiData((prevState) => ({
          ...prevState,
          data: response,
        }));
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Container>
      <span>{ctx.state.cardId}</span>
    </Container>
  );
};

export default HomePage;
