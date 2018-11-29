webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _comps_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../comps/Header */ "./comps/Header.js");
/* harmony import */ var _comps_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../comps/Layout */ "./comps/Layout.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.ba76f6cba8b94fa0cd64.hot-update.js.map