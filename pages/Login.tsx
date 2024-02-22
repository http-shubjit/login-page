import React, { useState } from "react";
import Image from "next/image";
import styled from "styled-components";

import img from "../public/img.jpg";
import google from "../public/google.png";
import { Button, Input } from "infoviz-react-components";
import { useForm, SubmitHandler } from "react-hook-form";
import { signIn, signOut, useSession } from "next-auth/react";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";
import { useRouter } from "next/router";
import Logout from "./Logout";
type FormData = {
  email: string;
  password: string;
};

const Login = () => {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  // const [userInput, setUserInput] = useState({});

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const { data: session } = useSession();
  console.log(session);
  const handleLogin = () => {
    signIn("google");
  };

  const handleLogout = () => {
    signOut(); // Trigger logout
  };
  const onSubmit: SubmitHandler<FormData> = (data) => {
    // setUserInput(data);
    router.push("/Logout");
  };

  return (
    <>
      {/* <div>
        {router.pathname === "/Logout" && <Logout userInput={userInput} />}
      </div> */}

      <LoginPage>
        <ImageContainer>
          <Image src={img} width={1200} height={500} alt="img" />
        </ImageContainer>

        <LoginContainer>
          <LoginCard>
            <Frame>
              <div className="frame">
                <h1>Healthigence</h1>
                <span>Bringing Intelligence To Healthcare</span>
              </div>
            </Frame>
            <Card>
              <h2 className="custom-text">Sign In To Your Account</h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Input
                  style={inputStyle}
                  placeholder="userfrontend@.com"
                  control={control}
                  name="email"
                  controlName="email"
                  labelName="Enter Userid or Email or Mobile No:"
                  rules={{ required: "Email is required" }}
                />
                {errors.email && (
                  <p style={{ color: "red" }}>{String(errors.email.message)}</p>
                )}
                <div style={{ position: "relative" }}>
                  <Input
                    style={inputStyle}
                    placeholder="*********"
                    control={control}
                    name="password"
                    controlName="password"
                    labelName="Password :"
                    rules={{ required: "Password is required" }}
                    type={showPassword ? "text" : "password"}
                  />
                  <div
                    style={{
                      position: "absolute",
                      right: "40px",
                      top: "65%",
                      transform: "translateY(-50%)",
                      cursor: "pointer",
                    }}
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <HiOutlineEyeOff /> : <HiOutlineEye />}
                  </div>
                </div>
                {errors.password && (
                  <p style={{ color: "red" }}>
                    {String(errors.password.message)}
                  </p>
                )}
                <CheckboxLabel>
                  <input type="checkbox" />
                  RememberMe
                </CheckboxLabel>
                <ForgetPasswordLink href="">
                  Forget Password ?
                </ForgetPasswordLink>
                <Button type="submit" style={StyleButton}>
                  Sign In
                </Button>
              </form>
            </Card>
            <CenteredContainer>
              {session ? (
                <>
                  <p>Welcome, {session.user?.name ?? "User"}!</p>
                  <button onClick={handleLogout}>Sign out</button>
                </>
              ) : (
                <GoogleAuth onClick={handleLogin}>
                  <Image src={google} alt="google" height={35} width={35} />
                  Continue with Google
                </GoogleAuth>
              )}
            </CenteredContainer>
          </LoginCard>
        </LoginContainer>
      </LoginPage>
    </>
  );
};

export default Login;

export const LoginPage = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
`;

export const ImageContainer = styled.div`
  flex: 63%;
  display: flex;
  opacity: 0.7;
`;

export const LoginContainer = styled.div`
  flex: 38%;
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
  width: auto;
  height: auto;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 5px;
`;

export const inputStyle = {
  width: "350px",
  padding: "10px",
  border: "1px solid #ccc",
  borderRadius: "5px",
  margin: "10px",
};
export const StyleButton = {
  height: "40px",
  width: "100px",
  color: "white",
  fontSize: "16px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  border: "none",
  borderRadius: "8px",
  outline: "none",
  margin: "30px auto",
};

export const CheckboxLabel = styled.label`
  margin-left: 5px;
  justify-content: center;
`;

export const ForgetPasswordLink = styled.a`
  margin-left: 140px;
  color: blue;
`;

export const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const GoogleAuth = styled.button`
  margin-top: 40px;
  height: 50px;
  width: 250px;
  padding: 3px;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
`;
