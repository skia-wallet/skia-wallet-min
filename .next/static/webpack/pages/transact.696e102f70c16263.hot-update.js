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

eval("\nvar _runtimeJs = _interopRequireDefault(__webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\"));\nvar _starknet = __webpack_require__(/*! starknet */ \"./node_modules/starknet/dist/index.js\");\nvar _ellipticCurve = __webpack_require__(/*! starknet/dist/utils/ellipticCurve */ \"./node_modules/starknet/dist/utils/ellipticCurve.js\");\nvar _transaction = __webpack_require__(/*! starknet/utils/transaction */ \"./node_modules/starknet/utils/transaction.js\");\nvar _accountJson = _interopRequireDefault(__webpack_require__(/*! ./public/Account.json */ \"./public/Account.json\"));\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _interopRequireDefault(obj) {\n    return obj && obj.__esModule ? obj : {\n        default: obj\n    };\n}\nif (true) {\n    var showWelcome = function showWelcome() {\n        document.querySelector(\"#create\").style.display = \"block\";\n        document.querySelector(\"#account\").style.display = \"none\";\n    };\n    var showAccounts = function showAccounts() {\n        document.querySelector(\"#create\").style.display = \"none\";\n        document.querySelector(\"#account\").style.display = \"block\";\n    };\n    var accounts = [];\n    var public_key;\n    if (localStorage.getItem(\"accounts\")) {\n        accounts = JSON.parse(localStorage.getItem(\"accounts\"));\n        public_key = JSON.parse(localStorage.getItem(\"keys\")).keyPub.toString();\n    }\n    function createAccount() {\n        return _createAccount.apply(this, arguments);\n    }\n    function _createAccount() {\n        _createAccount = _asyncToGenerator(_runtimeJs.default.mark(function _callee() {\n            var starkKeyPair, starkKeyPub, accountTxn, account, accountContract;\n            return _runtimeJs.default.wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        // TODO: encrypt keyPair with user password\n                        document.getElementById(\"wait\").innerHTML = \"Please wait, deploying account...\";\n                        if (!public_key) {\n                            starkKeyPair = _starknet.ec.genKeyPair();\n                            starkKeyPub = _starknet.ec.getStarkKey(starkKeyPair);\n                            localStorage.setItem(\"keys\", JSON.stringify({\n                                keyPair: starkKeyPair,\n                                keyPub: starkKeyPub\n                            }));\n                            public_key = JSON.parse(localStorage.getItem(\"keys\")).keyPub.toString();\n                        }\n                        console.log(\"deploying account....\");\n                        console.log(public_key);\n                        _ctx.next = 6;\n                        return _starknet.defaultProvider.deployContract({\n                            contract: _accountJson.default\n                        });\n                    case 6:\n                        accountTxn = _ctx.sent;\n                        console.log(\"deployed!\");\n                        account = {\n                            name: \"Account \".concat(accounts.length.toString()),\n                            contract_address: accountTxn.address,\n                            type: \"Simple\"\n                        };\n                        accountContract = new _starknet.Contract(_accountJson.default.abi, account.contract_address);\n                        console.log(\"initializing account....\");\n                        _ctx.next = 13;\n                        return accountContract.initialize(public_key, \"0\");\n                    case 13:\n                        accounts[accounts.length] = account;\n                        localStorage.setItem(\"accounts\", JSON.stringify(accounts));\n                        console.log(\"account deployed to \".concat(accountTxn.address));\n                        location.reload();\n                    case 17:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _createAccount.apply(this, arguments);\n    }\n    function invoke(account, contract_address, method, args, callBackUrl) {\n        return _invoke.apply(this, arguments);\n    }\n    function _invoke() {\n        _invoke = _asyncToGenerator(_runtimeJs.default.mark(function _callee(account, contract_address, method, args, callBackUrl) {\n            var accountContract, Txn;\n            return _runtimeJs.default.wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        accountContract = new _starknet.Account(_starknet.defaultProvider, accounts[account].contract_address, JSON.parse(localStorage.getItem(\"keys\")).keyPair);\n                        console.log(\"Callling contract...\");\n                        _ctx.next = 4;\n                        return _starknet.defaultProvider.invokeFunction({\n                            contractAddress: contract_address,\n                            entrypoint: method,\n                            calldata: args\n                        });\n                    case 4:\n                        Txn = _ctx.sent;\n                        document.getElementById(\"status\").innerHTML = 'Transaction hash: <a href=\"https://goerli.voyager.online/tx/'.concat(Txn.transaction_hash, '\">').concat(Txn.transaction_hash, \"</a>\");\n                    case 6:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        //window.location.href = callBackUrl;\n        // console.log(\"success!\")\n        // return Txn.transaction_hash;\n        }));\n        return _invoke.apply(this, arguments);\n    }\n    module.exports = {\n        public_key: public_key,\n        accounts: accounts,\n        showWelcome: showWelcome,\n        showAccounts: showAccounts,\n        createAccount: createAccount,\n        invoke: invoke\n    };\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxPQUFPLENBQUNDLEdBQUcsQ0FBRSxzQkFBb0IsQ0FBRSxDQUFDOzsrQkFLbEJDLFNBQWUsaUJBQUNxQixjQUFjLENBQUM7NEJBQzdDQyxlQUFlLEVBQUVmLGdCQUFnQjs0QkFDakNnQixVQUFVLEVBQUVQLE1BQU07NEJBQ2xCUSxRQUFRLEVBQUVQLElBQUk7eUJBQ2pCLENBQUM7O3dCQUpJRSxHQUFHLFlBSVA7d0JBQ0ZoRCxRQUFRLENBQUNtQixjQUFjLENBQUMsUUFBUSxDQUFDLENBQUNDLFNBQVMsR0FBRyw4REFBNkQsQ0FBMkI0QixNQUFvQixDQUE3Q0EsR0FBRyxDQUFDTSxnQkFBZ0IsRUFBQyxJQUFFLENBQXVCLE9BQUksQ0FBekJOLEdBQUcsQ0FBQ00sZ0JBQWdCLEVBQUMsTUFBSSxDQUFDLENBQUM7Ozs7OztRQUNqSyxxQ0FBcUM7UUFDckMsMEJBQTBCO1FBQzFCLCtCQUErQjtTQUNsQztlQXRCY1YsT0FBTTs7SUF3QnJCVyxNQUFNLENBQUNDLE9BQU8sR0FBRztRQUFDbEQsVUFBVSxFQUFWQSxVQUFVO1FBQUVELFFBQVEsRUFBUkEsUUFBUTtRQUFFTixXQUFXLEVBQVhBLFdBQVc7UUFBRUssWUFBWSxFQUFaQSxZQUFZO1FBQUVTLGFBQWEsRUFBYkEsYUFBYTtRQUFFK0IsTUFBTSxFQUFOQSxNQUFNO0tBQUM7Q0FDNUYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VydmljZS5qcz80Njc2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGVjLCBkZWZhdWx0UHJvdmlkZXIsIENvbnRyYWN0LCBoYXNoLCBBY2NvdW50IH0gZnJvbSAnc3RhcmtuZXQnO1xyXG5pbXBvcnQgeyBnZXRLZXlQYWlyIH0gZnJvbSAnc3RhcmtuZXQvZGlzdC91dGlscy9lbGxpcHRpY0N1cnZlJztcclxuaW1wb3J0IHsgdHJhbnNmb3JtQ2FsbHNUb011bHRpY2FsbEFycmF5cyB9IGZyb20gJ3N0YXJrbmV0L3V0aWxzL3RyYW5zYWN0aW9uJ1xyXG5pbXBvcnQgQ29tcGlsZWRBY2NvdW50IGZyb20gJy4vcHVibGljL0FjY291bnQuanNvbic7XHJcblxyXG5pZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHtcclxuICAgIGxldCBhY2NvdW50cyA9IFtdO1xyXG4gICAgbGV0IHB1YmxpY19rZXk7XHJcblxyXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYWNjb3VudHNcIikpIHtcclxuICAgICAgICBhY2NvdW50cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhY2NvdW50c1wiKSk7XHJcbiAgICAgICAgcHVibGljX2tleSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJrZXlzXCIpKS5rZXlQdWIudG9TdHJpbmcoKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHNob3dXZWxjb21lKCkge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjcmVhdGUnKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhY2NvdW50Jykuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNob3dBY2NvdW50cygpIHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3JlYXRlJykuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhY2NvdW50Jykuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQWNjb3VudCgpIHtcclxuICAgICAgICAvLyBUT0RPOiBlbmNyeXB0IGtleVBhaXIgd2l0aCB1c2VyIHBhc3N3b3JkXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dhaXQnKS5pbm5lckhUTUwgPSBcIlBsZWFzZSB3YWl0LCBkZXBsb3lpbmcgYWNjb3VudC4uLlwiO1xyXG4gICAgICAgIGlmICghcHVibGljX2tleSkge1xyXG4gICAgICAgICAgICBjb25zdCBzdGFya0tleVBhaXIgPSBlYy5nZW5LZXlQYWlyKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXJrS2V5UHViID0gZWMuZ2V0U3RhcmtLZXkoc3RhcmtLZXlQYWlyKTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJrZXlzXCIsIEpTT04uc3RyaW5naWZ5KHtrZXlQYWlyOiBzdGFya0tleVBhaXIsIGtleVB1Yjogc3RhcmtLZXlQdWJ9KSk7XHJcbiAgICAgICAgICAgIHB1YmxpY19rZXkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwia2V5c1wiKSkua2V5UHViLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZGVwbG95aW5nIGFjY291bnQuLi4uXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHB1YmxpY19rZXkpXHJcbiAgICAgICAgY29uc3QgYWNjb3VudFR4biA9IGF3YWl0IGRlZmF1bHRQcm92aWRlci5kZXBsb3lDb250cmFjdCh7XHJcbiAgICAgICAgICAgIGNvbnRyYWN0OiBDb21waWxlZEFjY291bnQsXHJcbiAgICAgICAgICAgIC8vYWRkcmVzc1NhbHQ6IHB1YmxpY19rZXlcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImRlcGxveWVkIVwiKTtcclxuICAgICAgICBjb25zdCBhY2NvdW50ID0ge1xyXG4gICAgICAgICAgICBuYW1lOiBcIkFjY291bnQgXCIuY29uY2F0KGFjY291bnRzLmxlbmd0aC50b1N0cmluZygpKSxcclxuICAgICAgICAgICAgY29udHJhY3RfYWRkcmVzczogYWNjb3VudFR4bi5hZGRyZXNzLFxyXG4gICAgICAgICAgICB0eXBlOiBcIlNpbXBsZVwiXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGFjY291bnRDb250cmFjdCA9IG5ldyBDb250cmFjdChcclxuICAgICAgICAgICAgQ29tcGlsZWRBY2NvdW50LmFiaSxcclxuICAgICAgICAgICAgYWNjb3VudC5jb250cmFjdF9hZGRyZXNzXHJcbiAgICAgICAgKTtcclxuICAgIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiaW5pdGlhbGl6aW5nIGFjY291bnQuLi4uXCIpO1xyXG4gICAgICAgIGF3YWl0IGFjY291bnRDb250cmFjdC5pbml0aWFsaXplKFxyXG4gICAgICAgICAgICBwdWJsaWNfa2V5LFxyXG4gICAgICAgICAgICBcIjBcIlxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGFjY291bnRzW2FjY291bnRzLmxlbmd0aF0gPSBhY2NvdW50O1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYWNjb3VudHNcIiwgSlNPTi5zdHJpbmdpZnkoYWNjb3VudHMpKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhgYWNjb3VudCBkZXBsb3llZCB0byAke2FjY291bnRUeG4uYWRkcmVzc31gKTtcclxuICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBpbnZva2UoYWNjb3VudCwgY29udHJhY3RfYWRkcmVzcywgbWV0aG9kLCBhcmdzLCBjYWxsQmFja1VybCkge1xyXG5cclxuICAgICAgICBjb25zdCBhY2NvdW50Q29udHJhY3QgPSBuZXcgQWNjb3VudChcclxuICAgICAgICAgICAgZGVmYXVsdFByb3ZpZGVyLFxyXG4gICAgICAgICAgICBhY2NvdW50c1thY2NvdW50XS5jb250cmFjdF9hZGRyZXNzLFxyXG4gICAgICAgICAgICBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwia2V5c1wiKSkua2V5UGFpclxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKGBDYWxsbGluZyBjb250cmFjdC4uLmApO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIEFjY291bnQuZXhlY3V0ZSBub3Qgd29ya2luZ1xyXG4gICAgICAgIC8vIFRPRE86IFJlcGxhY2Ugd2l0aCBhY2Nvb3VudC5leGVjdXRlXHJcblxyXG4gICAgICAgIGNvbnN0IFR4biA9IGF3YWl0IGRlZmF1bHRQcm92aWRlci5pbnZva2VGdW5jdGlvbih7XHJcbiAgICAgICAgICAgIGNvbnRyYWN0QWRkcmVzczogY29udHJhY3RfYWRkcmVzcyxcclxuICAgICAgICAgICAgZW50cnlwb2ludDogbWV0aG9kLFxyXG4gICAgICAgICAgICBjYWxsZGF0YTogYXJnc1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGF0dXMnKS5pbm5lckhUTUwgPSBgVHJhbnNhY3Rpb24gaGFzaDogPGEgaHJlZj1cImh0dHBzOi8vZ29lcmxpLnZveWFnZXIub25saW5lL3R4LyR7VHhuLnRyYW5zYWN0aW9uX2hhc2h9XCI+JHtUeG4udHJhbnNhY3Rpb25faGFzaH08L2E+YDtcclxuICAgICAgICAvL3dpbmRvdy5sb2NhdGlvbi5ocmVmID0gY2FsbEJhY2tVcmw7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJzdWNjZXNzIVwiKVxyXG4gICAgICAgIC8vIHJldHVybiBUeG4udHJhbnNhY3Rpb25faGFzaDtcclxuICAgIH1cclxuXHJcbiAgICBtb2R1bGUuZXhwb3J0cyA9IHtwdWJsaWNfa2V5LCBhY2NvdW50cywgc2hvd1dlbGNvbWUsIHNob3dBY2NvdW50cywgY3JlYXRlQWNjb3VudCwgaW52b2tlfVxyXG59XHJcblxyXG4iXSwibmFtZXMiOlsic2hvd1dlbGNvbWUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzdHlsZSIsImRpc3BsYXkiLCJzaG93QWNjb3VudHMiLCJhY2NvdW50cyIsInB1YmxpY19rZXkiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwia2V5UHViIiwidG9TdHJpbmciLCJjcmVhdGVBY2NvdW50Iiwic3RhcmtLZXlQYWlyIiwic3RhcmtLZXlQdWIiLCJhY2NvdW50VHhuIiwiYWNjb3VudCIsImFjY291bnRDb250cmFjdCIsImdldEVsZW1lbnRCeUlkIiwiaW5uZXJIVE1MIiwiZWMiLCJnZW5LZXlQYWlyIiwiZ2V0U3RhcmtLZXkiLCJzZXRJdGVtIiwic3RyaW5naWZ5Iiwia2V5UGFpciIsImNvbnNvbGUiLCJsb2ciLCJkZWZhdWx0UHJvdmlkZXIiLCJkZXBsb3lDb250cmFjdCIsImNvbnRyYWN0IiwiQ29tcGlsZWRBY2NvdW50IiwibmFtZSIsImNvbmNhdCIsImxlbmd0aCIsImNvbnRyYWN0X2FkZHJlc3MiLCJhZGRyZXNzIiwidHlwZSIsIkNvbnRyYWN0IiwiYWJpIiwiaW5pdGlhbGl6ZSIsImxvY2F0aW9uIiwicmVsb2FkIiwiaW52b2tlIiwibWV0aG9kIiwiYXJncyIsImNhbGxCYWNrVXJsIiwiVHhuIiwiQWNjb3VudCIsImludm9rZUZ1bmN0aW9uIiwiY29udHJhY3RBZGRyZXNzIiwiZW50cnlwb2ludCIsImNhbGxkYXRhIiwidHJhbnNhY3Rpb25faGFzaCIsIm1vZHVsZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./service.js\n");

/***/ })

});