"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_3DGLO"]("main",{

/***/ "./src/modules/sendForm.js":
/*!*********************************!*\
  !*** ./src/modules/sendForm.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar sendForm = function sendForm() {\n  var errorMessage = 'Что-то пошло не так...',\n      loadMessage = \"<img src=\\'images/anim.gif' width='30' height='30'>\",\n      successMessage = 'Спасибо! Мы скоро с вами свяжемся!';\n  var input = document.querySelectorAll('input');\n  var statusMessage = document.createElement('div');\n  statusMessage.style.csstext = 'font-size: 2rem;';\n  statusMessage.style.color = 'white';\n\n  var postData = function postData(body) {\n    return fetch('./server.php', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify(body)\n    });\n  };\n\n  document.addEventListener('submit', function (event) {\n    event.preventDefault();\n    var target = event.target;\n    target.appendChild(statusMessage);\n    statusMessage.innerHTML = loadMessage;\n    var formData = new FormData(target);\n    var body = {};\n    formData.forEach(function (val, key) {\n      body[key] = val;\n    });\n    input.forEach(function (item) {\n      item.value = '';\n    });\n    postData(body).then(function (response) {\n      if (response.status !== 200) {\n        throw new Error('Status network not 200');\n      }\n\n      statusMessage.textContent = successMessage;\n      setTimeout(function () {\n        statusMessage.textContent = '';\n      }, 4000);\n    })[\"catch\"](function (error) {\n      statusMessage.textContent = errorMessage;\n      console.error(error);\n      setTimeout(function () {\n        statusMessage.textContent = '';\n      }, 4000);\n    });\n    return;\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack://3DGLO/./src/modules/sendForm.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("bc1597d31d6dd9b0d520")
/******/ })();
/******/ 
/******/ }
);