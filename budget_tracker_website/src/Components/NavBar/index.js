import React from "react";
import { Nav, NavLink, NavMenu } from "./NavBarElements";

const NavBar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="../Dashboard/Dashboard" activeStyle>
            Dashboard
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default NavBar;
