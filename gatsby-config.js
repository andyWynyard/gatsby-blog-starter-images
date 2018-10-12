module.exports = {
  siteMetadata: {
    title: `Maverick UX`,
    homepage: "https://maverickbysigma.se/",
    people: "https://maverickbysigma.se/people/",
    work: "https://maverickbysigma.se/work/"
  },
  plugins: [
    `gatsby-remark-copy-linked-files`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-remark-images`,
      options: {
        maxWidth: 1080
      }
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/blog/`
      }
    }
  ]
};
