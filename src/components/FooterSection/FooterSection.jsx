import React from "react";
import "./FooterSection.css";

const FooterSection = () => {
  return (
    <>
      <main>
        <div className="header-section">
          <div className="header-text header-item">
            <span className="sb-gec">
              Reach Us
              <hr />
            </span>
            <br />
          </div>
        </div>
        <div className="ftr-section row d-flex">
          <div className="reach-card">
            <div className="reach-head">Contact details:</div>
            <div className="contact-details">
              <br />
              <p>Dr.Sabiq P V: 9496286670</p>
              <p>Dr.Vinita Chellappan: 9495070478</p>
              <p>Sreelakshmi Ram B: 8138923435</p>
            </div>
          </div>
          <div className="reach-card">
            <div className="reach-head">Location:</div>
            <div className="reach-head">
              Government Engineering College,
              <br /> Sreekrishnapuram
            </div>
            <div className="contact-details">
              <br />
              <p>Dr.Sabiq P V: 9496286670</p>
              <p>Dr.Vinita Chellappan: 9495070478</p>
              <p>Sreelakshmi Ram B: 8138923435</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default FooterSection;
