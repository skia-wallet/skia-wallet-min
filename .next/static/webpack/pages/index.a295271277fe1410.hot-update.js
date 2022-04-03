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

/***/ "./pages/service.js":
/*!**************************!*\
  !*** ./pages/service.js ***!
  \**************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("\nvar _runtimeJs = _interopRequireDefault(__webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\"));\nvar _starknet = __webpack_require__(/*! starknet */ \"./node_modules/starknet/dist/index.js\");\nvar _accountJson = _interopRequireDefault(__webpack_require__(/*! ../public/Account.json */ \"./public/Account.json\"));\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _interopRequireDefault(obj) {\n    return obj && obj.__esModule ? obj : {\n        default: obj\n    };\n}\nif (true) {\n    var showWelcome = function showWelcome() {\n        document.querySelector(\"#create\").style.display = \"block\";\n        document.querySelector(\"#account\").style.display = \"none\";\n    };\n    var showAccounts = function showAccounts() {\n        document.querySelector(\"#create\").style.display = \"none\";\n        document.querySelector(\"#account\").style.display = \"block\";\n    };\n    var updateStatus = function updateStatus(accountIndex, status) {\n        document.getElementById(\"wait\").innerHTML = status;\n        accounts[accountIndex].status = status;\n        localStorage.setItem(\"accounts\", JSON.stringify(accounts));\n    };\n    var accounts = [];\n    var public_key;\n    if (localStorage.getItem(\"accounts\")) {\n        accounts = JSON.parse(localStorage.getItem(\"accounts\"));\n        public_key = JSON.parse(localStorage.getItem(\"keys\")).keyPub.toString();\n    }\n    function createAccount() {\n        return _createAccount.apply(this, arguments);\n    }\n    function _createAccount() {\n        _createAccount = _asyncToGenerator(_runtimeJs.default.mark(function _callee() {\n            var starkKeyPair, starkKeyPub, accountTxn, account, accountContract, initialize;\n            return _runtimeJs.default.wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        updateStatus(accounts.length - 1, \"Please wait, deploying account...\");\n                        starkKeyPair = _starknet.ec.genKeyPair();\n                        starkKeyPub = _starknet.ec.getStarkKey(starkKeyPair);\n                        localStorage.setItem(\"keys\", JSON.stringify({\n                            keyPair: starkKeyPair,\n                            keyPub: starkKeyPub\n                        }));\n                        console.log(\"deploying account....\");\n                        _ctx.next = 7;\n                        return _starknet.defaultProvider.deployContract({\n                            contract: _accountJson.default,\n                            addressSalt: starkKeyPub\n                        });\n                    case 7:\n                        accountTxn = _ctx.sent;\n                        account = {\n                            name: \"Account \".concat(accounts.length.toString()),\n                            contract_address: accountTxn.address,\n                            status: \"Account Deployed\",\n                            type: \"Simple\"\n                        };\n                        updateStatus(account.length - 1, \"Please wait, deploying account...\");\n                        accounts[accounts.length] = account;\n                        localStorage.setItem(\"accounts\", JSON.stringify(accounts));\n                        showAccounts();\n                        console.log(\"account deployed to \".concat(accountTxn.address));\n                        accountContract = new _starknet.Contract(_accountJson.default.abi, accountTxn.address);\n                        // accounts = [accountContract];\n                        // localStorage.setItem(\"accounts\", JSON.stringify(accounts));\n                        console.log(\"initializing account....\");\n                        _ctx.next = 18;\n                        return accountContract.initialize(starkKeyPub, \"0\");\n                    case 18:\n                        initialize = _ctx.sent;\n                        _ctx.next = 21;\n                        return _starknet.defaultProvider.waitForTransaction(accountTxn.transaction_hash);\n                    case 21:\n                        updateStatus(account.length - 1, \"Accepted on L1\");\n                        _ctx.next = 24;\n                        return _starknet.defaultProvider.waitForTransaction(initialize.transaction_hash);\n                    case 24:\n                        updateStatus(account.length - 1, \"Active\");\n                    case 25:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _createAccount.apply(this, arguments);\n    }\n    module.exports = {\n        public_key: public_key,\n        accounts: accounts,\n        showWelcome: showWelcome,\n        showAccounts: showAccounts,\n        createAccount: createAccount\n    };\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFNLENBQUNDLE9BQU8sR0FBRztRQUFDbEMsVUFBVSxFQUFWQSxVQUFVO1FBQUVMLFFBQVEsRUFBUkEsUUFBUTtRQUFFWCxXQUFXLEVBQVhBLFdBQVc7UUFBRUssWUFBWSxFQUFaQSxZQUFZO1FBQUVnQixhQUFhLEVBQWJBLGFBQWE7S0FBQztDQUNwRiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9zZXJ2aWNlLmpzPzk2ZGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZWMsIGRlZmF1bHRQcm92aWRlciwgQ29udHJhY3QgfSBmcm9tICdzdGFya25ldCc7XHJcbmltcG9ydCBDb21waWxlZEFjY291bnQgZnJvbSAnLi4vcHVibGljL0FjY291bnQuanNvbic7XHJcblxyXG5pZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHtcclxuICAgIGxldCBhY2NvdW50cyA9IFtdO1xyXG4gICAgbGV0IHB1YmxpY19rZXk7XHJcblxyXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYWNjb3VudHNcIikpIHtcclxuICAgICAgICBhY2NvdW50cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhY2NvdW50c1wiKSk7XHJcbiAgICAgICAgcHVibGljX2tleSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJrZXlzXCIpKS5rZXlQdWIudG9TdHJpbmcoKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHNob3dXZWxjb21lKCkge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjcmVhdGUnKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhY2NvdW50Jykuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNob3dBY2NvdW50cygpIHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3JlYXRlJykuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhY2NvdW50Jykuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQWNjb3VudCgpIHtcclxuICAgICAgICB1cGRhdGVTdGF0dXMoYWNjb3VudHMubGVuZ3RoIC0gMSwgXCJQbGVhc2Ugd2FpdCwgZGVwbG95aW5nIGFjY291bnQuLi5cIik7XHJcbiAgICAgICAgY29uc3Qgc3RhcmtLZXlQYWlyID0gZWMuZ2VuS2V5UGFpcigpO1xyXG4gICAgICAgIGNvbnN0IHN0YXJrS2V5UHViID0gZWMuZ2V0U3RhcmtLZXkoc3RhcmtLZXlQYWlyKTtcclxuICAgICAgICBcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImtleXNcIiwgSlNPTi5zdHJpbmdpZnkoe2tleVBhaXI6IHN0YXJrS2V5UGFpciwga2V5UHViOiBzdGFya0tleVB1Yn0pKTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zb2xlLmxvZyhcImRlcGxveWluZyBhY2NvdW50Li4uLlwiKTtcclxuICAgICAgICBjb25zdCBhY2NvdW50VHhuID0gYXdhaXQgZGVmYXVsdFByb3ZpZGVyLmRlcGxveUNvbnRyYWN0KHtcclxuICAgICAgICAgICAgY29udHJhY3Q6IENvbXBpbGVkQWNjb3VudCxcclxuICAgICAgICAgICAgYWRkcmVzc1NhbHQ6IHN0YXJrS2V5UHViXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgYWNjb3VudCA9IHtcclxuICAgICAgICAgICAgbmFtZTogXCJBY2NvdW50IFwiLmNvbmNhdChhY2NvdW50cy5sZW5ndGgudG9TdHJpbmcoKSksXHJcbiAgICAgICAgICAgIGNvbnRyYWN0X2FkZHJlc3M6IGFjY291bnRUeG4uYWRkcmVzcyxcclxuICAgICAgICAgICAgc3RhdHVzOiBcIkFjY291bnQgRGVwbG95ZWRcIixcclxuICAgICAgICAgICAgdHlwZTogXCJTaW1wbGVcIlxyXG4gICAgICAgIH1cclxuICAgICAgICB1cGRhdGVTdGF0dXMoYWNjb3VudC5sZW5ndGggLSAxLCBcIlBsZWFzZSB3YWl0LCBkZXBsb3lpbmcgYWNjb3VudC4uLlwiKTtcclxuICAgICAgICBhY2NvdW50c1thY2NvdW50cy5sZW5ndGhdID0gYWNjb3VudDtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImFjY291bnRzXCIsIEpTT04uc3RyaW5naWZ5KGFjY291bnRzKSk7XHJcbiAgICAgICAgc2hvd0FjY291bnRzKClcclxuICAgICAgICBcclxuICAgICAgICBjb25zb2xlLmxvZyhgYWNjb3VudCBkZXBsb3llZCB0byAke2FjY291bnRUeG4uYWRkcmVzc31gKTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBhY2NvdW50Q29udHJhY3QgPSBuZXcgQ29udHJhY3QoXHJcbiAgICAgICAgICAgIENvbXBpbGVkQWNjb3VudC5hYmksXHJcbiAgICAgICAgICAgIGFjY291bnRUeG4uYWRkcmVzc1xyXG4gICAgICAgICk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gYWNjb3VudHMgPSBbYWNjb3VudENvbnRyYWN0XTtcclxuICAgICAgICAvLyBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImFjY291bnRzXCIsIEpTT04uc3RyaW5naWZ5KGFjY291bnRzKSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJpbml0aWFsaXppbmcgYWNjb3VudC4uLi5cIik7XHJcbiAgICAgICAgY29uc3QgaW5pdGlhbGl6ZSA9IGF3YWl0IGFjY291bnRDb250cmFjdC5pbml0aWFsaXplKFxyXG4gICAgICAgICAgICBzdGFya0tleVB1YixcclxuICAgICAgICAgICAgXCIwXCJcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBhd2FpdCBkZWZhdWx0UHJvdmlkZXIud2FpdEZvclRyYW5zYWN0aW9uKGFjY291bnRUeG4udHJhbnNhY3Rpb25faGFzaCk7XHJcbiAgICAgICAgICAgIHVwZGF0ZVN0YXR1cyhhY2NvdW50Lmxlbmd0aCAtIDEsIFwiQWNjZXB0ZWQgb24gTDFcIik7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgYXdhaXQgZGVmYXVsdFByb3ZpZGVyLndhaXRGb3JUcmFuc2FjdGlvbihpbml0aWFsaXplLnRyYW5zYWN0aW9uX2hhc2gpO1xyXG4gICAgICAgICAgICB1cGRhdGVTdGF0dXMoYWNjb3VudC5sZW5ndGggLSAxLCBcIkFjdGl2ZVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICBmdW5jdGlvbiB1cGRhdGVTdGF0dXMoYWNjb3VudEluZGV4LCBzdGF0dXMpIHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2FpdCcpLmlubmVySFRNTCA9IHN0YXR1cztcclxuICAgICAgICBhY2NvdW50c1thY2NvdW50SW5kZXhdLnN0YXR1cyA9IHN0YXR1cztcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImFjY291bnRzXCIsIEpTT04uc3RyaW5naWZ5KGFjY291bnRzKSk7XHJcbiAgICB9XHJcbiAgICBtb2R1bGUuZXhwb3J0cyA9IHtwdWJsaWNfa2V5LCBhY2NvdW50cywgc2hvd1dlbGNvbWUsIHNob3dBY2NvdW50cywgY3JlYXRlQWNjb3VudH1cclxufVxyXG5cclxuIl0sIm5hbWVzIjpbInNob3dXZWxjb21lIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic3R5bGUiLCJkaXNwbGF5Iiwic2hvd0FjY291bnRzIiwidXBkYXRlU3RhdHVzIiwiYWNjb3VudEluZGV4Iiwic3RhdHVzIiwiZ2V0RWxlbWVudEJ5SWQiLCJpbm5lckhUTUwiLCJhY2NvdW50cyIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwicHVibGljX2tleSIsImdldEl0ZW0iLCJwYXJzZSIsImtleVB1YiIsInRvU3RyaW5nIiwiY3JlYXRlQWNjb3VudCIsInN0YXJrS2V5UGFpciIsInN0YXJrS2V5UHViIiwiYWNjb3VudFR4biIsImFjY291bnQiLCJhY2NvdW50Q29udHJhY3QiLCJpbml0aWFsaXplIiwibGVuZ3RoIiwiZWMiLCJnZW5LZXlQYWlyIiwiZ2V0U3RhcmtLZXkiLCJrZXlQYWlyIiwiY29uc29sZSIsImxvZyIsImRlZmF1bHRQcm92aWRlciIsImRlcGxveUNvbnRyYWN0IiwiY29udHJhY3QiLCJDb21waWxlZEFjY291bnQiLCJhZGRyZXNzU2FsdCIsIm5hbWUiLCJjb25jYXQiLCJjb250cmFjdF9hZGRyZXNzIiwiYWRkcmVzcyIsInR5cGUiLCJDb250cmFjdCIsImFiaSIsIndhaXRGb3JUcmFuc2FjdGlvbiIsInRyYW5zYWN0aW9uX2hhc2giLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/service.js\n");

/***/ })

});