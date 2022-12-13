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
          <div className="prv-header">
            <span className="sb-gec">
              Agenda
              <hr />
            </span>
          </div>
        </div>
        <div className="agenda-contents">
          <div className="date-data">
            <h2>Dec 12</h2>
          </div>
          <div className="agenda-item">
            <p>09:00 am - 09:30 am (IST)</p>
            <h3>Registration</h3>
          </div>

          <div className="agenda-item ">
            <p>09:30 am - 10:20 am (IST)</p>
            <div className="talk-sessions">
              <h3>Talk by Latha Raman</h3>
              <div className="talk-contents">
                “In my talk I shall try and share my experience as a person and
                as an architect trying to create socially responsible
                sensitively created living environs, on people who have inspired
                me; on the need to create support systems.. on what each of us
                can aspire to do to make the world a fairer place.”
              </div>
            </div>
          </div>

          <div className="agenda-item ">
            <p>10:20 am - 11:30 am (IST)</p>
            <h3>Start of workshop</h3>
          </div>

          <div className="agenda-item ">
            <p>11:30 am - 11:45 am (IST)</p>
            <h3>Break with high tea</h3>
          </div>

          <div className="agenda-item ">
            <p>11:45 am - 01:15 pm (IST)</p>
            <h3>Workshop</h3>
          </div>

          <div className="agenda-item ">
            <p>01:15 pm - 02:00 pm (IST)</p>
            <h3>Lunch Break</h3>
          </div>

          <div className="agenda-item ">
            <p>02:00 pm - 03:00 pm (IST)</p>
            <div className="talk-sessions">
              <h3>Talk by Sruthi</h3>
              <div className="talk-contents">
                'Chasing Dreams Beyond Barriers': An interactive session on the
                challenges women face while pursuing dreams and how to tackle
                them.
              </div>
            </div>
          </div>
          <div className="agenda-item ">
            <p>03:00 pm - 03:30 pm (IST)</p>
            <div className="talk-sessions">
              <h3>Session by Reshmi</h3>
              <div className="talk-contents">
                “In my talk I shall try and share my experience as a person and
                as an architect trying to create socially responsible
                sensitively created living environs, on people who have inspired
                me; on the need to create support systems.. on what each of us
                can aspire to do to make the world a fairer place.”
              </div>
            </div>
          </div>
          <div className="agenda-item ">
            <p>03:30 pm - 04:00 pm (IST)</p>
            <h3>Winding up ceremony and feedback</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Agenda;
