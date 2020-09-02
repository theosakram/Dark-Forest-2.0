import React from "react";
import Loader from "react-loader-spinner";

function Hero({ color }) {
  return (
    <>
      <section className="hero is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            <Loader type="TailSpin" color={color} height={100} width={100} />
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
