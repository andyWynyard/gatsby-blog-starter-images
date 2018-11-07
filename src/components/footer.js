import React from "react";

import "./footer.css";
export default props => (
  <div className="footer">
    <div className="footer__content">
      <p className="footer__question">Want to get to know us better?</p>
      <p className="footer__question--two">
        Interested in working on projects together?
      </p>
      <p className="footer__question--two">
        Or interested in our previous work?
      </p>
      <p className="footer__links-title">Check us out here</p>
      <p className="footer__links">
        <a href={props.work} className="footer__link">
          Projects
        </a>
        {"  "}/{"  "}
        <a href={props.homepage} className="footer__link">
          Maverick Homepage
        </a>
        {"  "}/{"  "}
        <a href={props.people} className="footer__link">
          Our People
        </a>
      </p>
    </div>
  </div>
);
