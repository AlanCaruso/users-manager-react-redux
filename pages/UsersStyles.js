import styled from "styled-components";

export const UserListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #fff;
`;

export const UserCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  width: 200px;
  height: 250px;
  background-color: #fff;
`;

export const UserAvatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

export const UserName = styled.h3`
  margin: 10px 0;
  color: #000;
`;

export const UserEmail = styled.p`
  margin: 5px 0;
  color: #000;
`;
