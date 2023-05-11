import React from "react";
import styled from "styled-components";
import Logout from "./LogOut";

const Header = () => {
  return (
    <Container>
      <Title>Users Manager React</Title>
      <Logout />
    </Container>
  );
};

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  height: 60px;
  background-color: black;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
`;

export default Header;
