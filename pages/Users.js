import React, { useState, useEffect } from "react";
import axios from "axios";
import Logout from "../src/app/components/LogOut";
import {
  UserListContainer,
  UserCard,
  UserAvatar,
  UserName,
  UserEmail,
} from "./UsersStyles";
import Skeleton from "../src/app/components/Skeleton";

const Users = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      axios
        .get("https://reqres.in/api/users")
        .then((response) => {
          setUsers(response.data.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setLoading(false);
        });
    }, 2000);
  }, []);

  return (
    <div style={{ backgroundColor: "#fff" }}>
      <Logout />
      <UserListContainer>
        {loading ? (
          <>
            <Skeleton count={6} />
          </>
        ) : (
          users.map((user) => (
            <UserCard key={user.id}>
              <UserAvatar src={user.avatar} alt="user avatar" />
              <UserName>
                {user.first_name} {user.last_name}
              </UserName>
              <UserEmail>{user.email}</UserEmail>
            </UserCard>
          ))
        )}
      </UserListContainer>
    </div>
  );
};

export default Users;
