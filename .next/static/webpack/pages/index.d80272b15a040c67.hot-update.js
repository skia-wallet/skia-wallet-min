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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ _class; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service */ \"./pages/service.js\");\n/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_service__WEBPACK_IMPORTED_MODULE_2__);\nfunction _assertThisInitialized(self) {\n    if (self === void 0) {\n        throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n    }\n    return self;\n}\nfunction _classCallCheck(instance, Constructor) {\n    if (!(instance instanceof Constructor)) {\n        throw new TypeError(\"Cannot call a class as a function\");\n    }\n}\nfunction _defineProperties(target, props) {\n    for(var i = 0; i < props.length; i++){\n        var descriptor = props[i];\n        descriptor.enumerable = descriptor.enumerable || false;\n        descriptor.configurable = true;\n        if (\"value\" in descriptor) descriptor.writable = true;\n        Object.defineProperty(target, descriptor.key, descriptor);\n    }\n}\nfunction _createClass(Constructor, protoProps, staticProps) {\n    if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n    if (staticProps) _defineProperties(Constructor, staticProps);\n    return Constructor;\n}\nfunction _getPrototypeOf(o) {\n    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n        return o.__proto__ || Object.getPrototypeOf(o);\n    };\n    return _getPrototypeOf(o);\n}\nfunction _inherits(subClass, superClass) {\n    if (typeof superClass !== \"function\" && superClass !== null) {\n        throw new TypeError(\"Super expression must either be null or a function\");\n    }\n    subClass.prototype = Object.create(superClass && superClass.prototype, {\n        constructor: {\n            value: subClass,\n            writable: true,\n            configurable: true\n        }\n    });\n    if (superClass) _setPrototypeOf(subClass, superClass);\n}\nfunction _possibleConstructorReturn(self, call) {\n    if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {\n        return call;\n    }\n    return _assertThisInitialized(self);\n}\nfunction _setPrototypeOf(o, p) {\n    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n        o.__proto__ = p;\n        return o;\n    };\n    return _setPrototypeOf(o, p);\n}\nvar _typeof = function(obj) {\n    \"@swc/helpers - typeof\";\n    return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj;\n};\nfunction _isNativeReflectConstruct() {\n    if (typeof Reflect === \"undefined\" || !Reflect.construct) return false;\n    if (Reflect.construct.sham) return false;\n    if (typeof Proxy === \"function\") return true;\n    try {\n        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));\n        return true;\n    } catch (e) {\n        return false;\n    }\n}\nfunction _createSuper(Derived) {\n    var hasNativeReflectConstruct = _isNativeReflectConstruct();\n    return function _createSuperInternal() {\n        var Super = _getPrototypeOf(Derived), result;\n        if (hasNativeReflectConstruct) {\n            var NewTarget = _getPrototypeOf(this).constructor;\n            result = Reflect.construct(Super, arguments, NewTarget);\n        } else {\n            result = Super.apply(this, arguments);\n        }\n        return _possibleConstructorReturn(this, result);\n    };\n}\n\n\n\nvar _class = /*#__PURE__*/ function(Component1) {\n    \"use strict\";\n    _inherits(_class, Component1);\n    var _super = _createSuper(_class);\n    function _class() {\n        _classCallCheck(this, _class);\n        return _super.apply(this, arguments);\n    }\n    _createClass(_class, [\n        {\n            key: \"render\",\n            value: function render() {\n                if (true) {\n                    // if(accounts.length == 0){\n                    //     showWelcome();\n                    // } else {\n                    //     showAccounts();\n                    // }\n                    document.getElementById(\"create-account\").addEventListener(\"click\", _service__WEBPACK_IMPORTED_MODULE_2__.createAccount);\n                    localStorage.clear();\n                }\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: \"Skia Wallet\"\n                            }, void 0, false, {\n                                fileName: \"/home/hexdee/skia-wallet/pages/index.js\",\n                                lineNumber: 19,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/hexdee/skia-wallet/pages/index.js\",\n                            lineNumber: 18,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                            className: \"accounts\",\n                            id: \"create\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    children: \"Welcome to Skia Wallet\"\n                                }, void 0, false, {\n                                    fileName: \"/home/hexdee/skia-wallet/pages/index.js\",\n                                    lineNumber: 22,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/home/hexdee/skia-wallet/pages/index.js\",\n                                    lineNumber: 22,\n                                    columnNumber: 48\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: \"Get started by creating an account \"\n                                }, void 0, false, {\n                                    fileName: \"/home/hexdee/skia-wallet/pages/index.js\",\n                                    lineNumber: 24,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/home/hexdee/skia-wallet/pages/index.js\",\n                                    lineNumber: 24,\n                                    columnNumber: 59\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    id: \"create-account\",\n                                    children: \"Create Account\"\n                                }, void 0, false, {\n                                    fileName: \"/home/hexdee/skia-wallet/pages/index.js\",\n                                    lineNumber: 25,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/hexdee/skia-wallet/pages/index.js\",\n                            lineNumber: 21,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            id: \"wait\"\n                        }, void 0, false, {\n                            fileName: \"/home/hexdee/skia-wallet/pages/index.js\",\n                            lineNumber: 27,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                            className: \"accounts\",\n                            id: \"account\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    children: \"Accounts\"\n                                }, void 0, false, {\n                                    fileName: \"/home/hexdee/skia-wallet/pages/index.js\",\n                                    lineNumber: 29,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/home/hexdee/skia-wallet/pages/index.js\",\n                                    lineNumber: 29,\n                                    columnNumber: 34\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                            children: \"Public key: \"\n                                        }, void 0, false, {\n                                            fileName: \"/home/hexdee/skia-wallet/pages/index.js\",\n                                            lineNumber: 31,\n                                            columnNumber: 20\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            id: \"public-key\",\n                                            children: _service__WEBPACK_IMPORTED_MODULE_2__.public_key\n                                        }, void 0, false, {\n                                            fileName: \"/home/hexdee/skia-wallet/pages/index.js\",\n                                            lineNumber: 31,\n                                            columnNumber: 49\n                                        }, this),\n                                        \" \"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/hexdee/skia-wallet/pages/index.js\",\n                                    lineNumber: 31,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    id: \"private\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                            children: \"Private Key: \"\n                                        }, void 0, false, {\n                                            fileName: \"/home/hexdee/skia-wallet/pages/index.js\",\n                                            lineNumber: 32,\n                                            columnNumber: 33\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            id: \"private-key\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/hexdee/skia-wallet/pages/index.js\",\n                                            lineNumber: 32,\n                                            columnNumber: 63\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/hexdee/skia-wallet/pages/index.js\",\n                                    lineNumber: 32,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/home/hexdee/skia-wallet/pages/index.js\",\n                                    lineNumber: 32,\n                                    columnNumber: 97\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    children: \"Show Private Key\"\n                                }, void 0, false, {\n                                    fileName: \"/home/hexdee/skia-wallet/pages/index.js\",\n                                    lineNumber: 33,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex-container\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex-item\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: [\n                                                    \"Account Name: \",\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                        id: \"account-name\",\n                                                        children: _service__WEBPACK_IMPORTED_MODULE_2__.accounts[0].name || \"account 0\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/home/hexdee/skia-wallet/pages/index.js\",\n                                                        lineNumber: 36,\n                                                        columnNumber: 50\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/home/hexdee/skia-wallet/pages/index.js\",\n                                                lineNumber: 36,\n                                                columnNumber: 33\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: [\n                                                    \"Contract Address: \",\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                        id: \"contract-address\",\n                                                        children: _service__WEBPACK_IMPORTED_MODULE_2__.accounts[0].contract_address || \"0x00\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/home/hexdee/skia-wallet/pages/index.js\",\n                                                        lineNumber: 37,\n                                                        columnNumber: 54\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/home/hexdee/skia-wallet/pages/index.js\",\n                                                lineNumber: 37,\n                                                columnNumber: 33\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: [\n                                                    \"Type: \",\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                        id: \"account-type\",\n                                                        children: [\n                                                            \" \",\n                                                            _service__WEBPACK_IMPORTED_MODULE_2__.accounts[0].type || \"simple\",\n                                                            \" \"\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"/home/hexdee/skia-wallet/pages/index.js\",\n                                                        lineNumber: 38,\n                                                        columnNumber: 42\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/home/hexdee/skia-wallet/pages/index.js\",\n                                                lineNumber: 38,\n                                                columnNumber: 33\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: [\n                                                    \"Status: \",\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                        id: \"account-status\",\n                                                        children: [\n                                                            \" \",\n                                                            _service__WEBPACK_IMPORTED_MODULE_2__.accounts[0].status || \"active\",\n                                                            \" \"\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"/home/hexdee/skia-wallet/pages/index.js\",\n                                                        lineNumber: 39,\n                                                        columnNumber: 44\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/home/hexdee/skia-wallet/pages/index.js\",\n                                                lineNumber: 39,\n                                                columnNumber: 33\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/hexdee/skia-wallet/pages/index.js\",\n                                        lineNumber: 35,\n                                        columnNumber: 29\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/home/hexdee/skia-wallet/pages/index.js\",\n                                    lineNumber: 34,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/hexdee/skia-wallet/pages/index.js\",\n                            lineNumber: 28,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true);\n            }\n        }\n    ]);\n    return _class;\n}(react__WEBPACK_IMPORTED_MODULE_1__.Component);\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFJOzBEQUM1RSw4REFBQ2dCLEdBQUM7O29EQUFDLFVBQVE7a0VBQUEsOERBQUNHLE1BQUk7d0RBQUNMLEVBQUUsRUFBQyxnQkFBZ0I7OzREQUFDLEdBQUM7NERBQUNkLHdEQUFrQixJQUFJLFFBQVE7NERBQUMsR0FBQzs7Ozs7OzREQUFPOzs7Ozs7b0RBQUk7Ozs7Ozs0Q0FDaEY7Ozs7O3dDQUNKOzs7Ozs7Z0NBQ1I7O2dDQUNQLENBQ047YUFDSjs7OztDQUNKLENBMUM0QkYsNENBQVMsQ0EwQ3JDO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgcHVibGljX2tleSwgYWNjb3VudHMsIHNob3dXZWxjb21lLCBzaG93QWNjb3VudHMsIGNyZWF0ZUFjY291bnQgfWZyb20gJy4vc2VydmljZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICAvLyBpZihhY2NvdW50cy5sZW5ndGggPT0gMCl7XHJcbiAgICAgICAgLy8gICAgIHNob3dXZWxjb21lKCk7XHJcbiAgICAgICAgLy8gfSBlbHNlIHtcclxuICAgICAgICAvLyAgICAgc2hvd0FjY291bnRzKCk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3JlYXRlLWFjY291bnRcIikuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjcmVhdGVBY2NvdW50KTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcclxuICAgIH0gICAgXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxoZWFkZXI+XHJcbiAgICAgICAgICAgICAgICA8aDE+U2tpYSBXYWxsZXQ8L2gxPlxyXG4gICAgICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdhY2NvdW50cycgaWQ9XCJjcmVhdGVcIj5cclxuICAgICAgICAgICAgICAgIDxoMT5XZWxjb21lIHRvIFNraWEgV2FsbGV0PC9oMT48YnIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8cD5HZXQgc3RhcnRlZCBieSBjcmVhdGluZyBhbiBhY2NvdW50IDwvcD48YnIvPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImNyZWF0ZS1hY2NvdW50XCI+Q3JlYXRlIEFjY291bnQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgPHAgaWQ9J3dhaXQnPjwvcD5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdhY2NvdW50cycgaWQ9XCJhY2NvdW50XCI+XHJcbiAgICAgICAgICAgICAgICA8aDE+QWNjb3VudHM8L2gxPjxiciAvPlxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICA8cD48c3Ryb25nPlB1YmxpYyBrZXk6IDwvc3Ryb25nPjxzcGFuIGlkPSdwdWJsaWMta2V5Jz57cHVibGljX2tleX08L3NwYW4+IDwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGlkPSdwcml2YXRlJz48c3Ryb25nPlByaXZhdGUgS2V5OiA8L3N0cm9uZz48c3BhbiBpZD0ncHJpdmF0ZS1rZXknPjwvc3Bhbj48L3A+PGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uPlNob3cgUHJpdmF0ZSBLZXk8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5BY2NvdW50IE5hbWU6IDxzcGFuIGlkPSdhY2NvdW50LW5hbWUnPnthY2NvdW50c1swXS5uYW1lIHx8IFwiYWNjb3VudCAwXCJ9PC9zcGFuPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Db250cmFjdCBBZGRyZXNzOiA8c3BhbiBpZD0nY29udHJhY3QtYWRkcmVzcyc+e2FjY291bnRzWzBdLmNvbnRyYWN0X2FkZHJlc3MgfHwgXCIweDAwXCJ9PC9zcGFuPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5UeXBlOiA8c3BhbiBpZD0nYWNjb3VudC10eXBlJz4ge2FjY291bnRzWzBdLnR5cGUgfHwgXCJzaW1wbGVcIn0gPC9zcGFuPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5TdGF0dXM6IDxzcGFuIGlkPSdhY2NvdW50LXN0YXR1cyc+IHthY2NvdW50c1swXS5zdGF0dXMgfHwgXCJhY3RpdmVcIn0gPC9zcGFuPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJwdWJsaWNfa2V5IiwiYWNjb3VudHMiLCJzaG93V2VsY29tZSIsInNob3dBY2NvdW50cyIsImNyZWF0ZUFjY291bnQiLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImxvY2FsU3RvcmFnZSIsImNsZWFyIiwiaGVhZGVyIiwiaDEiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiaWQiLCJiciIsInAiLCJidXR0b24iLCJzdHJvbmciLCJzcGFuIiwiZGl2IiwibmFtZSIsImNvbnRyYWN0X2FkZHJlc3MiLCJ0eXBlIiwic3RhdHVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});