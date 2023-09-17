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

/***/ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultOptions/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getDefaultOptions: () => (/* binding */ getDefaultOptions),\n/* harmony export */   setDefaultOptions: () => (/* binding */ setDefaultOptions)\n/* harmony export */ });\nvar defaultOptions = {};\nfunction getDefaultOptions() {\n  return defaultOptions;\n}\nfunction setDefaultOptions(newOptions) {\n  defaultOptions = newOptions;\n}\n\n//# sourceURL=webpack://to-do-list-2/./node_modules/date-fns/esm/_lib/defaultOptions/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ requiredArgs)\n/* harmony export */ });\nfunction requiredArgs(required, args) {\n  if (args.length < required) {\n    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');\n  }\n}\n\n//# sourceURL=webpack://to-do-list-2/./node_modules/date-fns/esm/_lib/requiredArgs/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ toInteger)\n/* harmony export */ });\nfunction toInteger(dirtyNumber) {\n  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {\n    return NaN;\n  }\n  var number = Number(dirtyNumber);\n  if (isNaN(number)) {\n    return number;\n  }\n  return number < 0 ? Math.ceil(number) : Math.floor(number);\n}\n\n//# sourceURL=webpack://to-do-list-2/./node_modules/date-fns/esm/_lib/toInteger/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameDay/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameDay/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ isSameDay)\n/* harmony export */ });\n/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfDay/index.js */ \"./node_modules/date-fns/esm/startOfDay/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n/**\n * @name isSameDay\n * @category Day Helpers\n * @summary Are the given dates in the same day (and year and month)?\n *\n * @description\n * Are the given dates in the same day (and year and month)?\n *\n * @param {Date|Number} dateLeft - the first date to check\n * @param {Date|Number} dateRight - the second date to check\n * @returns {Boolean} the dates are in the same day (and year and month)\n * @throws {TypeError} 2 arguments required\n *\n * @example\n * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?\n * const result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))\n * //=> true\n *\n * @example\n * // Are 4 September and 4 October in the same day?\n * const result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))\n * //=> false\n *\n * @example\n * // Are 4 September, 2014 and 4 September, 2015 in the same day?\n * const result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))\n * //=> false\n */\nfunction isSameDay(dirtyDateLeft, dirtyDateRight) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(2, arguments);\n  var dateLeftStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDateLeft);\n  var dateRightStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDateRight);\n  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();\n}\n\n//# sourceURL=webpack://to-do-list-2/./node_modules/date-fns/esm/isSameDay/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameWeek/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameWeek/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ isSameWeek)\n/* harmony export */ });\n/* harmony import */ var _startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfWeek/index.js */ \"./node_modules/date-fns/esm/startOfWeek/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n/**\n * @name isSameWeek\n * @category Week Helpers\n * @summary Are the given dates in the same week (and month and year)?\n *\n * @description\n * Are the given dates in the same week (and month and year)?\n *\n * @param {Date|Number} dateLeft - the first date to check\n * @param {Date|Number} dateRight - the second date to check\n * @param {Object} [options] - an object with options.\n * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}\n * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)\n * @returns {Boolean} the dates are in the same week (and month and year)\n * @throws {TypeError} 2 arguments required\n * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6\n *\n * @example\n * // Are 31 August 2014 and 4 September 2014 in the same week?\n * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4))\n * //=> true\n *\n * @example\n * // If week starts with Monday,\n * // are 31 August 2014 and 4 September 2014 in the same week?\n * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4), {\n *   weekStartsOn: 1\n * })\n * //=> false\n *\n * @example\n * // Are 1 January 2014 and 1 January 2015 in the same week?\n * const result = isSameWeek(new Date(2014, 0, 1), new Date(2015, 0, 1))\n * //=> false\n */\nfunction isSameWeek(dirtyDateLeft, dirtyDateRight, options) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(2, arguments);\n  var dateLeftStartOfWeek = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDateLeft, options);\n  var dateRightStartOfWeek = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDateRight, options);\n  return dateLeftStartOfWeek.getTime() === dateRightStartOfWeek.getTime();\n}\n\n//# sourceURL=webpack://to-do-list-2/./node_modules/date-fns/esm/isSameWeek/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/isThisWeek/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isThisWeek/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ isThisWeek)\n/* harmony export */ });\n/* harmony import */ var _isSameWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameWeek/index.js */ \"./node_modules/date-fns/esm/isSameWeek/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n/**\n * @name isThisWeek\n * @category Week Helpers\n * @summary Is the given date in the same week as the current date?\n * @pure false\n *\n * @description\n * Is the given date in the same week as the current date?\n *\n * > ⚠️ Please note that this function is not present in the FP submodule as\n * > it uses `Date.now()` internally hence impure and can't be safely curried.\n *\n * @param {Date|Number} date - the date to check\n * @param {Object} [options] - the object with options\n * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}\n * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)\n * @returns {Boolean} the date is in this week\n * @throws {TypeError} 1 argument required\n * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6\n *\n * @example\n * // If today is 25 September 2014, is 21 September 2014 in this week?\n * const result = isThisWeek(new Date(2014, 8, 21))\n * //=> true\n *\n * @example\n * // If today is 25 September 2014 and week starts with Monday\n * // is 21 September 2014 in this week?\n * const result = isThisWeek(new Date(2014, 8, 21), { weekStartsOn: 1 })\n * //=> false\n */\n\nfunction isThisWeek(dirtyDate, options) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1, arguments);\n  return (0,_isSameWeek_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDate, Date.now(), options);\n}\n\n//# sourceURL=webpack://to-do-list-2/./node_modules/date-fns/esm/isThisWeek/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/isToday/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isToday/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ isToday)\n/* harmony export */ });\n/* harmony import */ var _isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameDay/index.js */ \"./node_modules/date-fns/esm/isSameDay/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n/**\n * @name isToday\n * @category Day Helpers\n * @summary Is the given date today?\n * @pure false\n *\n * @description\n * Is the given date today?\n *\n * > ⚠️ Please note that this function is not present in the FP submodule as\n * > it uses `Date.now()` internally hence impure and can't be safely curried.\n *\n * @param {Date|Number} date - the date to check\n * @returns {Boolean} the date is today\n * @throws {TypeError} 1 argument required\n *\n * @example\n * // If today is 6 October 2014, is 6 October 14:00:00 today?\n * const result = isToday(new Date(2014, 9, 6, 14, 0))\n * //=> true\n */\nfunction isToday(dirtyDate) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1, arguments);\n  return (0,_isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDate, Date.now());\n}\n\n//# sourceURL=webpack://to-do-list-2/./node_modules/date-fns/esm/isToday/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfDay/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfDay/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ startOfDay)\n/* harmony export */ });\n/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ \"./node_modules/date-fns/esm/toDate/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n/**\n * @name startOfDay\n * @category Day Helpers\n * @summary Return the start of a day for the given date.\n *\n * @description\n * Return the start of a day for the given date.\n * The result will be in the local timezone.\n *\n * @param {Date|Number} date - the original date\n * @returns {Date} the start of a day\n * @throws {TypeError} 1 argument required\n *\n * @example\n * // The start of a day for 2 September 2014 11:55:00:\n * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))\n * //=> Tue Sep 02 2014 00:00:00\n */\nfunction startOfDay(dirtyDate) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1, arguments);\n  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDate);\n  date.setHours(0, 0, 0, 0);\n  return date;\n}\n\n//# sourceURL=webpack://to-do-list-2/./node_modules/date-fns/esm/startOfDay/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfWeek/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfWeek/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ startOfWeek)\n/* harmony export */ });\n/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toDate/index.js */ \"./node_modules/date-fns/esm/toDate/index.js\");\n/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ \"./node_modules/date-fns/esm/_lib/toInteger/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n/* harmony import */ var _lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/defaultOptions/index.js */ \"./node_modules/date-fns/esm/_lib/defaultOptions/index.js\");\n\n\n\n\n/**\n * @name startOfWeek\n * @category Week Helpers\n * @summary Return the start of a week for the given date.\n *\n * @description\n * Return the start of a week for the given date.\n * The result will be in the local timezone.\n *\n * @param {Date|Number} date - the original date\n * @param {Object} [options] - an object with options.\n * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}\n * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)\n * @returns {Date} the start of a week\n * @throws {TypeError} 1 argument required\n * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6\n *\n * @example\n * // The start of a week for 2 September 2014 11:55:00:\n * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))\n * //=> Sun Aug 31 2014 00:00:00\n *\n * @example\n * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:\n * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })\n * //=> Mon Sep 01 2014 00:00:00\n */\nfunction startOfWeek(dirtyDate, options) {\n  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1, arguments);\n  var defaultOptions = (0,_lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();\n  var weekStartsOn = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0);\n\n  // Test if weekStartsOn is between 0 and 6 _and_ is not NaN\n  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {\n    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');\n  }\n  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(dirtyDate);\n  var day = date.getDay();\n  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;\n  date.setDate(date.getDate() - diff);\n  date.setHours(0, 0, 0, 0);\n  return date;\n}\n\n//# sourceURL=webpack://to-do-list-2/./node_modules/date-fns/esm/startOfWeek/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ toDate)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ \"./node_modules/@babel/runtime/helpers/esm/typeof.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n/**\n * @name toDate\n * @category Common Helpers\n * @summary Convert the given argument to an instance of Date.\n *\n * @description\n * Convert the given argument to an instance of Date.\n *\n * If the argument is an instance of Date, the function returns its clone.\n *\n * If the argument is a number, it is treated as a timestamp.\n *\n * If the argument is none of the above, the function returns Invalid Date.\n *\n * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.\n *\n * @param {Date|Number} argument - the value to convert\n * @returns {Date} the parsed date in the local time zone\n * @throws {TypeError} 1 argument required\n *\n * @example\n * // Clone the date:\n * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))\n * //=> Tue Feb 11 2014 11:30:30\n *\n * @example\n * // Convert the timestamp to date:\n * const result = toDate(1392098430000)\n * //=> Tue Feb 11 2014 11:30:30\n */\nfunction toDate(argument) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(1, arguments);\n  var argStr = Object.prototype.toString.call(argument);\n\n  // Clone the date\n  if (argument instanceof Date || (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(argument) === 'object' && argStr === '[object Date]') {\n    // Prevent the date to lose the milliseconds when passed to new Date() in IE10\n    return new Date(argument.getTime());\n  } else if (typeof argument === 'number' || argStr === '[object Number]') {\n    return new Date(argument);\n  } else {\n    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {\n      // eslint-disable-next-line no-console\n      console.warn(\"Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments\");\n      // eslint-disable-next-line no-console\n      console.warn(new Error().stack);\n    }\n    return new Date(NaN);\n  }\n}\n\n//# sourceURL=webpack://to-do-list-2/./node_modules/date-fns/esm/toDate/index.js?");

