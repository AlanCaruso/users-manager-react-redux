import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const UserListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const UserCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 5px;
  width: 200px;
  height: 250px;
`;

const UserAvatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

const UserName = styled.h3`
  margin: 10px 0;
`;

const UserEmail = styled.p`
  margin: 5px 0;
`;

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://reqres.in/api/users")
      .then((response) => {
        setUsers(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <UserListContainer>
      {users.map((user) => (
        <UserCard key={user.id}>
          <UserAvatar src={user.avatar} alt="user avatar" />
          <UserName>
            {user.first_name} {user.last_name}
          </UserName>
          <UserEmail>{user.email}</UserEmail>
        </UserCard>
      ))}
    </UserListContainer>
  );
};

export default Users;
