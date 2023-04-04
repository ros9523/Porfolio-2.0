import React from "react";
import "./style/Home.css";

const Home = () => {
  return (
    <div id="home" className="home">
      <div className="home__container">
        <h1 className="home__title">Rose's Portfolio</h1>
        <div className="home__btns">
          <a href="#contact">
            <button className="home__btn home__btn--hire">Hire Me</button>{" "}
          </a>
          <a href="CV Rose.pdf" download>
            <button className="home__btn home__btn--download">
              Download CV
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
