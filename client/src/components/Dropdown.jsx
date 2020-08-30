import React from "react";
import { Link } from "react-router-dom";

function Dropdown({ jobs }) {
  return (
    <>
      <div class="dropdown is-hoverable">
        <div class="dropdown-trigger">
          <button
            class="button is-text has-text-white"
            aria-haspopup="true"
            aria-controls="dropdown-menu3"
          >
            <span>Characters</span>
            <span class="icon is-small">
              <i class="fas fa-angle-down" aria-hidden="true"></i>
            </span>
          </button>
        </div>
        <div class="dropdown-menu" id="dropdown-menu3" role="menu">
          <div class="dropdown-content" style={{ width: 100 }}>
            {jobs.map((job) => (
              <Link
                to={`/characters/${job}`}
                class="dropdown-item has-text-white"
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
