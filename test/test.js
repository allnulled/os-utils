const path = require("path");
const frameworkPath = path.resolve(__dirname, "..", "os-utils.js")
const OsUtils = require(frameworkPath);

const fileSelection = OsUtils.changeDirectory(__dirname).select("**/*.txt");

fileSelection.execute("`cat ${file}`");
fileSelection.execute(file => `cat ${file}`);
