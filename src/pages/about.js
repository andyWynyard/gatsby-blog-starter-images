import React from "react";
import Layout from "../components/layout";
import { css } from "react-emotion";
import { graphql } from "gatsby";
import { Transition, CSSTransition } from "react-transition-group";

import "./about.css";

class About extends React.Component {
  state = {
    show: true,
    entered: false,
    name: "",
    showValidationMessage: false,
    showValidationButton: false
  };

  render() {
    const { show } = this.state;
    const { name, showValidationMessage, showValidationButton } = this.state;
    return (
      <Layout>
        <div
          className={css`
            max-width: 900px;
            margin: 100px auto;
          `}
        >
          <button
            onClick={() => {
              this.setState(state => ({
                show: !this.state.show
              }));
            }}
          >
            Show Box
          </button>

          <CSSTransition
            in={show}
            timeout={1000}
            classNames="star"
            unmountOnExit
          >
            <div
              className={css`
                width: 200px;
                height: 100px;
                border: solid 1px red;
              `}
            >
              This is a box
            </div>
          </CSSTransition>
        </div>
      </Layout>
    );
  }
}
export default About;

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