/***/ }),

/***/ "./src/DOMEvents.js":
/*!**************************!*\
  !*** ./src/DOMEvents.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DOM_EVENTS: () => (/* binding */ DOM_EVENTS),\n/* harmony export */   UI: () => (/* binding */ UI)\n/* harmony export */ });\n/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Task */ \"./src/Task.js\");\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Project */ \"./src/Project.js\");\n/* harmony import */ var _Filter_todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Filter_todo */ \"./src/Filter_todo.js\");\n\r\n\r\n//import {saveTaskToLocalStorage, clearLocalStorage} from './local_storage'\r\n\r\nconst d = document;\r\nlet editing = false;\r\nclass UI {\r\n  addTask(item) {\r\n    const container = d.getElementById('task-container');\r\n    const taskContainer = d.getElementById('cards');\r\n    const card = d.createElement('div');\r\n    card.innerHTML = `\r\n                <div class=\"card-show\">\r\n                    <button class=\"check-btn\"><i class=\"far fa-circle\"></i></button>\r\n                    <h3 class=\"task-el task-title\" name=\"name\">${item._title}</h3>\r\n                    <h3 class=\"task-el task-date\" name=\"date\">${item._dueDate}</h3>\r\n                <div class=\"card-btns\">\r\n                    <button class=\"btn-task btn-expand\"><i class=\"fas fa-angle-double-down\"></i></button>\r\n                    <button class=\"btn-task btn-delete\"><i class=\"fas fa-trash-alt\"></i></button>\r\n                    </div>\r\n                    </div>    \r\n                <div class=\"card-hidden\">\r\n                    <h3 class=\"task-el task-project\" name=\"project\">Project: <b>${item._project}</b></h3>\r\n                    <h3 class=\"task-el task-priority\" name=\"priority\">Priority: <b>${item._priority}</b></h3>\r\n                    <button class=\"btn-task btn-edit\"><i class=\"fas fa-edit\"></i></button>\r\n                </div>\r\n            `;\r\n    card.classList.add('card', item._priority);\r\n    taskContainer.appendChild(card);\r\n    this.removeForm();\r\n    if (editing) d.querySelector('.card.editing').remove();\r\n    editing = false;\r\n    if (!taskContainer.hasChildNodes()) {\r\n      container.classList.remove('hide-bg');\r\n    } else {\r\n      container.classList.add('hide-bg');\r\n    }\r\n  }\r\n\r\n  createForm() {\r\n    const container = d.getElementById('task-container');\r\n    const form = d.createElement('form');\r\n    const select = d.createElement('select');\r\n    const options = ['Inbox', ...d.getElementById('projects-list').children];\r\n    options.forEach((op) => {\r\n      const option = d.createElement('option');\r\n      option.value = op.textContent || op;\r\n      option.textContent = op.textContent || op;\r\n      select.appendChild(option);\r\n    });\r\n\r\n    form.innerHTML = `\r\n            <div>\r\n            <input type=\"text\" id=\"title\" placeholder=\"Task Info\">\r\n            <input type=\"text\" id=\"dueDate\" placeholder=\"Schedule\" onfocus=\"(this.type='date')\" onblur=\"(this.type='text')\">\r\n            <select id=\"project-select\">\r\n            ${select.innerHTML}</select>\r\n            </div>\r\n            <div>\r\n            <select id=\"priority-select\">\r\n                <option value=\"none\">Select Priority</option>\r\n                <option value=\"low\">Low</option>\r\n                <option value=\"medium\">Medium</option>\r\n                <option value=\"high\">High</option>\r\n                <option value=\"crazy\">Crazy</option>\r\n            </select>\r\n            <button class=\"btn addTaskFormBtn\" id=\"addTaskFormBtn\">add</button>\r\n            <button class=\"btn cancelTaskFormBtn\" id=\"cancelTaskFormBtn\">cancel</button>\r\n            </div>\r\n    `;\r\n    form.classList.add('form-task');\r\n    container.classList.add('active');\r\n    container.insertAdjacentElement('afterbegin', form);\r\n  }\r\n\r\n  removeForm() {\r\n    const container = d.getElementById('task-container');\r\n    const form = d.querySelector('.form-task');\r\n    if (container.children[0] === form) {\r\n      container.classList.remove('active');\r\n      container.removeChild(form);\r\n    }\r\n  }\r\n\r\n  removeTaskFormBtn() {\r\n    const container = d.getElementById('task-container');\r\n\r\n    container.classList.add('active');\r\n  }\r\n  showTaskFormBtn() {\r\n    const container = d.getElementById('task-container');\r\n    container.classList.remove('active');\r\n  }\r\n\r\n  resetForm(id) {\r\n    d.querySelector(id).reset();\r\n  }\r\n\r\n  showMessage(msg, className) {\r\n    const modal = d.createElement('div');\r\n    modal.classList.add('show-msg-modal');\r\n    modal.classList.add(className);\r\n    modal.textContent = msg;\r\n    document.body.appendChild(modal);\r\n    setTimeout(() => document.body.removeChild(modal), 3000);\r\n  }\r\n\r\n  deleteTask(e) {\r\n    const todo = e.parentElement.parentElement.parentElement;\r\n    const container = d.getElementById('task-container');\r\n    const tasks = d.getElementById('cards');\r\n    todo.classList.add('fall');\r\n    todo.remove();\r\n    this.showMessage('Task removed Sucessfully', 'danger');\r\n    //clearLocalStorage(e);\r\n    if (!tasks.hasChildNodes()) {\r\n      container.classList.remove('hide-bg');\r\n    } else {\r\n      container.classList.add('hide-bg');\r\n    }\r\n  }\r\n\r\n  createNewProjectForm() {\r\n    const container = d.querySelector('.menu');\r\n    const btn = d.getElementById('create-new-project');\r\n\r\n    const form = d.createElement('form');\r\n    form.innerHTML = `\r\n        <input type=\"text\" placeholder=\"Project Name\" name=\"name\">\r\n        <button class=\"btn-project\" id=\"add-project\">Add</button>\r\n        <button class=\"btn-project\" id=\"cancel-project\">Cancel</button>\r\n        \r\n        `;\r\n\r\n    form.classList.add('form-project');\r\n    container.insertBefore(form, btn);\r\n    btn.classList.add('none');\r\n    //btn.style.display = \"none\"\r\n  }\r\n\r\n  addNewProject(item) {\r\n    const menu = d.querySelector('.menu');\r\n    const container = d.getElementById('projects-list');\r\n    const btn = d.getElementById('create-new-project');\r\n    const form = d.querySelector('.form-project');\r\n    const project = d.createElement('button');\r\n    project.classList.add('btn', 'project');\r\n    project.innerHTML = `<i class=\"fas fa-tasks\"></i>${item._title}\r\n        <button class=\"btn-delete-project\"><i class=\"fas fa-times\"></i></button>`;\r\n    container.appendChild(project);\r\n    // menu.removeChild(form);\r\n    if (menu.children[4].classList[0] === 'form-project') {\r\n      form.remove();\r\n    }\r\n    btn.classList.remove('none');\r\n  }\r\n\r\n  cancelNewProject() {\r\n    const btn = d.getElementById('create-new-project');\r\n    const form = d.querySelector('.form-project');\r\n    form.remove();\r\n    btn.classList.remove('none');\r\n  }\r\n\r\n  changeSectionTitle(newTitle) {\r\n    const title = d.getElementById('section-title');\r\n    title.textContent = newTitle;\r\n  }\r\n\r\n  changeActive(id) {\r\n    d.querySelector('.menu .btn.active').classList.remove('active');\r\n    id.classList.add('active');\r\n  }\r\n\r\n  deleteProject(id) {\r\n    // const container = document.querySelector('#cards');\r\n    const tasks = document.querySelectorAll('#cards .card .task-project');\r\n    Array.from(tasks).forEach((task) => {\r\n      if (\r\n        task.children[0].textContent.trim() ===\r\n        id.parentElement.textContent.trim()\r\n      ) {\r\n        //container.removeChild(task.parentElement.parentElement);\r\n        task.parentElement.parentElement.remove();\r\n        //clearLocalStorage(id);\r\n      }\r\n    });\r\n\r\n    if (id.parentElement.classList.contains('active')) {\r\n      this.goToHome();\r\n    }\r\n    id.parentElement.remove();\r\n    this.showMessage(`Project removed Succesfully`, 'danger');\r\n  }\r\n\r\n  goToHome() {\r\n    if (d.querySelector('.menu .btn.active').textContent === 'Inbox') return;\r\n    this.changeActive(d.querySelector('#inbox'));\r\n    this.changeSectionTitle('Inbox');\r\n    this.showTaskFormBtn();\r\n    (0,_Filter_todo__WEBPACK_IMPORTED_MODULE_2__.showAll)();\r\n  }\r\n\r\n  editTask(id) {\r\n    this.removeForm();\r\n    id.classList.add('editing');\r\n    editing = true;\r\n    this.goToHome();\r\n    this.createForm();\r\n    const title = id.children[0].children.name.textContent;\r\n    const dueDate = id.children[0].children.date.textContent;\r\n    const project =\r\n      id.children[1].children.project.firstElementChild.textContent;\r\n    const priority =\r\n      id.children[1].children.priority.firstElementChild.textContent;\r\n    d.getElementById('title').value = title;\r\n    d.getElementById('dueDate').value = dueDate;\r\n    d.getElementById('project-select').value = project;\r\n    d.getElementById('priority-select').value = priority;\r\n    id.style.display = 'none';\r\n  }\r\n}\r\n\r\nconst DOM_EVENTS = () => {\r\n  const ui = new UI();\r\n  d.addEventListener('click', (e) => {\r\n    if (e.target.matches('#addTaskFormBtn')) {\r\n      e.preventDefault();\r\n      //if(ui.editing()) d.querySelector('.card.editing').remove()\r\n      const title = document.getElementById('title').value;\r\n      let dueDate = document.getElementById('dueDate').value;\r\n      let project = document.getElementById('project-select').value;\r\n      const priority = document.getElementById('priority-select').value;\r\n      if (title === '')\r\n        return ui.showMessage('Task title can not be blank', 'alert');\r\n      if (dueDate === '') dueDate = 'No due date';\r\n      const task = new _Task__WEBPACK_IMPORTED_MODULE_0__.Task(title, dueDate, project, priority);\r\n      ui.addTask(task);\r\n      ui.showMessage('Task added Succesfully', 'success');\r\n      //saveTaskToLocalStorage(task);\r\n    }\r\n    if (e.target.matches('#add-task')) {\r\n      ui.createForm();\r\n    }\r\n\r\n    if (e.target.matches('.btn-delete')) {\r\n      ui.deleteTask(e.target);\r\n    }\r\n\r\n    if (e.target.matches('#create-new-project')) {\r\n      ui.createNewProjectForm();\r\n    }\r\n    if (e.target.matches('#add-project')) {\r\n      e.preventDefault();\r\n      const form = d.querySelector('.form-project');\r\n      const title = form.name.value;\r\n      if (title === '')\r\n        return ui.showMessage('Project title can not be blank', 'alert');\r\n      if (title.length > 15)\r\n        return ui.showMessage(\r\n          'Project title can not be longer than 15 char',\r\n          'alert'\r\n        );\r\n      const project = new _Project__WEBPACK_IMPORTED_MODULE_1__.Projects(title);\r\n      //saveProjectToLocalStorage(project)\r\n      ui.addNewProject(project);\r\n      ui.removeForm();\r\n      ui.showMessage('Project added Succesfully', 'success');\r\n    }\r\n\r\n    if (e.target.matches('#week')) {\r\n      ui.changeActive(e.target);\r\n      ui.changeSectionTitle('This Week Tasks');\r\n\r\n      ui.removeForm();\r\n      ui.removeTaskFormBtn();\r\n      (0,_Filter_todo__WEBPACK_IMPORTED_MODULE_2__.thisWeek)();\r\n    }\r\n\r\n    if (e.target.matches('#inbox')) {\r\n      ui.goToHome();\r\n    }\r\n\r\n    if (e.target.matches('#today')) {\r\n      ui.changeActive(e.target);\r\n      ui.changeSectionTitle('Today Tasks');\r\n      ui.removeForm();\r\n      ui.removeTaskFormBtn();\r\n      (0,_Filter_todo__WEBPACK_IMPORTED_MODULE_2__.todayTask)();\r\n    }\r\n    if (e.target.matches('.project')) {\r\n      ui.changeActive(e.target);\r\n      ui.changeSectionTitle(e.target.textContent);\r\n      (0,_Filter_todo__WEBPACK_IMPORTED_MODULE_2__.filterByProject)(e.target);\r\n      console.log(e.target);\r\n      ui.removeForm();\r\n      ui.removeTaskFormBtn();\r\n    }\r\n\r\n    if (e.target.matches('.btn-delete-project')) {\r\n      ui.deleteProject(e.target);\r\n      ui.showMessage('Project removed Succesfully', 'danger');\r\n      // clearLocalStorage(e.target)\r\n    }\r\n\r\n    if (e.target.matches('.cancelTaskFormBtn')) {\r\n      e.preventDefault();\r\n      if (editing) {\r\n        d.querySelector('.card.editing').style.display = 'flex';\r\n        d.querySelector('.card.editing').classList.remove('editing');\r\n      }\r\n      ui.removeForm();\r\n    }\r\n    if (e.target.matches('.float-task-btn')) {\r\n      ui.goToHome();\r\n    }\r\n    if (e.target.matches('.home')) {\r\n      ui.goToHome();\r\n    }\r\n    if (e.target.matches('#cancel-project')) {\r\n      e.preventDefault();\r\n      ui.cancelNewProject();\r\n    }\r\n    if (e.target.matches('.btn-expand')) {\r\n      e.target.parentElement.parentElement.parentElement.classList.toggle(\r\n        'show'\r\n      );\r\n    }\r\n    if (e.target.matches('.btn-edit')) {\r\n      ui.editTask(e.target.parentElement.parentElement);\r\n    }\r\n\r\n    if (e.target.matches('.check-btn')) {\r\n      console.log(e.target);\r\n      if (e.target.children[0].classList.contains('fa-circle')) {\r\n        e.target.children[0].classList.replace('fa-circle', 'fa-check-circle');\r\n        e.target.parentElement.parentElement.classList.add('checked');\r\n        return;\r\n      }\r\n      if (e.target.children[0].classList.contains('fa-check-circle')) {\r\n        e.target.children[0].classList.replace('fa-check-circle', 'fa-circle');\r\n        e.target.parentElement.parentElement.classList.remove('checked');\r\n        return;\r\n      }\r\n    }\r\n\r\n    if (e.target.matches('.collapse-menu')) {\r\n      const content = d.getElementById('container');\r\n      content.classList.toggle('collapse');\r\n    }\r\n  });\r\n\r\n  d.addEventListener('keyup', (e) => {\r\n    const search = d.getElementById('input-search');\r\n    if (e.target.matches('#input-search')) {\r\n      e.preventDefault();\r\n      (0,_Filter_todo__WEBPACK_IMPORTED_MODULE_2__.searchBar)(search.value);\r\n      if (d.querySelector('.menu .btn.active').textContent === 'Inbox') return;\r\n      ui.changeActive(d.querySelector('#inbox'));\r\n      ui.changeSectionTitle('Inbox');\r\n      ui.showTaskFormBtn();\r\n    }\r\n  });\r\n};\r\n\r\n//export {saveToLocalStorage, getTasks}\r\n\r\n\n\n//# sourceURL=webpack://to-do-list-2/./src/DOMEvents.js?");

