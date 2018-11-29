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
        display: "false",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "3157543875",
        css: ".map.jsx-3157543875{width:100%;height:100%;overflow:hidden;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYmFiYWsvU2l0ZXMvZGNhcHAvd2ViL3BhZ2VzL21hcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzR2tCLEFBR29CLFdBQ0MsWUFJSSxnQkFFakIiLCJmaWxlIjoiL1VzZXJzL2piYWJhay9TaXRlcy9kY2FwcC93ZWIvcGFnZXMvbWFwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wcy9IZWFkZXInXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBzL0xheW91dCdcbmltcG9ydCB7IE1hcCwgSW5mb1dpbmRvdywgTWFya2VyLCBHb29nbGVBcGlXcmFwcGVyIH0gZnJvbSAnZ29vZ2xlLW1hcHMtcmVhY3QnO1xuXG5jb25zdCBtYXBTdHlsZSA9IHtcblx0bWFwOiB7XG5cdFx0d2lkdGg6ICcxMDAlJyxcblx0XHRoZWlnaHQ6ICcxMDAlJyxcblx0XHRtYXhIZWlnaHQ6ICdjYWxjKDEwMCUgLSAxNjVweCknLFxuXHRcdC8vIG1heEhlaWdodDogJzc0MHB4Jyxcblx0XHRvdmVyZmxvdzogJ2hpZGRlbidcblx0fSxcbn1cblxuXG5leHBvcnQgY2xhc3MgTWFwcHkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdGRhdGE6IFtdLFxuXHRcdFx0c2hvd2luZ0luZm9XaW5kb3c6IGZhbHNlLFxuXHRcdFx0YWN0aXZlTWFya2VyOiB7fSxcblx0XHRcdHNlbGVjdGVkUGxhY2U6IHt9LFxuXHRcdH07XG5cblx0XHQvLyB0aGlzLmNvbXBvbmVudERpZE1vdW50ID0gdGhpcy5jb21wb25lbnREaWRNb3VudC5iaW5kKHRoaXMpO1xuICB9XG5cblxuXHRjb21wb25lbnRXaWxsTW91bnQgPSAoKSA9PiB7XG5cblx0XHRheGlvcy5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9zdG9yZXMnKVxuXHRcdFx0LnRoZW4ocmVzcG9uc2UgPT4ge1xuXG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdGRhdGE6IHJlc3BvbnNlLmRhdGFcblx0XHRcdFx0fSk7XG5cblx0XHRcdH0pXG5cdFx0XHQuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcblx0XHRcdH0pO1xuXG5cblx0fVxuXG5cdGNvbXBvbmVudERpZE1vdW50ID0gKCkgPT4ge1xuXG5cblxuXG5cdH1cblxuXHRvbk1hcmtlckNsaWNrID0gKHByb3BzLCBtYXJrZXIsIGUpID0+IHtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdHNlbGVjdGVkUGxhY2U6IHByb3BzLFxuXHRcdFx0c3RvcmVJbmZvOiBwcm9wcy5zdG9yZSxcblx0XHRcdHBob25lTnVtYmVyOiBwcm9wcy5zdG9yZS5waG9uZU51bWJlciA/IHByb3BzLnN0b3JlLnBob25lTnVtYmVyIDogXCJObyBQaG9uZSBOdW1iZXIgRm91bmRcIixcblx0XHRcdGRlc2NyaXB0aW9uOiBwcm9wcy5zdG9yZS5kZXNjcmlwdGlvbiA/IHByb3BzLnN0b3JlLmRlc2NyaXB0aW9uIDogXCJObyBEZXNjcmlwdGlvbiBGb3VuZFwiLFxuXHRcdFx0YWN0aXZlTWFya2VyOiBtYXJrZXIsXG5cdFx0XHRzaG93aW5nSW5mb1dpbmRvdzogdHJ1ZVxuXHRcdH0pO1xuXHR9XG5cblx0b25NYXBDbGlja2VkID0gKHByb3BzKSA9PiB7XG5cdFx0aWYgKHRoaXMuc3RhdGUuc2hvd2luZ0luZm9XaW5kb3cpIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRzaG93aW5nSW5mb1dpbmRvdzogZmFsc2UsXG5cdFx0XHRcdGFjdGl2ZU1hcmtlcjogbnVsbFxuXHRcdFx0fSlcblx0XHR9XG5cdH07XG5cblx0cmVuZGVyKCkge1xuXG5cdFx0XHRcdHZhciBzdG9yZXMgPSB0aGlzLnN0YXRlLmRhdGE7XG5cdFx0XHRcdGNvbnNvbGUubG9nKHN0b3Jlcyk7XG5cblx0XHRcdFx0Y29uc3QgbGlzdEl0ZW1zID0gc3RvcmVzLm1hcCgoc3RvcmUpID0+XG5cdFx0XHRcdFx0XHRcdFx0PE1hcmtlclxuXHRcdFx0XHRcdFx0XHRcdFx0a2V5PXtzdG9yZS5faWR9XG5cdFx0XHRcdFx0XHRcdFx0XHRuYW1lPXtzdG9yZS5uYW1lfVxuXHRcdFx0XHRcdFx0XHRcdFx0cG9zaXRpb249e3tsYXQ6IHN0b3JlLmFkZHJlc3MubGF0LCBsbmc6IHN0b3JlLmFkZHJlc3MubG9uZ319XG5cdFx0XHRcdFx0XHRcdFx0XHRpY29uPXt7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHVybDogXCIvc3RhdGljL21hcmtlcl9jdXN0b20uc3ZnXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFuY2hvcjogbmV3IGdvb2dsZS5tYXBzLlBvaW50KDMyLDMyKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0c2NhbGVkU2l6ZTogbmV3IGdvb2dsZS5tYXBzLlNpemUoNjQsNjQpXG5cdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0c3RvcmU9e3N0b3JlfVxuXHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17dGhpcy5vbk1hcmtlckNsaWNrfVxuXHRcdFx0XHRcdFx0XHRcdCAvPlxuXG5cdFx0XHRcdFx0XHRcdCk7XG5cblx0XHRyZXR1cm4gKFxuXG5cblx0XHRcdFx0XHQ8TGF5b3V0IGRpc3BsYXk9XCJmYWxzZVwiPlxuXHRcdFx0XHRcdFx0PHN0eWxlIGpzeD57YFxuXHRcdFx0XHRcdFx0XHQubWFwIHtcblx0XHRcdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0XHRcdFx0XHRcdFx0Ly8gbWF4LWhlaWdodDo2MCU7XG5cdFx0XHRcdFx0XHRcdFx0Ly8gbWF4LWhlaWdodDogNTgwcHg7XG5cdFx0XHRcdFx0XHRcdFx0Ly8gYmFja2dyb3VuZC1jb2xvcjogIzAwMjc2Njtcblx0XHRcdFx0XHRcdFx0XHRvdmVyZmxvdzogaGlkZGVuO1xuXG5cdFx0XHRcdFx0XHRcdH1cblxuXG5cdFx0XHRcdFx0XHRgfTwvc3R5bGU+XG5cblxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtYXBcIj5cblxuXHRcdFx0XHRcdFx0XHQ8TWFwXG5cdFx0XHRcdFx0XHRcdFx0Z29vZ2xlPXt0aGlzLnByb3BzLmdvb2dsZX1cblx0XHRcdFx0XHRcdFx0XHRzdHlsZT17bWFwU3R5bGUubWFwfVxuXHRcdFx0XHRcdFx0XHRcdC8vIG9wdGlvbnM9e21hcE9wdGlvbnN9XG5cdFx0XHRcdFx0XHRcdFx0aW5pdGlhbENlbnRlcj17e1xuXHRcdFx0XHRcdFx0XHRcdFx0bGF0OiAyNS4yNjczNjksXG5cdFx0XHRcdFx0XHRcdFx0XHRsbmc6IDUxLjUyOTQ1MVxuXHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0em9vbT17MTR9XG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHR7bGlzdEl0ZW1zfVxuXG5cdFx0XHRcdFx0XHRcdFx0PE1hcmtlclxuXHRcdFx0XHRcdFx0XHRcdFx0dGl0bGU9eydUaGUgbWFya2VyYHMgdGl0bGUgd2lsbCBhcHBlYXIgYXMgYSB0b29sdGlwLid9XG5cdFx0XHRcdFx0XHRcdFx0XHRuYW1lPXsnU09NQSd9XG5cdFx0XHRcdFx0XHRcdFx0XHRwb3NpdGlvbj17e2xhdDogMjUuMjYyODExLCBsbmc6IDUxLjUzMjA5NH19XG5cdFx0XHRcdFx0XHRcdFx0XHRpY29uPXt7XG5cdFx0XHRcdFx0XHRcdCAgICAgIHVybDogXCIvc3RhdGljL21hcmtlcl9jdXN0b20uc3ZnXCIsXG5cdFx0XHRcdFx0XHRcdCAgICAgIGFuY2hvcjogbmV3IGdvb2dsZS5tYXBzLlBvaW50KDMyLDMyKSxcblx0XHRcdFx0XHRcdFx0ICAgICAgc2NhbGVkU2l6ZTogbmV3IGdvb2dsZS5tYXBzLlNpemUoNjQsNjQpXG5cdFx0XHRcdFx0XHRcdCAgICB9fVxuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gb25DbGljaz17dGhpcy5vbk1hcmtlckNsaWNrfVxuXHRcdFx0XHRcdFx0XHRcdCAvPlxuXG5cdFx0XHRcdFx0XHRcdFx0PE1hcmtlclxuXHRcdFx0XHRcdFx0XHQgICAgbmFtZT17J0RvbG9yZXMgcGFyayd9XG5cdFx0XHRcdFx0XHRcdCAgICBwb3NpdGlvbj17e2xhdDogMjUuMjcwMzk4LCBsbmc6IDUxLjUyNDcyM319XG5cdFx0XHRcdFx0XHRcdFx0XHRpY29uPXt7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHVybDogXCIvc3RhdGljL21hcmtlcl9jdXN0b20uc3ZnXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFuY2hvcjogbmV3IGdvb2dsZS5tYXBzLlBvaW50KDMyLDMyKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0c2NhbGVkU2l6ZTogbmV3IGdvb2dsZS5tYXBzLlNpemUoNjQsNjQpXG5cdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gb25DbGljaz17dGhpcy5vbk1hcmtlckNsaWNrfVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdCAgPE1hcmtlciAvPlxuXG5cdFx0XHRcdFx0XHRcdFx0PE1hcmtlclxuXHRcdFx0XHRcdFx0XHQgICAgbmFtZT17J0RvbG9yZXMgcGFyayd9XG5cdFx0XHRcdFx0XHRcdCAgICBwb3NpdGlvbj17e2xhdDogMjUuMzAyNzg2LCBsbmc6IDUxLjUxMjIxMn19XG5cdFx0XHRcdFx0XHRcdFx0XHRpY29uPXt7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHVybDogXCIvc3RhdGljL21hcmtlcl9jdXN0b20uc3ZnXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFuY2hvcjogbmV3IGdvb2dsZS5tYXBzLlBvaW50KDMyLDMyKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0c2NhbGVkU2l6ZTogbmV3IGdvb2dsZS5tYXBzLlNpemUoNjQsNjQpXG5cdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gb25DbGljaz17dGhpcy5vbk1hcmtlckNsaWNrfVxuXHRcdFx0XHRcdFx0XHRcdCAvPlxuXHRcdFx0XHRcdFx0XHQgIDxNYXJrZXIgLz5cblxuXHRcdFx0XHRcdFx0XHRcdDxNYXJrZXJcblx0XHRcdFx0XHRcdFx0ICAgIG5hbWU9eydEb2xvcmVzIHBhcmsnfVxuXHRcdFx0XHRcdFx0XHQgICAgcG9zaXRpb249e3tsYXQ6IDI1LjIwODk0NSwgbG5nOiA1MS40NDQ1NTF9fVxuXHRcdFx0XHRcdFx0XHRcdFx0aWNvbj17e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR1cmw6IFwiL3N0YXRpYy9tYXJrZXJfY3VzdG9tLnN2Z1wiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRhbmNob3I6IG5ldyBnb29nbGUubWFwcy5Qb2ludCgzMiwzMiksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNjYWxlZFNpemU6IG5ldyBnb29nbGUubWFwcy5TaXplKDY0LDY0KVxuXHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRcdC8vIG9uQ2xpY2s9e3RoaXMub25NYXJrZXJDbGlja31cblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQgIDxNYXJrZXIgLz5cblxuXHRcdFx0XHRcdFx0XHRcdDxJbmZvV2luZG93XG5cdFx0XHRcdCAgICAgICAgICBtYXJrZXI9e3RoaXMuc3RhdGUuYWN0aXZlTWFya2VyfVxuXHRcdFx0XHQgICAgICAgICAgdmlzaWJsZT17dGhpcy5zdGF0ZS5zaG93aW5nSW5mb1dpbmRvd30+XG5cdFx0XHRcdCAgICAgICAgICAgIDxkaXY+XG5cdFx0XHRcdCAgICAgICAgICAgICAgPGgxPnt0aGlzLnN0YXRlLnNlbGVjdGVkUGxhY2UubmFtZX08L2gxPlxuXHRcdFx0XHQgICAgICAgICAgICAgIDxoMz57dGhpcy5zdGF0ZS5waG9uZU51bWJlcn08L2gzPlxuXHRcdFx0XHQgICAgICAgICAgICAgIDxwPnt0aGlzLnN0YXRlLmRlc2NyaXB0aW9ufTwvcD5cblx0XHRcdFx0ICAgICAgICAgICAgPC9kaXY+XG5cdFx0XHRcdCAgICAgICAgPC9JbmZvV2luZG93PlxuXG5cdFx0XHRcdFx0XHRcdDwvTWFwPlxuXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdDwvTGF5b3V0PlxuXG5cblxuXG5cblx0XHQpO1xuXG5cblx0fVxuXG59XG5cblxuY29uc3QgTG9hZGluZ0NvbnRhaW5lciA9IChwcm9wcykgPT4gKFxuPGRpdj5cblxuXHQ8c3R5bGUganN4PntgXG5cblx0XHQubG9hZGluZyB7XG5cdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdGhlaWdodDogMTAwJTtcblx0XHRcdHBhZGRpbmctdG9wOiAzMCU7XG5cdFx0XHRwYWRkaW5nLWxlZnQ6MjVweDtcblx0XHRcdGZvbnQtc2l6ZTogMjJweDtcblx0XHRcdFx0XHQvLyB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHRmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuXHRcdH1cblxuXHRcdEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG5cdFx0XHQubG9hZGluZyB7XG5cdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0dG9wOiAwO1xuXHRcdFx0XHRsZWZ0OiAwO1xuXG5cdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMjZweDtcblx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0XHRwYWRkaW5nLXRvcDogNDR2aDtcblx0XHRcdFx0Y29sb3I6IGJsYWNrO1xuXHRcdFx0XHRmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuXHRcdFx0XHR0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZS1vdXQ7XG5cdFx0XHR9XG5cblx0XHR9XG5cblxuXG5cblx0YH08L3N0eWxlPlxuXG5cdDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZ1wiPkxvYWRpbmcgUmVzdWx0cy4uLjwvZGl2PlxuPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IEdvb2dsZUFwaVdyYXBwZXIoe1xuICBhcGlLZXk6ICdBSXphU3lBVHhfZGhMdkdDSzZUcUwwczhvQlE3cmkwbElpOUdQU1knLFxuXHRMb2FkaW5nQ29udGFpbmVyOiBMb2FkaW5nQ29udGFpbmVyXG59KShNYXBweSlcbiJdfQ== */\n/*@ sourceURL=/Users/jbabak/Sites/dcapp/web/pages/map.js */",
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3157543875" + " " + "map",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
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
          lineNumber: 120
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
          lineNumber: 132
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
          lineNumber: 144
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(google_maps_react__WEBPACK_IMPORTED_MODULE_5__["Marker"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
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
          lineNumber: 156
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(google_maps_react__WEBPACK_IMPORTED_MODULE_5__["Marker"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
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
          lineNumber: 168
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(google_maps_react__WEBPACK_IMPORTED_MODULE_5__["Marker"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(google_maps_react__WEBPACK_IMPORTED_MODULE_5__["InfoWindow"], {
        marker: this.state.activeMarker,
        visible: this.state.showingInfoWindow,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3157543875",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: "jsx-3157543875",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        },
        __self: this
      }, this.state.selectedPlace.name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
        className: "jsx-3157543875",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        },
        __self: this
      }, this.state.phoneNumber), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-3157543875",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
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
      lineNumber: 209
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3677574924",
    css: ".loading.jsx-3677574924{width:100%;height:100%;padding-top:30%;padding-left:25px;font-size:22px;font-family:'Montserrat',sans-serif;}@media screen and (min-width:768px){.loading.jsx-3677574924{position:absolute;top:0;left:0;width:100%;height:100%;font-size:26px;text-align:center;padding-top:44vh;color:black;font-family:'Montserrat',sans-serif;-webkit-transition:all 1s ease-out;transition:all 1s ease-out;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYmFiYWsvU2l0ZXMvZGNhcHAvd2ViL3BhZ2VzL21hcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrTmEsQUFJZSxBQVdRLFdBVlAsT0FXTCxLQVZTLENBV1IsT0FFSSxRQVpLLEdBYUosWUFDRyxHQWJELFlBY0ksR0Faa0IsZUFhbkIsaUJBQ0wsSUFiZCxRQWN1QyxvQ0FDViw4REFDNUIiLCJmaWxlIjoiL1VzZXJzL2piYWJhay9TaXRlcy9kY2FwcC93ZWIvcGFnZXMvbWFwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wcy9IZWFkZXInXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBzL0xheW91dCdcbmltcG9ydCB7IE1hcCwgSW5mb1dpbmRvdywgTWFya2VyLCBHb29nbGVBcGlXcmFwcGVyIH0gZnJvbSAnZ29vZ2xlLW1hcHMtcmVhY3QnO1xuXG5jb25zdCBtYXBTdHlsZSA9IHtcblx0bWFwOiB7XG5cdFx0d2lkdGg6ICcxMDAlJyxcblx0XHRoZWlnaHQ6ICcxMDAlJyxcblx0XHRtYXhIZWlnaHQ6ICdjYWxjKDEwMCUgLSAxNjVweCknLFxuXHRcdC8vIG1heEhlaWdodDogJzc0MHB4Jyxcblx0XHRvdmVyZmxvdzogJ2hpZGRlbidcblx0fSxcbn1cblxuXG5leHBvcnQgY2xhc3MgTWFwcHkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdGRhdGE6IFtdLFxuXHRcdFx0c2hvd2luZ0luZm9XaW5kb3c6IGZhbHNlLFxuXHRcdFx0YWN0aXZlTWFya2VyOiB7fSxcblx0XHRcdHNlbGVjdGVkUGxhY2U6IHt9LFxuXHRcdH07XG5cblx0XHQvLyB0aGlzLmNvbXBvbmVudERpZE1vdW50ID0gdGhpcy5jb21wb25lbnREaWRNb3VudC5iaW5kKHRoaXMpO1xuICB9XG5cblxuXHRjb21wb25lbnRXaWxsTW91bnQgPSAoKSA9PiB7XG5cblx0XHRheGlvcy5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9zdG9yZXMnKVxuXHRcdFx0LnRoZW4ocmVzcG9uc2UgPT4ge1xuXG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdGRhdGE6IHJlc3BvbnNlLmRhdGFcblx0XHRcdFx0fSk7XG5cblx0XHRcdH0pXG5cdFx0XHQuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcblx0XHRcdH0pO1xuXG5cblx0fVxuXG5cdGNvbXBvbmVudERpZE1vdW50ID0gKCkgPT4ge1xuXG5cblxuXG5cdH1cblxuXHRvbk1hcmtlckNsaWNrID0gKHByb3BzLCBtYXJrZXIsIGUpID0+IHtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdHNlbGVjdGVkUGxhY2U6IHByb3BzLFxuXHRcdFx0c3RvcmVJbmZvOiBwcm9wcy5zdG9yZSxcblx0XHRcdHBob25lTnVtYmVyOiBwcm9wcy5zdG9yZS5waG9uZU51bWJlciA/IHByb3BzLnN0b3JlLnBob25lTnVtYmVyIDogXCJObyBQaG9uZSBOdW1iZXIgRm91bmRcIixcblx0XHRcdGRlc2NyaXB0aW9uOiBwcm9wcy5zdG9yZS5kZXNjcmlwdGlvbiA/IHByb3BzLnN0b3JlLmRlc2NyaXB0aW9uIDogXCJObyBEZXNjcmlwdGlvbiBGb3VuZFwiLFxuXHRcdFx0YWN0aXZlTWFya2VyOiBtYXJrZXIsXG5cdFx0XHRzaG93aW5nSW5mb1dpbmRvdzogdHJ1ZVxuXHRcdH0pO1xuXHR9XG5cblx0b25NYXBDbGlja2VkID0gKHByb3BzKSA9PiB7XG5cdFx0aWYgKHRoaXMuc3RhdGUuc2hvd2luZ0luZm9XaW5kb3cpIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRzaG93aW5nSW5mb1dpbmRvdzogZmFsc2UsXG5cdFx0XHRcdGFjdGl2ZU1hcmtlcjogbnVsbFxuXHRcdFx0fSlcblx0XHR9XG5cdH07XG5cblx0cmVuZGVyKCkge1xuXG5cdFx0XHRcdHZhciBzdG9yZXMgPSB0aGlzLnN0YXRlLmRhdGE7XG5cdFx0XHRcdGNvbnNvbGUubG9nKHN0b3Jlcyk7XG5cblx0XHRcdFx0Y29uc3QgbGlzdEl0ZW1zID0gc3RvcmVzLm1hcCgoc3RvcmUpID0+XG5cdFx0XHRcdFx0XHRcdFx0PE1hcmtlclxuXHRcdFx0XHRcdFx0XHRcdFx0a2V5PXtzdG9yZS5faWR9XG5cdFx0XHRcdFx0XHRcdFx0XHRuYW1lPXtzdG9yZS5uYW1lfVxuXHRcdFx0XHRcdFx0XHRcdFx0cG9zaXRpb249e3tsYXQ6IHN0b3JlLmFkZHJlc3MubGF0LCBsbmc6IHN0b3JlLmFkZHJlc3MubG9uZ319XG5cdFx0XHRcdFx0XHRcdFx0XHRpY29uPXt7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHVybDogXCIvc3RhdGljL21hcmtlcl9jdXN0b20uc3ZnXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFuY2hvcjogbmV3IGdvb2dsZS5tYXBzLlBvaW50KDMyLDMyKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0c2NhbGVkU2l6ZTogbmV3IGdvb2dsZS5tYXBzLlNpemUoNjQsNjQpXG5cdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0c3RvcmU9e3N0b3JlfVxuXHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17dGhpcy5vbk1hcmtlckNsaWNrfVxuXHRcdFx0XHRcdFx0XHRcdCAvPlxuXG5cdFx0XHRcdFx0XHRcdCk7XG5cblx0XHRyZXR1cm4gKFxuXG5cblx0XHRcdFx0XHQ8TGF5b3V0IGRpc3BsYXk9XCJmYWxzZVwiPlxuXHRcdFx0XHRcdFx0PHN0eWxlIGpzeD57YFxuXHRcdFx0XHRcdFx0XHQubWFwIHtcblx0XHRcdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0XHRcdFx0XHRcdFx0Ly8gbWF4LWhlaWdodDo2MCU7XG5cdFx0XHRcdFx0XHRcdFx0Ly8gbWF4LWhlaWdodDogNTgwcHg7XG5cdFx0XHRcdFx0XHRcdFx0Ly8gYmFja2dyb3VuZC1jb2xvcjogIzAwMjc2Njtcblx0XHRcdFx0XHRcdFx0XHRvdmVyZmxvdzogaGlkZGVuO1xuXG5cdFx0XHRcdFx0XHRcdH1cblxuXG5cdFx0XHRcdFx0XHRgfTwvc3R5bGU+XG5cblxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtYXBcIj5cblxuXHRcdFx0XHRcdFx0XHQ8TWFwXG5cdFx0XHRcdFx0XHRcdFx0Z29vZ2xlPXt0aGlzLnByb3BzLmdvb2dsZX1cblx0XHRcdFx0XHRcdFx0XHRzdHlsZT17bWFwU3R5bGUubWFwfVxuXHRcdFx0XHRcdFx0XHRcdC8vIG9wdGlvbnM9e21hcE9wdGlvbnN9XG5cdFx0XHRcdFx0XHRcdFx0aW5pdGlhbENlbnRlcj17e1xuXHRcdFx0XHRcdFx0XHRcdFx0bGF0OiAyNS4yNjczNjksXG5cdFx0XHRcdFx0XHRcdFx0XHRsbmc6IDUxLjUyOTQ1MVxuXHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0em9vbT17MTR9XG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHR7bGlzdEl0ZW1zfVxuXG5cdFx0XHRcdFx0XHRcdFx0PE1hcmtlclxuXHRcdFx0XHRcdFx0XHRcdFx0dGl0bGU9eydUaGUgbWFya2VyYHMgdGl0bGUgd2lsbCBhcHBlYXIgYXMgYSB0b29sdGlwLid9XG5cdFx0XHRcdFx0XHRcdFx0XHRuYW1lPXsnU09NQSd9XG5cdFx0XHRcdFx0XHRcdFx0XHRwb3NpdGlvbj17e2xhdDogMjUuMjYyODExLCBsbmc6IDUxLjUzMjA5NH19XG5cdFx0XHRcdFx0XHRcdFx0XHRpY29uPXt7XG5cdFx0XHRcdFx0XHRcdCAgICAgIHVybDogXCIvc3RhdGljL21hcmtlcl9jdXN0b20uc3ZnXCIsXG5cdFx0XHRcdFx0XHRcdCAgICAgIGFuY2hvcjogbmV3IGdvb2dsZS5tYXBzLlBvaW50KDMyLDMyKSxcblx0XHRcdFx0XHRcdFx0ICAgICAgc2NhbGVkU2l6ZTogbmV3IGdvb2dsZS5tYXBzLlNpemUoNjQsNjQpXG5cdFx0XHRcdFx0XHRcdCAgICB9fVxuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gb25DbGljaz17dGhpcy5vbk1hcmtlckNsaWNrfVxuXHRcdFx0XHRcdFx0XHRcdCAvPlxuXG5cdFx0XHRcdFx0XHRcdFx0PE1hcmtlclxuXHRcdFx0XHRcdFx0XHQgICAgbmFtZT17J0RvbG9yZXMgcGFyayd9XG5cdFx0XHRcdFx0XHRcdCAgICBwb3NpdGlvbj17e2xhdDogMjUuMjcwMzk4LCBsbmc6IDUxLjUyNDcyM319XG5cdFx0XHRcdFx0XHRcdFx0XHRpY29uPXt7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHVybDogXCIvc3RhdGljL21hcmtlcl9jdXN0b20uc3ZnXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFuY2hvcjogbmV3IGdvb2dsZS5tYXBzLlBvaW50KDMyLDMyKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0c2NhbGVkU2l6ZTogbmV3IGdvb2dsZS5tYXBzLlNpemUoNjQsNjQpXG5cdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gb25DbGljaz17dGhpcy5vbk1hcmtlckNsaWNrfVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdCAgPE1hcmtlciAvPlxuXG5cdFx0XHRcdFx0XHRcdFx0PE1hcmtlclxuXHRcdFx0XHRcdFx0XHQgICAgbmFtZT17J0RvbG9yZXMgcGFyayd9XG5cdFx0XHRcdFx0XHRcdCAgICBwb3NpdGlvbj17e2xhdDogMjUuMzAyNzg2LCBsbmc6IDUxLjUxMjIxMn19XG5cdFx0XHRcdFx0XHRcdFx0XHRpY29uPXt7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHVybDogXCIvc3RhdGljL21hcmtlcl9jdXN0b20uc3ZnXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFuY2hvcjogbmV3IGdvb2dsZS5tYXBzLlBvaW50KDMyLDMyKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0c2NhbGVkU2l6ZTogbmV3IGdvb2dsZS5tYXBzLlNpemUoNjQsNjQpXG5cdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gb25DbGljaz17dGhpcy5vbk1hcmtlckNsaWNrfVxuXHRcdFx0XHRcdFx0XHRcdCAvPlxuXHRcdFx0XHRcdFx0XHQgIDxNYXJrZXIgLz5cblxuXHRcdFx0XHRcdFx0XHRcdDxNYXJrZXJcblx0XHRcdFx0XHRcdFx0ICAgIG5hbWU9eydEb2xvcmVzIHBhcmsnfVxuXHRcdFx0XHRcdFx0XHQgICAgcG9zaXRpb249e3tsYXQ6IDI1LjIwODk0NSwgbG5nOiA1MS40NDQ1NTF9fVxuXHRcdFx0XHRcdFx0XHRcdFx0aWNvbj17e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR1cmw6IFwiL3N0YXRpYy9tYXJrZXJfY3VzdG9tLnN2Z1wiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRhbmNob3I6IG5ldyBnb29nbGUubWFwcy5Qb2ludCgzMiwzMiksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNjYWxlZFNpemU6IG5ldyBnb29nbGUubWFwcy5TaXplKDY0LDY0KVxuXHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRcdC8vIG9uQ2xpY2s9e3RoaXMub25NYXJrZXJDbGlja31cblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQgIDxNYXJrZXIgLz5cblxuXHRcdFx0XHRcdFx0XHRcdDxJbmZvV2luZG93XG5cdFx0XHRcdCAgICAgICAgICBtYXJrZXI9e3RoaXMuc3RhdGUuYWN0aXZlTWFya2VyfVxuXHRcdFx0XHQgICAgICAgICAgdmlzaWJsZT17dGhpcy5zdGF0ZS5zaG93aW5nSW5mb1dpbmRvd30+XG5cdFx0XHRcdCAgICAgICAgICAgIDxkaXY+XG5cdFx0XHRcdCAgICAgICAgICAgICAgPGgxPnt0aGlzLnN0YXRlLnNlbGVjdGVkUGxhY2UubmFtZX08L2gxPlxuXHRcdFx0XHQgICAgICAgICAgICAgIDxoMz57dGhpcy5zdGF0ZS5waG9uZU51bWJlcn08L2gzPlxuXHRcdFx0XHQgICAgICAgICAgICAgIDxwPnt0aGlzLnN0YXRlLmRlc2NyaXB0aW9ufTwvcD5cblx0XHRcdFx0ICAgICAgICAgICAgPC9kaXY+XG5cdFx0XHRcdCAgICAgICAgPC9JbmZvV2luZG93PlxuXG5cdFx0XHRcdFx0XHRcdDwvTWFwPlxuXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdDwvTGF5b3V0PlxuXG5cblxuXG5cblx0XHQpO1xuXG5cblx0fVxuXG59XG5cblxuY29uc3QgTG9hZGluZ0NvbnRhaW5lciA9IChwcm9wcykgPT4gKFxuPGRpdj5cblxuXHQ8c3R5bGUganN4PntgXG5cblx0XHQubG9hZGluZyB7XG5cdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdGhlaWdodDogMTAwJTtcblx0XHRcdHBhZGRpbmctdG9wOiAzMCU7XG5cdFx0XHRwYWRkaW5nLWxlZnQ6MjVweDtcblx0XHRcdGZvbnQtc2l6ZTogMjJweDtcblx0XHRcdFx0XHQvLyB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHRmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuXHRcdH1cblxuXHRcdEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG5cdFx0XHQubG9hZGluZyB7XG5cdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0dG9wOiAwO1xuXHRcdFx0XHRsZWZ0OiAwO1xuXG5cdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMjZweDtcblx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0XHRwYWRkaW5nLXRvcDogNDR2aDtcblx0XHRcdFx0Y29sb3I6IGJsYWNrO1xuXHRcdFx0XHRmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuXHRcdFx0XHR0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZS1vdXQ7XG5cdFx0XHR9XG5cblx0XHR9XG5cblxuXG5cblx0YH08L3N0eWxlPlxuXG5cdDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZ1wiPkxvYWRpbmcgUmVzdWx0cy4uLjwvZGl2PlxuPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IEdvb2dsZUFwaVdyYXBwZXIoe1xuICBhcGlLZXk6ICdBSXphU3lBVHhfZGhMdkdDSzZUcUwwczhvQlE3cmkwbElpOUdQU1knLFxuXHRMb2FkaW5nQ29udGFpbmVyOiBMb2FkaW5nQ29udGFpbmVyXG59KShNYXBweSlcbiJdfQ== */\n/*@ sourceURL=/Users/jbabak/Sites/dcapp/web/pages/map.js */",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3677574924" + " " + "loading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246
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
//# sourceMappingURL=map.js.dcaec545b3f508f4fc25.hot-update.js.map