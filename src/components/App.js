import { useEffect, useState } from "react";
import styled from "styled-components";

import { Navbar, Footer, Header, Routes, AdminRoutes } from ".";
import { reAuth, getCoops } from "../helpers/api";

function App() {
  const [admin, setAdmin] = useState(null);
  const [coops, setCoops] = useState([]);

  useEffect(() => {
    if (localStorage.token) {
      reAuth(setAdmin);
    }
  }, []);

  useEffect(() => {
    getCoops(setCoops, console.log);
  }, []);

  return (
    <AppContainer>
      <Header />
      <Navbar admin={admin} setAdmin={setAdmin} />
      <MainContainer>
        <Routes coops={coops} setCoops={setCoops} admin={admin} />
        <AdminRoutes
          admin={admin}
          coops={coops}
          setAdmin={setAdmin}
          setCoops={setCoops}
        />
      </MainContainer>
      <Footer />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  text-align: center;
  min-height: 100vh;
`;

const MainContainer = styled.main`
  min-height: calc(100vh - 29vh);
`;
