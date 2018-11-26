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
    maxHeight: '78vh',
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
        phoneNumber: props.store.phoneNumber ? props.store.phoneNumber : "No Data",
        description: props.store.description ? props.store.phoneNumber : "No Data",
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
      var mapOptions = {
        styles: [{
          "featureType": "administrative",
          "elementType": "all",
          "stylers": [{
            "saturation": "-100"
          }]
        }, {
          "featureType": "administrative.province",
          "elementType": "all",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "featureType": "landscape",
          "elementType": "all",
          "stylers": [{
            "saturation": -100
          }, {
            "lightness": 65
          }, {
            "visibility": "on"
          }]
        }, {
          "featureType": "poi",
          "elementType": "all",
          "stylers": [{
            "saturation": -100
          }, {
            "lightness": "50"
          }, {
            "visibility": "simplified"
          }]
        }, {
          "featureType": "road",
          "elementType": "all",
          "stylers": [{
            "saturation": "-100"
          }]
        }, {
          "featureType": "road.highway",
          "elementType": "all",
          "stylers": [{
            "visibility": "simplified"
          }]
        }, {
          "featureType": "road.arterial",
          "elementType": "all",
          "stylers": [{
            "lightness": "30"
          }]
        }, {
          "featureType": "road.local",
          "elementType": "all",
          "stylers": [{
            "lightness": "40"
          }]
        }, {
          "featureType": "transit",
          "elementType": "all",
          "stylers": [{
            "saturation": -100
          }, {
            "visibility": "simplified"
          }]
        }, {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [{
            "hue": "#ffff00"
          }, {
            "lightness": -25
          }, {
            "saturation": -97
          }]
        }, {
          "featureType": "water",
          "elementType": "labels",
          "stylers": [{
            "lightness": -25
          }, {
            "saturation": -100
          }]
        }] // straight out of something like snazzymaps

      };
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_comps_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "1138185900",
        css: ".map.jsx-1138185900{width:100%;height:100%;overflow:hidden;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYmFiYWsvU2l0ZXMvZGNhcHAvd2ViL3BhZ2VzL21hcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1T2tCLEFBR29CLFdBQ0MsWUFHSSxnQkFDakIiLCJmaWxlIjoiL1VzZXJzL2piYWJhay9TaXRlcy9kY2FwcC93ZWIvcGFnZXMvbWFwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wcy9IZWFkZXInXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBzL0xheW91dCdcbmltcG9ydCB7IE1hcCwgSW5mb1dpbmRvdywgTWFya2VyLCBHb29nbGVBcGlXcmFwcGVyIH0gZnJvbSAnZ29vZ2xlLW1hcHMtcmVhY3QnO1xuXG5jb25zdCBtYXBTdHlsZSA9IHtcblx0bWFwOiB7XG5cdFx0d2lkdGg6ICcxMDAlJyxcblx0XHRoZWlnaHQ6ICcxMDAlJyxcblx0XHRtYXhIZWlnaHQ6ICc3OHZoJyxcblx0XHQvLyBtYXhIZWlnaHQ6ICc3NDBweCcsXG5cdFx0b3ZlcmZsb3c6ICdoaWRkZW4nXG5cdH0sXG59XG5cblxuZXhwb3J0IGNsYXNzIE1hcHB5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRkYXRhOiBbXSxcblx0XHRcdHNob3dpbmdJbmZvV2luZG93OiBmYWxzZSxcblx0XHRcdGFjdGl2ZU1hcmtlcjoge30sXG5cdFx0XHRzZWxlY3RlZFBsYWNlOiB7fSxcblx0XHR9O1xuXG5cdFx0Ly8gdGhpcy5jb21wb25lbnREaWRNb3VudCA9IHRoaXMuY29tcG9uZW50RGlkTW91bnQuYmluZCh0aGlzKTtcbiAgfVxuXG5cblx0Y29tcG9uZW50V2lsbE1vdW50ID0gKCkgPT4ge1xuXG5cdFx0YXhpb3MuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjUwMDAvc3RvcmVzJylcblx0XHRcdC50aGVuKHJlc3BvbnNlID0+IHtcblxuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRkYXRhOiByZXNwb25zZS5kYXRhXG5cdFx0XHRcdH0pO1xuXG5cdFx0XHR9KVxuXHRcdFx0LmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XG5cdFx0XHR9KTtcblxuXG5cdH1cblxuXHRjb21wb25lbnREaWRNb3VudCA9ICgpID0+IHtcblxuXG5cblxuXHR9XG5cblx0b25NYXJrZXJDbGljayA9IChwcm9wcywgbWFya2VyLCBlKSA9PiB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRzZWxlY3RlZFBsYWNlOiBwcm9wcyxcblx0XHRcdHN0b3JlSW5mbzogcHJvcHMuc3RvcmUsXG5cdFx0XHRwaG9uZU51bWJlcjogcHJvcHMuc3RvcmUucGhvbmVOdW1iZXIgPyBwcm9wcy5zdG9yZS5waG9uZU51bWJlciA6IFwiTm8gRGF0YVwiLFxuXHRcdFx0ZGVzY3JpcHRpb246IHByb3BzLnN0b3JlLmRlc2NyaXB0aW9uID8gcHJvcHMuc3RvcmUucGhvbmVOdW1iZXIgOiBcIk5vIERhdGFcIixcblx0XHRcdGFjdGl2ZU1hcmtlcjogbWFya2VyLFxuXHRcdFx0c2hvd2luZ0luZm9XaW5kb3c6IHRydWVcblx0XHR9KTtcblx0fVxuXG5cdG9uTWFwQ2xpY2tlZCA9IChwcm9wcykgPT4ge1xuXHRcdGlmICh0aGlzLnN0YXRlLnNob3dpbmdJbmZvV2luZG93KSB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0c2hvd2luZ0luZm9XaW5kb3c6IGZhbHNlLFxuXHRcdFx0XHRhY3RpdmVNYXJrZXI6IG51bGxcblx0XHRcdH0pXG5cdFx0fVxuXHR9O1xuXG5cdHJlbmRlcigpIHtcblxuXHRcdFx0XHR2YXIgc3RvcmVzID0gdGhpcy5zdGF0ZS5kYXRhO1xuXHRcdFx0XHRjb25zb2xlLmxvZyhzdG9yZXMpO1xuXG5cdFx0XHRcdGNvbnN0IGxpc3RJdGVtcyA9IHN0b3Jlcy5tYXAoKHN0b3JlKSA9PlxuXHRcdFx0XHRcdFx0XHRcdDxNYXJrZXJcblx0XHRcdFx0XHRcdFx0XHRcdGtleT17c3RvcmUuX2lkfVxuXHRcdFx0XHRcdFx0XHRcdFx0bmFtZT17c3RvcmUubmFtZX1cblx0XHRcdFx0XHRcdFx0XHRcdHBvc2l0aW9uPXt7bGF0OiBzdG9yZS5hZGRyZXNzLmxhdCwgbG5nOiBzdG9yZS5hZGRyZXNzLmxvbmd9fVxuXHRcdFx0XHRcdFx0XHRcdFx0aWNvbj17e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR1cmw6IFwiL3N0YXRpYy9tYXJrZXJfY3VzdG9tLnN2Z1wiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRhbmNob3I6IG5ldyBnb29nbGUubWFwcy5Qb2ludCgzMiwzMiksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNjYWxlZFNpemU6IG5ldyBnb29nbGUubWFwcy5TaXplKDY0LDY0KVxuXHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRcdHN0b3JlPXtzdG9yZX1cblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e3RoaXMub25NYXJrZXJDbGlja31cblx0XHRcdFx0XHRcdFx0XHQgLz5cblxuXHRcdFx0XHRcdFx0XHQpO1xuXG5cdFx0XHRjb25zdCBtYXBPcHRpb25zID0ge1xuXHQgICAgICAgICBzdHlsZXM6IFtcblx0XHRcdFx0XHRcdFx0XHRcdCAgICB7XG5cdFx0XHRcdFx0XHRcdFx0XHQgICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJhZG1pbmlzdHJhdGl2ZVwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0ICAgICAgICBcImVsZW1lbnRUeXBlXCI6IFwiYWxsXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHQgICAgICAgIFwic3R5bGVyc1wiOiBbXG5cdFx0XHRcdFx0XHRcdFx0XHQgICAgICAgICAgICB7XG5cdFx0XHRcdFx0XHRcdFx0XHQgICAgICAgICAgICAgICAgXCJzYXR1cmF0aW9uXCI6IFwiLTEwMFwiXG5cdFx0XHRcdFx0XHRcdFx0XHQgICAgICAgICAgICB9XG5cdFx0XHRcdFx0XHRcdFx0XHQgICAgICAgIF1cblx0XHRcdFx0XHRcdFx0XHRcdCAgICB9LFxuXHRcdFx0XHRcdFx0XHRcdFx0ICAgIHtcblx0XHRcdFx0XHRcdFx0XHRcdCAgICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcImFkbWluaXN0cmF0aXZlLnByb3ZpbmNlXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHQgICAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJhbGxcIixcblx0XHRcdFx0XHRcdFx0XHRcdCAgICAgICAgXCJzdHlsZXJzXCI6IFtcblx0XHRcdFx0XHRcdFx0XHRcdCAgICAgICAgICAgIHtcblx0XHRcdFx0XHRcdFx0XHRcdCAgICAgICAgICAgICAgICBcInZpc2liaWxpdHlcIjogXCJvZmZcIlxuXHRcdFx0XHRcdFx0XHRcdFx0ICAgICAgICAgICAgfVxuXHRcdFx0XHRcdFx0XHRcdFx0ICAgICAgICBdXG5cdFx0XHRcdFx0XHRcdFx0XHQgICAgfSxcblx0XHRcdFx0XHRcdFx0XHRcdCAgICB7XG5cdFx0XHRcdFx0XHRcdFx0XHQgICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJsYW5kc2NhcGVcIixcblx0XHRcdFx0XHRcdFx0XHRcdCAgICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImFsbFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0ICAgICAgICBcInN0eWxlcnNcIjogW1xuXHRcdFx0XHRcdFx0XHRcdFx0ICAgICAgICAgICAge1xuXHRcdFx0XHRcdFx0XHRcdFx0ICAgICAgICAgICAgICAgIFwic2F0dXJhdGlvblwiOiAtMTAwXG5cdFx0XHRcdFx0XHRcdFx0XHQgICAgICAgICAgICB9LFxuXHRcdFx0XHRcdFx0XHRcdFx0ICAgICAgICAgICAge1xuXHRcdFx0XHRcdFx0XHRcdFx0ICAgICAgICAgICAgICAgIFwibGlnaHRuZXNzXCI6IDY1XG5cdFx0XHRcdFx0XHRcdFx0XHQgICAgICAgICAgICB9LFxuXHRcdFx0XHRcdFx0XHRcdFx0ICAgICAgICAgICAge1xuXHRcdFx0XHRcdFx0XHRcdFx0ICAgICAgICAgICAgICAgIFwidmlzaWJpbGl0eVwiOiBcIm9uXCJcblx0XHRcdFx0XHRcdFx0XHRcdCAgICAgICAgICAgIH1cblx0XHRcdFx0XHRcdFx0XHRcdCAgICAgICAgXVxuXHRcdFx0XHRcdFx0XHRcdFx0ICAgIH0sXG5cdFx0XHRcdFx0XHRcdFx0XHQgICAge1xuXHRcdFx0XHRcdFx0XHRcdFx0ICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwicG9pXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHQgICAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJhbGxcIixcblx0XHRcdFx0XHRcdFx0XHRcdCAgICAgICAgXCJzdHlsZXJzXCI6IFtcblx0XHRcdFx0XHRcdFx0XHRcdCAgICAgICAgICAgIHtcblx0XHRcdFx0XHRcdFx0XHRcdCAgICAgICAgICAgICAgICBcInNhdHVyYXRpb25cIjogLTEwMFxuXHRcdFx0XHRcdFx0XHRcdFx0ICAgICAgICAgICAgfSxcblx0XHRcdFx0XHRcdFx0XHRcdCAgICAgICAgICAgIHtcblx0XHRcdFx0XHRcdFx0XHRcdCAgICAgICAgICAgICAgICBcImxpZ2h0bmVzc1wiOiBcIjUwXCJcblx0XHRcdFx0XHRcdFx0XHRcdCAgICAgICAgICAgIH0sXG5cdFx0XHRcdFx0XHRcdFx0XHQgICAgICAgICAgICB7XG5cdFx0XHRcdFx0XHRcdFx0XHQgICAgICAgICAgICAgICAgXCJ2aXNpYmlsaXR5XCI6IFwic2ltcGxpZmllZFwiXG5cdFx0XHRcdFx0XHRcdFx0XHQgICAgICAgICAgICB9XG5cdFx0XHRcdFx0XHRcdFx0XHQgICAgICAgIF1cblx0XHRcdFx0XHRcdFx0XHRcdCAgICB9LFxuXHRcdFx0XHRcdFx0XHRcdFx0ICAgIHtcblx0XHRcdFx0XHRcdFx0XHRcdCAgICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWRcIixcblx0XHRcdFx0XHRcdFx0XHRcdCAgICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImFsbFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0ICAgICAgICBcInN0eWxlcnNcIjogW1xuXHRcdFx0XHRcdFx0XHRcdFx0ICAgICAgICAgICAge1xuXHRcdFx0XHRcdFx0XHRcdFx0ICAgICAgICAgICAgICAgIFwic2F0dXJhdGlvblwiOiBcIi0xMDBcIlxuXHRcdFx0XHRcdFx0XHRcdFx0ICAgICAgICAgICAgfVxuXHRcdFx0XHRcdFx0XHRcdFx0ICAgICAgICBdXG5cdFx0XHRcdFx0XHRcdFx0XHQgICAgfSxcblx0XHRcdFx0XHRcdFx0XHRcdCAgICB7XG5cdFx0XHRcdFx0XHRcdFx0XHQgICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJyb2FkLmhpZ2h3YXlcIixcblx0XHRcdFx0XHRcdFx0XHRcdCAgICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImFsbFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0ICAgICAgICBcInN0eWxlcnNcIjogW1xuXHRcdFx0XHRcdFx0XHRcdFx0ICAgICAgICAgICAge1xuXHRcdFx0XHRcdFx0XHRcdFx0ICAgICAgICAgICAgICAgIFwidmlzaWJpbGl0eVwiOiBcInNpbXBsaWZpZWRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0ICAgICAgICAgICAgfVxuXHRcdFx0XHRcdFx0XHRcdFx0ICAgICAgICBdXG5cdFx0XHRcdFx0XHRcdFx0XHQgICAgfSxcblx0XHRcdFx0XHRcdFx0XHRcdCAgICB7XG5cdFx0XHRcdFx0XHRcdFx0XHQgICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJyb2FkLmFydGVyaWFsXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHQgICAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJhbGxcIixcblx0XHRcdFx0XHRcdFx0XHRcdCAgICAgICAgXCJzdHlsZXJzXCI6IFtcblx0XHRcdFx0XHRcdFx0XHRcdCAgICAgICAgICAgIHtcblx0XHRcdFx0XHRcdFx0XHRcdCAgICAgICAgICAgICAgICBcImxpZ2h0bmVzc1wiOiBcIjMwXCJcblx0XHRcdFx0XHRcdFx0XHRcdCAgICAgICAgICAgIH1cblx0XHRcdFx0XHRcdFx0XHRcdCAgICAgICAgXVxuXHRcdFx0XHRcdFx0XHRcdFx0ICAgIH0sXG5cdFx0XHRcdFx0XHRcdFx0XHQgICAge1xuXHRcdFx0XHRcdFx0XHRcdFx0ICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwicm9hZC5sb2NhbFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0ICAgICAgICBcImVsZW1lbnRUeXBlXCI6IFwiYWxsXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHQgICAgICAgIFwic3R5bGVyc1wiOiBbXG5cdFx0XHRcdFx0XHRcdFx0XHQgICAgICAgICAgICB7XG5cdFx0XHRcdFx0XHRcdFx0XHQgICAgICAgICAgICAgICAgXCJsaWdodG5lc3NcIjogXCI0MFwiXG5cdFx0XHRcdFx0XHRcdFx0XHQgICAgICAgICAgICB9XG5cdFx0XHRcdFx0XHRcdFx0XHQgICAgICAgIF1cblx0XHRcdFx0XHRcdFx0XHRcdCAgICB9LFxuXHRcdFx0XHRcdFx0XHRcdFx0ICAgIHtcblx0XHRcdFx0XHRcdFx0XHRcdCAgICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInRyYW5zaXRcIixcblx0XHRcdFx0XHRcdFx0XHRcdCAgICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImFsbFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0ICAgICAgICBcInN0eWxlcnNcIjogW1xuXHRcdFx0XHRcdFx0XHRcdFx0ICAgICAgICAgICAge1xuXHRcdFx0XHRcdFx0XHRcdFx0ICAgICAgICAgICAgICAgIFwic2F0dXJhdGlvblwiOiAtMTAwXG5cdFx0XHRcdFx0XHRcdFx0XHQgICAgICAgICAgICB9LFxuXHRcdFx0XHRcdFx0XHRcdFx0ICAgICAgICAgICAge1xuXHRcdFx0XHRcdFx0XHRcdFx0ICAgICAgICAgICAgICAgIFwidmlzaWJpbGl0eVwiOiBcInNpbXBsaWZpZWRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0ICAgICAgICAgICAgfVxuXHRcdFx0XHRcdFx0XHRcdFx0ICAgICAgICBdXG5cdFx0XHRcdFx0XHRcdFx0XHQgICAgfSxcblx0XHRcdFx0XHRcdFx0XHRcdCAgICB7XG5cdFx0XHRcdFx0XHRcdFx0XHQgICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJ3YXRlclwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0ICAgICAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnlcIixcblx0XHRcdFx0XHRcdFx0XHRcdCAgICAgICAgXCJzdHlsZXJzXCI6IFtcblx0XHRcdFx0XHRcdFx0XHRcdCAgICAgICAgICAgIHtcblx0XHRcdFx0XHRcdFx0XHRcdCAgICAgICAgICAgICAgICBcImh1ZVwiOiBcIiNmZmZmMDBcIlxuXHRcdFx0XHRcdFx0XHRcdFx0ICAgICAgICAgICAgfSxcblx0XHRcdFx0XHRcdFx0XHRcdCAgICAgICAgICAgIHtcblx0XHRcdFx0XHRcdFx0XHRcdCAgICAgICAgICAgICAgICBcImxpZ2h0bmVzc1wiOiAtMjVcblx0XHRcdFx0XHRcdFx0XHRcdCAgICAgICAgICAgIH0sXG5cdFx0XHRcdFx0XHRcdFx0XHQgICAgICAgICAgICB7XG5cdFx0XHRcdFx0XHRcdFx0XHQgICAgICAgICAgICAgICAgXCJzYXR1cmF0aW9uXCI6IC05N1xuXHRcdFx0XHRcdFx0XHRcdFx0ICAgICAgICAgICAgfVxuXHRcdFx0XHRcdFx0XHRcdFx0ICAgICAgICBdXG5cdFx0XHRcdFx0XHRcdFx0XHQgICAgfSxcblx0XHRcdFx0XHRcdFx0XHRcdCAgICB7XG5cdFx0XHRcdFx0XHRcdFx0XHQgICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJ3YXRlclwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0ICAgICAgICBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHQgICAgICAgIFwic3R5bGVyc1wiOiBbXG5cdFx0XHRcdFx0XHRcdFx0XHQgICAgICAgICAgICB7XG5cdFx0XHRcdFx0XHRcdFx0XHQgICAgICAgICAgICAgICAgXCJsaWdodG5lc3NcIjogLTI1XG5cdFx0XHRcdFx0XHRcdFx0XHQgICAgICAgICAgICB9LFxuXHRcdFx0XHRcdFx0XHRcdFx0ICAgICAgICAgICAge1xuXHRcdFx0XHRcdFx0XHRcdFx0ICAgICAgICAgICAgICAgIFwic2F0dXJhdGlvblwiOiAtMTAwXG5cdFx0XHRcdFx0XHRcdFx0XHQgICAgICAgICAgICB9XG5cdFx0XHRcdFx0XHRcdFx0XHQgICAgICAgIF1cblx0XHRcdFx0XHRcdFx0XHRcdCAgICB9XG5cdFx0XHRcdFx0XHRcdFx0XHRdIC8vIHN0cmFpZ2h0IG91dCBvZiBzb21ldGhpbmcgbGlrZSBzbmF6enltYXBzXG5cdCAgICAgfTtcblxuXG5cdFx0cmV0dXJuIChcblxuXG5cdFx0XHRcdFx0PExheW91dD5cblx0XHRcdFx0XHRcdDxzdHlsZSBqc3g+e2Bcblx0XHRcdFx0XHRcdFx0Lm1hcCB7XG5cdFx0XHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0XHRcdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdFx0XHRcdFx0XHRcdC8vIG1heC1oZWlnaHQ6NjAlO1xuXHRcdFx0XHRcdFx0XHRcdC8vIGJhY2tncm91bmQtY29sb3I6ICMwMDI3NjY7XG5cdFx0XHRcdFx0XHRcdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRgfTwvc3R5bGU+XG5cblxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtYXBcIj5cblxuXHRcdFx0XHRcdFx0XHQ8TWFwXG5cdFx0XHRcdFx0XHRcdFx0Z29vZ2xlPXt0aGlzLnByb3BzLmdvb2dsZX1cblx0XHRcdFx0XHRcdFx0XHRzdHlsZT17bWFwU3R5bGUubWFwfVxuXHRcdFx0XHRcdFx0XHRcdG9wdGlvbnM9e21hcE9wdGlvbnN9XG5cdFx0XHRcdFx0XHRcdFx0aW5pdGlhbENlbnRlcj17e1xuXHRcdFx0XHRcdFx0XHRcdFx0bGF0OiAyNS4yNjczNjksXG5cdFx0XHRcdFx0XHRcdFx0XHRsbmc6IDUxLjUyOTQ1MVxuXHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0em9vbT17MTV9XG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHR7bGlzdEl0ZW1zfVxuXG5cdFx0XHRcdFx0XHRcdFx0PE1hcmtlclxuXHRcdFx0XHRcdFx0XHRcdFx0dGl0bGU9eydUaGUgbWFya2VyYHMgdGl0bGUgd2lsbCBhcHBlYXIgYXMgYSB0b29sdGlwLid9XG5cdFx0XHRcdFx0XHRcdFx0XHRuYW1lPXsnU09NQSd9XG5cdFx0XHRcdFx0XHRcdFx0XHRwb3NpdGlvbj17e2xhdDogMjUuMjYyODExLCBsbmc6IDUxLjUzMjA5NH19XG5cdFx0XHRcdFx0XHRcdFx0XHRpY29uPXt7XG5cdFx0XHRcdFx0XHRcdCAgICAgIHVybDogXCIvc3RhdGljL21hcmtlcl9jdXN0b20uc3ZnXCIsXG5cdFx0XHRcdFx0XHRcdCAgICAgIGFuY2hvcjogbmV3IGdvb2dsZS5tYXBzLlBvaW50KDMyLDMyKSxcblx0XHRcdFx0XHRcdFx0ICAgICAgc2NhbGVkU2l6ZTogbmV3IGdvb2dsZS5tYXBzLlNpemUoNjQsNjQpXG5cdFx0XHRcdFx0XHRcdCAgICB9fVxuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gb25DbGljaz17dGhpcy5vbk1hcmtlckNsaWNrfVxuXHRcdFx0XHRcdFx0XHRcdCAvPlxuXG5cdFx0XHRcdFx0XHRcdFx0PE1hcmtlclxuXHRcdFx0XHRcdFx0XHQgICAgbmFtZT17J0RvbG9yZXMgcGFyayd9XG5cdFx0XHRcdFx0XHRcdCAgICBwb3NpdGlvbj17e2xhdDogMjUuMjcwMzk4LCBsbmc6IDUxLjUyNDcyM319XG5cdFx0XHRcdFx0XHRcdFx0XHRpY29uPXt7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHVybDogXCIvc3RhdGljL21hcmtlcl9jdXN0b20uc3ZnXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFuY2hvcjogbmV3IGdvb2dsZS5tYXBzLlBvaW50KDMyLDMyKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0c2NhbGVkU2l6ZTogbmV3IGdvb2dsZS5tYXBzLlNpemUoNjQsNjQpXG5cdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gb25DbGljaz17dGhpcy5vbk1hcmtlckNsaWNrfVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdCAgPE1hcmtlciAvPlxuXG5cdFx0XHRcdFx0XHRcdFx0PE1hcmtlclxuXHRcdFx0XHRcdFx0XHQgICAgbmFtZT17J0RvbG9yZXMgcGFyayd9XG5cdFx0XHRcdFx0XHRcdCAgICBwb3NpdGlvbj17e2xhdDogMjUuMzAyNzg2LCBsbmc6IDUxLjUxMjIxMn19XG5cdFx0XHRcdFx0XHRcdFx0XHRpY29uPXt7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHVybDogXCIvc3RhdGljL21hcmtlcl9jdXN0b20uc3ZnXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFuY2hvcjogbmV3IGdvb2dsZS5tYXBzLlBvaW50KDMyLDMyKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0c2NhbGVkU2l6ZTogbmV3IGdvb2dsZS5tYXBzLlNpemUoNjQsNjQpXG5cdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gb25DbGljaz17dGhpcy5vbk1hcmtlckNsaWNrfVxuXHRcdFx0XHRcdFx0XHRcdCAvPlxuXHRcdFx0XHRcdFx0XHQgIDxNYXJrZXIgLz5cblxuXHRcdFx0XHRcdFx0XHRcdDxNYXJrZXJcblx0XHRcdFx0XHRcdFx0ICAgIG5hbWU9eydEb2xvcmVzIHBhcmsnfVxuXHRcdFx0XHRcdFx0XHQgICAgcG9zaXRpb249e3tsYXQ6IDI1LjIwODk0NSwgbG5nOiA1MS40NDQ1NTF9fVxuXHRcdFx0XHRcdFx0XHRcdFx0aWNvbj17e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR1cmw6IFwiL3N0YXRpYy9tYXJrZXJfY3VzdG9tLnN2Z1wiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRhbmNob3I6IG5ldyBnb29nbGUubWFwcy5Qb2ludCgzMiwzMiksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNjYWxlZFNpemU6IG5ldyBnb29nbGUubWFwcy5TaXplKDY0LDY0KVxuXHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRcdC8vIG9uQ2xpY2s9e3RoaXMub25NYXJrZXJDbGlja31cblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQgIDxNYXJrZXIgLz5cblxuXHRcdFx0XHRcdFx0XHRcdDxJbmZvV2luZG93XG5cdFx0XHRcdCAgICAgICAgICBtYXJrZXI9e3RoaXMuc3RhdGUuYWN0aXZlTWFya2VyfVxuXHRcdFx0XHQgICAgICAgICAgdmlzaWJsZT17dGhpcy5zdGF0ZS5zaG93aW5nSW5mb1dpbmRvd30+XG5cdFx0XHRcdCAgICAgICAgICAgIDxkaXY+XG5cdFx0XHRcdCAgICAgICAgICAgICAgPGgxPnt0aGlzLnN0YXRlLnNlbGVjdGVkUGxhY2UubmFtZX08L2gxPlxuXHRcdFx0XHQgICAgICAgICAgICAgIDxoMz57dGhpcy5zdGF0ZS5waG9uZU51bWJlcn08L2gzPlxuXHRcdFx0XHQgICAgICAgICAgICAgIDxwPnt0aGlzLnN0YXRlLmRlc2NyaXB0aW9ufTwvcD5cblx0XHRcdFx0ICAgICAgICAgICAgPC9kaXY+XG5cdFx0XHRcdCAgICAgICAgPC9JbmZvV2luZG93PlxuXG5cdFx0XHRcdFx0XHRcdDwvTWFwPlxuXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdDwvTGF5b3V0PlxuXG5cblxuXG5cblx0XHQpO1xuXG5cblx0fVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEdvb2dsZUFwaVdyYXBwZXIoe1xuICBhcGlLZXk6ICdBSXphU3lBVHhfZGhMdkdDSzZUcUwwczhvQlE3cmkwbElpOUdQU1knXG59KShNYXBweSlcbiJdfQ== */\n/*@ sourceURL=/Users/jbabak/Sites/dcapp/web/pages/map.js */",
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1138185900" + " " + "map",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 244
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(google_maps_react__WEBPACK_IMPORTED_MODULE_5__["Map"], {
        google: this.props.google,
        style: mapStyle.map,
        options: mapOptions,
        initialCenter: {
          lat: 25.267369,
          lng: 51.529451
        },
        zoom: 15,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246
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
          lineNumber: 258
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
          lineNumber: 270
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(google_maps_react__WEBPACK_IMPORTED_MODULE_5__["Marker"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 280
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
          lineNumber: 282
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(google_maps_react__WEBPACK_IMPORTED_MODULE_5__["Marker"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 292
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
          lineNumber: 294
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(google_maps_react__WEBPACK_IMPORTED_MODULE_5__["Marker"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 304
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(google_maps_react__WEBPACK_IMPORTED_MODULE_5__["InfoWindow"], {
        marker: this.state.activeMarker,
        visible: this.state.showingInfoWindow,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 306
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1138185900",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 309
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: "jsx-1138185900",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 310
        },
        __self: this
      }, this.state.selectedPlace.name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
        className: "jsx-1138185900",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 311
        },
        __self: this
      }, this.state.phoneNumber), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-1138185900",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 312
        },
        __self: this
      }, this.state.description))))));
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
//# sourceMappingURL=map.js.02551232d492b608b1a7.hot-update.js.map