import React from "react";
import styled, { keyframes } from "styled-components";

const SkeletonSidebar = () => (
  <Container>
    <SidebarHeader />
    <SidebarSection />
    <SidebarSection />
    <SidebarSection />
  </Container>
);

const shimmer = keyframes`
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
`;

const Container = styled.div`
  width: 200px;
  height: 100%;
  background-color: #f8f8f8;
  padding: 16px;
`;

const SidebarHeader = styled.div`
  width: 100%;
  height: 40px;
  background-color: #eee;
  margin-bottom: 16px;
  animation: ${shimmer} 2s infinite linear;
`;

const SidebarSection = styled.div`
  width: 100%;
  height: 16px;
  background-color: #eee;
  margin-bottom: 8px;
  animation: ${shimmer} 2s infinite linear;
`;

export default SkeletonSidebar;
