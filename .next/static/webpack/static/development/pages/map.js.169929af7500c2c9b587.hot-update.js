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
    maxHeight: 'calc(100% - 165px)',
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
      console.log(props.store);

      _this.setState({
        selectedPlace: props,
        storeInfo: props.store,
        phoneNumber: props.store.phoneNumber ? props.store.phoneNumber : "No Phone Number Found",
        description: props.store.description ? props.store.description : "No Description Found",
        address: {
          address: props.store.address.address,
          address2: props.store.address.address2
        },
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
            lineNumber: 89
          },
          __self: this
        });
      });
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_comps_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
        overflow: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "3157543875",
        css: ".map.jsx-3157543875{width:100%;height:100%;overflow:hidden;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYmFiYWsvU2l0ZXMvZGNhcHAvd2ViL3BhZ2VzL21hcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyR2tCLEFBR29CLFdBQ0MsWUFJSSxnQkFFakIiLCJmaWxlIjoiL1VzZXJzL2piYWJhay9TaXRlcy9kY2FwcC93ZWIvcGFnZXMvbWFwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wcy9IZWFkZXInXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBzL0xheW91dCdcbmltcG9ydCB7IE1hcCwgSW5mb1dpbmRvdywgTWFya2VyLCBHb29nbGVBcGlXcmFwcGVyIH0gZnJvbSAnZ29vZ2xlLW1hcHMtcmVhY3QnO1xuXG5jb25zdCBtYXBTdHlsZSA9IHtcblx0bWFwOiB7XG5cdFx0d2lkdGg6ICcxMDAlJyxcblx0XHRoZWlnaHQ6ICcxMDAlJyxcblx0XHRtYXhIZWlnaHQ6ICdjYWxjKDEwMCUgLSAxNjVweCknLFxuXHRcdC8vIG1heEhlaWdodDogJzc0MHB4Jyxcblx0XHRvdmVyZmxvdzogJ2hpZGRlbidcblx0fSxcbn1cblxuXG5leHBvcnQgY2xhc3MgTWFwcHkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdGRhdGE6IFtdLFxuXHRcdFx0c2hvd2luZ0luZm9XaW5kb3c6IGZhbHNlLFxuXHRcdFx0YWN0aXZlTWFya2VyOiB7fSxcblx0XHRcdHNlbGVjdGVkUGxhY2U6IHt9LFxuXHRcdH07XG5cblx0XHQvLyB0aGlzLmNvbXBvbmVudERpZE1vdW50ID0gdGhpcy5jb21wb25lbnREaWRNb3VudC5iaW5kKHRoaXMpO1xuICB9XG5cblxuXHRjb21wb25lbnRXaWxsTW91bnQgPSAoKSA9PiB7XG5cblx0XHRheGlvcy5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9zdG9yZXMnKVxuXHRcdFx0LnRoZW4ocmVzcG9uc2UgPT4ge1xuXG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdGRhdGE6IHJlc3BvbnNlLmRhdGFcblx0XHRcdFx0fSk7XG5cblx0XHRcdH0pXG5cdFx0XHQuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcblx0XHRcdH0pO1xuXG5cblx0fVxuXG5cdGNvbXBvbmVudERpZE1vdW50ID0gKCkgPT4ge1xuXG5cblxuXG5cdH1cblxuXHRvbk1hcmtlckNsaWNrID0gKHByb3BzLCBtYXJrZXIsIGUpID0+IHtcblx0XHRjb25zb2xlLmxvZyhwcm9wcy5zdG9yZSk7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRzZWxlY3RlZFBsYWNlOiBwcm9wcyxcblx0XHRcdHN0b3JlSW5mbzogcHJvcHMuc3RvcmUsXG5cdFx0XHRwaG9uZU51bWJlcjogcHJvcHMuc3RvcmUucGhvbmVOdW1iZXIgPyBwcm9wcy5zdG9yZS5waG9uZU51bWJlciA6IFwiTm8gUGhvbmUgTnVtYmVyIEZvdW5kXCIsXG5cdFx0XHRkZXNjcmlwdGlvbjogcHJvcHMuc3RvcmUuZGVzY3JpcHRpb24gPyBwcm9wcy5zdG9yZS5kZXNjcmlwdGlvbiA6IFwiTm8gRGVzY3JpcHRpb24gRm91bmRcIixcblx0XHRcdGFkZHJlc3M6IHtcblx0XHRcdFx0YWRkcmVzczogcHJvcHMuc3RvcmUuYWRkcmVzcy5hZGRyZXNzLFxuXHRcdFx0XHRhZGRyZXNzMjogcHJvcHMuc3RvcmUuYWRkcmVzcy5hZGRyZXNzMixcblx0XHRcdH0sXG5cdFx0XHRhY3RpdmVNYXJrZXI6IG1hcmtlcixcblx0XHRcdHNob3dpbmdJbmZvV2luZG93OiB0cnVlXG5cdFx0fSk7XG5cdH1cblxuXHRvbk1hcENsaWNrZWQgPSAocHJvcHMpID0+IHtcblx0XHRpZiAodGhpcy5zdGF0ZS5zaG93aW5nSW5mb1dpbmRvdykge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdHNob3dpbmdJbmZvV2luZG93OiBmYWxzZSxcblx0XHRcdFx0YWN0aXZlTWFya2VyOiBudWxsXG5cdFx0XHR9KVxuXHRcdH1cblx0fTtcblxuXHRyZW5kZXIoKSB7XG5cblx0XHRcdFx0dmFyIHN0b3JlcyA9IHRoaXMuc3RhdGUuZGF0YTtcblx0XHRcdFx0Y29uc29sZS5sb2coc3RvcmVzKTtcblxuXHRcdFx0XHRjb25zdCBsaXN0SXRlbXMgPSBzdG9yZXMubWFwKChzdG9yZSkgPT5cblx0XHRcdFx0XHRcdFx0XHQ8TWFya2VyXG5cdFx0XHRcdFx0XHRcdFx0XHRrZXk9e3N0b3JlLl9pZH1cblx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9e3N0b3JlLm5hbWV9XG5cdFx0XHRcdFx0XHRcdFx0XHRwb3NpdGlvbj17e2xhdDogc3RvcmUuYWRkcmVzcy5sYXQsIGxuZzogc3RvcmUuYWRkcmVzcy5sb25nfX1cblx0XHRcdFx0XHRcdFx0XHRcdGljb249e3tcblx0XHRcdFx0XHRcdFx0XHRcdFx0dXJsOiBcIi9zdGF0aWMvbWFya2VyX2N1c3RvbS5zdmdcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0YW5jaG9yOiBuZXcgZ29vZ2xlLm1hcHMuUG9pbnQoMzIsMzIpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzY2FsZWRTaXplOiBuZXcgZ29vZ2xlLm1hcHMuU2l6ZSg2NCw2NClcblx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0XHRzdG9yZT17c3RvcmV9XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXt0aGlzLm9uTWFya2VyQ2xpY2t9XG5cdFx0XHRcdFx0XHRcdFx0IC8+XG5cblx0XHRcdFx0XHRcdFx0KTtcblxuXHRcdHJldHVybiAoXG5cblxuXHRcdFx0XHRcdDxMYXlvdXQgb3ZlcmZsb3c9e3RydWV9PlxuXHRcdFx0XHRcdFx0PHN0eWxlIGpzeD57YFxuXHRcdFx0XHRcdFx0XHQubWFwIHtcblx0XHRcdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0XHRcdFx0XHRcdFx0Ly8gbWF4LWhlaWdodDo2MCU7XG5cdFx0XHRcdFx0XHRcdFx0Ly8gbWF4LWhlaWdodDogNTgwcHg7XG5cdFx0XHRcdFx0XHRcdFx0Ly8gYmFja2dyb3VuZC1jb2xvcjogIzAwMjc2Njtcblx0XHRcdFx0XHRcdFx0XHRvdmVyZmxvdzogaGlkZGVuO1xuXG5cdFx0XHRcdFx0XHRcdH1cblxuXG5cdFx0XHRcdFx0XHRgfTwvc3R5bGU+XG5cblxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtYXBcIj5cblxuXHRcdFx0XHRcdFx0XHQ8TWFwXG5cdFx0XHRcdFx0XHRcdFx0Z29vZ2xlPXt0aGlzLnByb3BzLmdvb2dsZX1cblx0XHRcdFx0XHRcdFx0XHRzdHlsZT17bWFwU3R5bGUubWFwfVxuXHRcdFx0XHRcdFx0XHRcdC8vIG9wdGlvbnM9e21hcE9wdGlvbnN9XG5cdFx0XHRcdFx0XHRcdFx0aW5pdGlhbENlbnRlcj17e1xuXHRcdFx0XHRcdFx0XHRcdFx0bGF0OiAyNS4yNjczNjksXG5cdFx0XHRcdFx0XHRcdFx0XHRsbmc6IDUxLjUyOTQ1MVxuXHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0em9vbT17MTR9XG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHR7bGlzdEl0ZW1zfVxuXG5cdFx0XHRcdFx0XHRcdFx0ey8qIDxNYXJrZXJcblx0XHRcdFx0XHRcdFx0XHRcdHRpdGxlPXsnVGhlIG1hcmtlcmBzIHRpdGxlIHdpbGwgYXBwZWFyIGFzIGEgdG9vbHRpcC4nfVxuXHRcdFx0XHRcdFx0XHRcdFx0bmFtZT17J1NPTUEnfVxuXHRcdFx0XHRcdFx0XHRcdFx0cG9zaXRpb249e3tsYXQ6IDI1LjI2MjgxMSwgbG5nOiA1MS41MzIwOTR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0aWNvbj17e1xuXHRcdFx0XHRcdFx0XHQgICAgICB1cmw6IFwiL3N0YXRpYy9tYXJrZXJfY3VzdG9tLnN2Z1wiLFxuXHRcdFx0XHRcdFx0XHQgICAgICBhbmNob3I6IG5ldyBnb29nbGUubWFwcy5Qb2ludCgzMiwzMiksXG5cdFx0XHRcdFx0XHRcdCAgICAgIHNjYWxlZFNpemU6IG5ldyBnb29nbGUubWFwcy5TaXplKDY0LDY0KVxuXHRcdFx0XHRcdFx0XHQgICAgfX1cblx0XHRcdFx0XHRcdFx0XHRcdC8vIG9uQ2xpY2s9e3RoaXMub25NYXJrZXJDbGlja31cblx0XHRcdFx0XHRcdFx0XHQgLz4gKi99XG5cblx0XHRcdFx0XHRcdFx0XHQ8SW5mb1dpbmRvd1xuXHRcdFx0XHQgICAgICAgICAgbWFya2VyPXt0aGlzLnN0YXRlLmFjdGl2ZU1hcmtlcn1cblx0XHRcdFx0ICAgICAgICAgIHZpc2libGU9e3RoaXMuc3RhdGUuc2hvd2luZ0luZm9XaW5kb3d9PlxuXHRcdFx0XHQgICAgICAgICAgICA8ZGl2PlxuXHRcdFx0XHQgICAgICAgICAgICAgIDxoMT57dGhpcy5zdGF0ZS5zZWxlY3RlZFBsYWNlLm5hbWV9PC9oMT5cblx0XHRcdFx0ICAgICAgICAgICAgICA8cD57dGhpcy5zdGF0ZS5kZXNjcmlwdGlvbn08L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGgzPnt0aGlzLnN0YXRlLmFkZHJlc3MuYWRkcmVzc308L2gzPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxoMz57dGhpcy5zdGF0ZS5hZGRyZXNzLmFkZHJlc3MyfTwvaDM+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGgzPnt0aGlzLnN0YXRlLnBob25lTnVtYmVyfTwvaDM+XG5cdFx0XHRcdCAgICAgICAgICAgIDwvZGl2PlxuXHRcdFx0XHQgICAgICAgIDwvSW5mb1dpbmRvdz5cblxuXHRcdFx0XHRcdFx0XHQ8L01hcD5cblxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHQ8L0xheW91dD5cblxuXG5cblxuXG5cdFx0KTtcblxuXG5cdH1cblxufVxuXG5cbmNvbnN0IExvYWRpbmdDb250YWluZXIgPSAocHJvcHMpID0+IChcbjxkaXY+XG5cblx0PHN0eWxlIGpzeD57YFxuXG5cdFx0LmxvYWRpbmcge1xuXHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0XHRwYWRkaW5nLXRvcDogMzAlO1xuXHRcdFx0cGFkZGluZy1sZWZ0OjI1cHg7XG5cdFx0XHRmb250LXNpemU6IDIycHg7XG5cdFx0XHRcdFx0Ly8gdGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0Zm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcblx0XHR9XG5cblx0XHRAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuXHRcdFx0LmxvYWRpbmcge1xuXHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdHRvcDogMDtcblx0XHRcdFx0bGVmdDogMDtcblxuXHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdFx0XHRmb250LXNpemU6IDI2cHg7XG5cdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdFx0cGFkZGluZy10b3A6IDQ0dmg7XG5cdFx0XHRcdGNvbG9yOiBibGFjaztcblx0XHRcdFx0Zm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcblx0XHRcdFx0dHJhbnNpdGlvbjogYWxsIDFzIGVhc2Utb3V0O1xuXHRcdFx0fVxuXG5cdFx0fVxuXG5cblxuXG5cdGB9PC9zdHlsZT5cblxuXHQ8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmdcIj5Mb2FkaW5nIFJlc3VsdHMuLi48L2Rpdj5cbjwvZGl2PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBHb29nbGVBcGlXcmFwcGVyKHtcbiAgYXBpS2V5OiAnQUl6YVN5QVR4X2RoTHZHQ0s2VHFMMHM4b0JRN3JpMGxJaTlHUFNZJyxcblx0TG9hZGluZ0NvbnRhaW5lcjogTG9hZGluZ0NvbnRhaW5lclxufSkoTWFwcHkpXG4iXX0= */\n/*@ sourceURL=/Users/jbabak/Sites/dcapp/web/pages/map.js */",
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3157543875" + " " + "map",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
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
          lineNumber: 125
        },
        __self: this
      }, listItems, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(google_maps_react__WEBPACK_IMPORTED_MODULE_5__["InfoWindow"], {
        marker: this.state.activeMarker,
        visible: this.state.showingInfoWindow,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3157543875",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: "jsx-3157543875",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      }, this.state.selectedPlace.name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-3157543875",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      }, this.state.description), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
        className: "jsx-3157543875",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      }, this.state.address.address), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
        className: "jsx-3157543875",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: this
      }, this.state.address.address2), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
        className: "jsx-3157543875",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }, this.state.phoneNumber))))));
    }
  }]);

  return Mappy;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

