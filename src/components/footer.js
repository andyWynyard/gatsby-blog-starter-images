import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";

// import { css } from "react-emotion";
import "./footer.css";
export default () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            people
            work
            homepage
          }
        }
      }
    `}
    render={data => (
      <div className="footer">
        <div className="footer__content">
          <p className="footer__question">Want to get to know us better?</p>
          <p className="footer__question--two">
            Interested in working on projects together?
          </p>
          <p className="footer__question--two">
            Or interested in our previous work?
          </p>
          <p className="footer__links-title">Check us out here</p>
          <p className="footer__links">
            <a href={data.site.siteMetadata.work} className="footer__link">
              Projects
            </a>
            {"  "}/{"  "}
            <a href={data.site.siteMetadata.homepage} className="footer__link">
              Maverick Homepage
            </a>
            {"  "}/{"  "}
            <a href={data.site.siteMetadata.people} className="footer__link">
              Our People
            </a>
          </p>
        </div>
      </div>
    )}
  />
);
