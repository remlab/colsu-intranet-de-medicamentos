define("2b433662-0355-437f-9cc5-afd2ec803ccb_0.0.1", ["@microsoft/sp-core-library","@microsoft/sp-webpart-base","react","react-dom"], function(__WEBPACK_EXTERNAL_MODULE_UWqr__, __WEBPACK_EXTERNAL_MODULE_br4S__, __WEBPACK_EXTERNAL_MODULE_cDcd__, __WEBPACK_EXTERNAL_MODULE_faye__) { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "WdBQ");
/******/ })
/************************************************************************/
/******/ ({

/***/ "0pkY":
/*!**************************************************!*\
  !*** ./lib/webparts/footer/components/Footer.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Footer_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer.module.scss */ "zrtF");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var Footer = /** @class */ (function (_super) {
    __extends(Footer, _super);
    function Footer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Footer.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _Footer_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].section_footer },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _Footer_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].section_footer__footer1 },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _Footer_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].footer1_brand },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", { src: "https://colsubsidio365.sharepoint.com/sites/IntranetCorporativa/SiteAssets/images/logo_corporativo_h_2_g.png", alt: "" }))),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _Footer_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].footer__links },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", null,
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", null,
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { href: "https://colsubsidio365.sharepoint.com/sites/IntranetCorporativa/SitePages/home.aspx" }, "INICIO")),
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", null,
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { href: "https://colsubsidio365.sharepoint.com/sites/IntranetCorporativa/SitePages/normativa-colsubsidio.aspx" }, "NORMATIVA COLSUBSIDIO")),
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", null,
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { href: "http://colsubsidiovirtual/Compromisos-Reuniones/Paginas/VIP.aspx" }, "GESTI\u00D3N DE COMPROMISOS")),
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", null,
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { href: "https://colsubsidio365.sharepoint.com/sites/gestiondocumentalcorporativo" }, "GESTI\u00D3N DOCUMENTAL"))))),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _Footer_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].footer__links },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", null,
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", null,
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { href: "http://windtiintrane01/isolucion/" }, "ISOLUCI\u00D3N")),
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", null,
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { href: "https://colsubsidio365.sharepoint.com/sites/IntranetCorporativa/SitePages/Contact.aspx" }, "CONT\u00C1CTANOS")),
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", null,
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { href: "http://colsubsidiovirtual/OficinaJuridica_SecretariaGeneral/default.aspx" }, "GESTI\u00D3N CONTRACTUAL")),
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", null,
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { href: "https://flpnwc-temu5vjrkc.dispatcher.us3.hana.ondemand.com/sites/offline#Shell-home" }, "DISPENSACI\u00D3N OFFLINE MEDICAMENTOS"))))),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _Footer_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].footer__intranet },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h3", null, "Intranet: "),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { href: "https://colsubsidio365.sharepoint.com/sites/ColsubsidioIntranetSalud/SitePages/Home.aspx" },
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", { src: "https://colsubsidio365.sharepoint.com/sites/IntranetCorporativa/SiteAssets/images/ico_salud_a.png", alt: "" })))),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _Footer_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].footer__poweredby },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", { src: "https://colsubsidio365.sharepoint.com/sites/IntranetdeMedicamentos/SiteAssets/by_rem.png", alt: "" }))))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _Footer_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].section_footer__footer2 },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", { src: "http://aremlab.com/media/colsubsidio/institucional/footer/footer_cubes.png", alt: "" })),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _Footer_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].section_footer__footer3 },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { href: "https://www.fecolsubsidio.com/" },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", { src: "https://colsubsidio365.sharepoint.com/sites/IntranetCorporativa/SiteAssets/images/f-2-g.png", alt: "" }))),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { href: "https://www.proteccion.com/wps/portal/proteccion" },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", { src: "https://colsubsidio365.sharepoint.com/sites/IntranetCorporativa/SiteAssets/images/f-3-g.png", alt: "" }))),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { href: "http://www.famisanar.com.co/" },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", { src: "https://colsubsidio365.sharepoint.com/sites/IntranetCorporativa/SiteAssets/images/f-4-g.png", alt: "" }))),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { href: "https://www.bancompartir.co/" },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", { src: "https://colsubsidio365.sharepoint.com/sites/IntranetCorporativa/SiteAssets/images/f-5-g.png", alt: "" }))),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { href: "https://www.simple.co/Web/" },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", { src: "https://colsubsidio365.sharepoint.com/sites/IntranetCorporativa/SiteAssets/images/f-6-g.png", alt: "" }))),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { href: "http://www.nuevaeps.com.co/" },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", { src: "https://colsubsidio365.sharepoint.com/sites/IntranetCorporativa/SiteAssets/images/f-7-g.png", alt: "" }))))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _Footer_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].section_footer__footer4 },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { href: "https://www.colsubsidio.com/" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", { src: "https://colsubsidio365.sharepoint.com/sites/IntranetCorporativa/SiteAssets/images/logo_corporativo_h_w_n.png", alt: "" })),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { href: "#" }, "TERMINOS Y CONDICIONES"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { href: "#" }, "POL\u00CDTICAS DE PROTECCI\u00D3N DE DATOS. "),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { href: "http://www.ssf.gov.co/wps/portal/ES/Inicio" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", { src: "https://colsubsidio365.sharepoint.com/sites/IntranetCorporativa/SiteAssets/images/logo_supersubsidio_w.png", alt: "" })))));
    };
    return Footer;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (Footer);


