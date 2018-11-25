module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./comps/Footer.js":
/*!*************************!*\
  !*** ./comps/Footer.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/jbabak/Sites/dcapp/web/comps/Footer.js";



var linkStyle = {
  marginRight: 15
};

var Footer = function Footer() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-336191981" + " " + "footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-336191981",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Copyright DCAPP 2018. All Rights Reserved."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "336191981",
    css: ".footer.jsx-336191981{position:absolute;bottom:-40px;bottom:0px;background-color:white;margin-top:40px;box-sizing:border-box;max-width:100%;width:100%;margin:0 auto;padding:15px;font-size:16px;-webkit-box-shadow:2px 5px 20px -13px rgba(0,0,0,0.55);-moz-box-shadow:2px 5px 20px -13px rgba(0,0,0,0.55);box-shadow:2px 5px 20px -13px rgba(0,0,0,0.55);}.footer.jsx-336191981 p.jsx-336191981{font-size:12px;}@media screen and (min-width:768px){.footer.jsx-336191981{padding:40px;border:1px solid #DDD;}}@media screen and (min-width:920px){.footer.jsx-336191981 p.jsx-336191981{font-size:16px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYmFiYWsvU2l0ZXMvZGNhcHAvd2ViL2NvbXBzL0Zvb3Rlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFXaUIsQUFHd0IsQUFvQkgsQUFZRSxBQW9DRCxhQW5DTyxFQVp4QixBQWdEQyxHQXBFYSxhQUNGLElBcUNSLE9BcEN1Qix1QkFDUCxnQkFDTSxzQkFDUCxlQUNKLFdBQ0csY0FDRCxhQUVELGVBRXdDLHVEQUNILG9EQUNMLCtDQUU3QyIsImZpbGUiOiIvVXNlcnMvamJhYmFrL1NpdGVzL2RjYXBwL3dlYi9jb21wcy9Gb290ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmNvbnN0IGxpbmtTdHlsZSA9IHtcblx0bWFyZ2luUmlnaHQ6IDE1XG59XG5cbmNvbnN0IEZvb3RlciA9ICgpID0+IChcblxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyXCI+XG4gICAgXHQ8cD5Db3B5cmlnaHQgRENBUFAgMjAxOC4gQWxsIFJpZ2h0cyBSZXNlcnZlZC48L3A+XG5cbiAgICBcdDxzdHlsZSBqc3g+e2Bcblx0ICAgICAgLmZvb3RlciB7XG5cdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHRcdGJvdHRvbTogLTQwcHg7XG5cdFx0XHRcdFx0Ym90dG9tOiAwcHg7XG5cdCAgICAgIFx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG5cdCAgICAgIFx0bWFyZ2luLXRvcDogNDBweDtcblx0ICAgICAgXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHQgICAgICBcdG1heC13aWR0aDogMTAwJTtcblx0ICAgICAgXHR3aWR0aDogMTAwJTtcblx0ICAgICAgXHRtYXJnaW46IDAgYXV0bztcblx0ICAgICAgXHRwYWRkaW5nOiAxNXB4O1xuXHRcdFx0XHRcdC8vIGJvcmRlcjogMXB4IHNvbGlkICNEREQ7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxNnB4O1xuXG5cdFx0XHRcdFx0LXdlYmtpdC1ib3gtc2hhZG93OiAycHggNXB4IDIwcHggLTEzcHggcmdiYSgwLDAsMCwwLjU1KTtcblx0XHRcdFx0XHQtbW96LWJveC1zaGFkb3c6IDJweCA1cHggMjBweCAtMTNweCByZ2JhKDAsMCwwLDAuNTUpO1xuXHRcdFx0XHRcdGJveC1zaGFkb3c6IDJweCA1cHggMjBweCAtMTNweCByZ2JhKDAsMCwwLDAuNTUpO1xuXG5cdCAgICAgIH1cblxuXHRcdFx0XHQuZm9vdGVyIHAge1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMTJweDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG5cblx0XHRcdFx0XHQuZm9vdGVyIHtcblx0XHQgICAgICBcdC8vIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuXHRcdCAgICAgIFx0Ly8gbWFyZ2luLXRvcDogNDBweDtcblx0XHQgICAgICBcdC8vIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdFx0ICAgICAgXHQvLyBtYXgtd2lkdGg6IDEwMCU7XG5cdFx0ICAgICAgXHQvLyB3aWR0aDogMTAwJTtcblx0XHQgICAgICBcdC8vIG1hcmdpbjogMCBhdXRvO1xuXHRcdCAgICAgIFx0cGFkZGluZzogNDBweDtcblx0XHRcdFx0XHRcdGJvcmRlcjogMXB4IHNvbGlkICNEREQ7XG5cblx0XHRcdFx0XHRcdC8vIC13ZWJraXQtYm94LXNoYWRvdzogMnB4IDVweCAyMHB4IC0xM3B4IHJnYmEoMCwwLDAsMC41NSk7XG5cdFx0XHRcdFx0XHQvLyAtbW96LWJveC1zaGFkb3c6IDJweCA1cHggMjBweCAtMTNweCByZ2JhKDAsMCwwLDAuNTUpO1xuXHRcdFx0XHRcdFx0Ly8gYm94LXNoYWRvdzogMnB4IDVweCAyMHB4IC0xM3B4IHJnYmEoMCwwLDAsMC41NSk7XG5cblx0XHQgICAgICB9XG5cblx0XHRcdFx0XHQvLyAuZm9vdGVyIHAge1xuXHRcdFx0XHRcdC8vIFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdFx0XHRcdC8vIH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDkyMHB4KSB7XG5cblx0XHRcdFx0XHQvLyAuZm9vdGVyIHtcblx0XHRcdFx0XHQvLyBcdHBvc2l0aW9uOiBpbmhlcml0O1xuXHRcdFx0XHRcdC8vIFx0Ym90dG9tOiBpbmhlcml0O1xuXHRcdFx0XHRcdC8vXG5cdFx0XHRcdFx0Ly8gXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcblx0XHRcdFx0XHQvLyBcdG1hcmdpbi10b3A6IDQwcHg7XG5cdFx0XHRcdFx0Ly8gXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRcdFx0XHRcdC8vIFx0bWF4LXdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdC8vIFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0Ly8gXHRtYXJnaW46IDAgYXV0bztcblx0XHRcdFx0XHQvLyBcdHBhZGRpbmc6IDQwcHg7XG5cdFx0XHRcdFx0Ly8gXHRib3JkZXI6IDFweCBzb2xpZCAjREREO1xuXHRcdFx0XHRcdC8vXG5cdFx0XHRcdFx0Ly8gXHQtd2Via2l0LWJveC1zaGFkb3c6IDJweCA1cHggMjBweCAtMTNweCByZ2JhKDAsMCwwLDAuNTUpO1xuXHRcdFx0XHRcdC8vIFx0LW1vei1ib3gtc2hhZG93OiAycHggNXB4IDIwcHggLTEzcHggcmdiYSgwLDAsMCwwLjU1KTtcblx0XHRcdFx0XHQvLyBcdGJveC1zaGFkb3c6IDJweCA1cHggMjBweCAtMTNweCByZ2JhKDAsMCwwLDAuNTUpO1xuXHRcdFx0XHRcdC8vXG5cdFx0XHRcdFx0Ly8gfVxuXG5cdFx0XHRcdFx0LmZvb3RlciBwIHtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTZweDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXG4gICAgXHRgfTwvc3R5bGU+XG5cbiAgICA8L2Rpdj5cblxuKVxuXG5leHBvcnQgZGVmYXVsdCBGb290ZXJcbiJdfQ== */\n/*@ sourceURL=/Users/jbabak/Sites/dcapp/web/comps/Footer.js */",
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./comps/Header.js":
/*!*************************!*\
  !*** ./comps/Header.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/jbabak/Sites/dcapp/web/comps/Header.js";



var linkStyle = {
  default: {
    marginRight: 35,
    textDecoration: 'none'
  },
  bold: {
    marginRight: 15,
    fontWeight: 700,
    textDecoration: 'none',
    color: '#2a63ff'
  }
};

var Header = function Header() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3146251723" + " " + "header-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3146251723",
    css: ".header-container.jsx-3146251723{box-sizing:border-box;margin:0;width:100%;min-height:80px;margin:0 auto;background-color:#2CACFB;background-color:#FFF;color:white;padding:20px;-webkit-box-shadow:2px 5px 20px -13px rgba(0,0,0,0.55);-moz-box-shadow:2px 5px 20px -13px rgba(0,0,0,0.55);box-shadow:2px 5px 20px -13px rgba(0,0,0,0.55);}.header-container.jsx-3146251723 a.jsx-3146251723{color:white;color:#2CACFB;}.logo-branding.jsx-3146251723{color:black;font-size:36px;font-weight:bold;float:left;}.main-menu.jsx-3146251723{text-align:center;display:inline-block;width:100%;margin-top:40px;}.main-menu.jsx-3146251723 a.jsx-3146251723{color:#a9a9a9;}@media screen and (min-width:565px){.main-menu.jsx-3146251723{text-align:right;display:inline-block;width:50%;float:right;margin-top:20px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYmFiYWsvU2l0ZXMvZGNhcHAvd2ViL2NvbXBzL0hlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQmMsQUFNOEIsQUFzQlYsQUFLSCxBQVFRLEFBUU4sQUFVRyxZQTlCSCxBQU1JLEVBZ0JuQixHQVN1QixDQWxCRSxJQWxDWixJQXNCVixDQU1rQixJQTNCTixPQW9ESixDQWxCRyxHQWpDTSxFQTJCTCxJQTBCRCxFQW5CTSxLQU5qQixHQTNCZSxFQXFERCxNQWxCZCxNQWpDMEIsSUFxRDVCLHFCQXBEeUIsc0JBQ1YsWUFDQyxhQUt1Qyx1REFDSCxvREFDTCwrQ0FFN0MiLCJmaWxlIjoiL1VzZXJzL2piYWJhay9TaXRlcy9kY2FwcC93ZWIvY29tcHMvSGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5jb25zdCBsaW5rU3R5bGUgPSB7XG5cdGRlZmF1bHQ6IHtcblx0XHRtYXJnaW5SaWdodDogMzUsXG5cdFx0dGV4dERlY29yYXRpb246ICdub25lJ1xuXHR9LFxuXHRib2xkOiB7XG5cdFx0bWFyZ2luUmlnaHQ6IDE1LFxuXHRcdGZvbnRXZWlnaHQ6IDcwMCxcblx0XHR0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuXHRcdGNvbG9yOiAnIzJhNjNmZidcblx0fVxufVxuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiAoXG5cblx0PGRpdiBjbGFzc05hbWU9XCJoZWFkZXItY29udGFpbmVyXCI+XG5cblx0XHQ8c3R5bGUganN4PntgXG4gICAgICAuaGVhZGVyLWNvbnRhaW5lciB7XG5cblxuXG4gICAgICBcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICBcdC8vIG1heC13aWR0aDogOTAlO1xuICAgICAgXHRtYXJnaW46IDA7XG4gICAgICBcdHdpZHRoOiAxMDAlO1xuICAgICAgXHRtaW4taGVpZ2h0OiA4MHB4O1xuICAgICAgXHRtYXJnaW46IDAgYXV0bztcblxuICAgICAgXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMkNBQ0ZCO1xuICAgICAgXHRiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICAgICAgXHRjb2xvcjogd2hpdGU7XG4gICAgICBcdHBhZGRpbmc6IDIwcHg7XG5cdFx0XHRcdC8vIGJvcmRlcjogMXB4IHNvbGlkICNEREQ7XG5cblxuXG5cdFx0XHRcdC13ZWJraXQtYm94LXNoYWRvdzogMnB4IDVweCAyMHB4IC0xM3B4IHJnYmEoMCwwLDAsMC41NSk7XG5cdFx0XHRcdC1tb3otYm94LXNoYWRvdzogMnB4IDVweCAyMHB4IC0xM3B4IHJnYmEoMCwwLDAsMC41NSk7XG5cdFx0XHRcdGJveC1zaGFkb3c6IDJweCA1cHggMjBweCAtMTNweCByZ2JhKDAsMCwwLDAuNTUpO1xuXG4gICAgICB9XG5cbiAgICAgIC5oZWFkZXItY29udGFpbmVyIGEge1xuICAgICAgXHRjb2xvcjogd2hpdGU7XG5cdFx0XHRcdGNvbG9yOiAjMkNBQ0ZCO1xuICAgICAgfVxuXG4gICAgICAubG9nby1icmFuZGluZyB7XG5cdFx0XHRcdGNvbG9yOiBibGFjaztcbiAgICAgIFx0Ly8gbWFyZ2luLXRvcFxuICAgICAgXHRmb250LXNpemU6IDM2cHg7XG4gICAgICBcdGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgXHRmbG9hdDogbGVmdDtcbiAgICAgIH1cblxuICAgICAgLm1haW4tbWVudSB7XG4gICAgICBcdHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBcdHdpZHRoIDEwMCU7XG4gICAgICBcdG1hcmdpbi10b3A6IDQwcHg7XG5cbiAgICAgIH1cblxuXHRcdFx0Lm1haW4tbWVudSBhIHtcblx0XHRcdFx0Y29sb3I6ICNhOWE5YTk7XG5cblx0XHRcdH1cblxuXHRcdFx0QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTY1cHgpIHtcblx0XHRcdCAgLmhlYWRlci1jb250YWluZXIge1xuXHRcdFx0ICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICMxMDJENjQ7XG5cdFx0XHQgIH1cblxuXHRcdFx0XHQubWFpbi1tZW51IHtcblx0XHRcdFx0XHR0ZXh0LWFsaWduOnJpZ2h0O1xuXHRcdFx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0XHRcdFx0XHR3aWR0aCA1MCU7XG5cdFx0XHRcdFx0Ly8gYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG5cdFx0XHRcdFx0ZmxvYXQ6IHJpZ2h0O1xuXHRcdFx0XHRcdG1hcmdpbi10b3A6MjBweDtcblxuXHRcdFx0XHR9XG5cblx0XHRcdH1cblxuXG4gICAgYH08L3N0eWxlPlxuXG4gICAgXHQ8TGluayBocmVmPVwiL1wiPjxhPjxzcGFuIGNsYXNzTmFtZT1cImxvZ28tYnJhbmRpbmdcIj5EcnljbGVlbjwvc3Bhbj48L2E+PC9MaW5rPlxuXG4gICAgXHQ8ZGl2IGNsYXNzTmFtZT1cIm1haW4tbWVudVwiPlxuXHQgICAgICB7LyogPExpbmsgaHJlZj1cIi9cIj5cblx0ICAgICAgICA8YSBzdHlsZT17bGlua1N0eWxlLmRlZmF1bHR9PkhvbWU8L2E+XG5cdCAgICAgIDwvTGluaz4gKi99XG5cdCAgICAgIDxMaW5rIGhyZWY9XCIvc2lnbi11cFwiPlxuXHQgICAgICAgIDxhIHN0eWxlPXtsaW5rU3R5bGUuZGVmYXVsdH0+U2lnbi1VcDwvYT5cblx0ICAgICAgPC9MaW5rPlxuXHQgICAgICA8TGluayBocmVmPVwiL21hcFwiPlxuXHQgICAgICAgIDxhIHN0eWxlPXtsaW5rU3R5bGUuYm9sZH0+VmlldyBNQVA8L2E+XG5cdCAgICAgIDwvTGluaz5cblxuXHQgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlclxuIl19 */\n/*@ sourceURL=/Users/jbabak/Sites/dcapp/web/comps/Header.js */",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-3146251723",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-3146251723" + " " + "logo-branding",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, "Drycleen"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3146251723" + " " + "main-menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/sign-up",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    style: linkStyle.default,
    className: "jsx-3146251723",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, "Sign-Up")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/map",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    style: linkStyle.bold,
    className: "jsx-3146251723",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, "View MAP"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./comps/Layout.js":
