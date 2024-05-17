// import { polyfill as polyfillBase64 } from "react-native-polyfill-globals/src/base64";
import { polyfill as polyfillCrypto } from "react-native-polyfill-globals/src/crypto";
import { polyfill as polyfillEncoding } from "react-native-polyfill-globals/src/encoding";
// import { polyfill as polyfillFetch } from "react-native-polyfill-globals/src/fetch";
// import { polyfill as polyfillReadableStream } from "react-native-polyfill-globals/src/readable-stream";
import { polyfill as polyfillURL } from "react-native-polyfill-globals/src/url";

// polyfillBase64();
polyfillCrypto();
polyfillEncoding();
// polyfillFetch();
// polyfillReadableStream();
polyfillURL();

/**
 * Polify BigInt.toJSON for react-native
 * @returns {number}
 */
BigInt.prototype.toJSON = function () {
  return Number(this.toString());
};

if (typeof BigInt === "undefined") global.BigInt = require("big-integer");

// Polyfill for performance.now() on Android
if (!global.performance && global._chronoNow) {
  global.performance = {
    now: global._chronoNow,
  };
}
