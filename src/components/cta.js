import React from "react";

import "./cta.css";

export default props => (
  <div
    className={`cta
      `}
  >
    <div
      className={`
          cta__content
        `}
    >
      <h6 className="cta__statement">Your Creative Digital Experts</h6>

      <h3 className="cta__question">
        Find a consultant you found interesting?
      </h3>

      <a className="cta__button" href={props.contact}>
        Get in touch!
      </a>
    </div>
  </div>
);
