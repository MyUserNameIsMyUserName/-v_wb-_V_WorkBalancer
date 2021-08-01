/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkwebworker_init_demo_1"] = self["webpackChunkwebworker_init_demo_1"] || []).push([["src_helper_modules_the_loop_js"],{

/***/ "./src/helper_modules/the_loop.js":
/*!****************************************!*\
  !*** ./src/helper_modules/the_loop.js ***!
  \****************************************/
/***/ ((module) => {

eval("theLOOP = (loopNumber=1000000, loopInWebWorker = false) => {\r\n\tconst TimeOfStart = performance.now();\r\n\tvar loopPosition = 0;\r\n\tfor ( loopPosition = 0; loopPosition < loopNumber; loopPosition++) {\r\n\t\tvar timeOfThis = performance.now();\r\n\t\tvar tempCalcVal = (( loopPosition * loopPosition ) - ( loopPosition * loopPosition ))/1;\r\n\t}\r\n\tconst TimeOfFinish = performance.now();\r\n\tconst ExecTime = TimeOfFinish - TimeOfStart;\r\n\treturn ExecTime;\r\n}\r\n\r\nmodule.exports = theLOOP();\n\n//# sourceURL=webpack://webworker-init_demo_1/./src/helper_modules/the_loop.js?");

/***/ })

}]);