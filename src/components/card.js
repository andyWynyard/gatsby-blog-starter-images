import React from "react";

import { css } from "react-emotion";

export default props => (
  <div
    className={css`
      display: grid;
    `}
  >
    <div
      className={css`
        width: 100%;
        margin: 2px;
        border-radius: 4px;
        height: 0;
        position: relative;
        overflow: hidden;
        padding-bottom: 75%;
        box-shadow: 1px 1px 10px #eee;
      `}
    >
      <img
        src={props.img}
        alt={props.img}
        className={css`
          width: 100%;
          height: auto;
        `}
      />
    </div>
    <div>
      <h6
        className={css`
          float: right;
          margin-top: 12px;
          font-weight: 400;
        `}
      >
        {props.level}
      </h6>
      <h4
        className={css`
          margin-top: 11px;
          margin-bottom: 10px;
        `}
      >
        {props.name}
      </h4>
      <h6
        className={css`
          margin-bottom: 0;
          text-transform: uppercase;
        `}
      >
        Core Strengths
      </h6>
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
