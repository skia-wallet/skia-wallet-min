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

/***/ "./service.js":
/*!********************!*\
  !*** ./service.js ***!
  \********************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("\nvar _runtimeJs = _interopRequireDefault(__webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\"));\nvar _starknet = __webpack_require__(/*! starknet */ \"./node_modules/starknet/dist/index.js\");\nvar _ellipticCurve = __webpack_require__(/*! starknet/dist/utils/ellipticCurve */ \"./node_modules/starknet/dist/utils/ellipticCurve.js\");\nvar _transaction = __webpack_require__(/*! starknet/utils/transaction */ \"./node_modules/starknet/utils/transaction.js\");\nvar _accountJson = _interopRequireDefault(__webpack_require__(/*! ./public/Account.json */ \"./public/Account.json\"));\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _interopRequireDefault(obj) {\n    return obj && obj.__esModule ? obj : {\n        default: obj\n    };\n}\nif (true) {\n    var accounts = [];\n    var public_key;\n    if (localStorage.getItem(\"accounts\")) {\n        accounts = JSON.parse(localStorage.getItem(\"accounts\"));\n        public_key = JSON.parse(localStorage.getItem(\"keys\")).keyPub.toString();\n    }\n    function createAccount() {\n        return _createAccount.apply(this, arguments);\n    }\n    function _createAccount() {\n        _createAccount = // function showWelcome() {\n        //     document.querySelector('#create').style.display = \"block\";\n        //     document.querySelector('#account').style.display = \"none\";\n        // }\n        // function showAccounts() {\n        //     document.querySelector('#create').style.display = \"none\";\n        //     document.querySelector('#account').style.display = \"block\";\n        // }\n        _asyncToGenerator(_runtimeJs.default.mark(function _callee() {\n            var starkKeyPair, starkKeyPub, accountTxn, account, accountContract;\n            return _runtimeJs.default.wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        document.getElementById(\"wait\").innerHTML = \"Please wait, deploying account...\";\n                        starkKeyPair = _starknet.ec.genKeyPair();\n                        starkKeyPub = _starknet.ec.getStarkKey(starkKeyPair);\n                        localStorage.setItem(\"keys\", JSON.stringify({\n                            keyPair: starkKeyPair,\n                            keyPub: starkKeyPub\n                        }));\n                        console.log(\"deploying account....\");\n                        _ctx.next = 7;\n                        return _starknet.defaultProvider.deployContract({\n                            contract: _accountJson.default,\n                            addressSalt: starkKeyPub\n                        });\n                    case 7:\n                        accountTxn = _ctx.sent;\n                        account = {\n                            name: \"Account \".concat(accounts.length.toString()),\n                            contract_address: accountTxn.address,\n                            status: \"Account Deployed!\",\n                            type: \"Simple\"\n                        };\n                        accountContract = new _starknet.Contract(_accountJson.default.abi, account.contract_address);\n                        console.log(\"initializing account....\");\n                        _ctx.next = 13;\n                        return accountContract.initialize(public_key, \"0\");\n                    case 13:\n                        accounts[accounts.length] = account;\n                        localStorage.setItem(\"accounts\", JSON.stringify(accounts));\n                        console.log(\"account deployed to \".concat(accountTxn.address));\n                        location.reload();\n                    case 17:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _createAccount.apply(this, arguments);\n    }\n    function invoke(account, contract_address, method, args, callBackUrl) {\n        return _invoke.apply(this, arguments);\n    }\n    function _invoke() {\n        _invoke = _asyncToGenerator(_runtimeJs.default.mark(function _callee(account, contract_address, method, args, callBackUrl) {\n            var accountContract, Txn;\n            return _runtimeJs.default.wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        accountContract = new _starknet.Account(_starknet.defaultProvider, accounts[account].contract_address, JSON.parse(localStorage.getItem(\"keys\")).keyPair);\n                        console.log(\"Callling contract...\");\n                        _ctx.next = 4;\n                        return _starknet.defaultProvider.invokeFunction({\n                            contractAddress: contract_address,\n                            entrypoint: method,\n                            calldata: args\n                        });\n                    case 4:\n                        Txn = _ctx.sent;\n                        document.getElementById(\"status\").innerHTML = 'Transaction hash: <a href=\"https://goerli.voyager.online/tx/'.concat(Txn.transaction_hash, '\">').concat(Txn.transaction_hash, \"</a>\");\n                    case 6:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        //window.location.href = callBackUrl;\n        // console.log(\"success!\")\n        // return Txn.transaction_hash;\n        }));\n        return _invoke.apply(this, arguments);\n    }\n    module.exports = {\n        public_key: public_key,\n        accounts: accounts,\n        createAccount: createAccount,\n        invoke: invoke\n    };\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVJBLFFBQVE7UUFBRVEsYUFBYSxFQUFiQSxhQUFhO1FBQUVrQyxNQUFNLEVBQU5BLE1BQU07S0FBQztDQUNqRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zZXJ2aWNlLmpzPzQ2NzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZWMsIGRlZmF1bHRQcm92aWRlciwgQ29udHJhY3QsIGhhc2gsIEFjY291bnQgfSBmcm9tICdzdGFya25ldCc7XHJcbmltcG9ydCB7IGdldEtleVBhaXIgfSBmcm9tICdzdGFya25ldC9kaXN0L3V0aWxzL2VsbGlwdGljQ3VydmUnO1xyXG5pbXBvcnQgeyB0cmFuc2Zvcm1DYWxsc1RvTXVsdGljYWxsQXJyYXlzIH0gZnJvbSAnc3RhcmtuZXQvdXRpbHMvdHJhbnNhY3Rpb24nXHJcbmltcG9ydCBDb21waWxlZEFjY291bnQgZnJvbSAnLi9wdWJsaWMvQWNjb3VudC5qc29uJztcclxuXHJcbmlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0Jykge1xyXG4gICAgbGV0IGFjY291bnRzID0gW107XHJcbiAgICBsZXQgcHVibGljX2tleTtcclxuXHJcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhY2NvdW50c1wiKSkge1xyXG4gICAgICAgIGFjY291bnRzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImFjY291bnRzXCIpKTtcclxuICAgICAgICBwdWJsaWNfa2V5ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImtleXNcIikpLmtleVB1Yi50b1N0cmluZygpO1xyXG4gICAgfVxyXG4gICAgLy8gZnVuY3Rpb24gc2hvd1dlbGNvbWUoKSB7XHJcbiAgICAvLyAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NyZWF0ZScpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAvLyAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FjY291bnQnKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gZnVuY3Rpb24gc2hvd0FjY291bnRzKCkge1xyXG4gICAgLy8gICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjcmVhdGUnKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAvLyAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FjY291bnQnKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgLy8gfVxyXG4gICAgXHJcbiAgICBhc3luYyBmdW5jdGlvbiBjcmVhdGVBY2NvdW50KCkge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3YWl0JykuaW5uZXJIVE1MID0gXCJQbGVhc2Ugd2FpdCwgZGVwbG95aW5nIGFjY291bnQuLi5cIjtcclxuICAgICAgICBjb25zdCBzdGFya0tleVBhaXIgPSBlYy5nZW5LZXlQYWlyKCk7XHJcbiAgICAgICAgY29uc3Qgc3RhcmtLZXlQdWIgPSBlYy5nZXRTdGFya0tleShzdGFya0tleVBhaXIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwia2V5c1wiLCBKU09OLnN0cmluZ2lmeSh7a2V5UGFpcjogc3RhcmtLZXlQYWlyLCBrZXlQdWI6IHN0YXJrS2V5UHVifSkpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZGVwbG95aW5nIGFjY291bnQuLi4uXCIpO1xyXG4gICAgICAgIGNvbnN0IGFjY291bnRUeG4gPSBhd2FpdCBkZWZhdWx0UHJvdmlkZXIuZGVwbG95Q29udHJhY3Qoe1xyXG4gICAgICAgICAgICBjb250cmFjdDogQ29tcGlsZWRBY2NvdW50LFxyXG4gICAgICAgICAgICBhZGRyZXNzU2FsdDogc3RhcmtLZXlQdWJcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBhY2NvdW50ID0ge1xyXG4gICAgICAgICAgICBuYW1lOiBcIkFjY291bnQgXCIuY29uY2F0KGFjY291bnRzLmxlbmd0aC50b1N0cmluZygpKSxcclxuICAgICAgICAgICAgY29udHJhY3RfYWRkcmVzczogYWNjb3VudFR4bi5hZGRyZXNzLFxyXG4gICAgICAgICAgICBzdGF0dXM6IFwiQWNjb3VudCBEZXBsb3llZCFcIixcclxuICAgICAgICAgICAgdHlwZTogXCJTaW1wbGVcIlxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBhY2NvdW50Q29udHJhY3QgPSBuZXcgQ29udHJhY3QoXHJcbiAgICAgICAgICAgIENvbXBpbGVkQWNjb3VudC5hYmksXHJcbiAgICAgICAgICAgIGFjY291bnQuY29udHJhY3RfYWRkcmVzc1xyXG4gICAgICAgICk7XHJcbiAgICBcclxuICAgICAgICBjb25zb2xlLmxvZyhcImluaXRpYWxpemluZyBhY2NvdW50Li4uLlwiKTtcclxuICAgICAgICBhd2FpdCBhY2NvdW50Q29udHJhY3QuaW5pdGlhbGl6ZShcclxuICAgICAgICAgICAgcHVibGljX2tleSxcclxuICAgICAgICAgICAgXCIwXCJcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBhY2NvdW50c1thY2NvdW50cy5sZW5ndGhdID0gYWNjb3VudDtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImFjY291bnRzXCIsIEpTT04uc3RyaW5naWZ5KGFjY291bnRzKSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coYGFjY291bnQgZGVwbG95ZWQgdG8gJHthY2NvdW50VHhuLmFkZHJlc3N9YCk7XHJcbiAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gaW52b2tlKGFjY291bnQsIGNvbnRyYWN0X2FkZHJlc3MsIG1ldGhvZCwgYXJncywgY2FsbEJhY2tVcmwpIHtcclxuXHJcbiAgICAgICAgY29uc3QgYWNjb3VudENvbnRyYWN0ID0gbmV3IEFjY291bnQoXHJcbiAgICAgICAgICAgIGRlZmF1bHRQcm92aWRlcixcclxuICAgICAgICAgICAgYWNjb3VudHNbYWNjb3VudF0uY29udHJhY3RfYWRkcmVzcyxcclxuICAgICAgICAgICAgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImtleXNcIikpLmtleVBhaXJcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhgQ2FsbGxpbmcgY29udHJhY3QuLi5gKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBBY2NvdW50LmV4ZWN1dGUgbm90IHdvcmtpbmdcclxuICAgICAgICAvLyBUT0RPOiBSZXBsYWNlIHdpdGggYWNjb291bnQuZXhlY3V0ZVxyXG5cclxuICAgICAgICBjb25zdCBUeG4gPSBhd2FpdCBkZWZhdWx0UHJvdmlkZXIuaW52b2tlRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICBjb250cmFjdEFkZHJlc3M6IGNvbnRyYWN0X2FkZHJlc3MsXHJcbiAgICAgICAgICAgIGVudHJ5cG9pbnQ6IG1ldGhvZCxcclxuICAgICAgICAgICAgY2FsbGRhdGE6IGFyZ3NcclxuICAgICAgICB9KTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhdHVzJykuaW5uZXJIVE1MID0gYFRyYW5zYWN0aW9uIGhhc2g6IDxhIGhyZWY9XCJodHRwczovL2dvZXJsaS52b3lhZ2VyLm9ubGluZS90eC8ke1R4bi50cmFuc2FjdGlvbl9oYXNofVwiPiR7VHhuLnRyYW5zYWN0aW9uX2hhc2h9PC9hPmA7XHJcbiAgICAgICAgLy93aW5kb3cubG9jYXRpb24uaHJlZiA9IGNhbGxCYWNrVXJsO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwic3VjY2VzcyFcIilcclxuICAgICAgICAvLyByZXR1cm4gVHhuLnRyYW5zYWN0aW9uX2hhc2g7XHJcbiAgICB9XHJcblxyXG4gICAgbW9kdWxlLmV4cG9ydHMgPSB7cHVibGljX2tleSwgYWNjb3VudHMsIGNyZWF0ZUFjY291bnQsIGludm9rZX1cclxufVxyXG5cclxuIl0sIm5hbWVzIjpbImFjY291bnRzIiwicHVibGljX2tleSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJrZXlQdWIiLCJ0b1N0cmluZyIsImNyZWF0ZUFjY291bnQiLCJzdGFya0tleVBhaXIiLCJzdGFya0tleVB1YiIsImFjY291bnRUeG4iLCJhY2NvdW50IiwiYWNjb3VudENvbnRyYWN0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImlubmVySFRNTCIsImVjIiwiZ2VuS2V5UGFpciIsImdldFN0YXJrS2V5Iiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImtleVBhaXIiLCJjb25zb2xlIiwibG9nIiwiZGVmYXVsdFByb3ZpZGVyIiwiZGVwbG95Q29udHJhY3QiLCJjb250cmFjdCIsIkNvbXBpbGVkQWNjb3VudCIsImFkZHJlc3NTYWx0IiwibmFtZSIsImNvbmNhdCIsImxlbmd0aCIsImNvbnRyYWN0X2FkZHJlc3MiLCJhZGRyZXNzIiwic3RhdHVzIiwidHlwZSIsIkNvbnRyYWN0IiwiYWJpIiwiaW5pdGlhbGl6ZSIsImxvY2F0aW9uIiwicmVsb2FkIiwiaW52b2tlIiwibWV0aG9kIiwiYXJncyIsImNhbGxCYWNrVXJsIiwiVHhuIiwiQWNjb3VudCIsImludm9rZUZ1bmN0aW9uIiwiY29udHJhY3RBZGRyZXNzIiwiZW50cnlwb2ludCIsImNhbGxkYXRhIiwidHJhbnNhY3Rpb25faGFzaCIsIm1vZHVsZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./service.js\n");

/***/ })

});