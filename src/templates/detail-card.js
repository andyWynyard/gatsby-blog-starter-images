import React from "react";
import Layout from "../components/layout";
import { graphql, Link } from "gatsby";
import { css } from "react-emotion";
import "./detail-card.css";

export default ({ data }) => {
  const post = data.markdownRemark;

  return (
    <Layout>
      <Link className={`detail-card__home-link`} to={`/`}>
        Back to all our consultants
      </Link>
      <div className={`detail-card`}>
        <img
          className={`detail-card__image`}
          src={post.frontmatter.cover_image.childImageSharp.fluid.src}
          alt="This is me"
        />

        <div className={`detail-card-content`}>
          <a
            href={`mailto:${
              post.frontmatter.email
            }?Subject=Jag%20vill%20höra%20mer%20om%20UX`}
            className={`detail-card__contact-button`}
          >
            Get in touch
          </a>
          <h3 className={`detail-card__heading1`}>
            Name: {post.frontmatter.name}
          </h3>
          <hr />
          <p className={`detail-card__quote`}>"{post.frontmatter.quote}"</p>

          <div className="detail-card__summary-keyskills">
            <div className="detail-card__summary">
              <h5>Summary</h5>
              {}
            </div>
            <div className="detail-card__keyskills">
              <h5>Key Skills</h5>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        name
        email
        phone
        strengths
        level
        quote
        projects {
          name
          role
        }
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
