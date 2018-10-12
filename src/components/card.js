import React from "react";

import { css } from "react-emotion";

import "typeface-montserrat";

export default props => (
  <div
    className={css`
      display: grid;
      font-family: "typeface-montserrat";
    `}
  >
    <img
      src={props.img}
      alt={props.img}
      className={css`
        font-family: "typeface-montserrat";
        width: 100%;
        border-radius: 4px;
        box-shadow: 1px 1px 3px;
      `}
    />
    <div>
      <h6
        className={css`
          font-family: "typeface-montserrat";
          color: #555;
          float: right;
        `}
      >
        {props.level}
      </h6>
      <h4
        className={css`
          font-family: "typeface-montserrat";
        `}
      >
        {props.name}
      </h4>
      <h5
        className={css`
          font-family: "typeface-montserrat";
          margin-bottom: 5px;
        `}
      >
        Core Strengths
      </h5>
      <p
        className={css`
          font-family: "typeface-montserrat";
          font-size: 12px;
        `}
      >
        {props.strengths}
      </p>
    </div>
  </div>
);
