import React from "react";
import "./FooterSection.css";

const FooterSection = () => {
  return (
    <>
      <main>
        <div className="ftr-header">
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
              <p>Government Engineering College,</p>
              <p>Sreekrishnapuram</p>
            </div>
            <div className="contact-details">
              <p>Government Engineering College Rd, </p>
              <p>Mannampatta, Sreekrishnapuram,</p>
              <p>Kerala - 678633</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default FooterSection;
