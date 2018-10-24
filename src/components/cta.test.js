import React from "react";
import renderer from "react-test-renderer";
import CTA from "./cta";

describe("CTA", () => {
  it("Renders Correctly", () => {
    const data = {
      site: {
        siteMetadata: {
          peterContact:
            "mailto:peter.knapp@sigma.se?Subject=Jag%20vill%20höra%20mer%20om%20UX"
        }
      }
    };

    const { peterContact } = data.site.siteMetadata;

    const tree = renderer.create(<CTA contact={peterContact} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
