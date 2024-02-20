import { Input } from "infoviz-react-components";
import styled from "styled-components";

export const LoginPage = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
`;

export const ImageContainer = styled.div`
  flex: 65%;
  display: flex;
  opacity: 0.7;
`;

export const LoginContainer = styled.div`
  flex: 35%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const LoginCard = styled.div`
  width: 80%;
  height: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Frame = styled.div`
  width: 100%;
  height: 60px;
  background-color: white;
  text-align: center;
  margin-bottom: 40px;
`;

export const Card = styled.div`
  width: 100%;
  height: 400px;
  justify-content: center;

  align-items: center;
  padding: 20px;
  box-sizing: border-box;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const StyledInput = styled(Input)`
  width: 100%;
  height: 100%;

  padding: 10px;
`;

export const StyleButton = {
  height: "40px",
  width: "300px",
  background: "blue",
  color: "white",
  fontSize: "16px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  border: "none",
  borderRadius: "5px",
  outline: "none",
  transition: "background 0.3s",
  margin: "30px auto",
};

export const CheckboxLabel = styled.label`
  margin-left: 5px;
`;

export const ForgetPasswordLink = styled.a`
  margin-left: 140px;
  color: blue;
`;

export default {
  LoginPage,
  ImageContainer,
  LoginContainer,
  LoginCard,
  Frame,
  Card,
  StyledInput,
  StyleButton,
  CheckboxLabel,
  ForgetPasswordLink,
};
