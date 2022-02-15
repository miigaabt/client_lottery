import React, { useState, useContext } from "react";
import {
  Container,
  Form,
  Row,
  Col,
  InputGroup,
  FormControl,
  Button,
  Table,
  Modal,
} from "react-bootstrap";
import UserContext from "../../Context/UserContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Alert from '../../Components/General/Alert';
import { Navigate, useNavigate } from "react-router-dom";

const Login = (props) => {
  const ctx = useContext(UserContext);
  const navigate = useNavigate();
  const [form, setForm] = useState({
    phone: "",
    pinCode: "",
  });

  const changePhone = (e) => {
    const newPhone = e.target.value;
    setForm((formBefore) => ({
      phone: newPhone,
      pinCode: formBefore.pinCode,
    }));
  };

  const changePinCode = (e) => {
    const newPinCode = e.target.value;
    setForm((formBefore) => ({
      phone: formBefore.phone,
      pinCode: newPinCode,
    }));
  };

  const login = () => {
    ctx.loginUser(form.phone, form.pinCode);
  };

  return (
    <Container>
      <ToastContainer />
      <Form>
        {ctx.state.cardId && <navigate to="/home" />}
        <Form.Group className="mb-3">
          <Form.Label>Утасны дугаар</Form.Label>
          <Form.Control
            onChange={changePhone}
            type="number"
            placeholder="Утасны дугаар оруулах"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Пин код</Form.Label>
          <Form.Control
            onChange={changePinCode}
            type="password"
            placeholder="Пин код оруулах"
          />
        </Form.Group>

        <Button variant="primary" onClick={login}>
          Нэвтрэх
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
