import React from "react";
import "./PrevEditions.css";
import arrowImg from "../../assets/images/arrow.svg";

const PrevEditions = () => {
  return (
    <div className="previous-editions">
      <div className="prv-header">
        <span className="sb-gec">
          Previous Editions
          <hr />
        </span>
      </div>
      <div className="prev-abt">
        <div className="prev-card">
          <div className="prev-card-text">
            <p className="prev-head">BGB'20</p>
            <a href="https://youtu.be/-H3ON2fzOAU">
              https://youtu.be/-H3ON2fzOAU
            </a>
          </div>
          <div className="prev-img">
            <img src={arrowImg} alt="" />
          </div>
        </div>
        <div className="prev-card">
          <div className="prev-card-text">
            <p className="prev-head">BGB'21</p>
            <a href="https://youtu.be/UUJSaP42b7Y">
              https://youtu.be/UUJSaP42b7Y
            </a>
          </div>
          <div className="prev-img">
            <img src={arrowImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrevEditions;
