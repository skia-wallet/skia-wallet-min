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

eval("\nvar _runtimeJs = _interopRequireDefault(__webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\"));\nvar _starknet = __webpack_require__(/*! starknet */ \"./node_modules/starknet/dist/index.js\");\nvar _accountJson = _interopRequireDefault(__webpack_require__(/*! ../public/Account.json */ \"./public/Account.json\"));\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _interopRequireDefault(obj) {\n    return obj && obj.__esModule ? obj : {\n        default: obj\n    };\n}\nif (true) {\n    var showWelcome = function showWelcome() {\n        document.querySelector(\"#create\").style.display = \"block\";\n        document.querySelector(\"#account\").style.display = \"none\";\n    };\n    var accounts = [];\n    var public_key;\n    accounts = JSON.parse(localStorage.getItem(\"accounts\"));\n    if (localStorage.getItem(\"keys\")) {\n        public_key = JSON.parse(localStorage.getItem(\"keys\")).keyPub.toString();\n    }\n    function createAccount() {\n        return _createAccount.apply(this, arguments);\n    }\n    function _createAccount() {\n        _createAccount = _asyncToGenerator(_runtimeJs.default.mark(function _callee() {\n            var starkKeyPair, starkKeyPub, accountTxn, account, accountContract, initialize;\n            return _runtimeJs.default.wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        document.getElementById(\"wait\").innerHTML = \"Please wait, deploying account...\";\n                        starkKeyPair = _starknet.ec.genKeyPair();\n                        starkKeyPub = _starknet.ec.getStarkKey(starkKeyPair);\n                        localStorage.setItem(\"keys\", JSON.stringify({\n                            keyPair: starkKeyPair,\n                            keyPub: starkKeyPub\n                        }));\n                        console.log(\"deploying account....\");\n                        _ctx.next = 7;\n                        return _starknet.defaultProvider.deployContract({\n                            contract: _accountJson.default,\n                            addressSalt: starkKeyPub\n                        });\n                    case 7:\n                        accountTxn = _ctx.sent;\n                        account = {\n                            contract_address: accountTxn.address,\n                            status: \"Account Deployed\",\n                            type: \"Simple\"\n                        };\n                        accounts = [\n                            account\n                        ];\n                        localStorage.setItem(\"accounts\", accounts);\n                        console.log(\"account deployed to \".concat(accountTxn.address));\n                        accountContract = new _starknet.Contract(_accountJson.default.abi, accountTxn.address);\n                        // accounts = [accountContract];\n                        // localStorage.setItem(\"accounts\", JSON.stringify(accounts));\n                        console.log(\"initializing account....\");\n                        _ctx.next = 16;\n                        return accountContract.initialize(starkKeyPub, \"0\");\n                    case 16:\n                        initialize = _ctx.sent;\n                        _ctx.next = 19;\n                        return _starknet.defaultProvider.waitForTransaction(accountTxn.transaction_hash);\n                    case 19:\n                        account.status = \"Accepted on L1!\";\n                        _ctx.next = 22;\n                        return _starknet.defaultProvider.waitForTransaction(initialize.transaction_hash);\n                    case 22:\n                        account.status = \"Accepted on L1!\";\n                        console.log(\"initialized!\");\n                    case 24:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _createAccount.apply(this, arguments);\n    }\n    module.exports = {\n        public_key: public_key,\n        accounts: accounts,\n        showWelcome: showWelcome,\n        createAccount: createAccount\n    };\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFnQixDQUFDOzt3QkFDckV6QixPQUFPLENBQUNvQixNQUFNLEdBQUcsaUJBQWlCOzsrQkFFNUJQLFNBQWUsaUJBQUNXLGtCQUFrQixDQUFDdEIsVUFBVSxDQUFDdUIsZ0JBQWdCLENBQUM7O3dCQUNyRXpCLE9BQU8sQ0FBQ29CLE1BQU0sR0FBRyxpQkFBaUI7d0JBQ2xDVCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQzs7Ozs7O1NBQy9CO2VBNUNjaEIsY0FBYTs7SUE2QzVCOEIsTUFBTSxDQUFDQyxPQUFPLEdBQUc7UUFBQ3RDLFVBQVUsRUFBVkEsVUFBVTtRQUFFRCxRQUFRLEVBQVJBLFFBQVE7UUFBRUwsV0FBVyxFQUFYQSxXQUFXO1FBQUVhLGFBQWEsRUFBYkEsYUFBYTtLQUFDO0NBQ3RFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3NlcnZpY2UuanM/OTZkYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBlYywgZGVmYXVsdFByb3ZpZGVyLCBDb250cmFjdCB9IGZyb20gJ3N0YXJrbmV0JztcclxuaW1wb3J0IENvbXBpbGVkQWNjb3VudCBmcm9tICcuLi9wdWJsaWMvQWNjb3VudC5qc29uJztcclxuXHJcbmlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0Jykge1xyXG4gICAgbGV0IGFjY291bnRzID0gW107XHJcbiAgICBsZXQgcHVibGljX2tleTtcclxuICAgIGFjY291bnRzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImFjY291bnRzXCIpKTtcclxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImtleXNcIikpIHtcclxuICAgICAgICBwdWJsaWNfa2V5ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImtleXNcIikpLmtleVB1Yi50b1N0cmluZygpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gc2hvd1dlbGNvbWUoKSB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NyZWF0ZScpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FjY291bnQnKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUFjY291bnQoKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dhaXQnKS5pbm5lckhUTUwgPSBcIlBsZWFzZSB3YWl0LCBkZXBsb3lpbmcgYWNjb3VudC4uLlwiO1xyXG4gICAgICAgIGNvbnN0IHN0YXJrS2V5UGFpciA9IGVjLmdlbktleVBhaXIoKTtcclxuICAgICAgICBjb25zdCBzdGFya0tleVB1YiA9IGVjLmdldFN0YXJrS2V5KHN0YXJrS2V5UGFpcik7XHJcbiAgICBcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImtleXNcIiwgSlNPTi5zdHJpbmdpZnkoe2tleVBhaXI6IHN0YXJrS2V5UGFpciwga2V5UHViOiBzdGFya0tleVB1Yn0pKTtcclxuICAgIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZGVwbG95aW5nIGFjY291bnQuLi4uXCIpO1xyXG4gICAgICAgIGNvbnN0IGFjY291bnRUeG4gPSBhd2FpdCBkZWZhdWx0UHJvdmlkZXIuZGVwbG95Q29udHJhY3Qoe1xyXG4gICAgICAgICAgICBjb250cmFjdDogQ29tcGlsZWRBY2NvdW50LFxyXG4gICAgICAgICAgICBhZGRyZXNzU2FsdDogc3RhcmtLZXlQdWJcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBhY2NvdW50ID0ge1xyXG4gICAgICAgICAgICBjb250cmFjdF9hZGRyZXNzOiBhY2NvdW50VHhuLmFkZHJlc3MsXHJcbiAgICAgICAgICAgIHN0YXR1czogXCJBY2NvdW50IERlcGxveWVkXCIsXHJcbiAgICAgICAgICAgIHR5cGU6IFwiU2ltcGxlXCJcclxuICAgICAgICB9XHJcbiAgICAgICAgYWNjb3VudHMgPSBbYWNjb3VudF07XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJhY2NvdW50c1wiLCBhY2NvdW50cyk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKGBhY2NvdW50IGRlcGxveWVkIHRvICR7YWNjb3VudFR4bi5hZGRyZXNzfWApO1xyXG4gICAgXHJcbiAgICAgICAgY29uc3QgYWNjb3VudENvbnRyYWN0ID0gbmV3IENvbnRyYWN0KFxyXG4gICAgICAgICAgICBDb21waWxlZEFjY291bnQuYWJpLFxyXG4gICAgICAgICAgICBhY2NvdW50VHhuLmFkZHJlc3NcclxuICAgICAgICApO1xyXG4gICAgXHJcbiAgICAgICAgLy8gYWNjb3VudHMgPSBbYWNjb3VudENvbnRyYWN0XTtcclxuICAgICAgICAvLyBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImFjY291bnRzXCIsIEpTT04uc3RyaW5naWZ5KGFjY291bnRzKSk7XHJcbiAgICBcclxuICAgICAgICBjb25zb2xlLmxvZyhcImluaXRpYWxpemluZyBhY2NvdW50Li4uLlwiKTtcclxuICAgICAgICBjb25zdCBpbml0aWFsaXplID0gYXdhaXQgYWNjb3VudENvbnRyYWN0LmluaXRpYWxpemUoXHJcbiAgICAgICAgICAgIHN0YXJrS2V5UHViLFxyXG4gICAgICAgICAgICBcIjBcIlxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIGF3YWl0IGRlZmF1bHRQcm92aWRlci53YWl0Rm9yVHJhbnNhY3Rpb24oYWNjb3VudFR4bi50cmFuc2FjdGlvbl9oYXNoKTtcclxuICAgICAgICBhY2NvdW50LnN0YXR1cyA9IFwiQWNjZXB0ZWQgb24gTDEhXCJcclxuICAgIFxyXG4gICAgICAgIGF3YWl0IGRlZmF1bHRQcm92aWRlci53YWl0Rm9yVHJhbnNhY3Rpb24oaW5pdGlhbGl6ZS50cmFuc2FjdGlvbl9oYXNoKTtcclxuICAgICAgICBhY2NvdW50LnN0YXR1cyA9IFwiQWNjZXB0ZWQgb24gTDEhXCJcclxuICAgICAgICBjb25zb2xlLmxvZyhcImluaXRpYWxpemVkIVwiKTtcclxuICAgIH1cclxuICAgIG1vZHVsZS5leHBvcnRzID0ge3B1YmxpY19rZXksIGFjY291bnRzLCBzaG93V2VsY29tZSwgY3JlYXRlQWNjb3VudH1cclxufVxyXG5cclxuIl0sIm5hbWVzIjpbInNob3dXZWxjb21lIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic3R5bGUiLCJkaXNwbGF5IiwiYWNjb3VudHMiLCJwdWJsaWNfa2V5IiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImtleVB1YiIsInRvU3RyaW5nIiwiY3JlYXRlQWNjb3VudCIsInN0YXJrS2V5UGFpciIsInN0YXJrS2V5UHViIiwiYWNjb3VudFR4biIsImFjY291bnQiLCJhY2NvdW50Q29udHJhY3QiLCJpbml0aWFsaXplIiwiZ2V0RWxlbWVudEJ5SWQiLCJpbm5lckhUTUwiLCJlYyIsImdlbktleVBhaXIiLCJnZXRTdGFya0tleSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJrZXlQYWlyIiwiY29uc29sZSIsImxvZyIsImRlZmF1bHRQcm92aWRlciIsImRlcGxveUNvbnRyYWN0IiwiY29udHJhY3QiLCJDb21waWxlZEFjY291bnQiLCJhZGRyZXNzU2FsdCIsImNvbnRyYWN0X2FkZHJlc3MiLCJhZGRyZXNzIiwic3RhdHVzIiwidHlwZSIsIkNvbnRyYWN0IiwiYWJpIiwid2FpdEZvclRyYW5zYWN0aW9uIiwidHJhbnNhY3Rpb25faGFzaCIsIm1vZHVsZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/service.js\n");

/***/ })

});