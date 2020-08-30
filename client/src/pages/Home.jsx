import React from "react";
import { Navbar } from "../components";

function Home() {
  return (
    <>
      <div className="hero">
        <video autoPlay muted loop id="myVideo">
          <source
            src="https://d2mnoz07ua7r8n.cloudfront.net/resources_en/images/main.mp4?v=01"
            type="video/mp4"
          />
        </video>
        <div className="container">
          <div className="columns">
            <div className="column is-one-third">
              <img
                src="./df-logo-2.png"
                alt=""
                style={{
                  marginTop: "20vh",
                  width: 300,
                  height: 300,
                }}
              />
            </div>
            <div className="column is-one-quarter">
              <h1
                className="title has-text-white"
                style={{
                  marginTop: "42.5vh",
                  textShadow: "5px 5px 10px #186091",
                  fontSize: 48,
                }}
              >
                X
              </h1>
            </div>
            <div className="column">
              <img
                style={{ marginTop: "20vh" }}
                src="https://d2mnoz07ua7r8n.cloudfront.net/resources_en/images/mainTit.png?v=01"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
