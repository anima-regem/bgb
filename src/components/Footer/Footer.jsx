import React from "react";
import "../Footer/Footer.css";
import insta from "../../assets/images/Vector.svg";
import likdin from '../../assets/images/Vector-1.svg'
import message from '../../assets/images/Vector-2.svg'


const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer_heading">
          <h1>Beyond Glass Barriers</h1>
          <div className="line"></div>
        </div>
        <div className="links">
          <div className="">
            <a className="link" href="">
              <img src={insta} alt="" />
              <p>ieeesbgecpalakkad</p>
            </a>
          </div>
          <div className="">
            <a className="link" href="">
              <img src={likdin} alt="" />
              <p>ieeesbgecpalakkad</p>
            </a>
          </div>
          <div className="">
            <a className="link" href="">
              <img src={message} alt="" />
              <p>ieee@gecskp.ac.in</p>
            </a>
          </div>
        </div>
        <div className="footer_bottom_line">

        </div>
        <div className="footer_copyright">
            <p className="copyright_p">Copyright © 2022 IEEE SB GECPKD. All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
