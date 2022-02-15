import React, { useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import Alert from "../Components/Alert";
const UserContext = React.createContext();

const initialState = {
  logginIn: false,
  success: null,
  error: null,
  token: null,
  cardId: null,
  data: null,
  errorCode: null,
  //expireDate: null,
};

export const UserStore = (props) => {
  const navigate = useNavigate();
  const [state, setState] = useState(initialState);

  const loginUserSucces = (success, token, cardId, data) => {
    localStorage.setItem("success", success);
    localStorage.setItem("token", token);
    localStorage.setItem("data", data);
    localStorage.setItem("cardId", cardId);
    setState({
      ...state,
      logginIn: true,
      success,
      token,
      cardId,
      data,
    });
    navigate("home");
  };

  const logout = () => {
    localStorage.removeItem("data");
    localStorage.removeItem("success");
    localStorage.removeItem("token");
    localStorage.removeItem("cardId");
    setState(initialState);
  };

  const loginUser = (handphone, pincode) => {
    setState({ ...state, logginIn: true });
    const data = {
      handphone,
      pincode,
      returnSecureToken: true,
    };
    axios
      .post("http://localhost:7000/api/v1/users/login", data)
      .then((result) => {
        // LocalStorage ruu hadgalna
        console.log("Logged in =======>", result.data);
        const data = result.data.data;
        const token = result.data.token;
        const cardId = result.data.data.CardId;
        const success = result.data.success;
        loginUserSucces(success, token, cardId, data);
        //autoLogout(result.data.expires * 1000);
      })
      .catch((err) => {
        console.log(err.response.data.error.message);
        setState({
          ...state,
          logginIn: false,
          success: false,
          error: err.response.data.error.message,
          errorCode: err.response.data.error.message,
          token: null,
          cardId: null,
          data: null,
        });
        Alert(err.response.data.error.message, "401");
      });
  };

  //   const autoLogout = (expirationTime) => {
  //     setTimeout(() => {
  //       logout();
  //     }, expirationTime);
  //   };

  return (
    <UserContext.Provider
      value={{
        state,
        loginUser,
        logout,
        loginUserSucces,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContext;
