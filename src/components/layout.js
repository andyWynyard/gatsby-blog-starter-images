import React from "react";
import { css } from "react-emotion";
import { Link, StaticQuery, graphql } from "gatsby";
import { rhythm } from "../utils/typography";

import logo from "../media/logo.png";
import "typeface-montserrat";

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
    render={data => (
      <div
        className={css`
          font-family: "typeface-montserrat";
          margin: 0 auto;
          max-width: 900px;
          padding: ${rhythm(2)};
          padding-top: ${rhythm(1.5)};
        `}
      >
        <Link to={`/`}>
          <img
            className={css`
              width: 30%;
            `}
            src={logo}
            alt=""
          />
        </Link>

        <a
          href="mailto:peter.knapp@sigma.se?Subject=Jag%20vill%20höra%20mer%20om%20UX"
          target="_top"
          className={css`
            font-family: "typeface-montserrat";

            float: right;
            color: blue;
            border: 1px solid blue;
            padding: 4px 10px;
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
            font-family: "typeface-montserrat";

            float: right;
            padding: 4px 7px;
            color: blue;
            margin: 0 10px;
            text-decoration: none;
            line-height: 20px;
          `}
        >
          About
        </Link>
        {children}
      </div>
    )}
  />
);
