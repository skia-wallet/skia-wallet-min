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

eval("\nvar _runtimeJs = _interopRequireDefault(__webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\"));\nvar _starknet = __webpack_require__(/*! starknet */ \"./node_modules/starknet/dist/index.js\");\nvar _accountJson = _interopRequireDefault(__webpack_require__(/*! ../public/Account.json */ \"./public/Account.json\"));\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _interopRequireDefault(obj) {\n    return obj && obj.__esModule ? obj : {\n        default: obj\n    };\n}\nif (true) {\n    var showWelcome = function showWelcome() {\n        document.querySelector(\"#create\").style.display = \"block\";\n        document.querySelector(\"#account\").style.display = \"none\";\n    };\n    var showAccounts = function showAccounts() {\n        document.querySelector(\"#create\").style.display = \"none\";\n        document.querySelector(\"#account\").style.display = \"block\";\n    };\n    var updateStatus = function updateStatus(accountIndex, status) {\n        document.getElementById(\"wait\").innerHTML = status;\n        accounts[accountIndex].status = status;\n        localStorage.setItem(\"accounts\", JSON.stringify(accounts));\n    };\n    var accounts = [];\n    var public_key;\n    if (localStorage.getItem(\"accounts\")) {\n        accounts = JSON.parse(localStorage.getItem(\"accounts\"));\n        public_key = JSON.parse(localStorage.getItem(\"keys\")).keyPub.toString();\n    }\n    function createAccount() {\n        return _createAccount.apply(this, arguments);\n    }\n    function _createAccount() {\n        _createAccount = _asyncToGenerator(_runtimeJs.default.mark(function _callee() {\n            var starkKeyPair, starkKeyPub, accountTxn, account;\n            return _runtimeJs.default.wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        document.getElementById(\"wait\").innerHTML = \"Please wait, deploying account...\";\n                        starkKeyPair = _starknet.ec.genKeyPair();\n                        starkKeyPub = _starknet.ec.getStarkKey(starkKeyPair);\n                        localStorage.setItem(\"keys\", JSON.stringify({\n                            keyPair: starkKeyPair,\n                            keyPub: starkKeyPub\n                        }));\n                        console.log(\"deploying account....\");\n                        _ctx.next = 7;\n                        return _starknet.defaultProvider.deployContract({\n                            contract: _accountJson.default,\n                            addressSalt: starkKeyPub\n                        });\n                    case 7:\n                        accountTxn = _ctx.sent;\n                        account = {\n                            name: \"Account \".concat(accounts.length.toString()),\n                            contract_address: accountTxn.address,\n                            status: \"Account Deployed!\",\n                            type: \"Simple\"\n                        };\n                        accounts[accounts.length] = account;\n                        localStorage.setItem(\"accounts\", JSON.stringify(accounts));\n                        console.log(\"account deployed to \".concat(accountTxn.address));\n                        location.reload();\n                    case 13:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _createAccount.apply(this, arguments);\n    }\n    function init(account) {\n        return _init.apply(this, arguments);\n    }\n    function _init() {\n        _init = _asyncToGenerator(_runtimeJs.default.mark(function _callee(account) {\n            var accountContract;\n            return _runtimeJs.default.wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        accountContract = new _starknet.Contract(_accountJson.default.abi, account.contract_address);\n                        console.log(\"initializing account....\");\n                        _ctx.next = 4;\n                        return accountContract.initialize(starkKeyPub, \"0\");\n                    case 4:\n                        updateStatus(index, \"Active!\");\n                        document.getElementById(account.name).style.display = \"none\";\n                    case 6:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _init.apply(this, arguments);\n    }\n    function invoke(account, contract_address, method, args) {\n        return _invoke.apply(this, arguments);\n    }\n    function _invoke() {\n        _invoke = _asyncToGenerator(_runtimeJs.default.mark(function _callee(account, contract_address, method, args) {\n            var accountContract, nonce, calls, msgHash, ref, callArray, calldata, keyPair, signature, Txn;\n            return _runtimeJs.default.wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        accountContract = new _starknet.Contract(_accountJson.default.abi, accounts[account].contract_address);\n                        console.log(\"Calling StarkNet for accountContract nonce...\");\n                        _ctx.next = 4;\n                        return accountContract.call(\"get_nonce\");\n                    case 4:\n                        nonce = _ctx.sent.nonce.toString();\n                        calls = [\n                            {\n                                contractAddress: contract_address,\n                                entrypoint: method,\n                                calldata: args\n                            }, \n                        ];\n                        msgHash = _starknet.hash.hashMulticall(accountContract.address, calls, nonce, \"0\");\n                        ref = transformCallsToMulticallArrays(calls), callArray = ref.callArray, calldata = ref.calldata;\n                        keyPair = JSON.parse(localStorage.getItem(\"keys\")).keyPair;\n                        signature = _starknet.ec.sign(keyPair, msgHash);\n                        // Execute tx \n                        console.log(\"Invoking txn...\");\n                        _ctx.next = 13;\n                        return accountContract.__execute__(callArray, calldata, nonce, signature);\n                    case 13:\n                        Txn = _ctx.sent;\n                        Txnhash = Txn.transaction_hash;\n                        console.log(\"Txn hash: \".concat(Txnhash));\n                    case 16:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _invoke.apply(this, arguments);\n    }\n    module.exports = {\n        public_key: public_key,\n        accounts: accounts,\n        showWelcome: showWelcome,\n        showAccounts: showAccounts,\n        createAccount: createAccount,\n        init: init\n    };\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFjO3dCQUNkMUIsT0FBTyxDQUFDQyxHQUFHLENBQUUsaUJBQWUsQ0FBRSxDQUFDOzsrQkFDYmUsZUFBZSxDQUFDc0IsV0FBVyxDQUN6Q1YsU0FBUyxFQUNUQyxRQUFRLEVBQ1JMLEtBQUssRUFDTE0sU0FBUyxDQUNaOzt3QkFMS0MsR0FBRyxZQUtSO3dCQUVEUSxPQUFPLEdBQUdSLEdBQUcsQ0FBQ1MsZ0JBQWdCO3dCQUM5QnhDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFlBQVcsQ0FBVSxPQUFSc0MsT0FBTyxDQUFFLENBQUMsQ0FBQzs7Ozs7O1NBQ3ZDO2VBbkNjbEIsT0FBTTs7SUEwQ3JCb0IsTUFBTSxDQUFDQyxPQUFPLEdBQUc7UUFBQ3hELFVBQVUsRUFBVkEsVUFBVTtRQUFFTCxRQUFRLEVBQVJBLFFBQVE7UUFBRVgsV0FBVyxFQUFYQSxXQUFXO1FBQUVLLFlBQVksRUFBWkEsWUFBWTtRQUFFZ0IsYUFBYSxFQUFiQSxhQUFhO1FBQUV3QixJQUFJLEVBQUpBLElBQUk7S0FBQztDQUMxRiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9zZXJ2aWNlLmpzPzk2ZGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZWMsIGRlZmF1bHRQcm92aWRlciwgQ29udHJhY3QsIGhhc2ggfSBmcm9tICdzdGFya25ldCc7XHJcbmltcG9ydCBDb21waWxlZEFjY291bnQgZnJvbSAnLi4vcHVibGljL0FjY291bnQuanNvbic7XHJcblxyXG5pZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHtcclxuICAgIGxldCBhY2NvdW50cyA9IFtdO1xyXG4gICAgbGV0IHB1YmxpY19rZXk7XHJcblxyXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYWNjb3VudHNcIikpIHtcclxuICAgICAgICBhY2NvdW50cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhY2NvdW50c1wiKSk7XHJcbiAgICAgICAgcHVibGljX2tleSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJrZXlzXCIpKS5rZXlQdWIudG9TdHJpbmcoKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHNob3dXZWxjb21lKCkge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjcmVhdGUnKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhY2NvdW50Jykuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNob3dBY2NvdW50cygpIHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3JlYXRlJykuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhY2NvdW50Jykuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQWNjb3VudCgpIHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2FpdCcpLmlubmVySFRNTCA9IFwiUGxlYXNlIHdhaXQsIGRlcGxveWluZyBhY2NvdW50Li4uXCI7XHJcbiAgICAgICAgY29uc3Qgc3RhcmtLZXlQYWlyID0gZWMuZ2VuS2V5UGFpcigpO1xyXG4gICAgICAgIGNvbnN0IHN0YXJrS2V5UHViID0gZWMuZ2V0U3RhcmtLZXkoc3RhcmtLZXlQYWlyKTtcclxuICAgICAgICBcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImtleXNcIiwgSlNPTi5zdHJpbmdpZnkoe2tleVBhaXI6IHN0YXJrS2V5UGFpciwga2V5UHViOiBzdGFya0tleVB1Yn0pKTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zb2xlLmxvZyhcImRlcGxveWluZyBhY2NvdW50Li4uLlwiKTtcclxuICAgICAgICBjb25zdCBhY2NvdW50VHhuID0gYXdhaXQgZGVmYXVsdFByb3ZpZGVyLmRlcGxveUNvbnRyYWN0KHtcclxuICAgICAgICAgICAgY29udHJhY3Q6IENvbXBpbGVkQWNjb3VudCxcclxuICAgICAgICAgICAgYWRkcmVzc1NhbHQ6IHN0YXJrS2V5UHViXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgYWNjb3VudCA9IHtcclxuICAgICAgICAgICAgbmFtZTogXCJBY2NvdW50IFwiLmNvbmNhdChhY2NvdW50cy5sZW5ndGgudG9TdHJpbmcoKSksXHJcbiAgICAgICAgICAgIGNvbnRyYWN0X2FkZHJlc3M6IGFjY291bnRUeG4uYWRkcmVzcyxcclxuICAgICAgICAgICAgc3RhdHVzOiBcIkFjY291bnQgRGVwbG95ZWQhXCIsXHJcbiAgICAgICAgICAgIHR5cGU6IFwiU2ltcGxlXCJcclxuICAgICAgICB9XHJcbiAgICAgICAgYWNjb3VudHNbYWNjb3VudHMubGVuZ3RoXSA9IGFjY291bnQ7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJhY2NvdW50c1wiLCBKU09OLnN0cmluZ2lmeShhY2NvdW50cykpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBhY2NvdW50IGRlcGxveWVkIHRvICR7YWNjb3VudFR4bi5hZGRyZXNzfWApO1xyXG4gICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGluaXQoYWNjb3VudCkge1xyXG4gICAgICAgIGNvbnN0IGFjY291bnRDb250cmFjdCA9IG5ldyBDb250cmFjdChcclxuICAgICAgICAgICAgQ29tcGlsZWRBY2NvdW50LmFiaSxcclxuICAgICAgICAgICAgYWNjb3VudC5jb250cmFjdF9hZGRyZXNzXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJpbml0aWFsaXppbmcgYWNjb3VudC4uLi5cIik7XHJcbiAgICAgICAgYXdhaXQgYWNjb3VudENvbnRyYWN0LmluaXRpYWxpemUoXHJcbiAgICAgICAgICAgIHN0YXJrS2V5UHViLFxyXG4gICAgICAgICAgICBcIjBcIlxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdXBkYXRlU3RhdHVzKGluZGV4LCBcIkFjdGl2ZSFcIik7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYWNjb3VudC5uYW1lKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gaW52b2tlKGFjY291bnQsIGNvbnRyYWN0X2FkZHJlc3MsIG1ldGhvZCwgYXJncykge1xyXG4gICAgICAgIGNvbnN0IGFjY291bnRDb250cmFjdCA9IG5ldyBDb250cmFjdChcclxuICAgICAgICAgICAgQ29tcGlsZWRBY2NvdW50LmFiaSxcclxuICAgICAgICAgICAgYWNjb3VudHNbYWNjb3VudF0uY29udHJhY3RfYWRkcmVzc1xyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKGBDYWxsaW5nIFN0YXJrTmV0IGZvciBhY2NvdW50Q29udHJhY3Qgbm9uY2UuLi5gKTtcclxuICAgICAgICBjb25zdCBub25jZSA9IChhd2FpdCBhY2NvdW50Q29udHJhY3QuY2FsbChcImdldF9ub25jZVwiKSkubm9uY2UudG9TdHJpbmcoKTtcclxuICAgICAgICBjb25zdCBjYWxscyA9IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY29udHJhY3RBZGRyZXNzOiBjb250cmFjdF9hZGRyZXNzLFxyXG4gICAgICAgICAgICAgICAgZW50cnlwb2ludDogbWV0aG9kLFxyXG4gICAgICAgICAgICAgICAgY2FsbGRhdGE6IGFyZ3MsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXTtcclxuXHJcbiAgICAgICAgY29uc3QgbXNnSGFzaCA9IGhhc2guaGFzaE11bHRpY2FsbChhY2NvdW50Q29udHJhY3QuYWRkcmVzcywgY2FsbHMsIG5vbmNlLCBcIjBcIik7XHJcblxyXG4gICAgICAgIGNvbnN0IHsgY2FsbEFycmF5LCBjYWxsZGF0YSB9ID0gdHJhbnNmb3JtQ2FsbHNUb011bHRpY2FsbEFycmF5cyhjYWxscyk7XHJcblxyXG4gICAgICAgIC8vIHNpZ24gdHhcclxuICAgICAgICBjb25zdCBrZXlQYWlyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImtleXNcIikpLmtleVBhaXI7XHJcbiAgICAgICAgY29uc3Qgc2lnbmF0dXJlID0gZWMuc2lnbihrZXlQYWlyLCBtc2dIYXNoKTtcclxuXHJcbiAgICAgICAgLy8gRXhlY3V0ZSB0eCBcclxuICAgICAgICBjb25zb2xlLmxvZyhgSW52b2tpbmcgdHhuLi4uYCk7XHJcbiAgICAgICAgY29uc3QgVHhuID0gYXdhaXQgYWNjb3VudENvbnRyYWN0Ll9fZXhlY3V0ZV9fKFxyXG4gICAgICAgICAgICBjYWxsQXJyYXksXHJcbiAgICAgICAgICAgIGNhbGxkYXRhLFxyXG4gICAgICAgICAgICBub25jZSxcclxuICAgICAgICAgICAgc2lnbmF0dXJlXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgVHhuaGFzaCA9IFR4bi50cmFuc2FjdGlvbl9oYXNoXHJcbiAgICAgICAgY29uc29sZS5sb2coYFR4biBoYXNoOiAke1R4bmhhc2h9YCk7XHJcbiAgICB9XHJcbiAgICAgICAgXHJcbiAgICBmdW5jdGlvbiB1cGRhdGVTdGF0dXMoYWNjb3VudEluZGV4LCBzdGF0dXMpIHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2FpdCcpLmlubmVySFRNTCA9IHN0YXR1cztcclxuICAgICAgICBhY2NvdW50c1thY2NvdW50SW5kZXhdLnN0YXR1cyA9IHN0YXR1cztcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImFjY291bnRzXCIsIEpTT04uc3RyaW5naWZ5KGFjY291bnRzKSk7XHJcbiAgICB9XHJcbiAgICBtb2R1bGUuZXhwb3J0cyA9IHtwdWJsaWNfa2V5LCBhY2NvdW50cywgc2hvd1dlbGNvbWUsIHNob3dBY2NvdW50cywgY3JlYXRlQWNjb3VudCwgaW5pdH1cclxufVxyXG5cclxuIl0sIm5hbWVzIjpbInNob3dXZWxjb21lIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic3R5bGUiLCJkaXNwbGF5Iiwic2hvd0FjY291bnRzIiwidXBkYXRlU3RhdHVzIiwiYWNjb3VudEluZGV4Iiwic3RhdHVzIiwiZ2V0RWxlbWVudEJ5SWQiLCJpbm5lckhUTUwiLCJhY2NvdW50cyIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwicHVibGljX2tleSIsImdldEl0ZW0iLCJwYXJzZSIsImtleVB1YiIsInRvU3RyaW5nIiwiY3JlYXRlQWNjb3VudCIsInN0YXJrS2V5UGFpciIsInN0YXJrS2V5UHViIiwiYWNjb3VudFR4biIsImFjY291bnQiLCJlYyIsImdlbktleVBhaXIiLCJnZXRTdGFya0tleSIsImtleVBhaXIiLCJjb25zb2xlIiwibG9nIiwiZGVmYXVsdFByb3ZpZGVyIiwiZGVwbG95Q29udHJhY3QiLCJjb250cmFjdCIsIkNvbXBpbGVkQWNjb3VudCIsImFkZHJlc3NTYWx0IiwibmFtZSIsImNvbmNhdCIsImxlbmd0aCIsImNvbnRyYWN0X2FkZHJlc3MiLCJhZGRyZXNzIiwidHlwZSIsImxvY2F0aW9uIiwicmVsb2FkIiwiaW5pdCIsImFjY291bnRDb250cmFjdCIsIkNvbnRyYWN0IiwiYWJpIiwiaW5pdGlhbGl6ZSIsImluZGV4IiwiaW52b2tlIiwibWV0aG9kIiwiYXJncyIsIm5vbmNlIiwiY2FsbHMiLCJtc2dIYXNoIiwidHJhbnNmb3JtQ2FsbHNUb011bHRpY2FsbEFycmF5cyIsImNhbGxBcnJheSIsImNhbGxkYXRhIiwic2lnbmF0dXJlIiwiVHhuIiwiY2FsbCIsImNvbnRyYWN0QWRkcmVzcyIsImVudHJ5cG9pbnQiLCJoYXNoIiwiaGFzaE11bHRpY2FsbCIsInNpZ24iLCJfX2V4ZWN1dGVfXyIsIlR4bmhhc2giLCJ0cmFuc2FjdGlvbl9oYXNoIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/service.js\n");

/***/ })

});