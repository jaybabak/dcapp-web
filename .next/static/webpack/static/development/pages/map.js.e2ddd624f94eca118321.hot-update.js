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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _comps_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../comps/Header */ "./comps/Header.js");
/* harmony import */ var _comps_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../comps/Layout */ "./comps/Layout.js");
/* harmony import */ var google_maps_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! google-maps-react */ "./node_modules/google-maps-react/dist/index.js");
/* harmony import */ var google_maps_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(google_maps_react__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/jbabak/Sites/dcapp/web/pages/map.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var mapStyle = {
  map: {
    width: '100%',
    height: '100%',
    maxHeight: '80vh',
    // maxHeight: '740px',
    overflow: 'hidden'
  }
};
var Mappy =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Mappy, _React$Component);

  function Mappy(_props) {
    var _this;

    _classCallCheck(this, Mappy);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Mappy).call(this, _props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "componentWillMount", function () {
      axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('http://localhost:5000/stores').then(function (response) {
        _this.setState({
          data: response.data
        });
      }).catch(function (error) {
        console.log(error);
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "componentDidMount", function () {});

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onMarkerClick", function (props, marker, e) {
      _this.setState({
        selectedPlace: props,
        storeInfo: props.store,
        phoneNumber: props.store.phoneNumber ? props.store.phoneNumber : "No Phone Number Found",
        description: props.store.description ? props.store.description : "No Description Found",
        activeMarker: marker,
        showingInfoWindow: true
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onMapClicked", function (props) {
      if (_this.state.showingInfoWindow) {
        _this.setState({
          showingInfoWindow: false,
          activeMarker: null
        });
      }
    });

    _this.state = {
      data: [],
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    }; // this.componentDidMount = this.componentDidMount.bind(this);

    return _this;
  }

  _createClass(Mappy, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var stores = this.state.data;
      console.log(stores);
      var listItems = stores.map(function (store) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(google_maps_react__WEBPACK_IMPORTED_MODULE_5__["Marker"], {
          key: store._id,
          name: store.name,
          position: {
            lat: store.address.lat,
            lng: store.address.long
          },
          icon: {
            url: "/static/marker_custom.svg",
            anchor: new google.maps.Point(32, 32),
            scaledSize: new google.maps.Size(64, 64)
          },
          store: store,
          onClick: _this2.onMarkerClick,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84
          },
          __self: this
        });
      });
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_comps_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "220240143",
        css: ".map.jsx-220240143{width:100%;height:100%;overflow:hidden;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYmFiYWsvU2l0ZXMvZGNhcHAvd2ViL3BhZ2VzL21hcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzR2tCLEFBR29CLFdBQ0MsWUFHSSxnQkFDakIiLCJmaWxlIjoiL1VzZXJzL2piYWJhay9TaXRlcy9kY2FwcC93ZWIvcGFnZXMvbWFwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wcy9IZWFkZXInXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBzL0xheW91dCdcbmltcG9ydCB7IE1hcCwgSW5mb1dpbmRvdywgTWFya2VyLCBHb29nbGVBcGlXcmFwcGVyIH0gZnJvbSAnZ29vZ2xlLW1hcHMtcmVhY3QnO1xuXG5jb25zdCBtYXBTdHlsZSA9IHtcblx0bWFwOiB7XG5cdFx0d2lkdGg6ICcxMDAlJyxcblx0XHRoZWlnaHQ6ICcxMDAlJyxcblx0XHRtYXhIZWlnaHQ6ICc4MHZoJyxcblx0XHQvLyBtYXhIZWlnaHQ6ICc3NDBweCcsXG5cdFx0b3ZlcmZsb3c6ICdoaWRkZW4nXG5cdH0sXG59XG5cblxuZXhwb3J0IGNsYXNzIE1hcHB5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRkYXRhOiBbXSxcblx0XHRcdHNob3dpbmdJbmZvV2luZG93OiBmYWxzZSxcblx0XHRcdGFjdGl2ZU1hcmtlcjoge30sXG5cdFx0XHRzZWxlY3RlZFBsYWNlOiB7fSxcblx0XHR9O1xuXG5cdFx0Ly8gdGhpcy5jb21wb25lbnREaWRNb3VudCA9IHRoaXMuY29tcG9uZW50RGlkTW91bnQuYmluZCh0aGlzKTtcbiAgfVxuXG5cblx0Y29tcG9uZW50V2lsbE1vdW50ID0gKCkgPT4ge1xuXG5cdFx0YXhpb3MuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjUwMDAvc3RvcmVzJylcblx0XHRcdC50aGVuKHJlc3BvbnNlID0+IHtcblxuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRkYXRhOiByZXNwb25zZS5kYXRhXG5cdFx0XHRcdH0pO1xuXG5cdFx0XHR9KVxuXHRcdFx0LmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XG5cdFx0XHR9KTtcblxuXG5cdH1cblxuXHRjb21wb25lbnREaWRNb3VudCA9ICgpID0+IHtcblxuXG5cblxuXHR9XG5cblx0b25NYXJrZXJDbGljayA9IChwcm9wcywgbWFya2VyLCBlKSA9PiB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRzZWxlY3RlZFBsYWNlOiBwcm9wcyxcblx0XHRcdHN0b3JlSW5mbzogcHJvcHMuc3RvcmUsXG5cdFx0XHRwaG9uZU51bWJlcjogcHJvcHMuc3RvcmUucGhvbmVOdW1iZXIgPyBwcm9wcy5zdG9yZS5waG9uZU51bWJlciA6IFwiTm8gUGhvbmUgTnVtYmVyIEZvdW5kXCIsXG5cdFx0XHRkZXNjcmlwdGlvbjogcHJvcHMuc3RvcmUuZGVzY3JpcHRpb24gPyBwcm9wcy5zdG9yZS5kZXNjcmlwdGlvbiA6IFwiTm8gRGVzY3JpcHRpb24gRm91bmRcIixcblx0XHRcdGFjdGl2ZU1hcmtlcjogbWFya2VyLFxuXHRcdFx0c2hvd2luZ0luZm9XaW5kb3c6IHRydWVcblx0XHR9KTtcblx0fVxuXG5cdG9uTWFwQ2xpY2tlZCA9IChwcm9wcykgPT4ge1xuXHRcdGlmICh0aGlzLnN0YXRlLnNob3dpbmdJbmZvV2luZG93KSB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0c2hvd2luZ0luZm9XaW5kb3c6IGZhbHNlLFxuXHRcdFx0XHRhY3RpdmVNYXJrZXI6IG51bGxcblx0XHRcdH0pXG5cdFx0fVxuXHR9O1xuXG5cdHJlbmRlcigpIHtcblxuXHRcdFx0XHR2YXIgc3RvcmVzID0gdGhpcy5zdGF0ZS5kYXRhO1xuXHRcdFx0XHRjb25zb2xlLmxvZyhzdG9yZXMpO1xuXG5cdFx0XHRcdGNvbnN0IGxpc3RJdGVtcyA9IHN0b3Jlcy5tYXAoKHN0b3JlKSA9PlxuXHRcdFx0XHRcdFx0XHRcdDxNYXJrZXJcblx0XHRcdFx0XHRcdFx0XHRcdGtleT17c3RvcmUuX2lkfVxuXHRcdFx0XHRcdFx0XHRcdFx0bmFtZT17c3RvcmUubmFtZX1cblx0XHRcdFx0XHRcdFx0XHRcdHBvc2l0aW9uPXt7bGF0OiBzdG9yZS5hZGRyZXNzLmxhdCwgbG5nOiBzdG9yZS5hZGRyZXNzLmxvbmd9fVxuXHRcdFx0XHRcdFx0XHRcdFx0aWNvbj17e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR1cmw6IFwiL3N0YXRpYy9tYXJrZXJfY3VzdG9tLnN2Z1wiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRhbmNob3I6IG5ldyBnb29nbGUubWFwcy5Qb2ludCgzMiwzMiksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNjYWxlZFNpemU6IG5ldyBnb29nbGUubWFwcy5TaXplKDY0LDY0KVxuXHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRcdHN0b3JlPXtzdG9yZX1cblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e3RoaXMub25NYXJrZXJDbGlja31cblx0XHRcdFx0XHRcdFx0XHQgLz5cblxuXHRcdFx0XHRcdFx0XHQpO1xuXG5cdFx0cmV0dXJuIChcblxuXG5cdFx0XHRcdFx0PExheW91dD5cblx0XHRcdFx0XHRcdDxzdHlsZSBqc3g+e2Bcblx0XHRcdFx0XHRcdFx0Lm1hcCB7XG5cdFx0XHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0XHRcdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdFx0XHRcdFx0XHRcdC8vIG1heC1oZWlnaHQ6NjAlO1xuXHRcdFx0XHRcdFx0XHRcdC8vIGJhY2tncm91bmQtY29sb3I6ICMwMDI3NjY7XG5cdFx0XHRcdFx0XHRcdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0XHRcdFx0XHRcdFx0fVxuXG5cblx0XHRcdFx0XHRcdGB9PC9zdHlsZT5cblxuXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1hcFwiPlxuXG5cdFx0XHRcdFx0XHRcdDxNYXBcblx0XHRcdFx0XHRcdFx0XHRnb29nbGU9e3RoaXMucHJvcHMuZ29vZ2xlfVxuXHRcdFx0XHRcdFx0XHRcdHN0eWxlPXttYXBTdHlsZS5tYXB9XG5cdFx0XHRcdFx0XHRcdFx0Ly8gb3B0aW9ucz17bWFwT3B0aW9uc31cblx0XHRcdFx0XHRcdFx0XHRpbml0aWFsQ2VudGVyPXt7XG5cdFx0XHRcdFx0XHRcdFx0XHRsYXQ6IDI1LjI2NzM2OSxcblx0XHRcdFx0XHRcdFx0XHRcdGxuZzogNTEuNTI5NDUxXG5cdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHR6b29tPXsxNH1cblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdHtsaXN0SXRlbXN9XG5cblx0XHRcdFx0XHRcdFx0XHQ8TWFya2VyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aXRsZT17J1RoZSBtYXJrZXJgcyB0aXRsZSB3aWxsIGFwcGVhciBhcyBhIHRvb2x0aXAuJ31cblx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9eydTT01BJ31cblx0XHRcdFx0XHRcdFx0XHRcdHBvc2l0aW9uPXt7bGF0OiAyNS4yNjI4MTEsIGxuZzogNTEuNTMyMDk0fX1cblx0XHRcdFx0XHRcdFx0XHRcdGljb249e3tcblx0XHRcdFx0XHRcdFx0ICAgICAgdXJsOiBcIi9zdGF0aWMvbWFya2VyX2N1c3RvbS5zdmdcIixcblx0XHRcdFx0XHRcdFx0ICAgICAgYW5jaG9yOiBuZXcgZ29vZ2xlLm1hcHMuUG9pbnQoMzIsMzIpLFxuXHRcdFx0XHRcdFx0XHQgICAgICBzY2FsZWRTaXplOiBuZXcgZ29vZ2xlLm1hcHMuU2l6ZSg2NCw2NClcblx0XHRcdFx0XHRcdFx0ICAgIH19XG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBvbkNsaWNrPXt0aGlzLm9uTWFya2VyQ2xpY2t9XG5cdFx0XHRcdFx0XHRcdFx0IC8+XG5cblx0XHRcdFx0XHRcdFx0XHQ8TWFya2VyXG5cdFx0XHRcdFx0XHRcdCAgICBuYW1lPXsnRG9sb3JlcyBwYXJrJ31cblx0XHRcdFx0XHRcdFx0ICAgIHBvc2l0aW9uPXt7bGF0OiAyNS4yNzAzOTgsIGxuZzogNTEuNTI0NzIzfX1cblx0XHRcdFx0XHRcdFx0XHRcdGljb249e3tcblx0XHRcdFx0XHRcdFx0XHRcdFx0dXJsOiBcIi9zdGF0aWMvbWFya2VyX2N1c3RvbS5zdmdcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0YW5jaG9yOiBuZXcgZ29vZ2xlLm1hcHMuUG9pbnQoMzIsMzIpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzY2FsZWRTaXplOiBuZXcgZ29vZ2xlLm1hcHMuU2l6ZSg2NCw2NClcblx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBvbkNsaWNrPXt0aGlzLm9uTWFya2VyQ2xpY2t9XG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0ICA8TWFya2VyIC8+XG5cblx0XHRcdFx0XHRcdFx0XHQ8TWFya2VyXG5cdFx0XHRcdFx0XHRcdCAgICBuYW1lPXsnRG9sb3JlcyBwYXJrJ31cblx0XHRcdFx0XHRcdFx0ICAgIHBvc2l0aW9uPXt7bGF0OiAyNS4zMDI3ODYsIGxuZzogNTEuNTEyMjEyfX1cblx0XHRcdFx0XHRcdFx0XHRcdGljb249e3tcblx0XHRcdFx0XHRcdFx0XHRcdFx0dXJsOiBcIi9zdGF0aWMvbWFya2VyX2N1c3RvbS5zdmdcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0YW5jaG9yOiBuZXcgZ29vZ2xlLm1hcHMuUG9pbnQoMzIsMzIpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzY2FsZWRTaXplOiBuZXcgZ29vZ2xlLm1hcHMuU2l6ZSg2NCw2NClcblx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBvbkNsaWNrPXt0aGlzLm9uTWFya2VyQ2xpY2t9XG5cdFx0XHRcdFx0XHRcdFx0IC8+XG5cdFx0XHRcdFx0XHRcdCAgPE1hcmtlciAvPlxuXG5cdFx0XHRcdFx0XHRcdFx0PE1hcmtlclxuXHRcdFx0XHRcdFx0XHQgICAgbmFtZT17J0RvbG9yZXMgcGFyayd9XG5cdFx0XHRcdFx0XHRcdCAgICBwb3NpdGlvbj17e2xhdDogMjUuMjA4OTQ1LCBsbmc6IDUxLjQ0NDU1MX19XG5cdFx0XHRcdFx0XHRcdFx0XHRpY29uPXt7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHVybDogXCIvc3RhdGljL21hcmtlcl9jdXN0b20uc3ZnXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFuY2hvcjogbmV3IGdvb2dsZS5tYXBzLlBvaW50KDMyLDMyKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0c2NhbGVkU2l6ZTogbmV3IGdvb2dsZS5tYXBzLlNpemUoNjQsNjQpXG5cdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gb25DbGljaz17dGhpcy5vbk1hcmtlckNsaWNrfVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdCAgPE1hcmtlciAvPlxuXG5cdFx0XHRcdFx0XHRcdFx0PEluZm9XaW5kb3dcblx0XHRcdFx0ICAgICAgICAgIG1hcmtlcj17dGhpcy5zdGF0ZS5hY3RpdmVNYXJrZXJ9XG5cdFx0XHRcdCAgICAgICAgICB2aXNpYmxlPXt0aGlzLnN0YXRlLnNob3dpbmdJbmZvV2luZG93fT5cblx0XHRcdFx0ICAgICAgICAgICAgPGRpdj5cblx0XHRcdFx0ICAgICAgICAgICAgICA8aDE+e3RoaXMuc3RhdGUuc2VsZWN0ZWRQbGFjZS5uYW1lfTwvaDE+XG5cdFx0XHRcdCAgICAgICAgICAgICAgPGgzPnt0aGlzLnN0YXRlLnBob25lTnVtYmVyfTwvaDM+XG5cdFx0XHRcdCAgICAgICAgICAgICAgPHA+e3RoaXMuc3RhdGUuZGVzY3JpcHRpb259PC9wPlxuXHRcdFx0XHQgICAgICAgICAgICA8L2Rpdj5cblx0XHRcdFx0ICAgICAgICA8L0luZm9XaW5kb3c+XG5cblx0XHRcdFx0XHRcdFx0PC9NYXA+XG5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0PC9MYXlvdXQ+XG5cblxuXG5cblxuXHRcdCk7XG5cblxuXHR9XG5cbn1cblxuXG5jb25zdCBMb2FkaW5nQ29udGFpbmVyID0gKHByb3BzKSA9PiAoXG48ZGl2PlxuXG5cdDxzdHlsZSBqc3g+e2BcblxuXHRcdC5sb2FkaW5nIHtcblx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdFx0cGFkZGluZy10b3A6IDMwJTtcblx0XHRcdHBhZGRpbmctbGVmdDoyNXB4O1xuXHRcdFx0Zm9udC1zaXplOiAyMnB4O1xuXHRcdFx0XHRcdC8vIHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG5cdFx0fVxuXG5cdFx0QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcblx0XHRcdC5sb2FkaW5nIHtcblx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHR0b3A6IDA7XG5cdFx0XHRcdGxlZnQ6IDA7XG5cblx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdGhlaWdodDogMTAwJTtcblx0XHRcdFx0Zm9udC1zaXplOiAyNnB4O1xuXHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHRcdHBhZGRpbmctdG9wOiA0NHZoO1xuXHRcdFx0XHRjb2xvcjogYmxhY2s7XG5cdFx0XHRcdGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG5cdFx0XHRcdHRyYW5zaXRpb246IGFsbCAxcyBlYXNlLW91dDtcblx0XHRcdH1cblxuXHRcdH1cblxuXG5cblxuXHRgfTwvc3R5bGU+XG5cblx0PGRpdiBjbGFzc05hbWU9XCJsb2FkaW5nXCI+TG9hZGluZyBSZXN1bHRzLi4uPC9kaXY+XG48L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgR29vZ2xlQXBpV3JhcHBlcih7XG4gIGFwaUtleTogJ0FJemFTeUFUeF9kaEx2R0NLNlRxTDBzOG9CUTdyaTBsSWk5R1BTWScsXG5cdExvYWRpbmdDb250YWluZXI6IExvYWRpbmdDb250YWluZXJcbn0pKE1hcHB5KVxuIl19 */\n/*@ sourceURL=/Users/jbabak/Sites/dcapp/web/pages/map.js */",
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-220240143" + " " + "map",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(google_maps_react__WEBPACK_IMPORTED_MODULE_5__["Map"], {
        google: this.props.google,
        style: mapStyle.map // options={mapOptions}
        ,
        initialCenter: {
          lat: 25.267369,
          lng: 51.529451
        },
        zoom: 14,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, listItems, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(google_maps_react__WEBPACK_IMPORTED_MODULE_5__["Marker"], {
        title: 'The marker`s title will appear as a tooltip.',
        name: 'SOMA',
        position: {
          lat: 25.262811,
          lng: 51.532094
        },
        icon: {
          url: "/static/marker_custom.svg",
          anchor: new google.maps.Point(32, 32),
          scaledSize: new google.maps.Size(64, 64)
        } // onClick={this.onMarkerClick}
        ,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(google_maps_react__WEBPACK_IMPORTED_MODULE_5__["Marker"], {
        name: 'Dolores park',
        position: {
          lat: 25.270398,
          lng: 51.524723
        },
        icon: {
          url: "/static/marker_custom.svg",
          anchor: new google.maps.Point(32, 32),
          scaledSize: new google.maps.Size(64, 64)
        } // onClick={this.onMarkerClick}
        ,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(google_maps_react__WEBPACK_IMPORTED_MODULE_5__["Marker"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(google_maps_react__WEBPACK_IMPORTED_MODULE_5__["Marker"], {
        name: 'Dolores park',
        position: {
          lat: 25.302786,
          lng: 51.512212
        },
        icon: {
          url: "/static/marker_custom.svg",
          anchor: new google.maps.Point(32, 32),
          scaledSize: new google.maps.Size(64, 64)
        } // onClick={this.onMarkerClick}
        ,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(google_maps_react__WEBPACK_IMPORTED_MODULE_5__["Marker"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(google_maps_react__WEBPACK_IMPORTED_MODULE_5__["Marker"], {
        name: 'Dolores park',
        position: {
          lat: 25.208945,
          lng: 51.444551
        },
        icon: {
          url: "/static/marker_custom.svg",
          anchor: new google.maps.Point(32, 32),
          scaledSize: new google.maps.Size(64, 64)
        } // onClick={this.onMarkerClick}
        ,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(google_maps_react__WEBPACK_IMPORTED_MODULE_5__["Marker"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(google_maps_react__WEBPACK_IMPORTED_MODULE_5__["InfoWindow"], {
        marker: this.state.activeMarker,
        visible: this.state.showingInfoWindow,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-220240143",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: "jsx-220240143",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        },
        __self: this
      }, this.state.selectedPlace.name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
        className: "jsx-220240143",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        },
        __self: this
      }, this.state.phoneNumber), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-220240143",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        },
        __self: this
      }, this.state.description))))));
    }
  }]);

  return Mappy;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

var LoadingContainer = function LoadingContainer(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3677574924",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3677574924",
    css: ".loading.jsx-3677574924{width:100%;height:100%;padding-top:30%;padding-left:25px;font-size:22px;font-family:'Montserrat',sans-serif;}@media screen and (min-width:768px){.loading.jsx-3677574924{position:absolute;top:0;left:0;width:100%;height:100%;font-size:26px;text-align:center;padding-top:44vh;color:black;font-family:'Montserrat',sans-serif;-webkit-transition:all 1s ease-out;transition:all 1s ease-out;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYmFiYWsvU2l0ZXMvZGNhcHAvd2ViL3BhZ2VzL21hcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnTmEsQUFJZSxBQVdRLFdBVlAsT0FXTCxLQVZTLENBV1IsT0FFSSxRQVpLLEdBYUosWUFDRyxHQWJELFlBY0ksR0Faa0IsZUFhbkIsaUJBQ0wsSUFiZCxRQWN1QyxvQ0FDViw4REFDNUIiLCJmaWxlIjoiL1VzZXJzL2piYWJhay9TaXRlcy9kY2FwcC93ZWIvcGFnZXMvbWFwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wcy9IZWFkZXInXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBzL0xheW91dCdcbmltcG9ydCB7IE1hcCwgSW5mb1dpbmRvdywgTWFya2VyLCBHb29nbGVBcGlXcmFwcGVyIH0gZnJvbSAnZ29vZ2xlLW1hcHMtcmVhY3QnO1xuXG5jb25zdCBtYXBTdHlsZSA9IHtcblx0bWFwOiB7XG5cdFx0d2lkdGg6ICcxMDAlJyxcblx0XHRoZWlnaHQ6ICcxMDAlJyxcblx0XHRtYXhIZWlnaHQ6ICc4MHZoJyxcblx0XHQvLyBtYXhIZWlnaHQ6ICc3NDBweCcsXG5cdFx0b3ZlcmZsb3c6ICdoaWRkZW4nXG5cdH0sXG59XG5cblxuZXhwb3J0IGNsYXNzIE1hcHB5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRkYXRhOiBbXSxcblx0XHRcdHNob3dpbmdJbmZvV2luZG93OiBmYWxzZSxcblx0XHRcdGFjdGl2ZU1hcmtlcjoge30sXG5cdFx0XHRzZWxlY3RlZFBsYWNlOiB7fSxcblx0XHR9O1xuXG5cdFx0Ly8gdGhpcy5jb21wb25lbnREaWRNb3VudCA9IHRoaXMuY29tcG9uZW50RGlkTW91bnQuYmluZCh0aGlzKTtcbiAgfVxuXG5cblx0Y29tcG9uZW50V2lsbE1vdW50ID0gKCkgPT4ge1xuXG5cdFx0YXhpb3MuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjUwMDAvc3RvcmVzJylcblx0XHRcdC50aGVuKHJlc3BvbnNlID0+IHtcblxuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRkYXRhOiByZXNwb25zZS5kYXRhXG5cdFx0XHRcdH0pO1xuXG5cdFx0XHR9KVxuXHRcdFx0LmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XG5cdFx0XHR9KTtcblxuXG5cdH1cblxuXHRjb21wb25lbnREaWRNb3VudCA9ICgpID0+IHtcblxuXG5cblxuXHR9XG5cblx0b25NYXJrZXJDbGljayA9IChwcm9wcywgbWFya2VyLCBlKSA9PiB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRzZWxlY3RlZFBsYWNlOiBwcm9wcyxcblx0XHRcdHN0b3JlSW5mbzogcHJvcHMuc3RvcmUsXG5cdFx0XHRwaG9uZU51bWJlcjogcHJvcHMuc3RvcmUucGhvbmVOdW1iZXIgPyBwcm9wcy5zdG9yZS5waG9uZU51bWJlciA6IFwiTm8gUGhvbmUgTnVtYmVyIEZvdW5kXCIsXG5cdFx0XHRkZXNjcmlwdGlvbjogcHJvcHMuc3RvcmUuZGVzY3JpcHRpb24gPyBwcm9wcy5zdG9yZS5kZXNjcmlwdGlvbiA6IFwiTm8gRGVzY3JpcHRpb24gRm91bmRcIixcblx0XHRcdGFjdGl2ZU1hcmtlcjogbWFya2VyLFxuXHRcdFx0c2hvd2luZ0luZm9XaW5kb3c6IHRydWVcblx0XHR9KTtcblx0fVxuXG5cdG9uTWFwQ2xpY2tlZCA9IChwcm9wcykgPT4ge1xuXHRcdGlmICh0aGlzLnN0YXRlLnNob3dpbmdJbmZvV2luZG93KSB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0c2hvd2luZ0luZm9XaW5kb3c6IGZhbHNlLFxuXHRcdFx0XHRhY3RpdmVNYXJrZXI6IG51bGxcblx0XHRcdH0pXG5cdFx0fVxuXHR9O1xuXG5cdHJlbmRlcigpIHtcblxuXHRcdFx0XHR2YXIgc3RvcmVzID0gdGhpcy5zdGF0ZS5kYXRhO1xuXHRcdFx0XHRjb25zb2xlLmxvZyhzdG9yZXMpO1xuXG5cdFx0XHRcdGNvbnN0IGxpc3RJdGVtcyA9IHN0b3Jlcy5tYXAoKHN0b3JlKSA9PlxuXHRcdFx0XHRcdFx0XHRcdDxNYXJrZXJcblx0XHRcdFx0XHRcdFx0XHRcdGtleT17c3RvcmUuX2lkfVxuXHRcdFx0XHRcdFx0XHRcdFx0bmFtZT17c3RvcmUubmFtZX1cblx0XHRcdFx0XHRcdFx0XHRcdHBvc2l0aW9uPXt7bGF0OiBzdG9yZS5hZGRyZXNzLmxhdCwgbG5nOiBzdG9yZS5hZGRyZXNzLmxvbmd9fVxuXHRcdFx0XHRcdFx0XHRcdFx0aWNvbj17e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR1cmw6IFwiL3N0YXRpYy9tYXJrZXJfY3VzdG9tLnN2Z1wiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRhbmNob3I6IG5ldyBnb29nbGUubWFwcy5Qb2ludCgzMiwzMiksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNjYWxlZFNpemU6IG5ldyBnb29nbGUubWFwcy5TaXplKDY0LDY0KVxuXHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRcdHN0b3JlPXtzdG9yZX1cblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e3RoaXMub25NYXJrZXJDbGlja31cblx0XHRcdFx0XHRcdFx0XHQgLz5cblxuXHRcdFx0XHRcdFx0XHQpO1xuXG5cdFx0cmV0dXJuIChcblxuXG5cdFx0XHRcdFx0PExheW91dD5cblx0XHRcdFx0XHRcdDxzdHlsZSBqc3g+e2Bcblx0XHRcdFx0XHRcdFx0Lm1hcCB7XG5cdFx0XHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0XHRcdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdFx0XHRcdFx0XHRcdC8vIG1heC1oZWlnaHQ6NjAlO1xuXHRcdFx0XHRcdFx0XHRcdC8vIGJhY2tncm91bmQtY29sb3I6ICMwMDI3NjY7XG5cdFx0XHRcdFx0XHRcdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0XHRcdFx0XHRcdFx0fVxuXG5cblx0XHRcdFx0XHRcdGB9PC9zdHlsZT5cblxuXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1hcFwiPlxuXG5cdFx0XHRcdFx0XHRcdDxNYXBcblx0XHRcdFx0XHRcdFx0XHRnb29nbGU9e3RoaXMucHJvcHMuZ29vZ2xlfVxuXHRcdFx0XHRcdFx0XHRcdHN0eWxlPXttYXBTdHlsZS5tYXB9XG5cdFx0XHRcdFx0XHRcdFx0Ly8gb3B0aW9ucz17bWFwT3B0aW9uc31cblx0XHRcdFx0XHRcdFx0XHRpbml0aWFsQ2VudGVyPXt7XG5cdFx0XHRcdFx0XHRcdFx0XHRsYXQ6IDI1LjI2NzM2OSxcblx0XHRcdFx0XHRcdFx0XHRcdGxuZzogNTEuNTI5NDUxXG5cdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHR6b29tPXsxNH1cblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdHtsaXN0SXRlbXN9XG5cblx0XHRcdFx0XHRcdFx0XHQ8TWFya2VyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aXRsZT17J1RoZSBtYXJrZXJgcyB0aXRsZSB3aWxsIGFwcGVhciBhcyBhIHRvb2x0aXAuJ31cblx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9eydTT01BJ31cblx0XHRcdFx0XHRcdFx0XHRcdHBvc2l0aW9uPXt7bGF0OiAyNS4yNjI4MTEsIGxuZzogNTEuNTMyMDk0fX1cblx0XHRcdFx0XHRcdFx0XHRcdGljb249e3tcblx0XHRcdFx0XHRcdFx0ICAgICAgdXJsOiBcIi9zdGF0aWMvbWFya2VyX2N1c3RvbS5zdmdcIixcblx0XHRcdFx0XHRcdFx0ICAgICAgYW5jaG9yOiBuZXcgZ29vZ2xlLm1hcHMuUG9pbnQoMzIsMzIpLFxuXHRcdFx0XHRcdFx0XHQgICAgICBzY2FsZWRTaXplOiBuZXcgZ29vZ2xlLm1hcHMuU2l6ZSg2NCw2NClcblx0XHRcdFx0XHRcdFx0ICAgIH19XG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBvbkNsaWNrPXt0aGlzLm9uTWFya2VyQ2xpY2t9XG5cdFx0XHRcdFx0XHRcdFx0IC8+XG5cblx0XHRcdFx0XHRcdFx0XHQ8TWFya2VyXG5cdFx0XHRcdFx0XHRcdCAgICBuYW1lPXsnRG9sb3JlcyBwYXJrJ31cblx0XHRcdFx0XHRcdFx0ICAgIHBvc2l0aW9uPXt7bGF0OiAyNS4yNzAzOTgsIGxuZzogNTEuNTI0NzIzfX1cblx0XHRcdFx0XHRcdFx0XHRcdGljb249e3tcblx0XHRcdFx0XHRcdFx0XHRcdFx0dXJsOiBcIi9zdGF0aWMvbWFya2VyX2N1c3RvbS5zdmdcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0YW5jaG9yOiBuZXcgZ29vZ2xlLm1hcHMuUG9pbnQoMzIsMzIpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzY2FsZWRTaXplOiBuZXcgZ29vZ2xlLm1hcHMuU2l6ZSg2NCw2NClcblx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBvbkNsaWNrPXt0aGlzLm9uTWFya2VyQ2xpY2t9XG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0ICA8TWFya2VyIC8+XG5cblx0XHRcdFx0XHRcdFx0XHQ8TWFya2VyXG5cdFx0XHRcdFx0XHRcdCAgICBuYW1lPXsnRG9sb3JlcyBwYXJrJ31cblx0XHRcdFx0XHRcdFx0ICAgIHBvc2l0aW9uPXt7bGF0OiAyNS4zMDI3ODYsIGxuZzogNTEuNTEyMjEyfX1cblx0XHRcdFx0XHRcdFx0XHRcdGljb249e3tcblx0XHRcdFx0XHRcdFx0XHRcdFx0dXJsOiBcIi9zdGF0aWMvbWFya2VyX2N1c3RvbS5zdmdcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0YW5jaG9yOiBuZXcgZ29vZ2xlLm1hcHMuUG9pbnQoMzIsMzIpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzY2FsZWRTaXplOiBuZXcgZ29vZ2xlLm1hcHMuU2l6ZSg2NCw2NClcblx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBvbkNsaWNrPXt0aGlzLm9uTWFya2VyQ2xpY2t9XG5cdFx0XHRcdFx0XHRcdFx0IC8+XG5cdFx0XHRcdFx0XHRcdCAgPE1hcmtlciAvPlxuXG5cdFx0XHRcdFx0XHRcdFx0PE1hcmtlclxuXHRcdFx0XHRcdFx0XHQgICAgbmFtZT17J0RvbG9yZXMgcGFyayd9XG5cdFx0XHRcdFx0XHRcdCAgICBwb3NpdGlvbj17e2xhdDogMjUuMjA4OTQ1LCBsbmc6IDUxLjQ0NDU1MX19XG5cdFx0XHRcdFx0XHRcdFx0XHRpY29uPXt7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHVybDogXCIvc3RhdGljL21hcmtlcl9jdXN0b20uc3ZnXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFuY2hvcjogbmV3IGdvb2dsZS5tYXBzLlBvaW50KDMyLDMyKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0c2NhbGVkU2l6ZTogbmV3IGdvb2dsZS5tYXBzLlNpemUoNjQsNjQpXG5cdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gb25DbGljaz17dGhpcy5vbk1hcmtlckNsaWNrfVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdCAgPE1hcmtlciAvPlxuXG5cdFx0XHRcdFx0XHRcdFx0PEluZm9XaW5kb3dcblx0XHRcdFx0ICAgICAgICAgIG1hcmtlcj17dGhpcy5zdGF0ZS5hY3RpdmVNYXJrZXJ9XG5cdFx0XHRcdCAgICAgICAgICB2aXNpYmxlPXt0aGlzLnN0YXRlLnNob3dpbmdJbmZvV2luZG93fT5cblx0XHRcdFx0ICAgICAgICAgICAgPGRpdj5cblx0XHRcdFx0ICAgICAgICAgICAgICA8aDE+e3RoaXMuc3RhdGUuc2VsZWN0ZWRQbGFjZS5uYW1lfTwvaDE+XG5cdFx0XHRcdCAgICAgICAgICAgICAgPGgzPnt0aGlzLnN0YXRlLnBob25lTnVtYmVyfTwvaDM+XG5cdFx0XHRcdCAgICAgICAgICAgICAgPHA+e3RoaXMuc3RhdGUuZGVzY3JpcHRpb259PC9wPlxuXHRcdFx0XHQgICAgICAgICAgICA8L2Rpdj5cblx0XHRcdFx0ICAgICAgICA8L0luZm9XaW5kb3c+XG5cblx0XHRcdFx0XHRcdFx0PC9NYXA+XG5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0PC9MYXlvdXQ+XG5cblxuXG5cblxuXHRcdCk7XG5cblxuXHR9XG5cbn1cblxuXG5jb25zdCBMb2FkaW5nQ29udGFpbmVyID0gKHByb3BzKSA9PiAoXG48ZGl2PlxuXG5cdDxzdHlsZSBqc3g+e2BcblxuXHRcdC5sb2FkaW5nIHtcblx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdFx0cGFkZGluZy10b3A6IDMwJTtcblx0XHRcdHBhZGRpbmctbGVmdDoyNXB4O1xuXHRcdFx0Zm9udC1zaXplOiAyMnB4O1xuXHRcdFx0XHRcdC8vIHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG5cdFx0fVxuXG5cdFx0QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcblx0XHRcdC5sb2FkaW5nIHtcblx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHR0b3A6IDA7XG5cdFx0XHRcdGxlZnQ6IDA7XG5cblx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdGhlaWdodDogMTAwJTtcblx0XHRcdFx0Zm9udC1zaXplOiAyNnB4O1xuXHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHRcdHBhZGRpbmctdG9wOiA0NHZoO1xuXHRcdFx0XHRjb2xvcjogYmxhY2s7XG5cdFx0XHRcdGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG5cdFx0XHRcdHRyYW5zaXRpb246IGFsbCAxcyBlYXNlLW91dDtcblx0XHRcdH1cblxuXHRcdH1cblxuXG5cblxuXHRgfTwvc3R5bGU+XG5cblx0PGRpdiBjbGFzc05hbWU9XCJsb2FkaW5nXCI+TG9hZGluZyBSZXN1bHRzLi4uPC9kaXY+XG48L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgR29vZ2xlQXBpV3JhcHBlcih7XG4gIGFwaUtleTogJ0FJemFTeUFUeF9kaEx2R0NLNlRxTDBzOG9CUTdyaTBsSWk5R1BTWScsXG5cdExvYWRpbmdDb250YWluZXI6IExvYWRpbmdDb250YWluZXJcbn0pKE1hcHB5KVxuIl19 */\n/*@ sourceURL=/Users/jbabak/Sites/dcapp/web/pages/map.js */",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3677574924" + " " + "loading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244
    },
    __self: this
  }, "Loading Results..."));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(google_maps_react__WEBPACK_IMPORTED_MODULE_5__["GoogleApiWrapper"])({
  apiKey: 'AIzaSyATx_dhLvGCK6TqL0s8oBQ7ri0lIi9GPSY',
  LoadingContainer: LoadingContainer
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
//# sourceMappingURL=map.js.e2ddd624f94eca118321.hot-update.js.map