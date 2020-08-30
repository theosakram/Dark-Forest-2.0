import React from "react";
import { Link } from "react-router-dom";

function NavbarStart({ first, second }) {
  return (
    <>
      <div className="navbar-item">
        <a class="button is-text has-text-white">{first}</a>
        <Link
          to={`/${second.toLowerCase()}`}
          class="button is-text has-text-white"
        >
          {second}
        </Link>
      </div>
    </>
  );
}

export default NavbarStart;
