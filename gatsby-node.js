const path = require("path")
const fs = require("fs-extra")

// NO LONGER REQUIRED AFTER MIGRATING TO zeit.co
// write custom domain CNAME file for gh-pages
// exports.onPostBuild = async function() {
//   await fs.writeFile(path.join(__dirname, "public/CNAME"), "www.jaydatt.me")
// }
