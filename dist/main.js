/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./dist/style.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./dist/style.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../src/img/sushi-bkg.jpg */ "./src/img/sushi-bkg.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Kdam+Thmor+Pro&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html, body {\n    margin: 0;\n    padding: 0;\n    height: 100vh;\n    max-width: 100vw;\n}\n\n#content {\n    display: grid;\n    grid-template-rows: 15vh 78vh 7vh;\n    font-family: 'Kdam Thmor Pro', sans-serif;\n}\n\n.header {\n    grid-row: 1 / 2;\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    align-items: center;\n}\n\n.logo {\n    grid-column: 1 / 2;\n    max-height: 15vh;\n    max-width: 50vw;\n}\n\n.nav-ul {\n    grid-column: 2 / 3;\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    list-style: none;\n    \n}\n\n.site-nav {\n    cursor: pointer;\n    transition: all .3s ease-in-out;\n    font-size: 1.7vh;\n}\n\n.site-nav:hover {\n    transform: scale(1.5);\n}\n\n#home {\n    grid-column: 1 / 2;\n}\n\n#menu {\n    grid-column: 2 / 3;\n}\n\n#contact {\n    grid-column: 3 / 4;\n}\n\n#container {\n    grid-row: 2 / 3;\n    overflow: auto;\n    background: linear-gradient(\n        rgba(0, 0, 0, 0.5),\n        rgba(0, 0, 0, 0.5)\n      ), url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-size: auto 100%;\n}\n\n.main {\n    margin: 2% 7%;\n    background-color: rgb(0, 0, 0, 0.8);\n    padding: 1%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 3vh;\n}\n\n.title, .contact-title {\n    color: azure;\n    font-size: 35px;\n    text-align: center;\n    padding-bottom: 2%;\n}\n\n.p1 {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.team-member {\n    color: azure;\n    font-size: 20px;\n    text-align: center;\n}\n\n.team-pic {\n    display: flex;\n    justify-content: center;\n    max-width: 50%;\n    max-height: 50%;\n    border-radius: 50%;\n}\n\n.menu-img {\n    max-width: 100%;\n}\n\n.contact-grid {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n}\n\n.phone, .address, .phone > a, .address > a {\n    color: azure;\n    text-decoration: none;\n}\n\n.map {\n    max-width: 100%;\n    max-height: 40vh;\n}\n\n.footer {\n    grid-row: 3 / 4;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 5%;\n}\n\n.code-link {\n    text-decoration: none;\n    color: black;\n}\n\n@media only screen and (min-width: 600px) {\n    .nav-ul {\n        font-size: 2vh;\n    }\n    .main {\n        margin: 5% 15%;\n        padding: 5%;\n        gap: 6vh;\n    }\n    .title, .contact-title {\n        font-size: 35px;\n    }\n}\n\n@media only screen and (min-width: 1100px) {\n    #container {\n        background-size: 100% auto;\n    }\n}", "",{"version":3,"sources":["webpack://./dist/style.css"],"names":[],"mappings":"AAEA;IACI,SAAS;IACT,UAAU;IACV,aAAa;IACb,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,iCAAiC;IACjC,yCAAyC;AAC7C;;AAEA;IACI,eAAe;IACf,aAAa;IACb,qCAAqC;IACrC,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,qCAAqC;IACrC,gBAAgB;;AAEpB;;AAEA;IACI,eAAe;IACf,+BAA+B;IAC/B,gBAAgB;AACpB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,cAAc;IACd;;;gDAGkC;IAClC,0BAA0B;AAC9B;;AAEA;IACI,aAAa;IACb,mCAAmC;IACnC,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,QAAQ;AACZ;;AAEA;IACI,YAAY;IACZ,eAAe;IACf,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,cAAc;IACd,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,YAAY;IACZ,qBAAqB;AACzB;;AAEA;IACI,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,OAAO;AACX;;AAEA;IACI,qBAAqB;IACrB,YAAY;AAChB;;AAEA;IACI;QACI,cAAc;IAClB;IACA;QACI,cAAc;QACd,WAAW;QACX,QAAQ;IACZ;IACA;QACI,eAAe;IACnB;AACJ;;AAEA;IACI;QACI,0BAA0B;IAC9B;AACJ","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Kdam+Thmor+Pro&display=swap');\n\nhtml, body {\n    margin: 0;\n    padding: 0;\n    height: 100vh;\n    max-width: 100vw;\n}\n\n#content {\n    display: grid;\n    grid-template-rows: 15vh 78vh 7vh;\n    font-family: 'Kdam Thmor Pro', sans-serif;\n}\n\n.header {\n    grid-row: 1 / 2;\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    align-items: center;\n}\n\n.logo {\n    grid-column: 1 / 2;\n    max-height: 15vh;\n    max-width: 50vw;\n}\n\n.nav-ul {\n    grid-column: 2 / 3;\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    list-style: none;\n    \n}\n\n.site-nav {\n    cursor: pointer;\n    transition: all .3s ease-in-out;\n    font-size: 1.7vh;\n}\n\n.site-nav:hover {\n    transform: scale(1.5);\n}\n\n#home {\n    grid-column: 1 / 2;\n}\n\n#menu {\n    grid-column: 2 / 3;\n}\n\n#contact {\n    grid-column: 3 / 4;\n}\n\n#container {\n    grid-row: 2 / 3;\n    overflow: auto;\n    background: linear-gradient(\n        rgba(0, 0, 0, 0.5),\n        rgba(0, 0, 0, 0.5)\n      ), url(../src/img/sushi-bkg.jpg);\n    background-size: auto 100%;\n}\n\n.main {\n    margin: 2% 7%;\n    background-color: rgb(0, 0, 0, 0.8);\n    padding: 1%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 3vh;\n}\n\n.title, .contact-title {\n    color: azure;\n    font-size: 35px;\n    text-align: center;\n    padding-bottom: 2%;\n}\n\n.p1 {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.team-member {\n    color: azure;\n    font-size: 20px;\n    text-align: center;\n}\n\n.team-pic {\n    display: flex;\n    justify-content: center;\n    max-width: 50%;\n    max-height: 50%;\n    border-radius: 50%;\n}\n\n.menu-img {\n    max-width: 100%;\n}\n\n.contact-grid {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n}\n\n.phone, .address, .phone > a, .address > a {\n    color: azure;\n    text-decoration: none;\n}\n\n.map {\n    max-width: 100%;\n    max-height: 40vh;\n}\n\n.footer {\n    grid-row: 3 / 4;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 5%;\n}\n\n.code-link {\n    text-decoration: none;\n    color: black;\n}\n\n@media only screen and (min-width: 600px) {\n    .nav-ul {\n        font-size: 2vh;\n    }\n    .main {\n        margin: 5% 15%;\n        padding: 5%;\n        gap: 6vh;\n    }\n    .title, .contact-title {\n        font-size: 35px;\n    }\n}\n\n@media only screen and (min-width: 1100px) {\n    #container {\n        background-size: 100% auto;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./dist/style.css":
/*!************************!*\
  !*** ./dist/style.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./dist/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contact": () => (/* binding */ contact)
