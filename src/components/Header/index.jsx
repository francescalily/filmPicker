import React from "react";
import { NavLink, Outlet } from "react-router-dom";
const styles = ({ isActive }) => ({
  textDecoration: isActive ? "underline" : "none",
  marginRight: "40px",
  marginTop: "40px",
});

export default function Header() {
  return (
    <main>
      <header>
        <nav className="nav-bar">
          <NavLink to="/" style={styles}>
            Home
          </NavLink>
          <NavLink to="/films" style={styles}>
            Films
          </NavLink>
          <NavLink to="/search" style={styles}>
            Search
          </NavLink>
        </nav>
      </header>
      <Outlet />
    </main>
  );
}
