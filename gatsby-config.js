module.exports = {
  // Customize me!
  siteMetadata: {
    company: "Mea Culpa",
    domain: "https://mea-culpa.net",
    defaultTitle: "Website Change Monitoring Products and Services",
    preamble:
      "We kill things",
    defaultDescription:
      "Yaaaaaay",
    postamble: "Think we can help your project? We'd love to hear from you:",
    contact: {
      email: "hello@mea-culpa.net",
    },
    menuLinks: [],
  },
  pathPrefix: "/aeiedil",
  plugins: [
    "gatsby-transformer-remark",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-remove-serviceworker",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./images/logo.png",
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-120162676-1",
      },
    },
  ],
};
