import React from "react";
import img0 from "../../assets/images/0.png";

import "./Guest.css";

const Guest = () => {
  return (
    <>
      <div className="spkr-section">
        <div className="spk-header">Guest of honor</div>

        <div className="spk-abt d-flex guest-abt ">
          <div className="card">
            <img src={img0} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Ms. Mrunmai Joshi IAS</h5>
              <p className="card-text">District collector, Palakkad</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Guest;
