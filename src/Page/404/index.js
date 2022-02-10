import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, InputGroup, FormControl, Button } from "react-bootstrap";
const Page404 = () => {
  return (
    <>
      <h1>404</h1>
      <h2>Таны хайж байгаа хуудас байхгүй байна.</h2>
      <Link to="/home" className="btn btn-outline-indigo">
        Нүүр хуудас руу очих
      </Link>
    </>
  );
};
export default Page404;
