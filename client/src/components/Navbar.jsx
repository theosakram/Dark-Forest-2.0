import React from "react";
import { Link, useLocation } from "react-router-dom";
import Dropdown from "./Dropdown";

function Navbar() {
  const { pathname } = useLocation();

  const jobs = [
    "Knight",
    "Warrior",
    "Assassin",
    "Archer",
    "Mechanic",
    "Wizard",
    "Priest",
  ];

  return (
    <>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            <h1 className="title has-text-white">DF</h1>
          </Link>
        </div>

        <div className="navbar-menu">
          <div className="navbar-start">
            <div className="navbar-item">
              <a className="button is-text has-text-white"> Documentation </a>
              <Dropdown jobs={jobs} />
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-text has-text-white no-style">
                  <i className="fas fa-volume-off"></i>
                </a>
                <a className="button is-text has-text-white no-style">
                  <strong>Sign up</strong>
                </a>
                <a className="button is-text has-text-white no-style">Log in</a>
                <a className="button is-text has-text-white no-style">
                  Disclaimer
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