/***/ }),

/***/ "./src/Filter_todo.js":
/*!****************************!*\
  !*** ./src/Filter_todo.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   filterByProject: () => (/* binding */ filterByProject),\n/* harmony export */   searchBar: () => (/* binding */ searchBar),\n/* harmony export */   showAll: () => (/* binding */ showAll),\n/* harmony export */   thisWeek: () => (/* binding */ thisWeek),\n/* harmony export */   todayTask: () => (/* binding */ todayTask)\n/* harmony export */ });\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/esm/isThisWeek/index.js\");\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/esm/isToday/index.js\");\n\r\n\r\nconst thisWeek = () => {\r\n  //let taskArr = []\r\n  const tasks = document.querySelectorAll('#cards .card .task-date');\r\n  Array.from(tasks).forEach((task) => {\r\n    task.parentElement.parentElement.style.display = 'flex';\r\n    let result = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(new Date(task.textContent));\r\n    //task.style.display = \"none\"\r\n    if (!result) {\r\n      task.parentElement.parentElement.style.display = 'none';\r\n      //taskArr.push({'task': task, 'date': task.children[1].textContent})\r\n    }\r\n  });\r\n  //taskArr.sort((a,b)=>(a.new Date(date).getTime>b.date?1:-1)).forEach(task => task.style.display = \"flex\");\r\n};\r\n\r\nconst todayTask = () => {\r\n  const tasks = document.querySelectorAll('#cards .card .task-date');\r\n  Array.from(tasks).forEach((task) => {\r\n    task.parentElement.parentElement.style.display = 'flex';\r\n    let result = (0,date_fns__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(new Date(task.textContent));\r\n    if (!result) {\r\n      task.parentElement.parentElement.style.display = 'none';\r\n    }\r\n  });\r\n};\r\n\r\nconst showAll = () => {\r\n  const tasks = document.querySelectorAll('#cards .card');\r\n  Array.from(tasks).forEach((task) => {\r\n    task.style.display = 'flex';\r\n  });\r\n};\r\n\r\nconst filterByProject = (target) => {\r\n  const tasks = document.querySelectorAll('#cards .card .task-project');\r\n  Array.from(tasks).forEach((task) => {\r\n    task.style.display = 'flex';\r\n    if (!target.textContent.includes(task.firstElementChild.textContent)) {\r\n      task.parentElement.parentElement.style.display = 'none';\r\n    }\r\n  });\r\n};\r\n\r\nconst searchBar = (key) => {\r\n  const tasks = document.querySelectorAll('#cards .card .task-title');\r\n  Array.from(tasks).forEach((task) => {\r\n    if (!task.textContent.toLowerCase().includes(key.toLowerCase())) {\r\n      task.parentElement.parentElement.style.display = 'none';\r\n    } else {\r\n      task.parentElement.parentElement.style.display = 'flex';\r\n    }\r\n  });\r\n};\r\n\r\n\n\n//# sourceURL=webpack://to-do-list-2/./src/Filter_todo.js?");

