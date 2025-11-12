const fs = require("fs");
const path = require("path");
const frameworkPath = path.resolve(__dirname, "..", "os-utils.js")
const OsUtils = require(frameworkPath);

OsUtils
  .changeDirectory(__dirname)
  .select("**/*.txt")
  .execute(file => `cat ${JSON.stringify(file)}`);

