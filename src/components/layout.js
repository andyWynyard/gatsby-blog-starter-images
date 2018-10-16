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
            padding: 0 20px;
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

          <Link
            to={`/about/`}
            className={css`
              float: right;
              padding: 5px 20px;
              color: #50a1fd;
              margin: 0 10px;
              text-decoration: none;
              line-height: 20px;
              transition: all 0.3s;
            `}
          >
            About
          </Link>
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
