/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/burger.js":
/*!*********************************!*\
  !*** ./src/assets/js/burger.js ***!
  \*********************************/
/*! exports provided: burgerInteraction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "burgerInteraction", function() { return burgerInteraction; });
const burgerInteraction = () => {
  try {
    const burgerBtn = document.querySelector('.header-burger__btn');
    const menu = document.querySelector('.header-burger__menu');
    const close = document.querySelector('.header-burger__close');
    burgerBtn.addEventListener('click', () => {
      menu.classList.toggle('header-burger__menu_active');
    });
    close.addEventListener('click', () => {
      menu.classList.remove('header-burger__menu_active');
    });
    window.addEventListener('scroll', () => {
      menu.classList.remove('header-burger__menu_active');
    });
  } catch (error) {
    console.log(error);
  }
};

/***/ }),

/***/ "./src/assets/js/main.js":
/*!*******************************!*\
  !*** ./src/assets/js/main.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _setMarkPositionOnMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setMarkPositionOnMap */ "./src/assets/js/setMarkPositionOnMap.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal */ "./src/assets/js/modal.js");
/* harmony import */ var _burger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./burger */ "./src/assets/js/burger.js");



window.addEventListener('DOMContentLoaded', () => {
  Object(_setMarkPositionOnMap__WEBPACK_IMPORTED_MODULE_0__["setMarkPos"])();
  Object(_modal__WEBPACK_IMPORTED_MODULE_1__["openCloseModal"])();
  Object(_burger__WEBPACK_IMPORTED_MODULE_2__["burgerInteraction"])();
});

/***/ }),

/***/ "./src/assets/js/modal.js":
/*!********************************!*\
  !*** ./src/assets/js/modal.js ***!
  \********************************/
/*! exports provided: openCloseModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openCloseModal", function() { return openCloseModal; });
const openCloseModal = () => {
  try {
    const body = document.querySelector('body');
    const modal = document.querySelector('.modal');
    const close = document.querySelector('.modal__close');
    const btns = document.querySelectorAll('.btn-modal');
    btns.forEach(btn => {
      btn.addEventListener('click', () => {
        openModal();
      });
    });
    close.addEventListener('click', () => {
      closeModal();
    });
    window.addEventListener('resize', () => {
      closeModal();
    });
    function closeModal() {
      modal.classList.remove('modal_active');
      body.style.overflow = 'visible';
      body.style.marginRight = 'unset';
    }
    function openModal() {
      modal.classList.add('modal_active');
      body.style.overflow = 'hidden';
      body.style.marginRight = removeTwitching() + 'px';
    }
    function removeTwitching() {
      let div = document.createElement('div');
      div.style.visibility = 'none';
      div.style.opacity = '0';
      div.style.width = '50px;';
      div.style.height = '50px;';
      div.style.overflow = 'scroll';
      body.appendChild(div);
      let offset = div.offsetWidth - div.clientWidth;
      div.remove();
      return offset;
    }
  } catch (error) {
    console.log(error);
  }
};

/***/ }),

/***/ "./src/assets/js/setMarkPositionOnMap.js":
/*!***********************************************!*\
  !*** ./src/assets/js/setMarkPositionOnMap.js ***!
  \***********************************************/
/*! exports provided: setMarkPos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setMarkPos", function() { return setMarkPos; });
const setMarkPos = () => {
  try {
    const park = document.querySelector('.park');
    const mark = document.querySelector('.park__mark');
    const markOnSchema = document.querySelector('.schema__mark');
    const pathElement = document.querySelectorAll('.schema .schema__img svg path')[27];
    const dialogBox = document.querySelector('.schema__dialog');
    mark.style.left = 793 - (1440 - park.clientWidth) / 2 + 'px';
    window.addEventListener('resize', e => {
      mark.style.left = 793 - (1440 - park.clientWidth) / 2 + 'px';
    });
    pathElement.addEventListener('mouseenter', () => {
      markOnSchema.classList.add('schema__mark_active');
      dialogBox.classList.add('dialog-schema_active');
    });
    pathElement.addEventListener('mouseleave', () => {
      markOnSchema.classList.remove('schema__mark_active');
      dialogBox.classList.remove('dialog-schema_active');
    });
    markOnSchema.addEventListener('mouseenter', () => {
      markOnSchema.classList.add('schema__mark_active');
      dialogBox.classList.add('dialog-schema_active');
    });
    markOnSchema.addEventListener('mouseleave', () => {
      markOnSchema.classList.remove('schema__mark_active');
      dialogBox.classList.remove('dialog-schema_active');
    });
  } catch (error) {
    console.log(error);
  }
};

/***/ })

/******/ });
//# sourceMappingURL=script.js.map