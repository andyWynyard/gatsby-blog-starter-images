import React from "react";
import { css } from "react-emotion";
import { Link, StaticQuery, graphql } from "gatsby";
import Footer from "./footer";

import CTA from "./cta";

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
            max-width: 920px;
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

          <a
            href={metadata.peterContact}
            target="_top"
            className={css`
              float: right;
              color: white;
              background-color: #50a1fd;
              /* background-image: linear-gradient(to right, #50a1fd, #00e2fa); */
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
            Lets Talk
          </a>
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

              :hover {
                /* transform: scale(1.1);
                text-shadow: 0 2px 2px #50a1fd; */
              }
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
