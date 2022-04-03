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

eval("\nvar _runtimeJs = _interopRequireDefault(__webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\"));\nvar _starknet = __webpack_require__(/*! starknet */ \"./node_modules/starknet/dist/index.js\");\nvar _accountJson = _interopRequireDefault(__webpack_require__(/*! ../public/Account.json */ \"./public/Account.json\"));\nvar _indexJs = _interopRequireDefault(__webpack_require__(/*! ./index.js */ \"./pages/index.js\"));\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _interopRequireDefault(obj) {\n    return obj && obj.__esModule ? obj : {\n        default: obj\n    };\n}\nif (true) {\n    var showWelcome = function showWelcome() {\n        document.querySelector(\"#create\").style.display = \"block\";\n        document.querySelector(\"#account\").style.display = \"none\";\n    };\n    var showAccounts = function showAccounts() {\n        document.querySelector(\"#create\").style.display = \"none\";\n        document.querySelector(\"#account\").style.display = \"block\";\n    };\n    var updateStatus = function updateStatus(accountIndex, status) {\n        accounts[accountIndex].status = status;\n        localStorage.setItem(\"accounts\", JSON.stringify(accounts));\n    };\n    var accounts = [];\n    var public_key;\n    if (localStorage.getItem(\"accounts\")) {\n        accounts = JSON.parse(localStorage.getItem(\"accounts\"));\n        public_key = JSON.parse(localStorage.getItem(\"keys\")).keyPub.toString();\n    }\n    function createAccount() {\n        return _createAccount.apply(this, arguments);\n    }\n    function _createAccount() {\n        _createAccount = _asyncToGenerator(_runtimeJs.default.mark(function _callee() {\n            var starkKeyPair, starkKeyPub, accountTxn, account, accountContract, initialize;\n            return _runtimeJs.default.wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        document.getElementById(\"wait\").innerHTML = \"Please wait, deploying account...\";\n                        starkKeyPair = _starknet.ec.genKeyPair();\n                        starkKeyPub = _starknet.ec.getStarkKey(starkKeyPair);\n                        localStorage.setItem(\"keys\", JSON.stringify({\n                            keyPair: starkKeyPair,\n                            keyPub: starkKeyPub\n                        }));\n                        console.log(\"deploying account....\");\n                        _ctx.next = 7;\n                        return _starknet.defaultProvider.deployContract({\n                            contract: _accountJson.default,\n                            addressSalt: starkKeyPub\n                        });\n                    case 7:\n                        accountTxn = _ctx.sent;\n                        account = {\n                            name: \"Account \".concat(accounts.length.toString()),\n                            contract_address: accountTxn.address,\n                            status: \"Account Deployed\",\n                            type: \"Simple\"\n                        };\n                        accounts[accounts.length] = account;\n                        localStorage.setItem(\"accounts\", JSON.stringify(accounts));\n                        showAccounts();\n                        console.log(\"account deployed to \".concat(accountTxn.address));\n                        accountContract = new _starknet.Contract(_accountJson.default.abi, accountTxn.address);\n                        // accounts = [accountContract];\n                        // localStorage.setItem(\"accounts\", JSON.stringify(accounts));\n                        console.log(\"initializing account....\");\n                        _ctx.next = 17;\n                        return accountContract.initialize(starkKeyPub, \"0\");\n                    case 17:\n                        initialize = _ctx.sent;\n                        _ctx.next = 20;\n                        return _starknet.defaultProvider.waitForTransaction(accountTxn.transaction_hash);\n                    case 20:\n                        updateStatus(account.length - 1, \"Accepted on L1\");\n                        _ctx.next = 23;\n                        return _starknet.defaultProvider.waitForTransaction(initialize.transaction_hash);\n                    case 23:\n                        updateStatus(account.length - 1, \"Active\");\n                    case 24:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _createAccount.apply(this, arguments);\n    }\n    module.exports = {\n        public_key: public_key,\n        accounts: accounts,\n        showWelcome: showWelcome,\n        showAccounts: showAccounts,\n        createAccount: createAccount\n    };\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFZO1FBQUVjLGFBQWEsRUFBYkEsYUFBYTtLQUFDO0NBQ3BGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3NlcnZpY2UuanM/OTZkYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBlYywgZGVmYXVsdFByb3ZpZGVyLCBDb250cmFjdCB9IGZyb20gJ3N0YXJrbmV0JztcclxuaW1wb3J0IENvbXBpbGVkQWNjb3VudCBmcm9tICcuLi9wdWJsaWMvQWNjb3VudC5qc29uJztcclxuaW1wb3J0IGhvbWUgZnJvbSAnLi9pbmRleC5qcyc7XHJcblxyXG5pZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHtcclxuICAgIGxldCBhY2NvdW50cyA9IFtdO1xyXG4gICAgbGV0IHB1YmxpY19rZXk7XHJcblxyXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYWNjb3VudHNcIikpIHtcclxuICAgICAgICBhY2NvdW50cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhY2NvdW50c1wiKSk7XHJcbiAgICAgICAgcHVibGljX2tleSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJrZXlzXCIpKS5rZXlQdWIudG9TdHJpbmcoKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHNob3dXZWxjb21lKCkge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjcmVhdGUnKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhY2NvdW50Jykuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNob3dBY2NvdW50cygpIHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3JlYXRlJykuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhY2NvdW50Jykuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQWNjb3VudCgpIHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2FpdCcpLmlubmVySFRNTCA9IFwiUGxlYXNlIHdhaXQsIGRlcGxveWluZyBhY2NvdW50Li4uXCI7XHJcbiAgICAgICAgY29uc3Qgc3RhcmtLZXlQYWlyID0gZWMuZ2VuS2V5UGFpcigpO1xyXG4gICAgICAgIGNvbnN0IHN0YXJrS2V5UHViID0gZWMuZ2V0U3RhcmtLZXkoc3RhcmtLZXlQYWlyKTtcclxuICAgIFxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwia2V5c1wiLCBKU09OLnN0cmluZ2lmeSh7a2V5UGFpcjogc3RhcmtLZXlQYWlyLCBrZXlQdWI6IHN0YXJrS2V5UHVifSkpO1xyXG4gICAgXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJkZXBsb3lpbmcgYWNjb3VudC4uLi5cIik7XHJcbiAgICAgICAgY29uc3QgYWNjb3VudFR4biA9IGF3YWl0IGRlZmF1bHRQcm92aWRlci5kZXBsb3lDb250cmFjdCh7XHJcbiAgICAgICAgICAgIGNvbnRyYWN0OiBDb21waWxlZEFjY291bnQsXHJcbiAgICAgICAgICAgIGFkZHJlc3NTYWx0OiBzdGFya0tleVB1YlxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGFjY291bnQgPSB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiQWNjb3VudCBcIi5jb25jYXQoYWNjb3VudHMubGVuZ3RoLnRvU3RyaW5nKCkpLFxyXG4gICAgICAgICAgICBjb250cmFjdF9hZGRyZXNzOiBhY2NvdW50VHhuLmFkZHJlc3MsXHJcbiAgICAgICAgICAgIHN0YXR1czogXCJBY2NvdW50IERlcGxveWVkXCIsXHJcbiAgICAgICAgICAgIHR5cGU6IFwiU2ltcGxlXCJcclxuICAgICAgICB9XHJcbiAgICAgICAgYWNjb3VudHNbYWNjb3VudHMubGVuZ3RoXSA9IGFjY291bnQ7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJhY2NvdW50c1wiLCBKU09OLnN0cmluZ2lmeShhY2NvdW50cykpO1xyXG4gICAgICAgIHNob3dBY2NvdW50cygpXHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKGBhY2NvdW50IGRlcGxveWVkIHRvICR7YWNjb3VudFR4bi5hZGRyZXNzfWApO1xyXG4gICAgXHJcbiAgICAgICAgY29uc3QgYWNjb3VudENvbnRyYWN0ID0gbmV3IENvbnRyYWN0KFxyXG4gICAgICAgICAgICBDb21waWxlZEFjY291bnQuYWJpLFxyXG4gICAgICAgICAgICBhY2NvdW50VHhuLmFkZHJlc3NcclxuICAgICAgICApO1xyXG4gICAgXHJcbiAgICAgICAgLy8gYWNjb3VudHMgPSBbYWNjb3VudENvbnRyYWN0XTtcclxuICAgICAgICAvLyBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImFjY291bnRzXCIsIEpTT04uc3RyaW5naWZ5KGFjY291bnRzKSk7XHJcbiAgICBcclxuICAgICAgICBjb25zb2xlLmxvZyhcImluaXRpYWxpemluZyBhY2NvdW50Li4uLlwiKTtcclxuICAgICAgICBjb25zdCBpbml0aWFsaXplID0gYXdhaXQgYWNjb3VudENvbnRyYWN0LmluaXRpYWxpemUoXHJcbiAgICAgICAgICAgIHN0YXJrS2V5UHViLFxyXG4gICAgICAgICAgICBcIjBcIlxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIGF3YWl0IGRlZmF1bHRQcm92aWRlci53YWl0Rm9yVHJhbnNhY3Rpb24oYWNjb3VudFR4bi50cmFuc2FjdGlvbl9oYXNoKTtcclxuICAgICAgICB1cGRhdGVTdGF0dXMoYWNjb3VudC5sZW5ndGggLSAxLCBcIkFjY2VwdGVkIG9uIEwxXCIpO1xyXG4gICAgICAgIFxyXG4gICAgXHJcbiAgICAgICAgYXdhaXQgZGVmYXVsdFByb3ZpZGVyLndhaXRGb3JUcmFuc2FjdGlvbihpbml0aWFsaXplLnRyYW5zYWN0aW9uX2hhc2gpO1xyXG4gICAgICAgIHVwZGF0ZVN0YXR1cyhhY2NvdW50Lmxlbmd0aCAtIDEsIFwiQWN0aXZlXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHVwZGF0ZVN0YXR1cyhhY2NvdW50SW5kZXgsIHN0YXR1cykge1xyXG4gICAgICAgIGFjY291bnRzW2FjY291bnRJbmRleF0uc3RhdHVzID0gc3RhdHVzO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYWNjb3VudHNcIiwgSlNPTi5zdHJpbmdpZnkoYWNjb3VudHMpKTtcclxuICAgIH1cclxuICAgIG1vZHVsZS5leHBvcnRzID0ge3B1YmxpY19rZXksIGFjY291bnRzLCBzaG93V2VsY29tZSwgc2hvd0FjY291bnRzLCBjcmVhdGVBY2NvdW50fVxyXG59XHJcblxyXG4iXSwibmFtZXMiOlsic2hvd1dlbGNvbWUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzdHlsZSIsImRpc3BsYXkiLCJzaG93QWNjb3VudHMiLCJ1cGRhdGVTdGF0dXMiLCJhY2NvdW50SW5kZXgiLCJzdGF0dXMiLCJhY2NvdW50cyIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwicHVibGljX2tleSIsImdldEl0ZW0iLCJwYXJzZSIsImtleVB1YiIsInRvU3RyaW5nIiwiY3JlYXRlQWNjb3VudCIsInN0YXJrS2V5UGFpciIsInN0YXJrS2V5UHViIiwiYWNjb3VudFR4biIsImFjY291bnQiLCJhY2NvdW50Q29udHJhY3QiLCJpbml0aWFsaXplIiwiZ2V0RWxlbWVudEJ5SWQiLCJpbm5lckhUTUwiLCJlYyIsImdlbktleVBhaXIiLCJnZXRTdGFya0tleSIsImtleVBhaXIiLCJjb25zb2xlIiwibG9nIiwiZGVmYXVsdFByb3ZpZGVyIiwiZGVwbG95Q29udHJhY3QiLCJjb250cmFjdCIsIkNvbXBpbGVkQWNjb3VudCIsImFkZHJlc3NTYWx0IiwibmFtZSIsImNvbmNhdCIsImxlbmd0aCIsImNvbnRyYWN0X2FkZHJlc3MiLCJhZGRyZXNzIiwidHlwZSIsIkNvbnRyYWN0IiwiYWJpIiwid2FpdEZvclRyYW5zYWN0aW9uIiwidHJhbnNhY3Rpb25faGFzaCIsIm1vZHVsZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/service.js\n");

/***/ })

});