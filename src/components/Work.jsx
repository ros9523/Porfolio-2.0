import React from "react";
import "./style/Work.css";
import PokeApi from "../images/PokeApi.png";
import RM from "../images/RickyAndMortyApi.png";
import WeatherApi from "../images/WeatherApi.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import BG from "../images/Background.svg";

import { A11y, Navigation, Pagination, Scrollbar } from "swiper";

const Work = () => {
  return (
    <div id= "work" className="work">
      <h2 className="work__title">My recent work</h2>
      {/* <div className="img__container">
        <img className="img__bg" src={BG}></img>
      </div> */}
      <div className="works">
        {/* <div className="swiper-button image-swiper-button-next">
          <FaArrowRight />
        </div>
        <div className="swiper-button image-swiper-button-prev">
          <FaArrowLeft />
        </div> */}
        <Swiper
          className="works__swiper"
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={0}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          navigation={{
            nextEl: ".image-swiper-button-next",
            prevEl: ".image-swiper-button-prev",
          }}
          pagination={{ clickable: true }}
        >
          <SwiperSlide className="works__swiperslide">
            <a
              target="blank"
              href="https://kaleidoscopic-kitten-5bcc70.netlify.app/"
            >
              <div className="image__container">
                <img src={PokeApi} alt="PokeApi" />
                <span>POKEAPI</span>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide className="works_swiperslide">
            <a
              target="_blank"
              href="https://comforting-shortbread-915132.netlify.app/"
            >
              <div className="image__container">
                <img src={WeatherApi} alt="WeatherApp" />
                <span>WEATHER APP</span>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide className="works_swiperslide">
            <a
              target="_blank"
              href="https://friendly-pavlova-cd4d98.netlify.app/"
            >
              <div className="image__container">
                <img className="portfolio__image" src={RM} alt="PokeApi" />
                RICKY AND MORTY
              </div>
            </a>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Work;
