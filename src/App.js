import { Switch, Route } from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import { AboutPage, CoopsPage, AvailablePage, CoopPage } from "./pages";
import { Navbar, Footer, Header } from "./components";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <MainContainer>
        <Switch>
          <Route exact path="/">
            <AboutPage />
          </Route>
          <Route exact path="/coops">
            <CoopsPage />
          </Route>
          <Route path="/coops/:id/available-chicks">
            <AvailablePage />
          </Route>
          <Route exact path="/coops/:id">
            <CoopPage />
          </Route>
          <Route path="/available-chicks">
            <AvailablePage />
          </Route>
        </Switch>
      </MainContainer>
      <Footer />
    </div>
  );
}

export default App;

const MainContainer = styled.main`
  min-height: calc(100vh - 29vh);
`;
