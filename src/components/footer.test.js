import React from "react";
import renderer from "react-test-renderer";
import Footer from "./footer";

describe("Footer", () => {
  it("Renders Correctly", () => {
    const data = {
      site: {
        siteMetadata: {
          homepage: "https://maverickbysigma.se/",
          people: "https://maverickbysigma.se/people/",
          work: "https://maverickbysigma.se/work/"
        }
      }
    };

    const { homepage, people, work } = data.site.siteMetadata;

    const tree = renderer
      .create(<Footer work={work} homepage={homepage} people={people} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
