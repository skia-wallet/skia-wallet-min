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

eval("\nvar _runtimeJs = _interopRequireDefault(__webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\"));\nvar _starknet = __webpack_require__(/*! starknet */ \"./node_modules/starknet/dist/index.js\");\nvar _ellipticCurve = __webpack_require__(/*! starknet/dist/utils/ellipticCurve */ \"./node_modules/starknet/dist/utils/ellipticCurve.js\");\nvar _transaction = __webpack_require__(/*! starknet/utils/transaction */ \"./node_modules/starknet/utils/transaction.js\");\nvar _accountJson = _interopRequireDefault(__webpack_require__(/*! ./public/Account.json */ \"./public/Account.json\"));\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _interopRequireDefault(obj) {\n    return obj && obj.__esModule ? obj : {\n        default: obj\n    };\n}\nif (true) {\n    var showWelcome = function showWelcome() {\n        document.querySelector(\"#create\").style.display = \"block\";\n        document.querySelector(\"#account\").style.display = \"none\";\n    };\n    var showAccounts = function showAccounts() {\n        document.querySelector(\"#create\").style.display = \"none\";\n        document.querySelector(\"#account\").style.display = \"block\";\n    };\n    var accounts = [];\n    var public_key;\n    if (localStorage.getItem(\"accounts\")) {\n        accounts = JSON.parse(localStorage.getItem(\"accounts\"));\n        public_key = JSON.parse(localStorage.getItem(\"keys\")).keyPub.toString();\n    }\n    function createAccount() {\n        return _createAccount.apply(this, arguments);\n    }\n    function _createAccount() {\n        _createAccount = _asyncToGenerator(_runtimeJs.default.mark(function _callee() {\n            var starkKeyPair, starkKeyPub, accountTxn, account, accountContract;\n            return _runtimeJs.default.wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        document.getElementById(\"wait\").innerHTML = \"Please wait, deploying account...\";\n                        starkKeyPair = _starknet.ec.genKeyPair();\n                        starkKeyPub = _starknet.ec.getStarkKey(starkKeyPair);\n                        localStorage.setItem(\"keys\", JSON.stringify({\n                            keyPair: starkKeyPair,\n                            keyPub: starkKeyPub\n                        }));\n                        public_key = JSON.parse(localStorage.getItem(\"keys\")).keyPub.toString();\n                        console.log(\"deploying account....\");\n                        _ctx.next = 8;\n                        return _starknet.defaultProvider.deployContract({\n                            contract: _accountJson.default,\n                            addressSalt: starkKeyPub\n                        });\n                    case 8:\n                        accountTxn = _ctx.sent;\n                        account = {\n                            name: \"Account \".concat(accounts.length.toString()),\n                            contract_address: accountTxn.address,\n                            status: \"Account Deployed!\",\n                            type: \"Simple\"\n                        };\n                        accountContract = new _starknet.Contract(_accountJson.default.abi, account.contract_address);\n                        console.log(\"initializing account....\");\n                        _ctx.next = 14;\n                        return accountContract.initialize(public_key, \"0\");\n                    case 14:\n                        accounts[accounts.length] = account;\n                        localStorage.setItem(\"accounts\", JSON.stringify(accounts));\n                        console.log(\"account deployed to \".concat(accountTxn.address));\n                        location.reload();\n                    case 18:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _createAccount.apply(this, arguments);\n    }\n    function invoke(account, contract_address, method, args, callBackUrl) {\n        return _invoke.apply(this, arguments);\n    }\n    function _invoke() {\n        _invoke = _asyncToGenerator(_runtimeJs.default.mark(function _callee(account, contract_address, method, args, callBackUrl) {\n            var accountContract, Txn;\n            return _runtimeJs.default.wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        accountContract = new _starknet.Account(_starknet.defaultProvider, accounts[account].contract_address, JSON.parse(localStorage.getItem(\"keys\")).keyPair);\n                        console.log(\"Callling contract...\");\n                        _ctx.next = 4;\n                        return _starknet.defaultProvider.invokeFunction({\n                            contractAddress: contract_address,\n                            entrypoint: method,\n                            calldata: args\n                        });\n                    case 4:\n                        Txn = _ctx.sent;\n                        document.getElementById(\"status\").innerHTML = 'Transaction hash: <a href=\"https://goerli.voyager.online/tx/'.concat(Txn.transaction_hash, '\">').concat(Txn.transaction_hash, \"</a>\");\n                    case 6:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        //window.location.href = callBackUrl;\n        // console.log(\"success!\")\n        // return Txn.transaction_hash;\n        }));\n        return _invoke.apply(this, arguments);\n    }\n    module.exports = {\n        public_key: public_key,\n        accounts: accounts,\n        showWelcome: showWelcome,\n        showAccounts: showAccounts,\n        createAccount: createAccount,\n        invoke: invoke\n    };\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQUVoQixnQkFBZ0I7NEJBQ2pDaUIsVUFBVSxFQUFFUCxNQUFNOzRCQUNsQlEsUUFBUSxFQUFFUCxJQUFJO3lCQUNqQixDQUFDOzt3QkFKSUUsR0FBRyxZQUlQO3dCQUNGbEQsUUFBUSxDQUFDbUIsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDQyxTQUFTLEdBQUcsOERBQTZELENBQTJCOEIsTUFBb0IsQ0FBN0NBLEdBQUcsQ0FBQ00sZ0JBQWdCLEVBQUMsSUFBRSxDQUF1QixPQUFJLENBQXpCTixHQUFHLENBQUNNLGdCQUFnQixFQUFDLE1BQUksQ0FBQyxDQUFDOzs7Ozs7UUFDaksscUNBQXFDO1FBQ3JDLDBCQUEwQjtRQUMxQiwrQkFBK0I7U0FDbEM7ZUF0QmNWLE9BQU07O0lBd0JyQlcsTUFBTSxDQUFDQyxPQUFPLEdBQUc7UUFBQ3BELFVBQVUsRUFBVkEsVUFBVTtRQUFFRCxRQUFRLEVBQVJBLFFBQVE7UUFBRU4sV0FBVyxFQUFYQSxXQUFXO1FBQUVLLFlBQVksRUFBWkEsWUFBWTtRQUFFUyxhQUFhLEVBQWJBLGFBQWE7UUFBRWlDLE1BQU0sRUFBTkEsTUFBTTtLQUFDO0NBQzVGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NlcnZpY2UuanM/NDY3NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBlYywgZGVmYXVsdFByb3ZpZGVyLCBDb250cmFjdCwgaGFzaCwgQWNjb3VudCB9IGZyb20gJ3N0YXJrbmV0JztcclxuaW1wb3J0IHsgZ2V0S2V5UGFpciB9IGZyb20gJ3N0YXJrbmV0L2Rpc3QvdXRpbHMvZWxsaXB0aWNDdXJ2ZSc7XHJcbmltcG9ydCB7IHRyYW5zZm9ybUNhbGxzVG9NdWx0aWNhbGxBcnJheXMgfSBmcm9tICdzdGFya25ldC91dGlscy90cmFuc2FjdGlvbidcclxuaW1wb3J0IENvbXBpbGVkQWNjb3VudCBmcm9tICcuL3B1YmxpYy9BY2NvdW50Lmpzb24nO1xyXG5cclxuaWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSB7XHJcbiAgICBsZXQgYWNjb3VudHMgPSBbXTtcclxuICAgIGxldCBwdWJsaWNfa2V5O1xyXG5cclxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImFjY291bnRzXCIpKSB7XHJcbiAgICAgICAgYWNjb3VudHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYWNjb3VudHNcIikpO1xyXG4gICAgICAgIHB1YmxpY19rZXkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwia2V5c1wiKSkua2V5UHViLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBzaG93V2VsY29tZSgpIHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3JlYXRlJykuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWNjb3VudCcpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzaG93QWNjb3VudHMoKSB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NyZWF0ZScpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWNjb3VudCcpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUFjY291bnQoKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dhaXQnKS5pbm5lckhUTUwgPSBcIlBsZWFzZSB3YWl0LCBkZXBsb3lpbmcgYWNjb3VudC4uLlwiO1xyXG4gICAgICAgIGNvbnN0IHN0YXJrS2V5UGFpciA9IGVjLmdlbktleVBhaXIoKTtcclxuICAgICAgICBjb25zdCBzdGFya0tleVB1YiA9IGVjLmdldFN0YXJrS2V5KHN0YXJrS2V5UGFpcik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJrZXlzXCIsIEpTT04uc3RyaW5naWZ5KHtrZXlQYWlyOiBzdGFya0tleVBhaXIsIGtleVB1Yjogc3RhcmtLZXlQdWJ9KSk7XHJcbiAgICAgICAgcHVibGljX2tleSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJrZXlzXCIpKS5rZXlQdWIudG9TdHJpbmcoKTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zb2xlLmxvZyhcImRlcGxveWluZyBhY2NvdW50Li4uLlwiKTtcclxuICAgICAgICBjb25zdCBhY2NvdW50VHhuID0gYXdhaXQgZGVmYXVsdFByb3ZpZGVyLmRlcGxveUNvbnRyYWN0KHtcclxuICAgICAgICAgICAgY29udHJhY3Q6IENvbXBpbGVkQWNjb3VudCxcclxuICAgICAgICAgICAgYWRkcmVzc1NhbHQ6IHN0YXJrS2V5UHViXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgYWNjb3VudCA9IHtcclxuICAgICAgICAgICAgbmFtZTogXCJBY2NvdW50IFwiLmNvbmNhdChhY2NvdW50cy5sZW5ndGgudG9TdHJpbmcoKSksXHJcbiAgICAgICAgICAgIGNvbnRyYWN0X2FkZHJlc3M6IGFjY291bnRUeG4uYWRkcmVzcyxcclxuICAgICAgICAgICAgc3RhdHVzOiBcIkFjY291bnQgRGVwbG95ZWQhXCIsXHJcbiAgICAgICAgICAgIHR5cGU6IFwiU2ltcGxlXCJcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgYWNjb3VudENvbnRyYWN0ID0gbmV3IENvbnRyYWN0KFxyXG4gICAgICAgICAgICBDb21waWxlZEFjY291bnQuYWJpLFxyXG4gICAgICAgICAgICBhY2NvdW50LmNvbnRyYWN0X2FkZHJlc3NcclxuICAgICAgICApO1xyXG4gICAgXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJpbml0aWFsaXppbmcgYWNjb3VudC4uLi5cIik7XHJcbiAgICAgICAgYXdhaXQgYWNjb3VudENvbnRyYWN0LmluaXRpYWxpemUoXHJcbiAgICAgICAgICAgIHB1YmxpY19rZXksXHJcbiAgICAgICAgICAgIFwiMFwiXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgYWNjb3VudHNbYWNjb3VudHMubGVuZ3RoXSA9IGFjY291bnQ7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJhY2NvdW50c1wiLCBKU09OLnN0cmluZ2lmeShhY2NvdW50cykpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBhY2NvdW50IGRlcGxveWVkIHRvICR7YWNjb3VudFR4bi5hZGRyZXNzfWApO1xyXG4gICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGludm9rZShhY2NvdW50LCBjb250cmFjdF9hZGRyZXNzLCBtZXRob2QsIGFyZ3MsIGNhbGxCYWNrVXJsKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IGFjY291bnRDb250cmFjdCA9IG5ldyBBY2NvdW50KFxyXG4gICAgICAgICAgICBkZWZhdWx0UHJvdmlkZXIsXHJcbiAgICAgICAgICAgIGFjY291bnRzW2FjY291bnRdLmNvbnRyYWN0X2FkZHJlc3MsXHJcbiAgICAgICAgICAgIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJrZXlzXCIpKS5rZXlQYWlyXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coYENhbGxsaW5nIGNvbnRyYWN0Li4uYCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gQWNjb3VudC5leGVjdXRlIG5vdCB3b3JraW5nXHJcbiAgICAgICAgLy8gVE9ETzogUmVwbGFjZSB3aXRoIGFjY29vdW50LmV4ZWN1dGVcclxuXHJcbiAgICAgICAgY29uc3QgVHhuID0gYXdhaXQgZGVmYXVsdFByb3ZpZGVyLmludm9rZUZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgY29udHJhY3RBZGRyZXNzOiBjb250cmFjdF9hZGRyZXNzLFxyXG4gICAgICAgICAgICBlbnRyeXBvaW50OiBtZXRob2QsXHJcbiAgICAgICAgICAgIGNhbGxkYXRhOiBhcmdzXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXR1cycpLmlubmVySFRNTCA9IGBUcmFuc2FjdGlvbiBoYXNoOiA8YSBocmVmPVwiaHR0cHM6Ly9nb2VybGkudm95YWdlci5vbmxpbmUvdHgvJHtUeG4udHJhbnNhY3Rpb25faGFzaH1cIj4ke1R4bi50cmFuc2FjdGlvbl9oYXNofTwvYT5gO1xyXG4gICAgICAgIC8vd2luZG93LmxvY2F0aW9uLmhyZWYgPSBjYWxsQmFja1VybDtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInN1Y2Nlc3MhXCIpXHJcbiAgICAgICAgLy8gcmV0dXJuIFR4bi50cmFuc2FjdGlvbl9oYXNoO1xyXG4gICAgfVxyXG5cclxuICAgIG1vZHVsZS5leHBvcnRzID0ge3B1YmxpY19rZXksIGFjY291bnRzLCBzaG93V2VsY29tZSwgc2hvd0FjY291bnRzLCBjcmVhdGVBY2NvdW50LCBpbnZva2V9XHJcbn1cclxuXHJcbiJdLCJuYW1lcyI6WyJzaG93V2VsY29tZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInN0eWxlIiwiZGlzcGxheSIsInNob3dBY2NvdW50cyIsImFjY291bnRzIiwicHVibGljX2tleSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJrZXlQdWIiLCJ0b1N0cmluZyIsImNyZWF0ZUFjY291bnQiLCJzdGFya0tleVBhaXIiLCJzdGFya0tleVB1YiIsImFjY291bnRUeG4iLCJhY2NvdW50IiwiYWNjb3VudENvbnRyYWN0IiwiZ2V0RWxlbWVudEJ5SWQiLCJpbm5lckhUTUwiLCJlYyIsImdlbktleVBhaXIiLCJnZXRTdGFya0tleSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJrZXlQYWlyIiwiY29uc29sZSIsImxvZyIsImRlZmF1bHRQcm92aWRlciIsImRlcGxveUNvbnRyYWN0IiwiY29udHJhY3QiLCJDb21waWxlZEFjY291bnQiLCJhZGRyZXNzU2FsdCIsIm5hbWUiLCJjb25jYXQiLCJsZW5ndGgiLCJjb250cmFjdF9hZGRyZXNzIiwiYWRkcmVzcyIsInN0YXR1cyIsInR5cGUiLCJDb250cmFjdCIsImFiaSIsImluaXRpYWxpemUiLCJsb2NhdGlvbiIsInJlbG9hZCIsImludm9rZSIsIm1ldGhvZCIsImFyZ3MiLCJjYWxsQmFja1VybCIsIlR4biIsIkFjY291bnQiLCJpbnZva2VGdW5jdGlvbiIsImNvbnRyYWN0QWRkcmVzcyIsImVudHJ5cG9pbnQiLCJjYWxsZGF0YSIsInRyYW5zYWN0aW9uX2hhc2giLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./service.js\n");

/***/ })

});