/* harmony export */ });
/* harmony import */ var _dist_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dist/style.css */ "./dist/style.css");


function contactSetup() {
    const hero = document.createElement('div');
    hero.classList.add('hero');

    const main = document.createElement('div');
    main.classList.add('main');
    const title = document.createElement('p');
    title.classList.add('contact-title');
    title.textContent = 'Contact Us!'
    main.appendChild(title);
    const grid = document.createElement('div');
    grid.classList.add('contact-grid');
    const g1 = document.createElement('div'), g2 = document.createElement('div');
    g1.classList.add('grid-div'), g2.classList.add('grid-div');

    const phone = document.createElement('div');
    const address = document.createElement('div');
    phone.innerHTML = '<p class="phone"><b>Phone:</b>  <a href="tel:+17195742412">(719) 574-2412</a></p>';
    address.innerHTML = '<p class="address"><b>Address:</b>  <a href="https://www.google.com/maps/dir//sushi+near+me/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x871349522fe439cf:0x713790292fdcb217?sa=X&ved=2ahUKEwjbk-SAiav4AhUHb80KHaAhBTEQ9Rd6BAgJEAQ">5935 Dublin Blvd #100, Colorado Springs, CO 80923</a></p>';
    g1.append(phone, address);

    const map = document.createElement('div');
    map.innerHTML = '<iframe class = "map" src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d99319.11456861676!2d-104.73659008153868!3d38.930323623909594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x871349522fe439cf%3A0x713790292fdcb217!2ssushi%20near%20me!3m2!1d38.923665899999996!2d-104.71843589999999!5e0!3m2!1sen!2sus!4v1655145863615!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
    g2.append(map);

    grid.append(g1, g2);
    main.appendChild(grid);

    hero.appendChild(main);

    return hero;
}

function contact() {
    const container = document.querySelector('#container');
    container.textContent = '';
    container.appendChild(contactSetup());
}

/***/ }),

/***/ "./src/home-page.js":
/*!**************************!*\
  !*** ./src/home-page.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "home": () => (/* binding */ home)
/* harmony export */ });
/* harmony import */ var _dist_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dist/style.css */ "./dist/style.css");
/* harmony import */ var _img_chef1_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/chef1.jpg */ "./src/img/chef1.jpg");



function homeSetup() {
    const hero = document.createElement('div');
    hero.classList.add('hero');

    const main = document.createElement('div');
    main.classList.add('main');
    const title = document.createElement('p');
    title.textContent = 'Meet Our Team!'
    title.classList.add('title');
    main.appendChild(title);

    const p1 = document.createElement('div'), p2 = document.createElement('div'), p3 = document.createElement('div'), p4 = document.createElement('div');
    p1.classList.add('p1'), p2.classList.add('p1'), p3.classList.add('p1'), p4.classList.add('p1');

    const tm1 = document.createElement('p'), tm2 = document.createElement('p'), tm3 = document.createElement('p'), tm4 = document.createElement('p');
    tm1.textContent = 'Store Manager', tm2.textContent = 'Lead Chef', tm3.textContent = 'Sous Chef', tm4.textContent = 'Lead Server';
    tm1.classList.add('team-member'), tm2.classList.add('team-member'), tm3.classList.add('team-member'), tm4.classList.add('team-member');


    const tp1 = document.createElement('img'), tp2 = document.createElement('img'), tp3 = document.createElement('img'), tp4 = document.createElement('img');
    tp1.src = _img_chef1_jpg__WEBPACK_IMPORTED_MODULE_1__; 
    tp1.alt= 'Employee image'; 
    tp2.src = _img_chef1_jpg__WEBPACK_IMPORTED_MODULE_1__; 
    tp2.alt='Employee image'; 
    tp3.src = _img_chef1_jpg__WEBPACK_IMPORTED_MODULE_1__; 
    tp3.alt='Employee image'; 
    tp4.src = _img_chef1_jpg__WEBPACK_IMPORTED_MODULE_1__; 
    tp4.alt='Employee image';
    tp1.classList.add('team-pic'), tp2.classList.add('team-pic'), tp3.classList.add('team-pic'), tp4.classList.add('team-pic');

    p1.append(tm1, tp1);
    p2.append(tm2, tp2);
    p3.append(tm3, tp3);
    p4.append(tm4, tp4);

    main.append(p1, p2, p3, p4);
    
    hero.appendChild(main);

    return hero;
}