/*!*************************!*\
  !*** ./comps/Layout.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./comps/Header.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Footer */ "./comps/Footer.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/jbabak/Sites/dcapp/web/comps/Layout.js";







var Layout = function Layout(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2796307878" + " " + "wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2796307878",
    css: "div.wrapper.jsx-2796307878{position:relative;box-sizing:border-box;margin:0;width:100%;margin:0 auto;padding:0px;padding-top:0;background-color:#ececec;-webkit-box-shadow:2px 5px 20px -13px rgba(0,0,0,0.55);-moz-box-shadow:2px 5px 20px -13px rgba(0,0,0,0.55);box-shadow:2px 5px 20px -13px rgba(0,0,0,0.55);font-family:'Montserrat',sans-serif;background-image:url('/static/marker.svg');background-size:contain;background-position:500px 800px;background-position:600px bottom;background-repeat:no-repeat;padding-bottom:120px;min-height:100vh;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYmFiYWsvU2l0ZXMvZGNhcHAvd2ViL2NvbXBzL0xheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFXYyxBQUd1QixrQkFDTyxzQkFDYixTQUNFLFdBRUcsY0FDRixZQUNFLGNBRVcseUJBRTJCLHVEQUNILG9EQUNMLCtDQUVWLG9DQUVNLDJDQUNuQix3QkFDUSxnQ0FDQyxpQ0FDTCw0QkFFUCxxQkFDSixpQkFDZiIsImZpbGUiOiIvVXNlcnMvamJhYmFrL1NpdGVzL2RjYXBwL3dlYi9jb21wcy9MYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9Gb290ZXInO1xuXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5cbmNvbnN0IExheW91dCA9IChwcm9wcykgPT4gKFxuXG5cdDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxuXG5cblx0XHQ8c3R5bGUganN4PntgXG4gICAgICBkaXYud3JhcHBlciB7XG5cdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgIFx0bWFyZ2luOiAwO1xuICAgICAgXHR3aWR0aDogMTAwJTtcblxuICAgICAgXHRtYXJnaW46IDAgYXV0bztcbiAgICAgIFx0cGFkZGluZzogMHB4O1xuICAgICAgXHRwYWRkaW5nLXRvcDogMDtcblxuICAgICAgXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2VjO1xuXG5cdFx0XHRcdC13ZWJraXQtYm94LXNoYWRvdzogMnB4IDVweCAyMHB4IC0xM3B4IHJnYmEoMCwwLDAsMC41NSk7XG5cdFx0XHRcdC1tb3otYm94LXNoYWRvdzogMnB4IDVweCAyMHB4IC0xM3B4IHJnYmEoMCwwLDAsMC41NSk7XG5cdFx0XHRcdGJveC1zaGFkb3c6IDJweCA1cHggMjBweCAtMTNweCByZ2JhKDAsMCwwLDAuNTUpO1xuXG5cdFx0XHRcdGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG5cblx0XHRcdFx0YmFja2dyb3VuZC1pbWFnZTogdXJsKCcvc3RhdGljL21hcmtlci5zdmcnKTtcblx0XHRcdFx0YmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuXHRcdFx0XHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MDBweCA4MDBweDtcblx0XHRcdFx0YmFja2dyb3VuZC1wb3NpdGlvbjogNjAwcHggYm90dG9tO1xuXHRcdFx0XHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuXG5cdFx0XHRcdHBhZGRpbmctYm90dG9tOiAxMjBweDtcblx0XHRcdFx0bWluLWhlaWdodDogMTAwdmg7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuXG5cdFx0PEhlYWQ+XG4gICAgICA8dGl0bGU+RHJ5Y2xlZW4gQXBwIHwgVGhlIFBsYXRmb3JtIEZvciBZb3VyIERyeSBDbGVhbmluZzwvdGl0bGU+XG4gICAgICA8bWV0YSBjaGFyU2V0PSd1dGYtOCcgLz5cbiAgICAgIDxtZXRhIG5hbWU9J3ZpZXdwb3J0JyBjb250ZW50PSdpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoJyBrZXk9XCJ2aWV3cG9ydFwiLz5cbiAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvbm9ybWFsaXplLzcuMC4wL25vcm1hbGl6ZS5jc3NcIiAvPlxuICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0OjIwMCwzMDAsNDAwLDQwMGksNTAwLDYwMCw2MDBpLDcwMCw4MDAsOTAwXCIgcmVsPVwic3R5bGVzaGVldFwiLz5cbiAgICA8L0hlYWQ+XG5cblx0XHQ8SGVhZGVyLz5cblxuXHRcdHtwcm9wcy5jaGlsZHJlbn1cblxuXHRcdDxGb290ZXIvPlxuXG5cblx0PC9kaXY+XG5cblxuXG4pXG5cbmV4cG9ydCBkZWZhdWx0IExheW91dFxuXG5cbi8vIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvbm9ybWFsaXplLzcuMC4wL25vcm1hbGl6ZS5jc3NcIiAvPlxuIl19 */\n/*@ sourceURL=/Users/jbabak/Sites/dcapp/web/comps/Layout.js */",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
    className: "jsx-2796307878",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "Drycleen App | The Platform For Your Dry Cleaning"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    charSet: "utf-8",
    className: "jsx-2796307878",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    key: "viewport",
    className: "jsx-2796307878",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.css",
    className: "jsx-2796307878",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Montserrat:200,300,400,400i,500,600,600i,700,800,900",
    rel: "stylesheet",
    className: "jsx-2796307878",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }), props.children, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout); // <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.css" />

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _comps_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../comps/Header */ "./comps/Header.js");
/* harmony import */ var _comps_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../comps/Layout */ "./comps/Layout.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "/Users/jbabak/Sites/dcapp/web/pages/index.js";



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// import { withStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';





