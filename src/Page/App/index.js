import { useContext, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Login from "../Login";
import HomePage from "../Home";
import Header from "../../Components/Header";
import UserContext from "../../Context/UserContext";
import Page404 from "../404";
import Logout from "../../Components/Logout";

function App() {
  const userCtx = useContext(UserContext);
  useEffect(() => {
    const success = localStorage.getItem("success");
    const token = localStorage.getItem("token");
    const data = localStorage.getItem("data");
    const cardId = localStorage.getItem("cardId");

    if (token) {
      userCtx.loginUserSucces(success, token, cardId, data);
    }
  }, []);

  return (
    <>
      <Header />
      <Container>
        {userCtx.state.cardId ? (
          <Routes>
            <Route exact path="/home" element={<HomePage />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<Login />} />
          </Routes>
        )}
      </Container>
    </>
  );
}

export default App;
