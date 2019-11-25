require("dotenv").config()
const path = require("path")

module.exports = {
  siteMetadata: {
    title: "Jaydattsinh Champavat",
    description: "Web Developer and Designer",
    author: "@jaydattc",
  },
  plugins: [
    "gatsby-plugin-eslint",
    "gatsby-plugin-react-helmet",
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
      },
    },
  ],
}
