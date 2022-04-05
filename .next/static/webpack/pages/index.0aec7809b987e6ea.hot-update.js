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

eval("\nvar _runtimeJs = _interopRequireDefault(__webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\"));\nvar _starknet = __webpack_require__(/*! starknet */ \"./node_modules/starknet/dist/index.js\");\nvar _ellipticCurve = __webpack_require__(/*! starknet/dist/utils/ellipticCurve */ \"./node_modules/starknet/dist/utils/ellipticCurve.js\");\nvar _transaction = __webpack_require__(/*! starknet/utils/transaction */ \"./node_modules/starknet/utils/transaction.js\");\nvar _accountJson = _interopRequireDefault(__webpack_require__(/*! ./public/Account.json */ \"./public/Account.json\"));\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _interopRequireDefault(obj) {\n    return obj && obj.__esModule ? obj : {\n        default: obj\n    };\n}\nif (true) {\n    var showWelcome = function showWelcome() {\n        document.querySelector(\"#create\").style.display = \"block\";\n        document.querySelector(\"#account\").style.display = \"none\";\n    };\n    var showAccounts = function showAccounts() {\n        document.querySelector(\"#create\").style.display = \"none\";\n        document.querySelector(\"#account\").style.display = \"block\";\n    };\n    var accounts = [];\n    var public_key;\n    if (localStorage.getItem(\"accounts\")) {\n        accounts = JSON.parse(localStorage.getItem(\"accounts\"));\n        public_key = JSON.parse(localStorage.getItem(\"keys\")).keyPub.toString();\n    }\n    function createAccount() {\n        return _createAccount.apply(this, arguments);\n    }\n    function _createAccount() {\n        _createAccount = _asyncToGenerator(_runtimeJs.default.mark(function _callee() {\n            var starkKeyPair, _$starkKeyPub, accountTxn, account, accountContract;\n            return _runtimeJs.default.wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        // TODO: encrypt keyPair with user password\n                        document.getElementById(\"wait\").innerHTML = \"Please wait, deploying account...\";\n                        if (!public_key) {\n                            starkKeyPair = _starknet.ec.genKeyPair();\n                            _$starkKeyPub = _starknet.ec.getStarkKey(starkKeyPair);\n                            localStorage.setItem(\"keys\", JSON.stringify({\n                                keyPair: starkKeyPair,\n                                keyPub: _$starkKeyPub\n                            }));\n                            public_key = JSON.parse(localStorage.getItem(\"keys\")).keyPub.toString();\n                        }\n                        console.log(\"deploying account....\");\n                        console.log(public_key);\n                        _ctx.next = 6;\n                        return _starknet.defaultProvider.deployContract({\n                            contract: _accountJson.default,\n                            addressSalt: public_key || starkKeyPub\n                        });\n                    case 6:\n                        accountTxn = _ctx.sent;\n                        console.log(\"deployed!\");\n                        account = {\n                            name: \"Account \".concat(accounts.length.toString()),\n                            contract_address: accountTxn.address,\n                            status: \"Account Deployed!\",\n                            type: \"Simple\"\n                        };\n                        accountContract = new _starknet.Contract(_accountJson.default.abi, account.contract_address);\n                        console.log(\"initializing account....\");\n                        _ctx.next = 13;\n                        return accountContract.initialize(public_key, \"0\");\n                    case 13:\n                        accounts[accounts.length] = account;\n                        localStorage.setItem(\"accounts\", JSON.stringify(accounts));\n                        console.log(\"account deployed to \".concat(accountTxn.address));\n                        location.reload();\n                    case 17:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _createAccount.apply(this, arguments);\n    }\n    function invoke(account, contract_address, method, args, callBackUrl) {\n        return _invoke.apply(this, arguments);\n    }\n    function _invoke() {\n        _invoke = _asyncToGenerator(_runtimeJs.default.mark(function _callee(account, contract_address, method, args, callBackUrl) {\n            var accountContract, Txn;\n            return _runtimeJs.default.wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        accountContract = new _starknet.Account(_starknet.defaultProvider, accounts[account].contract_address, JSON.parse(localStorage.getItem(\"keys\")).keyPair);\n                        console.log(\"Callling contract...\");\n                        _ctx.next = 4;\n                        return _starknet.defaultProvider.invokeFunction({\n                            contractAddress: contract_address,\n                            entrypoint: method,\n                            calldata: args\n                        });\n                    case 4:\n                        Txn = _ctx.sent;\n                        document.getElementById(\"status\").innerHTML = 'Transaction hash: <a href=\"https://goerli.voyager.online/tx/'.concat(Txn.transaction_hash, '\">').concat(Txn.transaction_hash, \"</a>\");\n                    case 6:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        //window.location.href = callBackUrl;\n        // console.log(\"success!\")\n        // return Txn.transaction_hash;\n        }));\n        return _invoke.apply(this, arguments);\n    }\n    module.exports = {\n        public_key: public_key,\n        accounts: accounts,\n        showWelcome: showWelcome,\n        showAccounts: showAccounts,\n        createAccount: createAccount,\n        invoke: invoke\n    };\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUNDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDa0IsT0FBTyxDQUNuRCxDQUFDO3dCQUVGQyxPQUFPLENBQUNDLEdBQUcsQ0FBRSxzQkFBb0IsQ0FBRSxDQUFDOzsrQkFLbEJDLFNBQWUsaUJBQUN1QixjQUFjLENBQUM7NEJBQzdDQyxlQUFlLEVBQUVoQixnQkFBZ0I7NEJBQ2pDaUIsVUFBVSxFQUFFUCxNQUFNOzRCQUNsQlEsUUFBUSxFQUFFUCxJQUFJO3lCQUNqQixDQUFDOzt3QkFKSUUsR0FBRyxZQUlQO3dCQUNGbEQsUUFBUSxDQUFDbUIsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDQyxTQUFTLEdBQUcsOERBQTZELENBQTJCOEIsTUFBb0IsQ0FBN0NBLEdBQUcsQ0FBQ00sZ0JBQWdCLEVBQUMsSUFBRSxDQUF1QixPQUFJLENBQXpCTixHQUFHLENBQUNNLGdCQUFnQixFQUFDLE1BQUksQ0FBQyxDQUFDOzs7Ozs7UUFDaksscUNBQXFDO1FBQ3JDLDBCQUEwQjtRQUMxQiwrQkFBK0I7U0FDbEM7ZUF0QmNWLE9BQU07O0lBd0JyQlcsTUFBTSxDQUFDQyxPQUFPLEdBQUc7UUFBQ3BELFVBQVUsRUFBVkEsVUFBVTtRQUFFRCxRQUFRLEVBQVJBLFFBQVE7UUFBRU4sV0FBVyxFQUFYQSxXQUFXO1FBQUVLLFlBQVksRUFBWkEsWUFBWTtRQUFFUyxhQUFhLEVBQWJBLGFBQWE7UUFBRWlDLE1BQU0sRUFBTkEsTUFBTTtLQUFDO0NBQzVGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NlcnZpY2UuanM/NDY3NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBlYywgZGVmYXVsdFByb3ZpZGVyLCBDb250cmFjdCwgaGFzaCwgQWNjb3VudCB9IGZyb20gJ3N0YXJrbmV0JztcclxuaW1wb3J0IHsgZ2V0S2V5UGFpciB9IGZyb20gJ3N0YXJrbmV0L2Rpc3QvdXRpbHMvZWxsaXB0aWNDdXJ2ZSc7XHJcbmltcG9ydCB7IHRyYW5zZm9ybUNhbGxzVG9NdWx0aWNhbGxBcnJheXMgfSBmcm9tICdzdGFya25ldC91dGlscy90cmFuc2FjdGlvbidcclxuaW1wb3J0IENvbXBpbGVkQWNjb3VudCBmcm9tICcuL3B1YmxpYy9BY2NvdW50Lmpzb24nO1xyXG5cclxuaWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSB7XHJcbiAgICBsZXQgYWNjb3VudHMgPSBbXTtcclxuICAgIGxldCBwdWJsaWNfa2V5O1xyXG5cclxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImFjY291bnRzXCIpKSB7XHJcbiAgICAgICAgYWNjb3VudHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYWNjb3VudHNcIikpO1xyXG4gICAgICAgIHB1YmxpY19rZXkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwia2V5c1wiKSkua2V5UHViLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBzaG93V2VsY29tZSgpIHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3JlYXRlJykuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWNjb3VudCcpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzaG93QWNjb3VudHMoKSB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NyZWF0ZScpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWNjb3VudCcpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUFjY291bnQoKSB7XHJcbiAgICAgICAgLy8gVE9ETzogZW5jcnlwdCBrZXlQYWlyIHdpdGggdXNlciBwYXNzd29yZFxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3YWl0JykuaW5uZXJIVE1MID0gXCJQbGVhc2Ugd2FpdCwgZGVwbG95aW5nIGFjY291bnQuLi5cIjtcclxuICAgICAgICBpZiAoIXB1YmxpY19rZXkpIHtcclxuICAgICAgICAgICAgY29uc3Qgc3RhcmtLZXlQYWlyID0gZWMuZ2VuS2V5UGFpcigpO1xyXG4gICAgICAgICAgICBjb25zdCBzdGFya0tleVB1YiA9IGVjLmdldFN0YXJrS2V5KHN0YXJrS2V5UGFpcik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwia2V5c1wiLCBKU09OLnN0cmluZ2lmeSh7a2V5UGFpcjogc3RhcmtLZXlQYWlyLCBrZXlQdWI6IHN0YXJrS2V5UHVifSkpO1xyXG4gICAgICAgICAgICBwdWJsaWNfa2V5ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImtleXNcIikpLmtleVB1Yi50b1N0cmluZygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBjb25zb2xlLmxvZyhcImRlcGxveWluZyBhY2NvdW50Li4uLlwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhwdWJsaWNfa2V5KVxyXG4gICAgICAgIGNvbnN0IGFjY291bnRUeG4gPSBhd2FpdCBkZWZhdWx0UHJvdmlkZXIuZGVwbG95Q29udHJhY3Qoe1xyXG4gICAgICAgICAgICBjb250cmFjdDogQ29tcGlsZWRBY2NvdW50LFxyXG4gICAgICAgICAgICBhZGRyZXNzU2FsdDogcHVibGljX2tleSB8fCBzdGFya0tleVB1YlxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZGVwbG95ZWQhXCIpO1xyXG4gICAgICAgIGNvbnN0IGFjY291bnQgPSB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiQWNjb3VudCBcIi5jb25jYXQoYWNjb3VudHMubGVuZ3RoLnRvU3RyaW5nKCkpLFxyXG4gICAgICAgICAgICBjb250cmFjdF9hZGRyZXNzOiBhY2NvdW50VHhuLmFkZHJlc3MsXHJcbiAgICAgICAgICAgIHN0YXR1czogXCJBY2NvdW50IERlcGxveWVkIVwiLFxyXG4gICAgICAgICAgICB0eXBlOiBcIlNpbXBsZVwiXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGFjY291bnRDb250cmFjdCA9IG5ldyBDb250cmFjdChcclxuICAgICAgICAgICAgQ29tcGlsZWRBY2NvdW50LmFiaSxcclxuICAgICAgICAgICAgYWNjb3VudC5jb250cmFjdF9hZGRyZXNzXHJcbiAgICAgICAgKTtcclxuICAgIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiaW5pdGlhbGl6aW5nIGFjY291bnQuLi4uXCIpO1xyXG4gICAgICAgIGF3YWl0IGFjY291bnRDb250cmFjdC5pbml0aWFsaXplKFxyXG4gICAgICAgICAgICBwdWJsaWNfa2V5LFxyXG4gICAgICAgICAgICBcIjBcIlxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGFjY291bnRzW2FjY291bnRzLmxlbmd0aF0gPSBhY2NvdW50O1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYWNjb3VudHNcIiwgSlNPTi5zdHJpbmdpZnkoYWNjb3VudHMpKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhgYWNjb3VudCBkZXBsb3llZCB0byAke2FjY291bnRUeG4uYWRkcmVzc31gKTtcclxuICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBpbnZva2UoYWNjb3VudCwgY29udHJhY3RfYWRkcmVzcywgbWV0aG9kLCBhcmdzLCBjYWxsQmFja1VybCkge1xyXG5cclxuICAgICAgICBjb25zdCBhY2NvdW50Q29udHJhY3QgPSBuZXcgQWNjb3VudChcclxuICAgICAgICAgICAgZGVmYXVsdFByb3ZpZGVyLFxyXG4gICAgICAgICAgICBhY2NvdW50c1thY2NvdW50XS5jb250cmFjdF9hZGRyZXNzLFxyXG4gICAgICAgICAgICBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwia2V5c1wiKSkua2V5UGFpclxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKGBDYWxsbGluZyBjb250cmFjdC4uLmApO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIEFjY291bnQuZXhlY3V0ZSBub3Qgd29ya2luZ1xyXG4gICAgICAgIC8vIFRPRE86IFJlcGxhY2Ugd2l0aCBhY2Nvb3VudC5leGVjdXRlXHJcblxyXG4gICAgICAgIGNvbnN0IFR4biA9IGF3YWl0IGRlZmF1bHRQcm92aWRlci5pbnZva2VGdW5jdGlvbih7XHJcbiAgICAgICAgICAgIGNvbnRyYWN0QWRkcmVzczogY29udHJhY3RfYWRkcmVzcyxcclxuICAgICAgICAgICAgZW50cnlwb2ludDogbWV0aG9kLFxyXG4gICAgICAgICAgICBjYWxsZGF0YTogYXJnc1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGF0dXMnKS5pbm5lckhUTUwgPSBgVHJhbnNhY3Rpb24gaGFzaDogPGEgaHJlZj1cImh0dHBzOi8vZ29lcmxpLnZveWFnZXIub25saW5lL3R4LyR7VHhuLnRyYW5zYWN0aW9uX2hhc2h9XCI+JHtUeG4udHJhbnNhY3Rpb25faGFzaH08L2E+YDtcclxuICAgICAgICAvL3dpbmRvdy5sb2NhdGlvbi5ocmVmID0gY2FsbEJhY2tVcmw7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJzdWNjZXNzIVwiKVxyXG4gICAgICAgIC8vIHJldHVybiBUeG4udHJhbnNhY3Rpb25faGFzaDtcclxuICAgIH1cclxuXHJcbiAgICBtb2R1bGUuZXhwb3J0cyA9IHtwdWJsaWNfa2V5LCBhY2NvdW50cywgc2hvd1dlbGNvbWUsIHNob3dBY2NvdW50cywgY3JlYXRlQWNjb3VudCwgaW52b2tlfVxyXG59XHJcblxyXG4iXSwibmFtZXMiOlsic2hvd1dlbGNvbWUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzdHlsZSIsImRpc3BsYXkiLCJzaG93QWNjb3VudHMiLCJhY2NvdW50cyIsInB1YmxpY19rZXkiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwia2V5UHViIiwidG9TdHJpbmciLCJjcmVhdGVBY2NvdW50Iiwic3RhcmtLZXlQYWlyIiwic3RhcmtLZXlQdWIiLCJhY2NvdW50VHhuIiwiYWNjb3VudCIsImFjY291bnRDb250cmFjdCIsImdldEVsZW1lbnRCeUlkIiwiaW5uZXJIVE1MIiwiZWMiLCJnZW5LZXlQYWlyIiwiZ2V0U3RhcmtLZXkiLCJzZXRJdGVtIiwic3RyaW5naWZ5Iiwia2V5UGFpciIsImNvbnNvbGUiLCJsb2ciLCJkZWZhdWx0UHJvdmlkZXIiLCJkZXBsb3lDb250cmFjdCIsImNvbnRyYWN0IiwiQ29tcGlsZWRBY2NvdW50IiwiYWRkcmVzc1NhbHQiLCJuYW1lIiwiY29uY2F0IiwibGVuZ3RoIiwiY29udHJhY3RfYWRkcmVzcyIsImFkZHJlc3MiLCJzdGF0dXMiLCJ0eXBlIiwiQ29udHJhY3QiLCJhYmkiLCJpbml0aWFsaXplIiwibG9jYXRpb24iLCJyZWxvYWQiLCJpbnZva2UiLCJtZXRob2QiLCJhcmdzIiwiY2FsbEJhY2tVcmwiLCJUeG4iLCJBY2NvdW50IiwiaW52b2tlRnVuY3Rpb24iLCJjb250cmFjdEFkZHJlc3MiLCJlbnRyeXBvaW50IiwiY2FsbGRhdGEiLCJ0cmFuc2FjdGlvbl9oYXNoIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./service.js\n");

/***/ })

});