/***/ }),

/***/ "./src/InitialDOM.js":
/*!***************************!*\
  !*** ./src/InitialDOM.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DOM_CONTENT: () => (/* binding */ DOM_CONTENT)\n/* harmony export */ });\nconst DOM_CONTENT = () => {\r\n  const container = document.getElementById('container');\r\n\r\n  const createHeader = (() => {\r\n    const header = document.createElement('header');\r\n    header.className = 'header';\r\n    header.innerHTML = `\r\n        <div class=\"logo\">ToDo App</div>\r\n        <nav class=\"nav\">\r\n            <button class=\"btn collapse-menu\"><i class=\"fas fa-bars\"></i></button>\r\n            <button class=\"btn home\"><i class=\"fas fa-home\"></i></button>\r\n            <form autocomplete=\"off\" class=\"filter-form\">\r\n                <i class=\"fas fa-search\"></i>\r\n                <input type=\"text\" name=\"search\" class=\"input-search\" id=\"input-search\" placeholder=\"search...\">\r\n            </form>\r\n            <h2 id=\"section-title\" class=\"section-title\">Inbox</h2>\r\n        </nav>\r\n        <div class=\"info\">\r\n        <div class=\"low\">Low</div>\r\n        <div class=\"medium\">Medium</div>\r\n        <div class=\"high\">High</div>\r\n        </div>\r\n        `;\r\n    container.appendChild(header);\r\n  })();\r\n\r\n  const createMenu = (() => {\r\n    const main = document.createElement('main');\r\n    main.innerHTML = `\r\n        <section class=\"menu\">\r\n            <button class=\"btn active\" id=\"inbox\"><i class=\"fas fa-inbox\"></i>Inbox</button>\r\n            <button class=\"btn\" id=\"today\"><i class=\"fas fa-calendar-day\"></i>Today</button>\r\n            <button class=\"btn\" id=\"week\"><i class=\"fas fa-calendar-week\"></i>Upcoming</button>\r\n            <h3 class=\"project-section-title\"><i class=\"fas fa-circle\"></i>Projects</h3>\r\n            <button class=\"btn\" id=\"create-new-project\"><i class=\"fas fa-plus\"></i>Create new project</button>\r\n            <div id=\"projects-list\"></div>\r\n        </section>\r\n        <section class=\"task-container\" id=\"task-container\">\r\n            <button class=\"btn createTask\" id=\"add-task\"><i class=\"fas fa-plus\"></i>Add task</button>\r\n            <div class=\"cards\" id=\"cards\"></div>\r\n        </section>\r\n        <button class=\"float-task-btn\"><i class=\"fas fa-plus\"></i></button>\r\n        `;\r\n    container.appendChild(main);\r\n  })();\r\n};\r\n\n\n//# sourceURL=webpack://to-do-list-2/./src/InitialDOM.js?");