/***/ }),

/***/ "DZ1J":
/*!**********************************************************!*\
  !*** ./lib/webparts/footer/components/Footer.module.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/src??postcss!./Footer.module.css */ "nD+2");
var loader = __webpack_require__(/*! ./node_modules/@microsoft/loader-load-themed-styles/node_modules/@microsoft/load-themed-styles/lib/index.js */ "ruv1");

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ "JPst":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "UWqr":
/*!*********************************************!*\
  !*** external "@microsoft/sp-core-library" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_UWqr__;

/***/ }),

/***/ "WdBQ":
/*!**********************************************!*\
  !*** ./lib/webparts/footer/FooterWebPart.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "faye");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/sp-webpart-base */ "br4S");
/* harmony import */ var _microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Footer */ "0pkY");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var FooterWebPart = /** @class */ (function (_super) {
    __extends(FooterWebPart, _super);
    function FooterWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FooterWebPart.prototype.render = function () {
        var element = react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], {});
        react_dom__WEBPACK_IMPORTED_MODULE_1__["render"](element, this.domElement);
    };
    FooterWebPart.prototype.onDispose = function () {
        react_dom__WEBPACK_IMPORTED_MODULE_1__["unmountComponentAtNode"](this.domElement);
    };
    Object.defineProperty(FooterWebPart.prototype, "dataVersion", {
        get: function () {
            return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["Version"].parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    return FooterWebPart;
}(_microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_3__["BaseClientSideWebPart"]));
/* harmony default export */ __webpack_exports__["default"] = (FooterWebPart);


/***/ }),

/***/ "br4S":
/*!*********************************************!*\
  !*** external "@microsoft/sp-webpart-base" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_br4S__;

/***/ }),

/***/ "cDcd":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_cDcd__;

/***/ }),

/***/ "faye":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_faye__;

/***/ }),

