"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/transact",{

/***/ "./service.js":
/*!********************!*\
  !*** ./service.js ***!
  \********************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("\nvar _runtimeJs = _interopRequireDefault(__webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\"));\nvar _starknet = __webpack_require__(/*! starknet */ \"./node_modules/starknet/dist/index.js\");\nvar _ellipticCurve = __webpack_require__(/*! starknet/dist/utils/ellipticCurve */ \"./node_modules/starknet/dist/utils/ellipticCurve.js\");\nvar _transaction = __webpack_require__(/*! starknet/utils/transaction */ \"./node_modules/starknet/utils/transaction.js\");\nvar _accountJson = _interopRequireDefault(__webpack_require__(/*! ./public/Account.json */ \"./public/Account.json\"));\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _interopRequireDefault(obj) {\n    return obj && obj.__esModule ? obj : {\n        default: obj\n    };\n}\nif (true) {\n    var showWelcome = function showWelcome() {\n        document.querySelector(\"#create\").style.display = \"block\";\n        document.querySelector(\"#account\").style.display = \"none\";\n    };\n    var showAccounts = function showAccounts() {\n        document.querySelector(\"#create\").style.display = \"none\";\n        document.querySelector(\"#account\").style.display = \"block\";\n    };\n    var accounts = [];\n    var public_key;\n    if (localStorage.getItem(\"accounts\")) {\n        accounts = JSON.parse(localStorage.getItem(\"accounts\"));\n        public_key = JSON.parse(localStorage.getItem(\"keys\")).keyPub.toString();\n    }\n    function createAccount() {\n        return _createAccount.apply(this, arguments);\n    }\n    function _createAccount() {\n        _createAccount = _asyncToGenerator(_runtimeJs.default.mark(function _callee() {\n            var starkKeyPair, starkKeyPub, accountTxn, account, accountContract;\n            return _runtimeJs.default.wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        // TODO: encrypt keyPair with user password\n                        document.getElementById(\"wait\").innerHTML = \"Please wait, deploying account...\";\n                        if (!public_key) {\n                            starkKeyPair = _starknet.ec.genKeyPair();\n                            starkKeyPub = _starknet.ec.getStarkKey(starkKeyPair);\n                            localStorage.setItem(\"keys\", JSON.stringify({\n                                keyPair: starkKeyPair,\n                                keyPub: starkKeyPub\n                            }));\n                            public_key = JSON.parse(localStorage.getItem(\"keys\")).keyPub.toString();\n                        }\n                        console.log(\"deploying account....\");\n                        console.log(public_key);\n                        _ctx.next = 6;\n                        return _starknet.defaultProvider.deployContract({\n                            contract: _accountJson.default,\n                            addressSalt: accounts.length.toString(16)\n                        });\n                    case 6:\n                        accountTxn = _ctx.sent;\n                        console.log(\"deployed!\");\n                        account = {\n                            name: \"Account \".concat(accounts.length.toString()),\n                            contract_address: accountTxn.address,\n                            status: \"Account Deployed!\",\n                            type: \"Simple\"\n                        };\n                        accountContract = new _starknet.Contract(_accountJson.default.abi, account.contract_address);\n                        console.log(\"initializing account....\");\n                        _ctx.next = 13;\n                        return accountContract.initialize(public_key, \"0\");\n                    case 13:\n                        accounts[accounts.length] = account;\n                        localStorage.setItem(\"accounts\", JSON.stringify(accounts));\n                        console.log(\"account deployed to \".concat(accountTxn.address));\n                        location.reload();\n                    case 17:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _createAccount.apply(this, arguments);\n    }\n    function invoke(account, contract_address, method, args, callBackUrl) {\n        return _invoke.apply(this, arguments);\n    }\n    function _invoke() {\n        _invoke = _asyncToGenerator(_runtimeJs.default.mark(function _callee(account, contract_address, method, args, callBackUrl) {\n            var accountContract, Txn;\n            return _runtimeJs.default.wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        accountContract = new _starknet.Account(_starknet.defaultProvider, accounts[account].contract_address, JSON.parse(localStorage.getItem(\"keys\")).keyPair);\n                        console.log(\"Callling contract...\");\n                        _ctx.next = 4;\n                        return _starknet.defaultProvider.invokeFunction({\n                            contractAddress: contract_address,\n                            entrypoint: method,\n                            calldata: args\n                        });\n                    case 4:\n                        Txn = _ctx.sent;\n                        document.getElementById(\"status\").innerHTML = 'Transaction hash: <a href=\"https://goerli.voyager.online/tx/'.concat(Txn.transaction_hash, '\">').concat(Txn.transaction_hash, \"</a>\");\n                    case 6:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        //window.location.href = callBackUrl;\n        // console.log(\"success!\")\n        // return Txn.transaction_hash;\n        }));\n        return _invoke.apply(this, arguments);\n    }\n    module.exports = {\n        public_key: public_key,\n        accounts: accounts,\n        showWelcome: showWelcome,\n        showAccounts: showAccounts,\n        createAccount: createAccount,\n        invoke: invoke\n    };\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixJQUFJLENBQUNDLEtBQUssQ0FBQ0gsWUFBWSxDQUFDQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQ2tCLE9BQU8sQ0FDbkQsQ0FBQzt3QkFFRkMsT0FBTyxDQUFDQyxHQUFHLENBQUUsc0JBQW9CLENBQUUsQ0FBQzs7K0JBS2xCQyxTQUFlLGlCQUFDdUIsY0FBYyxDQUFDOzRCQUM3Q0MsZUFBZSxFQUFFaEIsZ0JBQWdCOzRCQUNqQ2lCLFVBQVUsRUFBRVAsTUFBTTs0QkFDbEJRLFFBQVEsRUFBRVAsSUFBSTt5QkFDakIsQ0FBQzs7d0JBSklFLEdBQUcsWUFJUDt3QkFDRmxELFFBQVEsQ0FBQ21CLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQ0MsU0FBUyxHQUFHLDhEQUE2RCxDQUEyQjhCLE1BQW9CLENBQTdDQSxHQUFHLENBQUNNLGdCQUFnQixFQUFDLElBQUUsQ0FBdUIsT0FBSSxDQUF6Qk4sR0FBRyxDQUFDTSxnQkFBZ0IsRUFBQyxNQUFJLENBQUMsQ0FBQzs7Ozs7O1FBQ2pLLHFDQUFxQztRQUNyQywwQkFBMEI7UUFDMUIsK0JBQStCO1NBQ2xDO2VBdEJjVixPQUFNOztJQXdCckJXLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHO1FBQUNwRCxVQUFVLEVBQVZBLFVBQVU7UUFBRUQsUUFBUSxFQUFSQSxRQUFRO1FBQUVOLFdBQVcsRUFBWEEsV0FBVztRQUFFSyxZQUFZLEVBQVpBLFlBQVk7UUFBRVMsYUFBYSxFQUFiQSxhQUFhO1FBQUVpQyxNQUFNLEVBQU5BLE1BQU07S0FBQztDQUM1RiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zZXJ2aWNlLmpzPzQ2NzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZWMsIGRlZmF1bHRQcm92aWRlciwgQ29udHJhY3QsIGhhc2gsIEFjY291bnQgfSBmcm9tICdzdGFya25ldCc7XHJcbmltcG9ydCB7IGdldEtleVBhaXIgfSBmcm9tICdzdGFya25ldC9kaXN0L3V0aWxzL2VsbGlwdGljQ3VydmUnO1xyXG5pbXBvcnQgeyB0cmFuc2Zvcm1DYWxsc1RvTXVsdGljYWxsQXJyYXlzIH0gZnJvbSAnc3RhcmtuZXQvdXRpbHMvdHJhbnNhY3Rpb24nXHJcbmltcG9ydCBDb21waWxlZEFjY291bnQgZnJvbSAnLi9wdWJsaWMvQWNjb3VudC5qc29uJztcclxuXHJcbmlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0Jykge1xyXG4gICAgbGV0IGFjY291bnRzID0gW107XHJcbiAgICBsZXQgcHVibGljX2tleTtcclxuXHJcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhY2NvdW50c1wiKSkge1xyXG4gICAgICAgIGFjY291bnRzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImFjY291bnRzXCIpKTtcclxuICAgICAgICBwdWJsaWNfa2V5ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImtleXNcIikpLmtleVB1Yi50b1N0cmluZygpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gc2hvd1dlbGNvbWUoKSB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NyZWF0ZScpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FjY291bnQnKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2hvd0FjY291bnRzKCkge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjcmVhdGUnKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FjY291bnQnKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBhc3luYyBmdW5jdGlvbiBjcmVhdGVBY2NvdW50KCkge1xyXG4gICAgICAgIC8vIFRPRE86IGVuY3J5cHQga2V5UGFpciB3aXRoIHVzZXIgcGFzc3dvcmRcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2FpdCcpLmlubmVySFRNTCA9IFwiUGxlYXNlIHdhaXQsIGRlcGxveWluZyBhY2NvdW50Li4uXCI7XHJcbiAgICAgICAgaWYgKCFwdWJsaWNfa2V5KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXJrS2V5UGFpciA9IGVjLmdlbktleVBhaXIoKTtcclxuICAgICAgICAgICAgY29uc3Qgc3RhcmtLZXlQdWIgPSBlYy5nZXRTdGFya0tleShzdGFya0tleVBhaXIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImtleXNcIiwgSlNPTi5zdHJpbmdpZnkoe2tleVBhaXI6IHN0YXJrS2V5UGFpciwga2V5UHViOiBzdGFya0tleVB1Yn0pKTtcclxuICAgICAgICAgICAgcHVibGljX2tleSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJrZXlzXCIpKS5rZXlQdWIudG9TdHJpbmcoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJkZXBsb3lpbmcgYWNjb3VudC4uLi5cIik7XHJcbiAgICAgICAgY29uc29sZS5sb2cocHVibGljX2tleSlcclxuICAgICAgICBjb25zdCBhY2NvdW50VHhuID0gYXdhaXQgZGVmYXVsdFByb3ZpZGVyLmRlcGxveUNvbnRyYWN0KHtcclxuICAgICAgICAgICAgY29udHJhY3Q6IENvbXBpbGVkQWNjb3VudCxcclxuICAgICAgICAgICAgYWRkcmVzc1NhbHQ6IGFjY291bnRzLmxlbmd0aC50b1N0cmluZygxNilcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImRlcGxveWVkIVwiKTtcclxuICAgICAgICBjb25zdCBhY2NvdW50ID0ge1xyXG4gICAgICAgICAgICBuYW1lOiBcIkFjY291bnQgXCIuY29uY2F0KGFjY291bnRzLmxlbmd0aC50b1N0cmluZygpKSxcclxuICAgICAgICAgICAgY29udHJhY3RfYWRkcmVzczogYWNjb3VudFR4bi5hZGRyZXNzLFxyXG4gICAgICAgICAgICBzdGF0dXM6IFwiQWNjb3VudCBEZXBsb3llZCFcIixcclxuICAgICAgICAgICAgdHlwZTogXCJTaW1wbGVcIlxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBhY2NvdW50Q29udHJhY3QgPSBuZXcgQ29udHJhY3QoXHJcbiAgICAgICAgICAgIENvbXBpbGVkQWNjb3VudC5hYmksXHJcbiAgICAgICAgICAgIGFjY291bnQuY29udHJhY3RfYWRkcmVzc1xyXG4gICAgICAgICk7XHJcbiAgICBcclxuICAgICAgICBjb25zb2xlLmxvZyhcImluaXRpYWxpemluZyBhY2NvdW50Li4uLlwiKTtcclxuICAgICAgICBhd2FpdCBhY2NvdW50Q29udHJhY3QuaW5pdGlhbGl6ZShcclxuICAgICAgICAgICAgcHVibGljX2tleSxcclxuICAgICAgICAgICAgXCIwXCJcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBhY2NvdW50c1thY2NvdW50cy5sZW5ndGhdID0gYWNjb3VudDtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImFjY291bnRzXCIsIEpTT04uc3RyaW5naWZ5KGFjY291bnRzKSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coYGFjY291bnQgZGVwbG95ZWQgdG8gJHthY2NvdW50VHhuLmFkZHJlc3N9YCk7XHJcbiAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gaW52b2tlKGFjY291bnQsIGNvbnRyYWN0X2FkZHJlc3MsIG1ldGhvZCwgYXJncywgY2FsbEJhY2tVcmwpIHtcclxuXHJcbiAgICAgICAgY29uc3QgYWNjb3VudENvbnRyYWN0ID0gbmV3IEFjY291bnQoXHJcbiAgICAgICAgICAgIGRlZmF1bHRQcm92aWRlcixcclxuICAgICAgICAgICAgYWNjb3VudHNbYWNjb3VudF0uY29udHJhY3RfYWRkcmVzcyxcclxuICAgICAgICAgICAgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImtleXNcIikpLmtleVBhaXJcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhgQ2FsbGxpbmcgY29udHJhY3QuLi5gKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBBY2NvdW50LmV4ZWN1dGUgbm90IHdvcmtpbmdcclxuICAgICAgICAvLyBUT0RPOiBSZXBsYWNlIHdpdGggYWNjb291bnQuZXhlY3V0ZVxyXG5cclxuICAgICAgICBjb25zdCBUeG4gPSBhd2FpdCBkZWZhdWx0UHJvdmlkZXIuaW52b2tlRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICBjb250cmFjdEFkZHJlc3M6IGNvbnRyYWN0X2FkZHJlc3MsXHJcbiAgICAgICAgICAgIGVudHJ5cG9pbnQ6IG1ldGhvZCxcclxuICAgICAgICAgICAgY2FsbGRhdGE6IGFyZ3NcclxuICAgICAgICB9KTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhdHVzJykuaW5uZXJIVE1MID0gYFRyYW5zYWN0aW9uIGhhc2g6IDxhIGhyZWY9XCJodHRwczovL2dvZXJsaS52b3lhZ2VyLm9ubGluZS90eC8ke1R4bi50cmFuc2FjdGlvbl9oYXNofVwiPiR7VHhuLnRyYW5zYWN0aW9uX2hhc2h9PC9hPmA7XHJcbiAgICAgICAgLy93aW5kb3cubG9jYXRpb24uaHJlZiA9IGNhbGxCYWNrVXJsO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwic3VjY2VzcyFcIilcclxuICAgICAgICAvLyByZXR1cm4gVHhuLnRyYW5zYWN0aW9uX2hhc2g7XHJcbiAgICB9XHJcblxyXG4gICAgbW9kdWxlLmV4cG9ydHMgPSB7cHVibGljX2tleSwgYWNjb3VudHMsIHNob3dXZWxjb21lLCBzaG93QWNjb3VudHMsIGNyZWF0ZUFjY291bnQsIGludm9rZX1cclxufVxyXG5cclxuIl0sIm5hbWVzIjpbInNob3dXZWxjb21lIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic3R5bGUiLCJkaXNwbGF5Iiwic2hvd0FjY291bnRzIiwiYWNjb3VudHMiLCJwdWJsaWNfa2V5IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsImtleVB1YiIsInRvU3RyaW5nIiwiY3JlYXRlQWNjb3VudCIsInN0YXJrS2V5UGFpciIsInN0YXJrS2V5UHViIiwiYWNjb3VudFR4biIsImFjY291bnQiLCJhY2NvdW50Q29udHJhY3QiLCJnZXRFbGVtZW50QnlJZCIsImlubmVySFRNTCIsImVjIiwiZ2VuS2V5UGFpciIsImdldFN0YXJrS2V5Iiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImtleVBhaXIiLCJjb25zb2xlIiwibG9nIiwiZGVmYXVsdFByb3ZpZGVyIiwiZGVwbG95Q29udHJhY3QiLCJjb250cmFjdCIsIkNvbXBpbGVkQWNjb3VudCIsImFkZHJlc3NTYWx0IiwibGVuZ3RoIiwibmFtZSIsImNvbmNhdCIsImNvbnRyYWN0X2FkZHJlc3MiLCJhZGRyZXNzIiwic3RhdHVzIiwidHlwZSIsIkNvbnRyYWN0IiwiYWJpIiwiaW5pdGlhbGl6ZSIsImxvY2F0aW9uIiwicmVsb2FkIiwiaW52b2tlIiwibWV0aG9kIiwiYXJncyIsImNhbGxCYWNrVXJsIiwiVHhuIiwiQWNjb3VudCIsImludm9rZUZ1bmN0aW9uIiwiY29udHJhY3RBZGRyZXNzIiwiZW50cnlwb2ludCIsImNhbGxkYXRhIiwidHJhbnNhY3Rpb25faGFzaCIsIm1vZHVsZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./service.js\n");

/***/ })

});