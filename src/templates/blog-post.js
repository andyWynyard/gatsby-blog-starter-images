import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <div>
        <h1>{post.frontmatter.title}</h1>
        <img
          src={post.frontmatter.cover_image.childImageSharp.fluid.src}
          alt="This is me"
        />
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
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
    }
  }
`;
