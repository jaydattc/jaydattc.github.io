require("dotenv").config()
const path = require("path")

module.exports = {
  siteMetadata: {
    title: "Jaydattsinh Champavat",
    description: "Web Developer and Designer",
    author: "@jaydattc",
    siteUrl: `https://jaydattc.github.io`,
  },
  plugins: [
    "gatsby-plugin-eslint",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-153546005-1`,
      },
    },
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        "@": __dirname,
        src: path.join(__dirname, "src"),
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Jaydattsinh Champavat",
        short_name: "Jaydatt",
        favicon: "static/favicon.png",
        start_url: `/`,
        background_color: `#1A202C`,
        theme_color: `#1A202C`,
        display: `minimal-ui`,
        theme_color_in_head: false,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
