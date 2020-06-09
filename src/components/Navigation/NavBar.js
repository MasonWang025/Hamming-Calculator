import React from "react";
import NavBarItem from "./NavBarItem";
import { useLocation } from "react-router-dom";

export default function NavBar() {
  const path = useLocation().pathname;
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <b className="navbar-brand">ECC Magic</b>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarColor03"
          aria-controls="navbarColor03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarColor03">
          <ul className="navbar-nav mr-auto">
            <NavBarItem
              title="SEC/DEC"
              active={path === "/sec-ded"}
              to="/sec-ded"
            />
            <NavBarItem
              title="Encode"
              active={path === "/encode"}
              to="/encode"
            />
            <NavBarItem
              title="Analysis"
              active={path === "/analysis"}
              to="/analysis"
            />
          </ul>
        </div>
      </nav>
    </div>
  );
}
