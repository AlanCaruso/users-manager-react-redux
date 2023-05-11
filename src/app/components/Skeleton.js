import React from "react";
import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  0% {
    background-position: -400px 0;
  }
  100% {
    background-position: 400px 0;
  }
`;

const SkeletonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px; /* Agregamos margen inferior para separar los bloques */
`;

const SkeletonBlock = styled.div`
  background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0.4),
      rgba(255, 255, 255, 0)
    ),
    linear-gradient(90deg, #eee, #f5f5f5, #eee);
  background-size: 200% 100%;
  background-position: 0 0;
  animation: ${pulse} 2s ease-in-out infinite;
  height: 100px;
  width: 100px;
  border-radius: 50%;
  margin-bottom: 10px;
`;

const TextBlock = styled.div`
  height: 10px;
  width: 50px;
  background-color: #eee;
  margin-top: 10px;
`;

const Skeleton = ({ count }) => {
  if (count) {
    return Array.from({ length: count }).map((_, index) => (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "40px",
          marginLeft: "100px",
        }}
      >
        <SkeletonContainer>
          {" "}
          <SkeletonBlock />
        </SkeletonContainer>
        <TextBlock />
      </div>
    ));
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "40px",
        marginLeft: "100px",
      }}
    >
      <SkeletonContainer>
        {" "}
        <SkeletonBlock />
      </SkeletonContainer>
      <TextBlock />
    </div>
  );
};

export default Skeleton;
