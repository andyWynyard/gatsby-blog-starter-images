import React from "react";
import { Anchor } from "./button";

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

      <Anchor src={props.contact} color="white" backgroundColor="#50a1fd">
        Lets Talk
      </Anchor>
    </div>
  </div>
);
