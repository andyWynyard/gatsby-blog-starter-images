import styled, { css } from "react-emotion";

const buttonStyle = props => css`
  border: none;
  background-color: inherit;
  margin: ${props.margin || 0};
  padding: ${props.padding || 0};
  width: auto;
  overflow: visible;
  font: inherit;
  outline: none;
  cursor: pointer;
  float: ${props.float};
  color: ${props.color};
  background-color: ${props.backgroundColor};
  border: ${props.border};
  border-radius: ${props.borderRadius};
`;

const anchorStyle = props => css`
  float: ${props.float};
  color: ${props.color};
  background-color: ${props.backgroundColor};
  cursor: pointer;
  /* If there is a diaplay property
        it will take that property, otherwise, 
        if there is no float property,
        it will be "inline-block" otherwise the 
        transition property wont work */
  display: ${props.display
    ? props.display
    : props.float
      ? "inline-block"
      : null};
  padding: 5px 20px;
  border-radius: 200px;
  margin: 0 ${props.marginSide || 0}px;
  text-decoration: none;
  line-height: 20px;
  transition: all 0.3s;
  :hover {
    transform: scale(1.05);
    box-shadow: 0 4px 4px -2px #eee;
  }
`;

export const Button = styled("button")`
  ${buttonStyle};
`;

export const Anchor = styled("a")`
  ${anchorStyle};
`;
