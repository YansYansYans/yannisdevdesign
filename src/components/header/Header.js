import React from "react";
import Headroom from "react-headroom";
import "./Header.css";
import {greeting, workExperiences} from "../../portfolio";
import logo from "../../assets/images/logo1.png";

function Header() {
  const exp = workExperiences.viewExperiences;
  return (
    <Headroom>
      <header className="header">
        <a href="" className="logo">
          <img src={logo} className="logo-name"/>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon"></span>
        </label>
        <ul className="menu">
          <li>
            <a href="#skills">Profil</a>
          </li>
          <li>
            <a href="#competence">Compétences</a>
          </li>
          { exp === true &&
            <li>
              <a href="#experience">Expériences</a>
            </li>
          }
          <li>
            <a href="#projects">Projets</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
