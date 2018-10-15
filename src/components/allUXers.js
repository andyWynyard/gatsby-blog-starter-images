import React from "react";
import Card from "./card";
import CTA from "./cta";
import { Link } from "gatsby";
import { css } from "react-emotion";

export default props => {
  console.log(props);
  return (
    <div
      className={css`
        background-color: ${props.bgColor};
        width: 100vw;
        position: relative;
        left: 50%;
        right: 50%;
        margin-left: -50vw;
        margin-right: -50vw;
      `}
    >
      <div
        className={css`
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          grid-gap: 18px;
          justify-content: center;
          margin: 0 auto;

          padding-bottom: 100px;
          padding-top: 20px;
          max-width: 910px;
        `}
      >
        {props.data.map(item => {
          return (
            <div key={item.node.id}>
              <Link
                to={item.node.fields.slug}
                className={css`
                  text-decoration: none;
                  color: inherit;
                `}
              >
                <Card
                  strengths={item.node.frontmatter.strengths}
                  level={item.node.frontmatter.level}
                  name={item.node.frontmatter.name}
                  img={
                    item.node.frontmatter.cover_image.childImageSharp.fluid.src
                  }
                />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};