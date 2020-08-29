import React from "react";
import { Navbar } from "../components";

function Home() {
  return (
    <>
      <section className="hero is-fullheight">
        <div className="hero-head">
          <Navbar />
        </div>
        <div className="hero-body">
          <video autoPlay muted loop id="myVideo">
            <source
              src="https://d2mnoz07ua7r8n.cloudfront.net/resources_en/images/main.mp4?v=01"
              type="video/mp4"
            />
          </video>
          <div className="container has-text-centered">
            <div className="columns">
              <div className="column is-one-third">
                <h1
                  className="title"
                  style={{ marginTop: "35%", color: "#186091" }}
                >
                  {" "}
                  D A R K F O R E S T
                </h1>
              </div>
              <div className="column is-one-quarter">
                <h1
                  className="title"
                  style={{ marginTop: "47.5%", color: "#186091" }}
                >
                  {" "}
                  X
                </h1>
                <button style={{ marginTop: "65%" }}>DISCLAIMER</button>
              </div>
              <div className="column">
                <img
                  src="https://d2mnoz07ua7r8n.cloudfront.net/resources_en/images/mainTit.png?v=01"
                  alt="King's Raid Logo"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
