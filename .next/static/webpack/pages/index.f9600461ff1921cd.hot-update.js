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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service */ \"./pages/service.js\");\n/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_service__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n//import { e } from 'react';\n\nvar _s = $RefreshSig$();\nfunction App() {\n    var _this = this;\n    _s();\n    // constructor(props) {\n    //     super(props);\n    //     this.state = {\n    //         accounts: []\n    //     }\n    // }\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_service__WEBPACK_IMPORTED_MODULE_3__.accounts), user_accounts = ref[0], setUser_accounts = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setUser_accounts(function() {\n            return _service__WEBPACK_IMPORTED_MODULE_3__.accounts;\n        });\n    }, [\n        user_accounts\n    ]);\n    if (true) {\n        if (_service__WEBPACK_IMPORTED_MODULE_3__.accounts.length == 0) {\n            (0,_service__WEBPACK_IMPORTED_MODULE_3__.showWelcome)();\n        } else {\n            (0,_service__WEBPACK_IMPORTED_MODULE_3__.showAccounts)();\n        }\n        document.getElementById(\"create-account\").addEventListener(\"click\", _service__WEBPACK_IMPORTED_MODULE_3__.createAccount);\n        localStorage.clear();\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Skia Wallet\"\n                }, void 0, false, {\n                    fileName: \"/home/hexdee/skia-wallet/pages/index.js\",\n                    lineNumber: 31,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/hexdee/skia-wallet/pages/index.js\",\n                lineNumber: 30,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"accounts\",\n                id: \"create\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Welcome to Skia Wallet\"\n                    }, void 0, false, {\n                        fileName: \"/home/hexdee/skia-wallet/pages/index.js\",\n                        lineNumber: 34,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/home/hexdee/skia-wallet/pages/index.js\",\n                        lineNumber: 34,\n                        columnNumber: 48\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Get started by creating an account \"\n                    }, void 0, false, {\n                        fileName: \"/home/hexdee/skia-wallet/pages/index.js\",\n                        lineNumber: 36,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/home/hexdee/skia-wallet/pages/index.js\",\n                        lineNumber: 36,\n                        columnNumber: 59\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        id: \"create-account\",\n                        children: \"Create Account\"\n                    }, void 0, false, {\n                        fileName: \"/home/hexdee/skia-wallet/pages/index.js\",\n                        lineNumber: 37,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        id: \"wait\"\n                    }, void 0, false, {\n                        fileName: \"/home/hexdee/skia-wallet/pages/index.js\",\n                        lineNumber: 38,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/hexdee/skia-wallet/pages/index.js\",\n                lineNumber: 33,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"accounts\",\n                id: \"account\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Accounts\"\n                    }, void 0, false, {\n                        fileName: \"/home/hexdee/skia-wallet/pages/index.js\",\n                        lineNumber: 41,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/home/hexdee/skia-wallet/pages/index.js\",\n                        lineNumber: 41,\n                        columnNumber: 34\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: \"Public key: \"\n                            }, void 0, false, {\n                                fileName: \"/home/hexdee/skia-wallet/pages/index.js\",\n                                lineNumber: 43,\n                                columnNumber: 20\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                id: \"public-key\",\n                                children: _service__WEBPACK_IMPORTED_MODULE_3__.public_key\n                            }, void 0, false, {\n                                fileName: \"/home/hexdee/skia-wallet/pages/index.js\",\n                                lineNumber: 43,\n                                columnNumber: 49\n                            }, this),\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/hexdee/skia-wallet/pages/index.js\",\n                        lineNumber: 43,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        id: \"private\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: \"Private Key: \"\n                            }, void 0, false, {\n                                fileName: \"/home/hexdee/skia-wallet/pages/index.js\",\n                                lineNumber: 44,\n                                columnNumber: 33\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                id: \"private-key\"\n                            }, void 0, false, {\n                                fileName: \"/home/hexdee/skia-wallet/pages/index.js\",\n                                lineNumber: 44,\n                                columnNumber: 63\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/hexdee/skia-wallet/pages/index.js\",\n                        lineNumber: 44,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/home/hexdee/skia-wallet/pages/index.js\",\n                        lineNumber: 44,\n                        columnNumber: 97\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        children: \"Show Private Key\"\n                    }, void 0, false, {\n                        fileName: \"/home/hexdee/skia-wallet/pages/index.js\",\n                        lineNumber: 45,\n                        columnNumber: 17\n                    }, this),\n                    user_accounts ? user_accounts.map(function(account) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex-container\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex-item\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"Account Name: \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                id: \"account-name\",\n                                                children: account.name\n                                            }, void 0, false, {\n                                                fileName: \"/home/hexdee/skia-wallet/pages/index.js\",\n                                                lineNumber: 51,\n                                                columnNumber: 50\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/hexdee/skia-wallet/pages/index.js\",\n                                        lineNumber: 51,\n                                        columnNumber: 33\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"Contract Address: \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                id: \"contract-address\",\n                                                children: account.contract_address\n                                            }, void 0, false, {\n                                                fileName: \"/home/hexdee/skia-wallet/pages/index.js\",\n                                                lineNumber: 52,\n                                                columnNumber: 54\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/hexdee/skia-wallet/pages/index.js\",\n                                        lineNumber: 52,\n                                        columnNumber: 33\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"Type: \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                id: \"account-type\",\n                                                children: [\n                                                    \" \",\n                                                    account.type,\n                                                    \" \"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/home/hexdee/skia-wallet/pages/index.js\",\n                                                lineNumber: 53,\n                                                columnNumber: 42\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/hexdee/skia-wallet/pages/index.js\",\n                                        lineNumber: 53,\n                                        columnNumber: 33\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"Status: \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                id: \"account-status\",\n                                                children: [\n                                                    \" \",\n                                                    account.status,\n                                                    \" \"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/home/hexdee/skia-wallet/pages/index.js\",\n                                                lineNumber: 54,\n                                                columnNumber: 44\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/hexdee/skia-wallet/pages/index.js\",\n                                        lineNumber: 54,\n                                        columnNumber: 33\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/hexdee/skia-wallet/pages/index.js\",\n                                lineNumber: 50,\n                                columnNumber: 29\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/home/hexdee/skia-wallet/pages/index.js\",\n                            lineNumber: 49,\n                            columnNumber: 25\n                        }, _this);\n                    }) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/hexdee/skia-wallet/pages/index.js\",\n                lineNumber: 40,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n};\n_s(App, \"6g/bxOCnJgttputJecaV2wl4x1s=\");\n_c = App;\nreact_dom__WEBPACK_IMPORTED_MODULE_2___default().render(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(App, {}, void 0, false, {\n    fileName: \"/home/hexdee/skia-wallet/pages/index.js\",\n    lineNumber: 64,\n    columnNumber: 21\n}, undefined), document.getElementById(\"root\"));\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUk7a0RBQ2xFLDhEQUFDUCxHQUFDOzs0Q0FBQyxvQkFBa0I7MERBQUEsOERBQUNHLE1BQUk7Z0RBQUNMLEVBQUUsRUFBQyxrQkFBa0I7MERBQUVPLE9BQU8sQ0FBQ0csZ0JBQWdCOzs7OztxREFBUTs7Ozs7OzZDQUFJO2tEQUN0Riw4REFBQ1IsR0FBQzs7NENBQUMsUUFBTTswREFBQSw4REFBQ0csTUFBSTtnREFBQ0wsRUFBRSxFQUFDLGNBQWM7O29EQUFDLEdBQUM7b0RBQUNPLE9BQU8sQ0FBQ0ksSUFBSTtvREFBQyxHQUFDOzs7Ozs7cURBQU87Ozs7Ozs2Q0FBSTtrREFDNUQsOERBQUNULEdBQUM7OzRDQUFDLFVBQVE7MERBQUEsOERBQUNHLE1BQUk7Z0RBQUNMLEVBQUUsRUFBQyxnQkFBZ0I7O29EQUFDLEdBQUM7b0RBQUNPLE9BQU8sQ0FBQ0ssTUFBTTtvREFBQyxHQUFDOzs7Ozs7cURBQU87Ozs7Ozs2Q0FBSTs7Ozs7O3FDQUNoRTs7Ozs7aUNBQ0o7cUJBQUEsQ0FDVCxpQkFBRyw2SUFBSzs7Ozs7O29CQUVQOztvQkFDUCxDQUNOO0NBQ0o7R0F4RG1CekIsR0FBRztBQUFIQSxLQUFBQSxHQUFHO0FBMER2Qk4sdURBQWUsZUFBQyw4REFBQ00sR0FBRzs7OzthQUFHLEVBQUVJLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnQsIHVzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcclxuLy9pbXBvcnQgeyBlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBwdWJsaWNfa2V5LCBhY2NvdW50cywgc2hvd1dlbGNvbWUsIHNob3dBY2NvdW50cywgY3JlYXRlQWNjb3VudCB9ZnJvbSAnLi9zZXJ2aWNlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcclxuICAgIC8vIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAvLyAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgLy8gICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAvLyAgICAgICAgIGFjY291bnRzOiBbXVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxuICAgIGNvbnN0IFt1c2VyX2FjY291bnRzLCBzZXRVc2VyX2FjY291bnRzXSA9IHVzZVN0YXRlKGFjY291bnRzKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0VXNlcl9hY2NvdW50cygoKSA9PiBhY2NvdW50cyk7XHJcbiAgICB9LCBbdXNlcl9hY2NvdW50c10pO1xyXG4gICAgXHJcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICBpZihhY2NvdW50cy5sZW5ndGggPT0gMCl7XHJcbiAgICAgICAgICAgIHNob3dXZWxjb21lKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2hvd0FjY291bnRzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3JlYXRlLWFjY291bnRcIikuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjcmVhdGVBY2NvdW50KTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcclxuICAgIH0gICAgXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxoZWFkZXI+XHJcbiAgICAgICAgICAgICAgICA8aDE+U2tpYSBXYWxsZXQ8L2gxPlxyXG4gICAgICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdhY2NvdW50cycgaWQ9XCJjcmVhdGVcIj5cclxuICAgICAgICAgICAgICAgIDxoMT5XZWxjb21lIHRvIFNraWEgV2FsbGV0PC9oMT48YnIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8cD5HZXQgc3RhcnRlZCBieSBjcmVhdGluZyBhbiBhY2NvdW50IDwvcD48YnIvPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImNyZWF0ZS1hY2NvdW50XCI+Q3JlYXRlIEFjY291bnQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxwIGlkPSd3YWl0Jz48L3A+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdhY2NvdW50cycgaWQ9XCJhY2NvdW50XCI+XHJcbiAgICAgICAgICAgICAgICA8aDE+QWNjb3VudHM8L2gxPjxiciAvPlxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICA8cD48c3Ryb25nPlB1YmxpYyBrZXk6IDwvc3Ryb25nPjxzcGFuIGlkPSdwdWJsaWMta2V5Jz57cHVibGljX2tleX08L3NwYW4+IDwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGlkPSdwcml2YXRlJz48c3Ryb25nPlByaXZhdGUgS2V5OiA8L3N0cm9uZz48c3BhbiBpZD0ncHJpdmF0ZS1rZXknPjwvc3Bhbj48L3A+PGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uPlNob3cgUHJpdmF0ZSBLZXk8L2J1dHRvbj5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdXNlcl9hY2NvdW50cyA/XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlcl9hY2NvdW50cy5tYXAoKGFjY291bnQpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+QWNjb3VudCBOYW1lOiA8c3BhbiBpZD0nYWNjb3VudC1uYW1lJz57YWNjb3VudC5uYW1lfTwvc3Bhbj48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+Q29udHJhY3QgQWRkcmVzczogPHNwYW4gaWQ9J2NvbnRyYWN0LWFkZHJlc3MnPnthY2NvdW50LmNvbnRyYWN0X2FkZHJlc3N9PC9zcGFuPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5UeXBlOiA8c3BhbiBpZD0nYWNjb3VudC10eXBlJz4ge2FjY291bnQudHlwZX0gPC9zcGFuPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5TdGF0dXM6IDxzcGFuIGlkPSdhY2NvdW50LXN0YXR1cyc+IHthY2NvdW50LnN0YXR1c30gPC9zcGFuPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApIDogPD48Lz5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBSZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpKTsiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlJlYWN0RE9NIiwicHVibGljX2tleSIsImFjY291bnRzIiwic2hvd1dlbGNvbWUiLCJzaG93QWNjb3VudHMiLCJjcmVhdGVBY2NvdW50IiwiQXBwIiwidXNlcl9hY2NvdW50cyIsInNldFVzZXJfYWNjb3VudHMiLCJsZW5ndGgiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImxvY2FsU3RvcmFnZSIsImNsZWFyIiwiaGVhZGVyIiwiaDEiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiaWQiLCJiciIsInAiLCJidXR0b24iLCJzdHJvbmciLCJzcGFuIiwibWFwIiwiYWNjb3VudCIsImRpdiIsIm5hbWUiLCJjb250cmFjdF9hZGRyZXNzIiwidHlwZSIsInN0YXR1cyIsInJlbmRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});