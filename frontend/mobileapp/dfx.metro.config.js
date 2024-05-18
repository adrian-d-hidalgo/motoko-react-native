const path = require("path");
const fs = require("fs");

/**
 * Sets variables needed to interact with canisters
 *
 * @param {String[]} canisterNames
 * @param {String} relativeRootPath
 */
function setCanisterVariables(canisterNames, relativeRootPath, prefix) {
  try {
    const network = process.env.DFX_NETWORK || "local";

    const canisters = require(path.resolve(relativeRootPath, ".dfx", network, "canister_ids.json"));

    const variables = [];

    for (const name of canisterNames) {
      const variableName = `${prefix}_${name.toUpperCase()}_CANISTER_ID`;

      process.env[variableName] = canisters[name][network];

      variables.push(variableName);
    }

    console.log("Variables set: ", variables);
  } catch (error) {
    throw new Error(error);
  }
}

/**
 * Copies declarations from root project
 *
 * @param {String[]} canisterNames
 * @param {String} relativeRootPath
 */
function copyDeclarations(canisterNames, relativeRootPath) {
  const DIRECTORY_PATH = path.resolve(relativeRootPath, "src/declarations");

  const dirents = fs.readdirSync(DIRECTORY_PATH, { withFileTypes: true });

  dirents
    .filter((dirent) => canisterNames.includes(dirent.name))
    .forEach((dirent) => {
      const source = path.resolve(dirent.path, dirent.name);
      const dest = path.resolve("./src/declarations", dirent.name);
      fs.cpSync(source, dest, { recursive: true });
    });
}

/**
 *
 *
 * @param {String} relativeRootPath Relative path to root project
 * @param {String} envPrefix Prefix for environment variables
 */
function bootstrap(relativeRootPath, envPrefix) {
  console.log("Bootstrapping canisters");
  const dfx = require(path.resolve(relativeRootPath, "dfx.json"));

  const canisterNames = Object.keys(dfx.canisters)
    .filter((key) => key !== "internet-identity")
    .filter((key) => dfx.canisters[key].type !== "assets");

  setCanisterVariables(canisterNames, relativeRootPath, envPrefix);
  copyDeclarations(canisterNames, relativeRootPath);
}

module.exports = {
  bootstrap,
};
