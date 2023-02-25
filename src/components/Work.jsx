import React from "react";
import "./style/Work.css";
import PokeApi from "../images/PokeApi.png";
import RM from "../images/RickyAndMortyApi.png";
import WeatherApi from "../images/WeatherApi.png";

const Work = () => {
  return (
    <>
      
      <div id="work" className="work">
        <h2 className="work__title">My recent work</h2>
        <div className="work__items">
          <div className="works work--one">
            <a
              target="_blank"
              href="https://kaleidoscopic-kitten-5bcc70.netlify.app/"
            >
              <div className="img_container">
                <img src={PokeApi} alt="PokeApi" />
              </div>
            </a>
            <div className="work__textcontainer">
              <p className="work__text">POKEAPP</p>
            </div>
          </div>

          <div className="works work--two">
            <a
              target="_blank"
              href="https://comforting-shortbread-915132.netlify.app/"
            >
              <div className="img_container">
                <img src={WeatherApi} alt="WeatherApp"/>
              </div>
            </a>
            <div className="work__textcontainer">
              <p className="work__text">WEATHER API</p>
            </div>
          </div>

          <div className="works work--three">
            <a
              target="_blank"
              href="https://friendly-pavlova-cd4d98.netlify.app/"
            >
              <div className="img_container two">
                <img className="portfolio__image" src={RM} alt="PokeApi" />
              </div>
            </a>

            <div className="work__textcontainer">
              <p className="work__text">RICKY AND MORTY APP</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
