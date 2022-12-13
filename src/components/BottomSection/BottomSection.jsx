import React from "react";
import "./BottomSection.css";

const BottomSection = () => {
  return (
    <div className="btm-section">
      <main>
        <div className="header-section">
          <div className="header-text header-item">
            <span className="sb-gec">
              About the organizers
              <hr />
            </span>
            <br />
            <h1 className="abt-heading">
              IEEE SB <br />
              GEC PALAKKAD
            </h1>
          </div>
        </div>
        <div className="about-section row">
          <div className="about-data col-lg-6 col-10">
            The IEEE Students branch of Government Engineering College Palakkad,
            work for providing an ideal platform for young minds to nourish
            their technical skills as an engineer by providing a technical home.
            The SB comprises actively working with an IAS, ComSoc, and Computer
            Society and also the WiE affinity group in association for achieving
            the objectives.
          </div>
        </div>
      </main>
      <div className="dashedLine"></div>
      <main>
        <div className="header-section">
          <div className="header-text header-item">
            <h1 className="abt-heading">
              IEEE MALABAR <br />
              Subsection
            </h1>
          </div>
        </div>
        <div className="about-section row">
          <div className="about-data col-lg-6 col-10">
            IEEE Malabar Subsection, the first subsection under Kerala Section
            has been formed for better networking between professional members
            and student members of IEEE in the northern districts of Kerala.
            viz. Palakkad, Malappuram, Kozhikode, Wayanad, Kannur and Kasargod.
            The aim of MSS is to conduct various student and professional
            activities like invited talks, student internships, workshops and
            the Flagship conferences.
          </div>
        </div>
      </main>
    </div>
  );
};

export default BottomSection;
