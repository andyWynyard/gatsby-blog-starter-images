import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import styled, { createGlobalStyle } from "styled-components";
import "typeface-montserrat";
import Footer from "./footer";
import { Anchor } from "./button";
import logo from "../media/logo.png";

const GlobalStyle = createGlobalStyle`

  html {
    font-family: "typeface-montserrat";
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
  }
  a {
    text-decoration: none;
  }
  h1 {
    font-size: 3.3rem;
    line-height:4.1rem;
  }
  h2 {
    font-size: 2.2rem;
    line-height: 3.1rem;
  }
  h3 {
    font-size: 1.8rem;
    line-height: 2.6rem;
  }
  h4 {
    font-size: 1.5rem;
    line-height: 2.3rem;
  }
  h5 {
    font-size: 1.6rem;
    line-height: 2rem;
  }
  p {
    font-size: 1.5rem;
    line-height: 2.3rem;
  }


`;

const StyledLayout = styled.div`
  margin: 0 auto;
  max-width: 900px;
  padding: 0 15px;
  padding-top: 50px;
`;

const StyledImg = styled.img`
  width: 140px;
`;

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
        <StyledLayout>
          <GlobalStyle />
          <Link to={`/`}>
            <StyledImg src={logo} alt={logo} />
          </Link>
          <Anchor
            href={metadata.peterContact}
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
        </StyledLayout>
      );
    }}
  />
);
