import React from "react";
import "./style/Footer.css";
import {
  FaYoutube,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
  FaHome,
  FaUserAlt,
  FaBriefcase,
  FaPhoneAlt,
} from "react-icons/fa";

import {} from "react-icons/";

const Footer = () => {
  return (
    <div className="footer">
      <ul className="footer__elements">
        <a href="#home">
          <li className="footer__options">
            <FaHome />
            Home
          </li>
        </a>
        <a href="#about">
          <li className="footer__options">
            <FaUserAlt />
            About me
          </li>
        </a>
        <a href="#work">
          <li className="footer__options">
            <FaBriefcase />
            Work
          </li>
        </a>
        <a href="#contact">
          <li className="footer__options">
            <FaPhoneAlt />
            Contact
          </li>
        </a>
      </ul>
      <ul className="footer__social--media">
        <li className="footer__icon">
          <span className="icon__circle icon__circle--INS">
            <FaInstagram className="icons icons--INS" color="white" size={30} />
          </span>
        </li>
        <li className="footer__icon">
          <span className="icon__circle icon__circle--twitter">
            <FaTwitter
              className="icons icons--twitter"
              color="white"
              size={25}
            />
          </span>
        </li>

        <li className="footer__icon">
          <span className="icon__circle icon__circle--IN">
            <FaLinkedinIn className="icons icons--IN" color="white" size={25} />
          </span>
        </li>
        <li className="footer__icon">
          <span className="icon__circle icon__circle--FB">
            <FaFacebookF className="icons icons--FB" color="white" size={25} />
          </span>
        </li>
        <li className="footer__icon">
          <span className="icon__circle icon__circle--YT ">
            <FaYoutube className="icons icons--YT" color="white" size={25} />
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
