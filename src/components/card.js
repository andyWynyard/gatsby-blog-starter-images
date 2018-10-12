import React from "react";

import { css } from "react-emotion";

export default props => (
  <div
    className={css`
      display: grid;
    `}
  >
    <img
      src={props.img}
      alt={props.img}
      className={css`
        width: 100%;
        border-radius: 4px;
        box-shadow: 1px 1px 3px #ddd;
      `}
    />
    <div>
      <h6
        className={css`
          float: right;
          margin-top: 4px;
        `}
      >
        {props.level}
      </h6>
      <h3>{props.name}</h3>
      <h5
        className={css`
          margin-bottom: 5px;
          text-transform: uppercase;
        `}
      >
        Core Strengths
      </h5>
      <p
        className={css`
          font-size: 10px;
        `}
      >
        {props.strengths.map(item => item + ", ")}
      </p>
    </div>
  </div>
);
