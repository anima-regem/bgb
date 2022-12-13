import React from "react";
import img1 from "../../assets/images/1.png";
import img2 from "../../assets/images/2.png";
import img3 from "../../assets/images/3.png";
import img4 from "../../assets/images/4.png";
import "./Speaker.css";

const Speaker = () => {
  return (
    <>
      <div className="spkr-section">
        <div className="spk-header">Keynote Speakers</div>

        <div className="spk-abt d-flex ">
          <div className="card">
            <img src={img1} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Shruthi P Nair</h5>
              <p className="card-text">
                Product manager, Amazon product and excellence
              </p>
            </div>
          </div>
          <div className="card">
            <img src={img2} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Latha Raman Jaigopal</h5>
              <p className="card-text">
                Director, Project Management and Utilities, Inspiration
              </p>
            </div>
          </div>
          <div className="card">
            <img src={img3} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Reshmi U</h5>
              <p className="card-text">Assistant Engineer, Epoch Zero</p>
            </div>
          </div>
          <div className="card">
            <img src={img4} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Prof. Rajani Ramachandran</h5>
              <p className="card-text">
                Faculty, Department Of Psychology, University Of Calicut.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Speaker;
