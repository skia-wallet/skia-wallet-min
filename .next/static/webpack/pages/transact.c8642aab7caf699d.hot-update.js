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

eval("\nvar _runtimeJs = _interopRequireDefault(__webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\"));\nvar _starknet = __webpack_require__(/*! starknet */ \"./node_modules/starknet/dist/index.js\");\nvar _ellipticCurve = __webpack_require__(/*! starknet/dist/utils/ellipticCurve */ \"./node_modules/starknet/dist/utils/ellipticCurve.js\");\nvar _transaction = __webpack_require__(/*! starknet/utils/transaction */ \"./node_modules/starknet/utils/transaction.js\");\nvar _accountJson = _interopRequireDefault(__webpack_require__(/*! ./public/Account.json */ \"./public/Account.json\"));\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _interopRequireDefault(obj) {\n    return obj && obj.__esModule ? obj : {\n        default: obj\n    };\n}\nif (true) {\n    var showWelcome = function showWelcome() {\n        document.querySelector(\"#create\").style.display = \"block\";\n        document.querySelector(\"#account\").style.display = \"none\";\n    };\n    var showAccounts = function showAccounts() {\n        document.querySelector(\"#create\").style.display = \"none\";\n        document.querySelector(\"#account\").style.display = \"block\";\n    };\n    var accounts = [];\n    var public_key;\n    if (localStorage.getItem(\"accounts\")) {\n        accounts = JSON.parse(localStorage.getItem(\"accounts\"));\n        public_key = JSON.parse(localStorage.getItem(\"keys\")).keyPub.toString();\n    }\n    function createAccount() {\n        return _createAccount.apply(this, arguments);\n    }\n    function _createAccount() {\n        _createAccount = _asyncToGenerator(_runtimeJs.default.mark(function _callee() {\n            var starkKeyPair, starkKeyPub, accountTxn, account, accountContract;\n            return _runtimeJs.default.wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        document.getElementById(\"wait\").innerHTML = \"Please wait, deploying account...\";\n                        starkKeyPair = _starknet.ec.genKeyPair();\n                        starkKeyPub = _starknet.ec.getStarkKey(starkKeyPair);\n                        localStorage.setItem(\"keys\", JSON.stringify({\n                            keyPair: starkKeyPair,\n                            keyPub: starkKeyPub\n                        }));\n                        console.log(\"deploying account....\");\n                        _ctx.next = 7;\n                        return _starknet.defaultProvider.deployContract({\n                            contract: _accountJson.default,\n                            addressSalt: starkKeyPub\n                        });\n                    case 7:\n                        accountTxn = _ctx.sent;\n                        account = {\n                            name: \"Account \".concat(accounts.length.toString()),\n                            contract_address: accountTxn.address,\n                            status: \"Account Deployed!\",\n                            type: \"Simple\"\n                        };\n                        accountContract = new _starknet.Contract(_accountJson.default.abi, account.contract_address);\n                        console.log(\"initializing account....\");\n                        _ctx.next = 13;\n                        return accountContract.initialize(public_key, \"0\");\n                    case 13:\n                        accounts[accounts.length] = account;\n                        localStorage.setItem(\"accounts\", JSON.stringify(accounts));\n                        console.log(\"account deployed to \".concat(accountTxn.address));\n                        location.reload();\n                    case 17:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _createAccount.apply(this, arguments);\n    }\n    function invoke(account, contract_address, method, args) {\n        return _invoke.apply(this, arguments);\n    }\n    function _invoke() {\n        _invoke = _asyncToGenerator(_runtimeJs.default.mark(function _callee(account, contract_address, method, args) {\n            var accountContract, nonce, poolBalanceTokenA;\n            return _runtimeJs.default.wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        accountContract = new _starknet.Account(_starknet.defaultProvider, accounts[account].contract_address, JSON.parse(localStorage.getItem(\"keys\")).keyPair);\n                        //const priv = JSON.parse(localStorage.getItem(\"keys\")).keyPair;\n                        console.log((0, _ellipticCurve).getKeyPair(JSON.parse(localStorage.getItem(\"keys\")).keyPair.ec.priv));\n                        console.log(\"Calling StarkNet for accountContract nonce...\");\n                        _ctx.next = 5;\n                        return accountContract.getNonce();\n                    case 5:\n                        _ctx.next = 7;\n                        return _ctx.sent;\n                    case 7:\n                        nonce = _ctx.sent;\n                        console.log(parseInt(nonce, 10));\n                        _ctx.next = 11;\n                        return _starknet.defaultProvider.callContract({\n                            contractAddress: contract_address,\n                            entrypoint: method,\n                            calldata: args\n                        });\n                    case 11:\n                        poolBalanceTokenA = _ctx.sent;\n                    case 12:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        // const call =\n        //     {\n        //         contractAddress: contract_address,\n        //         entrypoint: method,\n        //         calldata: args,\n        //     };\n        // console.log(\"executing transaction...\");\n        // const Txn = await accountContract.execute(call);\n        // console.log(\"success!\")\n        // return Txn.transaction_hash;\n        }));\n        return _invoke.apply(this, arguments);\n    }\n    module.exports = {\n        public_key: public_key,\n        accounts: accounts,\n        showWelcome: showWelcome,\n        showAccounts: showAccounts,\n        createAccount: createAccount,\n        invoke: invoke\n    };\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxHQUFHLENBQUUsK0NBQTZDLENBQUUsQ0FBQzs7K0JBQ2xDVixlQUFlLENBQUNvQyxRQUFRLEVBQUU7Ozs7O3dCQUEvQ0wsS0FBSyxZQUEyQzt3QkFDdER0QixPQUFPLENBQUNDLEdBQUcsQ0FBQzJCLFFBQVEsQ0FBQ04sS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDOzsrQkFDQXBCLFNBQWUsaUJBQUMyQixZQUFZLENBQUM7NEJBQ3pEQyxlQUFlLEVBQUVwQixnQkFBZ0I7NEJBQ2pDcUIsVUFBVSxFQUFFWCxNQUFNOzRCQUNsQlksUUFBUSxFQUFFWCxJQUFJO3lCQUNqQixDQUFDOzt3QkFKSUUsaUJBQWlCLFlBSXJCOzs7Ozs7UUFDRixlQUFlO1FBQ2YsUUFBUTtRQUNSLDZDQUE2QztRQUM3Qyw4QkFBOEI7UUFDOUIsMEJBQTBCO1FBQzFCLFNBQVM7UUFFVCwyQ0FBMkM7UUFDM0MsbURBQW1EO1FBQ25ELDBCQUEwQjtRQUMxQiwrQkFBK0I7U0FDbEM7ZUE5QmNKLE9BQU07O0lBZ0NyQmMsTUFBTSxDQUFDQyxPQUFPLEdBQUc7UUFBQ3ZELFVBQVUsRUFBVkEsVUFBVTtRQUFFRCxRQUFRLEVBQVJBLFFBQVE7UUFBRU4sV0FBVyxFQUFYQSxXQUFXO1FBQUVLLFlBQVksRUFBWkEsWUFBWTtRQUFFUyxhQUFhLEVBQWJBLGFBQWE7UUFBRWlDLE1BQU0sRUFBTkEsTUFBTTtLQUFDO0NBQzVGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NlcnZpY2UuanM/NDY3NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBlYywgZGVmYXVsdFByb3ZpZGVyLCBDb250cmFjdCwgaGFzaCwgQWNjb3VudCB9IGZyb20gJ3N0YXJrbmV0JztcclxuaW1wb3J0IHsgZ2V0S2V5UGFpciB9IGZyb20gJ3N0YXJrbmV0L2Rpc3QvdXRpbHMvZWxsaXB0aWNDdXJ2ZSc7XHJcbmltcG9ydCB7IHRyYW5zZm9ybUNhbGxzVG9NdWx0aWNhbGxBcnJheXMgfSBmcm9tICdzdGFya25ldC91dGlscy90cmFuc2FjdGlvbidcclxuaW1wb3J0IENvbXBpbGVkQWNjb3VudCBmcm9tICcuL3B1YmxpYy9BY2NvdW50Lmpzb24nO1xyXG5cclxuaWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSB7XHJcbiAgICBsZXQgYWNjb3VudHMgPSBbXTtcclxuICAgIGxldCBwdWJsaWNfa2V5O1xyXG5cclxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImFjY291bnRzXCIpKSB7XHJcbiAgICAgICAgYWNjb3VudHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYWNjb3VudHNcIikpO1xyXG4gICAgICAgIHB1YmxpY19rZXkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwia2V5c1wiKSkua2V5UHViLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBzaG93V2VsY29tZSgpIHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3JlYXRlJykuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWNjb3VudCcpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzaG93QWNjb3VudHMoKSB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NyZWF0ZScpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWNjb3VudCcpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUFjY291bnQoKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dhaXQnKS5pbm5lckhUTUwgPSBcIlBsZWFzZSB3YWl0LCBkZXBsb3lpbmcgYWNjb3VudC4uLlwiO1xyXG4gICAgICAgIGNvbnN0IHN0YXJrS2V5UGFpciA9IGVjLmdlbktleVBhaXIoKTtcclxuICAgICAgICBjb25zdCBzdGFya0tleVB1YiA9IGVjLmdldFN0YXJrS2V5KHN0YXJrS2V5UGFpcik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJrZXlzXCIsIEpTT04uc3RyaW5naWZ5KHtrZXlQYWlyOiBzdGFya0tleVBhaXIsIGtleVB1Yjogc3RhcmtLZXlQdWJ9KSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJkZXBsb3lpbmcgYWNjb3VudC4uLi5cIik7XHJcbiAgICAgICAgY29uc3QgYWNjb3VudFR4biA9IGF3YWl0IGRlZmF1bHRQcm92aWRlci5kZXBsb3lDb250cmFjdCh7XHJcbiAgICAgICAgICAgIGNvbnRyYWN0OiBDb21waWxlZEFjY291bnQsXHJcbiAgICAgICAgICAgIGFkZHJlc3NTYWx0OiBzdGFya0tleVB1YlxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGFjY291bnQgPSB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiQWNjb3VudCBcIi5jb25jYXQoYWNjb3VudHMubGVuZ3RoLnRvU3RyaW5nKCkpLFxyXG4gICAgICAgICAgICBjb250cmFjdF9hZGRyZXNzOiBhY2NvdW50VHhuLmFkZHJlc3MsXHJcbiAgICAgICAgICAgIHN0YXR1czogXCJBY2NvdW50IERlcGxveWVkIVwiLFxyXG4gICAgICAgICAgICB0eXBlOiBcIlNpbXBsZVwiXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGFjY291bnRDb250cmFjdCA9IG5ldyBDb250cmFjdChcclxuICAgICAgICAgICAgQ29tcGlsZWRBY2NvdW50LmFiaSxcclxuICAgICAgICAgICAgYWNjb3VudC5jb250cmFjdF9hZGRyZXNzXHJcbiAgICAgICAgKTtcclxuICAgIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiaW5pdGlhbGl6aW5nIGFjY291bnQuLi4uXCIpO1xyXG4gICAgICAgIGF3YWl0IGFjY291bnRDb250cmFjdC5pbml0aWFsaXplKFxyXG4gICAgICAgICAgICBwdWJsaWNfa2V5LFxyXG4gICAgICAgICAgICBcIjBcIlxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGFjY291bnRzW2FjY291bnRzLmxlbmd0aF0gPSBhY2NvdW50O1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYWNjb3VudHNcIiwgSlNPTi5zdHJpbmdpZnkoYWNjb3VudHMpKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhgYWNjb3VudCBkZXBsb3llZCB0byAke2FjY291bnRUeG4uYWRkcmVzc31gKTtcclxuICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBpbnZva2UoYWNjb3VudCwgY29udHJhY3RfYWRkcmVzcywgbWV0aG9kLCBhcmdzKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IGFjY291bnRDb250cmFjdCA9IG5ldyBBY2NvdW50KFxyXG4gICAgICAgICAgICBkZWZhdWx0UHJvdmlkZXIsXHJcbiAgICAgICAgICAgIGFjY291bnRzW2FjY291bnRdLmNvbnRyYWN0X2FkZHJlc3MsXHJcbiAgICAgICAgICAgIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJrZXlzXCIpKS5rZXlQYWlyXHJcbiAgICAgICAgKTtcclxuICAgICAgICAvL2NvbnN0IHByaXYgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwia2V5c1wiKSkua2V5UGFpcjtcclxuICAgICAgICBjb25zb2xlLmxvZyhnZXRLZXlQYWlyKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJrZXlzXCIpKS5rZXlQYWlyLmVjLnByaXYpKTtcclxuXHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKGBDYWxsaW5nIFN0YXJrTmV0IGZvciBhY2NvdW50Q29udHJhY3Qgbm9uY2UuLi5gKTtcclxuICAgICAgICBjb25zdCBub25jZSA9IGF3YWl0IChhd2FpdCBhY2NvdW50Q29udHJhY3QuZ2V0Tm9uY2UoKSk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocGFyc2VJbnQobm9uY2UsIDEwKSlcclxuICAgICAgICBjb25zdCBwb29sQmFsYW5jZVRva2VuQSA9IGF3YWl0IGRlZmF1bHRQcm92aWRlci5jYWxsQ29udHJhY3Qoe1xyXG4gICAgICAgICAgICBjb250cmFjdEFkZHJlc3M6IGNvbnRyYWN0X2FkZHJlc3MsXHJcbiAgICAgICAgICAgIGVudHJ5cG9pbnQ6IG1ldGhvZCxcclxuICAgICAgICAgICAgY2FsbGRhdGE6IGFyZ3MsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gY29uc3QgY2FsbCA9XHJcbiAgICAgICAgLy8gICAgIHtcclxuICAgICAgICAvLyAgICAgICAgIGNvbnRyYWN0QWRkcmVzczogY29udHJhY3RfYWRkcmVzcyxcclxuICAgICAgICAvLyAgICAgICAgIGVudHJ5cG9pbnQ6IG1ldGhvZCxcclxuICAgICAgICAvLyAgICAgICAgIGNhbGxkYXRhOiBhcmdzLFxyXG4gICAgICAgIC8vICAgICB9O1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZXhlY3V0aW5nIHRyYW5zYWN0aW9uLi4uXCIpO1xyXG4gICAgICAgIC8vIGNvbnN0IFR4biA9IGF3YWl0IGFjY291bnRDb250cmFjdC5leGVjdXRlKGNhbGwpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwic3VjY2VzcyFcIilcclxuICAgICAgICAvLyByZXR1cm4gVHhuLnRyYW5zYWN0aW9uX2hhc2g7XHJcbiAgICB9XHJcblxyXG4gICAgbW9kdWxlLmV4cG9ydHMgPSB7cHVibGljX2tleSwgYWNjb3VudHMsIHNob3dXZWxjb21lLCBzaG93QWNjb3VudHMsIGNyZWF0ZUFjY291bnQsIGludm9rZX1cclxufVxyXG5cclxuIl0sIm5hbWVzIjpbInNob3dXZWxjb21lIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic3R5bGUiLCJkaXNwbGF5Iiwic2hvd0FjY291bnRzIiwiYWNjb3VudHMiLCJwdWJsaWNfa2V5IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsImtleVB1YiIsInRvU3RyaW5nIiwiY3JlYXRlQWNjb3VudCIsInN0YXJrS2V5UGFpciIsInN0YXJrS2V5UHViIiwiYWNjb3VudFR4biIsImFjY291bnQiLCJhY2NvdW50Q29udHJhY3QiLCJnZXRFbGVtZW50QnlJZCIsImlubmVySFRNTCIsImVjIiwiZ2VuS2V5UGFpciIsImdldFN0YXJrS2V5Iiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImtleVBhaXIiLCJjb25zb2xlIiwibG9nIiwiZGVmYXVsdFByb3ZpZGVyIiwiZGVwbG95Q29udHJhY3QiLCJjb250cmFjdCIsIkNvbXBpbGVkQWNjb3VudCIsImFkZHJlc3NTYWx0IiwibmFtZSIsImNvbmNhdCIsImxlbmd0aCIsImNvbnRyYWN0X2FkZHJlc3MiLCJhZGRyZXNzIiwic3RhdHVzIiwidHlwZSIsIkNvbnRyYWN0IiwiYWJpIiwiaW5pdGlhbGl6ZSIsImxvY2F0aW9uIiwicmVsb2FkIiwiaW52b2tlIiwibWV0aG9kIiwiYXJncyIsIm5vbmNlIiwicG9vbEJhbGFuY2VUb2tlbkEiLCJBY2NvdW50IiwiZ2V0S2V5UGFpciIsInByaXYiLCJnZXROb25jZSIsInBhcnNlSW50IiwiY2FsbENvbnRyYWN0IiwiY29udHJhY3RBZGRyZXNzIiwiZW50cnlwb2ludCIsImNhbGxkYXRhIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./service.js\n");

/***/ })

});