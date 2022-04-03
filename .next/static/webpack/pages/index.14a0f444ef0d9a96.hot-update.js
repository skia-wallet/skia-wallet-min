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

eval("\nvar _runtimeJs = _interopRequireDefault(__webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\"));\nvar _starknet = __webpack_require__(/*! starknet */ \"./node_modules/starknet/dist/index.js\");\nvar _accountJson = _interopRequireDefault(__webpack_require__(/*! ../public/Account.json */ \"./public/Account.json\"));\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _interopRequireDefault(obj) {\n    return obj && obj.__esModule ? obj : {\n        default: obj\n    };\n}\nif (true) {\n    var showWelcome = function showWelcome() {\n        document.querySelector(\"#create\").style.display = \"block\";\n        document.querySelector(\"#account\").style.display = \"none\";\n    };\n    var showAccounts = function showAccounts() {\n        document.querySelector(\"#create\").style.display = \"none\";\n        document.querySelector(\"#account\").style.display = \"block\";\n    };\n    var updateStatus = function updateStatus(accountIndex, status) {\n        document.getElementById(\"wait\").innerHTML = status;\n        accounts[accountIndex].status = status;\n        localStorage.setItem(\"accounts\", JSON.stringify(accounts));\n    };\n    var accounts = [];\n    var public_key;\n    if (localStorage.getItem(\"accounts\")) {\n        accounts = JSON.parse(localStorage.getItem(\"accounts\"));\n        public_key = JSON.parse(localStorage.getItem(\"keys\")).keyPub.toString();\n    }\n    function createAccount() {\n        return _createAccount.apply(this, arguments);\n    }\n    function _createAccount() {\n        _createAccount = _asyncToGenerator(_runtimeJs.default.mark(function _callee() {\n            var starkKeyPair, starkKeyPub, accountTxn, account, accountContract, initialize;\n            return _runtimeJs.default.wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        document.getElementById(\"wait\").innerHTML = \"Please wait, deploying account...\";\n                        starkKeyPair = _starknet.ec.genKeyPair();\n                        starkKeyPub = _starknet.ec.getStarkKey(starkKeyPair);\n                        localStorage.setItem(\"keys\", JSON.stringify({\n                            keyPair: starkKeyPair,\n                            keyPub: starkKeyPub\n                        }));\n                        console.log(\"deploying account....\");\n                        _ctx.next = 7;\n                        return _starknet.defaultProvider.deployContract({\n                            contract: _accountJson.default,\n                            addressSalt: starkKeyPub\n                        });\n                    case 7:\n                        accountTxn = _ctx.sent;\n                        account = {\n                            name: \"Account \".concat(accounts.length.toString()),\n                            contract_address: accountTxn.address,\n                            status: \"Account Deployed\",\n                            type: \"Simple\"\n                        };\n                        accounts[accounts.length] = account;\n                        localStorage.setItem(\"accounts\", JSON.stringify(accounts));\n                        showAccounts();\n                        updateStatus(account.length - 1, \"Please wait, deploying account...\");\n                        console.log(\"account deployed to \".concat(accountTxn.address));\n                        accountContract = new _starknet.Contract(_accountJson.default.abi, accountTxn.address);\n                        // accounts = [accountContract];\n                        // localStorage.setItem(\"accounts\", JSON.stringify(accounts));\n                        console.log(\"initializing account....\");\n                        _ctx.next = 18;\n                        return accountContract.initialize(starkKeyPub, \"0\");\n                    case 18:\n                        initialize = _ctx.sent;\n                        _ctx.next = 21;\n                        return _starknet.defaultProvider.waitForTransaction(accountTxn.transaction_hash);\n                    case 21:\n                        updateStatus(account.length - 1, \"Accepted on L1\");\n                        _ctx.next = 24;\n                        return _starknet.defaultProvider.waitForTransaction(initialize.transaction_hash);\n                    case 24:\n                        updateStatus(account.length - 1, \"Active\");\n                    case 25:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _createAccount.apply(this, arguments);\n    }\n    module.exports = {\n        public_key: public_key,\n        accounts: accounts,\n        showWelcome: showWelcome,\n        showAccounts: showAccounts,\n        createAccount: createAccount\n    };\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE1BQU0sQ0FBQ0MsT0FBTyxHQUFHO1FBQUNsQyxVQUFVLEVBQVZBLFVBQVU7UUFBRUwsUUFBUSxFQUFSQSxRQUFRO1FBQUVYLFdBQVcsRUFBWEEsV0FBVztRQUFFSyxZQUFZLEVBQVpBLFlBQVk7UUFBRWdCLGFBQWEsRUFBYkEsYUFBYTtLQUFDO0NBQ3BGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3NlcnZpY2UuanM/OTZkYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBlYywgZGVmYXVsdFByb3ZpZGVyLCBDb250cmFjdCB9IGZyb20gJ3N0YXJrbmV0JztcclxuaW1wb3J0IENvbXBpbGVkQWNjb3VudCBmcm9tICcuLi9wdWJsaWMvQWNjb3VudC5qc29uJztcclxuXHJcbmlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0Jykge1xyXG4gICAgbGV0IGFjY291bnRzID0gW107XHJcbiAgICBsZXQgcHVibGljX2tleTtcclxuXHJcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhY2NvdW50c1wiKSkge1xyXG4gICAgICAgIGFjY291bnRzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImFjY291bnRzXCIpKTtcclxuICAgICAgICBwdWJsaWNfa2V5ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImtleXNcIikpLmtleVB1Yi50b1N0cmluZygpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gc2hvd1dlbGNvbWUoKSB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NyZWF0ZScpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FjY291bnQnKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2hvd0FjY291bnRzKCkge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjcmVhdGUnKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FjY291bnQnKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBhc3luYyBmdW5jdGlvbiBjcmVhdGVBY2NvdW50KCkge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3YWl0JykuaW5uZXJIVE1MID0gXCJQbGVhc2Ugd2FpdCwgZGVwbG95aW5nIGFjY291bnQuLi5cIjtcclxuICAgICAgICBjb25zdCBzdGFya0tleVBhaXIgPSBlYy5nZW5LZXlQYWlyKCk7XHJcbiAgICAgICAgY29uc3Qgc3RhcmtLZXlQdWIgPSBlYy5nZXRTdGFya0tleShzdGFya0tleVBhaXIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwia2V5c1wiLCBKU09OLnN0cmluZ2lmeSh7a2V5UGFpcjogc3RhcmtLZXlQYWlyLCBrZXlQdWI6IHN0YXJrS2V5UHVifSkpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZGVwbG95aW5nIGFjY291bnQuLi4uXCIpO1xyXG4gICAgICAgIGNvbnN0IGFjY291bnRUeG4gPSBhd2FpdCBkZWZhdWx0UHJvdmlkZXIuZGVwbG95Q29udHJhY3Qoe1xyXG4gICAgICAgICAgICBjb250cmFjdDogQ29tcGlsZWRBY2NvdW50LFxyXG4gICAgICAgICAgICBhZGRyZXNzU2FsdDogc3RhcmtLZXlQdWJcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBhY2NvdW50ID0ge1xyXG4gICAgICAgICAgICBuYW1lOiBcIkFjY291bnQgXCIuY29uY2F0KGFjY291bnRzLmxlbmd0aC50b1N0cmluZygpKSxcclxuICAgICAgICAgICAgY29udHJhY3RfYWRkcmVzczogYWNjb3VudFR4bi5hZGRyZXNzLFxyXG4gICAgICAgICAgICBzdGF0dXM6IFwiQWNjb3VudCBEZXBsb3llZFwiLFxyXG4gICAgICAgICAgICB0eXBlOiBcIlNpbXBsZVwiXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFjY291bnRzW2FjY291bnRzLmxlbmd0aF0gPSBhY2NvdW50O1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYWNjb3VudHNcIiwgSlNPTi5zdHJpbmdpZnkoYWNjb3VudHMpKTtcclxuICAgICAgICBzaG93QWNjb3VudHMoKVxyXG4gICAgICAgIHVwZGF0ZVN0YXR1cyhhY2NvdW50Lmxlbmd0aCAtIDEsIFwiUGxlYXNlIHdhaXQsIGRlcGxveWluZyBhY2NvdW50Li4uXCIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKGBhY2NvdW50IGRlcGxveWVkIHRvICR7YWNjb3VudFR4bi5hZGRyZXNzfWApO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGFjY291bnRDb250cmFjdCA9IG5ldyBDb250cmFjdChcclxuICAgICAgICAgICAgQ29tcGlsZWRBY2NvdW50LmFiaSxcclxuICAgICAgICAgICAgYWNjb3VudFR4bi5hZGRyZXNzXHJcbiAgICAgICAgKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBhY2NvdW50cyA9IFthY2NvdW50Q29udHJhY3RdO1xyXG4gICAgICAgIC8vIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYWNjb3VudHNcIiwgSlNPTi5zdHJpbmdpZnkoYWNjb3VudHMpKTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zb2xlLmxvZyhcImluaXRpYWxpemluZyBhY2NvdW50Li4uLlwiKTtcclxuICAgICAgICBjb25zdCBpbml0aWFsaXplID0gYXdhaXQgYWNjb3VudENvbnRyYWN0LmluaXRpYWxpemUoXHJcbiAgICAgICAgICAgIHN0YXJrS2V5UHViLFxyXG4gICAgICAgICAgICBcIjBcIlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGF3YWl0IGRlZmF1bHRQcm92aWRlci53YWl0Rm9yVHJhbnNhY3Rpb24oYWNjb3VudFR4bi50cmFuc2FjdGlvbl9oYXNoKTtcclxuICAgICAgICAgICAgdXBkYXRlU3RhdHVzKGFjY291bnQubGVuZ3RoIC0gMSwgXCJBY2NlcHRlZCBvbiBMMVwiKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBhd2FpdCBkZWZhdWx0UHJvdmlkZXIud2FpdEZvclRyYW5zYWN0aW9uKGluaXRpYWxpemUudHJhbnNhY3Rpb25faGFzaCk7XHJcbiAgICAgICAgICAgIHVwZGF0ZVN0YXR1cyhhY2NvdW50Lmxlbmd0aCAtIDEsIFwiQWN0aXZlXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIGZ1bmN0aW9uIHVwZGF0ZVN0YXR1cyhhY2NvdW50SW5kZXgsIHN0YXR1cykge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3YWl0JykuaW5uZXJIVE1MID0gc3RhdHVzO1xyXG4gICAgICAgIGFjY291bnRzW2FjY291bnRJbmRleF0uc3RhdHVzID0gc3RhdHVzO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYWNjb3VudHNcIiwgSlNPTi5zdHJpbmdpZnkoYWNjb3VudHMpKTtcclxuICAgIH1cclxuICAgIG1vZHVsZS5leHBvcnRzID0ge3B1YmxpY19rZXksIGFjY291bnRzLCBzaG93V2VsY29tZSwgc2hvd0FjY291bnRzLCBjcmVhdGVBY2NvdW50fVxyXG59XHJcblxyXG4iXSwibmFtZXMiOlsic2hvd1dlbGNvbWUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzdHlsZSIsImRpc3BsYXkiLCJzaG93QWNjb3VudHMiLCJ1cGRhdGVTdGF0dXMiLCJhY2NvdW50SW5kZXgiLCJzdGF0dXMiLCJnZXRFbGVtZW50QnlJZCIsImlubmVySFRNTCIsImFjY291bnRzIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJwdWJsaWNfa2V5IiwiZ2V0SXRlbSIsInBhcnNlIiwia2V5UHViIiwidG9TdHJpbmciLCJjcmVhdGVBY2NvdW50Iiwic3RhcmtLZXlQYWlyIiwic3RhcmtLZXlQdWIiLCJhY2NvdW50VHhuIiwiYWNjb3VudCIsImFjY291bnRDb250cmFjdCIsImluaXRpYWxpemUiLCJlYyIsImdlbktleVBhaXIiLCJnZXRTdGFya0tleSIsImtleVBhaXIiLCJjb25zb2xlIiwibG9nIiwiZGVmYXVsdFByb3ZpZGVyIiwiZGVwbG95Q29udHJhY3QiLCJjb250cmFjdCIsIkNvbXBpbGVkQWNjb3VudCIsImFkZHJlc3NTYWx0IiwibmFtZSIsImNvbmNhdCIsImxlbmd0aCIsImNvbnRyYWN0X2FkZHJlc3MiLCJhZGRyZXNzIiwidHlwZSIsIkNvbnRyYWN0IiwiYWJpIiwid2FpdEZvclRyYW5zYWN0aW9uIiwidHJhbnNhY3Rpb25faGFzaCIsIm1vZHVsZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/service.js\n");

/***/ })

});