webpackHotUpdate("static/development/pages/map.js",{

/***/ "./pages/map.js":
/*!**********************!*\
  !*** ./pages/map.js ***!
  \**********************/
/*! exports provided: Mappy, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mappy", function() { return Mappy; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _comps_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../comps/Header */ "./comps/Header.js");
/* harmony import */ var _comps_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../comps/Layout */ "./comps/Layout.js");
/* harmony import */ var google_maps_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! google-maps-react */ "./node_modules/google-maps-react/dist/index.js");
/* harmony import */ var google_maps_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(google_maps_react__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/jbabak/Sites/dcapp/web/pages/map.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var mapStyle = {
  map: {
    width: '100%',
    height: '74.5%',
    maxHeight: '80%',
    // maxHeight: '740px',
    overflow: 'hidden'
  }
};
var Mappy =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Mappy, _React$Component);

  function Mappy() {
    _classCallCheck(this, Mappy);

    return _possibleConstructorReturn(this, _getPrototypeOf(Mappy).apply(this, arguments));
  }

  _createClass(Mappy, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      console.log('test');
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_comps_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "501418187",
        css: ".map.jsx-501418187{width:100%;overflow:hidden;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYmFiYWsvU2l0ZXMvZGNhcHAvd2ViL3BhZ2VzL21hcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4QmtCLEFBR29CLFdBSUssZ0JBQ2pCIiwiZmlsZSI6Ii9Vc2Vycy9qYmFiYWsvU2l0ZXMvZGNhcHAvd2ViL3BhZ2VzL21hcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcHMvSGVhZGVyJ1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wcy9MYXlvdXQnXG5pbXBvcnQgeyBNYXAsIEluZm9XaW5kb3csIE1hcmtlciwgR29vZ2xlQXBpV3JhcHBlciB9IGZyb20gJ2dvb2dsZS1tYXBzLXJlYWN0JztcblxuY29uc3QgbWFwU3R5bGUgPSB7XG5cdG1hcDoge1xuXHRcdHdpZHRoOiAnMTAwJScsXG5cdFx0aGVpZ2h0OiAnNzQuNSUnLFxuXHRcdG1heEhlaWdodDogJzgwJScsXG5cdFx0Ly8gbWF4SGVpZ2h0OiAnNzQwcHgnLFxuXHRcdG92ZXJmbG93OiAnaGlkZGVuJ1xuXHR9LFxufVxuXG5cbmV4cG9ydCBjbGFzcyBNYXBweSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblx0Y29tcG9uZW50V2lsbE1vdW50KCkge1xuXG5cdFx0Y29uc29sZS5sb2coJ3Rlc3QnKTtcblxuXHR9XG5cblx0cmVuZGVyKCkge1xuXG5cdFx0cmV0dXJuIChcblxuXG5cdFx0XHRcdFx0PExheW91dD5cblx0XHRcdFx0XHRcdDxzdHlsZSBqc3g+e2Bcblx0XHRcdFx0XHRcdFx0Lm1hcCB7XG5cdFx0XHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0XHRcdFx0Ly8gaGVpZ2h0OiAxMDAlO1xuXHRcdFx0XHRcdFx0XHRcdC8vIG1heC1oZWlnaHQ6NDAwcHg7XG5cdFx0XHRcdFx0XHRcdFx0Ly8gYmFja2dyb3VuZC1jb2xvcjogIzAwMjc2Njtcblx0XHRcdFx0XHRcdFx0XHRvdmVyZmxvdzogaGlkZGVuO1xuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGB9PC9zdHlsZT5cblxuXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1hcFwiPlxuXHRcdFx0XHRcdFx0XHQ8TWFwXG5cdFx0XHRcdFx0XHRcdFx0Z29vZ2xlPXt0aGlzLnByb3BzLmdvb2dsZX1cblx0XHRcdFx0XHRcdFx0XHRzdHlsZT17bWFwU3R5bGUubWFwfVxuXHRcdFx0XHRcdFx0XHRcdGluaXRpYWxDZW50ZXI9e3tcblx0XHRcdFx0XHRcdFx0XHRcdGxhdDogMjUuMjY3MzY5LFxuXHRcdFx0XHRcdFx0XHRcdFx0bG5nOiA1MS41Mjk0NTFcblx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdHpvb209ezE0fVxuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0PE1hcmtlclxuXHRcdFx0XHRcdFx0XHRcdFx0dGl0bGU9eydUaGUgbWFya2VyYHMgdGl0bGUgd2lsbCBhcHBlYXIgYXMgYSB0b29sdGlwLid9XG5cdFx0XHRcdFx0XHRcdFx0XHRuYW1lPXsnU09NQSd9XG5cdFx0XHRcdFx0XHRcdFx0XHRwb3NpdGlvbj17e2xhdDogMjUuMjYyODExLCBsbmc6IDUxLjUzMjA5NH19IC8+XG5cblx0XHRcdFx0XHRcdFx0XHRcdDxNYXJrZXJcblx0XHRcdFx0XHRcdFx0XHQgICAgbmFtZT17J0RvbG9yZXMgcGFyayd9XG5cdFx0XHRcdFx0XHRcdFx0ICAgIHBvc2l0aW9uPXt7bGF0OiAyNS4yNzAzOTgsIGxuZzogNTEuNTI0NzIzfX0gLz5cblx0XHRcdFx0XHRcdFx0XHQgIDxNYXJrZXIgLz5cblxuXHRcdFx0XHRcdFx0XHRcdFx0PE1hcmtlclxuXHRcdFx0XHRcdFx0XHRcdCAgICBuYW1lPXsnRG9sb3JlcyBwYXJrJ31cblx0XHRcdFx0XHRcdFx0XHQgICAgcG9zaXRpb249e3tsYXQ6IDI1LjMwMjc4NiwgbG5nOiA1MS41MTIyMTJ9fSAvPlxuXHRcdFx0XHRcdFx0XHRcdCAgPE1hcmtlciAvPlxuXG5cdFx0XHRcdFx0XHRcdFx0XHQ8TWFya2VyXG5cdFx0XHRcdFx0XHRcdFx0ICAgIG5hbWU9eydEb2xvcmVzIHBhcmsnfVxuXHRcdFx0XHRcdFx0XHRcdCAgICBwb3NpdGlvbj17e2xhdDogMjUuMjA4OTQ1LCBsbmc6IDUxLjQ0NDU1MX19IC8+XG5cdFx0XHRcdFx0XHRcdFx0ICA8TWFya2VyIC8+XG5cblxuXHRcdFx0XHRcdFx0XHQ8L01hcD5cblxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHQ8L0xheW91dD5cblxuXG5cblxuXG5cdFx0KTtcblxuXG5cdH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBHb29nbGVBcGlXcmFwcGVyKHtcbiAgYXBpS2V5OiAnQUl6YVN5QVR4X2RoTHZHQ0s2VHFMMHM4b0JRN3JpMGxJaTlHUFNZJ1xufSkoTWFwcHkpXG4iXX0= */\n/*@ sourceURL=/Users/jbabak/Sites/dcapp/web/pages/map.js */",
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-501418187" + " " + "map",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(google_maps_react__WEBPACK_IMPORTED_MODULE_4__["Map"], {
        google: this.props.google,
        style: mapStyle.map,
        initialCenter: {
          lat: 25.267369,
          lng: 51.529451
        },
        zoom: 14,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(google_maps_react__WEBPACK_IMPORTED_MODULE_4__["Marker"], {
        title: 'The marker`s title will appear as a tooltip.',
        name: 'SOMA',
        position: {
          lat: 25.262811,
          lng: 51.532094
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(google_maps_react__WEBPACK_IMPORTED_MODULE_4__["Marker"], {
        name: 'Dolores park',
        position: {
          lat: 25.270398,
          lng: 51.524723
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(google_maps_react__WEBPACK_IMPORTED_MODULE_4__["Marker"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(google_maps_react__WEBPACK_IMPORTED_MODULE_4__["Marker"], {
        name: 'Dolores park',
        position: {
          lat: 25.302786,
          lng: 51.512212
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(google_maps_react__WEBPACK_IMPORTED_MODULE_4__["Marker"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(google_maps_react__WEBPACK_IMPORTED_MODULE_4__["Marker"], {
        name: 'Dolores park',
        position: {
          lat: 25.208945,
          lng: 51.444551
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(google_maps_react__WEBPACK_IMPORTED_MODULE_4__["Marker"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }))));
    }
  }]);

  return Mappy;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);
/* harmony default export */ __webpack_exports__["default"] = (Object(google_maps_react__WEBPACK_IMPORTED_MODULE_4__["GoogleApiWrapper"])({
  apiKey: 'AIzaSyATx_dhLvGCK6TqL0s8oBQ7ri0lIi9GPSY'
})(Mappy));
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/map")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=map.js.10216c036a24c61318d6.hot-update.js.map