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
    // maxHeight: '78vh',
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
      return _this.setState({
        selectedPlace: props,
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
          onClick: _this2.onMarkerClick,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          },
          __self: this
        });
      });
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_comps_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "845518594",
        css: ".map.jsx-845518594{width:100%;height:100%;max-height:60%;overflow:hidden;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYmFiYWsvU2l0ZXMvZGNhcHAvd2ViL3BhZ2VzL21hcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvR2tCLEFBR29CLFdBQ0MsWUFDRSxlQUVFLGdCQUNqQiIsImZpbGUiOiIvVXNlcnMvamJhYmFrL1NpdGVzL2RjYXBwL3dlYi9wYWdlcy9tYXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBzL0hlYWRlcidcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcHMvTGF5b3V0J1xuaW1wb3J0IHsgTWFwLCBJbmZvV2luZG93LCBNYXJrZXIsIEdvb2dsZUFwaVdyYXBwZXIgfSBmcm9tICdnb29nbGUtbWFwcy1yZWFjdCc7XG5cbmNvbnN0IG1hcFN0eWxlID0ge1xuXHRtYXA6IHtcblx0XHR3aWR0aDogJzEwMCUnLFxuXHRcdGhlaWdodDogJzEwMCUnLFxuXHRcdC8vIG1heEhlaWdodDogJzc4dmgnLFxuXHRcdC8vIG1heEhlaWdodDogJzc0MHB4Jyxcblx0XHRvdmVyZmxvdzogJ2hpZGRlbidcblx0fSxcbn1cblxuXG5leHBvcnQgY2xhc3MgTWFwcHkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdGRhdGE6IFtdLFxuXHRcdFx0c2hvd2luZ0luZm9XaW5kb3c6IGZhbHNlLFxuXHRcdFx0YWN0aXZlTWFya2VyOiB7fSxcblx0XHRcdHNlbGVjdGVkUGxhY2U6IHt9LFxuXHRcdH07XG5cblx0XHQvLyB0aGlzLmNvbXBvbmVudERpZE1vdW50ID0gdGhpcy5jb21wb25lbnREaWRNb3VudC5iaW5kKHRoaXMpO1xuICB9XG5cblxuXHRjb21wb25lbnRXaWxsTW91bnQgPSAoKSA9PiB7XG5cblx0XHRheGlvcy5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9zdG9yZXMnKVxuXHRcdFx0LnRoZW4ocmVzcG9uc2UgPT4ge1xuXG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdGRhdGE6IHJlc3BvbnNlLmRhdGFcblx0XHRcdFx0fSk7XG5cblx0XHRcdH0pXG5cdFx0XHQuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcblx0XHRcdH0pO1xuXG5cblx0fVxuXG5cdGNvbXBvbmVudERpZE1vdW50ID0gKCkgPT4ge1xuXG5cblxuXG5cdH1cblxuXHRvbk1hcmtlckNsaWNrID0gKHByb3BzLCBtYXJrZXIsIGUpID0+XG5cdHRoaXMuc2V0U3RhdGUoe1xuXHRcdHNlbGVjdGVkUGxhY2U6IHByb3BzLFxuXHRcdGFjdGl2ZU1hcmtlcjogbWFya2VyLFxuXHRcdHNob3dpbmdJbmZvV2luZG93OiB0cnVlXG5cdH0pO1xuXG5cdG9uTWFwQ2xpY2tlZCA9IChwcm9wcykgPT4ge1xuXHRpZiAodGhpcy5zdGF0ZS5zaG93aW5nSW5mb1dpbmRvdykge1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0c2hvd2luZ0luZm9XaW5kb3c6IGZhbHNlLFxuXHRcdFx0YWN0aXZlTWFya2VyOiBudWxsXG5cdFx0fSlcblx0fVxufTtcblxuXHRyZW5kZXIoKSB7XG5cblx0XHRcdFx0dmFyIHN0b3JlcyA9IHRoaXMuc3RhdGUuZGF0YTtcblx0XHRcdFx0Y29uc29sZS5sb2coc3RvcmVzKTtcblxuXHRcdFx0XHRjb25zdCBsaXN0SXRlbXMgPSBzdG9yZXMubWFwKChzdG9yZSkgPT5cblx0XHRcdFx0XHRcdFx0XHQ8TWFya2VyXG5cdFx0XHRcdFx0XHRcdFx0XHRrZXk9e3N0b3JlLl9pZH1cblx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9e3N0b3JlLm5hbWV9XG5cdFx0XHRcdFx0XHRcdFx0XHRwb3NpdGlvbj17e2xhdDogc3RvcmUuYWRkcmVzcy5sYXQsIGxuZzogc3RvcmUuYWRkcmVzcy5sb25nfX1cblx0XHRcdFx0XHRcdFx0XHRcdGljb249e3tcblx0XHRcdFx0XHRcdFx0XHRcdFx0dXJsOiBcIi9zdGF0aWMvbWFya2VyX2N1c3RvbS5zdmdcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0YW5jaG9yOiBuZXcgZ29vZ2xlLm1hcHMuUG9pbnQoMzIsMzIpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzY2FsZWRTaXplOiBuZXcgZ29vZ2xlLm1hcHMuU2l6ZSg2NCw2NClcblx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXt0aGlzLm9uTWFya2VyQ2xpY2t9XG5cdFx0XHRcdFx0XHRcdFx0IC8+XG5cblx0XHRcdFx0XHRcdFx0KTtcblxuXG5cblxuXHRcdHJldHVybiAoXG5cblxuXHRcdFx0XHRcdDxMYXlvdXQ+XG5cdFx0XHRcdFx0XHQ8c3R5bGUganN4PntgXG5cdFx0XHRcdFx0XHRcdC5tYXAge1xuXHRcdFx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdFx0XHRcdGhlaWdodDogMTAwJTtcblx0XHRcdFx0XHRcdFx0XHRtYXgtaGVpZ2h0OjYwJTtcblx0XHRcdFx0XHRcdFx0XHQvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAyNzY2O1xuXHRcdFx0XHRcdFx0XHRcdG92ZXJmbG93OiBoaWRkZW47XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0YH08L3N0eWxlPlxuXG5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWFwXCI+XG5cblx0XHRcdFx0XHRcdFx0PE1hcFxuXHRcdFx0XHRcdFx0XHRcdGdvb2dsZT17dGhpcy5wcm9wcy5nb29nbGV9XG5cdFx0XHRcdFx0XHRcdFx0c3R5bGU9e21hcFN0eWxlLm1hcH1cblx0XHRcdFx0XHRcdFx0XHRpbml0aWFsQ2VudGVyPXt7XG5cdFx0XHRcdFx0XHRcdFx0XHRsYXQ6IDI1LjI2NzM2OSxcblx0XHRcdFx0XHRcdFx0XHRcdGxuZzogNTEuNTI5NDUxXG5cdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHR6b29tPXsxNH1cblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdHtsaXN0SXRlbXN9XG5cblx0XHRcdFx0XHRcdFx0XHQ8TWFya2VyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aXRsZT17J1RoZSBtYXJrZXJgcyB0aXRsZSB3aWxsIGFwcGVhciBhcyBhIHRvb2x0aXAuJ31cblx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9eydTT01BJ31cblx0XHRcdFx0XHRcdFx0XHRcdHBvc2l0aW9uPXt7bGF0OiAyNS4yNjI4MTEsIGxuZzogNTEuNTMyMDk0fX1cblx0XHRcdFx0XHRcdFx0XHRcdGljb249e3tcblx0XHRcdFx0XHRcdFx0ICAgICAgdXJsOiBcIi9zdGF0aWMvbWFya2VyX2N1c3RvbS5zdmdcIixcblx0XHRcdFx0XHRcdFx0ICAgICAgYW5jaG9yOiBuZXcgZ29vZ2xlLm1hcHMuUG9pbnQoMzIsMzIpLFxuXHRcdFx0XHRcdFx0XHQgICAgICBzY2FsZWRTaXplOiBuZXcgZ29vZ2xlLm1hcHMuU2l6ZSg2NCw2NClcblx0XHRcdFx0XHRcdFx0ICAgIH19XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXt0aGlzLm9uTWFya2VyQ2xpY2t9XG5cdFx0XHRcdFx0XHRcdFx0IC8+XG5cblx0XHRcdFx0XHRcdFx0XHQ8TWFya2VyXG5cdFx0XHRcdFx0XHRcdCAgICBuYW1lPXsnRG9sb3JlcyBwYXJrJ31cblx0XHRcdFx0XHRcdFx0ICAgIHBvc2l0aW9uPXt7bGF0OiAyNS4yNzAzOTgsIGxuZzogNTEuNTI0NzIzfX1cblx0XHRcdFx0XHRcdFx0XHRcdGljb249e3tcblx0XHRcdFx0XHRcdFx0XHRcdFx0dXJsOiBcIi9zdGF0aWMvbWFya2VyX2N1c3RvbS5zdmdcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0YW5jaG9yOiBuZXcgZ29vZ2xlLm1hcHMuUG9pbnQoMzIsMzIpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzY2FsZWRTaXplOiBuZXcgZ29vZ2xlLm1hcHMuU2l6ZSg2NCw2NClcblx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXt0aGlzLm9uTWFya2VyQ2xpY2t9XG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0ICA8TWFya2VyIC8+XG5cblx0XHRcdFx0XHRcdFx0XHQ8TWFya2VyXG5cdFx0XHRcdFx0XHRcdCAgICBuYW1lPXsnRG9sb3JlcyBwYXJrJ31cblx0XHRcdFx0XHRcdFx0ICAgIHBvc2l0aW9uPXt7bGF0OiAyNS4zMDI3ODYsIGxuZzogNTEuNTEyMjEyfX1cblx0XHRcdFx0XHRcdFx0XHRcdGljb249e3tcblx0XHRcdFx0XHRcdFx0XHRcdFx0dXJsOiBcIi9zdGF0aWMvbWFya2VyX2N1c3RvbS5zdmdcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0YW5jaG9yOiBuZXcgZ29vZ2xlLm1hcHMuUG9pbnQoMzIsMzIpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzY2FsZWRTaXplOiBuZXcgZ29vZ2xlLm1hcHMuU2l6ZSg2NCw2NClcblx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXt0aGlzLm9uTWFya2VyQ2xpY2t9XG5cdFx0XHRcdFx0XHRcdFx0IC8+XG5cdFx0XHRcdFx0XHRcdCAgPE1hcmtlciAvPlxuXG5cdFx0XHRcdFx0XHRcdFx0PE1hcmtlclxuXHRcdFx0XHRcdFx0XHQgICAgbmFtZT17J0RvbG9yZXMgcGFyayd9XG5cdFx0XHRcdFx0XHRcdCAgICBwb3NpdGlvbj17e2xhdDogMjUuMjA4OTQ1LCBsbmc6IDUxLjQ0NDU1MX19XG5cdFx0XHRcdFx0XHRcdFx0XHRpY29uPXt7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHVybDogXCIvc3RhdGljL21hcmtlcl9jdXN0b20uc3ZnXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFuY2hvcjogbmV3IGdvb2dsZS5tYXBzLlBvaW50KDMyLDMyKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0c2NhbGVkU2l6ZTogbmV3IGdvb2dsZS5tYXBzLlNpemUoNjQsNjQpXG5cdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17dGhpcy5vbk1hcmtlckNsaWNrfVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdCAgPE1hcmtlciAvPlxuXG5cdFx0XHRcdFx0XHRcdFx0PEluZm9XaW5kb3dcblx0XHRcdFx0ICAgICAgICAgIG1hcmtlcj17dGhpcy5zdGF0ZS5hY3RpdmVNYXJrZXJ9XG5cdFx0XHRcdCAgICAgICAgICB2aXNpYmxlPXt0aGlzLnN0YXRlLnNob3dpbmdJbmZvV2luZG93fT5cblx0XHRcdFx0ICAgICAgICAgICAgPGRpdj5cblx0XHRcdFx0ICAgICAgICAgICAgICA8aDE+e3RoaXMuc3RhdGUuc2VsZWN0ZWRQbGFjZS5uYW1lfTwvaDE+XG5cdFx0XHRcdCAgICAgICAgICAgIDwvZGl2PlxuXHRcdFx0XHQgICAgICAgIDwvSW5mb1dpbmRvdz5cblxuXHRcdFx0XHRcdFx0XHQ8L01hcD5cblxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHQ8L0xheW91dD5cblxuXG5cblxuXG5cdFx0KTtcblxuXG5cdH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBHb29nbGVBcGlXcmFwcGVyKHtcbiAgYXBpS2V5OiAnQUl6YVN5QVR4X2RoTHZHQ0s2VHFMMHM4b0JRN3JpMGxJaTlHUFNZJ1xufSkoTWFwcHkpXG4iXX0= */\n/*@ sourceURL=/Users/jbabak/Sites/dcapp/web/pages/map.js */",
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-845518594" + " " + "map",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(google_maps_react__WEBPACK_IMPORTED_MODULE_5__["Map"], {
        google: this.props.google,
        style: mapStyle.map,
        initialCenter: {
          lat: 25.267369,
          lng: 51.529451
        },
        zoom: 14,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
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
        },
        onClick: this.onMarkerClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
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
        },
        onClick: this.onMarkerClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(google_maps_react__WEBPACK_IMPORTED_MODULE_5__["Marker"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
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
        },
        onClick: this.onMarkerClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(google_maps_react__WEBPACK_IMPORTED_MODULE_5__["Marker"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
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
        },
        onClick: this.onMarkerClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(google_maps_react__WEBPACK_IMPORTED_MODULE_5__["Marker"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(google_maps_react__WEBPACK_IMPORTED_MODULE_5__["InfoWindow"], {
        marker: this.state.activeMarker,
        visible: this.state.showingInfoWindow,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-845518594",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: "jsx-845518594",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        },
        __self: this
      }, this.state.selectedPlace.name))))));
    }
  }]);

  return Mappy;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);
/* harmony default export */ __webpack_exports__["default"] = (Object(google_maps_react__WEBPACK_IMPORTED_MODULE_5__["GoogleApiWrapper"])({
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
//# sourceMappingURL=map.js.cf5802e89bb1ba9c5c28.hot-update.js.map