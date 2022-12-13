import React from "react";
import "./FAQ.css";

const FAQ = () => {
  return (
    <>
      <main>
        <div className="ftr-header">
          <div className="header-text header-item">
            <span className="sb-gec">
              FAQ
              <hr />
            </span>
            <br />
          </div>
        </div>
        <div className="ftr-section faq-data  row d-flex">
          <ul>
            <div className="faq-list">
              <li>Whether only girls can participate in this event?</li>
              <p>
                {" "}
                No, both girls and boys can register and participate in the
                event.
              </p>
            </div>
            <div className="faq-list">
              <li>
                Will food and accommodation be provided for the participants?
              </li>
              <p>
                {" "}
                Food will be provided, but there will be no provision for
                accommodation.
              </p>
            </div>
            <div className="faq-list">
              <li>Only students can participate in BGB'22?</li>
              <p>
                {" "}
                No, both students and professionals can be a part of the event
                by registering.
              </p>
            </div>
            <div className="faq-list">
              <li>
                Are there any transportation facilities provided for the
                participants for reaching out to the college?
              </li>
              <p>
                {" "}
                Traveling facilities will be arranged from Sreekrishnapuram
                to the college.
              </p>
            </div>
          </ul>
        </div>
      </main>
    </>
  );
};

export default FAQ;
