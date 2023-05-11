import Login from "../pages/Login";
import styled from "styled-components";

const HomePageContainer = styled.div`
  background-color: #3d6392;
  height: 100vh;
`;

const HomePage = () => {
  return (
    <HomePageContainer>
      <Login />
    </HomePageContainer>
  );
};

export default HomePage;
