import React, { useState, useEffect } from "react";
import axios from "axios";
import SkeletonSidebar from "./SkeletonSidebar";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const PostContainer = styled.div`
  margin-bottom: 1rem;
  width: 80%;
  animation: ${fadeIn} 0.5s ease-in-out;
`;

const PostTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`;

const PostBody = styled.p`
  font-size: 0.9rem;
  line-height: 1.5;
`;

const DeleteButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #f44336;
  color: #fff;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #d32f2f;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(244, 67, 54, 0.5);
  }
`;

const UserPostsContainer = styled.div`
  display: grid;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const UserPosts = ({ userId, closeSidebar }) => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .then((response) => {
        setPosts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [userId]);

  const handleDelete = (postId) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((response) => {
        setPosts(posts.filter((post) => post.id !== postId));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <UserPostsContainer>
      {loading ? (
        <SkeletonSidebar />
      ) : posts.length === 0 ? (
        <p>No posts found for this user.</p>
      ) : (
        posts.map((post) => (
          <PostContainer key={post.id}>
            <PostTitle>{post.title}</PostTitle>
            <PostBody>{post.body}</PostBody>
            <DeleteButton onClick={() => handleDelete(post.id)}>
              Delete
            </DeleteButton>
          </PostContainer>
        ))
      )}
      <DeleteButton onClick={closeSidebar}>Close</DeleteButton>
    </UserPostsContainer>
  );
};

export default UserPosts;
