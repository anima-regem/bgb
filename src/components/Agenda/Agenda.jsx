import React from "react";
import "./Agenda.css";
import img1 from "../../assets/images/1.png";
import img2 from "../../assets/images/2.png";
import img3 from "../../assets/images/3.png";

const Agenda = () => {
  return (
    <>
      <div className="agenda">
        <div className="agenda-heading">
          <div className="prv-header agnda-hdr">
            <span className="sb-gec">
              Agenda
              <hr />
            </span>
          </div>
        </div>
        <div className="agenda-contents">
          <div className="date-data">
            <h2>Dec 18</h2>
          </div>
          <div className="agenda-item">
            <p>09:00 am - 09:30 am (IST)</p>
            <h3>Reporting Time</h3>
          </div>

          <div className="agenda-item ">
            <p>09:30 am - 10:30 am (IST)</p>
            <div className="talk-sessions">
              <h3>Session 1 : Talk by Latha Raman</h3>
              <div className="talk-contents">
                Breaking the glass barriers -One knock at a time
              </div>
            </div>
          </div>

          <div className="agenda-item ">
            <p>10:30 am - 11:00 am (IST)</p>
            <h3>Introduction to the workshop</h3>
          </div>

          <div className="agenda-item ">
            <p>11:00 am - 12:00 am (IST)</p>
            <h3>Inauguration by Mrunmai Joshi IAS</h3>
          </div>

          <div className="agenda-item ">
            <p>12:00 pm - 01:30 pm (IST)</p>
            <div className="talk-sessions">
              <h3>Session 2: Dr.Rajani Ramachandran</h3>
              <div className="talk-contents">
                Theatre-based exploration of gender in STEM
              </div>
            </div>
          </div>
          <div className="agenda-item ">
            <p>01:30 pm - 02:30 pm (IST)</p>
            <h3>Lunch Break</h3>
          </div>

          <div className="agenda-item ">
            <p>02:30 pm - 03:30 pm (IST)</p>
            <div className="talk-sessions">
              <h3>Session 3: Talk by Sruthi P Nair</h3>
              <div className="talk-contents">
                Chasing dreams beyond barriers
              </div>
            </div>
          </div>
          <div className="agenda-item ">
            <p>03:30 pm - 04:30 pm (IST)</p>
            <div className="talk-sessions">
              <h3>Session 4: Talk by Rasmi U.</h3>
              <div className="talk-contents">
              Let's get real about barriers
              </div>
            </div>
          </div>
          <div className="agenda-item ">
            <p>04:30 pm (IST)</p>
            <h3>Winding up ceremony and feedback </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Agenda;
