import React from "react";
import { NavLink } from "react-router-dom";


const linkStyles = {
    width: "100px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "blue",
    textDecoration: "none",
    color: "white",
  };

function Navbar() {

    return (
        <div>
        <NavLink to="/"
        exact
        style={linkStyles}
        activeStyle={{
            background: "darkblue",
          }}
        >
        Home
        </NavLink>
        <NavLink
        to="/search"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Search
      </NavLink>
      <NavLink
        to="/mypokemon"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        My Pokemon
      </NavLink>
      </div>
    )

}

export default Navbar