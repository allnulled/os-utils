const { execSync } = require("child_process");
const path = require("path");
const glob = require("glob");

const createSyncFunction = function(...args) {
  const callback = new Function(...args);
  return callback;
}

const FileList = class extends Array {

  execute(mapperInput) {
    const mapper = typeof mapperInput === "string" ? createSyncFunction("file", "index", mapperInput) : mapperInput;
    if (typeof mapper === "function") {
      for (const file of this) {
        const cmd = mapper(file);
        if (typeof cmd === "string" && cmd.trim()) {
          execSync(cmd, { stdio: "inherit" });
        }
      }
    } else {
      throw new Error("Parameter «mapper» must be a function or a string on «FileList.prototype.execute»");
    }
    return this;
  }

};

const OsUtils = class {

  static changeDirectory(folder) {
    process.chdir(folder);
    return this;
  }

  static resolve(...subpaths) {
    return path.resolve(process.cwd(), ...subpaths);
  }

  static select(globPattern = "*") {
    const globPath = this.resolve(globPattern);
    const files = glob.globSync(globPath, { nodir: true });
    return new FileList(...files);
  }

  static execute(cmd) {
    execSync(cmd, { stdio: "inherit" });
  }

};

module.exports = OsUtils;
