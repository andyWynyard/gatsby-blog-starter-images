import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import Footer from "./footer";

import { Anchor } from "./button";
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
        <div className={`layout`}>
          <Link to={`/`}>
            <img className={`layout__link`} src={logo} alt={logo} />
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
            work={metadata.work}
            homepage={metadata.homepage}
            people={metadata.people}
          />
        </div>
      );
    }}
  />
);
