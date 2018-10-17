import React from "react";
import { css } from "react-emotion";
import { Link, StaticQuery, graphql } from "gatsby";
import Footer from "./footer";
import { Anchor } from "./button";
import "../utils/sanitize.css";
import "./layout.css";

import logo from "../media/logo.png";

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            peterContact
            work
            homepage
            people
          }
        }
      }
    `}
    render={data => {
      const metadata = data.site.siteMetadata;

      return (
        <div
          className={css`
            margin: 0 auto;
            max-width: 900px;
            padding: 0 10px;
            padding-top: 50px;
          `}
        >
          <Link to={`/`}>
            <img
              className={css`
                width: 140px;
              `}
              src={logo}
              alt={logo}
            />
          </Link>
          <Anchor
            src={metadata.peterContact}
            float="right"
            color="white"
            backgroundColor="#50a1fd"
          >
            Lets Talk
          </Anchor>

          {children}
          <Footer
            work={metadata.people}
            homepage={metadata.homepage}
            people={metadata.people}
          />
        </div>
      );
    }}
  />
);
