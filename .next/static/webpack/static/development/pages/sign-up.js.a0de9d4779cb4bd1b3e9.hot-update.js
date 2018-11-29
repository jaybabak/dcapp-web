webpackHotUpdate("static/development/pages/sign-up.js",{

/***/ "./comps/Layout.js":
/*!*************************!*\
  !*** ./comps/Layout.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./comps/Header.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Footer */ "./comps/Footer.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/jbabak/Sites/dcapp/web/comps/Layout.js";







var Layout = function Layout(props) {
  //conditional rendering of components SHOW OR HIDE FOOTER
  console.log(props.overflow);
  var hiddenOverflow = '';

  if (props.overflow == true) {
    hiddenOverflow = 'overflow: hidden;';
  } else {
    hiddenOverflow = 'overflow: inherit';
  } // var showFooter = props.displayFooter;
  //
  // var footerRegion;
  //
  // if()


  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1534060899", [hiddenOverflow]]]) + " " + "wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1534060899",
    css: "div.wrapper.__jsx-style-dynamic-selector{position:relative;box-sizing:border-box;margin:0;width:100%;height:100%;margin:0 auto;padding:0px;padding-top:0;background-color:#ececec;-webkit-box-shadow:2px 5px 20px -13px rgba(0,0,0,0.55);-moz-box-shadow:2px 5px 20px -13px rgba(0,0,0,0.55);box-shadow:2px 5px 20px -13px rgba(0,0,0,0.55);font-family:'Montserrat',sans-serif;background-image:url('/static/marker.svg');background-size:contain;background-position:500px 800px;background-position:600px bottom;background-repeat:no-repeat;padding-bottom:120px;min-height:100vh;}body.__jsx-style-dynamic-selector{".concat(hiddenOverflow, ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYmFiYWsvU2l0ZXMvZGNhcHAvd2ViL2NvbXBzL0xheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0QmMsQUFHdUIsQUE4QnBCLGtCQTdCMkIsV0E2QjFCLFdBNUJhLFNBQ0UsV0FDRixZQUVLLGNBQ0YsWUFDRSxjQUVXLHlCQUUyQix1REFDSCxvREFDTCwrQ0FFVixvQ0FFTSwyQ0FDbkIsd0JBQ1EsZ0NBQ0MsaUNBQ0wsNEJBRVAscUJBQ0osaUJBQ2YiLCJmaWxlIjoiL1VzZXJzL2piYWJhay9TaXRlcy9kY2FwcC93ZWIvY29tcHMvTGF5b3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vRm9vdGVyJztcblxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuXG5jb25zdCBMYXlvdXQgPSAocHJvcHMpID0+IHtcblxuXHQvL2NvbmRpdGlvbmFsIHJlbmRlcmluZyBvZiBjb21wb25lbnRzIFNIT1cgT1IgSElERSBGT09URVJcblx0Y29uc29sZS5sb2cocHJvcHMub3ZlcmZsb3cpO1xuXHR2YXIgaGlkZGVuT3ZlcmZsb3cgPSAnJztcblx0aWYocHJvcHMub3ZlcmZsb3cgPT0gdHJ1ZSl7XG5cblx0XHRoaWRkZW5PdmVyZmxvdyA9ICdvdmVyZmxvdzogaGlkZGVuOyc7XG5cdH1lbHNlIHtcblx0XHRoaWRkZW5PdmVyZmxvdyA9ICdvdmVyZmxvdzogaW5oZXJpdCc7XG5cdH1cblx0Ly8gdmFyIHNob3dGb290ZXIgPSBwcm9wcy5kaXNwbGF5Rm9vdGVyO1xuXHQvL1xuXHQvLyB2YXIgZm9vdGVyUmVnaW9uO1xuXHQvL1xuXHQvLyBpZigpXG5cblxuXG5cdHJldHVybiAoPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XG5cblxuXHRcdDxzdHlsZSBqc3g+e2BcbiAgICAgIGRpdi53cmFwcGVyIHtcblx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgXHRtYXJnaW46IDA7XG4gICAgICBcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRoZWlnaHQ6IDEwMCU7XG5cbiAgICAgIFx0bWFyZ2luOiAwIGF1dG87XG4gICAgICBcdHBhZGRpbmc6IDBweDtcbiAgICAgIFx0cGFkZGluZy10b3A6IDA7XG5cbiAgICAgIFx0YmFja2dyb3VuZC1jb2xvcjogI2VjZWNlYztcblxuXHRcdFx0XHQtd2Via2l0LWJveC1zaGFkb3c6IDJweCA1cHggMjBweCAtMTNweCByZ2JhKDAsMCwwLDAuNTUpO1xuXHRcdFx0XHQtbW96LWJveC1zaGFkb3c6IDJweCA1cHggMjBweCAtMTNweCByZ2JhKDAsMCwwLDAuNTUpO1xuXHRcdFx0XHRib3gtc2hhZG93OiAycHggNXB4IDIwcHggLTEzcHggcmdiYSgwLDAsMCwwLjU1KTtcblxuXHRcdFx0XHRmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuXG5cdFx0XHRcdGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL3N0YXRpYy9tYXJrZXIuc3ZnJyk7XG5cdFx0XHRcdGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcblx0XHRcdFx0YmFja2dyb3VuZC1wb3NpdGlvbjogNTAwcHggODAwcHg7XG5cdFx0XHRcdGJhY2tncm91bmQtcG9zaXRpb246IDYwMHB4IGJvdHRvbTtcblx0XHRcdFx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcblxuXHRcdFx0XHRwYWRkaW5nLWJvdHRvbTogMTIwcHg7XG5cdFx0XHRcdG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgICAgfVxuXG5cdFx0XHRib2R5IHtcblx0XHRcdFx0JHtoaWRkZW5PdmVyZmxvd31cblx0XHRcdH1cbiAgICBgfTwvc3R5bGU+XG5cblx0XHQ8SGVhZD5cbiAgICAgIDx0aXRsZT5EcnljbGVlbiBBcHAgfCBUaGUgUGxhdGZvcm0gRm9yIFlvdXIgRHJ5IENsZWFuaW5nPC90aXRsZT5cbiAgICAgIDxtZXRhIGNoYXJTZXQ9J3V0Zi04JyAvPlxuICAgICAgPG1ldGEgbmFtZT0ndmlld3BvcnQnIGNvbnRlbnQ9J2luaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGgnIGtleT1cInZpZXdwb3J0XCIvPlxuICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9ub3JtYWxpemUvNy4wLjAvbm9ybWFsaXplLmNzc1wiIC8+XG4gICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6MjAwLDMwMCw0MDAsNDAwaSw1MDAsNjAwLDYwMGksNzAwLDgwMCw5MDBcIiByZWw9XCJzdHlsZXNoZWV0XCIvPlxuICAgIDwvSGVhZD5cblxuXHRcdDxIZWFkZXIvPlxuXG5cdFx0e3Byb3BzLmNoaWxkcmVufVxuXG5cdFx0PEZvb3Rlci8+XG5cblxuXHQ8L2Rpdj4pXG5cblxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dFxuXG5cbi8vIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvbm9ybWFsaXplLzcuMC4wL25vcm1hbGl6ZS5jc3NcIiAvPlxuIl19 */\n/*@ sourceURL=/Users/jbabak/Sites/dcapp/web/comps/Layout.js */"),
    dynamic: [hiddenOverflow],
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1534060899", [hiddenOverflow]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "Drycleen App | The Platform For Your Dry Cleaning"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    charSet: "utf-8",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1534060899", [hiddenOverflow]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    key: "viewport",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1534060899", [hiddenOverflow]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.css",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1534060899", [hiddenOverflow]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Montserrat:200,300,400,400i,500,600,600i,700,800,900",
    rel: "stylesheet",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1534060899", [hiddenOverflow]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }), props.children, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout); // <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.css" />

/***/ })

})
//# sourceMappingURL=sign-up.js.a0de9d4779cb4bd1b3e9.hot-update.js.map