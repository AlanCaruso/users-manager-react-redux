import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const LogoutButton = styled.button`
  background-color: #fff;
  color: #0077cc;
  border: none;
  cursor: pointer;
  float: right;
  margin: 10px;
  padding: 5px 15px;
  border-radius: 5px;
  &:hover {
    background-color: #0077cc;
    color: #fff;
  }
`;

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return <LogoutButton onClick={handleLogout}>Log out</LogoutButton>;
};

export default Logout;
