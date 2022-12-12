import React from "react";
import heroImage from "../../assets/images/hero.svg";
import './HomeSection.css';

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
            <h1 className="bgb-heading">Beyond Glass <br/>Barriers</h1>
          </div>
          <div className="hero-image-container header-item">
            <img src={heroImage} alt="hero" />
          </div>
        </div>
      </header>
    </>
  );
};

export default HomeSection;
