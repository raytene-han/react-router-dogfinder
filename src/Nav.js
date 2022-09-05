import React from "react";
import { NavLink } from "react-router-dom";

function Nav({ dogNames }) {
  return (
    <nav className="NavBar">
      <NavLink to="/dogs"
        style={({ isActive }) => ({
          color: isActive ? "green" : "blue"
        })}>
        Dogs
      </NavLink>
      <br />
      {dogNames.map(dog => <div key={dog}>
        <NavLink to={`/dogs/${dog}`}
        style={({ isActive }) => ({
          color: isActive ? "green" : "blue"
        })}>
        {dog}
      </NavLink>
      <br/>
      </div>)}
    </nav>
  );
}

export default Nav;