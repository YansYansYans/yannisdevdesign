import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import computer from "../../assets/images/pc.png";
import pen from "../../assets/images/pen.png";
import handleft from "../../assets/images/hand2.png";
import handright from "../../assets/images/hand.png";

export default function Greeting() {

  return (
    <Fade bottom duration={1000} distance="40px">
    <div className="greet-main" id="greeting">
      <div className="greeting-main">
        <div className="greeting-text-div">
          <div>
            <h1 className="greeting-text">
              {" "}
              {greeting.title}
              {" "}
              
            </h1>
            <p className="greeting-text-p subTitle">Moi c'est <span>Yannis</span>. Je suis <span>développeur</span> web, <span>webDesigner</span> et <span>formateur !</span></p>
            <SocialMedia />
            <div className="button-greeting-div">
              <a href="#contact">
                <button className="btn-contact" >
                  CONTACTEZ-MOI
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="greeting-image-div">
          <img className="img-main" alt="computer" src={computer}/>
          <img className="img-second" alt="hand" src={handleft}/>
          <img className="img-second2" alt="hand" src={handright}/>
        </div>
      </div>
    </div>
    </Fade>
  );
}
