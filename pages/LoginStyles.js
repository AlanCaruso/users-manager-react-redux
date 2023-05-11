import styled from "styled-components";

export const LoginContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 400px;
  margin: auto 0;
  background-color: #f7f8fa;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #4a525d;
`;

export const LoginHeader = styled.h2`
  color: #4a525d;
  margin-bottom: 20px;
  font-size: 32px;
`;

export const LoginSubHeader = styled.h5`
  color: #4a525d;
  margin-bottom: 20px;
  text-align: center;
  font-weight: 400;
  line-height: 1.5;
  font-size: 16px;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
`;

export const LoginInput = styled.input`
  padding: 10px;
  margin: 10px 0;
  border: 2px solid #4a525d;
  border-radius: 5px;
  width: 100%;
  color: #4a525d;
  background: #f7f8fa;
`;

export const LoginButton = styled.button`
  background-color: #4a525d;
  color: #f7f8fa;
  border: none;
  cursor: pointer;
  margin-top: 20px;
  padding: 10px;
  border-radius: 5px;
  width: 100%;
  transition: background-color 0.3s ease, transform 0.1s ease;
  &:hover {
    background-color: #0077cc;
    transform: scale(1.05);
  }
`;

export const LoginError = styled.div`
  color: red;
  font-size: 12px;
  align-items: start;
  float: left;
  display: flex;
  align-content: start;
  text-align: left;
  width: 100%;
`;
