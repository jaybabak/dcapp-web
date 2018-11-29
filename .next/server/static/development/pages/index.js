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
    className: "jsx-4269906884" + " " + "footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-4269906884",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Copyright DCAPP 2018. All Rights Reserved."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "4269906884",
    css: ".footer.jsx-4269906884{position:absolute;bottom:-40px;bottom:0px;background-color:white;margin-top:40px;box-sizing:border-box;max-width:100%;width:100%;margin:0 auto;padding:15px;font-size:16px;-webkit-box-shadow:2px 5px 20px -13px rgba(0,0,0,0.55);-moz-box-shadow:2px 5px 20px -13px rgba(0,0,0,0.55);box-shadow:2px 5px 20px -13px rgba(0,0,0,0.55);}.footer.jsx-4269906884 p.jsx-4269906884{font-size:12px;}@media screen and (min-width:768px){.footer.jsx-4269906884{padding:15px;border:1px solid #DDD;}}@media screen and (min-width:920px){.footer.jsx-4269906884 p.jsx-4269906884{font-size:16px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYmFiYWsvU2l0ZXMvZGNhcHAvd2ViL2NvbXBzL0Zvb3Rlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFXaUIsQUFHd0IsQUFvQkgsQUFZRSxBQW9DRCxhQW5DTyxFQVp4QixBQWdEQyxHQXBFYSxhQUNGLElBcUNSLE9BcEN1Qix1QkFDUCxnQkFDTSxzQkFDUCxlQUNKLFdBQ0csY0FDRCxhQUVELGVBRXdDLHVEQUNILG9EQUNMLCtDQUU3QyIsImZpbGUiOiIvVXNlcnMvamJhYmFrL1NpdGVzL2RjYXBwL3dlYi9jb21wcy9Gb290ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmNvbnN0IGxpbmtTdHlsZSA9IHtcblx0bWFyZ2luUmlnaHQ6IDE1XG59XG5cbmNvbnN0IEZvb3RlciA9ICgpID0+IChcblxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyXCI+XG4gICAgXHQ8cD5Db3B5cmlnaHQgRENBUFAgMjAxOC4gQWxsIFJpZ2h0cyBSZXNlcnZlZC48L3A+XG5cbiAgICBcdDxzdHlsZSBqc3g+e2Bcblx0ICAgICAgLmZvb3RlciB7XG5cdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHRcdGJvdHRvbTogLTQwcHg7XG5cdFx0XHRcdFx0Ym90dG9tOiAwcHg7XG5cdCAgICAgIFx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG5cdCAgICAgIFx0bWFyZ2luLXRvcDogNDBweDtcblx0ICAgICAgXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHQgICAgICBcdG1heC13aWR0aDogMTAwJTtcblx0ICAgICAgXHR3aWR0aDogMTAwJTtcblx0ICAgICAgXHRtYXJnaW46IDAgYXV0bztcblx0ICAgICAgXHRwYWRkaW5nOiAxNXB4O1xuXHRcdFx0XHRcdC8vIGJvcmRlcjogMXB4IHNvbGlkICNEREQ7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxNnB4O1xuXG5cdFx0XHRcdFx0LXdlYmtpdC1ib3gtc2hhZG93OiAycHggNXB4IDIwcHggLTEzcHggcmdiYSgwLDAsMCwwLjU1KTtcblx0XHRcdFx0XHQtbW96LWJveC1zaGFkb3c6IDJweCA1cHggMjBweCAtMTNweCByZ2JhKDAsMCwwLDAuNTUpO1xuXHRcdFx0XHRcdGJveC1zaGFkb3c6IDJweCA1cHggMjBweCAtMTNweCByZ2JhKDAsMCwwLDAuNTUpO1xuXG5cdCAgICAgIH1cblxuXHRcdFx0XHQuZm9vdGVyIHAge1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMTJweDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG5cblx0XHRcdFx0XHQuZm9vdGVyIHtcblx0XHQgICAgICBcdC8vIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuXHRcdCAgICAgIFx0Ly8gbWFyZ2luLXRvcDogNDBweDtcblx0XHQgICAgICBcdC8vIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdFx0ICAgICAgXHQvLyBtYXgtd2lkdGg6IDEwMCU7XG5cdFx0ICAgICAgXHQvLyB3aWR0aDogMTAwJTtcblx0XHQgICAgICBcdC8vIG1hcmdpbjogMCBhdXRvO1xuXHRcdCAgICAgIFx0cGFkZGluZzogMTVweDtcblx0XHRcdFx0XHRcdGJvcmRlcjogMXB4IHNvbGlkICNEREQ7XG5cblx0XHRcdFx0XHRcdC8vIC13ZWJraXQtYm94LXNoYWRvdzogMnB4IDVweCAyMHB4IC0xM3B4IHJnYmEoMCwwLDAsMC41NSk7XG5cdFx0XHRcdFx0XHQvLyAtbW96LWJveC1zaGFkb3c6IDJweCA1cHggMjBweCAtMTNweCByZ2JhKDAsMCwwLDAuNTUpO1xuXHRcdFx0XHRcdFx0Ly8gYm94LXNoYWRvdzogMnB4IDVweCAyMHB4IC0xM3B4IHJnYmEoMCwwLDAsMC41NSk7XG5cblx0XHQgICAgICB9XG5cblx0XHRcdFx0XHQvLyAuZm9vdGVyIHAge1xuXHRcdFx0XHRcdC8vIFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdFx0XHRcdC8vIH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDkyMHB4KSB7XG5cblx0XHRcdFx0XHQvLyAuZm9vdGVyIHtcblx0XHRcdFx0XHQvLyBcdHBvc2l0aW9uOiBpbmhlcml0O1xuXHRcdFx0XHRcdC8vIFx0Ym90dG9tOiBpbmhlcml0O1xuXHRcdFx0XHRcdC8vXG5cdFx0XHRcdFx0Ly8gXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcblx0XHRcdFx0XHQvLyBcdG1hcmdpbi10b3A6IDQwcHg7XG5cdFx0XHRcdFx0Ly8gXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRcdFx0XHRcdC8vIFx0bWF4LXdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdC8vIFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0Ly8gXHRtYXJnaW46IDAgYXV0bztcblx0XHRcdFx0XHQvLyBcdHBhZGRpbmc6IDQwcHg7XG5cdFx0XHRcdFx0Ly8gXHRib3JkZXI6IDFweCBzb2xpZCAjREREO1xuXHRcdFx0XHRcdC8vXG5cdFx0XHRcdFx0Ly8gXHQtd2Via2l0LWJveC1zaGFkb3c6IDJweCA1cHggMjBweCAtMTNweCByZ2JhKDAsMCwwLDAuNTUpO1xuXHRcdFx0XHRcdC8vIFx0LW1vei1ib3gtc2hhZG93OiAycHggNXB4IDIwcHggLTEzcHggcmdiYSgwLDAsMCwwLjU1KTtcblx0XHRcdFx0XHQvLyBcdGJveC1zaGFkb3c6IDJweCA1cHggMjBweCAtMTNweCByZ2JhKDAsMCwwLDAuNTUpO1xuXHRcdFx0XHRcdC8vXG5cdFx0XHRcdFx0Ly8gfVxuXG5cdFx0XHRcdFx0LmZvb3RlciBwIHtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTZweDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXG4gICAgXHRgfTwvc3R5bGU+XG5cbiAgICA8L2Rpdj5cblxuKVxuXG5leHBvcnQgZGVmYXVsdCBGb290ZXJcbiJdfQ== */\n/*@ sourceURL=/Users/jbabak/Sites/dcapp/web/comps/Footer.js */",
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
    className: "jsx-2427937478" + " " + "header-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2427937478",
    css: ".header-container.jsx-2427937478{box-sizing:border-box;margin:0;width:100%;min-height:80px;margin:0 auto;background-color:#2CACFB;background-color:#FFF;color:white;padding:20px;-webkit-box-shadow:2px 5px 20px -13px rgba(0,0,0,0.55);-moz-box-shadow:2px 5px 20px -13px rgba(0,0,0,0.55);box-shadow:2px 5px 20px -13px rgba(0,0,0,0.55);}.header-container.jsx-2427937478 a.jsx-2427937478{color:white;color:#2CACFB;}.logo-branding.jsx-2427937478{color:black;font-size:36px;font-weight:bold;float:left;}.main-menu.jsx-2427937478{text-align:center;display:inline-block;width:100%;margin-top:20px;}.main-menu.jsx-2427937478 a.jsx-2427937478{color:#a9a9a9;}@media screen and (min-width:565px){.main-menu.jsx-2427937478{text-align:right;display:inline-block;width:50%;float:right;margin-top:20px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYmFiYWsvU2l0ZXMvZGNhcHAvd2ViL2NvbXBzL0hlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQmMsQUFHOEIsQUFzQlYsQUFLSCxBQVFRLEFBUU4sQUFVRyxZQTlCSCxBQU1JLEVBZ0JuQixHQVN1QixDQWxCRSxJQWxDWixJQXNCVixDQU1rQixJQTNCTixPQW9ESixDQWxCRyxHQWpDTSxFQTJCTCxJQTBCRCxFQW5CTSxLQU5qQixHQTNCZSxFQXFERCxNQWxCZCxNQWpDMEIsSUFxRDVCLHFCQXBEeUIsc0JBQ1YsWUFDQyxhQUt1Qyx1REFDSCxvREFDTCwrQ0FFN0MiLCJmaWxlIjoiL1VzZXJzL2piYWJhay9TaXRlcy9kY2FwcC93ZWIvY29tcHMvSGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5jb25zdCBsaW5rU3R5bGUgPSB7XG5cdGRlZmF1bHQ6IHtcblx0XHRtYXJnaW5SaWdodDogMzUsXG5cdFx0dGV4dERlY29yYXRpb246ICdub25lJ1xuXHR9LFxuXHRib2xkOiB7XG5cdFx0bWFyZ2luUmlnaHQ6IDE1LFxuXHRcdGZvbnRXZWlnaHQ6IDcwMCxcblx0XHR0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuXHRcdGNvbG9yOiAnIzJhNjNmZidcblx0fVxufVxuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiAoXG5cblx0PGRpdiBjbGFzc05hbWU9XCJoZWFkZXItY29udGFpbmVyXCI+XG5cblx0XHQ8c3R5bGUganN4PntgXG4gICAgICAuaGVhZGVyLWNvbnRhaW5lciB7XG4gICAgICBcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICBcdC8vIG1heC13aWR0aDogOTAlO1xuICAgICAgXHRtYXJnaW46IDA7XG4gICAgICBcdHdpZHRoOiAxMDAlO1xuICAgICAgXHRtaW4taGVpZ2h0OiA4MHB4O1xuICAgICAgXHRtYXJnaW46IDAgYXV0bztcblxuICAgICAgXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMkNBQ0ZCO1xuICAgICAgXHRiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICAgICAgXHRjb2xvcjogd2hpdGU7XG4gICAgICBcdHBhZGRpbmc6IDIwcHg7XG5cdFx0XHRcdC8vIGJvcmRlcjogMXB4IHNvbGlkICNEREQ7XG5cblxuXG5cdFx0XHRcdC13ZWJraXQtYm94LXNoYWRvdzogMnB4IDVweCAyMHB4IC0xM3B4IHJnYmEoMCwwLDAsMC41NSk7XG5cdFx0XHRcdC1tb3otYm94LXNoYWRvdzogMnB4IDVweCAyMHB4IC0xM3B4IHJnYmEoMCwwLDAsMC41NSk7XG5cdFx0XHRcdGJveC1zaGFkb3c6IDJweCA1cHggMjBweCAtMTNweCByZ2JhKDAsMCwwLDAuNTUpO1xuXG4gICAgICB9XG5cbiAgICAgIC5oZWFkZXItY29udGFpbmVyIGEge1xuICAgICAgXHRjb2xvcjogd2hpdGU7XG5cdFx0XHRcdGNvbG9yOiAjMkNBQ0ZCO1xuICAgICAgfVxuXG4gICAgICAubG9nby1icmFuZGluZyB7XG5cdFx0XHRcdGNvbG9yOiBibGFjaztcbiAgICAgIFx0Ly8gbWFyZ2luLXRvcFxuICAgICAgXHRmb250LXNpemU6IDM2cHg7XG4gICAgICBcdGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgXHRmbG9hdDogbGVmdDtcbiAgICAgIH1cblxuICAgICAgLm1haW4tbWVudSB7XG4gICAgICBcdHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBcdHdpZHRoIDEwMCU7XG4gICAgICBcdG1hcmdpbi10b3A6IDIwcHg7XG5cbiAgICAgIH1cblxuXHRcdFx0Lm1haW4tbWVudSBhIHtcblx0XHRcdFx0Y29sb3I6ICNhOWE5YTk7XG5cblx0XHRcdH1cblxuXHRcdFx0QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTY1cHgpIHtcblx0XHRcdCAgLmhlYWRlci1jb250YWluZXIge1xuXHRcdFx0ICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICMxMDJENjQ7XG5cdFx0XHQgIH1cblxuXHRcdFx0XHQubWFpbi1tZW51IHtcblx0XHRcdFx0XHR0ZXh0LWFsaWduOnJpZ2h0O1xuXHRcdFx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0XHRcdFx0XHR3aWR0aCA1MCU7XG5cdFx0XHRcdFx0Ly8gYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG5cdFx0XHRcdFx0ZmxvYXQ6IHJpZ2h0O1xuXHRcdFx0XHRcdG1hcmdpbi10b3A6MjBweDtcblxuXHRcdFx0XHR9XG5cblx0XHRcdH1cblxuXG4gICAgYH08L3N0eWxlPlxuXG4gICAgXHQ8TGluayBocmVmPVwiL1wiPjxhPjxzcGFuIGNsYXNzTmFtZT1cImxvZ28tYnJhbmRpbmdcIj5EcnljbGVlbjwvc3Bhbj48L2E+PC9MaW5rPlxuXG4gICAgXHQ8ZGl2IGNsYXNzTmFtZT1cIm1haW4tbWVudVwiPlxuXHQgICAgICB7LyogPExpbmsgaHJlZj1cIi9cIj5cblx0ICAgICAgICA8YSBzdHlsZT17bGlua1N0eWxlLmRlZmF1bHR9PkhvbWU8L2E+XG5cdCAgICAgIDwvTGluaz4gKi99XG5cdCAgICAgIDxMaW5rIGhyZWY9XCIvc2lnbi11cFwiPlxuXHQgICAgICAgIDxhIHN0eWxlPXtsaW5rU3R5bGUuZGVmYXVsdH0+U2lnbi1VcDwvYT5cblx0ICAgICAgPC9MaW5rPlxuXHQgICAgICA8TGluayBocmVmPVwiL21hcFwiPlxuXHQgICAgICAgIDxhIHN0eWxlPXtsaW5rU3R5bGUuYm9sZH0+VmlldyBNQVA8L2E+XG5cdCAgICAgIDwvTGluaz5cblxuXHQgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlclxuIl19 */\n/*@ sourceURL=/Users/jbabak/Sites/dcapp/web/comps/Header.js */",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-2427937478",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-2427937478" + " " + "logo-branding",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, "Drycleen"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2427937478" + " " + "main-menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/sign-up",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    style: linkStyle.default,
    className: "jsx-2427937478",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, "Sign-Up")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/map",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    style: linkStyle.bold,
    className: "jsx-2427937478",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
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
  //conditional rendering of components SHOW OR HIDE FOOTER
  // console.log(props.overflow);
  // var showFooter = props.displayFooter;
  //
  // var footerRegion;
  //
  // if()
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2561698816" + " " + "wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2561698816",
    css: "div.wrapper.jsx-2561698816{position:relative;box-sizing:border-box;margin:0;width:100%;height:100%;margin:0 auto;padding:0px;padding-top:0;background-color:#ececec;-webkit-box-shadow:2px 5px 20px -13px rgba(0,0,0,0.55);-moz-box-shadow:2px 5px 20px -13px rgba(0,0,0,0.55);box-shadow:2px 5px 20px -13px rgba(0,0,0,0.55);font-family:'Montserrat',sans-serif;background-image:url('/static/marker.svg');background-size:contain;background-position:500px 800px;background-position:600px bottom;background-repeat:no-repeat;padding-bottom:120px;min-height:100vh;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYmFiYWsvU2l0ZXMvZGNhcHAvd2ViL2NvbXBzL0xheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQmMsQUFHdUIsa0JBQ08sc0JBQ2IsU0FDRSxXQUNGLFlBRUssY0FDRixZQUNFLGNBRVcseUJBRTJCLHVEQUNILG9EQUNMLCtDQUVWLG9DQUVNLDJDQUNuQix3QkFDUSxnQ0FDQyxpQ0FDTCw0QkFFUCxxQkFDSixpQkFDZiIsImZpbGUiOiIvVXNlcnMvamJhYmFrL1NpdGVzL2RjYXBwL3dlYi9jb21wcy9MYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9Gb290ZXInO1xuXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5cbmNvbnN0IExheW91dCA9IChwcm9wcykgPT4ge1xuXG5cdC8vY29uZGl0aW9uYWwgcmVuZGVyaW5nIG9mIGNvbXBvbmVudHMgU0hPVyBPUiBISURFIEZPT1RFUlxuXHQvLyBjb25zb2xlLmxvZyhwcm9wcy5vdmVyZmxvdyk7XG5cdC8vIHZhciBzaG93Rm9vdGVyID0gcHJvcHMuZGlzcGxheUZvb3Rlcjtcblx0Ly9cblx0Ly8gdmFyIGZvb3RlclJlZ2lvbjtcblx0Ly9cblx0Ly8gaWYoKVxuXG5cblxuXHRyZXR1cm4gKDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxuXG5cblx0XHQ8c3R5bGUganN4PntgXG4gICAgICBkaXYud3JhcHBlciB7XG5cdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgIFx0bWFyZ2luOiAwO1xuICAgICAgXHR3aWR0aDogMTAwJTtcblx0XHRcdFx0aGVpZ2h0OiAxMDAlO1xuXG4gICAgICBcdG1hcmdpbjogMCBhdXRvO1xuICAgICAgXHRwYWRkaW5nOiAwcHg7XG4gICAgICBcdHBhZGRpbmctdG9wOiAwO1xuXG4gICAgICBcdGJhY2tncm91bmQtY29sb3I6ICNlY2VjZWM7XG5cblx0XHRcdFx0LXdlYmtpdC1ib3gtc2hhZG93OiAycHggNXB4IDIwcHggLTEzcHggcmdiYSgwLDAsMCwwLjU1KTtcblx0XHRcdFx0LW1vei1ib3gtc2hhZG93OiAycHggNXB4IDIwcHggLTEzcHggcmdiYSgwLDAsMCwwLjU1KTtcblx0XHRcdFx0Ym94LXNoYWRvdzogMnB4IDVweCAyMHB4IC0xM3B4IHJnYmEoMCwwLDAsMC41NSk7XG5cblx0XHRcdFx0Zm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcblxuXHRcdFx0XHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9zdGF0aWMvbWFya2VyLnN2ZycpO1xuXHRcdFx0XHRiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG5cdFx0XHRcdGJhY2tncm91bmQtcG9zaXRpb246IDUwMHB4IDgwMHB4O1xuXHRcdFx0XHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiA2MDBweCBib3R0b207XG5cdFx0XHRcdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG5cblx0XHRcdFx0cGFkZGluZy1ib3R0b206IDEyMHB4O1xuXHRcdFx0XHRtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG5cblx0XHQ8SGVhZD5cbiAgICAgIDx0aXRsZT5EcnljbGVlbiBBcHAgfCBUaGUgUGxhdGZvcm0gRm9yIFlvdXIgRHJ5IENsZWFuaW5nPC90aXRsZT5cbiAgICAgIDxtZXRhIGNoYXJTZXQ9J3V0Zi04JyAvPlxuICAgICAgPG1ldGEgbmFtZT0ndmlld3BvcnQnIGNvbnRlbnQ9J2luaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGgnIGtleT1cInZpZXdwb3J0XCIvPlxuICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9ub3JtYWxpemUvNy4wLjAvbm9ybWFsaXplLmNzc1wiIC8+XG4gICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6MjAwLDMwMCw0MDAsNDAwaSw1MDAsNjAwLDYwMGksNzAwLDgwMCw5MDBcIiByZWw9XCJzdHlsZXNoZWV0XCIvPlxuICAgIDwvSGVhZD5cblxuXHRcdDxIZWFkZXIvPlxuXG5cdFx0e3Byb3BzLmNoaWxkcmVufVxuXG5cdFx0PEZvb3Rlci8+XG5cblxuXHQ8L2Rpdj4pXG5cblxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dFxuXG5cbi8vIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvbm9ybWFsaXplLzcuMC4wL25vcm1hbGl6ZS5jc3NcIiAvPlxuIl19 */\n/*@ sourceURL=/Users/jbabak/Sites/dcapp/web/comps/Layout.js */",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
    className: "jsx-2561698816",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "Drycleen App | The Platform For Your Dry Cleaning"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    charSet: "utf-8",
    className: "jsx-2561698816",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    key: "viewport",
    className: "jsx-2561698816",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.css",
    className: "jsx-2561698816",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Montserrat:200,300,400,400i,500,600,600i,700,800,900",
    rel: "stylesheet",
    className: "jsx-2561698816",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }), props.children, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
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
    styleId: "2238505899",
    css: ".container.jsx-2238505899{min-height:1100px;z-index:2;overflow:hidden;width:calc(100% - 40px);margin:0 auto;position:relative;}.hero-wrapper.jsx-2238505899{position:relative;}.left-side.jsx-2238505899{float:left;width:50%;display:inline-block;}.right-side.jsx-2238505899{float:none;width:100%;margin-left:100px;padding-top:40px;display:inline-block;max-height:400px;overflow:hidden;}.intro-text.jsx-2238505899{margin-left:30%;width:80%;margin-top:75px;font-weight:700;font-size:33px;}.subheading.jsx-2238505899{text-align:left;margin-left:0px;margin-top:80px;color:white;font-weight:700;font-size:38px;}.body-text.jsx-2238505899{box-sizing:border-box;clear:both;width:100%;margin:0 auto;display:block;padding:10px;padding-bottom:60px;padding-left:0;margin-top:25px;font-weight:500;font-size:16px;color:#777;line-height:1.43;}.white.jsx-2238505899{margin:0;margin-top:30px;font-weight:300;color:white;width:75%;}.white-square.jsx-2238505899{width:87%;min-height:400px;position:absolute;right:-70px;right:7%;top:50px;background-color:white;z-index:-1;-webkit-box-shadow:1px 77px 103px -71px rgba(153,153,153,1);-moz-box-shadow:1px 77px 103px -71px rgba(153,153,153,1);box-shadow:1px 77px 103px -71px rgba(153,153,153,1);}.go-to-map.jsx-2238505899{clear:both;background-color:#102D64;width:90%;min-height:450px;margin-top:50px;margin-bottom:45px;display:inline-block;padding:30px;padding-top:0;padding-right:0;padding-bottom:0;-webkit-box-shadow:1px 72px 126px -71px rgba(153,153,153,1);-moz-box-shadow:1px 72px 126px -71px rgba(153,153,153,1);box-shadow:1px 72px 126px -71px rgba(153,153,153,1);}.form-field-text.jsx-2238505899{width:65%;display:block;height:45px;margin-top:68px;border-radius:45px;padding-left:35px;font-weight:200;border:5px solid #2CABFB;}a.cta-link.jsx-2238505899{clear:both;display:block;text-align:center;font-weight:600;-webkit-text-decoration:none;text-decoration:none;margin:0 auto;margin-top:40px;margin-bottom:60px;background-color:#102D64;color:white;text-transform:uppercase;width:40%;padding-left:60px;padding-right:60px;padding-top:13px;padding-bottom:13px;border-radius:45px;-webkit-transition:all 0.4s ease-out;transition:all 0.4s ease-out;border:3px solid #ececec;}a.cta-link.jsx-2238505899:hover{-webkit-box-shadow:1px 72px 126px -71px rgba(153,153,153,1);-moz-box-shadow:1px 72px 126px -71px rgba(153,153,153,1);box-shadow:1px 72px 126px -71px rgba(153,153,153,1);background-color:white;color:#2CABFB;border:3px solid #2CABFB;cursor:pointer;}.cta-text-wide.jsx-2238505899{display:block;margin-top:50px;padding-top:80px;font-size:23px;text-align:center;line-height:1.64;}.cta-text-summary.jsx-2238505899{display:block;margin-top:40px;font-size:16px;text-align:left;line-height:1.64;}.cta-3-wrapper.jsx-2238505899{margin-top:100px;}.card.jsx-2238505899{border-top:1px solid #c8c8c8;padding-top:60px;padding-bottom:60px;}.field-icon.jsx-2238505899{width:100%;text-align:center;}.icon.jsx-2238505899{width:30%;}.icon-tint.jsx-2238505899{width:22%;}.field-title.jsx-2238505899{margin-top:30px;font-size:36px;text-align:center;}.field-summary.jsx-2238505899{width:75%;margin:0 auto;margin-top:15px;text-align:center;}.cta-bottom-wrapper.jsx-2238505899{background-color:white;-webkit-box-shadow:0px 2px 5px 0px rgba(212,212,212,1);-moz-box-shadow:0px 2px 5px 0px rgba(212,212,212,1);box-shadow:0px 2px 5px 0px rgba(212,212,212,1);padding-bottom:10px;margin-bottom:25px;padding-left:30px;padding-right:30px;}.arrow-icon.jsx-2238505899{width:30%;float:right;margin-bottom:30px;margin-right:30px;}@media screen and (min-width:768px){.cta-text-summary.jsx-2238505899{display:block;margin-top:40px;font-size:16px;text-align:center;line-height:1.64;}.arrow-icon.jsx-2238505899{width:15%;float:right;margin-bottom:30px;margin-right:30px;}}@media screen and (min-width:902px){.left-side.jsx-2238505899{float:left;padding-top:150px;width:50%;display:inline-block;}.right-side.jsx-2238505899{float:left;width:50%;margin-left:inherit;max-height:inherit;padding-top:40px;display:inline-block;text-align:center;}.intro-text.jsx-2238505899{margin-left:20%;margin-top:75px;font-weight:700;font-size:63px;}.go-to-map.jsx-2238505899{position:relative;clear:both;width:70%;min-height:450px;margin-top:110px;margin-bottom:75px;display:inline-block;padding:60px;padding-top:0;padding-right:0;padding-bottom:0;}.arrow-icon.jsx-2238505899{position:absolute;right:0;bottom:0;}.subheading.jsx-2238505899{text-align:left;margin-left:0px;margin-top:80px;color:white;font-weight:700;font-size:38px;}.body-text.jsx-2238505899{box-sizing:border-box;clear:both;width:60%;margin-left:10%;display:inline-block;margin-top:50px;font-weight:500;font-size:23px;color:#777;padding:0;}.white.jsx-2238505899{margin:0;margin-top:30px;font-weight:300;color:white;width:75%;}.white-square.jsx-2238505899{width:87%;min-height:700px;position:absolute;right:-70px;right:7%;top:140px;background-color:white;z-index:-1;-webkit-box-shadow:1px 77px 103px -71px rgba(153,153,153,1);-moz-box-shadow:1px 77px 103px -71px rgba(153,153,153,1);box-shadow:1px 77px 103px -71px rgba(153,153,153,1);}a.cta-link.jsx-2238505899{clear:both;display:block;text-align:center;font-weight:700;margin:0 auto;margin-top:50px;margin-bottom:100px;background-color:#102D64;color:white;text-transform:uppercase;width:40%;padding-left:120px;padding-right:120px;padding-top:23px;padding-bottom:23px;border-radius:45px;-webkit-transition:all 0.2s;transition:all 0.2s;border:3px solid #ececec;}a.cta-link.jsx-2238505899:hover{-webkit-box-shadow:1px 72px 126px -71px rgba(153,153,153,1);-moz-box-shadow:1px 72px 126px -71px rgba(153,153,153,1);box-shadow:1px 72px 126px -71px rgba(153,153,153,1);background-color:white;color:#2CABFB;border:3px solid #2CABFB;cursor:pointer;}.cta-text-wide.jsx-2238505899{display:block;margin-top:70px;font-size:23px;text-align:center;line-height:1.64;}.field-image.jsx-2238505899{width:100%;}.cta-3-wrapper.jsx-2238505899{clear:both;width:85%;margin:0px auto;margin-bottom:0;}.card.jsx-2238505899{width:33.3333333333367%;display:inline-block;border-top:none;padding-top:60px;padding-bottom:60px;}.field-icon.jsx-2238505899{width:100%;text-align:left;}.icon.jsx-2238505899{width:30%;}.icon-tint.jsx-2238505899{width:19%;}.field-title.jsx-2238505899{margin-top:30px;font-size:36px;text-align:left;}.field-summary.jsx-2238505899{width:68%;margin-left:0;margin-top:15px;text-align:left;}.cta-bottom-wrapper.jsx-2238505899{padding-left:20px;padding-right:20px;width:70%;margin:0 auto;background-color:white;-webkit-box-shadow:1px 72px 126px -71px rgba(153,153,153,1);-moz-box-shadow:1px 72px 126px -71px rgba(153,153,153,1);box-shadow:1px 72px 126px -71px rgba(153,153,153,1);padding-bottom:10px;margin-bottom:100px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYmFiYWsvU2l0ZXMvZGNhcHAvd2ViL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtCZ0IsQUFHeUIsQUFVRSxBQUlULEFBUUEsQUFZSyxBQVVBLEFBV1EsQUFpQmYsQUFXWCxBQUdXLEFBa0JFLEFBbUJGLEFBZUksQUF1QitDLEFBVTVDLEFBV0EsQUFXRyxBQUlZLEFBTWxCLEFBS0QsQUFJQSxBQUlNLEFBTU4sQUFTYSxBQVliLEFBUU0sQUFTSixBQVVDLEFBUUEsQUFXSyxBQVNFLEFBaUJBLEFBT0YsQUFXTSxBQWFiLEFBVVosQUFHWSxBQWtCRSxBQXNCaUQsQUFXOUMsQUFVSCxBQUlBLEFBT2EsQUFRYixBQUtELEFBSUEsQUFJTSxBQU9OLEFBUVEsU0F6WU4sQUFrUkksQ0FyUUgsQUFxQ0gsQUFxRmQsQUFJQSxBQVVnQixBQXFCRixBQWlCRSxBQW1HSyxBQXFGbkIsQUFJQSxBQVdnQixDQTViUixBQU9DLEFBa0ZjLEFBa0NYLEFBaUVNLEFBbUVFLEFBUVIsQUFtR0ksQUEyQ2hCLEFBSVksQUFlTSxHQTNRRixBQVdBLEFBcUVFLEFBOEpBLEVBeFhSLEFBVUksQUE0S0MsQUF5RUcsQUFpQ0EsQUFrSUQsQ0FuUW5CLENBak1VLEFBVVYsQUFnU2UsQUFpQkgsQUF3SlcsR0FsY3pCLEFBc1EwQixBQWtKSixDQWxaQSxBQWdDUCxBQTZMUSxBQWlCRSxBQXdFUixDQXRHMEMsQ0ExRzdDLEFBa0dNLEFBZ05PLEFBOEJMLENBbllKLEFBaUVFLEFBaU5FLEFBOEJFLENBdFZOLEFBd1JILENBcE9LLEFBaVJJLEFBK0VwQixDQXZiYyxDQW9NRyxBQU9uQixBQW1FYyxBQThCQSxDQWhJSyxBQVlGLEFBcUVFLEFBOEpBLENBbk1DLEFBNE9BLENBeFpKLEFBcVBJLEFBaUNBLENBM1FQLEFBc1JDLEVBaEJaLENBcE5RLEFBb0JNLENBNFNJLEFBMENOLEVBbk1iLEFBNkJvQixDQXRSSixBQXdNRyxBQThPQSxDQW5ZUixBQTBLUSxBQWlCRSxBQWtCQyxBQXFFUCxDQTVVakIsQUFvQmlCLENBdUdBLEFBbU1JLEFBNENBLENBeFhJLEFBc0RSLENBZ0NKLEFBaUdNLEFBcUVJLEFBMkdOLEFBbURNLEFBbUJGLENBclVILEFBMkZLLENBeEJMLEFBeVJoQixBQUFDLEFBY2dCLENBdmFOLEFBcVBPLEFBaUNILENBMUdoQixHQTFGcUIsQ0FwRFgsQUFrUkksQUE2RVosR0E1SG1CLEFBZ0tuQixDQXJibUIsQUFnRVosQUFpUkksQ0FyVUUsQUFvQkMsQUF1S2hCLENBcEZzQixBQXlHdEIsQUFpQkUsQUF5RXVCLEFBNENQLENBN1VGLEFBa0h1QyxBQWdIckQsQUFRbUIsQUE0Q0QsQUEwRXlDLENBcE4xQyxBQXNQRSxBQXFDTSxDQXZTUCxDQWxHckIsQUErQmlCLEFBb0pLLEFBcUNuQixBQTBEQSxBQStEbUIsR0FuVVosQUE0R1QsQUFxS2MsRUF4V0EsR0E2SEksQ0F0RUgsQ0FuQmhCLEFBd1F3QixBQTZFSCxFQWhTRyxDQTdDUixBQXNSSSxBQXdDUSxDQW5GRixDQS9QTixBQWdLbkIsQUE0Q3NELEFBME05QixDQXJVTCxDQW1FQSxBQWlGakIsQUFnRmtCLEFBK0VsQixFQTNaZ0IsRUFrZDhDLENBM1oxQyxJQXNFTixBQTRQTyxFQTNVeEIsQUFzUkcsQ0F4QnNCLEdBcFJOLENBcVRFLENBaEtwQixDQXBGVyxBQWdCUyxBQThLRSxBQXVKcEIsQ0FwRWEsQ0F6V2hCLEtBdURrQixBQXVFUSxJQXBDbUMsQUE4QzlDLEFBaVBlLENBZG1DLENBblZqRSxDQXFUb0IsQ0FqQ0YsR0FyQmYsQ0EzSGdELEFBOE9NLEVBalMzQyxDQWhERyxHQWdGRSxHQW9LRCxDQWlDRixHQTlNaEIsQUFtR2tELEVBekhwQyxFQWdSRyxFQWhVQSxFQXFSRixDQXJNSSxDQW9LRSxJQW9LeUMsRUF2VzdDLEFBZ1JhLEVBM0MzQixJQXJSYSxJQW9QTSxFQXBLSSxJQS9CUixLQWhETixFQStCNEMsQUFrRWhDLEFBOE9JLENBL0JrQyxDQWlCL0MsRUE1RVosSUE3RW9CLENBdktILENBaUR5QyxFQWdSckMsRUFsUFgsU0FrQkUsQUE4T0ksR0E5VW5CLEFBK0UwQixFQXdGSixHQTBKRyxDQW9GZ0MsS0FwVC9CLEFBOE9JLFVBdktULElBdkZWLEFBaVBXLE1BcFM2QixDQWlSTSxHQTdOdEMsQ0FnQkgsQUE4T0ksR0F2S0UsR0EwSkcsRUFsUitCLE9Ba0R4RCxBQThPRyxFQTlQaUIsS0F3Rm5CLEFBMk93QixJQWxGRCxVQWhQTixNQW1VTyxHQWxGQSxFQXJTekIsQ0FpUkcsS0E1TmtCLFNBb1VsQixHQXZXZ0QsUUFvQy9CLG1CQUNVLENBK09BLHdCQW5SOUIsQ0FvUkcsd0NBL091Qix5QkFDMUIiLCJmaWxlIjoiL1VzZXJzL2piYWJhay9TaXRlcy9kY2FwcC93ZWIvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vIGltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuLy8gaW1wb3J0IEFwcEJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXInO1xuLy8gaW1wb3J0IFRvb2xiYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhcic7XG4vLyBpbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5Jztcbi8vIGltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbi8vIGltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xuLy8gaW1wb3J0IE1lbnVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9NZW51JztcblxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wcy9IZWFkZXInXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBzL0xheW91dCdcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnXG5cblxuY29uc3QgSW5kZXggPSAocHJvcHMpID0+IChcbiAgPExheW91dD5cblxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICBcdC5jb250YWluZXIge1xuICAgIFx0XHRtaW4taGVpZ2h0OiAxMTAwcHg7XG4gICAgXHRcdHotaW5kZXg6IDI7XG4gICAgXHRcdG92ZXJmbG93OiBoaWRkZW47XG4gICAgXHRcdC8vIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICBcdFx0d2lkdGg6IGNhbGMoMTAwJSAtIDQwcHgpO1xuICAgIFx0XHRtYXJnaW46IDAgYXV0bztcbiAgICBcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuICAgIFx0fVxuXG4gICAgICAuaGVyby13cmFwcGVyIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuXG4gICAgXHQubGVmdC1zaWRlIHtcbiAgICBcdFx0ZmxvYXQ6IGxlZnQ7XG4gICAgXHRcdC8vIHBhZGRpbmctdG9wOiAxNTBweDtcbiAgICBcdFx0d2lkdGg6IDUwJTtcbiAgICBcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrXG4gICAgXHR9XG5cbiAgICBcdC5yaWdodC1zaWRlIHtcblxuICAgIFx0XHRmbG9hdDogbm9uZTtcbiAgICBcdFx0d2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMDBweDtcbiAgICBcdFx0cGFkZGluZy10b3A6IDQwcHg7XG4gICAgXHRcdC8vIHBhZGRpbmc6IDQwcHg7XG4gICAgXHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBcdFx0Ly8gdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIG1heC1oZWlnaHQ6IDQwMHB4O1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIFx0fVxuXG4gICAgXHQuaW50cm8tdGV4dCB7XG4gICAgXHRcdG1hcmdpbi1sZWZ0OiAzMCU7XG4gICAgICAgIHdpZHRoOiA4MCU7XG5cbiAgICBcdFx0bWFyZ2luLXRvcDogNzVweDtcbiAgICBcdFx0Zm9udC13ZWlnaHQ6IDcwMDtcbiAgICBcdFx0Zm9udC1zaXplOiAzM3B4O1xuXG4gICAgXHR9XG5cbiAgICBcdC5zdWJoZWFkaW5nIHtcbiAgICBcdFx0dGV4dC1hbGlnbjogbGVmdDtcbiAgICBcdFx0bWFyZ2luLWxlZnQ6IDBweDtcbiAgICBcdFx0bWFyZ2luLXRvcDogODBweDtcbiAgICBcdFx0Y29sb3I6IHdoaXRlO1xuICAgIFx0XHRmb250LXdlaWdodDogNzAwO1xuICAgIFx0XHRmb250LXNpemU6IDM4cHg7XG5cblxuICAgIFx0fVxuXG4gICAgXHQuYm9keS10ZXh0IHtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgY2xlYXI6IGJvdGg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA2MHB4O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgXHRcdC8vIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIFx0XHRtYXJnaW4tdG9wOiAyNXB4O1xuICAgIFx0XHRmb250LXdlaWdodDogNTAwO1xuICAgIFx0XHRmb250LXNpemU6IDE2cHg7XG4gICAgXHRcdGNvbG9yOiAjNzc3O1xuICAgICAgICBsaW5lLWhlaWdodDogMS40MztcbiAgICBcdH1cblxuICAgIFx0LndoaXRlIHtcbiAgICBcdFx0bWFyZ2luOiAwO1xuICAgIFx0XHQvLyBtYXJnaW4tbGVmdDo2MHB4O1xuICAgIFx0XHRtYXJnaW4tdG9wOiAzMHB4O1xuICAgIFx0XHRmb250LXdlaWdodDogMzAwO1xuICAgIFx0XHRjb2xvcjogd2hpdGU7XG4gICAgXHRcdHdpZHRoOiA3NSU7XG4gICAgXHR9XG5cbiAgICBcdGltZyB7XG4gICAgXHRcdHdpZHRoOiAxMDAlOlxuICAgICAgICAvLyBtYXJnaW4tbGVmdDogMjAwcHg7XG4gICAgXHR9XG5cbiAgICBcdC53aGl0ZS1zcXVhcmUge1xuICAgIFx0XHR3aWR0aDo4NyU7XG4gICAgXHRcdG1pbi1oZWlnaHQ6IDQwMHB4O1xuICAgIFx0XHQvLyBtaW4taGVpZ2h0OiA2MCU7XG4gICAgXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBcdFx0cmlnaHQ6IC03MHB4O1xuICAgIFx0XHRyaWdodDogNyU7XG4gICAgXHRcdHRvcDogNTBweDtcblxuICAgIFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBcdFx0ei1pbmRleDogLTE7XG5cbiAgICBcdFx0LXdlYmtpdC1ib3gtc2hhZG93OiAxcHggNzdweCAxMDNweCAtNzFweCByZ2JhKDE1MywxNTMsMTUzLDEpO1xuXHRcdFx0XHQtbW96LWJveC1zaGFkb3c6IDFweCA3N3B4IDEwM3B4IC03MXB4IHJnYmEoMTUzLDE1MywxNTMsMSk7XG5cdFx0XHRcdGJveC1zaGFkb3c6IDFweCA3N3B4IDEwM3B4IC03MXB4IHJnYmEoMTUzLDE1MywxNTMsMSk7XG5cbiAgICBcdH1cblxuICAgIFx0LmdvLXRvLW1hcCB7XG4gICAgXHRcdGNsZWFyOiBib3RoO1xuICAgIFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMTAyRDY0O1xuICAgIFx0XHQvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjMkNBQkZCO1xuICAgIFx0XHR3aWR0aDogOTAlO1xuICAgIFx0XHRtaW4taGVpZ2h0OiA0NTBweDtcbiAgICBcdFx0bWFyZ2luLXRvcDogNTBweDtcbiAgICBcdFx0bWFyZ2luLWJvdHRvbTogNDVweDtcbiAgICBcdFx0ZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gICAgXHRcdHBhZGRpbmc6IDMwcHg7XG4gICAgXHRcdHBhZGRpbmctdG9wOjA7XG4gICAgXHRcdHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgXHRcdHBhZGRpbmctYm90dG9tOiAwO1xuXG4gICAgXHRcdC13ZWJraXQtYm94LXNoYWRvdzogMXB4IDcycHggMTI2cHggLTcxcHggcmdiYSgxNTMsMTUzLDE1MywxKTtcblx0XHRcdFx0LW1vei1ib3gtc2hhZG93OiAxcHggNzJweCAxMjZweCAtNzFweCByZ2JhKDE1MywxNTMsMTUzLDEpO1xuXHRcdFx0XHRib3gtc2hhZG93OiAxcHggNzJweCAxMjZweCAtNzFweCByZ2JhKDE1MywxNTMsMTUzLDEpO1xuICAgIFx0fVxuXG4gICAgXHQuZm9ybS1maWVsZC10ZXh0IHtcbiAgICBcdFx0d2lkdGg6NjUlO1xuICAgIFx0XHRkaXNwbGF5OiBibG9jaztcbiAgICBcdFx0Ly8gbWFyZ2luOiAwIGF1dG87XG4gICAgXHRcdGhlaWdodDogNDVweDtcbiAgICBcdFx0bWFyZ2luLXRvcDogNjhweDtcblxuICAgICAgICBib3JkZXItcmFkaXVzOiA0NXB4O1xuICAgIFx0XHRwYWRkaW5nLWxlZnQ6IDM1cHg7XG4gICAgXHRcdGZvbnQtd2VpZ2h0OiAyMDA7XG4gICAgXHRcdC8vIHRleHQtYWxpZ246Y2VudGVyO1xuICAgIFx0XHRib3JkZXI6IDVweCBzb2xpZCAjMkNBQkZCO1xuXG4gICAgXHR9XG5cbiAgICBcdGEuY3RhLWxpbmsge1xuICAgICAgICBjbGVhcjogYm90aDtcbiAgICBcdFx0ZGlzcGxheTogYmxvY2s7XG4gICAgXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XG4gICAgXHRcdG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgIFx0XHRtYXJnaW4tYm90dG9tOjYwcHg7XG4gICAgXHRcdGJhY2tncm91bmQtY29sb3I6ICMxMDJENjQ7XG4gICAgXHRcdGNvbG9yOiB3aGl0ZTtcbiAgICBcdFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBcdFx0Ly8gYm9yZGVyOiA0cHggc29saWQgIzJDQUJGQjtcbiAgICBcdFx0d2lkdGg6IDQwJTtcbiAgICBcdFx0cGFkZGluZy1sZWZ0OiA2MHB4O1xuICAgIFx0XHRwYWRkaW5nLXJpZ2h0OiA2MHB4O1xuICAgIFx0XHRwYWRkaW5nLXRvcDogMTNweDtcbiAgICBcdFx0cGFkZGluZy1ib3R0b206IDEzcHg7XG4gICAgXHRcdGJvcmRlci1yYWRpdXM6IDQ1cHg7XG4gICAgXHRcdHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2Utb3V0O1xuICAgIFx0XHRib3JkZXI6IDNweCBzb2xpZCAjZWNlY2VjO1xuICAgIFx0fVxuXG4gICAgXHRhLmN0YS1saW5rOmhvdmVyIHtcbiAgICBcdFx0LXdlYmtpdC1ib3gtc2hhZG93OiAxcHggNzJweCAxMjZweCAtNzFweCByZ2JhKDE1MywxNTMsMTUzLDEpO1xuXHRcdFx0XHQtbW96LWJveC1zaGFkb3c6IDFweCA3MnB4IDEyNnB4IC03MXB4IHJnYmEoMTUzLDE1MywxNTMsMSk7XG5cdFx0XHRcdGJveC1zaGFkb3c6IDFweCA3MnB4IDEyNnB4IC03MXB4IHJnYmEoMTUzLDE1MywxNTMsMSk7XG4gICAgXHRcdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIFx0XHRjb2xvcjogIzJDQUJGQjtcbiAgICBcdFx0Ym9yZGVyOiAzcHggc29saWQgIzJDQUJGQjtcbiAgICBcdFx0Y3Vyc29yOiBwb2ludGVyO1xuICAgIFx0fVxuXG4gICAgICAuY3RhLXRleHQtd2lkZSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAvLyBib3JkZXItdG9wOiAycHggc29saWQgI2M4YzhjODtcbiAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICAgICAgcGFkZGluZy10b3A6IDgwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMjNweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBsaW5lLWhlaWdodDogMS42NDtcblxuICAgICAgfVxuXG4gICAgICAuY3RhLXRleHQtc3VtbWFyeSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAvLyBib3JkZXItdG9wOiAycHggc29saWQgI2M4YzhjODtcbiAgICAgICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICAgICAgLy8gcGFkZGluZy10b3A6IDgwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNjQ7XG4gICAgICB9XG5cblxuICAgICAgLmN0YS0zLXdyYXBwZXIge1xuICAgICAgICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgICAgIH1cblxuICAgICAgLmNhcmQge1xuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2M4YzhjODtcbiAgICAgICAgcGFkZGluZy10b3A6IDYwcHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA2MHB4O1xuICAgICAgfVxuXG4gICAgICAuZmllbGQtaWNvbiB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIC5pY29uIHtcbiAgICAgICAgd2lkdGg6IDMwJTtcbiAgICAgIH1cblxuICAgICAgLmljb24tdGludCB7XG4gICAgICAgIHdpZHRoOiAyMiU7XG4gICAgICB9XG5cbiAgICAgIC5maWVsZC10aXRsZSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICAuZmllbGQtc3VtbWFyeSB7XG4gICAgICAgIHdpZHRoOiA3NSU7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIC5jdGEtYm90dG9tLXdyYXBwZXIge1xuICAgICAgICAvLyB3aWR0aDogNzAlO1xuICAgICAgICAvLyBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDJweCA1cHggMHB4IHJnYmEoMjEyLDIxMiwyMTIsMSk7XG4gICAgICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDJweCA1cHggMHB4IHJnYmEoMjEyLDIxMiwyMTIsMSk7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAycHggNXB4IDBweCByZ2JhKDIxMiwyMTIsMjEyLDEpO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuXG4gICAgICB9XG5cbiAgICAgIC5hcnJvdy1pY29uIHtcbiAgICAgICAgd2lkdGg6IDMwJTtcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgICAgIC5jdGEtdGV4dC1zdW1tYXJ5IHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAvLyBib3JkZXItdG9wOiAycHggc29saWQgI2M4YzhjODtcbiAgICAgICAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgICAgICAgIC8vIHBhZGRpbmctdG9wOiA4MHB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNjQ7XG4gICAgICAgIH1cbiAgICAgICAgLmFycm93LWljb24ge1xuICAgICAgICAgIHdpZHRoOiAxNSU7XG4gICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDkwMnB4KSB7XG5cbiAgICAgICAgLmxlZnQtc2lkZSB7XG4gICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgcGFkZGluZy10b3A6IDE1MHB4O1xuICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrXG4gICAgICAgIH1cblxuICAgICAgICAucmlnaHQtc2lkZSB7XG5cbiAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiBpbmhlcml0O1xuICAgICAgICAgIG1heC1oZWlnaHQ6IGluaGVyaXQ7XG4gICAgICAgICAgcGFkZGluZy10b3A6IDQwcHg7XG4gICAgICAgICAgLy8gcGFkZGluZzogNDBweDtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLmludHJvLXRleHQge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMCU7XG4gICAgICAgICAgbWFyZ2luLXRvcDogNzVweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogNjNweDtcblxuICAgICAgICB9XG5cblxuICAgICAgICAuZ28tdG8tbWFwIHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgY2xlYXI6IGJvdGg7XG4gICAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzJhNjNmZjtcbiAgICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjMkNBQkZCO1xuICAgICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICAgICAgbWluLWhlaWdodDogNDUwcHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTEwcHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNzVweDtcbiAgICAgICAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgICAgICAgICBwYWRkaW5nOiA2MHB4O1xuICAgICAgICAgIHBhZGRpbmctdG9wOjA7XG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMDtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMDtcblxuICAgICAgICB9XG5cbiAgICAgICAgLmFycm93LWljb24ge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICBib3R0b206IDA7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIC5zdWJoZWFkaW5nIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogODBweDtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICBmb250LXNpemU6IDM4cHg7XG5cblxuICAgICAgICB9XG5cbiAgICAgICAgLmJvZHktdGV4dCB7XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICBjbGVhcjogYm90aDtcbiAgICAgICAgICB3aWR0aDogNjAlO1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMCU7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICBmb250LXNpemU6IDIzcHg7XG4gICAgICAgICAgY29sb3I6ICM3Nzc7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC53aGl0ZSB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIC8vIG1hcmdpbi1sZWZ0OjYwcHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICB3aWR0aDogNzUlO1xuICAgICAgICB9XG5cbiAgICAgICAgaW1nIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTpcbiAgICAgICAgfVxuXG4gICAgICAgIC53aGl0ZS1zcXVhcmUge1xuICAgICAgICAgIHdpZHRoOjg3JTtcbiAgICAgICAgICBtaW4taGVpZ2h0OiA3MDBweDtcbiAgICAgICAgICAvLyBtaW4taGVpZ2h0OiA2MCU7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHJpZ2h0OiAtNzBweDtcbiAgICAgICAgICByaWdodDogNyU7XG4gICAgICAgICAgdG9wOiAxNDBweDtcblxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgIHotaW5kZXg6IC0xO1xuXG4gICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAxcHggNzdweCAxMDNweCAtNzFweCByZ2JhKDE1MywxNTMsMTUzLDEpO1xuICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogMXB4IDc3cHggMTAzcHggLTcxcHggcmdiYSgxNTMsMTUzLDE1MywxKTtcbiAgICAgICAgICBib3gtc2hhZG93OiAxcHggNzdweCAxMDNweCAtNzFweCByZ2JhKDE1MywxNTMsMTUzLDEpO1xuXG4gICAgICAgIH1cblxuICAgICAgICBhLmN0YS1saW5rIHtcbiAgICAgICAgICBjbGVhcjogYm90aDtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206MTAwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzEwMkQ2NDtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAvLyBib3JkZXI6IDRweCBzb2xpZCAjMkNBQkZCO1xuICAgICAgICAgIHdpZHRoOiA0MCU7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMjBweDtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMjBweDtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMjNweDtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjNweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA0NXB4O1xuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xuICAgICAgICAgIGJvcmRlcjogM3B4IHNvbGlkICNlY2VjZWM7XG4gICAgICAgIH1cblxuICAgICAgICBhLmN0YS1saW5rOmhvdmVyIHtcbiAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDFweCA3MnB4IDEyNnB4IC03MXB4IHJnYmEoMTUzLDE1MywxNTMsMSk7XG4gICAgICAgICAgLW1vei1ib3gtc2hhZG93OiAxcHggNzJweCAxMjZweCAtNzFweCByZ2JhKDE1MywxNTMsMTUzLDEpO1xuICAgICAgICAgIGJveC1zaGFkb3c6IDFweCA3MnB4IDEyNnB4IC03MXB4IHJnYmEoMTUzLDE1MywxNTMsMSk7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgY29sb3I6ICMyQ0FCRkI7XG4gICAgICAgICAgYm9yZGVyOiAzcHggc29saWQgIzJDQUJGQjtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAuY3RhLXRleHQtd2lkZSB7XG5cbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBtYXJnaW4tdG9wOiA3MHB4O1xuICAgICAgICAgIC8vIHBhZGRpbmctdG9wOiA4MHB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjNweDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNjQ7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIC5maWVsZC1pbWFnZSB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICAuY3RhLTMtd3JhcHBlciB7XG4gICAgICAgICAgY2xlYXI6IGJvdGg7XG4gICAgICAgICAgd2lkdGg6IDg1JTtcbiAgICAgICAgICBtYXJnaW46IDBweCBhdXRvO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgIH1cblxuICAgICAgICAuY2FyZCB7XG4gICAgICAgICAgd2lkdGg6IDMzLjMzMzMzMzMzMzMzNjclO1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICBib3JkZXItdG9wOiBub25lO1xuICAgICAgICAgIHBhZGRpbmctdG9wOiA2MHB4O1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA2MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmZpZWxkLWljb24ge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIH1cblxuICAgICAgICAuaWNvbiB7XG4gICAgICAgICAgd2lkdGg6IDMwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pY29uLXRpbnQge1xuICAgICAgICAgIHdpZHRoOiAxOSU7XG4gICAgICAgIH1cblxuICAgICAgICAuZmllbGQtdGl0bGUge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgICAgICAgZm9udC1zaXplOiAzNnB4O1xuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgcGFkZGluZy1yaWdodDpcbiAgICAgICAgfVxuXG4gICAgICAgIC5maWVsZC1zdW1tYXJ5IHtcbiAgICAgICAgICB3aWR0aDogNjglO1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgICAgIC8vIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jdGEtYm90dG9tLXdyYXBwZXIge1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAxcHggNzJweCAxMjZweCAtNzFweCByZ2JhKDE1MywxNTMsMTUzLDEpO1xuICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogMXB4IDcycHggMTI2cHggLTcxcHggcmdiYSgxNTMsMTUzLDE1MywxKTtcbiAgICAgICAgICBib3gtc2hhZG93OiAxcHggNzJweCAxMjZweCAtNzFweCByZ2JhKDE1MywxNTMsMTUzLDEpO1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xuXG4gICAgICAgIH1cbiAgICAgIH1cblxuXHRgfTwvc3R5bGU+XG5cblxuXHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuXHRcdDxzcGFuIGNsYXNzTmFtZT1cIndoaXRlLXNxdWFyZVwiPjwvc3Bhbj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm8td3JhcHBlclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0LXNpZGVcIj5cbiAgICAgIFx0PGRpdiBjbGFzc05hbWU9XCJpbnRyby10ZXh0XCI+R2V0IGl0IGNsZWFuZWQgd2l0aG91dCB0aGUgbWVzcyE8L2Rpdj5cblxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHQtc2lkZVwiPlxuICAgICAgXHQ8aW1nIHNyYz1cIi9zdGF0aWMvY3RhLmpwZ1wiIGFsdD1cIm15IGltYWdlXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzc05hbWU9XCJib2R5LXRleHRcIj5QbGF0Zm9ybSBpcyBidWlsdCBhcm91bmQgRHJ1cGFsIGFuZCBhbGxvd3MgY29tcGFuaWVzIGFyb3VuZCB0aGUgZ2xvYmUgdG8gYnVpbGQsIG9wZXJhdGUgYW5kIG9wdGltaXplIHRoZWlyIGRpZ2l0YWwgZXhwZXJpZW5jZXMuPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImdvLXRvLW1hcFwiPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnRyby10ZXh0IHN1YmhlYWRpbmdcIj5WaXNpdCB0aGUgbWFwIHRvIHNlZSBvdXIgbGlzdCBvZiBEcnkgQ2xlYW5lcnMhPC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJvZHktdGV4dCB3aGl0ZVwiPlBsYXRmb3JtIGlzIGJ1aWx0IGFyb3VuZCBEcnVwYWwgYW5kIGFsbG93cyBjb21wYW5pZXMgYXJvdW5kIHRoZSBnbG9iZSB0byBidWlsZCwgb3BlcmF0ZSBhbmQgb3B0aW1pemUgdGhlaXIgZGlnaXRhbCBleHBlcmllbmNlcy48L2Rpdj5cbiAgICAgIDxMaW5rIGhyZWY9XCIvbWFwXCI+XG4gICAgICAgIDxhPjxpbWcgY2xhc3NOYW1lPVwiYXJyb3ctaWNvblwiIHNyYz1cIi9zdGF0aWMvYXJyb3ctcmlnaHQtc29saWQuc3ZnXCIgYWx0PVwiSWNvblwiLz48L2E+XG4gICAgICA8L0xpbms+XG5cdFx0XHR7LyogPGlucHV0IHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBlbWFpbCB0byBnZXQgbm90aWZpZWQgd2hlbiB3ZSBuZWFyIGxhdW5jaCFcIiBjbGFzc05hbWU9XCJmb3JtLWZpZWxkLXRleHRcIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJmaXJzdG5hbWVcIi8+ICovfVxuICAgIDwvZGl2PlxuXG5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImN0YS0zLXdyYXBwZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkLWljb25cIj48aW1nIGNsYXNzTmFtZT1cImljb25cIiBzcmM9XCIvc3RhdGljL3RydWNrLXNvbGlkLnN2Z1wiIGFsdD1cIkljb25cIi8+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQtdGl0bGVcIj5Ecm9wLW9mZiAvIFBpY2stdXA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZC1zdW1tYXJ5XCI+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gTnVsbGEgdWx0cmljZXMgZG9sb3Igb3JjaSwgaWQgZmF1Y2kuPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkLWljb25cIj48aW1nIGNsYXNzTmFtZT1cImljb24tdGludFwiIHNyYz1cIi9zdGF0aWMvdGludC1zb2xpZC5zdmdcIiBhbHQ9XCJJY29uXCIvPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkLXRpdGxlXCI+R2V0IFRoZW0gV2FzaGVkPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQtc3VtbWFyeVwiPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIE51bGxhIHVsdHJpY2VzIGRvbG9yIG9yY2ksIGlkIGZhdWNpLjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZC1pY29uXCI+PGltZyBjbGFzc05hbWU9XCJpY29uXCIgc3JjPVwiL3N0YXRpYy9ib3gtb3Blbi1zb2xpZC5zdmdcIiBhbHQ9XCJJY29uXCIvPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkLXRpdGxlXCI+UmVjaWV2ZSBMYXVuZHJ5ITwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkLXN1bW1hcnlcIj5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBOdWxsYSB1bHRyaWNlcyBkb2xvciBvcmNpLCBpZCBmYXVjaS48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG5cblxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY3RhLWJvdHRvbS13cmFwcGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImN0YS10ZXh0LXdpZGVcIj5TbywgQXJlIFlvdSBSZWFkeSBUbyBTaWduIFVwIFdpdGggVXM/PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImN0YS10ZXh0LXN1bW1hcnlcIj5QbGF0Zm9ybSBpcyBidWlsdCBhcm91bmQgRHJ1cGFsIGFuZCBhbGxvd3MgY29tcGFuaWVzIGFyb3VuZCB0aGUgZ2xvYmUgdG8gYnVpbGQsIG9wZXJhdGUgYW5kIG9wdGltaXplIHRoZWlyIGRpZ2l0YWwgZXhwZXJpZW5jZXMuPC9kaXY+XG4gICAgICA8TGluayBocmVmPVwiL3NpZ24tdXBcIj5cbiAgICAgICAgPGEgY2xhc3NOYW1lPVwiY3RhLWxpbmtcIj5TaWduIE1lIFVwITwvYT5cbiAgICAgIDwvTGluaz5cbiAgICA8L2Rpdj5cblxuICA8L2Rpdj5cblxuXG5cblxuXG4gIDwvTGF5b3V0PlxuKVxuXG5JbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbigpIHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLnR2bWF6ZS5jb20vc2VhcmNoL3Nob3dzP3E9YmF0bWFuJylcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcblxuICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcbiAgY29uc29sZS5sb2coYFNob3cgZGF0YSBmZXRjaGVkLiBDb3VudDogJHtkYXRhLmxlbmd0aH1gKVxuXG4gIHJldHVybiB7XG4gICAgc2hvd3M6IGRhdGFcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleFxuXG5cbiAgICAvLyA8dWw+XG4gICAgLy8gICB7cHJvcHMuc2hvd3MubWFwKCh7c2hvd30pID0+IChcbiAgICAvLyAgICAgPGxpIGtleT17c2hvdy5pZH0+XG4gICAgLy8gICAgICAgPExpbmsgYXM9e2AvcC8ke3Nob3cuaWR9YH0gaHJlZj17YC9wb3N0P2lkPSR7c2hvdy5pZH0mbmFtZT0ke3Nob3cubmFtZX1gfT5cbiAgICAvLyAgICAgICAgIDxhPntzaG93Lm5hbWV9PC9hPlxuICAgIC8vICAgICAgIDwvTGluaz5cbiAgICAvLyAgICAgPC9saT5cbiAgICAvLyAgICkpfVxuICAgIC8vIDwvdWw+XG5cblxuLy8gICAgIGNvbnN0IFBvc3RMaW5rID0gKHByb3BzKSA9PiAoXG4vLyAgIDxsaT5cbi8vICAgICA8TGluayBhcz17YC9wb3N0cy8ke3Byb3BzLmlkfWB9IGhyZWY9e2AvcG9zdD90aXRsZT0ke3Byb3BzLnRpdGxlfWB9PlxuLy8gICAgICAgPGE+e3Byb3BzLnRpdGxlfTwvYT5cbi8vICAgICA8L0xpbms+XG4vLyAgIDwvbGk+XG4vLyApXG5cblxuICAgIC8vIDxQb3N0TGluayBpZD1cImhlbGxvLW5leHRcIiB0aXRsZT1cIkhlbGxvIE5leHQuanNcIi8+XG4iXX0= */\n/*@ sourceURL=/Users/jbabak/Sites/dcapp/web/pages/index.js */",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-2238505899" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 505
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "jsx-2238505899" + " " + "white-square",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 506
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-2238505899" + " " + "hero-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 507
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-2238505899" + " " + "left-side",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 508
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-2238505899" + " " + "intro-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 509
    },
    __self: this
  }, "Get it cleaned without the mess!")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-2238505899" + " " + "right-side",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 513
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    src: "/static/cta.jpg",
    alt: "my image",
    className: "jsx-2238505899",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 514
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-2238505899" + " " + "body-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 518
    },
    __self: this
  }, "Platform is built around Drupal and allows companies around the globe to build, operate and optimize their digital experiences."), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-2238505899" + " " + "go-to-map",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 520
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-2238505899" + " " + "intro-text subheading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 521
    },
    __self: this
  }, "Visit the map to see our list of Dry Cleaners!"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-2238505899" + " " + "body-text white",
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
    className: "jsx-2238505899",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 524
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    src: "/static/arrow-right-solid.svg",
    alt: "Icon",
    className: "jsx-2238505899" + " " + "arrow-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 524
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-2238505899" + " " + "cta-3-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 530
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-2238505899" + " " + "card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 531
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-2238505899" + " " + "field-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 532
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    src: "/static/truck-solid.svg",
    alt: "Icon",
    className: "jsx-2238505899" + " " + "icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 532
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-2238505899" + " " + "field-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 533
    },
    __self: this
  }, "Drop-off / Pick-up"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-2238505899" + " " + "field-summary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 534
    },
    __self: this
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultrices dolor orci, id fauci.")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-2238505899" + " " + "card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 536
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-2238505899" + " " + "field-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 537
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    src: "/static/tint-solid.svg",
    alt: "Icon",
    className: "jsx-2238505899" + " " + "icon-tint",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 537
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-2238505899" + " " + "field-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 538
    },
    __self: this
  }, "Get Them Washed"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-2238505899" + " " + "field-summary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 539
    },
    __self: this
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultrices dolor orci, id fauci.")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-2238505899" + " " + "card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 541
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-2238505899" + " " + "field-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 542
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    src: "/static/box-open-solid.svg",
    alt: "Icon",
    className: "jsx-2238505899" + " " + "icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 542
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-2238505899" + " " + "field-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 543
    },
    __self: this
  }, "Recieve Laundry!"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-2238505899" + " " + "field-summary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 544
    },
    __self: this
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultrices dolor orci, id fauci."))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-2238505899" + " " + "cta-bottom-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 550
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-2238505899" + " " + "cta-text-wide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 551
    },
    __self: this
  }, "So, Are You Ready To Sign Up With Us?"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-2238505899" + " " + "cta-text-summary",
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
    className: "jsx-2238505899" + " " + "cta-link",
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