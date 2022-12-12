import React, { useState } from "react";
import heroImage from "../../assets/images/hero.svg";
import cardsImage from "../../assets/images/cards.svg";
import ellipseBg from "../../assets/images/round_gradient.svg";
import "./HomeSection.css";
import Coundown from "./Countdown/Countdown";

const HomeSection = () => {
  return (
    <>
      <header>
        <div className="header-section">
          <div className="header-text header-item">
            <span className="sb-gec">
              IEEE SB GEC PALAKKAD | IEEE Malabar Subsection
            </span>
            <br />
            <span className="presents">Presents,</span>
            <br />
            <h1 className="bgb-heading">
              Beyond Glass <br />
              Barriers
            </h1>
          </div>
          <div className="hero-image-container header-item">
            <img src={heroImage} alt="hero" />
          </div>
        </div>
        <div className="header-bottom">
          <div className="header-more-text">
            Empower and lead budding students and
            <br />
            pofessionals in the area of Engineering
            <br />
            and Technology
            <div className="countdown">
              <Coundown />
            </div>
          </div>

          <div className="header-bottom-cards">
            <img src={ellipseBg} alt="" className="ellipseBg" />
            <img src={cardsImage} alt="cards" />
          </div>
        </div>
      </header>
    </>
  );
};

export default HomeSection;
