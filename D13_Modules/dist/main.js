/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _module_add_numbers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module-add-numbers.js */ \"./src/module-add-numbers.js\");\n/* harmony import */ var _module_person_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module-person.js */ \"./src/module-person.js\");\n/* harmony import */ var _module_named_exports_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module-named-exports.js */ \"./src/module-named-exports.js\");\n/* harmony import */ var _module_default_export_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./module-default-export.js */ \"./src/module-default-export.js\");\n/* harmony import */ var _module_entire_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./module-entire.js */ \"./src/module-entire.js\");\n\r\n\r\n\r\n\r\n\r\n//TODO: Using package bundler.\r\n// import { arrayIncludes } from \"../node_modules/lodash/_arrayIncludes.js\";\r\n// import axios from \"axios\";\r\n\r\n// Creating and Exporting Modules\r\n\r\n// Task 1\r\nconsole.log((0,_module_add_numbers_js__WEBPACK_IMPORTED_MODULE_0__.addTwoNumbers)(3, 5));\r\n\r\n// Task 2\r\nconsole.log(`Name: ${_module_person_js__WEBPACK_IMPORTED_MODULE_1__.person.name}, Age: ${_module_person_js__WEBPACK_IMPORTED_MODULE_1__.person.age}`);\r\nconsole.log(\r\n  `UpdatedName: ${_module_person_js__WEBPACK_IMPORTED_MODULE_1__.person.changeName(\"Sank\")}, UpdatedAge: ${_module_person_js__WEBPACK_IMPORTED_MODULE_1__.person.changeAge(\r\n    \"27\"\r\n  )}`\r\n);\r\n\r\n// Named and Default Exports\r\n\r\n// Task 3\r\nconsole.log((0,_module_named_exports_js__WEBPACK_IMPORTED_MODULE_2__.getFirstName)(\"Prat\"), (0,_module_named_exports_js__WEBPACK_IMPORTED_MODULE_2__.getLastName)(\"Bhan\"));\r\nconsole.log();\r\n\r\n// Task 4\r\nconsole.log((0,_module_default_export_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])());\r\n\r\n// Importing Entire Modules\r\n\r\n// Task 5\r\nconsole.log((0,_module_entire_js__WEBPACK_IMPORTED_MODULE_4__.greeting)(), _module_entire_js__WEBPACK_IMPORTED_MODULE_4__.NAME, _module_entire_js__WEBPACK_IMPORTED_MODULE_4__.ID);\r\n\r\n// Using Third-party Modules\r\n\r\n// Task 6\r\n// console.log(arrayIncludes([1, 2, 3], 2));\r\n\r\n// Task 7\r\n// console.log(axios.get(\"https://jsonplaceholder.typicode.com/users\"));\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/module-add-numbers.js":
/*!***********************************!*\
  !*** ./src/module-add-numbers.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addTwoNumbers: () => (/* binding */ addTwoNumbers)\n/* harmony export */ });\n// Creating and Exporting Modules\r\n\r\n// Task 1\r\nfunction addTwoNumbers(number1, number2) {\r\n  return number1 + number2;\r\n}\r\n\n\n//# sourceURL=webpack:///./src/module-add-numbers.js?");

/***/ }),

/***/ "./src/module-default-export.js":
/*!**************************************!*\
  !*** ./src/module-default-export.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getFullName)\n/* harmony export */ });\n// Named and Default Exports\r\n\r\n// Task 4\r\nfunction getFullName() {\r\n  return `Firstnamerao Lastname`;\r\n}\r\n\n\n//# sourceURL=webpack:///./src/module-default-export.js?");

/***/ }),

/***/ "./src/module-entire.js":
/*!******************************!*\
  !*** ./src/module-entire.js ***!
  \******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ID: () => (/* binding */ ID),\n/* harmony export */   NAME: () => (/* binding */ NAME),\n/* harmony export */   greeting: () => (/* binding */ greeting)\n/* harmony export */ });\nconst NAME = \"DEMO\";\r\nconst ID = 3535;\r\n\r\nfunction greeting() {\r\n  return \"Heloooooooooooooooo, Entire Module Welcomes you..........\";\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/module-entire.js?");

/***/ }),

/***/ "./src/module-named-exports.js":
/*!*************************************!*\
  !*** ./src/module-named-exports.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getFirstName: () => (/* binding */ getFirstName),\n/* harmony export */   getLastName: () => (/* binding */ getLastName)\n/* harmony export */ });\n// Named and Default Exports\r\n\r\n// Task 3\r\nfunction getFirstName(firstName) {\r\n  return firstName;\r\n}\r\n\r\nfunction getLastName(lastName) {\r\n  return lastName;\r\n}\r\n\n\n//# sourceURL=webpack:///./src/module-named-exports.js?");

/***/ }),

/***/ "./src/module-person.js":
/*!******************************!*\
  !*** ./src/module-person.js ***!
  \******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   person: () => (/* binding */ person)\n/* harmony export */ });\n// Creating and Exporting Modules\r\n\r\n// Task 2\r\nconst person = {\r\n  name: \"Prat\",\r\n  age: \"26\",\r\n  changeName(newName) {\r\n    this.name = newName;\r\n    return this.name;\r\n  },\r\n  changeAge(newAge) {\r\n    this.age = newAge;\r\n    return this.age;\r\n  },\r\n};\r\n\n\n//# sourceURL=webpack:///./src/module-person.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;