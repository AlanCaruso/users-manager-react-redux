import styled from "styled-components";

export const UserListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 20px;
  justify-items: center;
  background-color: #fff;
  width: 100%;

  &.sidebar-open {
    height: 50px;
  }
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
  width: 100%;
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