/***/ "nD+2":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??postcss!./lib/webparts/footer/components/Footer.module.css ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "JPst")(false);
// Module
exports.push([module.i, ".footer_8d9285df .container_8d9285df{max-width:700px;margin:0 auto;-webkit-box-shadow:0 2px 4px 0 rgba(0,0,0,.2),0 25px 50px 0 rgba(0,0,0,.1);box-shadow:0 2px 4px 0 rgba(0,0,0,.2),0 25px 50px 0 rgba(0,0,0,.1)}.footer_8d9285df .row_8d9285df{margin:0 -8px;-webkit-box-sizing:border-box;box-sizing:border-box;color:#fff;background-color:#005a9e;padding:20px}.footer_8d9285df .row_8d9285df:after,.footer_8d9285df .row_8d9285df:before{display:table;content:\"\";line-height:0}.footer_8d9285df .row_8d9285df:after{clear:both}.footer_8d9285df .column_8d9285df{position:relative;min-height:1px;padding-left:8px;padding-right:8px;-webkit-box-sizing:border-box;box-sizing:border-box}[dir=ltr] .footer_8d9285df .column_8d9285df{float:left}[dir=rtl] .footer_8d9285df .column_8d9285df{float:right}.footer_8d9285df .column_8d9285df .ms-Grid_8d9285df{padding:0}@media (min-width:640px){.footer_8d9285df .column_8d9285df{width:83.33333333333334%}}@media (min-width:1024px){.footer_8d9285df .column_8d9285df{width:66.66666666666666%}}@media (min-width:1024px){[dir=ltr] .footer_8d9285df .column_8d9285df{left:16.66667%}[dir=rtl] .footer_8d9285df .column_8d9285df{right:16.66667%}}@media (min-width:640px){[dir=ltr] .footer_8d9285df .column_8d9285df{left:8.33333%}[dir=rtl] .footer_8d9285df .column_8d9285df{right:8.33333%}}.section_footer_8d9285df{background:#00205c}@media (max-width:480px){.section_footer__footer1_8d9285df{text-align:center}.section_footer__footer1_8d9285df ul{margin:0;padding:0}.section_footer__footer1_8d9285df ul li{width:100%}.section_footer__footer1_8d9285df ul li .footer1_brand_8d9285df{max-width:250px;width:100%;margin:0 auto}.section_footer__footer1_8d9285df ul li .footer1_brand_8d9285df img{width:100%}}.section_footer__footer1_8d9285df ul{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-pack:distribute;justify-content:space-around;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-wrap:wrap;flex-wrap:wrap}.section_footer__footer1_8d9285df ul li{padding:2em;list-style:none;-webkit-box-flex:1;-ms-flex:1;flex:1}.section_footer__footer1_8d9285df ul li div{color:#fff}.section_footer__footer1_8d9285df ul li .footer__links_8d9285df ul{display:block}.section_footer__footer1_8d9285df ul li .footer__links_8d9285df ul li{padding:.5em}.section_footer__footer1_8d9285df ul li .footer__links_8d9285df ul li a{text-decoration:none;color:#fff;font-family:Futura Std;font-size:12px!important;position:relative}.section_footer__footer1_8d9285df ul li .footer__links_8d9285df ul li a:hover:before{content:\"\";width:15px;height:23.4px;background-image:url(https://colsubsidio365.sharepoint.com/sites/IntranetCorporativa/SiteAssets/images/polygon.png);background-size:100% 100%;background-repeat:no-repeat;position:absolute;right:105%;bottom:0;-webkit-transform:scaleY(-1);transform:scaleY(-1)}.section_footer__footer1_8d9285df ul li .footer__intranet_8d9285df{text-align:center}.section_footer__footer1_8d9285df ul li .footer__intranet_8d9285df img{width:86px}.section_footer__footer1_8d9285df ul li .footer__poweredby_8d9285df img{width:40px}.section_footer__footer2_8d9285df{padding:0 3em;background:#6d6d6d;text-align:center}.section_footer__footer2_8d9285df img{width:90%}.section_footer__footer3_8d9285df{background:#fff}.section_footer__footer3_8d9285df ul{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-pack:distribute;justify-content:space-around;margin:0 auto;padding:2.5em 0;width:60%}.section_footer__footer3_8d9285df ul li{list-style:none}.section_footer__footer3_8d9285df ul li a>img{width:100%}.section_footer__footer4_8d9285df{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-pack:distribute;justify-content:space-around;padding:1em 3em;-ms-flex-wrap:wrap;flex-wrap:wrap}@media (max-width:480px){.section_footer__footer4_8d9285df{text-align:center}}.section_footer__footer4_8d9285df img{margin-bottom:1em}.section_footer__footer4_8d9285df a{color:#fff;text-decoration:none;font-family:Futura Std;font-size:12px}.section_footer__footer4_8d9285df a:hover{text-decoration:underline}.section_footer__footer4_8d9285df img:first-child{width:120px!important}", ""]);



