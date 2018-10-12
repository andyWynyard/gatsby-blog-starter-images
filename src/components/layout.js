import React from "react";
import { css } from "react-emotion";
import { Link, StaticQuery, graphql } from "gatsby";
import Footer from "./footer";

import logo from "../media/logo.png";

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => {
      console.log("Data: ", data);

      return (
        <div
          className={css`
            margin: 0 auto;
            max-width: 920px;
            padding: 0 20px;

            padding-top: 50px;
          `}
        >
          <Link to={`/`}>
            <img
              className={css`
                width: 30%;
              `}
              src={logo}
              alt={logo}
            />
          </Link>

          <a
            href="mailto:peter.knapp@sigma.se?Subject=Jag%20vill%20höra%20mer%20om%20UX"
            target="_top"
            className={css`
              float: right;
              color: blue;
              border: 1px solid blue;
              padding: 3px 14px;
              border-radius: 3px;
              margin: 0 10px;
              text-decoration: none;
              line-height: 20px;
            `}
          >
            Lets Talk
          </a>
          <Link
            to={`/about/`}
            className={css`
              float: right;
              padding: 3px 14px;
              color: blue;
              margin: 0 10px;
              text-decoration: none;
              line-height: 20px;
            `}
          >
            About
          </Link>
          {children}
          <Footer />
        </div>
      );
    }}
  />
);
