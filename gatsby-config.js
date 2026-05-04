module.exports = {
  siteMetadata: {
    title: `Joe Wang | Senior Product Designer`,
    description: `Hi, I'm Joe Wang, a designer with a background as a software engineer, working on agentic automation and workflow integrations at HubSpot. `,
    keywords: `Joe Wang, Joseph Wang, Joseph, Wang, Joe, developer, designer, front end, front-end, interaction design, web design, ux, ux engineer, software engineer, Northeastern, portfolio, product design, product designer`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-114961201-1',
        head: true,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
