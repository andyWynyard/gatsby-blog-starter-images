import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import { css } from "react-emotion";
import CTA from "../components/cta";
import AllUX from "../components/allUXers";
import "./index.css";

export default ({ data }) => {
  return (
    <Layout>
      <h1 className={`index__heading`}>
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
