import React from "react";
import Layout from "../components/layout";
import { css } from "react-emotion";
import { graphql } from "gatsby";

import "./about.css";

class About extends React.Component {
  state = {
    show: false,
    entered: false,
    name: "",
    showValidationMessage: false,
    showValidationButton: false
  };

  render() {
    const { show } = this.state;

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

          <div
            className={css`
              width: 200px;
              height: 100px;
              border: solid 1px red;
            `}
          >
            This is a box
          </div>
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
