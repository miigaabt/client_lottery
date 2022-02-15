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
      .then(async (response) => {
        var result = await response;
        setApiData((prevState) => ({
          ...prevState,
          data: result.data.Amount,
        }));
        console.log(result.data.Amount);
        console.log(apiData.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return <Container>Таны сугаалааны тоо : {apiData.data}</Container>;
};

export default HomePage;