/***/ }),

/***/ "./src/Project.js":
/*!************************!*\
  !*** ./src/Project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Projects: () => (/* binding */ Projects)\n/* harmony export */ });\nclass Projects {\r\n  constructor(title) {\r\n    this._title = title;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://to-do-list-2/./src/Project.js?");

/***/ }),

/***/ "./src/Task.js":
/*!*********************!*\
  !*** ./src/Task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Task: () => (/* binding */ Task)\n/* harmony export */ });\nclass Task {\r\n  constructor(title, dueDate, project, priority) {\r\n    this._title = title;\r\n    this._dueDate = dueDate;\r\n    this._project = project;\r\n    this._priority = priority;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://to-do-list-2/./src/Task.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _InitialDOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InitialDOM */ \"./src/InitialDOM.js\");\n/* harmony import */ var _DOMEvents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOMEvents */ \"./src/DOMEvents.js\");\n\r\n\r\n//import {getTasks, getProjects} from './local_storage';\r\n\r\nwindow.addEventListener('DOMContentLoaded', () => {\r\n  //getTasks();\r\n  //getProjects();\r\n});\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n  (0,_InitialDOM__WEBPACK_IMPORTED_MODULE_0__.DOM_CONTENT)();\r\n  (0,_DOMEvents__WEBPACK_IMPORTED_MODULE_1__.DOM_EVENTS)();\r\n});\r\n\n\n//# sourceURL=webpack://to-do-list-2/./src/index.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _typeof)\n/* harmony export */ });\nfunction _typeof(obj) {\n  \"@babel/helpers - typeof\";\n\n  return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) {\n    return typeof obj;\n  } : function (obj) {\n    return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;\n  }, _typeof(obj);\n}\n\n//# sourceURL=webpack://to-do-list-2/./node_modules/@babel/runtime/helpers/esm/typeof.js?");

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