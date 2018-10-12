import React from "react";
import Layout from "../components/layout";
import { graphql, Link } from "gatsby";
import "./detail-card.css";

export default ({ data }) => {
  const post = data.markdownRemark;
  console.log("MD: ", post);

  return (
    <Layout>
      <div className={`detail-card`}>
        <Link className={`detail-card__home-link`} to={`/`}>
          {" "}
          Back to all our consultants
        </Link>
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
          <h1 className={`detail-card__heading1`}>{post.frontmatter.name}</h1>
          <a
            className={`detail-card__downloads`}
            href={post.frontmatter.portfolio_download}
          >
            Download Portfolio
          </a>
          <a
            className={`detail-card__downloads`}
            href={post.frontmatter.cv_download}
          >
            Download CV
          </a>{" "}
          <hr className={`detail-card__horizontal-line`} />
          <p className={`detail-card__quote`}>"{post.frontmatter.quote}"</p>
          <div className="detail-card__summary-keyskills">
            <div className="detail-card__summary">
              <h5 className="detail-card__summary--heading">Summary</h5>
              <p className="detail-card__summary--content">
                {post.frontmatter.summary}
              </p>
            </div>
            <div className="detail-card__keyskills">
              <h5 className="detail-card__keyskills--heading">Key Skills</h5>
              {post.frontmatter.keySkills.map(item => (
                <p className="detail-card__keyskills--content">{item}</p>
              ))}
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
      frontmatter {
        name
        email
        phone
        strengths
        level
        summary
        quote
        portfolio_download
        cv_download
        keySkills
        projects {
          name
          role
          date
          about
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
