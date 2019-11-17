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
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        "@": __dirname,
        src: path.join(__dirname, "src"),
      },
    },
  ],
}
