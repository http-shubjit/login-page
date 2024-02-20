import React from "react";
import Image from "next/image";
import {
  LoginPage,
  ImageContainer,
  LoginContainer,
  LoginCard,
  Frame,
  Card,
  StyleButton,
  StyledInput,
  CheckboxLabel,
  ForgetPasswordLink,
} from "./Login.style";
import img from "../../../public/img.jpg";
import { Button } from "infoviz-react-components";
import { useForm } from "react-hook-form";
const Login = () => {
  const { control: email, control: password } = useForm();

  return (
    <LoginPage>
      <ImageContainer>
        <Image src={img} width={1200} height={500} alt="img"></Image>
      </ImageContainer>

      <LoginContainer>
        <LoginCard>
          <Frame>
            <div className="frame">
              <h1>Healthigence</h1>
              <span>Bringing Inteligence To Healthcare</span>
            </div>
          </Frame>
          <Card>
            <h2 className="custom-text">Sign In To Your Account</h2>
            <StyledInput
              placeholder="email@.com"
              control={email}
              controlName="email"
              labelName="Enter Userid or Email Or Mobile No:"
            />
            <StyledInput
              placeholder="*********"
              control={password}
              controlName="password"
              labelName="Password :"
            />
            <CheckboxLabel>
              <input type="checkbox" />
              RememberMe
            </CheckboxLabel>
            <ForgetPasswordLink href="#">Forget Password ?</ForgetPasswordLink>
            <Button style={StyleButton}>Sign In</Button>
          </Card>
        </LoginCard>
      </LoginContainer>
    </LoginPage>
  );
};

export default Login;
