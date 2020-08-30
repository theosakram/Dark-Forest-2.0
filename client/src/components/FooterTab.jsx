import React from "react";

function FooterTab({ jobs }) {
  return (
    <>
      <div class="hero-foot">
        <nav class="tabs is-boxed is-fullwidth">
          <div class="container">
            <ul>
              {jobs.map((job) => (
                <li>
                  <a class="hoper has-text-white">{job}</a>
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