function home() {
    const container = document.querySelector('#container');
    container.textContent = '';
    container.appendChild(homeSetup());
}

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menu": () => (/* binding */ menu)
/* harmony export */ });
/* harmony import */ var _dist_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dist/style.css */ "./dist/style.css");
/* harmony import */ var _img_apps_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/apps.jpg */ "./src/img/apps.jpg");
/* harmony import */ var _img_entree_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/entree.jpg */ "./src/img/entree.jpg");
/* harmony import */ var _img_rolls_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/rolls.jpg */ "./src/img/rolls.jpg");
/* harmony import */ var _img_spc_rolls_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/spc-rolls.jpg */ "./src/img/spc-rolls.jpg");
/* harmony import */ var _img_combos_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/combos.jpg */ "./src/img/combos.jpg");
/* harmony import */ var _img_kids_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/kids.jpg */ "./src/img/kids.jpg");








function menuSetup() {
    const hero = document.createElement('div');
    hero.classList.add('hero');

    const main = document.createElement('div');
    main.classList.add('main');
    const m1 = document.createElement('img'), m2 = document.createElement('img'), m3 = document.createElement('img'), m4 = document.createElement('img'), m5 = document.createElement('img'), m6 = document.createElement('img');
    m1.classList.add('menu-img'), m2.classList.add('menu-img'), m3.classList.add('menu-img'), m4.classList.add('menu-img'), m5.classList.add('menu-img'), m6.classList.add('menu-img');
    m1.src = _img_apps_jpg__WEBPACK_IMPORTED_MODULE_1__;
    m1.alt = 'Appetizers';
    m2.src = _img_entree_jpg__WEBPACK_IMPORTED_MODULE_2__;
    m2.alt = 'Entrees';
    m3.src = _img_rolls_jpg__WEBPACK_IMPORTED_MODULE_3__;
    m3.alt = 'Rolls';
    m4.src = _img_spc_rolls_jpg__WEBPACK_IMPORTED_MODULE_4__;
    m4.alt = 'Special Rolls';
    m5.src = _img_combos_jpg__WEBPACK_IMPORTED_MODULE_5__;
    m5.alt = 'Combos and Nigiri';
    m6.src = _img_kids_jpg__WEBPACK_IMPORTED_MODULE_6__;
    m6.alt = 'Kids Menu and Desserts';
    main.append(m1, m2, m3, m4, m5, m6);

    hero.appendChild(main);

    return hero;
}

function menu() {
    const container = document.querySelector('#container');
    container.textContent = '';
    container.appendChild(menuSetup());
}

/***/ }),

/***/ "./src/website.js":
/*!************************!*\
  !*** ./src/website.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "onStartUp": () => (/* binding */ onStartUp)
/* harmony export */ });
/* harmony import */ var _home_page_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-page.js */ "./src/home-page.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");
/* harmony import */ var _img_logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/logo.png */ "./src/img/logo.png");





function createNav() {
    const header = document.createElement('div');
    header.classList.add('header');

    const logo = document.createElement('img');
    logo.src = _img_logo_png__WEBPACK_IMPORTED_MODULE_3__;
    logo.alt = 'Sushi Kanpai';
    logo.classList.add('logo');    
    header.appendChild(logo);

    const navList = document.createElement('div');
    navList.classList.add('nav-list');
    const navUL = document.createElement('ul');
    navUL.classList.add('nav-ul');

    const homeBtn = document.createElement('li');
    homeBtn.textContent = 'Home';
    homeBtn.classList.add('site-nav');
    homeBtn.setAttribute('id', 'home');
    homeBtn.addEventListener('click', (e) => {
        if (e.target.classList.contains('active')) return;
        setActiveButton(homeBtn);
        (0,_home_page_js__WEBPACK_IMPORTED_MODULE_0__.home)();
    });
    
    const menuBtn = document.createElement('li');
    menuBtn.textContent = 'Menu';
    menuBtn.classList.add('site-nav');
    menuBtn.setAttribute('id', 'menu');
    menuBtn.addEventListener('click', (e) => {
        if (e.target.classList.contains('active')) return;
        setActiveButton(menuBtn);
        (0,_menu_js__WEBPACK_IMPORTED_MODULE_1__.menu)();
    });

    const contactBtn = document.createElement('li');
    contactBtn.textContent = 'Contact';
    contactBtn.classList.add('site-nav');
    contactBtn.setAttribute('id', 'contact');
    contactBtn.addEventListener('click', (e) => {
        if (e.target.classList.contains('active')) return;
        setActiveButton(contactBtn);
        (0,_contact_js__WEBPACK_IMPORTED_MODULE_2__.contact)();
    });
    
    navUL.append(homeBtn, menuBtn, contactBtn);
    navList.appendChild(navUL);
    header.appendChild(navList);

    return header;
}

function setActiveButton(button) {
    const buttons = document.querySelectorAll('.site-nav');
  
    buttons.forEach((button) => {
      if (button !== this) {
        button.classList.remove("active");
      }
    });
  
    button.classList.add("active");
}

function mainContent() {
    const container = document.createElement('div');
    container.setAttribute('id', 'container');
    return container;
}

function createFooter() {
    const footer = document.createElement('footer');
    footer.classList.add('footer');
    const fname = document.createElement('div');
    fname.classList.add('footer-name');     
    const code = document.createElement('div');
    code.classList.add('code-link');

    fname.textContent = 'Katy Nightshade 2022';
    code.innerHTML = '<p><a href="https://github.com/katynightshade/sushi-kanpai">GitHub</a></p>';

    footer.append(fname, code);

    return footer;
}

