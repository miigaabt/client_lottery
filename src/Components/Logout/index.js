import React, { useEffect, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import UserContext from "../../Context/UserContext";

const Logout = (props) => {
  const ctx = useContext(UserContext);
  let navigate = useNavigate();
  useEffect(() => {
    ctx.logout();
    navigate("/");
  }, []);
  return <Link to="/" />;
};

export default Logout;
