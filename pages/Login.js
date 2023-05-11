"use client";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import * as Yup from "yup";
import axios from "axios";

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const LoginHeader = styled.h2`
  margin-bottom: 20px;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
`;

const LoginInput = styled.input`
  padding: 10px;
  margin: 10px 0;
  border: 2px solid #ccc;
  border-radius: 5px;
  width: 100%;
`;

const LoginButton = styled.button`
  padding: 10px;
  margin-top: 20px;
  background-color: #0077cc;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #005fa3;
  }
`;

const LoginError = styled.div`
  color: red;
  font-size: 12px;
  margin-top: 5px;
`;

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    validationSchema
      .validate({ email, password }, { abortEarly: false })
      .then(() => {
        axios
          .post("https://reqres.in/api/login", {
            email,
            password,
          })
          .then((response) => {
            console.log(response);
            navigate("/users");
          })
          .catch((error) => {
            console.error(error);
          });
      })
      .catch((err) => {
        const newErrors = {};
        err.inner.forEach((error) => {
          newErrors[error.path] = error.message;
        });
        setErrors(newErrors);
      });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  return (
    <LoginContainer>
      <LoginHeader>Login</LoginHeader>
      <LoginForm onSubmit={handleLogin}>
        <LoginInput
          type="text"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleInputChange}
        />
        {errors.email && <LoginError>{errors.email}</LoginError>}
        <LoginInput
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handleInputChange}
        />
        {errors.password && <LoginError>{errors.password}</LoginError>}
        <LoginButton type="submit">Login</LoginButton>
      </LoginForm>
    </LoginContainer>
  );
};

export default Login;
