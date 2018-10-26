import React, { Component } from "react";

import Layout from "../components/layout";
import { graphql, Link } from "gatsby";
import "./detail-card.css";
import { Anchor } from "../components/button";
import CTA from "../components/cta";
import AllUX from "../components/allUXers";
import MissionCard from "../components/missionCard";

class DetailCard extends Component {
  state = {
    showMoreSummary: false
  };

  render() {
    const post = this.props.data.markdownRemark;
    const metadata = this.props.data.site.siteMetadata;

    return (
      <Layout>
        <div className={`detail-card`}>
          <Link className={`detail-card__home-link`} to={`/`}>
            {" "}
            Back to all our consultants
          </Link>
          <div className="detail-card__img-wrapper">
            <img
              className={`detail-card__image`}
              src={post.frontmatter.cover_image.childImageSharp.fluid.src}
              alt="This is me"
            />
          </div>

          <div className={`detail-card__content`}>
            <Anchor
              href={metadata.malinContact}
              float="right"
              color="white"
              backgroundColor="#00b460"
            >
              Get in touch
            </Anchor>
            <h1 className={`detail-card__heading1`}>{post.frontmatter.name}</h1>
            <a
              rel="noopener noreferrer"
              target="_blank"
              className={`detail-card__downloads`}
              href={post.frontmatter.portfolio_download}
            >
              Portfolio
            </a>
            <a
              className={`detail-card__downloads`}
              href={post.frontmatter.cv_download}
              download
            >
              Download CV
            </a>{" "}
            <br />
            <hr className={`detail-card__horizontal-line`} />
            <br />
            {post.frontmatter.quote.map((item, i) => (
              <p key={i} className={`detail-card__quote`}>
                "{item}"
              </p>
            ))}
            <div className="detail-card__summary-keyskills">
              <div className="detail-card__summary">
                <h4 className="detail-card__summary--heading">Summary</h4>

                <p className={`detail-card__summary--content`}>
                  {post.frontmatter.summary}
                </p>

                {/* <Button
                  className="detail-card__button"
                  onClick={() => {
                    this.setState(state => ({
                      showMoreSummary: !state.showMoreSummary
                    }));
                  }}
                  padding="3px 15px"
                  margin="7px auto"
                  border="1px solid #50a1fd"
                  borderRadius="500px"
                  color="#50a1fd"
                >
                  {this.state.showMoreSummary ? `Hide` : `Show More`}
                </Button> */}
              </div>
              <div className="detail-card__keyskills">
                <h4 className="detail-card__keyskills--heading">Key Skills</h4>
                {post.frontmatter.keySkills.map((item, i) => (
                  <p key={i} className="detail-card__keyskills--content">
                    {item}
                  </p>
                ))}
              </div>
            </div>
            <div>
              <h4 className={`detail-card__accolades-title`}>Projects</h4>
              {post.frontmatter.projects.map((item, i) => (
                <MissionCard key={i} data={item} />
              ))}
              {/* <h4 className={`detail-card__accolades-title`}>Experience</h4>
              {post.frontmatter.experience.map((item, i) => {
                return <MissionCard key={i} data={item} />;
              })} */}
              <h4 className={`detail-card__accolades-title`}>Education</h4>
              {post.frontmatter.education.map((item, i) => {
                return <MissionCard key={i} education data={item} />;
              })}
            </div>
          </div>
        </div>

        <CTA contact={metadata.peterContact} />
        <AllUX
          width="200"
          bgColor="#f7f7f7"
          data={this.props.data.allMarkdownRemark.edges}
        />
      </Layout>
    );
  }
}

export default DetailCard;

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
          logo {
            childImageSharp {
              fixed {
                base64
              }
              original {
                src
              }
            }
          }
          role
          date
          about
        }
        experience {
          name
          role
          date
          about
        }
        education {
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
    site {
      siteMetadata {
        people
        malinContact
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
