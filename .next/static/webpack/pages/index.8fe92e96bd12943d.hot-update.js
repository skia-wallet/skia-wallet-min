"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ _class; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service */ \"./pages/service.js\");\n/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_service__WEBPACK_IMPORTED_MODULE_2__);\nfunction _assertThisInitialized(self) {\n    if (self === void 0) {\n        throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n    }\n    return self;\n}\nfunction _classCallCheck(instance, Constructor) {\n    if (!(instance instanceof Constructor)) {\n        throw new TypeError(\"Cannot call a class as a function\");\n    }\n}\nfunction _defineProperties(target, props) {\n    for(var i = 0; i < props.length; i++){\n        var descriptor = props[i];\n        descriptor.enumerable = descriptor.enumerable || false;\n        descriptor.configurable = true;\n        if (\"value\" in descriptor) descriptor.writable = true;\n        Object.defineProperty(target, descriptor.key, descriptor);\n    }\n}\nfunction _createClass(Constructor, protoProps, staticProps) {\n    if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n    if (staticProps) _defineProperties(Constructor, staticProps);\n    return Constructor;\n}\nfunction _getPrototypeOf(o) {\n    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n        return o.__proto__ || Object.getPrototypeOf(o);\n    };\n    return _getPrototypeOf(o);\n}\nfunction _inherits(subClass, superClass) {\n    if (typeof superClass !== \"function\" && superClass !== null) {\n        throw new TypeError(\"Super expression must either be null or a function\");\n    }\n    subClass.prototype = Object.create(superClass && superClass.prototype, {\n        constructor: {\n            value: subClass,\n            writable: true,\n            configurable: true\n        }\n    });\n    if (superClass) _setPrototypeOf(subClass, superClass);\n}\nfunction _possibleConstructorReturn(self, call) {\n    if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {\n        return call;\n    }\n    return _assertThisInitialized(self);\n}\nfunction _setPrototypeOf(o, p) {\n    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n        o.__proto__ = p;\n        return o;\n    };\n    return _setPrototypeOf(o, p);\n}\nvar _typeof = function(obj) {\n    \"@swc/helpers - typeof\";\n    return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj;\n};\nfunction _isNativeReflectConstruct() {\n    if (typeof Reflect === \"undefined\" || !Reflect.construct) return false;\n    if (Reflect.construct.sham) return false;\n    if (typeof Proxy === \"function\") return true;\n    try {\n        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));\n        return true;\n    } catch (e) {\n        return false;\n    }\n}\nfunction _createSuper(Derived) {\n    var hasNativeReflectConstruct = _isNativeReflectConstruct();\n    return function _createSuperInternal() {\n        var Super = _getPrototypeOf(Derived), result;\n        if (hasNativeReflectConstruct) {\n            var NewTarget = _getPrototypeOf(this).constructor;\n            result = Reflect.construct(Super, arguments, NewTarget);\n        } else {\n            result = Super.apply(this, arguments);\n        }\n        return _possibleConstructorReturn(this, result);\n    };\n}\n\n\n\nvar _class = /*#__PURE__*/ function(Component1) {\n    \"use strict\";\n    _inherits(_class, Component1);\n    var _super = _createSuper(_class);\n    function _class() {\n        _classCallCheck(this, _class);\n        return _super.apply(this, arguments);\n    }\n    _createClass(_class, [\n        {\n            key: \"render\",\n            value: function render() {\n                var _this = this;\n                if (true) {\n                    if (_service__WEBPACK_IMPORTED_MODULE_2__.accounts.length == 0) {\n                        (0,_service__WEBPACK_IMPORTED_MODULE_2__.showWelcome)();\n                    } else {\n                        (0,_service__WEBPACK_IMPORTED_MODULE_2__.showAccounts)();\n                    }\n                    document.getElementById(\"create-account\").addEventListener(\"click\", _service__WEBPACK_IMPORTED_MODULE_2__.createAccount);\n                //localStorage.clear();\n                }\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: \"Skia Wallet\"\n                            }, void 0, false, {\n                                fileName: \"/home/hexdee/skia-wallet/pages/index.js\",\n                                lineNumber: 19,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/hexdee/skia-wallet/pages/index.js\",\n                            lineNumber: 18,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                            className: \"accounts\",\n                            id: \"create\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    children: \"Welcome to Skia Wallet\"\n                                }, void 0, false, {\n                                    fileName: \"/home/hexdee/skia-wallet/pages/index.js\",\n                                    lineNumber: 22,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/home/hexdee/skia-wallet/pages/index.js\",\n                                    lineNumber: 22,\n                                    columnNumber: 48\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: \"Get started by creating an account \"\n                                }, void 0, false, {\n                                    fileName: \"/home/hexdee/skia-wallet/pages/index.js\",\n                                    lineNumber: 24,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/home/hexdee/skia-wallet/pages/index.js\",\n                                    lineNumber: 24,\n                                    columnNumber: 59\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    id: \"create-account\",\n                                    children: \"Create Account\"\n                                }, void 0, false, {\n                                    fileName: \"/home/hexdee/skia-wallet/pages/index.js\",\n                                    lineNumber: 25,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    id: \"wait\"\n                                }, void 0, false, {\n                                    fileName: \"/home/hexdee/skia-wallet/pages/index.js\",\n                                    lineNumber: 26,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/hexdee/skia-wallet/pages/index.js\",\n                            lineNumber: 21,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                            className: \"accounts\",\n                            id: \"account\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    children: \"Accounts\"\n                                }, void 0, false, {\n                                    fileName: \"/home/hexdee/skia-wallet/pages/index.js\",\n                                    lineNumber: 29,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/home/hexdee/skia-wallet/pages/index.js\",\n                                    lineNumber: 29,\n                                    columnNumber: 34\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                            children: \"Public key: \"\n                                        }, void 0, false, {\n                                            fileName: \"/home/hexdee/skia-wallet/pages/index.js\",\n                                            lineNumber: 31,\n                                            columnNumber: 20\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            id: \"public-key\",\n                                            children: _service__WEBPACK_IMPORTED_MODULE_2__.public_key\n                                        }, void 0, false, {\n                                            fileName: \"/home/hexdee/skia-wallet/pages/index.js\",\n                                            lineNumber: 31,\n                                            columnNumber: 49\n                                        }, this),\n                                        \" \"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/hexdee/skia-wallet/pages/index.js\",\n                                    lineNumber: 31,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    id: \"private\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                            children: \"Private Key: \"\n                                        }, void 0, false, {\n                                            fileName: \"/home/hexdee/skia-wallet/pages/index.js\",\n                                            lineNumber: 32,\n                                            columnNumber: 33\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            id: \"private-key\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/hexdee/skia-wallet/pages/index.js\",\n                                            lineNumber: 32,\n                                            columnNumber: 63\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/hexdee/skia-wallet/pages/index.js\",\n                                    lineNumber: 32,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/home/hexdee/skia-wallet/pages/index.js\",\n                                    lineNumber: 32,\n                                    columnNumber: 97\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    children: \"Show Private Key\"\n                                }, void 0, false, {\n                                    fileName: \"/home/hexdee/skia-wallet/pages/index.js\",\n                                    lineNumber: 33,\n                                    columnNumber: 17\n                                }, this),\n                                _service__WEBPACK_IMPORTED_MODULE_2__.accounts ? _service__WEBPACK_IMPORTED_MODULE_2__.accounts.map(function(account) {\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex-container\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex-item\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    children: [\n                                                        \"Account Name: \",\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                            id: \"account-name\",\n                                                            children: account.name\n                                                        }, void 0, false, {\n                                                            fileName: \"/home/hexdee/skia-wallet/pages/index.js\",\n                                                            lineNumber: 39,\n                                                            columnNumber: 50\n                                                        }, _this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/home/hexdee/skia-wallet/pages/index.js\",\n                                                    lineNumber: 39,\n                                                    columnNumber: 33\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    children: [\n                                                        \"Contract Address: \",\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                            id: \"contract-address\",\n                                                            children: account.contract_address\n                                                        }, void 0, false, {\n                                                            fileName: \"/home/hexdee/skia-wallet/pages/index.js\",\n                                                            lineNumber: 40,\n                                                            columnNumber: 54\n                                                        }, _this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/home/hexdee/skia-wallet/pages/index.js\",\n                                                    lineNumber: 40,\n                                                    columnNumber: 33\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    children: [\n                                                        \"Type: \",\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                            id: \"account-type\",\n                                                            children: [\n                                                                \" \",\n                                                                account.type,\n                                                                \" \"\n                                                            ]\n                                                        }, void 0, true, {\n                                                            fileName: \"/home/hexdee/skia-wallet/pages/index.js\",\n                                                            lineNumber: 41,\n                                                            columnNumber: 42\n                                                        }, _this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/home/hexdee/skia-wallet/pages/index.js\",\n                                                    lineNumber: 41,\n                                                    columnNumber: 33\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    children: [\n                                                        \"Status: \",\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                            id: \"account-status\",\n                                                            children: [\n                                                                \" \",\n                                                                account.status,\n                                                                \" \"\n                                                            ]\n                                                        }, void 0, true, {\n                                                            fileName: \"/home/hexdee/skia-wallet/pages/index.js\",\n                                                            lineNumber: 42,\n                                                            columnNumber: 44\n                                                        }, _this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/home/hexdee/skia-wallet/pages/index.js\",\n                                                    lineNumber: 42,\n                                                    columnNumber: 33\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                                    fileName: \"/home/hexdee/skia-wallet/pages/index.js\",\n                                                    lineNumber: 42,\n                                                    columnNumber: 99\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                    id: account.name,\n                                                    onClick: \"init()\",\n                                                    children: \"Initialize\"\n                                                }, void 0, false, {\n                                                    fileName: \"/home/hexdee/skia-wallet/pages/index.js\",\n                                                    lineNumber: 43,\n                                                    columnNumber: 33\n                                                }, _this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/home/hexdee/skia-wallet/pages/index.js\",\n                                            lineNumber: 38,\n                                            columnNumber: 29\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/home/hexdee/skia-wallet/pages/index.js\",\n                                        lineNumber: 37,\n                                        columnNumber: 25\n                                    }, _this);\n                                }) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/hexdee/skia-wallet/pages/index.js\",\n                            lineNumber: 28,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true);\n            }\n        }\n    ]);\n    return _class;\n}(react__WEBPACK_IMPORTED_MODULE_1__.Component);\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXVDO0FBQ21EO0FBRTNFLDJCQUhYOzs7Ozs7Ozs7O1lBSUFPLEdBQU0sRUFBTkEsUUFBTTttQkFBTkEsU0FBQUEsTUFBTSxHQUFHOztnQkFDVCxJQUFJLElBQTBCLEVBQUU7b0JBQzVCLElBQUdKLHFEQUFlLElBQUksQ0FBQyxFQUFDO3dCQUNwQkMscURBQVcsRUFBRSxDQUFDO3FCQUNqQixNQUFNO3dCQUNIQyxzREFBWSxFQUFFLENBQUM7cUJBQ2xCO29CQUNESSxRQUFRLENBQUNDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUVMLG1EQUFhLENBQUMsQ0FBQztnQkFDbkYsdUJBQXVCO2lCQUMxQjtnQkFDRyxxQkFFSTs7c0NBQ0EsOERBQUNNLFFBQU07c0NBQ0gsNEVBQUNDLElBQUU7MENBQUMsYUFBVzs7Ozs7b0NBQUs7Ozs7O2dDQUNmO3NDQUNULDhEQUFDQyxTQUFPOzRCQUFDQyxTQUFTLEVBQUMsVUFBVTs0QkFBQ0MsRUFBRSxFQUFDLFFBQVE7OzhDQUNyQyw4REFBQ0gsSUFBRTs4Q0FBQyx3QkFBc0I7Ozs7O3dDQUFLOzhDQUFBLDhEQUFDSSxJQUFFOzs7O3dDQUFHOzhDQUVyQyw4REFBQ0MsR0FBQzs4Q0FBQyxxQ0FBbUM7Ozs7O3dDQUFJOzhDQUFBLDhEQUFDRCxJQUFFOzs7O3dDQUFFOzhDQUMvQyw4REFBQ0UsUUFBTTtvQ0FBQ0gsRUFBRSxFQUFDLGdCQUFnQjs4Q0FBQyxnQkFBYzs7Ozs7d0NBQVM7OENBQ25ELDhEQUFDRSxHQUFDO29DQUFDRixFQUFFLEVBQUMsTUFBTTs7Ozs7d0NBQUs7Ozs7OztnQ0FDWDtzQ0FDViw4REFBQ0YsU0FBTzs0QkFBQ0MsU0FBUyxFQUFDLFVBQVU7NEJBQUNDLEVBQUUsRUFBQyxTQUFTOzs4Q0FDdEMsOERBQUNILElBQUU7OENBQUMsVUFBUTs7Ozs7d0NBQUs7OENBQUEsOERBQUNJLElBQUU7Ozs7d0NBQUc7OENBRXZCLDhEQUFDQyxHQUFDOztzREFBQyw4REFBQ0UsUUFBTTtzREFBQyxjQUFZOzs7OztnREFBUztzREFBQSw4REFBQ0MsTUFBSTs0Q0FBQ0wsRUFBRSxFQUFDLFlBQVk7c0RBQUVkLGdEQUFVOzs7OztnREFBUTt3Q0FBQSxHQUFDOzs7Ozs7d0NBQUk7OENBQzlFLDhEQUFDZ0IsR0FBQztvQ0FBQ0YsRUFBRSxFQUFDLFNBQVM7O3NEQUFDLDhEQUFDSSxRQUFNO3NEQUFDLGVBQWE7Ozs7O2dEQUFTO3NEQUFBLDhEQUFDQyxNQUFJOzRDQUFDTCxFQUFFLEVBQUMsYUFBYTs7Ozs7Z0RBQVE7Ozs7Ozt3Q0FBSTs4Q0FBQSw4REFBQ0MsSUFBRTs7Ozt3Q0FBRzs4Q0FDdEYsOERBQUNFLFFBQU07OENBQUMsa0JBQWdCOzs7Ozt3Q0FBUztnQ0FFakNoQiw4Q0FBUSxHQUNKQSxrREFBWSxDQUFDLFNBQUNvQixPQUFPO3lEQUNqQiw4REFBQ0MsS0FBRzt3Q0FBQ1QsU0FBUyxFQUFDLGdCQUFnQjtrREFDM0IsNEVBQUNTLEtBQUc7NENBQUNULFNBQVMsRUFBQyxXQUFXOzs4REFDdEIsOERBQUNHLEdBQUM7O3dEQUFDLGdCQUFjO3NFQUFBLDhEQUFDRyxNQUFJOzREQUFDTCxFQUFFLEVBQUMsY0FBYztzRUFBRU8sT0FBTyxDQUFDRSxJQUFJOzs7OztpRUFBUTs7Ozs7O3lEQUFJOzhEQUNsRSw4REFBQ1AsR0FBQzs7d0RBQUMsb0JBQWtCO3NFQUFBLDhEQUFDRyxNQUFJOzREQUFDTCxFQUFFLEVBQUMsa0JBQWtCO3NFQUFFTyxPQUFPLENBQUNHLGdCQUFnQjs7Ozs7aUVBQVE7Ozs7Ozt5REFBSTs4REFDdEYsOERBQUNSLEdBQUM7O3dEQUFDLFFBQU07c0VBQUEsOERBQUNHLE1BQUk7NERBQUNMLEVBQUUsRUFBQyxjQUFjOztnRUFBQyxHQUFDO2dFQUFDTyxPQUFPLENBQUNJLElBQUk7Z0VBQUMsR0FBQzs7Ozs7O2lFQUFPOzs7Ozs7eURBQUk7OERBQzVELDhEQUFDVCxHQUFDOzt3REFBQyxVQUFRO3NFQUFBLDhEQUFDRyxNQUFJOzREQUFDTCxFQUFFLEVBQUMsZ0JBQWdCOztnRUFBQyxHQUFDO2dFQUFDTyxPQUFPLENBQUNLLE1BQU07Z0VBQUMsR0FBQzs7Ozs7O2lFQUFPOzs7Ozs7eURBQUk7OERBQUEsOERBQUNYLElBQUU7Ozs7eURBQUU7OERBQ3ZFLDhEQUFDRSxRQUFNO29EQUFDSCxFQUFFLEVBQUVPLE9BQU8sQ0FBQ0UsSUFBSTtvREFBRUksT0FBTyxFQUFDLFFBQVE7OERBQUMsWUFBVTs7Ozs7eURBQVM7Ozs7OztpREFDNUQ7Ozs7OzZDQUNKO2lDQUFBLENBQ1QsaUJBQUcsNklBQUs7Ozs7OztnQ0FFUDs7Z0NBQ1AsQ0FDTjthQUNKOzs7O0NBQ0osQ0FoRDRCNUIsNENBQVMsQ0FnRHJDO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgcHVibGljX2tleSwgYWNjb3VudHMsIHNob3dXZWxjb21lLCBzaG93QWNjb3VudHMsIGNyZWF0ZUFjY291bnQgfWZyb20gJy4vc2VydmljZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICBpZihhY2NvdW50cy5sZW5ndGggPT0gMCl7XHJcbiAgICAgICAgICAgIHNob3dXZWxjb21lKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2hvd0FjY291bnRzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3JlYXRlLWFjY291bnRcIikuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjcmVhdGVBY2NvdW50KTtcclxuICAgICAgICAvL2xvY2FsU3RvcmFnZS5jbGVhcigpO1xyXG4gICAgfSAgICBcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgPGhlYWRlcj5cclxuICAgICAgICAgICAgICAgIDxoMT5Ta2lhIFdhbGxldDwvaDE+XHJcbiAgICAgICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J2FjY291bnRzJyBpZD1cImNyZWF0ZVwiPlxyXG4gICAgICAgICAgICAgICAgPGgxPldlbGNvbWUgdG8gU2tpYSBXYWxsZXQ8L2gxPjxiciAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxwPkdldCBzdGFydGVkIGJ5IGNyZWF0aW5nIGFuIGFjY291bnQgPC9wPjxici8+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiY3JlYXRlLWFjY291bnRcIj5DcmVhdGUgQWNjb3VudDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPHAgaWQ9J3dhaXQnPjwvcD5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J2FjY291bnRzJyBpZD1cImFjY291bnRcIj5cclxuICAgICAgICAgICAgICAgIDxoMT5BY2NvdW50czwvaDE+PGJyIC8+XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIDxwPjxzdHJvbmc+UHVibGljIGtleTogPC9zdHJvbmc+PHNwYW4gaWQ9J3B1YmxpYy1rZXknPntwdWJsaWNfa2V5fTwvc3Bhbj4gPC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgaWQ9J3ByaXZhdGUnPjxzdHJvbmc+UHJpdmF0ZSBLZXk6IDwvc3Ryb25nPjxzcGFuIGlkPSdwcml2YXRlLWtleSc+PC9zcGFuPjwvcD48YnIgLz5cclxuICAgICAgICAgICAgICAgIDxidXR0b24+U2hvdyBQcml2YXRlIEtleTwvYnV0dG9uPlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhY2NvdW50cyA/XHJcbiAgICAgICAgICAgICAgICAgICAgYWNjb3VudHMubWFwKChhY2NvdW50KSA9PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5BY2NvdW50IE5hbWU6IDxzcGFuIGlkPSdhY2NvdW50LW5hbWUnPnthY2NvdW50Lm5hbWV9PC9zcGFuPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Db250cmFjdCBBZGRyZXNzOiA8c3BhbiBpZD0nY29udHJhY3QtYWRkcmVzcyc+e2FjY291bnQuY29udHJhY3RfYWRkcmVzc308L3NwYW4+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlR5cGU6IDxzcGFuIGlkPSdhY2NvdW50LXR5cGUnPiB7YWNjb3VudC50eXBlfSA8L3NwYW4+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlN0YXR1czogPHNwYW4gaWQ9J2FjY291bnQtc3RhdHVzJz4ge2FjY291bnQuc3RhdHVzfSA8L3NwYW4+PC9wPjxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD17YWNjb3VudC5uYW1lfSBvbkNsaWNrPVwiaW5pdCgpXCI+SW5pdGlhbGl6ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiA8PjwvPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwicHVibGljX2tleSIsImFjY291bnRzIiwic2hvd1dlbGNvbWUiLCJzaG93QWNjb3VudHMiLCJjcmVhdGVBY2NvdW50IiwicmVuZGVyIiwibGVuZ3RoIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJoZWFkZXIiLCJoMSIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJpZCIsImJyIiwicCIsImJ1dHRvbiIsInN0cm9uZyIsInNwYW4iLCJtYXAiLCJhY2NvdW50IiwiZGl2IiwibmFtZSIsImNvbnRyYWN0X2FkZHJlc3MiLCJ0eXBlIiwic3RhdHVzIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});