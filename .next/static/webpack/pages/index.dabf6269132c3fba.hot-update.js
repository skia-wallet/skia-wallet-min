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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service */ \"./pages/service.js\");\n/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_service__WEBPACK_IMPORTED_MODULE_2__);\n\n\n//import { e } from 'react';\n\nvar _s = $RefreshSig$();\nfunction App() {\n    var _this = this;\n    _s();\n    // constructor(props) {\n    //     super(props);\n    //     this.state = {\n    //         accounts: []\n    //     }\n    // }\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_service__WEBPACK_IMPORTED_MODULE_2__.accounts), user_accounts = ref[0], setUser_accounts = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setUser_accounts(function() {\n            return _service__WEBPACK_IMPORTED_MODULE_2__.accounts;\n        });\n    }, [\n        user_accounts\n    ]);\n    if (true) {\n        if (_service__WEBPACK_IMPORTED_MODULE_2__.accounts.length == 0) {\n            (0,_service__WEBPACK_IMPORTED_MODULE_2__.showWelcome)();\n        } else {\n            (0,_service__WEBPACK_IMPORTED_MODULE_2__.showAccounts)();\n        }\n        document.getElementById(\"create-account\").addEventListener(\"click\", _service__WEBPACK_IMPORTED_MODULE_2__.createAccount);\n        localStorage.clear();\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Skia Wallet\"\n                }, void 0, false, {\n                    fileName: \"/home/hexdee/skia-wallet/pages/index.js\",\n                    lineNumber: 30,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/hexdee/skia-wallet/pages/index.js\",\n                lineNumber: 29,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"accounts\",\n                id: \"create\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Welcome to Skia Wallet\"\n                    }, void 0, false, {\n                        fileName: \"/home/hexdee/skia-wallet/pages/index.js\",\n                        lineNumber: 33,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/home/hexdee/skia-wallet/pages/index.js\",\n                        lineNumber: 33,\n                        columnNumber: 48\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Get started by creating an account \"\n                    }, void 0, false, {\n                        fileName: \"/home/hexdee/skia-wallet/pages/index.js\",\n                        lineNumber: 35,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/home/hexdee/skia-wallet/pages/index.js\",\n                        lineNumber: 35,\n                        columnNumber: 59\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        id: \"create-account\",\n                        children: \"Create Account\"\n                    }, void 0, false, {\n                        fileName: \"/home/hexdee/skia-wallet/pages/index.js\",\n                        lineNumber: 36,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        id: \"wait\"\n                    }, void 0, false, {\n                        fileName: \"/home/hexdee/skia-wallet/pages/index.js\",\n                        lineNumber: 37,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/hexdee/skia-wallet/pages/index.js\",\n                lineNumber: 32,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"accounts\",\n                id: \"account\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Accounts\"\n                    }, void 0, false, {\n                        fileName: \"/home/hexdee/skia-wallet/pages/index.js\",\n                        lineNumber: 40,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/home/hexdee/skia-wallet/pages/index.js\",\n                        lineNumber: 40,\n                        columnNumber: 34\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: \"Public key: \"\n                            }, void 0, false, {\n                                fileName: \"/home/hexdee/skia-wallet/pages/index.js\",\n                                lineNumber: 42,\n                                columnNumber: 20\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                id: \"public-key\",\n                                children: _service__WEBPACK_IMPORTED_MODULE_2__.public_key\n                            }, void 0, false, {\n                                fileName: \"/home/hexdee/skia-wallet/pages/index.js\",\n                                lineNumber: 42,\n                                columnNumber: 49\n                            }, this),\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/hexdee/skia-wallet/pages/index.js\",\n                        lineNumber: 42,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        id: \"private\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: \"Private Key: \"\n                            }, void 0, false, {\n                                fileName: \"/home/hexdee/skia-wallet/pages/index.js\",\n                                lineNumber: 43,\n                                columnNumber: 33\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                id: \"private-key\"\n                            }, void 0, false, {\n                                fileName: \"/home/hexdee/skia-wallet/pages/index.js\",\n                                lineNumber: 43,\n                                columnNumber: 63\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/hexdee/skia-wallet/pages/index.js\",\n                        lineNumber: 43,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/home/hexdee/skia-wallet/pages/index.js\",\n                        lineNumber: 43,\n                        columnNumber: 97\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        children: \"Show Private Key\"\n                    }, void 0, false, {\n                        fileName: \"/home/hexdee/skia-wallet/pages/index.js\",\n                        lineNumber: 44,\n                        columnNumber: 17\n                    }, this),\n                    user_accounts ? user_accounts.map(function(account) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex-container\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex-item\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"Account Name: \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                id: \"account-name\",\n                                                children: account.name\n                                            }, void 0, false, {\n                                                fileName: \"/home/hexdee/skia-wallet/pages/index.js\",\n                                                lineNumber: 50,\n                                                columnNumber: 50\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/hexdee/skia-wallet/pages/index.js\",\n                                        lineNumber: 50,\n                                        columnNumber: 33\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"Contract Address: \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                id: \"contract-address\",\n                                                children: account.contract_address\n                                            }, void 0, false, {\n                                                fileName: \"/home/hexdee/skia-wallet/pages/index.js\",\n                                                lineNumber: 51,\n                                                columnNumber: 54\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/hexdee/skia-wallet/pages/index.js\",\n                                        lineNumber: 51,\n                                        columnNumber: 33\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"Type: \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                id: \"account-type\",\n                                                children: [\n                                                    \" \",\n                                                    account.type,\n                                                    \" \"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/home/hexdee/skia-wallet/pages/index.js\",\n                                                lineNumber: 52,\n                                                columnNumber: 42\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/hexdee/skia-wallet/pages/index.js\",\n                                        lineNumber: 52,\n                                        columnNumber: 33\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"Status: \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                id: \"account-status\",\n                                                children: [\n                                                    \" \",\n                                                    account.status,\n                                                    \" \"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/home/hexdee/skia-wallet/pages/index.js\",\n                                                lineNumber: 53,\n                                                columnNumber: 44\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/hexdee/skia-wallet/pages/index.js\",\n                                        lineNumber: 53,\n                                        columnNumber: 33\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/hexdee/skia-wallet/pages/index.js\",\n                                lineNumber: 49,\n                                columnNumber: 29\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/home/hexdee/skia-wallet/pages/index.js\",\n                            lineNumber: 48,\n                            columnNumber: 25\n                        }, _this);\n                    }) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/hexdee/skia-wallet/pages/index.js\",\n                lineNumber: 39,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n};\n_s(App, \"6g/bxOCnJgttputJecaV2wl4x1s=\");\n_c = App;\nReactDOM.render(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(App, {}, void 0, false, {\n    fileName: \"/home/hexdee/skia-wallet/pages/index.js\",\n    lineNumber: 63,\n    columnNumber: 21\n}, undefined), document.getElementById(\"root\"));\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RSw4REFBQ1AsR0FBQzs7NENBQUMsb0JBQWtCOzBEQUFBLDhEQUFDRyxNQUFJO2dEQUFDTCxFQUFFLEVBQUMsa0JBQWtCOzBEQUFFTyxPQUFPLENBQUNHLGdCQUFnQjs7Ozs7cURBQVE7Ozs7Ozs2Q0FBSTtrREFDdEYsOERBQUNSLEdBQUM7OzRDQUFDLFFBQU07MERBQUEsOERBQUNHLE1BQUk7Z0RBQUNMLEVBQUUsRUFBQyxjQUFjOztvREFBQyxHQUFDO29EQUFDTyxPQUFPLENBQUNJLElBQUk7b0RBQUMsR0FBQzs7Ozs7O3FEQUFPOzs7Ozs7NkNBQUk7a0RBQzVELDhEQUFDVCxHQUFDOzs0Q0FBQyxVQUFROzBEQUFBLDhEQUFDRyxNQUFJO2dEQUFDTCxFQUFFLEVBQUMsZ0JBQWdCOztvREFBQyxHQUFDO29EQUFDTyxPQUFPLENBQUNLLE1BQU07b0RBQUMsR0FBQzs7Ozs7O3FEQUFPOzs7Ozs7NkNBQUk7Ozs7OztxQ0FDaEU7Ozs7O2lDQUNKO3FCQUFBLENBQ1QsaUJBQUcsNklBQUs7Ozs7OztvQkFFUDs7b0JBQ1AsQ0FDTjtDQUNKO0dBeERtQnpCLEdBQUc7QUFBSEEsS0FBQUEsR0FBRztBQTBEdkIwQixRQUFRLENBQUNDLE1BQU0sZUFBQyw4REFBQzNCLEdBQUc7Ozs7YUFBRyxFQUFFSSxRQUFRLENBQUNDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50LCB1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbi8vaW1wb3J0IHsgZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgcHVibGljX2tleSwgYWNjb3VudHMsIHNob3dXZWxjb21lLCBzaG93QWNjb3VudHMsIGNyZWF0ZUFjY291bnQgfWZyb20gJy4vc2VydmljZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XHJcbiAgICAvLyBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgLy8gICAgIHN1cGVyKHByb3BzKTtcclxuICAgIC8vICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgLy8gICAgICAgICBhY2NvdW50czogW11cclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9XHJcbiAgICBjb25zdCBbdXNlcl9hY2NvdW50cywgc2V0VXNlcl9hY2NvdW50c10gPSB1c2VTdGF0ZShhY2NvdW50cyk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldFVzZXJfYWNjb3VudHMoKCkgPT4gYWNjb3VudHMpO1xyXG4gICAgfSwgW3VzZXJfYWNjb3VudHNdKTtcclxuICAgIFxyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgaWYoYWNjb3VudHMubGVuZ3RoID09IDApe1xyXG4gICAgICAgICAgICBzaG93V2VsY29tZSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNob3dBY2NvdW50cygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNyZWF0ZS1hY2NvdW50XCIpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY3JlYXRlQWNjb3VudCk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XHJcbiAgICB9ICAgIFxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8aGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgPGgxPlNraWEgV2FsbGV0PC9oMT5cclxuICAgICAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0nYWNjb3VudHMnIGlkPVwiY3JlYXRlXCI+XHJcbiAgICAgICAgICAgICAgICA8aDE+V2VsY29tZSB0byBTa2lhIFdhbGxldDwvaDE+PGJyIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPHA+R2V0IHN0YXJ0ZWQgYnkgY3JlYXRpbmcgYW4gYWNjb3VudCA8L3A+PGJyLz5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJjcmVhdGUtYWNjb3VudFwiPkNyZWF0ZSBBY2NvdW50PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8cCBpZD0nd2FpdCc+PC9wPlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0nYWNjb3VudHMnIGlkPVwiYWNjb3VudFwiPlxyXG4gICAgICAgICAgICAgICAgPGgxPkFjY291bnRzPC9oMT48YnIgLz5cclxuICAgIFxyXG4gICAgICAgICAgICAgICAgPHA+PHN0cm9uZz5QdWJsaWMga2V5OiA8L3N0cm9uZz48c3BhbiBpZD0ncHVibGljLWtleSc+e3B1YmxpY19rZXl9PC9zcGFuPiA8L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBpZD0ncHJpdmF0ZSc+PHN0cm9uZz5Qcml2YXRlIEtleTogPC9zdHJvbmc+PHNwYW4gaWQ9J3ByaXZhdGUta2V5Jz48L3NwYW4+PC9wPjxiciAvPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbj5TaG93IFByaXZhdGUgS2V5PC9idXR0b24+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHVzZXJfYWNjb3VudHMgP1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJfYWNjb3VudHMubWFwKChhY2NvdW50KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkFjY291bnQgTmFtZTogPHNwYW4gaWQ9J2FjY291bnQtbmFtZSc+e2FjY291bnQubmFtZX08L3NwYW4+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkNvbnRyYWN0IEFkZHJlc3M6IDxzcGFuIGlkPSdjb250cmFjdC1hZGRyZXNzJz57YWNjb3VudC5jb250cmFjdF9hZGRyZXNzfTwvc3Bhbj48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+VHlwZTogPHNwYW4gaWQ9J2FjY291bnQtdHlwZSc+IHthY2NvdW50LnR5cGV9IDwvc3Bhbj48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+U3RhdHVzOiA8c3BhbiBpZD0nYWNjb3VudC1zdGF0dXMnPiB7YWNjb3VudC5zdGF0dXN9IDwvc3Bhbj48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IDw+PC8+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9vdFwiKSk7Il0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJwdWJsaWNfa2V5IiwiYWNjb3VudHMiLCJzaG93V2VsY29tZSIsInNob3dBY2NvdW50cyIsImNyZWF0ZUFjY291bnQiLCJBcHAiLCJ1c2VyX2FjY291bnRzIiwic2V0VXNlcl9hY2NvdW50cyIsImxlbmd0aCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRFdmVudExpc3RlbmVyIiwibG9jYWxTdG9yYWdlIiwiY2xlYXIiLCJoZWFkZXIiLCJoMSIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJpZCIsImJyIiwicCIsImJ1dHRvbiIsInN0cm9uZyIsInNwYW4iLCJtYXAiLCJhY2NvdW50IiwiZGl2IiwibmFtZSIsImNvbnRyYWN0X2FkZHJlc3MiLCJ0eXBlIiwic3RhdHVzIiwiUmVhY3RET00iLCJyZW5kZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});