var LoadingContainer = function LoadingContainer(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3677574924",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3677574924",
    css: ".loading.jsx-3677574924{width:100%;height:100%;padding-top:30%;padding-left:25px;font-size:22px;font-family:'Montserrat',sans-serif;}@media screen and (min-width:768px){.loading.jsx-3677574924{position:absolute;top:0;left:0;width:100%;height:100%;font-size:26px;text-align:center;padding-top:44vh;color:black;font-family:'Montserrat',sans-serif;-webkit-transition:all 1s ease-out;transition:all 1s ease-out;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYmFiYWsvU2l0ZXMvZGNhcHAvd2ViL3BhZ2VzL21hcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxTGEsQUFJZSxBQVdRLFdBVlAsT0FXTCxLQVZTLENBV1IsT0FFSSxRQVpLLEdBYUosWUFDRyxHQWJELFlBY0ksR0Faa0IsZUFhbkIsaUJBQ0wsSUFiZCxRQWN1QyxvQ0FDViw4REFDNUIiLCJmaWxlIjoiL1VzZXJzL2piYWJhay9TaXRlcy9kY2FwcC93ZWIvcGFnZXMvbWFwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wcy9IZWFkZXInXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBzL0xheW91dCdcbmltcG9ydCB7IE1hcCwgSW5mb1dpbmRvdywgTWFya2VyLCBHb29nbGVBcGlXcmFwcGVyIH0gZnJvbSAnZ29vZ2xlLW1hcHMtcmVhY3QnO1xuXG5jb25zdCBtYXBTdHlsZSA9IHtcblx0bWFwOiB7XG5cdFx0d2lkdGg6ICcxMDAlJyxcblx0XHRoZWlnaHQ6ICcxMDAlJyxcblx0XHRtYXhIZWlnaHQ6ICdjYWxjKDEwMCUgLSAxNjVweCknLFxuXHRcdC8vIG1heEhlaWdodDogJzc0MHB4Jyxcblx0XHRvdmVyZmxvdzogJ2hpZGRlbidcblx0fSxcbn1cblxuXG5leHBvcnQgY2xhc3MgTWFwcHkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdGRhdGE6IFtdLFxuXHRcdFx0c2hvd2luZ0luZm9XaW5kb3c6IGZhbHNlLFxuXHRcdFx0YWN0aXZlTWFya2VyOiB7fSxcblx0XHRcdHNlbGVjdGVkUGxhY2U6IHt9LFxuXHRcdH07XG5cblx0XHQvLyB0aGlzLmNvbXBvbmVudERpZE1vdW50ID0gdGhpcy5jb21wb25lbnREaWRNb3VudC5iaW5kKHRoaXMpO1xuICB9XG5cblxuXHRjb21wb25lbnRXaWxsTW91bnQgPSAoKSA9PiB7XG5cblx0XHRheGlvcy5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9zdG9yZXMnKVxuXHRcdFx0LnRoZW4ocmVzcG9uc2UgPT4ge1xuXG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdGRhdGE6IHJlc3BvbnNlLmRhdGFcblx0XHRcdFx0fSk7XG5cblx0XHRcdH0pXG5cdFx0XHQuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcblx0XHRcdH0pO1xuXG5cblx0fVxuXG5cdGNvbXBvbmVudERpZE1vdW50ID0gKCkgPT4ge1xuXG5cblxuXG5cdH1cblxuXHRvbk1hcmtlckNsaWNrID0gKHByb3BzLCBtYXJrZXIsIGUpID0+IHtcblx0XHRjb25zb2xlLmxvZyhwcm9wcy5zdG9yZSk7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRzZWxlY3RlZFBsYWNlOiBwcm9wcyxcblx0XHRcdHN0b3JlSW5mbzogcHJvcHMuc3RvcmUsXG5cdFx0XHRwaG9uZU51bWJlcjogcHJvcHMuc3RvcmUucGhvbmVOdW1iZXIgPyBwcm9wcy5zdG9yZS5waG9uZU51bWJlciA6IFwiTm8gUGhvbmUgTnVtYmVyIEZvdW5kXCIsXG5cdFx0XHRkZXNjcmlwdGlvbjogcHJvcHMuc3RvcmUuZGVzY3JpcHRpb24gPyBwcm9wcy5zdG9yZS5kZXNjcmlwdGlvbiA6IFwiTm8gRGVzY3JpcHRpb24gRm91bmRcIixcblx0XHRcdGFkZHJlc3M6IHtcblx0XHRcdFx0YWRkcmVzczogcHJvcHMuc3RvcmUuYWRkcmVzcy5hZGRyZXNzLFxuXHRcdFx0XHRhZGRyZXNzMjogcHJvcHMuc3RvcmUuYWRkcmVzcy5hZGRyZXNzMixcblx0XHRcdH0sXG5cdFx0XHRhY3RpdmVNYXJrZXI6IG1hcmtlcixcblx0XHRcdHNob3dpbmdJbmZvV2luZG93OiB0cnVlXG5cdFx0fSk7XG5cdH1cblxuXHRvbk1hcENsaWNrZWQgPSAocHJvcHMpID0+IHtcblx0XHRpZiAodGhpcy5zdGF0ZS5zaG93aW5nSW5mb1dpbmRvdykge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdHNob3dpbmdJbmZvV2luZG93OiBmYWxzZSxcblx0XHRcdFx0YWN0aXZlTWFya2VyOiBudWxsXG5cdFx0XHR9KVxuXHRcdH1cblx0fTtcblxuXHRyZW5kZXIoKSB7XG5cblx0XHRcdFx0dmFyIHN0b3JlcyA9IHRoaXMuc3RhdGUuZGF0YTtcblx0XHRcdFx0Y29uc29sZS5sb2coc3RvcmVzKTtcblxuXHRcdFx0XHRjb25zdCBsaXN0SXRlbXMgPSBzdG9yZXMubWFwKChzdG9yZSkgPT5cblx0XHRcdFx0XHRcdFx0XHQ8TWFya2VyXG5cdFx0XHRcdFx0XHRcdFx0XHRrZXk9e3N0b3JlLl9pZH1cblx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9e3N0b3JlLm5hbWV9XG5cdFx0XHRcdFx0XHRcdFx0XHRwb3NpdGlvbj17e2xhdDogc3RvcmUuYWRkcmVzcy5sYXQsIGxuZzogc3RvcmUuYWRkcmVzcy5sb25nfX1cblx0XHRcdFx0XHRcdFx0XHRcdGljb249e3tcblx0XHRcdFx0XHRcdFx0XHRcdFx0dXJsOiBcIi9zdGF0aWMvbWFya2VyX2N1c3RvbS5zdmdcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0YW5jaG9yOiBuZXcgZ29vZ2xlLm1hcHMuUG9pbnQoMzIsMzIpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzY2FsZWRTaXplOiBuZXcgZ29vZ2xlLm1hcHMuU2l6ZSg2NCw2NClcblx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0XHRzdG9yZT17c3RvcmV9XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXt0aGlzLm9uTWFya2VyQ2xpY2t9XG5cdFx0XHRcdFx0XHRcdFx0IC8+XG5cblx0XHRcdFx0XHRcdFx0KTtcblxuXHRcdHJldHVybiAoXG5cblxuXHRcdFx0XHRcdDxMYXlvdXQgb3ZlcmZsb3c9e3RydWV9PlxuXHRcdFx0XHRcdFx0PHN0eWxlIGpzeD57YFxuXHRcdFx0XHRcdFx0XHQubWFwIHtcblx0XHRcdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0XHRcdFx0XHRcdFx0Ly8gbWF4LWhlaWdodDo2MCU7XG5cdFx0XHRcdFx0XHRcdFx0Ly8gbWF4LWhlaWdodDogNTgwcHg7XG5cdFx0XHRcdFx0XHRcdFx0Ly8gYmFja2dyb3VuZC1jb2xvcjogIzAwMjc2Njtcblx0XHRcdFx0XHRcdFx0XHRvdmVyZmxvdzogaGlkZGVuO1xuXG5cdFx0XHRcdFx0XHRcdH1cblxuXG5cdFx0XHRcdFx0XHRgfTwvc3R5bGU+XG5cblxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtYXBcIj5cblxuXHRcdFx0XHRcdFx0XHQ8TWFwXG5cdFx0XHRcdFx0XHRcdFx0Z29vZ2xlPXt0aGlzLnByb3BzLmdvb2dsZX1cblx0XHRcdFx0XHRcdFx0XHRzdHlsZT17bWFwU3R5bGUubWFwfVxuXHRcdFx0XHRcdFx0XHRcdC8vIG9wdGlvbnM9e21hcE9wdGlvbnN9XG5cdFx0XHRcdFx0XHRcdFx0aW5pdGlhbENlbnRlcj17e1xuXHRcdFx0XHRcdFx0XHRcdFx0bGF0OiAyNS4yNjczNjksXG5cdFx0XHRcdFx0XHRcdFx0XHRsbmc6IDUxLjUyOTQ1MVxuXHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0em9vbT17MTR9XG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHR7bGlzdEl0ZW1zfVxuXG5cdFx0XHRcdFx0XHRcdFx0ey8qIDxNYXJrZXJcblx0XHRcdFx0XHRcdFx0XHRcdHRpdGxlPXsnVGhlIG1hcmtlcmBzIHRpdGxlIHdpbGwgYXBwZWFyIGFzIGEgdG9vbHRpcC4nfVxuXHRcdFx0XHRcdFx0XHRcdFx0bmFtZT17J1NPTUEnfVxuXHRcdFx0XHRcdFx0XHRcdFx0cG9zaXRpb249e3tsYXQ6IDI1LjI2MjgxMSwgbG5nOiA1MS41MzIwOTR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0aWNvbj17e1xuXHRcdFx0XHRcdFx0XHQgICAgICB1cmw6IFwiL3N0YXRpYy9tYXJrZXJfY3VzdG9tLnN2Z1wiLFxuXHRcdFx0XHRcdFx0XHQgICAgICBhbmNob3I6IG5ldyBnb29nbGUubWFwcy5Qb2ludCgzMiwzMiksXG5cdFx0XHRcdFx0XHRcdCAgICAgIHNjYWxlZFNpemU6IG5ldyBnb29nbGUubWFwcy5TaXplKDY0LDY0KVxuXHRcdFx0XHRcdFx0XHQgICAgfX1cblx0XHRcdFx0XHRcdFx0XHRcdC8vIG9uQ2xpY2s9e3RoaXMub25NYXJrZXJDbGlja31cblx0XHRcdFx0XHRcdFx0XHQgLz4gKi99XG5cblx0XHRcdFx0XHRcdFx0XHQ8SW5mb1dpbmRvd1xuXHRcdFx0XHQgICAgICAgICAgbWFya2VyPXt0aGlzLnN0YXRlLmFjdGl2ZU1hcmtlcn1cblx0XHRcdFx0ICAgICAgICAgIHZpc2libGU9e3RoaXMuc3RhdGUuc2hvd2luZ0luZm9XaW5kb3d9PlxuXHRcdFx0XHQgICAgICAgICAgICA8ZGl2PlxuXHRcdFx0XHQgICAgICAgICAgICAgIDxoMT57dGhpcy5zdGF0ZS5zZWxlY3RlZFBsYWNlLm5hbWV9PC9oMT5cblx0XHRcdFx0ICAgICAgICAgICAgICA8cD57dGhpcy5zdGF0ZS5kZXNjcmlwdGlvbn08L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGgzPnt0aGlzLnN0YXRlLmFkZHJlc3MuYWRkcmVzc308L2gzPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxoMz57dGhpcy5zdGF0ZS5hZGRyZXNzLmFkZHJlc3MyfTwvaDM+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGgzPnt0aGlzLnN0YXRlLnBob25lTnVtYmVyfTwvaDM+XG5cdFx0XHRcdCAgICAgICAgICAgIDwvZGl2PlxuXHRcdFx0XHQgICAgICAgIDwvSW5mb1dpbmRvdz5cblxuXHRcdFx0XHRcdFx0XHQ8L01hcD5cblxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHQ8L0xheW91dD5cblxuXG5cblxuXG5cdFx0KTtcblxuXG5cdH1cblxufVxuXG5cbmNvbnN0IExvYWRpbmdDb250YWluZXIgPSAocHJvcHMpID0+IChcbjxkaXY+XG5cblx0PHN0eWxlIGpzeD57YFxuXG5cdFx0LmxvYWRpbmcge1xuXHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0XHRwYWRkaW5nLXRvcDogMzAlO1xuXHRcdFx0cGFkZGluZy1sZWZ0OjI1cHg7XG5cdFx0XHRmb250LXNpemU6IDIycHg7XG5cdFx0XHRcdFx0Ly8gdGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0Zm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcblx0XHR9XG5cblx0XHRAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuXHRcdFx0LmxvYWRpbmcge1xuXHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdHRvcDogMDtcblx0XHRcdFx0bGVmdDogMDtcblxuXHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdFx0XHRmb250LXNpemU6IDI2cHg7XG5cdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdFx0cGFkZGluZy10b3A6IDQ0dmg7XG5cdFx0XHRcdGNvbG9yOiBibGFjaztcblx0XHRcdFx0Zm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcblx0XHRcdFx0dHJhbnNpdGlvbjogYWxsIDFzIGVhc2Utb3V0O1xuXHRcdFx0fVxuXG5cdFx0fVxuXG5cblxuXG5cdGB9PC9zdHlsZT5cblxuXHQ8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmdcIj5Mb2FkaW5nIFJlc3VsdHMuLi48L2Rpdj5cbjwvZGl2PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBHb29nbGVBcGlXcmFwcGVyKHtcbiAgYXBpS2V5OiAnQUl6YVN5QVR4X2RoTHZHQ0s2VHFMMHM4b0JRN3JpMGxJaTlHUFNZJyxcblx0TG9hZGluZ0NvbnRhaW5lcjogTG9hZGluZ0NvbnRhaW5lclxufSkoTWFwcHkpXG4iXX0= */\n/*@ sourceURL=/Users/jbabak/Sites/dcapp/web/pages/map.js */",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3677574924" + " " + "loading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217
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
//# sourceMappingURL=map.js.169929af7500c2c9b587.hot-update.js.map