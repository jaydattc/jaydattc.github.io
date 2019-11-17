const path = require("path")
const fs = require("fs-extra")

exports.onPostBuild = async function() {
  try {
    await fs.copy(
      path.join(__dirname, "public"),
      path.join(__dirname, "/docs/")
    )
  } catch (err) {
    if (err) {
      console.error(err)
    } else {
      console.log("copied to docs!")
    }
  }
}
