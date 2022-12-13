import React from "react";
import './About.css';

const About = () => {
  return (
    <>
      <main>
        <div className="header-section">
          <div className="header-text header-item">
            <span className="sb-gec">
              About the event
              <hr />
            </span>
            <br />
            <h1 className="abt-heading">
              Beyond Glass <br />
              Barriers
            </h1>
          </div>
        </div>
        <div className="about-section row">
         <div className="about-data col-lg-6 col-10">
            Beyond Glass Barriers 2022 (BGB’22) is a national workshop for women
            in engineering organized by the IEEE Malabar Subsection. The focus
            of BGB is to inspire, empower, and lead budding students and
            professionals in the area of engineering and technology. Eminent
            female personalities from engineering, academia, and industry will
            be joining us and delivering sessions on various topics, including
            professional leadership, personal branding, entrepreneurship, and
            mental health.
          </div>
        </div>
      </main>
    </>
  );
};

export default About;
