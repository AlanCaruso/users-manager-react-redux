import React, { useState } from "react";
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
  transition: background-color 0.3s ease, transform 0.1s ease;
  &:hover {
    background-color: #0077cc;
    color: #fff;
    transform: scale(1.05);
  }
`;

const Logout = () => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <LogoutButton
      onClick={handleLogout}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ backgroundColor: isHovered ? "#0077cc" : "#fff" }}
    >
      Log out
    </LogoutButton>
  );
};

export default Logout;
