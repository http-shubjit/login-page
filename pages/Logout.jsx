import React from "react";
import { useRouter } from "next/router";
import styled from "styled-components";

const Logout = ({ userInput }) => {
  const router = useRouter();
  console.log("Logout componenrt" + userInput)
  const handleLogout = () => {

    router.push("Login");
  };

  return (
    <DashboardContainer>
      <Header>
        <h1>Dashboard</h1>
        <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
      </Header>
      <MainContent>
        <ChartSection>
          <h2>Charts</h2>
          {/* <pre>{JSON.stringify(userInput, null, 2)}</pre> */}
        </ChartSection>
        <TableSection>
          {/* Placeholder for tables or data grids */}
          <h2>Data Table</h2>
        </TableSection>
        {/* Add more sections as needed */}
      </MainContent>
    </DashboardContainer>
  );
};

const DashboardContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  background-color: #333;
  color: white;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoutButton = styled.button`
  background-color: #fff;
  color: #333;
  border: none;
  padding: 10px;
  cursor: pointer;
  font-size: 16px;
`;

const MainContent = styled.div`
  display: flex;
  flex: 1;
`;

const ChartSection = styled.div`
  flex: 1;
  padding: 20px;
  background-color: #f0f0f0;
`;

const TableSection = styled.div`
  flex: 1;
  padding: 20px;
  background-color: #e0e0e0;
`;

export default Logout;