var Index = function Index(props) {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_comps_Layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    styleId: "505870426",
    css: ".container.jsx-505870426{min-height:1100px;z-index:2;overflow:hidden;width:calc(100% - 40px);margin:0 auto;position:relative;}.hero-wrapper.jsx-505870426{position:relative;}.left-side.jsx-505870426{float:left;width:50%;display:inline-block;}.right-side.jsx-505870426{float:none;width:100%;margin-left:100px;padding-top:40px;display:inline-block;max-height:400px;overflow:hidden;}.intro-text.jsx-505870426{margin-left:30%;width:80%;margin-top:75px;font-weight:700;font-size:33px;}.subheading.jsx-505870426{text-align:left;margin-left:0px;margin-top:80px;color:white;font-weight:700;font-size:38px;}.body-text.jsx-505870426{box-sizing:border-box;clear:both;width:100%;margin:0 auto;display:block;padding:10px;padding-bottom:60px;padding-left:0;margin-top:25px;font-weight:500;font-size:16px;color:#777;line-height:1.43;}.white.jsx-505870426{margin:0;margin-top:30px;font-weight:300;color:white;width:75%;}.white-square.jsx-505870426{width:87%;min-height:400px;position:absolute;right:-70px;right:7%;top:50px;background-color:white;z-index:-1;-webkit-box-shadow:1px 77px 103px -71px rgba(153,153,153,1);-moz-box-shadow:1px 77px 103px -71px rgba(153,153,153,1);box-shadow:1px 77px 103px -71px rgba(153,153,153,1);}.go-to-map.jsx-505870426{clear:both;background-color:#102D64;width:90%;min-height:450px;margin-top:50px;margin-bottom:45px;display:inline-block;padding:30px;padding-top:0;padding-right:0;padding-bottom:0;-webkit-box-shadow:1px 72px 126px -71px rgba(153,153,153,1);-moz-box-shadow:1px 72px 126px -71px rgba(153,153,153,1);box-shadow:1px 72px 126px -71px rgba(153,153,153,1);}.form-field-text.jsx-505870426{width:65%;display:block;height:45px;margin-top:68px;border-radius:45px;padding-left:35px;font-weight:200;border:5px solid #2CABFB;}a.cta-link.jsx-505870426{clear:both;display:block;text-align:center;font-weight:600;-webkit-text-decoration:none;text-decoration:none;margin:0 auto;margin-top:40px;margin-bottom:60px;background-color:#102D64;color:white;text-transform:uppercase;width:40%;padding-left:60px;padding-right:60px;padding-top:13px;padding-bottom:13px;border-radius:45px;-webkit-transition:all 0.4s ease-out;transition:all 0.4s ease-out;border:3px solid #ececec;}a.cta-link.jsx-505870426:hover{-webkit-box-shadow:1px 72px 126px -71px rgba(153,153,153,1);-moz-box-shadow:1px 72px 126px -71px rgba(153,153,153,1);box-shadow:1px 72px 126px -71px rgba(153,153,153,1);background-color:white;color:#2CABFB;border:3px solid #2CABFB;cursor:pointer;}.cta-text-wide.jsx-505870426{display:block;margin-top:50px;padding-top:80px;font-size:23px;text-align:center;line-height:1.64;}.cta-text-summary.jsx-505870426{display:block;margin-top:40px;font-size:16px;text-align:left;line-height:1.64;}.cta-3-wrapper.jsx-505870426{margin-top:100px;}.card.jsx-505870426{border-top:1px solid #c8c8c8;padding-top:60px;padding-bottom:60px;}.field-icon.jsx-505870426{width:100%;text-align:center;}.icon.jsx-505870426{width:30%;}.icon-tint.jsx-505870426{width:22%;}.field-title.jsx-505870426{margin-top:30px;font-size:36px;text-align:center;}.field-summary.jsx-505870426{width:75%;margin:0 auto;margin-top:15px;text-align:center;}.cta-bottom-wrapper.jsx-505870426{background-color:white;-webkit-box-shadow:0px 2px 5px 0px rgba(212,212,212,1);-moz-box-shadow:0px 2px 5px 0px rgba(212,212,212,1);box-shadow:0px 2px 5px 0px rgba(212,212,212,1);padding-bottom:10px;margin-bottom:150px;padding-left:30px;padding-right:30px;}.arrow-icon.jsx-505870426{width:30%;float:right;margin-bottom:30px;margin-right:30px;}@media screen and (min-width:768px){.cta-text-summary.jsx-505870426{display:block;margin-top:40px;font-size:16px;text-align:center;line-height:1.64;}.arrow-icon.jsx-505870426{width:15%;float:right;margin-bottom:30px;margin-right:30px;}}@media screen and (min-width:902px){.left-side.jsx-505870426{float:left;padding-top:150px;width:50%;display:inline-block;}.right-side.jsx-505870426{float:left;width:50%;margin-left:inherit;max-height:inherit;padding-top:40px;display:inline-block;text-align:center;}.intro-text.jsx-505870426{margin-left:20%;margin-top:75px;font-weight:700;font-size:63px;}.go-to-map.jsx-505870426{position:relative;clear:both;width:70%;min-height:450px;margin-top:110px;margin-bottom:75px;display:inline-block;padding:60px;padding-top:0;padding-right:0;padding-bottom:0;}.arrow-icon.jsx-505870426{position:absolute;right:0;bottom:0;}.subheading.jsx-505870426{text-align:left;margin-left:0px;margin-top:80px;color:white;font-weight:700;font-size:38px;}.body-text.jsx-505870426{box-sizing:border-box;clear:both;width:60%;margin-left:10%;display:inline-block;margin-top:50px;font-weight:500;font-size:23px;color:#777;padding:0;}.white.jsx-505870426{margin:0;margin-top:30px;font-weight:300;color:white;width:75%;}.white-square.jsx-505870426{width:87%;min-height:700px;position:absolute;right:-70px;right:7%;top:140px;background-color:white;z-index:-1;-webkit-box-shadow:1px 77px 103px -71px rgba(153,153,153,1);-moz-box-shadow:1px 77px 103px -71px rgba(153,153,153,1);box-shadow:1px 77px 103px -71px rgba(153,153,153,1);}a.cta-link.jsx-505870426{clear:both;display:block;text-align:center;font-weight:700;margin:0 auto;margin-top:50px;margin-bottom:100px;background-color:#102D64;color:white;text-transform:uppercase;width:40%;padding-left:120px;padding-right:120px;padding-top:23px;padding-bottom:23px;border-radius:45px;-webkit-transition:all 0.2s;transition:all 0.2s;border:3px solid #ececec;}a.cta-link.jsx-505870426:hover{-webkit-box-shadow:1px 72px 126px -71px rgba(153,153,153,1);-moz-box-shadow:1px 72px 126px -71px rgba(153,153,153,1);box-shadow:1px 72px 126px -71px rgba(153,153,153,1);background-color:white;color:#2CABFB;border:3px solid #2CABFB;cursor:pointer;}.cta-text-wide.jsx-505870426{display:block;margin-top:70px;font-size:23px;text-align:center;line-height:1.64;}.field-image.jsx-505870426{width:100%;}.cta-3-wrapper.jsx-505870426{clear:both;width:85%;margin:0px auto;margin-bottom:0;}.card.jsx-505870426{width:33.3333333333367%;display:inline-block;border-top:none;padding-top:60px;padding-bottom:60px;}.field-icon.jsx-505870426{width:100%;text-align:left;}.icon.jsx-505870426{width:30%;}.icon-tint.jsx-505870426{width:19%;}.field-title.jsx-505870426{margin-top:30px;font-size:36px;text-align:left;}.field-summary.jsx-505870426{width:68%;margin-left:0;margin-top:15px;text-align:left;}.cta-bottom-wrapper.jsx-505870426{padding-left:20px;padding-right:20px;width:70%;margin:0 auto;background-color:white;-webkit-box-shadow:1px 72px 126px -71px rgba(153,153,153,1);-moz-box-shadow:1px 72px 126px -71px rgba(153,153,153,1);box-shadow:1px 72px 126px -71px rgba(153,153,153,1);padding-bottom:10px;margin-bottom:100px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYmFiYWsvU2l0ZXMvZGNhcHAvd2ViL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtCZ0IsQUFHeUIsQUFVRSxBQUlULEFBUUEsQUFZSyxBQVVBLEFBV1EsQUFpQmYsQUFXWCxBQUdXLEFBa0JFLEFBbUJGLEFBZUksQUF1QitDLEFBVTVDLEFBV0EsQUFXRyxBQUlZLEFBTWxCLEFBS0QsQUFJQSxBQUlNLEFBTU4sQUFTYSxBQVliLEFBUU0sQUFTSixBQVVDLEFBUUEsQUFXSyxBQVNFLEFBaUJBLEFBT0YsQUFXTSxBQWFiLEFBVVosQUFHWSxBQWtCRSxBQXNCaUQsQUFXOUMsQUFVSCxBQUlBLEFBT2EsQUFRYixBQUtELEFBSUEsQUFJTSxBQU9OLEFBUVEsU0F6WU4sQUFrUkksQ0FyUUgsQUFxQ0gsQUFxRmQsQUFJQSxBQVVnQixBQXFCRixBQWlCRSxBQW1HSyxBQXFGbkIsQUFJQSxBQVdnQixDQTViUixBQU9DLEFBa0ZjLEFBa0NYLEFBaUVNLEFBbUVFLEFBUVIsQUFtR0ksQUEyQ2hCLEFBSVksQUFlTSxHQTNRRixBQVdBLEFBcUVFLEFBOEpBLEVBeFhSLEFBVUksQUE0S0MsQUF5RUcsQUFpQ0EsQUFrSUQsQ0FuUW5CLENBak1VLEFBVVYsQUFnU2UsQUFpQkgsQUF3SlcsR0FsY3pCLEFBc1EwQixBQWtKSixDQWxaQSxBQWdDUCxBQTZMUSxBQWlCRSxBQXdFUixDQXRHMEMsQ0ExRzdDLEFBa0dNLEFBZ05PLEFBOEJMLENBbllKLEFBaUVFLEFBaU5FLEFBOEJFLENBdFZOLEFBd1JILENBcE9LLEFBaVJJLEFBK0VwQixDQXZiYyxDQW9NRyxBQU9uQixBQW1FYyxBQThCQSxDQWhJSyxBQVlGLEFBcUVFLEFBOEpBLENBbk1DLEFBNE9BLENBeFpKLEFBcVBJLEFBaUNBLENBM1FQLEFBc1JDLEVBaEJaLENBcE5RLEFBb0JNLENBNFNJLEFBMENOLEVBbk1iLEFBNkJvQixDQXRSSixBQXdNRyxBQThPQSxDQW5ZUixBQTBLUSxBQWlCRSxBQWtCQyxBQXFFUCxDQTVVakIsQUFvQmlCLENBdUdBLEFBbU1JLEFBNENBLENBeFhJLEFBc0RSLENBZ0NKLEFBaUdNLEFBcUVJLEFBMkdOLEFBbURNLEFBbUJGLENBclVILEFBMkZLLENBeEJMLEFBeVJoQixBQUFDLEFBY2dCLENBdmFOLEFBcVBPLEFBaUNILENBMUdoQixHQTFGcUIsQ0FwRFgsQUFrUkksQUE2RVosR0E1SG1CLEFBZ0tuQixDQXJibUIsQUFnRVosQUFpUkksQ0FyVUUsQUFvQkMsQUF1S2hCLENBcEZzQixBQXlHdEIsQUFpQkUsQUF5RXVCLEFBNENQLENBN1VGLEFBa0h1QyxBQWdIckQsQUFRbUIsQUE0Q0QsQUEwRXlDLENBcE4xQyxBQXNQRSxBQXFDTSxDQXZTUCxDQWxHckIsQUErQmlCLEFBb0pLLEFBcUNuQixBQTBEQSxBQStEbUIsR0FuVVosQUE0R1QsQUFxS2MsRUF4V0EsR0E2SEksQ0F0RUgsQ0FuQmhCLEFBd1F3QixBQTZFSCxFQWhTRyxDQTdDUixBQXNSSSxBQXdDUSxDQW5GRixDQS9QTixBQWdLbkIsQUE0Q3NELEFBME05QixDQXJVTCxDQW1FQSxBQWlGakIsQUFnRmtCLEFBK0VsQixFQTNaZ0IsRUFrZDhDLENBM1oxQyxJQXNFTixBQTRQTyxFQTNVeEIsQUFzUkcsQ0F4QnNCLEdBcFJOLENBcVRFLENBaEtwQixDQXBGVyxBQWdCUyxBQThLRSxBQXVKcEIsQ0FwRWEsQ0F6V2hCLEtBdURrQixBQXVFUSxJQXBDbUMsQUE4QzlDLEFBaVBlLENBZG1DLENBblZqRSxDQXFUb0IsQ0FqQ0YsR0FyQmYsQ0EzSGdELEFBOE9NLEVBalMzQyxDQWhERyxHQWdGRSxHQW9LRCxDQWlDRixHQTlNaEIsQUFtR2tELEVBekhwQyxFQWdSRyxFQWhVQSxFQXFSRixDQXJNSSxDQW9LRSxJQW9LeUMsRUF2VzdDLEFBZ1JhLEVBM0MzQixJQXJSYSxJQW9QTSxFQXBLSSxJQS9CUixLQWhETixFQStCNEMsQUFrRWhDLEFBOE9JLENBL0JrQyxDQWlCL0MsRUE1RVosSUE3RW9CLENBdktILENBaUR5QyxFQWdSckMsRUFsUFgsU0FrQkUsQUE4T0ksR0E5VW5CLEFBK0UwQixFQXdGSCxHQTBKRSxDQW9GZ0MsS0FwVC9CLEFBOE9JLFdBdktULEdBdkZWLEFBaVBXLE1BcFM2QixDQWlSTSxHQTdOdEMsQ0FnQkgsQUE4T0ksSUF2S0UsRUEwSkcsRUFsUitCLE9Ba0R4RCxBQThPRyxFQTlQaUIsS0FtVUssQ0EzT3hCLEdBeUp1QixVQWhQTixNQW1VTyxHQWxGQSxFQXJTekIsQ0FpUkcsS0E1TmtCLFNBb1VsQixHQXZXZ0QsUUFvQy9CLG1CQUNVLENBK09BLHdCQW5SOUIsQ0FvUkcsd0NBL091Qix5QkFDMUIiLCJmaWxlIjoiL1VzZXJzL2piYWJhay9TaXRlcy9kY2FwcC93ZWIvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vIGltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuLy8gaW1wb3J0IEFwcEJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXInO1xuLy8gaW1wb3J0IFRvb2xiYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhcic7XG4vLyBpbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5Jztcbi8vIGltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbi8vIGltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xuLy8gaW1wb3J0IE1lbnVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9NZW51JztcblxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wcy9IZWFkZXInXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBzL0xheW91dCdcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnXG5cblxuY29uc3QgSW5kZXggPSAocHJvcHMpID0+IChcbiAgPExheW91dD5cblxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICBcdC5jb250YWluZXIge1xuICAgIFx0XHRtaW4taGVpZ2h0OiAxMTAwcHg7XG4gICAgXHRcdHotaW5kZXg6IDI7XG4gICAgXHRcdG92ZXJmbG93OiBoaWRkZW47XG4gICAgXHRcdC8vIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICBcdFx0d2lkdGg6IGNhbGMoMTAwJSAtIDQwcHgpO1xuICAgIFx0XHRtYXJnaW46IDAgYXV0bztcbiAgICBcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuICAgIFx0fVxuXG4gICAgICAuaGVyby13cmFwcGVyIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuXG4gICAgXHQubGVmdC1zaWRlIHtcbiAgICBcdFx0ZmxvYXQ6IGxlZnQ7XG4gICAgXHRcdC8vIHBhZGRpbmctdG9wOiAxNTBweDtcbiAgICBcdFx0d2lkdGg6IDUwJTtcbiAgICBcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrXG4gICAgXHR9XG5cbiAgICBcdC5yaWdodC1zaWRlIHtcblxuICAgIFx0XHRmbG9hdDogbm9uZTtcbiAgICBcdFx0d2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMDBweDtcbiAgICBcdFx0cGFkZGluZy10b3A6IDQwcHg7XG4gICAgXHRcdC8vIHBhZGRpbmc6IDQwcHg7XG4gICAgXHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBcdFx0Ly8gdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIG1heC1oZWlnaHQ6IDQwMHB4O1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIFx0fVxuXG4gICAgXHQuaW50cm8tdGV4dCB7XG4gICAgXHRcdG1hcmdpbi1sZWZ0OiAzMCU7XG4gICAgICAgIHdpZHRoOiA4MCU7XG5cbiAgICBcdFx0bWFyZ2luLXRvcDogNzVweDtcbiAgICBcdFx0Zm9udC13ZWlnaHQ6IDcwMDtcbiAgICBcdFx0Zm9udC1zaXplOiAzM3B4O1xuXG4gICAgXHR9XG5cbiAgICBcdC5zdWJoZWFkaW5nIHtcbiAgICBcdFx0dGV4dC1hbGlnbjogbGVmdDtcbiAgICBcdFx0bWFyZ2luLWxlZnQ6IDBweDtcbiAgICBcdFx0bWFyZ2luLXRvcDogODBweDtcbiAgICBcdFx0Y29sb3I6IHdoaXRlO1xuICAgIFx0XHRmb250LXdlaWdodDogNzAwO1xuICAgIFx0XHRmb250LXNpemU6IDM4cHg7XG5cblxuICAgIFx0fVxuXG4gICAgXHQuYm9keS10ZXh0IHtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgY2xlYXI6IGJvdGg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA2MHB4O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgXHRcdC8vIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIFx0XHRtYXJnaW4tdG9wOiAyNXB4O1xuICAgIFx0XHRmb250LXdlaWdodDogNTAwO1xuICAgIFx0XHRmb250LXNpemU6IDE2cHg7XG4gICAgXHRcdGNvbG9yOiAjNzc3O1xuICAgICAgICBsaW5lLWhlaWdodDogMS40MztcbiAgICBcdH1cblxuICAgIFx0LndoaXRlIHtcbiAgICBcdFx0bWFyZ2luOiAwO1xuICAgIFx0XHQvLyBtYXJnaW4tbGVmdDo2MHB4O1xuICAgIFx0XHRtYXJnaW4tdG9wOiAzMHB4O1xuICAgIFx0XHRmb250LXdlaWdodDogMzAwO1xuICAgIFx0XHRjb2xvcjogd2hpdGU7XG4gICAgXHRcdHdpZHRoOiA3NSU7XG4gICAgXHR9XG5cbiAgICBcdGltZyB7XG4gICAgXHRcdHdpZHRoOiAxMDAlOlxuICAgICAgICAvLyBtYXJnaW4tbGVmdDogMjAwcHg7XG4gICAgXHR9XG5cbiAgICBcdC53aGl0ZS1zcXVhcmUge1xuICAgIFx0XHR3aWR0aDo4NyU7XG4gICAgXHRcdG1pbi1oZWlnaHQ6IDQwMHB4O1xuICAgIFx0XHQvLyBtaW4taGVpZ2h0OiA2MCU7XG4gICAgXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBcdFx0cmlnaHQ6IC03MHB4O1xuICAgIFx0XHRyaWdodDogNyU7XG4gICAgXHRcdHRvcDogNTBweDtcblxuICAgIFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBcdFx0ei1pbmRleDogLTE7XG5cbiAgICBcdFx0LXdlYmtpdC1ib3gtc2hhZG93OiAxcHggNzdweCAxMDNweCAtNzFweCByZ2JhKDE1MywxNTMsMTUzLDEpO1xuXHRcdFx0XHQtbW96LWJveC1zaGFkb3c6IDFweCA3N3B4IDEwM3B4IC03MXB4IHJnYmEoMTUzLDE1MywxNTMsMSk7XG5cdFx0XHRcdGJveC1zaGFkb3c6IDFweCA3N3B4IDEwM3B4IC03MXB4IHJnYmEoMTUzLDE1MywxNTMsMSk7XG5cbiAgICBcdH1cblxuICAgIFx0LmdvLXRvLW1hcCB7XG4gICAgXHRcdGNsZWFyOiBib3RoO1xuICAgIFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMTAyRDY0O1xuICAgIFx0XHQvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjMkNBQkZCO1xuICAgIFx0XHR3aWR0aDogOTAlO1xuICAgIFx0XHRtaW4taGVpZ2h0OiA0NTBweDtcbiAgICBcdFx0bWFyZ2luLXRvcDogNTBweDtcbiAgICBcdFx0bWFyZ2luLWJvdHRvbTogNDVweDtcbiAgICBcdFx0ZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gICAgXHRcdHBhZGRpbmc6IDMwcHg7XG4gICAgXHRcdHBhZGRpbmctdG9wOjA7XG4gICAgXHRcdHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgXHRcdHBhZGRpbmctYm90dG9tOiAwO1xuXG4gICAgXHRcdC13ZWJraXQtYm94LXNoYWRvdzogMXB4IDcycHggMTI2cHggLTcxcHggcmdiYSgxNTMsMTUzLDE1MywxKTtcblx0XHRcdFx0LW1vei1ib3gtc2hhZG93OiAxcHggNzJweCAxMjZweCAtNzFweCByZ2JhKDE1MywxNTMsMTUzLDEpO1xuXHRcdFx0XHRib3gtc2hhZG93OiAxcHggNzJweCAxMjZweCAtNzFweCByZ2JhKDE1MywxNTMsMTUzLDEpO1xuICAgIFx0fVxuXG4gICAgXHQuZm9ybS1maWVsZC10ZXh0IHtcbiAgICBcdFx0d2lkdGg6NjUlO1xuICAgIFx0XHRkaXNwbGF5OiBibG9jaztcbiAgICBcdFx0Ly8gbWFyZ2luOiAwIGF1dG87XG4gICAgXHRcdGhlaWdodDogNDVweDtcbiAgICBcdFx0bWFyZ2luLXRvcDogNjhweDtcblxuICAgICAgICBib3JkZXItcmFkaXVzOiA0NXB4O1xuICAgIFx0XHRwYWRkaW5nLWxlZnQ6IDM1cHg7XG4gICAgXHRcdGZvbnQtd2VpZ2h0OiAyMDA7XG4gICAgXHRcdC8vIHRleHQtYWxpZ246Y2VudGVyO1xuICAgIFx0XHRib3JkZXI6IDVweCBzb2xpZCAjMkNBQkZCO1xuXG4gICAgXHR9XG5cbiAgICBcdGEuY3RhLWxpbmsge1xuICAgICAgICBjbGVhcjogYm90aDtcbiAgICBcdFx0ZGlzcGxheTogYmxvY2s7XG4gICAgXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XG4gICAgXHRcdG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgIFx0XHRtYXJnaW4tYm90dG9tOjYwcHg7XG4gICAgXHRcdGJhY2tncm91bmQtY29sb3I6ICMxMDJENjQ7XG4gICAgXHRcdGNvbG9yOiB3aGl0ZTtcbiAgICBcdFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBcdFx0Ly8gYm9yZGVyOiA0cHggc29saWQgIzJDQUJGQjtcbiAgICBcdFx0d2lkdGg6IDQwJTtcbiAgICBcdFx0cGFkZGluZy1sZWZ0OiA2MHB4O1xuICAgIFx0XHRwYWRkaW5nLXJpZ2h0OiA2MHB4O1xuICAgIFx0XHRwYWRkaW5nLXRvcDogMTNweDtcbiAgICBcdFx0cGFkZGluZy1ib3R0b206IDEzcHg7XG4gICAgXHRcdGJvcmRlci1yYWRpdXM6IDQ1cHg7XG4gICAgXHRcdHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2Utb3V0O1xuICAgIFx0XHRib3JkZXI6IDNweCBzb2xpZCAjZWNlY2VjO1xuICAgIFx0fVxuXG4gICAgXHRhLmN0YS1saW5rOmhvdmVyIHtcbiAgICBcdFx0LXdlYmtpdC1ib3gtc2hhZG93OiAxcHggNzJweCAxMjZweCAtNzFweCByZ2JhKDE1MywxNTMsMTUzLDEpO1xuXHRcdFx0XHQtbW96LWJveC1zaGFkb3c6IDFweCA3MnB4IDEyNnB4IC03MXB4IHJnYmEoMTUzLDE1MywxNTMsMSk7XG5cdFx0XHRcdGJveC1zaGFkb3c6IDFweCA3MnB4IDEyNnB4IC03MXB4IHJnYmEoMTUzLDE1MywxNTMsMSk7XG4gICAgXHRcdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIFx0XHRjb2xvcjogIzJDQUJGQjtcbiAgICBcdFx0Ym9yZGVyOiAzcHggc29saWQgIzJDQUJGQjtcbiAgICBcdFx0Y3Vyc29yOiBwb2ludGVyO1xuICAgIFx0fVxuXG4gICAgICAuY3RhLXRleHQtd2lkZSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAvLyBib3JkZXItdG9wOiAycHggc29saWQgI2M4YzhjODtcbiAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICAgICAgcGFkZGluZy10b3A6IDgwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMjNweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBsaW5lLWhlaWdodDogMS42NDtcblxuICAgICAgfVxuXG4gICAgICAuY3RhLXRleHQtc3VtbWFyeSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAvLyBib3JkZXItdG9wOiAycHggc29saWQgI2M4YzhjODtcbiAgICAgICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICAgICAgLy8gcGFkZGluZy10b3A6IDgwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNjQ7XG4gICAgICB9XG5cblxuICAgICAgLmN0YS0zLXdyYXBwZXIge1xuICAgICAgICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgICAgIH1cblxuICAgICAgLmNhcmQge1xuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2M4YzhjODtcbiAgICAgICAgcGFkZGluZy10b3A6IDYwcHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA2MHB4O1xuICAgICAgfVxuXG4gICAgICAuZmllbGQtaWNvbiB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIC5pY29uIHtcbiAgICAgICAgd2lkdGg6IDMwJTtcbiAgICAgIH1cblxuICAgICAgLmljb24tdGludCB7XG4gICAgICAgIHdpZHRoOiAyMiU7XG4gICAgICB9XG5cbiAgICAgIC5maWVsZC10aXRsZSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICAuZmllbGQtc3VtbWFyeSB7XG4gICAgICAgIHdpZHRoOiA3NSU7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIC5jdGEtYm90dG9tLXdyYXBwZXIge1xuICAgICAgICAvLyB3aWR0aDogNzAlO1xuICAgICAgICAvLyBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDJweCA1cHggMHB4IHJnYmEoMjEyLDIxMiwyMTIsMSk7XG4gICAgICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDJweCA1cHggMHB4IHJnYmEoMjEyLDIxMiwyMTIsMSk7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAycHggNXB4IDBweCByZ2JhKDIxMiwyMTIsMjEyLDEpO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTUwcHg7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMzBweDtcblxuICAgICAgfVxuXG4gICAgICAuYXJyb3ctaWNvbiB7XG4gICAgICAgIHdpZHRoOiAzMCU7XG4gICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAgICAgICAuY3RhLXRleHQtc3VtbWFyeSB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgLy8gYm9yZGVyLXRvcDogMnB4IHNvbGlkICNjOGM4Yzg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICAgICAgICAvLyBwYWRkaW5nLXRvcDogODBweDtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjY0O1xuICAgICAgICB9XG4gICAgICAgIC5hcnJvdy1pY29uIHtcbiAgICAgICAgICB3aWR0aDogMTUlO1xuICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMzBweDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5MDJweCkge1xuXG4gICAgICAgIC5sZWZ0LXNpZGUge1xuICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgIHBhZGRpbmctdG9wOiAxNTBweDtcbiAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9ja1xuICAgICAgICB9XG5cbiAgICAgICAgLnJpZ2h0LXNpZGUge1xuXG4gICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogaW5oZXJpdDtcbiAgICAgICAgICBtYXgtaGVpZ2h0OiBpbmhlcml0O1xuICAgICAgICAgIHBhZGRpbmctdG9wOiA0MHB4O1xuICAgICAgICAgIC8vIHBhZGRpbmc6IDQwcHg7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pbnRyby10ZXh0IHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMjAlO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDc1cHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICBmb250LXNpemU6IDYzcHg7XG5cbiAgICAgICAgfVxuXG5cbiAgICAgICAgLmdvLXRvLW1hcCB7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIGNsZWFyOiBib3RoO1xuICAgICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICMyYTYzZmY7XG4gICAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzJDQUJGQjtcbiAgICAgICAgICB3aWR0aDogNzAlO1xuICAgICAgICAgIG1pbi1oZWlnaHQ6IDQ1MHB4O1xuICAgICAgICAgIG1hcmdpbi10b3A6IDExMHB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDc1cHg7XG4gICAgICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gICAgICAgICAgcGFkZGluZzogNjBweDtcbiAgICAgICAgICBwYWRkaW5nLXRvcDowO1xuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIC5hcnJvdy1pY29uIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgYm90dG9tOiAwO1xuXG4gICAgICAgIH1cblxuICAgICAgICAuc3ViaGVhZGluZyB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMHB4O1xuICAgICAgICAgIG1hcmdpbi10b3A6IDgwcHg7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgZm9udC1zaXplOiAzOHB4O1xuXG5cbiAgICAgICAgfVxuXG4gICAgICAgIC5ib2R5LXRleHQge1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgY2xlYXI6IGJvdGg7XG4gICAgICAgICAgd2lkdGg6IDYwJTtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTAlO1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgZm9udC1zaXplOiAyM3B4O1xuICAgICAgICAgIGNvbG9yOiAjNzc3O1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIH1cblxuICAgICAgICAud2hpdGUge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAvLyBtYXJnaW4tbGVmdDo2MHB4O1xuICAgICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgd2lkdGg6IDc1JTtcbiAgICAgICAgfVxuXG4gICAgICAgIGltZyB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU6XG4gICAgICAgIH1cblxuICAgICAgICAud2hpdGUtc3F1YXJlIHtcbiAgICAgICAgICB3aWR0aDo4NyU7XG4gICAgICAgICAgbWluLWhlaWdodDogNzAwcHg7XG4gICAgICAgICAgLy8gbWluLWhlaWdodDogNjAlO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICByaWdodDogLTcwcHg7XG4gICAgICAgICAgcmlnaHQ6IDclO1xuICAgICAgICAgIHRvcDogMTQwcHg7XG5cbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICB6LWluZGV4OiAtMTtcblxuICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMXB4IDc3cHggMTAzcHggLTcxcHggcmdiYSgxNTMsMTUzLDE1MywxKTtcbiAgICAgICAgICAtbW96LWJveC1zaGFkb3c6IDFweCA3N3B4IDEwM3B4IC03MXB4IHJnYmEoMTUzLDE1MywxNTMsMSk7XG4gICAgICAgICAgYm94LXNoYWRvdzogMXB4IDc3cHggMTAzcHggLTcxcHggcmdiYSgxNTMsMTUzLDE1MywxKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgYS5jdGEtbGluayB7XG4gICAgICAgICAgY2xlYXI6IGJvdGg7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOjEwMHB4O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxMDJENjQ7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgLy8gYm9yZGVyOiA0cHggc29saWQgIzJDQUJGQjtcbiAgICAgICAgICB3aWR0aDogNDAlO1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMTIwcHg7XG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMTIwcHg7XG4gICAgICAgICAgcGFkZGluZy10b3A6IDIzcHg7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDIzcHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNDVweDtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgICAgICAgICBib3JkZXI6IDNweCBzb2xpZCAjZWNlY2VjO1xuICAgICAgICB9XG5cbiAgICAgICAgYS5jdGEtbGluazpob3ZlciB7XG4gICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAxcHggNzJweCAxMjZweCAtNzFweCByZ2JhKDE1MywxNTMsMTUzLDEpO1xuICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogMXB4IDcycHggMTI2cHggLTcxcHggcmdiYSgxNTMsMTUzLDE1MywxKTtcbiAgICAgICAgICBib3gtc2hhZG93OiAxcHggNzJweCAxMjZweCAtNzFweCByZ2JhKDE1MywxNTMsMTUzLDEpO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGNvbG9yOiAjMkNBQkZCO1xuICAgICAgICAgIGJvcmRlcjogM3B4IHNvbGlkICMyQ0FCRkI7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLmN0YS10ZXh0LXdpZGUge1xuXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgbWFyZ2luLXRvcDogNzBweDtcbiAgICAgICAgICAvLyBwYWRkaW5nLXRvcDogODBweDtcbiAgICAgICAgICBmb250LXNpemU6IDIzcHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjY0O1xuXG4gICAgICAgIH1cblxuICAgICAgICAuZmllbGQtaW1hZ2Uge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmN0YS0zLXdyYXBwZXIge1xuICAgICAgICAgIGNsZWFyOiBib3RoO1xuICAgICAgICAgIHdpZHRoOiA4NSU7XG4gICAgICAgICAgbWFyZ2luOiAwcHggYXV0bztcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNhcmQge1xuICAgICAgICAgIHdpZHRoOiAzMy4zMzMzMzMzMzMzMzY3JTtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogNjBweDtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNjBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5maWVsZC1pY29uIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICB9XG5cbiAgICAgICAgLmljb24ge1xuICAgICAgICAgIHdpZHRoOiAzMCU7XG4gICAgICAgIH1cblxuICAgICAgICAuaWNvbi10aW50IHtcbiAgICAgICAgICB3aWR0aDogMTklO1xuICAgICAgICB9XG5cbiAgICAgICAgLmZpZWxkLXRpdGxlIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6XG4gICAgICAgIH1cblxuICAgICAgICAuZmllbGQtc3VtbWFyeSB7XG4gICAgICAgICAgd2lkdGg6IDY4JTtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgICAvLyBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIH1cblxuICAgICAgICAuY3RhLWJvdHRvbS13cmFwcGVyIHtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgICAgICAgICB3aWR0aDogNzAlO1xuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMXB4IDcycHggMTI2cHggLTcxcHggcmdiYSgxNTMsMTUzLDE1MywxKTtcbiAgICAgICAgICAtbW96LWJveC1zaGFkb3c6IDFweCA3MnB4IDEyNnB4IC03MXB4IHJnYmEoMTUzLDE1MywxNTMsMSk7XG4gICAgICAgICAgYm94LXNoYWRvdzogMXB4IDcycHggMTI2cHggLTcxcHggcmdiYSgxNTMsMTUzLDE1MywxKTtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMDBweDtcblxuICAgICAgICB9XG4gICAgICB9XG5cblx0YH08L3N0eWxlPlxuXG5cblx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cblx0XHQ8c3BhbiBjbGFzc05hbWU9XCJ3aGl0ZS1zcXVhcmVcIj48L3NwYW4+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvLXdyYXBwZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdC1zaWRlXCI+XG4gICAgICBcdDxkaXYgY2xhc3NOYW1lPVwiaW50cm8tdGV4dFwiPkdldCBpdCBjbGVhbmVkIHdpdGhvdXQgdGhlIG1lc3MhPC9kaXY+XG5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0LXNpZGVcIj5cbiAgICAgIFx0PGltZyBzcmM9XCIvc3RhdGljL2N0YS5qcGdcIiBhbHQ9XCJteSBpbWFnZVwiIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9keS10ZXh0XCI+UGxhdGZvcm0gaXMgYnVpbHQgYXJvdW5kIERydXBhbCBhbmQgYWxsb3dzIGNvbXBhbmllcyBhcm91bmQgdGhlIGdsb2JlIHRvIGJ1aWxkLCBvcGVyYXRlIGFuZCBvcHRpbWl6ZSB0aGVpciBkaWdpdGFsIGV4cGVyaWVuY2VzLjwvZGl2PlxuXG4gICAgPGRpdiBjbGFzc05hbWU9XCJnby10by1tYXBcIj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW50cm8tdGV4dCBzdWJoZWFkaW5nXCI+VmlzaXQgdGhlIG1hcCB0byBzZWUgb3VyIGxpc3Qgb2YgRHJ5IENsZWFuZXJzITwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJib2R5LXRleHQgd2hpdGVcIj5QbGF0Zm9ybSBpcyBidWlsdCBhcm91bmQgRHJ1cGFsIGFuZCBhbGxvd3MgY29tcGFuaWVzIGFyb3VuZCB0aGUgZ2xvYmUgdG8gYnVpbGQsIG9wZXJhdGUgYW5kIG9wdGltaXplIHRoZWlyIGRpZ2l0YWwgZXhwZXJpZW5jZXMuPC9kaXY+XG4gICAgICA8TGluayBocmVmPVwiL21hcFwiPlxuICAgICAgICA8YT48aW1nIGNsYXNzTmFtZT1cImFycm93LWljb25cIiBzcmM9XCIvc3RhdGljL2Fycm93LXJpZ2h0LXNvbGlkLnN2Z1wiIGFsdD1cIkljb25cIi8+PC9hPlxuICAgICAgPC9MaW5rPlxuXHRcdFx0ey8qIDxpbnB1dCBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgZW1haWwgdG8gZ2V0IG5vdGlmaWVkIHdoZW4gd2UgbmVhciBsYXVuY2ghXCIgY2xhc3NOYW1lPVwiZm9ybS1maWVsZC10ZXh0XCIgdHlwZT1cInRleHRcIiBuYW1lPVwiZmlyc3RuYW1lXCIvPiAqL31cbiAgICA8L2Rpdj5cblxuXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjdGEtMy13cmFwcGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZC1pY29uXCI+PGltZyBjbGFzc05hbWU9XCJpY29uXCIgc3JjPVwiL3N0YXRpYy90cnVjay1zb2xpZC5zdmdcIiBhbHQ9XCJJY29uXCIvPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkLXRpdGxlXCI+RHJvcC1vZmYgLyBQaWNrLXVwPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQtc3VtbWFyeVwiPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIE51bGxhIHVsdHJpY2VzIGRvbG9yIG9yY2ksIGlkIGZhdWNpLjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZC1pY29uXCI+PGltZyBjbGFzc05hbWU9XCJpY29uLXRpbnRcIiBzcmM9XCIvc3RhdGljL3RpbnQtc29saWQuc3ZnXCIgYWx0PVwiSWNvblwiLz48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZC10aXRsZVwiPkdldCBUaGVtIFdhc2hlZDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkLXN1bW1hcnlcIj5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBOdWxsYSB1bHRyaWNlcyBkb2xvciBvcmNpLCBpZCBmYXVjaS48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQtaWNvblwiPjxpbWcgY2xhc3NOYW1lPVwiaWNvblwiIHNyYz1cIi9zdGF0aWMvYm94LW9wZW4tc29saWQuc3ZnXCIgYWx0PVwiSWNvblwiLz48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZC10aXRsZVwiPlJlY2lldmUgTGF1bmRyeSE8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZC1zdW1tYXJ5XCI+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gTnVsbGEgdWx0cmljZXMgZG9sb3Igb3JjaSwgaWQgZmF1Y2kuPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuXG5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImN0YS1ib3R0b20td3JhcHBlclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdGEtdGV4dC13aWRlXCI+U28sIEFyZSBZb3UgUmVhZHkgVG8gU2lnbiBVcCBXaXRoIFVzPzwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdGEtdGV4dC1zdW1tYXJ5XCI+UGxhdGZvcm0gaXMgYnVpbHQgYXJvdW5kIERydXBhbCBhbmQgYWxsb3dzIGNvbXBhbmllcyBhcm91bmQgdGhlIGdsb2JlIHRvIGJ1aWxkLCBvcGVyYXRlIGFuZCBvcHRpbWl6ZSB0aGVpciBkaWdpdGFsIGV4cGVyaWVuY2VzLjwvZGl2PlxuICAgICAgPExpbmsgaHJlZj1cIi9zaWduLXVwXCI+XG4gICAgICAgIDxhIGNsYXNzTmFtZT1cImN0YS1saW5rXCI+U2lnbiBNZSBVcCE8L2E+XG4gICAgICA8L0xpbms+XG4gICAgPC9kaXY+XG5cbiAgPC9kaXY+XG5cblxuXG5cblxuICA8L0xheW91dD5cbilcblxuSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24oKSB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS50dm1hemUuY29tL3NlYXJjaC9zaG93cz9xPWJhdG1hbicpXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXG5cbiAgLy8gY29uc29sZS5sb2coZGF0YSk7XG4gIGNvbnNvbGUubG9nKGBTaG93IGRhdGEgZmV0Y2hlZC4gQ291bnQ6ICR7ZGF0YS5sZW5ndGh9YClcblxuICByZXR1cm4ge1xuICAgIHNob3dzOiBkYXRhXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXhcblxuXG4gICAgLy8gPHVsPlxuICAgIC8vICAge3Byb3BzLnNob3dzLm1hcCgoe3Nob3d9KSA9PiAoXG4gICAgLy8gICAgIDxsaSBrZXk9e3Nob3cuaWR9PlxuICAgIC8vICAgICAgIDxMaW5rIGFzPXtgL3AvJHtzaG93LmlkfWB9IGhyZWY9e2AvcG9zdD9pZD0ke3Nob3cuaWR9Jm5hbWU9JHtzaG93Lm5hbWV9YH0+XG4gICAgLy8gICAgICAgICA8YT57c2hvdy5uYW1lfTwvYT5cbiAgICAvLyAgICAgICA8L0xpbms+XG4gICAgLy8gICAgIDwvbGk+XG4gICAgLy8gICApKX1cbiAgICAvLyA8L3VsPlxuXG5cbi8vICAgICBjb25zdCBQb3N0TGluayA9IChwcm9wcykgPT4gKFxuLy8gICA8bGk+XG4vLyAgICAgPExpbmsgYXM9e2AvcG9zdHMvJHtwcm9wcy5pZH1gfSBocmVmPXtgL3Bvc3Q/dGl0bGU9JHtwcm9wcy50aXRsZX1gfT5cbi8vICAgICAgIDxhPntwcm9wcy50aXRsZX08L2E+XG4vLyAgICAgPC9MaW5rPlxuLy8gICA8L2xpPlxuLy8gKVxuXG5cbiAgICAvLyA8UG9zdExpbmsgaWQ9XCJoZWxsby1uZXh0XCIgdGl0bGU9XCJIZWxsbyBOZXh0LmpzXCIvPlxuIl19 */\n/*@ sourceURL=/Users/jbabak/Sites/dcapp/web/pages/index.js */",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-505870426" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 505
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "jsx-505870426" + " " + "white-square",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 506
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-505870426" + " " + "hero-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 507
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-505870426" + " " + "left-side",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 508
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-505870426" + " " + "intro-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 509
    },
    __self: this
  }, "Get it cleaned without the mess!")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-505870426" + " " + "right-side",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 513
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    src: "/static/cta.jpg",
    alt: "my image",
    className: "jsx-505870426",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 514
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-505870426" + " " + "body-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 518
    },
    __self: this
  }, "Platform is built around Drupal and allows companies around the globe to build, operate and optimize their digital experiences."), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-505870426" + " " + "go-to-map",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 520
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-505870426" + " " + "intro-text subheading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 521
    },
    __self: this
  }, "Visit the map to see our list of Dry Cleaners!"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-505870426" + " " + "body-text white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 522
    },
    __self: this
  }, "Platform is built around Drupal and allows companies around the globe to build, operate and optimize their digital experiences."), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/map",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 523
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    className: "jsx-505870426",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 524
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    src: "/static/arrow-right-solid.svg",
    alt: "Icon",
    className: "jsx-505870426" + " " + "arrow-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 524
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-505870426" + " " + "cta-3-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 530
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-505870426" + " " + "card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 531
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-505870426" + " " + "field-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 532
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    src: "/static/truck-solid.svg",
    alt: "Icon",
    className: "jsx-505870426" + " " + "icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 532
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-505870426" + " " + "field-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 533
    },
    __self: this
  }, "Drop-off / Pick-up"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-505870426" + " " + "field-summary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 534
    },
    __self: this
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultrices dolor orci, id fauci.")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-505870426" + " " + "card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 536
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-505870426" + " " + "field-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 537
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    src: "/static/tint-solid.svg",
    alt: "Icon",
    className: "jsx-505870426" + " " + "icon-tint",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 537
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-505870426" + " " + "field-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 538
    },
    __self: this
  }, "Get Them Washed"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-505870426" + " " + "field-summary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 539
    },
    __self: this
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultrices dolor orci, id fauci.")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-505870426" + " " + "card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 541
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-505870426" + " " + "field-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 542
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    src: "/static/box-open-solid.svg",
    alt: "Icon",
    className: "jsx-505870426" + " " + "icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 542
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-505870426" + " " + "field-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 543
    },
    __self: this
  }, "Recieve Laundry!"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-505870426" + " " + "field-summary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 544
    },
    __self: this
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultrices dolor orci, id fauci."))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-505870426" + " " + "cta-bottom-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 550
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-505870426" + " " + "cta-text-wide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 551
    },
    __self: this
  }, "So, Are You Ready To Sign Up With Us?"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-505870426" + " " + "cta-text-summary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 552
    },
    __self: this
  }, "Platform is built around Drupal and allows companies around the globe to build, operate and optimize their digital experiences."), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/sign-up",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 553
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    className: "jsx-505870426" + " " + "cta-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 554
    },
    __self: this
  }, "Sign Me Up!")))));
};

Index.getInitialProps =
/*#__PURE__*/
_asyncToGenerator(
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var res, data;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default()('https://api.tvmaze.com/search/shows?q=batman');

        case 2:
          res = _context.sent;
          _context.next = 5;
          return res.json();

        case 5:
          data = _context.sent;
          // console.log(data);
          console.log("Show data fetched. Count: ".concat(data.length));
          return _context.abrupt("return", {
            shows: data
          });

        case 8:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, this);
}));
/* harmony default export */ __webpack_exports__["default"] = (Index); // <ul>
//   {props.shows.map(({show}) => (
//     <li key={show.id}>
//       <Link as={`/p/${show.id}`} href={`/post?id=${show.id}&name=${show.name}`}>
//         <a>{show.name}</a>
//       </Link>
//     </li>
//   ))}
// </ul>
//     const PostLink = (props) => (
//   <li>
//     <Link as={`/posts/${props.id}`} href={`/post?title=${props.title}`}>
//       <a>{props.title}</a>
//     </Link>
//   </li>
// )
// <PostLink id="hello-next" title="Hello Next.js"/>

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map