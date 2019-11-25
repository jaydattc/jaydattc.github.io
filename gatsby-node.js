const path = require("path")
const fs = require("fs-extra")

// write custom domain CNAME file for gh-pages
exports.onPostBuild = async function() {
  await fs.writeFile(path.join(__dirname, "public/CNAME"), "www.jaydatt.me")
}
