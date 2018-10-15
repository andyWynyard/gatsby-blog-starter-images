import React from "react";

import { css } from "react-emotion";

export const Button = props => (
  <button
    className={css`
      border: none;
      background-color: inherit;
      margin: 0;
      padding: 0;
      width: auto;
      overflow: visible;
      font: inherit;
      outline: none;
      cursor: pointer;
      float: ${props.float};
      color: ${props.color};
      background-color: ${props.backgroundColor};
    `}
  >
    {props.children}
  </button>
);

export const Anchor = props => (
  <a
    href={props.src}
    className={css`
      float: ${props.float};
      color: ${props.color};
      background-color: ${props.backgroundColor};
      cursor: pointer;

      padding: 5px 20px;
      border-radius: 200px;
      margin: 0 10px;
      text-decoration: none;
      line-height: 20px;
      transition: all 0.3s;
      :hover {
        transform: scale(1.05);
        box-shadow: 0 4px 4px -2px #eee;
      }
    `}
  >
    {props.children}
  </a>
);
