import React from "react";
import { Link } from "react-router-dom";

function Dropdown({ jobs }) {
  return (
    <>
      <div className="dropdown is-hoverable">
        <div className="dropdown-trigger">
          <button
            className="button is-text has-text-white"
            aria-haspopup="true"
            aria-controls="dropdown-menu3"
          >
            <span>Characters</span>
            <span className="icon is-small">
              <i className="fas fa-angle-down" aria-hidden="true"></i>
            </span>
          </button>
        </div>
        <div className="dropdown-menu" id="dropdown-menu3" role="menu">
          <div className="dropdown-content" style={{ width: 100 }}>
            {jobs.map((job, index) => (
              <Link
                key={index}
                to={`/characters/${job}`}
                className="dropdown-item has-text-white"
              >
                {job}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Dropdown;
