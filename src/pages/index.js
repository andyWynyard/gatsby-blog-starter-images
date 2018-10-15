import React from "react";
import Layout from "../components/layout";
import Card from "../components/card";
import { graphql, Link } from "gatsby";
import { css } from "react-emotion";
import CTA from "../components/cta";
import AllUX from "../components/allUXers";

export default ({ data }) => {
  return (
    <Layout>
      <h1
        className={css`
          display: inline-block;
          margin: 80px 0;
          font-size: 35px;
        `}
      >
        Welcome, here you can view all our UX consultants
      </h1>
      <div>
        <AllUX data={data.allMarkdownRemark.edges} />
      </div>
      <CTA contact={data.site.siteMetadata.peterContact} />
    </Layout>
  );
};

export const query = graphql`
  query {
    site {
      siteMetadata {
        peterContact
      }
    }
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            name
            strengths
            level
            keySkills
            cover_image {
              publicURL
              childImageSharp {
                id
                fluid {
                  src
                }
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
