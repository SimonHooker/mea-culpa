module.exports = {
  // Customize me!
  siteMetadata: {
    company: "Mea Culpa",
    domain: "https://mea-culpa.net",
    defaultTitle: "Mea Culpa, Chamber of Aspects",
    preamble:
      "Chamber of Aspects",
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
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: 'mea-culpa.net',
        region: 'eu-west-1',
        protocol: 'https',
        hostname: 'www.mea-culpa.net'
      }
    }
  ],
};
