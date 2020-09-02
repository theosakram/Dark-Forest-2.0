import React from "react";

function FooterTab({ jobs }) {
  return (
    <>
      <div className="hero-foot">
        <nav className="tabs is-boxed is-fullwidth">
          <div className="container">
            <ul>
              {jobs.map((job) => (
                <li>
                  <a className="hoper has-text-white">{job}</a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}

export default FooterTab;
