import { NavLink, useHistory } from "react-router-dom";
import { Icon } from "semantic-ui-react";
import styled from "styled-components";

export default function Navbar({ admin, setAdmin }) {
  const history = useHistory();
  function handleLogout() {
    setAdmin(null);
    localStorage.removeItem("token");
    history.push("/");
  }

  return (
    <Nav>
      <NavLink to="/">About</NavLink>
      <NavLink to="/available-chicks">Available</NavLink>
      <NavLink to="/coops">Coops</NavLink>
      {admin && (
        <>
          <NavLink to="/admin/add-coop">Add Coop</NavLink>
          <NavLink to="/admin/add-chicken">Add Chicken</NavLink>
          <Icon name="sign out alternate" onClick={handleLogout} />
        </>
      )}
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