function onStartUp() {
    const content = document.querySelector('#content');

    content.appendChild(createNav());
    content.appendChild(mainContent());
    content.appendChild(createFooter());

    setActiveButton(document.querySelector('.site-nav'));
    (0,_home_page_js__WEBPACK_IMPORTED_MODULE_0__.home)();
}

/***/ }),

/***/ "./src/img/apps.jpg":
/*!**************************!*\
  !*** ./src/img/apps.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d65e210246811153ae43.jpg";

/***/ }),

/***/ "./src/img/chef1.jpg":
/*!***************************!*\
  !*** ./src/img/chef1.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "955e9bae5aa9d7ee7af8.jpg";

/***/ }),

/***/ "./src/img/combos.jpg":
/*!****************************!*\
  !*** ./src/img/combos.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9de5856f6e552e5be1fe.jpg";

/***/ }),

/***/ "./src/img/entree.jpg":
/*!****************************!*\
  !*** ./src/img/entree.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c0ff37f649cc9a7a41b0.jpg";

/***/ }),

/***/ "./src/img/kids.jpg":
/*!**************************!*\
  !*** ./src/img/kids.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "afbe0aa429d1db9081cf.jpg";

/***/ }),

/***/ "./src/img/logo.png":
/*!**************************!*\
  !*** ./src/img/logo.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a3c9788b1d68a4d8fa5d.png";

/***/ }),

/***/ "./src/img/rolls.jpg":
/*!***************************!*\
  !*** ./src/img/rolls.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "de29822792979bd24677.jpg";

/***/ }),

/***/ "./src/img/spc-rolls.jpg":
/*!*******************************!*\
  !*** ./src/img/spc-rolls.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "36e23e9da7bd14405fe8.jpg";

/***/ }),

/***/ "./src/img/sushi-bkg.jpg":
/*!*******************************!*\
  !*** ./src/img/sushi-bkg.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "90f3e3c961d2f561d826.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _website_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./website.js */ "./src/website.js");


