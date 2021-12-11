import { NavLink } from "react-router-dom";
import styled from "styled-components";

export default function Navbar() {
  return (
    <Nav>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/available-chicks">Available</NavLink>
      <NavLink to="/coops">Coops</NavLink>
      <NavLink to="/logout">Logout</NavLink>
    </Nav>
  );
}

const Nav = styled.nav`
  height: 4vh;
  width: 100vw;
  background-color: black;
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
