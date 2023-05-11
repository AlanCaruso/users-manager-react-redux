import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "@/app/components/Header";
import {
  UserListContainer,
  UserCard,
  UserAvatar,
  UserName,
  UserEmail,
} from "./UsersStyles";
import Skeleton from "@/app/components/Skeleton";
import UserPosts from "@/app/components/UsersPosts";

const Users = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

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

  const handleUserSelect = (user) => {
    setSelectedUser(user);
    setSidebarOpen(true);
  };

  const handleSidebarClose = () => {
    setSidebarOpen(false);
  };

  return (
    <>
      <Header />
      <div style={{ backgroundColor: "#fff", display: "flex" }}>
        <UserListContainer className={sidebarOpen ? "sidebar-open" : ""}>
          {loading ? (
            <Skeleton count={6} />
          ) : (
            users.map((user) => (
              <UserCard key={user.id} onClick={() => handleUserSelect(user)}>
                <UserAvatar src={user.avatar} alt="user avatar" />
                <UserName>
                  {user.first_name} {user.last_name}
                </UserName>
                <UserEmail>{user.email}</UserEmail>
              </UserCard>
            ))
          )}
        </UserListContainer>
        {selectedUser && sidebarOpen && (
          <UserPosts
            userId={selectedUser.id}
            closeSidebar={handleSidebarClose}
          />
        )}
      </div>
    </>
  );
};

export default Users;