(0,_website_js__WEBPACK_IMPORTED_MODULE_0__.onStartUp)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDcEdBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7O0FDQXVDOztBQUV2QyxzREFBUyxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3VzaGkta2FucGFpLy4vZGlzdC9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vc3VzaGkta2FucGFpLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9zdXNoaS1rYW5wYWkvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3N1c2hpLWthbnBhaS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3N1c2hpLWthbnBhaS8uL2Rpc3Qvc3R5bGUuY3NzP2I1YzYiLCJ3ZWJwYWNrOi8vc3VzaGkta2FucGFpLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3N1c2hpLWthbnBhaS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vc3VzaGkta2FucGFpLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3N1c2hpLWthbnBhaS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9zdXNoaS1rYW5wYWkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9zdXNoaS1rYW5wYWkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9zdXNoaS1rYW5wYWkvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9zdXNoaS1rYW5wYWkvLi9zcmMvaG9tZS1wYWdlLmpzIiwid2VicGFjazovL3N1c2hpLWthbnBhaS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3N1c2hpLWthbnBhaS8uL3NyYy93ZWJzaXRlLmpzIiwid2VicGFjazovL3N1c2hpLWthbnBhaS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zdXNoaS1rYW5wYWkvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vc3VzaGkta2FucGFpL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9zdXNoaS1rYW5wYWkvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9zdXNoaS1rYW5wYWkvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9zdXNoaS1rYW5wYWkvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9zdXNoaS1rYW5wYWkvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vc3VzaGkta2FucGFpL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3N1c2hpLWthbnBhaS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vc3VzaGkta2FucGFpLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9zcmMvaW1nL3N1c2hpLWJrZy5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUtkYW0rVGhtb3IrUHJvJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJodG1sLCBib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBtYXgtd2lkdGg6IDEwMHZ3O1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTV2aCA3OHZoIDd2aDtcXG4gICAgZm9udC1mYW1pbHk6ICdLZGFtIFRobW9yIFBybycsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5sb2dvIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICBtYXgtaGVpZ2h0OiAxNXZoO1xcbiAgICBtYXgtd2lkdGg6IDUwdnc7XFxufVxcblxcbi5uYXYtdWwge1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIFxcbn1cXG5cXG4uc2l0ZS1uYXYge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1pbi1vdXQ7XFxuICAgIGZvbnQtc2l6ZTogMS43dmg7XFxufVxcblxcbi5zaXRlLW5hdjpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcXG59XFxuXFxuI2hvbWUge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxufVxcblxcbiNtZW51IHtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbn1cXG5cXG4jY29udGFjdCB7XFxuICAgIGdyaWQtY29sdW1uOiAzIC8gNDtcXG59XFxuXFxuI2NvbnRhaW5lciB7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcXG4gICAgICAgIHJnYmEoMCwgMCwgMCwgMC41KSxcXG4gICAgICAgIHJnYmEoMCwgMCwgMCwgMC41KVxcbiAgICAgICksIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogYXV0byAxMDAlO1xcbn1cXG5cXG4ubWFpbiB7XFxuICAgIG1hcmdpbjogMiUgNyU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAwLjgpO1xcbiAgICBwYWRkaW5nOiAxJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogM3ZoO1xcbn1cXG5cXG4udGl0bGUsIC5jb250YWN0LXRpdGxlIHtcXG4gICAgY29sb3I6IGF6dXJlO1xcbiAgICBmb250LXNpemU6IDM1cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZy1ib3R0b206IDIlO1xcbn1cXG5cXG4ucDEge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRlYW0tbWVtYmVyIHtcXG4gICAgY29sb3I6IGF6dXJlO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnRlYW0tcGljIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1heC13aWR0aDogNTAlO1xcbiAgICBtYXgtaGVpZ2h0OiA1MCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLm1lbnUtaW1nIHtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uY29udGFjdC1ncmlkIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbn1cXG5cXG4ucGhvbmUsIC5hZGRyZXNzLCAucGhvbmUgPiBhLCAuYWRkcmVzcyA+IGEge1xcbiAgICBjb2xvcjogYXp1cmU7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLm1hcCB7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgbWF4LWhlaWdodDogNDB2aDtcXG59XFxuXFxuLmZvb3RlciB7XFxuICAgIGdyaWQtcm93OiAzIC8gNDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNSU7XFxufVxcblxcbi5jb2RlLWxpbmsge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGNvbG9yOiBibGFjaztcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xcbiAgICAubmF2LXVsIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMnZoO1xcbiAgICB9XFxuICAgIC5tYWluIHtcXG4gICAgICAgIG1hcmdpbjogNSUgMTUlO1xcbiAgICAgICAgcGFkZGluZzogNSU7XFxuICAgICAgICBnYXA6IDZ2aDtcXG4gICAgfVxcbiAgICAudGl0bGUsIC5jb250YWN0LXRpdGxlIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMzVweDtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDExMDBweCkge1xcbiAgICAjY29udGFpbmVyIHtcXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSBhdXRvO1xcbiAgICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL2Rpc3Qvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGlDQUFpQztJQUNqQyx5Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLHFDQUFxQztJQUNyQyxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHFDQUFxQztJQUNyQyxnQkFBZ0I7O0FBRXBCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLCtCQUErQjtJQUMvQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkOzs7Z0RBR2tDO0lBQ2xDLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQ0FBbUM7SUFDbkMsV0FBVztJQUNYLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsY0FBYztJQUNkLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLFlBQVk7SUFDWixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLE9BQU87QUFDWDs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0k7UUFDSSxjQUFjO0lBQ2xCO0lBQ0E7UUFDSSxjQUFjO1FBQ2QsV0FBVztRQUNYLFFBQVE7SUFDWjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSwwQkFBMEI7SUFDOUI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1LZGFtK1RobW9yK1BybyZkaXNwbGF5PXN3YXAnKTtcXG5cXG5odG1sLCBib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBtYXgtd2lkdGg6IDEwMHZ3O1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTV2aCA3OHZoIDd2aDtcXG4gICAgZm9udC1mYW1pbHk6ICdLZGFtIFRobW9yIFBybycsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5sb2dvIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICBtYXgtaGVpZ2h0OiAxNXZoO1xcbiAgICBtYXgtd2lkdGg6IDUwdnc7XFxufVxcblxcbi5uYXYtdWwge1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIFxcbn1cXG5cXG4uc2l0ZS1uYXYge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1pbi1vdXQ7XFxuICAgIGZvbnQtc2l6ZTogMS43dmg7XFxufVxcblxcbi5zaXRlLW5hdjpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcXG59XFxuXFxuI2hvbWUge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxufVxcblxcbiNtZW51IHtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbn1cXG5cXG4jY29udGFjdCB7XFxuICAgIGdyaWQtY29sdW1uOiAzIC8gNDtcXG59XFxuXFxuI2NvbnRhaW5lciB7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcXG4gICAgICAgIHJnYmEoMCwgMCwgMCwgMC41KSxcXG4gICAgICAgIHJnYmEoMCwgMCwgMCwgMC41KVxcbiAgICAgICksIHVybCguLi9zcmMvaW1nL3N1c2hpLWJrZy5qcGcpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGF1dG8gMTAwJTtcXG59XFxuXFxuLm1haW4ge1xcbiAgICBtYXJnaW46IDIlIDclO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwgMC44KTtcXG4gICAgcGFkZGluZzogMSU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDN2aDtcXG59XFxuXFxuLnRpdGxlLCAuY29udGFjdC10aXRsZSB7XFxuICAgIGNvbG9yOiBhenVyZTtcXG4gICAgZm9udC1zaXplOiAzNXB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctYm90dG9tOiAyJTtcXG59XFxuXFxuLnAxIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50ZWFtLW1lbWJlciB7XFxuICAgIGNvbG9yOiBhenVyZTtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi50ZWFtLXBpYyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtYXgtd2lkdGg6IDUwJTtcXG4gICAgbWF4LWhlaWdodDogNTAlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi5tZW51LWltZyB7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG59XFxuXFxuLmNvbnRhY3QtZ3JpZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG59XFxuXFxuLnBob25lLCAuYWRkcmVzcywgLnBob25lID4gYSwgLmFkZHJlc3MgPiBhIHtcXG4gICAgY29sb3I6IGF6dXJlO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi5tYXAge1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIG1heC1oZWlnaHQ6IDQwdmg7XFxufVxcblxcbi5mb290ZXIge1xcbiAgICBncmlkLXJvdzogMyAvIDQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDUlO1xcbn1cXG5cXG4uY29kZS1saW5rIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcXG4gICAgLm5hdi11bCB7XFxuICAgICAgICBmb250LXNpemU6IDJ2aDtcXG4gICAgfVxcbiAgICAubWFpbiB7XFxuICAgICAgICBtYXJnaW46IDUlIDE1JTtcXG4gICAgICAgIHBhZGRpbmc6IDUlO1xcbiAgICAgICAgZ2FwOiA2dmg7XFxuICAgIH1cXG4gICAgLnRpdGxlLCAuY29udGFjdC10aXRsZSB7XFxuICAgICAgICBmb250LXNpemU6IDM1cHg7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMTAwcHgpIHtcXG4gICAgI2NvbnRhaW5lciB7XFxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgYXV0bztcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuLi9kaXN0L3N0eWxlLmNzcyc7XG5cbmZ1bmN0aW9uIGNvbnRhY3RTZXR1cCgpIHtcbiAgICBjb25zdCBoZXJvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVyby5jbGFzc0xpc3QuYWRkKCdoZXJvJyk7XG5cbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKCdtYWluJyk7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgnY29udGFjdC10aXRsZScpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gJ0NvbnRhY3QgVXMhJ1xuICAgIG1haW4uYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBncmlkLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtZ3JpZCcpO1xuICAgIGNvbnN0IGcxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksIGcyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZzEuY2xhc3NMaXN0LmFkZCgnZ3JpZC1kaXYnKSwgZzIuY2xhc3NMaXN0LmFkZCgnZ3JpZC1kaXYnKTtcblxuICAgIGNvbnN0IHBob25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgYWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBob25lLmlubmVySFRNTCA9ICc8cCBjbGFzcz1cInBob25lXCI+PGI+UGhvbmU6PC9iPiAgPGEgaHJlZj1cInRlbDorMTcxOTU3NDI0MTJcIj4oNzE5KSA1NzQtMjQxMjwvYT48L3A+JztcbiAgICBhZGRyZXNzLmlubmVySFRNTCA9ICc8cCBjbGFzcz1cImFkZHJlc3NcIj48Yj5BZGRyZXNzOjwvYj4gIDxhIGhyZWY9XCJodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvZGlyLy9zdXNoaStuZWFyK21lL2RhdGE9ITRtNiE0bTUhMW0xITRlMiExbTIhMW0xITFzMHg4NzEzNDk1MjJmZTQzOWNmOjB4NzEzNzkwMjkyZmRjYjIxNz9zYT1YJnZlZD0yYWhVS0V3amJrLVNBaWF2NEFoVUhiODBLSGFBaEJURVE5UmQ2QkFnSkVBUVwiPjU5MzUgRHVibGluIEJsdmQgIzEwMCwgQ29sb3JhZG8gU3ByaW5ncywgQ08gODA5MjM8L2E+PC9wPic7XG4gICAgZzEuYXBwZW5kKHBob25lLCBhZGRyZXNzKTtcblxuICAgIGNvbnN0IG1hcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1hcC5pbm5lckhUTUwgPSAnPGlmcmFtZSBjbGFzcyA9IFwibWFwXCIgc3JjPVwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL2VtYmVkP3BiPSExbTIzITFtMTIhMW0zITFkOTkzMTkuMTE0NTY4NjE2NzYhMmQtMTA0LjczNjU5MDA4MTUzODY4ITNkMzguOTMwMzIzNjIzOTA5NTk0ITJtMyExZjAhMmYwITNmMCEzbTIhMWkxMDI0ITJpNzY4ITRmMTMuMSE0bTghM2U2ITRtMCE0bTUhMXMweDg3MTM0OTUyMmZlNDM5Y2YlM0EweDcxMzc5MDI5MmZkY2IyMTchMnNzdXNoaSUyMG5lYXIlMjBtZSEzbTIhMWQzOC45MjM2NjU4OTk5OTk5OTYhMmQtMTA0LjcxODQzNTg5OTk5OTk5ITVlMCEzbTIhMXNlbiEyc3VzITR2MTY1NTE0NTg2MzYxNSE1bTIhMXNlbiEyc3VzXCIgd2lkdGg9XCI2MDBcIiBoZWlnaHQ9XCI0NTBcIiBzdHlsZT1cImJvcmRlcjowO1wiIGFsbG93ZnVsbHNjcmVlbj1cIlwiIGxvYWRpbmc9XCJsYXp5XCIgcmVmZXJyZXJwb2xpY3k9XCJuby1yZWZlcnJlci13aGVuLWRvd25ncmFkZVwiPjwvaWZyYW1lPic7XG4gICAgZzIuYXBwZW5kKG1hcCk7XG5cbiAgICBncmlkLmFwcGVuZChnMSwgZzIpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoZ3JpZCk7XG5cbiAgICBoZXJvLmFwcGVuZENoaWxkKG1haW4pO1xuXG4gICAgcmV0dXJuIGhlcm87XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb250YWN0KCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250YWluZXInKTtcbiAgICBjb250YWluZXIudGV4dENvbnRlbnQgPSAnJztcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFjdFNldHVwKCkpO1xufSIsImltcG9ydCAnLi4vZGlzdC9zdHlsZS5jc3MnO1xuaW1wb3J0IENoZWYgZnJvbSAnLi9pbWcvY2hlZjEuanBnJztcblxuZnVuY3Rpb24gaG9tZVNldHVwKCkge1xuICAgIGNvbnN0IGhlcm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZXJvLmNsYXNzTGlzdC5hZGQoJ2hlcm8nKTtcblxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoJ21haW4nKTtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9ICdNZWV0IE91ciBUZWFtISdcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgY29uc3QgcDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSwgcDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSwgcDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSwgcDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwMS5jbGFzc0xpc3QuYWRkKCdwMScpLCBwMi5jbGFzc0xpc3QuYWRkKCdwMScpLCBwMy5jbGFzc0xpc3QuYWRkKCdwMScpLCBwNC5jbGFzc0xpc3QuYWRkKCdwMScpO1xuXG4gICAgY29uc3QgdG0xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpLCB0bTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyksIHRtMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKSwgdG00ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHRtMS50ZXh0Q29udGVudCA9ICdTdG9yZSBNYW5hZ2VyJywgdG0yLnRleHRDb250ZW50ID0gJ0xlYWQgQ2hlZicsIHRtMy50ZXh0Q29udGVudCA9ICdTb3VzIENoZWYnLCB0bTQudGV4dENvbnRlbnQgPSAnTGVhZCBTZXJ2ZXInO1xuICAgIHRtMS5jbGFzc0xpc3QuYWRkKCd0ZWFtLW1lbWJlcicpLCB0bTIuY2xhc3NMaXN0LmFkZCgndGVhbS1tZW1iZXInKSwgdG0zLmNsYXNzTGlzdC5hZGQoJ3RlYW0tbWVtYmVyJyksIHRtNC5jbGFzc0xpc3QuYWRkKCd0ZWFtLW1lbWJlcicpO1xuXG5cbiAgICBjb25zdCB0cDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKSwgdHAyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyksIHRwMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpLCB0cDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICB0cDEuc3JjID0gQ2hlZjsgXG4gICAgdHAxLmFsdD0gJ0VtcGxveWVlIGltYWdlJzsgXG4gICAgdHAyLnNyYyA9IENoZWY7IFxuICAgIHRwMi5hbHQ9J0VtcGxveWVlIGltYWdlJzsgXG4gICAgdHAzLnNyYyA9IENoZWY7IFxuICAgIHRwMy5hbHQ9J0VtcGxveWVlIGltYWdlJzsgXG4gICAgdHA0LnNyYyA9IENoZWY7IFxuICAgIHRwNC5hbHQ9J0VtcGxveWVlIGltYWdlJztcbiAgICB0cDEuY2xhc3NMaXN0LmFkZCgndGVhbS1waWMnKSwgdHAyLmNsYXNzTGlzdC5hZGQoJ3RlYW0tcGljJyksIHRwMy5jbGFzc0xpc3QuYWRkKCd0ZWFtLXBpYycpLCB0cDQuY2xhc3NMaXN0LmFkZCgndGVhbS1waWMnKTtcblxuICAgIHAxLmFwcGVuZCh0bTEsIHRwMSk7XG4gICAgcDIuYXBwZW5kKHRtMiwgdHAyKTtcbiAgICBwMy5hcHBlbmQodG0zLCB0cDMpO1xuICAgIHA0LmFwcGVuZCh0bTQsIHRwNCk7XG5cbiAgICBtYWluLmFwcGVuZChwMSwgcDIsIHAzLCBwNCk7XG4gICAgXG4gICAgaGVyby5hcHBlbmRDaGlsZChtYWluKTtcblxuICAgIHJldHVybiBoZXJvO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaG9tZSgpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFpbmVyJyk7XG4gICAgY29udGFpbmVyLnRleHRDb250ZW50ID0gJyc7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhvbWVTZXR1cCgpKTtcbn0iLCJpbXBvcnQgJy4uL2Rpc3Qvc3R5bGUuY3NzJztcbmltcG9ydCBBcHBzIGZyb20gJy4vaW1nL2FwcHMuanBnJztcbmltcG9ydCBFbnRyZWUgZnJvbSAnLi9pbWcvZW50cmVlLmpwZyc7XG5pbXBvcnQgUm9sbHMgZnJvbSAnLi9pbWcvcm9sbHMuanBnJztcbmltcG9ydCBTcGVjaWFsIGZyb20gJy4vaW1nL3NwYy1yb2xscy5qcGcnO1xuaW1wb3J0IENvbWJvcyBmcm9tICcuL2ltZy9jb21ib3MuanBnJztcbmltcG9ydCBLaWRzIGZyb20gJy4vaW1nL2tpZHMuanBnJztcblxuZnVuY3Rpb24gbWVudVNldHVwKCkge1xuICAgIGNvbnN0IGhlcm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZXJvLmNsYXNzTGlzdC5hZGQoJ2hlcm8nKTtcblxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoJ21haW4nKTtcbiAgICBjb25zdCBtMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpLCBtMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpLCBtMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpLCBtNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpLCBtNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpLCBtNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIG0xLmNsYXNzTGlzdC5hZGQoJ21lbnUtaW1nJyksIG0yLmNsYXNzTGlzdC5hZGQoJ21lbnUtaW1nJyksIG0zLmNsYXNzTGlzdC5hZGQoJ21lbnUtaW1nJyksIG00LmNsYXNzTGlzdC5hZGQoJ21lbnUtaW1nJyksIG01LmNsYXNzTGlzdC5hZGQoJ21lbnUtaW1nJyksIG02LmNsYXNzTGlzdC5hZGQoJ21lbnUtaW1nJyk7XG4gICAgbTEuc3JjID0gQXBwcztcbiAgICBtMS5hbHQgPSAnQXBwZXRpemVycyc7XG4gICAgbTIuc3JjID0gRW50cmVlO1xuICAgIG0yLmFsdCA9ICdFbnRyZWVzJztcbiAgICBtMy5zcmMgPSBSb2xscztcbiAgICBtMy5hbHQgPSAnUm9sbHMnO1xuICAgIG00LnNyYyA9IFNwZWNpYWw7XG4gICAgbTQuYWx0ID0gJ1NwZWNpYWwgUm9sbHMnO1xuICAgIG01LnNyYyA9IENvbWJvcztcbiAgICBtNS5hbHQgPSAnQ29tYm9zIGFuZCBOaWdpcmknO1xuICAgIG02LnNyYyA9IEtpZHM7XG4gICAgbTYuYWx0ID0gJ0tpZHMgTWVudSBhbmQgRGVzc2VydHMnO1xuICAgIG1haW4uYXBwZW5kKG0xLCBtMiwgbTMsIG00LCBtNSwgbTYpO1xuXG4gICAgaGVyby5hcHBlbmRDaGlsZChtYWluKTtcblxuICAgIHJldHVybiBoZXJvO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWVudSgpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFpbmVyJyk7XG4gICAgY29udGFpbmVyLnRleHRDb250ZW50ID0gJyc7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVTZXR1cCgpKTtcbn0iLCJpbXBvcnQge2hvbWV9IGZyb20gJy4vaG9tZS1wYWdlLmpzJztcbmltcG9ydCB7bWVudX0gZnJvbSAnLi9tZW51LmpzJztcbmltcG9ydCB7Y29udGFjdH0gZnJvbSAnLi9jb250YWN0LmpzJztcbmltcG9ydCBMb2dvIGZyb20gJy4vaW1nL2xvZ28ucG5nJztcblxuZnVuY3Rpb24gY3JlYXRlTmF2KCkge1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcblxuICAgIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBsb2dvLnNyYyA9IExvZ287XG4gICAgbG9nby5hbHQgPSAnU3VzaGkgS2FucGFpJztcbiAgICBsb2dvLmNsYXNzTGlzdC5hZGQoJ2xvZ28nKTsgICAgXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGxvZ28pO1xuXG4gICAgY29uc3QgbmF2TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5hdkxpc3QuY2xhc3NMaXN0LmFkZCgnbmF2LWxpc3QnKTtcbiAgICBjb25zdCBuYXZVTCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgbmF2VUwuY2xhc3NMaXN0LmFkZCgnbmF2LXVsJyk7XG5cbiAgICBjb25zdCBob21lQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBob21lQnRuLnRleHRDb250ZW50ID0gJ0hvbWUnO1xuICAgIGhvbWVCdG4uY2xhc3NMaXN0LmFkZCgnc2l0ZS1uYXYnKTtcbiAgICBob21lQnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAnaG9tZScpO1xuICAgIGhvbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkgcmV0dXJuO1xuICAgICAgICBzZXRBY3RpdmVCdXR0b24oaG9tZUJ0bik7XG4gICAgICAgIGhvbWUoKTtcbiAgICB9KTtcbiAgICBcbiAgICBjb25zdCBtZW51QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBtZW51QnRuLnRleHRDb250ZW50ID0gJ01lbnUnO1xuICAgIG1lbnVCdG4uY2xhc3NMaXN0LmFkZCgnc2l0ZS1uYXYnKTtcbiAgICBtZW51QnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVudScpO1xuICAgIG1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkgcmV0dXJuO1xuICAgICAgICBzZXRBY3RpdmVCdXR0b24obWVudUJ0bik7XG4gICAgICAgIG1lbnUoKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGNvbnRhY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnRhY3RCdG4udGV4dENvbnRlbnQgPSAnQ29udGFjdCc7XG4gICAgY29udGFjdEJ0bi5jbGFzc0xpc3QuYWRkKCdzaXRlLW5hdicpO1xuICAgIGNvbnRhY3RCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdjb250YWN0Jyk7XG4gICAgY29udGFjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSByZXR1cm47XG4gICAgICAgIHNldEFjdGl2ZUJ1dHRvbihjb250YWN0QnRuKTtcbiAgICAgICAgY29udGFjdCgpO1xuICAgIH0pO1xuICAgIFxuICAgIG5hdlVMLmFwcGVuZChob21lQnRuLCBtZW51QnRuLCBjb250YWN0QnRuKTtcbiAgICBuYXZMaXN0LmFwcGVuZENoaWxkKG5hdlVMKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobmF2TGlzdCk7XG5cbiAgICByZXR1cm4gaGVhZGVyO1xufVxuXG5mdW5jdGlvbiBzZXRBY3RpdmVCdXR0b24oYnV0dG9uKSB7XG4gICAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaXRlLW5hdicpO1xuICBcbiAgICBidXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgaWYgKGJ1dHRvbiAhPT0gdGhpcykge1xuICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgXG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG59XG5cbmZ1bmN0aW9uIG1haW5Db250ZW50KCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRhaW5lcicpO1xuICAgIHJldHVybiBjb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZvb3RlcigpIHtcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcbiAgICBmb290ZXIuY2xhc3NMaXN0LmFkZCgnZm9vdGVyJyk7XG4gICAgY29uc3QgZm5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmbmFtZS5jbGFzc0xpc3QuYWRkKCdmb290ZXItbmFtZScpOyAgICAgXG4gICAgY29uc3QgY29kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvZGUuY2xhc3NMaXN0LmFkZCgnY29kZS1saW5rJyk7XG5cbiAgICBmbmFtZS50ZXh0Q29udGVudCA9ICdLYXR5IE5pZ2h0c2hhZGUgMjAyMic7XG4gICAgY29kZS5pbm5lckhUTUwgPSAnPHA+PGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9rYXR5bmlnaHRzaGFkZS9zdXNoaS1rYW5wYWlcIj5HaXRIdWI8L2E+PC9wPic7XG5cbiAgICBmb290ZXIuYXBwZW5kKGZuYW1lLCBjb2RlKTtcblxuICAgIHJldHVybiBmb290ZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvblN0YXJ0VXAoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZU5hdigpKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1haW5Db250ZW50KCkpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlRm9vdGVyKCkpO1xuXG4gICAgc2V0QWN0aXZlQnV0dG9uKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaXRlLW5hdicpKTtcbiAgICBob21lKCk7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7b25TdGFydFVwfSBmcm9tICcuL3dlYnNpdGUuanMnO1xuXG5vblN0YXJ0VXAoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=