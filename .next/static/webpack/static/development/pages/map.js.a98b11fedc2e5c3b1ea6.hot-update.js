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
          address: props.store.address.address ? props.store.address.address : 'No Address Found',
          address2: props.store.address.address2 ? props.store.address.address2 : 'No Address Found'
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
        css: ".map.jsx-3157543875{width:100%;height:100%;overflow:hidden;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYmFiYWsvU2l0ZXMvZGNhcHAvd2ViL3BhZ2VzL21hcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyR2tCLEFBR29CLFdBQ0MsWUFJSSxnQkFFakIiLCJmaWxlIjoiL1VzZXJzL2piYWJhay9TaXRlcy9kY2FwcC93ZWIvcGFnZXMvbWFwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wcy9IZWFkZXInXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBzL0xheW91dCdcbmltcG9ydCB7IE1hcCwgSW5mb1dpbmRvdywgTWFya2VyLCBHb29nbGVBcGlXcmFwcGVyIH0gZnJvbSAnZ29vZ2xlLW1hcHMtcmVhY3QnO1xuXG5jb25zdCBtYXBTdHlsZSA9IHtcblx0bWFwOiB7XG5cdFx0d2lkdGg6ICcxMDAlJyxcblx0XHRoZWlnaHQ6ICcxMDAlJyxcblx0XHRtYXhIZWlnaHQ6ICdjYWxjKDEwMCUgLSAxNjVweCknLFxuXHRcdC8vIG1heEhlaWdodDogJzc0MHB4Jyxcblx0XHRvdmVyZmxvdzogJ2hpZGRlbidcblx0fSxcbn1cblxuXG5leHBvcnQgY2xhc3MgTWFwcHkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdGRhdGE6IFtdLFxuXHRcdFx0c2hvd2luZ0luZm9XaW5kb3c6IGZhbHNlLFxuXHRcdFx0YWN0aXZlTWFya2VyOiB7fSxcblx0XHRcdHNlbGVjdGVkUGxhY2U6IHt9LFxuXHRcdH07XG5cblx0XHQvLyB0aGlzLmNvbXBvbmVudERpZE1vdW50ID0gdGhpcy5jb21wb25lbnREaWRNb3VudC5iaW5kKHRoaXMpO1xuICB9XG5cblxuXHRjb21wb25lbnRXaWxsTW91bnQgPSAoKSA9PiB7XG5cblx0XHRheGlvcy5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9zdG9yZXMnKVxuXHRcdFx0LnRoZW4ocmVzcG9uc2UgPT4ge1xuXG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdGRhdGE6IHJlc3BvbnNlLmRhdGFcblx0XHRcdFx0fSk7XG5cblx0XHRcdH0pXG5cdFx0XHQuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcblx0XHRcdH0pO1xuXG5cblx0fVxuXG5cdGNvbXBvbmVudERpZE1vdW50ID0gKCkgPT4ge1xuXG5cblxuXG5cdH1cblxuXHRvbk1hcmtlckNsaWNrID0gKHByb3BzLCBtYXJrZXIsIGUpID0+IHtcblx0XHRjb25zb2xlLmxvZyhwcm9wcy5zdG9yZSk7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRzZWxlY3RlZFBsYWNlOiBwcm9wcyxcblx0XHRcdHN0b3JlSW5mbzogcHJvcHMuc3RvcmUsXG5cdFx0XHRwaG9uZU51bWJlcjogcHJvcHMuc3RvcmUucGhvbmVOdW1iZXIgPyBwcm9wcy5zdG9yZS5waG9uZU51bWJlciA6IFwiTm8gUGhvbmUgTnVtYmVyIEZvdW5kXCIsXG5cdFx0XHRkZXNjcmlwdGlvbjogcHJvcHMuc3RvcmUuZGVzY3JpcHRpb24gPyBwcm9wcy5zdG9yZS5kZXNjcmlwdGlvbiA6IFwiTm8gRGVzY3JpcHRpb24gRm91bmRcIixcblx0XHRcdGFkZHJlc3M6IHtcblx0XHRcdFx0YWRkcmVzczogcHJvcHMuc3RvcmUuYWRkcmVzcy5hZGRyZXNzID8gcHJvcHMuc3RvcmUuYWRkcmVzcy5hZGRyZXNzIDogJ05vIEFkZHJlc3MgRm91bmQnLFxuXHRcdFx0XHRhZGRyZXNzMjogcHJvcHMuc3RvcmUuYWRkcmVzcy5hZGRyZXNzMiA/IHByb3BzLnN0b3JlLmFkZHJlc3MuYWRkcmVzczIgOiAnTm8gQWRkcmVzcyBGb3VuZCcsXG5cdFx0XHR9LFxuXHRcdFx0YWN0aXZlTWFya2VyOiBtYXJrZXIsXG5cdFx0XHRzaG93aW5nSW5mb1dpbmRvdzogdHJ1ZVxuXHRcdH0pO1xuXHR9XG5cblx0b25NYXBDbGlja2VkID0gKHByb3BzKSA9PiB7XG5cdFx0aWYgKHRoaXMuc3RhdGUuc2hvd2luZ0luZm9XaW5kb3cpIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRzaG93aW5nSW5mb1dpbmRvdzogZmFsc2UsXG5cdFx0XHRcdGFjdGl2ZU1hcmtlcjogbnVsbFxuXHRcdFx0fSlcblx0XHR9XG5cdH07XG5cblx0cmVuZGVyKCkge1xuXG5cdFx0XHRcdHZhciBzdG9yZXMgPSB0aGlzLnN0YXRlLmRhdGE7XG5cdFx0XHRcdGNvbnNvbGUubG9nKHN0b3Jlcyk7XG5cblx0XHRcdFx0Y29uc3QgbGlzdEl0ZW1zID0gc3RvcmVzLm1hcCgoc3RvcmUpID0+XG5cdFx0XHRcdFx0XHRcdFx0PE1hcmtlclxuXHRcdFx0XHRcdFx0XHRcdFx0a2V5PXtzdG9yZS5faWR9XG5cdFx0XHRcdFx0XHRcdFx0XHRuYW1lPXtzdG9yZS5uYW1lfVxuXHRcdFx0XHRcdFx0XHRcdFx0cG9zaXRpb249e3tsYXQ6IHN0b3JlLmFkZHJlc3MubGF0LCBsbmc6IHN0b3JlLmFkZHJlc3MubG9uZ319XG5cdFx0XHRcdFx0XHRcdFx0XHRpY29uPXt7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHVybDogXCIvc3RhdGljL21hcmtlcl9jdXN0b20uc3ZnXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFuY2hvcjogbmV3IGdvb2dsZS5tYXBzLlBvaW50KDMyLDMyKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0c2NhbGVkU2l6ZTogbmV3IGdvb2dsZS5tYXBzLlNpemUoNjQsNjQpXG5cdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0c3RvcmU9e3N0b3JlfVxuXHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17dGhpcy5vbk1hcmtlckNsaWNrfVxuXHRcdFx0XHRcdFx0XHRcdCAvPlxuXG5cdFx0XHRcdFx0XHRcdCk7XG5cblx0XHRyZXR1cm4gKFxuXG5cblx0XHRcdFx0XHQ8TGF5b3V0IG92ZXJmbG93PXt0cnVlfT5cblx0XHRcdFx0XHRcdDxzdHlsZSBqc3g+e2Bcblx0XHRcdFx0XHRcdFx0Lm1hcCB7XG5cdFx0XHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0XHRcdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdFx0XHRcdFx0XHRcdC8vIG1heC1oZWlnaHQ6NjAlO1xuXHRcdFx0XHRcdFx0XHRcdC8vIG1heC1oZWlnaHQ6IDU4MHB4O1xuXHRcdFx0XHRcdFx0XHRcdC8vIGJhY2tncm91bmQtY29sb3I6ICMwMDI3NjY7XG5cdFx0XHRcdFx0XHRcdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblxuXHRcdFx0XHRcdFx0XHR9XG5cblxuXHRcdFx0XHRcdFx0YH08L3N0eWxlPlxuXG5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWFwXCI+XG5cblx0XHRcdFx0XHRcdFx0PE1hcFxuXHRcdFx0XHRcdFx0XHRcdGdvb2dsZT17dGhpcy5wcm9wcy5nb29nbGV9XG5cdFx0XHRcdFx0XHRcdFx0c3R5bGU9e21hcFN0eWxlLm1hcH1cblx0XHRcdFx0XHRcdFx0XHQvLyBvcHRpb25zPXttYXBPcHRpb25zfVxuXHRcdFx0XHRcdFx0XHRcdGluaXRpYWxDZW50ZXI9e3tcblx0XHRcdFx0XHRcdFx0XHRcdGxhdDogMjUuMjY3MzY5LFxuXHRcdFx0XHRcdFx0XHRcdFx0bG5nOiA1MS41Mjk0NTFcblx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdHpvb209ezE0fVxuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0e2xpc3RJdGVtc31cblxuXHRcdFx0XHRcdFx0XHRcdHsvKiA8TWFya2VyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aXRsZT17J1RoZSBtYXJrZXJgcyB0aXRsZSB3aWxsIGFwcGVhciBhcyBhIHRvb2x0aXAuJ31cblx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9eydTT01BJ31cblx0XHRcdFx0XHRcdFx0XHRcdHBvc2l0aW9uPXt7bGF0OiAyNS4yNjI4MTEsIGxuZzogNTEuNTMyMDk0fX1cblx0XHRcdFx0XHRcdFx0XHRcdGljb249e3tcblx0XHRcdFx0XHRcdFx0ICAgICAgdXJsOiBcIi9zdGF0aWMvbWFya2VyX2N1c3RvbS5zdmdcIixcblx0XHRcdFx0XHRcdFx0ICAgICAgYW5jaG9yOiBuZXcgZ29vZ2xlLm1hcHMuUG9pbnQoMzIsMzIpLFxuXHRcdFx0XHRcdFx0XHQgICAgICBzY2FsZWRTaXplOiBuZXcgZ29vZ2xlLm1hcHMuU2l6ZSg2NCw2NClcblx0XHRcdFx0XHRcdFx0ICAgIH19XG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBvbkNsaWNrPXt0aGlzLm9uTWFya2VyQ2xpY2t9XG5cdFx0XHRcdFx0XHRcdFx0IC8+ICovfVxuXG5cdFx0XHRcdFx0XHRcdFx0PEluZm9XaW5kb3dcblx0XHRcdFx0ICAgICAgICAgIG1hcmtlcj17dGhpcy5zdGF0ZS5hY3RpdmVNYXJrZXJ9XG5cdFx0XHRcdCAgICAgICAgICB2aXNpYmxlPXt0aGlzLnN0YXRlLnNob3dpbmdJbmZvV2luZG93fT5cblx0XHRcdFx0ICAgICAgICAgICAgPGRpdj5cblx0XHRcdFx0ICAgICAgICAgICAgICA8aDE+e3RoaXMuc3RhdGUuc2VsZWN0ZWRQbGFjZS5uYW1lfTwvaDE+XG5cdFx0XHRcdCAgICAgICAgICAgICAgPHA+e3RoaXMuc3RhdGUuZGVzY3JpcHRpb259PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxoMz57dGhpcy5zdGF0ZS5hZGRyZXNzLmFkZHJlc3N9PC9oMz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aDM+e3RoaXMuc3RhdGUuYWRkcmVzcy5hZGRyZXNzMn08L2gzPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxoMz57dGhpcy5zdGF0ZS5waG9uZU51bWJlcn08L2gzPlxuXHRcdFx0XHQgICAgICAgICAgICA8L2Rpdj5cblx0XHRcdFx0ICAgICAgICA8L0luZm9XaW5kb3c+XG5cblx0XHRcdFx0XHRcdFx0PC9NYXA+XG5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0PC9MYXlvdXQ+XG5cblxuXG5cblxuXHRcdCk7XG5cblxuXHR9XG5cbn1cblxuXG5jb25zdCBMb2FkaW5nQ29udGFpbmVyID0gKHByb3BzKSA9PiAoXG48ZGl2PlxuXG5cdDxzdHlsZSBqc3g+e2BcblxuXHRcdC5sb2FkaW5nIHtcblx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdFx0cGFkZGluZy10b3A6IDMwJTtcblx0XHRcdHBhZGRpbmctbGVmdDoyNXB4O1xuXHRcdFx0Zm9udC1zaXplOiAyMnB4O1xuXHRcdFx0XHRcdC8vIHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG5cdFx0fVxuXG5cdFx0QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcblx0XHRcdC5sb2FkaW5nIHtcblx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHR0b3A6IDA7XG5cdFx0XHRcdGxlZnQ6IDA7XG5cblx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdGhlaWdodDogMTAwJTtcblx0XHRcdFx0Zm9udC1zaXplOiAyNnB4O1xuXHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHRcdHBhZGRpbmctdG9wOiA0NHZoO1xuXHRcdFx0XHRjb2xvcjogYmxhY2s7XG5cdFx0XHRcdGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG5cdFx0XHRcdHRyYW5zaXRpb246IGFsbCAxcyBlYXNlLW91dDtcblx0XHRcdH1cblxuXHRcdH1cblxuXG5cblxuXHRgfTwvc3R5bGU+XG5cblx0PGRpdiBjbGFzc05hbWU9XCJsb2FkaW5nXCI+TG9hZGluZyBSZXN1bHRzLi4uPC9kaXY+XG48L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgR29vZ2xlQXBpV3JhcHBlcih7XG4gIGFwaUtleTogJ0FJemFTeUFUeF9kaEx2R0NLNlRxTDBzOG9CUTdyaTBsSWk5R1BTWScsXG5cdExvYWRpbmdDb250YWluZXI6IExvYWRpbmdDb250YWluZXJcbn0pKE1hcHB5KVxuIl19 */\n/*@ sourceURL=/Users/jbabak/Sites/dcapp/web/pages/map.js */",
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
    css: ".loading.jsx-3677574924{width:100%;height:100%;padding-top:30%;padding-left:25px;font-size:22px;font-family:'Montserrat',sans-serif;}@media screen and (min-width:768px){.loading.jsx-3677574924{position:absolute;top:0;left:0;width:100%;height:100%;font-size:26px;text-align:center;padding-top:44vh;color:black;font-family:'Montserrat',sans-serif;-webkit-transition:all 1s ease-out;transition:all 1s ease-out;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYmFiYWsvU2l0ZXMvZGNhcHAvd2ViL3BhZ2VzL21hcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxTGEsQUFJZSxBQVdRLFdBVlAsT0FXTCxLQVZTLENBV1IsT0FFSSxRQVpLLEdBYUosWUFDRyxHQWJELFlBY0ksR0Faa0IsZUFhbkIsaUJBQ0wsSUFiZCxRQWN1QyxvQ0FDViw4REFDNUIiLCJmaWxlIjoiL1VzZXJzL2piYWJhay9TaXRlcy9kY2FwcC93ZWIvcGFnZXMvbWFwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wcy9IZWFkZXInXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBzL0xheW91dCdcbmltcG9ydCB7IE1hcCwgSW5mb1dpbmRvdywgTWFya2VyLCBHb29nbGVBcGlXcmFwcGVyIH0gZnJvbSAnZ29vZ2xlLW1hcHMtcmVhY3QnO1xuXG5jb25zdCBtYXBTdHlsZSA9IHtcblx0bWFwOiB7XG5cdFx0d2lkdGg6ICcxMDAlJyxcblx0XHRoZWlnaHQ6ICcxMDAlJyxcblx0XHRtYXhIZWlnaHQ6ICdjYWxjKDEwMCUgLSAxNjVweCknLFxuXHRcdC8vIG1heEhlaWdodDogJzc0MHB4Jyxcblx0XHRvdmVyZmxvdzogJ2hpZGRlbidcblx0fSxcbn1cblxuXG5leHBvcnQgY2xhc3MgTWFwcHkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdGRhdGE6IFtdLFxuXHRcdFx0c2hvd2luZ0luZm9XaW5kb3c6IGZhbHNlLFxuXHRcdFx0YWN0aXZlTWFya2VyOiB7fSxcblx0XHRcdHNlbGVjdGVkUGxhY2U6IHt9LFxuXHRcdH07XG5cblx0XHQvLyB0aGlzLmNvbXBvbmVudERpZE1vdW50ID0gdGhpcy5jb21wb25lbnREaWRNb3VudC5iaW5kKHRoaXMpO1xuICB9XG5cblxuXHRjb21wb25lbnRXaWxsTW91bnQgPSAoKSA9PiB7XG5cblx0XHRheGlvcy5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9zdG9yZXMnKVxuXHRcdFx0LnRoZW4ocmVzcG9uc2UgPT4ge1xuXG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdGRhdGE6IHJlc3BvbnNlLmRhdGFcblx0XHRcdFx0fSk7XG5cblx0XHRcdH0pXG5cdFx0XHQuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcblx0XHRcdH0pO1xuXG5cblx0fVxuXG5cdGNvbXBvbmVudERpZE1vdW50ID0gKCkgPT4ge1xuXG5cblxuXG5cdH1cblxuXHRvbk1hcmtlckNsaWNrID0gKHByb3BzLCBtYXJrZXIsIGUpID0+IHtcblx0XHRjb25zb2xlLmxvZyhwcm9wcy5zdG9yZSk7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRzZWxlY3RlZFBsYWNlOiBwcm9wcyxcblx0XHRcdHN0b3JlSW5mbzogcHJvcHMuc3RvcmUsXG5cdFx0XHRwaG9uZU51bWJlcjogcHJvcHMuc3RvcmUucGhvbmVOdW1iZXIgPyBwcm9wcy5zdG9yZS5waG9uZU51bWJlciA6IFwiTm8gUGhvbmUgTnVtYmVyIEZvdW5kXCIsXG5cdFx0XHRkZXNjcmlwdGlvbjogcHJvcHMuc3RvcmUuZGVzY3JpcHRpb24gPyBwcm9wcy5zdG9yZS5kZXNjcmlwdGlvbiA6IFwiTm8gRGVzY3JpcHRpb24gRm91bmRcIixcblx0XHRcdGFkZHJlc3M6IHtcblx0XHRcdFx0YWRkcmVzczogcHJvcHMuc3RvcmUuYWRkcmVzcy5hZGRyZXNzID8gcHJvcHMuc3RvcmUuYWRkcmVzcy5hZGRyZXNzIDogJ05vIEFkZHJlc3MgRm91bmQnLFxuXHRcdFx0XHRhZGRyZXNzMjogcHJvcHMuc3RvcmUuYWRkcmVzcy5hZGRyZXNzMiA/IHByb3BzLnN0b3JlLmFkZHJlc3MuYWRkcmVzczIgOiAnTm8gQWRkcmVzcyBGb3VuZCcsXG5cdFx0XHR9LFxuXHRcdFx0YWN0aXZlTWFya2VyOiBtYXJrZXIsXG5cdFx0XHRzaG93aW5nSW5mb1dpbmRvdzogdHJ1ZVxuXHRcdH0pO1xuXHR9XG5cblx0b25NYXBDbGlja2VkID0gKHByb3BzKSA9PiB7XG5cdFx0aWYgKHRoaXMuc3RhdGUuc2hvd2luZ0luZm9XaW5kb3cpIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRzaG93aW5nSW5mb1dpbmRvdzogZmFsc2UsXG5cdFx0XHRcdGFjdGl2ZU1hcmtlcjogbnVsbFxuXHRcdFx0fSlcblx0XHR9XG5cdH07XG5cblx0cmVuZGVyKCkge1xuXG5cdFx0XHRcdHZhciBzdG9yZXMgPSB0aGlzLnN0YXRlLmRhdGE7XG5cdFx0XHRcdGNvbnNvbGUubG9nKHN0b3Jlcyk7XG5cblx0XHRcdFx0Y29uc3QgbGlzdEl0ZW1zID0gc3RvcmVzLm1hcCgoc3RvcmUpID0+XG5cdFx0XHRcdFx0XHRcdFx0PE1hcmtlclxuXHRcdFx0XHRcdFx0XHRcdFx0a2V5PXtzdG9yZS5faWR9XG5cdFx0XHRcdFx0XHRcdFx0XHRuYW1lPXtzdG9yZS5uYW1lfVxuXHRcdFx0XHRcdFx0XHRcdFx0cG9zaXRpb249e3tsYXQ6IHN0b3JlLmFkZHJlc3MubGF0LCBsbmc6IHN0b3JlLmFkZHJlc3MubG9uZ319XG5cdFx0XHRcdFx0XHRcdFx0XHRpY29uPXt7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHVybDogXCIvc3RhdGljL21hcmtlcl9jdXN0b20uc3ZnXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFuY2hvcjogbmV3IGdvb2dsZS5tYXBzLlBvaW50KDMyLDMyKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0c2NhbGVkU2l6ZTogbmV3IGdvb2dsZS5tYXBzLlNpemUoNjQsNjQpXG5cdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0c3RvcmU9e3N0b3JlfVxuXHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17dGhpcy5vbk1hcmtlckNsaWNrfVxuXHRcdFx0XHRcdFx0XHRcdCAvPlxuXG5cdFx0XHRcdFx0XHRcdCk7XG5cblx0XHRyZXR1cm4gKFxuXG5cblx0XHRcdFx0XHQ8TGF5b3V0IG92ZXJmbG93PXt0cnVlfT5cblx0XHRcdFx0XHRcdDxzdHlsZSBqc3g+e2Bcblx0XHRcdFx0XHRcdFx0Lm1hcCB7XG5cdFx0XHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0XHRcdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdFx0XHRcdFx0XHRcdC8vIG1heC1oZWlnaHQ6NjAlO1xuXHRcdFx0XHRcdFx0XHRcdC8vIG1heC1oZWlnaHQ6IDU4MHB4O1xuXHRcdFx0XHRcdFx0XHRcdC8vIGJhY2tncm91bmQtY29sb3I6ICMwMDI3NjY7XG5cdFx0XHRcdFx0XHRcdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblxuXHRcdFx0XHRcdFx0XHR9XG5cblxuXHRcdFx0XHRcdFx0YH08L3N0eWxlPlxuXG5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWFwXCI+XG5cblx0XHRcdFx0XHRcdFx0PE1hcFxuXHRcdFx0XHRcdFx0XHRcdGdvb2dsZT17dGhpcy5wcm9wcy5nb29nbGV9XG5cdFx0XHRcdFx0XHRcdFx0c3R5bGU9e21hcFN0eWxlLm1hcH1cblx0XHRcdFx0XHRcdFx0XHQvLyBvcHRpb25zPXttYXBPcHRpb25zfVxuXHRcdFx0XHRcdFx0XHRcdGluaXRpYWxDZW50ZXI9e3tcblx0XHRcdFx0XHRcdFx0XHRcdGxhdDogMjUuMjY3MzY5LFxuXHRcdFx0XHRcdFx0XHRcdFx0bG5nOiA1MS41Mjk0NTFcblx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdHpvb209ezE0fVxuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0e2xpc3RJdGVtc31cblxuXHRcdFx0XHRcdFx0XHRcdHsvKiA8TWFya2VyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aXRsZT17J1RoZSBtYXJrZXJgcyB0aXRsZSB3aWxsIGFwcGVhciBhcyBhIHRvb2x0aXAuJ31cblx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9eydTT01BJ31cblx0XHRcdFx0XHRcdFx0XHRcdHBvc2l0aW9uPXt7bGF0OiAyNS4yNjI4MTEsIGxuZzogNTEuNTMyMDk0fX1cblx0XHRcdFx0XHRcdFx0XHRcdGljb249e3tcblx0XHRcdFx0XHRcdFx0ICAgICAgdXJsOiBcIi9zdGF0aWMvbWFya2VyX2N1c3RvbS5zdmdcIixcblx0XHRcdFx0XHRcdFx0ICAgICAgYW5jaG9yOiBuZXcgZ29vZ2xlLm1hcHMuUG9pbnQoMzIsMzIpLFxuXHRcdFx0XHRcdFx0XHQgICAgICBzY2FsZWRTaXplOiBuZXcgZ29vZ2xlLm1hcHMuU2l6ZSg2NCw2NClcblx0XHRcdFx0XHRcdFx0ICAgIH19XG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBvbkNsaWNrPXt0aGlzLm9uTWFya2VyQ2xpY2t9XG5cdFx0XHRcdFx0XHRcdFx0IC8+ICovfVxuXG5cdFx0XHRcdFx0XHRcdFx0PEluZm9XaW5kb3dcblx0XHRcdFx0ICAgICAgICAgIG1hcmtlcj17dGhpcy5zdGF0ZS5hY3RpdmVNYXJrZXJ9XG5cdFx0XHRcdCAgICAgICAgICB2aXNpYmxlPXt0aGlzLnN0YXRlLnNob3dpbmdJbmZvV2luZG93fT5cblx0XHRcdFx0ICAgICAgICAgICAgPGRpdj5cblx0XHRcdFx0ICAgICAgICAgICAgICA8aDE+e3RoaXMuc3RhdGUuc2VsZWN0ZWRQbGFjZS5uYW1lfTwvaDE+XG5cdFx0XHRcdCAgICAgICAgICAgICAgPHA+e3RoaXMuc3RhdGUuZGVzY3JpcHRpb259PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxoMz57dGhpcy5zdGF0ZS5hZGRyZXNzLmFkZHJlc3N9PC9oMz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aDM+e3RoaXMuc3RhdGUuYWRkcmVzcy5hZGRyZXNzMn08L2gzPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxoMz57dGhpcy5zdGF0ZS5waG9uZU51bWJlcn08L2gzPlxuXHRcdFx0XHQgICAgICAgICAgICA8L2Rpdj5cblx0XHRcdFx0ICAgICAgICA8L0luZm9XaW5kb3c+XG5cblx0XHRcdFx0XHRcdFx0PC9NYXA+XG5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0PC9MYXlvdXQ+XG5cblxuXG5cblxuXHRcdCk7XG5cblxuXHR9XG5cbn1cblxuXG5jb25zdCBMb2FkaW5nQ29udGFpbmVyID0gKHByb3BzKSA9PiAoXG48ZGl2PlxuXG5cdDxzdHlsZSBqc3g+e2BcblxuXHRcdC5sb2FkaW5nIHtcblx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdFx0cGFkZGluZy10b3A6IDMwJTtcblx0XHRcdHBhZGRpbmctbGVmdDoyNXB4O1xuXHRcdFx0Zm9udC1zaXplOiAyMnB4O1xuXHRcdFx0XHRcdC8vIHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG5cdFx0fVxuXG5cdFx0QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcblx0XHRcdC5sb2FkaW5nIHtcblx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHR0b3A6IDA7XG5cdFx0XHRcdGxlZnQ6IDA7XG5cblx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdGhlaWdodDogMTAwJTtcblx0XHRcdFx0Zm9udC1zaXplOiAyNnB4O1xuXHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHRcdHBhZGRpbmctdG9wOiA0NHZoO1xuXHRcdFx0XHRjb2xvcjogYmxhY2s7XG5cdFx0XHRcdGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG5cdFx0XHRcdHRyYW5zaXRpb246IGFsbCAxcyBlYXNlLW91dDtcblx0XHRcdH1cblxuXHRcdH1cblxuXG5cblxuXHRgfTwvc3R5bGU+XG5cblx0PGRpdiBjbGFzc05hbWU9XCJsb2FkaW5nXCI+TG9hZGluZyBSZXN1bHRzLi4uPC9kaXY+XG48L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgR29vZ2xlQXBpV3JhcHBlcih7XG4gIGFwaUtleTogJ0FJemFTeUFUeF9kaEx2R0NLNlRxTDBzOG9CUTdyaTBsSWk5R1BTWScsXG5cdExvYWRpbmdDb250YWluZXI6IExvYWRpbmdDb250YWluZXJcbn0pKE1hcHB5KVxuIl19 */\n/*@ sourceURL=/Users/jbabak/Sites/dcapp/web/pages/map.js */",
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
//# sourceMappingURL=map.js.a98b11fedc2e5c3b1ea6.hot-update.js.map