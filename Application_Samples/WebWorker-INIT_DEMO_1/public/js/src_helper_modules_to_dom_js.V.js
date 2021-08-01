/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkwebworker_init_demo_1"] = self["webpackChunkwebworker_init_demo_1"] || []).push([["src_helper_modules_to_dom_js"],{

/***/ "./src/helper_modules/cli_msgs.js":
/*!****************************************!*\
  !*** ./src/helper_modules/cli_msgs.js ***!
  \****************************************/
/***/ ((module) => {

eval("const cliMSGS = {\r\n\tsuccessMessage : \"<cli_msg type='success'>✅ SUCCESS  \\n⏩ toDOM( $domString ) \\n➰ [- Added to DOM! -]</cli_msg>\",\r\n\tmissingInput : \"<cli_msg type='error'>⛔ ERROR  \\n⏩ toDOM( $domString ) \\n❗ [- domString >=IS=> ( undefined \\<._OR_.\\> Empty ) -]</cli_msg>\",\r\n\tunknownReason : \"<cli_msg type='warn'>❓ UNKNOWN ERROR \\n⏩ toDOM( $domString ) \\n🗽 [- Things somehow went so wrong it's not even able to know what... -]</cli_msg>\",\r\n\tjokeError : \"<cli_msg type='info'>❎ SUCCESS ERROR \\n⏩ toDOM( $domString ) \\n⭕ [- Application Successfully Failed to Execute Random Task... -]</cli_msg>\",\r\n\tjsWorksMessage: \"<cli_msg type='success'>⛳ WELCOME _cliMSG_ \\n⏩ : JavaScript Loaded OK \\n🎮 [- TECH >>> Express Node Static + WebPack -]</cli_msg>\"\r\n}\r\n\r\nmodule.exports = cliMSGS;\n\n//# sourceURL=webpack://webworker-init_demo_1/./src/helper_modules/cli_msgs.js?");

/***/ }),

/***/ "./src/helper_modules/to_dom.js":
/*!**************************************!*\
  !*** ./src/helper_modules/to_dom.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const cliMSGS = __webpack_require__(/*! ./cli_msgs */ \"./src/helper_modules/cli_msgs.js\")\r\n\r\ntoDOM = (domString = null) => {\r\n\tvar docBody = document.querySelector(\"body\");\r\n\tvar errorChk = false;\r\n\tif (domString === null) {\r\n\t\terrorChk = true;\r\n\t}\r\n\r\n\tconst parser = new DOMParser();\r\n\tvar docFile;\r\n\tif (errorChk) {\r\n\t\tdocFile = parser.parseFromString(cliMSGS.missingInput, \"application/xml\")\r\n\t\tdocBody.append(docFile.documentElement);\r\n\t\treturn false;\r\n\t}\r\n\ttry {\r\n\t\tdocFile = parser.parseFromString(domString, \"application/xml\")\r\n\t\tdocBody.append(docFile.documentElement);\r\n\t\treturn true;\r\n\t} catch (e) {\r\n\t\tconsole.warn(\"e\");\r\n\t\treturn false;\r\n\t}\r\n}\r\n\r\nmodule.exports = toDOM();\n\n//# sourceURL=webpack://webworker-init_demo_1/./src/helper_modules/to_dom.js?");

/***/ })

}]);