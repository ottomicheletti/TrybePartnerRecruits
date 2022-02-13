/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/styles.module.scss":
/*!***************************************!*\
  !*** ./components/styles.module.scss ***!
  \***************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"gitButton\": \"styles_gitButton__O8CMr\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3N0eWxlcy5tb2R1bGUuc2Nzcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RyeWJlcGFydG5lcnJlY3J1aXRzLy4vY29tcG9uZW50cy9zdHlsZXMubW9kdWxlLnNjc3M/NzM4NiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJnaXRCdXR0b25cIjogXCJzdHlsZXNfZ2l0QnV0dG9uX19POENNclwiXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/styles.module.scss\n");

/***/ }),

/***/ "./components/index.js":
/*!*****************************!*\
  !*** ./components/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SignGit\": () => (/* binding */ SignGit)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.module.scss */ \"./components/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ \"react-icons/fa\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nfunction SignGit() {\n    const [session] = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession)();\n    return session ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        type: \"button\",\n        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().gitButton),\n        onclick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signOut)()\n        ,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaGithub, {\n                color: \"#04d361\"\n            }, void 0, false, {\n                fileName: \"/home/dsr/Repos/Trybe/Projetos/TrybePartnerRecruits/components/index.js\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, this),\n            session.user.name\n        ]\n    }, void 0, true, {\n        fileName: \"/home/dsr/Repos/Trybe/Projetos/TrybePartnerRecruits/components/index.js\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        type: \"button\",\n        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().gitButton),\n        onclick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signIn)('github')\n        ,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaGithub, {\n                color: \"#eba417\"\n            }, void 0, false, {\n                fileName: \"/home/dsr/Repos/Trybe/Projetos/TrybePartnerRecruits/components/index.js\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this),\n            \"Login com GitHub\"\n        ]\n    }, void 0, true, {\n        fileName: \"/home/dsr/Repos/Trybe/Projetos/TrybePartnerRecruits/components/index.js\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBeUM7QUFDb0I7QUFDcEI7QUFFbEMsU0FBU0ssT0FBTyxHQUFHLENBQUM7SUFDekIsS0FBSyxFQUFFQyxPQUFPLElBQUlMLDJEQUFVO0lBRTVCLE1BQU0sQ0FBQ0ssT0FBTywrRUFDWEMsQ0FBTTtRQUFDQyxJQUFJLEVBQUMsQ0FBUTtRQUFDQyxTQUFTLEVBQUVULHNFQUFnQjtRQUFFVyxPQUFPLE1BQVFSLHdEQUFPOzs7d0ZBQ3RFQyxvREFBUTtnQkFBQ1EsS0FBSyxFQUFDLENBQVM7Ozs7OztZQUN4Qk4sT0FBTyxDQUFDTyxJQUFJLENBQUNDLElBQUk7Ozs7OzsyRkFHbkJQLENBQU07UUFBQ0MsSUFBSSxFQUFDLENBQVE7UUFBQ0MsU0FBUyxFQUFFVCxzRUFBZ0I7UUFBRVcsT0FBTyxNQUFRVCx1REFBTSxDQUFDLENBQVE7Ozt3RkFDOUVFLG9EQUFRO2dCQUFDUSxLQUFLLEVBQUMsQ0FBUzs7Ozs7O1lBQUcsQ0FFOUI7Ozs7Ozs7QUFFSixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHJ5YmVwYXJ0bmVycmVjcnVpdHMvLi9jb21wb25lbnRzL2luZGV4LmpzPzUwZDMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgeyB1c2VTZXNzaW9uLCBzaWduSW4sIHNpZ25PdXQgfSBmcm9tICduZXh0LWF1dGgvcmVhY3QnO1xuaW1wb3J0IHsgRmFHaXRodWIgfSBmcm9tICdyZWFjdC1pY29ucy9mYSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBTaWduR2l0KCkge1xuICBjb25zdCBbc2Vzc2lvbl0gPSB1c2VTZXNzaW9uKCk7XG5cbiAgcmV0dXJuIHNlc3Npb24gPyAoXG4gICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPXtzdHlsZXMuZ2l0QnV0dG9ufSBvbmNsaWNrPXsoKSA9PiBzaWduT3V0KCl9PlxuICAgICAgPEZhR2l0aHViIGNvbG9yPVwiIzA0ZDM2MVwiIC8+XG4gICAgICB7c2Vzc2lvbi51c2VyLm5hbWV9XG4gICAgPC9idXR0b24+XG4gICkgOiAoXG4gICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPXtzdHlsZXMuZ2l0QnV0dG9ufSBvbmNsaWNrPXsoKSA9PiBzaWduSW4oJ2dpdGh1YicpfT5cbiAgICAgIDxGYUdpdGh1YiBjb2xvcj1cIiNlYmE0MTdcIiAvPlxuICAgICAgTG9naW4gY29tIEdpdEh1YlxuICAgIDwvYnV0dG9uPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInN0eWxlcyIsInVzZVNlc3Npb24iLCJzaWduSW4iLCJzaWduT3V0IiwiRmFHaXRodWIiLCJTaWduR2l0Iiwic2Vzc2lvbiIsImJ1dHRvbiIsInR5cGUiLCJjbGFzc05hbWUiLCJnaXRCdXR0b24iLCJvbmNsaWNrIiwiY29sb3IiLCJ1c2VyIiwibmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/index.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Nome)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/index.js */ \"./components/index.js\");\n\n\nfunction Nome() {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_index_js__WEBPACK_IMPORTED_MODULE_1__.SignGit, {}, void 0, false, {\n        fileName: \"/home/dsr/Repos/Trybe/Projetos/TrybePartnerRecruits/pages/index.js\",\n        lineNumber: 5,\n        columnNumber: 9\n    }, this));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFnRDtBQUVqQyxRQUFRLENBQUNDLElBQUksR0FBRyxDQUFDO0lBQzVCLE1BQU0sNkVBQ0FELHlEQUFPOzs7OztBQUVqQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHJ5YmVwYXJ0bmVycmVjcnVpdHMvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNpZ25HaXQgfSBmcm9tICcuLi9jb21wb25lbnRzL2luZGV4LmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOb21lKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDwgU2lnbkdpdCAvPlxuICAgIClcbn0iXSwibmFtZXMiOlsiU2lnbkdpdCIsIk5vbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/react");

/***/ }),

/***/ "react-icons/fa":
/*!*********************************!*\
  !*** external "react-icons/fa" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/fa");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();