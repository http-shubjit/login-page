import Image from "next/image";
import { Inter } from "next/font/google";
import Login from "./components/login/Login";
import { Button } from "infoviz-react-components";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Login />
    </>
  );
}
