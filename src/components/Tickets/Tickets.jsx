import React from "react";
import "./Tickets.css";
import ticketImg1 from "../../assets/images/ticket1.svg";
import ticketImg2 from "../../assets/images/ticket1.svg";


const Tickets = () => {
  return (
    <>
      <div className="tickets">

        <div className="ticket-header">
          <span className="sb-gec">
            Tickets and Pricing
            <hr />
          </span>
        </div>

        <div className="tickets-content">
          <a href="https://www.yepdesk.com/beynod-glass-barriers">

             <img src={ticketImg1} alt="" />
            <img src={ticketImg2} alt="" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Tickets;
