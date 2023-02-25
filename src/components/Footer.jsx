import React from "react";
import "./style/Footer.css";
import {
  FaYoutube,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaHome, 
  FaUserAlt, 
  FaBriefcase, 
  FaPhoneAlt
} from "react-icons/fa";
import { IconContext } from "react-icons";

const Footer = () => {
  return (
    <>
    <div className="footer">
      <ul className="footer__elements">
      <li className="element element--home"><FaHome/> Home</li>
      <li className="element element--about"><FaUserAlt/> About me</li>
      <li className="element element-work"><FaBriefcase/> Work</li>
      <li className="element element-contact"><FaPhoneAlt/> Contact</li>
      </ul>
      <ul className="footer__social--media">
        <li className="footer__icon">
          <IconContext.Provider value={{ className: "icon icon--Instagram"}}>
            <FaInstagram />
          </IconContext.Provider>
        </li>
        <li className="footer__icon">
          <IconContext.Provider value={{ className:"icon icon--Twitter" }}>
            <FaTwitter />
          </IconContext.Provider>
        </li>

        <li className="footer__icon">
          <IconContext.Provider value={{ className:"icon icon--Linkedin" }}>
            <FaLinkedin />
          </IconContext.Provider>
        </li>
        <li className="footer__icon">
          <IconContext.Provider value={{ className:"icon icon--Facebook" }}>
            <FaFacebook />
          </IconContext.Provider>
        </li>
        <li className="footer__icon">
          <IconContext.Provider value={{ className:"icon icon--youtube" }}>
            <FaYoutube />
          </IconContext.Provider>
        </li>
      </ul>
    </div>
    </>
  );
};

export default Footer;
