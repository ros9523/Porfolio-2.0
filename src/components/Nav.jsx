import React from "react";
import "./style/Nav.css";
import { AiOutlineCloseCircle, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="nav">
      <nav className="nav__portfolio">
        <ul className="nav__menu">
          <a href="#home">
            <li>Home</li>
          </a>
          <a href="#about">
            <li>About me</li>
          </a>
          <a href="#work">
            <li>Work</li>
          </a>
          <a href="#contact">
            <li>Contact</li>
          </a>
        </ul>
        <div className="nav__menuIcon">
          <AiOutlineMenu onClick={toggleMenu} size={30} color="white" />
        </div>
        {isOpen && (
          <ul className="nav__menu2">
            <AiOutlineCloseCircle
              onClick={toggleMenu}
              color="white"
              size={30}
            />
            <a href="#home">
              <li>Home</li>
            </a>
            <a href="#about">
              <li>About me</li>
            </a>
            <a href="#work">
              <li>Work</li>
            </a>
            <a href="#contact">
              <li>Contact</li>
            </a>
          </ul>
        )}
      </nav>
    </div>
  );
};

export default Nav;
