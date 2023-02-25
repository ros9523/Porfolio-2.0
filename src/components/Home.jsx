import React from "react";
import "./style/Home.css";


const Home = () => {
  return (
    
      <div id="home" className="home">
        <div className="home__container">
          <h1 className="home__title">Rose's Portfolio</h1>
          <div className="home__btns">
            <button className="btn">Hire Me</button>
            <button className="btn">Download CV</button>
          </div>
        </div>
      </div>
  
  );
};

export default Home;
