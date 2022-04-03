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

eval("\nvar _runtimeJs = _interopRequireDefault(__webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\"));\nvar _starknet = __webpack_require__(/*! starknet */ \"./node_modules/starknet/dist/index.js\");\nvar _accountJson = _interopRequireDefault(__webpack_require__(/*! ../public/Account.json */ \"./public/Account.json\"));\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _interopRequireDefault(obj) {\n    return obj && obj.__esModule ? obj : {\n        default: obj\n    };\n}\nif (true) {\n    var showWelcome = function showWelcome() {\n        document.querySelector(\"#create\").style.display = \"block\";\n        document.querySelector(\"#account\").style.display = \"none\";\n    };\n    var accounts = [];\n    var public_key;\n    if (localStorage.getItem(\"accounts\")) {\n        accounts = JSON.parse(localStorage.getItem(\"accounts\"));\n        public_key = JSON.parse(localStorage.getItem(\"keys\")).keyPub.toString();\n    }\n    function createAccount() {\n        return _createAccount.apply(this, arguments);\n    }\n    function _createAccount() {\n        _createAccount = _asyncToGenerator(_runtimeJs.default.mark(function _callee() {\n            var starkKeyPair, starkKeyPub, accountTxn, account, accountContract, initialize;\n            return _runtimeJs.default.wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        document.getElementById(\"wait\").innerHTML = \"Please wait, deploying account...\";\n                        starkKeyPair = _starknet.ec.genKeyPair();\n                        starkKeyPub = _starknet.ec.getStarkKey(starkKeyPair);\n                        localStorage.setItem(\"keys\", JSON.stringify({\n                            keyPair: starkKeyPair,\n                            keyPub: starkKeyPub\n                        }));\n                        console.log(\"deploying account....\");\n                        _ctx.next = 7;\n                        return _starknet.defaultProvider.deployContract({\n                            contract: _accountJson.default,\n                            addressSalt: starkKeyPub\n                        });\n                    case 7:\n                        accountTxn = _ctx.sent;\n                        account = {\n                            contract_address: accountTxn.address,\n                            status: \"Account Deployed\",\n                            type: \"Simple\"\n                        };\n                        accounts = [\n                            account\n                        ];\n                        localStorage.setItem(\"accounts\", JSON.stringify(accounts));\n                        console.log(\"account deployed to \".concat(accountTxn.address));\n                        accountContract = new _starknet.Contract(_accountJson.default.abi, accountTxn.address);\n                        // accounts = [accountContract];\n                        // localStorage.setItem(\"accounts\", JSON.stringify(accounts));\n                        console.log(\"initializing account....\");\n                        _ctx.next = 16;\n                        return accountContract.initialize(starkKeyPub, \"0\");\n                    case 16:\n                        initialize = _ctx.sent;\n                        _ctx.next = 19;\n                        return _starknet.defaultProvider.waitForTransaction(accountTxn.transaction_hash);\n                    case 19:\n                        account.status = \"Accepted on L1!\";\n                        _ctx.next = 22;\n                        return _starknet.defaultProvider.waitForTransaction(initialize.transaction_hash);\n                    case 22:\n                        account.status = \"Accepted on L1!\";\n                        console.log(\"initialized!\");\n                    case 24:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _createAccount.apply(this, arguments);\n    }\n    module.exports = {\n        public_key: public_key,\n        accounts: accounts,\n        showWelcome: showWelcome,\n        createAccount: createAccount\n    };\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGtCQUFrQixDQUFDekIsVUFBVSxDQUFDMEIsZ0JBQWdCLENBQUM7O3dCQUNyRXpCLE9BQU8sQ0FBQ29CLE1BQU0sR0FBRyxpQkFBaUI7OytCQUU1QlAsU0FBZSxpQkFBQ1csa0JBQWtCLENBQUN0QixVQUFVLENBQUN1QixnQkFBZ0IsQ0FBQzs7d0JBQ3JFekIsT0FBTyxDQUFDb0IsTUFBTSxHQUFHLGlCQUFpQjt3QkFDbENULE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDOzs7Ozs7U0FDL0I7ZUE1Q2NoQixjQUFhOztJQTZDNUI4QixNQUFNLENBQUNDLE9BQU8sR0FBRztRQUFDdEMsVUFBVSxFQUFWQSxVQUFVO1FBQUVELFFBQVEsRUFBUkEsUUFBUTtRQUFFTCxXQUFXLEVBQVhBLFdBQVc7UUFBRWEsYUFBYSxFQUFiQSxhQUFhO0tBQUM7Q0FDdEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2VydmljZS5qcz85NmRiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGVjLCBkZWZhdWx0UHJvdmlkZXIsIENvbnRyYWN0IH0gZnJvbSAnc3RhcmtuZXQnO1xyXG5pbXBvcnQgQ29tcGlsZWRBY2NvdW50IGZyb20gJy4uL3B1YmxpYy9BY2NvdW50Lmpzb24nO1xyXG5cclxuaWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSB7XHJcbiAgICBsZXQgYWNjb3VudHMgPSBbXTtcclxuICAgIGxldCBwdWJsaWNfa2V5O1xyXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYWNjb3VudHNcIikpIHtcclxuICAgICAgICBhY2NvdW50cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhY2NvdW50c1wiKSk7XHJcbiAgICAgICAgcHVibGljX2tleSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJrZXlzXCIpKS5rZXlQdWIudG9TdHJpbmcoKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHNob3dXZWxjb21lKCkge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjcmVhdGUnKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhY2NvdW50Jykuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBhc3luYyBmdW5jdGlvbiBjcmVhdGVBY2NvdW50KCkge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3YWl0JykuaW5uZXJIVE1MID0gXCJQbGVhc2Ugd2FpdCwgZGVwbG95aW5nIGFjY291bnQuLi5cIjtcclxuICAgICAgICBjb25zdCBzdGFya0tleVBhaXIgPSBlYy5nZW5LZXlQYWlyKCk7XHJcbiAgICAgICAgY29uc3Qgc3RhcmtLZXlQdWIgPSBlYy5nZXRTdGFya0tleShzdGFya0tleVBhaXIpO1xyXG4gICAgXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJrZXlzXCIsIEpTT04uc3RyaW5naWZ5KHtrZXlQYWlyOiBzdGFya0tleVBhaXIsIGtleVB1Yjogc3RhcmtLZXlQdWJ9KSk7XHJcbiAgICBcclxuICAgICAgICBjb25zb2xlLmxvZyhcImRlcGxveWluZyBhY2NvdW50Li4uLlwiKTtcclxuICAgICAgICBjb25zdCBhY2NvdW50VHhuID0gYXdhaXQgZGVmYXVsdFByb3ZpZGVyLmRlcGxveUNvbnRyYWN0KHtcclxuICAgICAgICAgICAgY29udHJhY3Q6IENvbXBpbGVkQWNjb3VudCxcclxuICAgICAgICAgICAgYWRkcmVzc1NhbHQ6IHN0YXJrS2V5UHViXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgYWNjb3VudCA9IHtcclxuICAgICAgICAgICAgY29udHJhY3RfYWRkcmVzczogYWNjb3VudFR4bi5hZGRyZXNzLFxyXG4gICAgICAgICAgICBzdGF0dXM6IFwiQWNjb3VudCBEZXBsb3llZFwiLFxyXG4gICAgICAgICAgICB0eXBlOiBcIlNpbXBsZVwiXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFjY291bnRzID0gW2FjY291bnRdO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYWNjb3VudHNcIiwgSlNPTi5zdHJpbmdpZnkoYWNjb3VudHMpKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coYGFjY291bnQgZGVwbG95ZWQgdG8gJHthY2NvdW50VHhuLmFkZHJlc3N9YCk7XHJcbiAgICBcclxuICAgICAgICBjb25zdCBhY2NvdW50Q29udHJhY3QgPSBuZXcgQ29udHJhY3QoXHJcbiAgICAgICAgICAgIENvbXBpbGVkQWNjb3VudC5hYmksXHJcbiAgICAgICAgICAgIGFjY291bnRUeG4uYWRkcmVzc1xyXG4gICAgICAgICk7XHJcbiAgICBcclxuICAgICAgICAvLyBhY2NvdW50cyA9IFthY2NvdW50Q29udHJhY3RdO1xyXG4gICAgICAgIC8vIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYWNjb3VudHNcIiwgSlNPTi5zdHJpbmdpZnkoYWNjb3VudHMpKTtcclxuICAgIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiaW5pdGlhbGl6aW5nIGFjY291bnQuLi4uXCIpO1xyXG4gICAgICAgIGNvbnN0IGluaXRpYWxpemUgPSBhd2FpdCBhY2NvdW50Q29udHJhY3QuaW5pdGlhbGl6ZShcclxuICAgICAgICAgICAgc3RhcmtLZXlQdWIsXHJcbiAgICAgICAgICAgIFwiMFwiXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgYXdhaXQgZGVmYXVsdFByb3ZpZGVyLndhaXRGb3JUcmFuc2FjdGlvbihhY2NvdW50VHhuLnRyYW5zYWN0aW9uX2hhc2gpO1xyXG4gICAgICAgIGFjY291bnQuc3RhdHVzID0gXCJBY2NlcHRlZCBvbiBMMSFcIlxyXG4gICAgXHJcbiAgICAgICAgYXdhaXQgZGVmYXVsdFByb3ZpZGVyLndhaXRGb3JUcmFuc2FjdGlvbihpbml0aWFsaXplLnRyYW5zYWN0aW9uX2hhc2gpO1xyXG4gICAgICAgIGFjY291bnQuc3RhdHVzID0gXCJBY2NlcHRlZCBvbiBMMSFcIlxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiaW5pdGlhbGl6ZWQhXCIpO1xyXG4gICAgfVxyXG4gICAgbW9kdWxlLmV4cG9ydHMgPSB7cHVibGljX2tleSwgYWNjb3VudHMsIHNob3dXZWxjb21lLCBjcmVhdGVBY2NvdW50fVxyXG59XHJcblxyXG4iXSwibmFtZXMiOlsic2hvd1dlbGNvbWUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzdHlsZSIsImRpc3BsYXkiLCJhY2NvdW50cyIsInB1YmxpY19rZXkiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwia2V5UHViIiwidG9TdHJpbmciLCJjcmVhdGVBY2NvdW50Iiwic3RhcmtLZXlQYWlyIiwic3RhcmtLZXlQdWIiLCJhY2NvdW50VHhuIiwiYWNjb3VudCIsImFjY291bnRDb250cmFjdCIsImluaXRpYWxpemUiLCJnZXRFbGVtZW50QnlJZCIsImlubmVySFRNTCIsImVjIiwiZ2VuS2V5UGFpciIsImdldFN0YXJrS2V5Iiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImtleVBhaXIiLCJjb25zb2xlIiwibG9nIiwiZGVmYXVsdFByb3ZpZGVyIiwiZGVwbG95Q29udHJhY3QiLCJjb250cmFjdCIsIkNvbXBpbGVkQWNjb3VudCIsImFkZHJlc3NTYWx0IiwiY29udHJhY3RfYWRkcmVzcyIsImFkZHJlc3MiLCJzdGF0dXMiLCJ0eXBlIiwiQ29udHJhY3QiLCJhYmkiLCJ3YWl0Rm9yVHJhbnNhY3Rpb24iLCJ0cmFuc2FjdGlvbl9oYXNoIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/service.js\n");

/***/ })

});