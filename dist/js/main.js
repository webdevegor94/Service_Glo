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

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_calculator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/calculator */ \"./modules/calculator.js\");\n/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/forms */ \"./modules/forms.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('13 may 2022')\r\n;(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n;(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\r\n;(0,_modules_calculator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\r\n;(0,_modules_forms__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({\r\n    textSelector: '#form1-name',\r\n    phoneSelector: '#form1-phone',\r\n    emailSelector: '#form1-email',\r\n    placeholderSelector: null\r\n})\r\n;(0,_modules_forms__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({\r\n    textSelector: '#form2-name',\r\n    phoneSelector: '#form2-phone',\r\n    emailSelector: '#form2-email',\r\n    placeholderSelector: '#form2-message'\r\n})\r\n;(0,_modules_forms__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({\r\n    textSelector: '#form3-name',\r\n    phoneSelector: '#form3-phone',\r\n    emailSelector: '#form3-email',\r\n    placeholderSelector: null\r\n})\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/calculator.js":
/*!*******************************!*\
  !*** ./modules/calculator.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst calculator = () => {\r\n    const calcSquare = document.querySelector('.calc-square')\r\n\r\n    calcSquare.addEventListener('input', function () {\r\n        this.value = this.value.replace(/[^0-9.-]/gi, '');\r\n\r\n    }, false);\r\n\r\n    const calcCount = document.querySelector('.calc-count')\r\n\r\n    calcCount.addEventListener('input', function () {\r\n        this.value = this.value.replace(/[^0-9.-]/gi, '');\r\n\r\n    }, false);\r\n\r\n    const calcDay = document.querySelector('.calc-day')\r\n\r\n    calcDay.addEventListener('input', function () {\r\n        this.value = this.value.replace(/[^0-9.-]/gi, '');\r\n\r\n    }, false);\r\n\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calculator);\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./modules/calculator.js?");

/***/ }),

/***/ "./modules/forms.js":
/*!**************************!*\
  !*** ./modules/forms.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst forms = ({\r\n    textSelector,\r\n    phoneSelector,\r\n    emailSelector,\r\n    placeholderSelector\r\n}) => {\r\n    const textInput = document.querySelector(textSelector)\r\n    const phoneInput = document.querySelector(phoneSelector)\r\n    const emailInput = document.querySelector(emailSelector)\r\n\r\n    const validText = function (e) {\r\n        this.value = e.target.value.replace(/[^А-Яа-яёЁ]/ig, '')\r\n    }\r\n\r\n    textInput.addEventListener('input', validText)\r\n    phoneInput.addEventListener('input', (e) => {\r\n        phoneInput.value = e.target.value.replace(/[^0-9-()+]/ig, '')\r\n    })\r\n    emailInput.addEventListener('input', (e) => {\r\n        emailInput.value = e.target.value.replace(/[^a-zA-Z.@~*!'-]/ig, '')\r\n    })\r\n\r\n    if (typeof placeholderSelector === 'string') {\r\n        const placeholderInput = document.querySelector(placeholderSelector)\r\n        placeholderInput.addEventListener('input', validText)\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (forms);\n\n//# sourceURL=webpack:///./modules/forms.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\r\n    const menuBtn = document.querySelector('.menu')\r\n    const menu = document.querySelector('menu')\r\n    const closeBtn = menu.querySelector('.close-btn')\r\n    const menuItems = menu.querySelectorAll('ul>li>a')\r\n\r\n\r\n    const hendlMenu = () => {\r\n        menu.classList.toggle('active-menu')\r\n    }\r\n\r\n    menuBtn.addEventListener('click', hendlMenu)\r\n    closeBtn.addEventListener('click', hendlMenu)\r\n\r\n    menuItems.forEach(menuItem => menuItem.addEventListener('click', hendlMenu))\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\r\n    const modal = document.querySelector('.popup')\r\n    const buttons = document.querySelectorAll('.popup-btn')\r\n    const closeBtn = document.querySelector('.popup-close')\r\n    const popup = document.querySelector('.popup')\r\n    const content = popup.querySelector('.popup-content')\r\n\r\n    const animate = ({ timing, draw, duration }) => {\r\n        let start = performance.now();\r\n\r\n        requestAnimationFrame(function animate(time) {\r\n            // timeFraction изменяется от 0 до 1\r\n            let timeFraction = (time - start) / duration;\r\n            if (timeFraction > 1) timeFraction = 1;\r\n\r\n            // вычисление текущего состояния анимации\r\n            let progress = timing(timeFraction);\r\n\r\n            draw(progress); // отрисовать её\r\n\r\n            if (timeFraction < 1) {\r\n                requestAnimationFrame(animate);\r\n            }\r\n        });\r\n    };\r\n\r\n    function showModal() {\r\n        popup.style.display = 'block'\r\n        if (window.screen.availWidth > 767) {\r\n            animate({\r\n                duration: 500,\r\n                timing(timeFraction) {\r\n                    return Math.pow(timeFraction, 2)\r\n                },\r\n                draw(progress) {\r\n                    content.style.opacity = progress\r\n                }\r\n            })\r\n        }\r\n    }\r\n\r\n    buttons.forEach(btn => {\r\n        btn.addEventListener('click', () => {\r\n            modal.style.display = 'block'\r\n            showModal()\r\n        })\r\n    })\r\n\r\n    closeBtn.addEventListener('click', () => {\r\n        modal.style.display = 'none'\r\n\r\n    })\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadline) => {\r\n\r\n    const timerHours = document.getElementById('timer-hours')\r\n    const timerMinutes = document.getElementById('timer-minutes')\r\n    const timerSeconds = document.getElementById('timer-seconds')\r\n\r\n    const getTimerRemaining = () => {\r\n\r\n        let dateStop = new Date(deadline).getTime()\r\n        let dateNow = new Date().getTime()\r\n        let timeRemaining = (dateStop - dateNow) / 1000\r\n        let hours = Math.floor(timeRemaining / 60 / 60)\r\n        let minutes = Math.floor((timeRemaining / 60) % 60)\r\n        let seconds = Math.floor(timeRemaining % 60)\r\n\r\n        if (hours < 10) hours = \"0\" + hours;\r\n        if (minutes < 10) minutes = \"0\" + minutes;\r\n        if (seconds < 10) seconds = \"0\" + seconds;\r\n\r\n        return { timeRemaining, hours, minutes, seconds }\r\n    }\r\n\r\n    const updateClock = () => {\r\n        let getTime = getTimerRemaining()\r\n        timerHours.textContent = getTime.hours\r\n        timerMinutes.textContent = getTime.minutes\r\n        timerSeconds.textContent = getTime.seconds\r\n\r\n        if (getTime.timeRemaining <= 0) {\r\n            clearInterval()\r\n            timerHours.textContent = '00'\r\n            timerMinutes.textContent = '00'\r\n            timerSeconds.textContent = '00'\r\n\r\n            timerHours.style.color = 'red'\r\n            timerMinutes.style.color = 'red'\r\n            timerSeconds.style.color = 'red'\r\n        }\r\n    }\r\n    updateClock()\r\n    setInterval(updateClock, 1000)\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack:///./modules/timer.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;