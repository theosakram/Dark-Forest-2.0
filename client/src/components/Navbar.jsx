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
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <Link to="/" class="navbar-item">
            <h1 className="title has-text-white">DF</h1>
          </Link>
        </div>

        <div class="navbar-menu">
          <div class="navbar-start">
            <div className="navbar-item">
              <a class="button is-text has-text-white"> Documentation </a>
              <Dropdown jobs={jobs} />
            </div>
          </div>

          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <a class="button is-text has-text-white no-style">
                  <i class="fas fa-volume-off"></i>
                </a>
                <a class="button is-text has-text-white no-style">
                  <strong>Sign up</strong>
                </a>
                <a class="button is-text has-text-white no-style">Log in</a>
                <a class="button is-text has-text-white no-style">Disclaimer</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
