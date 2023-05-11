import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import axios from "axios";
import {
  LoginContainer,
  LoginHeader,
  LoginSubHeader,
  LoginForm,
  LoginInput,
  LoginButton,
  LoginError,
} from "./LoginStyles";

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
  const [token, setToken] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
      navigate("/users");
    }
  }, [navigate]);

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
            const token = response.data.token;
            localStorage.setItem("token", token); // save token to local storage
            setToken(token); // set token to state
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
      <LoginHeader>Sign in</LoginHeader>
      <LoginSubHeader>
        Welcome back. <br />
        Please log in to access your account.
      </LoginSubHeader>
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
        <LoginButton type="submit">Sign in</LoginButton>
      </LoginForm>
    </LoginContainer>
  );
};

export default Login;
