const metaConfig = require("./user-env/config")

module.exports = {
  siteMetadata: metaConfig,
  plugins: [
    "gatsby-plugin-catch-links",
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/posts`,
        name: `posts`,
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          `gatsby-remark-autolink-headers`,
          {
            resolve: `gatsby-remark-prismjs`,
            options: {},
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: metaConfig.title,
        short_name: metaConfig.title,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: metaConfig.icon,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/user-env/images`,
        name: `images`,
      },
    },

    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-sass`,
  ],
}