/***/ }),

/***/ "ruv1":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/@microsoft/loader-load-themed-styles/node_modules/@microsoft/load-themed-styles/lib/index.js ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
/**
 * An IThemingInstruction can specify a rawString to be preserved or a theme slot and a default value
 * to use if that slot is not specified by the theme.
 */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
// Store the theming state in __themeState__ global scope for reuse in the case of duplicate
// load-themed-styles hosted on the page.
var _root = (typeof window === 'undefined') ? global : window; // tslint:disable-line:no-any
// Nonce string to inject into script tag if one provided. This is used in CSP (Content Security Policy).
var _styleNonce = _root && _root.CSPSettings && _root.CSPSettings.nonce;
var _themeState = initializeThemeState();
/**
 * Matches theming tokens. For example, "[theme: themeSlotName, default: #FFF]" (including the quotes).
 */
// tslint:disable-next-line:max-line-length
var _themeTokenRegex = /[\'\"]\[theme:\s*(\w+)\s*(?:\,\s*default:\s*([\\"\']?[\.\,\(\)\#\-\s\w]*[\.\,\(\)\#\-\w][\"\']?))?\s*\][\'\"]/g;
var now = function () { return (typeof performance !== 'undefined' && !!performance.now) ? performance.now() : Date.now(); };
function measure(func) {
    var start = now();
    func();
    var end = now();
    _themeState.perf.duration += end - start;
}
/**
 * initialize global state object
 */
function initializeThemeState() {
    var state = _root.__themeState__ || {
        theme: undefined,
        lastStyleElement: undefined,
        registeredStyles: []
    };
    if (!state.runState) {
        state = __assign({}, (state), { perf: {
                count: 0,
                duration: 0
            }, runState: {
                flushTimer: 0,
                mode: 0 /* sync */,
                buffer: []
            } });
    }
    if (!state.registeredThemableStyles) {
        state = __assign({}, (state), { registeredThemableStyles: [] });
    }
    _root.__themeState__ = state;
    return state;
}
/**
 * Loads a set of style text. If it is registered too early, we will register it when the window.load
 * event is fired.
 * @param {string | ThemableArray} styles Themable style text to register.
 * @param {boolean} loadAsync When true, always load styles in async mode, irrespective of current sync mode.
 */
function loadStyles(styles, loadAsync) {
    if (loadAsync === void 0) { loadAsync = false; }
    measure(function () {
        var styleParts = Array.isArray(styles) ? styles : splitStyles(styles);
        var _a = _themeState.runState, mode = _a.mode, buffer = _a.buffer, flushTimer = _a.flushTimer;
        if (loadAsync || mode === 1 /* async */) {
            buffer.push(styleParts);
            if (!flushTimer) {
                _themeState.runState.flushTimer = asyncLoadStyles();
            }
        }
        else {
            applyThemableStyles(styleParts);
        }
    });
}
exports.loadStyles = loadStyles;
/**
 * Allows for customizable loadStyles logic. e.g. for server side rendering application
 * @param {(processedStyles: string, rawStyles?: string | ThemableArray) => void}
 * a loadStyles callback that gets called when styles are loaded or reloaded
 */
function configureLoadStyles(loadStylesFn) {
    _themeState.loadStyles = loadStylesFn;
}
exports.configureLoadStyles = configureLoadStyles;
/**
 * Configure run mode of load-themable-styles
 * @param mode load-themable-styles run mode, async or sync
 */
function configureRunMode(mode) {
    _themeState.runState.mode = mode;
}
exports.configureRunMode = configureRunMode;
/**
 * external code can call flush to synchronously force processing of currently buffered styles
 */
function flush() {
    measure(function () {
        var styleArrays = _themeState.runState.buffer.slice();
        _themeState.runState.buffer = [];
        var mergedStyleArray = [].concat.apply([], styleArrays);
        if (mergedStyleArray.length > 0) {
            applyThemableStyles(mergedStyleArray);
        }
    });
}
exports.flush = flush;
/**
 * register async loadStyles
 */
function asyncLoadStyles() {
    return setTimeout(function () {
        _themeState.runState.flushTimer = 0;
        flush();
    }, 0);
}
/**
 * Loads a set of style text. If it is registered too early, we will register it when the window.load event
 * is fired.
 * @param {string} styleText Style to register.
 * @param {IStyleRecord} styleRecord Existing style record to re-apply.
 */
function applyThemableStyles(stylesArray, styleRecord) {
    if (_themeState.loadStyles) {
        _themeState.loadStyles(resolveThemableArray(stylesArray).styleString, stylesArray);
    }
    else {
        registerStyles(stylesArray);
    }
}
/**
 * Registers a set theme tokens to find and replace. If styles were already registered, they will be
 * replaced.
 * @param {theme} theme JSON object of theme tokens to values.
 */
function loadTheme(theme) {
    _themeState.theme = theme;
    // reload styles.
    reloadStyles();
}
exports.loadTheme = loadTheme;
/**
 * Clear already registered style elements and style records in theme_State object
 * @param option - specify which group of registered styles should be cleared.
 * Default to be both themable and non-themable styles will be cleared
 */
function clearStyles(option) {
    if (option === void 0) { option = 3 /* all */; }
    if (option === 3 /* all */ || option === 2 /* onlyNonThemable */) {
        clearStylesInternal(_themeState.registeredStyles);
        _themeState.registeredStyles = [];
    }
    if (option === 3 /* all */ || option === 1 /* onlyThemable */) {
        clearStylesInternal(_themeState.registeredThemableStyles);
        _themeState.registeredThemableStyles = [];
    }
}
exports.clearStyles = clearStyles;
function clearStylesInternal(records) {
    records.forEach(function (styleRecord) {
        var styleElement = styleRecord && styleRecord.styleElement;
        if (styleElement && styleElement.parentElement) {
            styleElement.parentElement.removeChild(styleElement);
        }
    });
}
/**
 * Reloads styles.
 */
function reloadStyles() {
    if (_themeState.theme) {
        var themableStyles = [];
        for (var _i = 0, _a = _themeState.registeredThemableStyles; _i < _a.length; _i++) {
            var styleRecord = _a[_i];
            themableStyles.push(styleRecord.themableStyle);
        }
        if (themableStyles.length > 0) {
            clearStyles(1 /* onlyThemable */);
            applyThemableStyles([].concat.apply([], themableStyles));
        }
    }
}
/**
 * Find theme tokens and replaces them with provided theme values.
 * @param {string} styles Tokenized styles to fix.
 */
function detokenize(styles) {
    if (styles) {
        styles = resolveThemableArray(splitStyles(styles)).styleString;
    }
    return styles;
}
exports.detokenize = detokenize;
/**
 * Resolves ThemingInstruction objects in an array and joins the result into a string.
 * @param {ThemableArray} splitStyleArray ThemableArray to resolve and join.
 */
function resolveThemableArray(splitStyleArray) {
    var theme = _themeState.theme;
    var themable = false;
    // Resolve the array of theming instructions to an array of strings.
    // Then join the array to produce the final CSS string.
    var resolvedArray = (splitStyleArray || []).map(function (currentValue) {
        var themeSlot = currentValue.theme;
        if (themeSlot) {
            themable = true;
            // A theming annotation. Resolve it.
            var themedValue = theme ? theme[themeSlot] : undefined;
            var defaultValue = currentValue.defaultValue || 'inherit';
            // Warn to console if we hit an unthemed value even when themes are provided, but only if "DEBUG" is true.
            // Allow the themedValue to be undefined to explicitly request the default value.
            if (theme && !themedValue && console && !(themeSlot in theme) && "boolean" !== 'undefined' && true) {
                console.warn("Theming value not provided for \"" + themeSlot + "\". Falling back to \"" + defaultValue + "\".");
            }
            return themedValue || defaultValue;
        }
        else {
            // A non-themable string. Preserve it.
            return currentValue.rawString;
        }
    });
    return {
        styleString: resolvedArray.join(''),
        themable: themable
    };
}
/**
 * Split tokenized CSS into an array of strings and theme specification objects
 * @param {string} styles Tokenized styles to split.
 */
function splitStyles(styles) {
    var result = [];
    if (styles) {
        var pos = 0; // Current position in styles.
        var tokenMatch = void 0; // tslint:disable-line:no-null-keyword
        while (tokenMatch = _themeTokenRegex.exec(styles)) {
            var matchIndex = tokenMatch.index;
            if (matchIndex > pos) {
                result.push({
                    rawString: styles.substring(pos, matchIndex)
                });
            }
            result.push({
                theme: tokenMatch[1],
                defaultValue: tokenMatch[2] // May be undefined
            });
            // index of the first character after the current match
            pos = _themeTokenRegex.lastIndex;
        }
        // Push the rest of the string after the last match.
        result.push({
            rawString: styles.substring(pos)
        });
    }
    return result;
}
exports.splitStyles = splitStyles;
/**
 * Registers a set of style text. If it is registered too early, we will register it when the
 * window.load event is fired.
 * @param {ThemableArray} styleArray Array of IThemingInstruction objects to register.
 * @param {IStyleRecord} styleRecord May specify a style Element to update.
 */
function registerStyles(styleArray) {
    if (typeof document === 'undefined') {
        return;
    }
    var head = document.getElementsByTagName('head')[0];
    var styleElement = document.createElement('style');
    var _a = resolveThemableArray(styleArray), styleString = _a.styleString, themable = _a.themable;
    styleElement.setAttribute('data-load-themed-styles', 'true');
    styleElement.type = 'text/css';
    if (_styleNonce) {
        styleElement.setAttribute('nonce', _styleNonce);
    }
    styleElement.appendChild(document.createTextNode(styleString));
    _themeState.perf.count++;
    head.appendChild(styleElement);
    var ev = document.createEvent('HTMLEvents');
    ev.initEvent('styleinsert', true /* bubbleEvent */, false /* cancelable */);
    ev.args = {
        newStyle: styleElement
    };
    document.dispatchEvent(ev);
    var record = {
        styleElement: styleElement,
        themableStyle: styleArray
    };
    if (themable) {
        _themeState.registeredThemableStyles.push(record);
    }
    else {
        _themeState.registeredStyles.push(record);
    }
}
//# sourceMappingURL=index.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../webpack/buildin/global.js */ "yLpj")))

/***/ }),

/***/ "yLpj":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "zrtF":
/*!**************************************************************!*\
  !*** ./lib/webparts/footer/components/Footer.module.scss.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* tslint:disable */
__webpack_require__(/*! ./Footer.module.css */ "DZ1J");
var styles = {
    footer: 'footer_8d9285df',
    container: 'container_8d9285df',
    row: 'row_8d9285df',
    column: 'column_8d9285df',
    'ms-Grid': 'ms-Grid_8d9285df',
    section_footer: 'section_footer_8d9285df',
    section_footer__footer1: 'section_footer__footer1_8d9285df',
    footer1_brand: 'footer1_brand_8d9285df',
    footer__links: 'footer__links_8d9285df',
    footer__intranet: 'footer__intranet_8d9285df',
    footer__poweredby: 'footer__poweredby_8d9285df',
    section_footer__footer2: 'section_footer__footer2_8d9285df',
    section_footer__footer3: 'section_footer__footer3_8d9285df',
    section_footer__footer4: 'section_footer__footer4_8d9285df'
};
/* harmony default export */ __webpack_exports__["default"] = (styles);
/* tslint:enable */ 


/***/ })

/******/ })});;
//# sourceMappingURL=footer-web-part.js.map