import React from "react";
import Layout from "../components/layout";
import Card from "../components/card";
import { graphql, Link } from "gatsby";
import { css } from "react-emotion";

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
      <div
        className={css`
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          grid-gap: 18px;
          justify-content: space-between;
        `}
      >
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link
              to={node.fields.slug}
              className={css`
                text-decoration: none;
                color: inherit;
              `}
            >
              <Card
                strengths={node.frontmatter.strengths}
                level={node.frontmatter.level}
                name={node.frontmatter.name}
                img={node.frontmatter.cover_image.childImageSharp.fluid.src}
              />
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
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
