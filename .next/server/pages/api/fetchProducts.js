"use strict";
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
exports.id = "pages/api/fetchProducts";
exports.ids = ["pages/api/fetchProducts"];
exports.modules = {

/***/ "(api)/./pages/api/fetchProducts.js":
/*!************************************!*\
  !*** ./pages/api/fetchProducts.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _products_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./products.json */ \"(api)/./pages/api/products.json\");\n\nfunction handler(req, res) {\n    // If get request\n    if (req.method === \"GET\") {\n        // Create a copy of products without the hashes and filenames\n        const productsNoHashes = _products_json__WEBPACK_IMPORTED_MODULE_0__.map((product)=>{\n            const { hash , filename , ...rest } = product;\n            return rest;\n        });\n        res.status(200).json(productsNoHashes);\n    } else {\n        res.status(405).send(`Method ${req.method} not allowed`);\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZmV0Y2hQcm9kdWN0cy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFzQztBQUV2QixTQUFTQyxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQ3hDLGlCQUFpQjtJQUNqQixJQUFJRCxHQUFHLENBQUNFLE1BQU0sS0FBSyxLQUFLLEVBQUU7UUFDeEIsNkRBQTZEO1FBQzdELE1BQU1DLGdCQUFnQixHQUFHTCwrQ0FBWSxDQUFDLENBQUNPLE9BQU8sR0FBSztZQUVqRCxNQUFNLEVBQUVDLElBQUksR0FBRUMsUUFBUSxHQUFFLEdBQUdDLElBQUksRUFBRSxHQUFHSCxPQUFPO1lBQzNDLE9BQU9HLElBQUksQ0FBQztTQUNiLENBQUM7UUFFRlAsR0FBRyxDQUFDUSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQ1AsZ0JBQWdCLENBQUMsQ0FBQztLQUN4QyxNQUNJO1FBQ0hGLEdBQUcsQ0FBQ1EsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDRSxJQUFJLENBQUMsQ0FBQyxPQUFPLEVBQUVYLEdBQUcsQ0FBQ0UsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7S0FDMUQ7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL0Bzb2xhbmEvd2FsbGV0LWFkYXB0ZXItbmV4dGpzLXN0YXJ0ZXIvLi9wYWdlcy9hcGkvZmV0Y2hQcm9kdWN0cy5qcz9jNTk3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwcm9kdWN0cyBmcm9tIFwiLi9wcm9kdWN0cy5qc29uXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICAvLyBJZiBnZXQgcmVxdWVzdFxyXG4gIGlmIChyZXEubWV0aG9kID09PSBcIkdFVFwiKSB7XHJcbiAgICAvLyBDcmVhdGUgYSBjb3B5IG9mIHByb2R1Y3RzIHdpdGhvdXQgdGhlIGhhc2hlcyBhbmQgZmlsZW5hbWVzXHJcbiAgICBjb25zdCBwcm9kdWN0c05vSGFzaGVzID0gcHJvZHVjdHMubWFwKChwcm9kdWN0KSA9PiB7XHJcblxyXG4gICAgICBjb25zdCB7IGhhc2gsIGZpbGVuYW1lLCAuLi5yZXN0IH0gPSBwcm9kdWN0O1xyXG4gICAgICByZXR1cm4gcmVzdDtcclxuICAgIH0pO1xyXG5cclxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHByb2R1Y3RzTm9IYXNoZXMpOyAgXHJcbiAgfVxyXG4gIGVsc2Uge1xyXG4gICAgcmVzLnN0YXR1cyg0MDUpLnNlbmQoYE1ldGhvZCAke3JlcS5tZXRob2R9IG5vdCBhbGxvd2VkYCk7XHJcbiAgfVxyXG59Il0sIm5hbWVzIjpbInByb2R1Y3RzIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInByb2R1Y3RzTm9IYXNoZXMiLCJtYXAiLCJwcm9kdWN0IiwiaGFzaCIsImZpbGVuYW1lIiwicmVzdCIsInN0YXR1cyIsImpzb24iLCJzZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/fetchProducts.js\n");

/***/ }),

/***/ "(api)/./pages/api/products.json":
/*!*********************************!*\
  !*** ./pages/api/products.json ***!
  \*********************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"id":1,"name":"The Yellow Boat","price":"0.10","description":"Get this fire NFT for only $0.10! !","image_url":"https://gateway.pinata.cloud/ipfs/QmTzCR1kwqPvNzRAn8LQ4auXC36MXM6RjjwtL8mif3W4Qj","filename":"Yellow_Boat.png","hash":"QmTzCR1kwqPvNzRAn8LQ4auXC36MXM6RjjwtL8mif3W4Qj"}]');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/fetchProducts.js"));
module.exports = __webpack_exports__;

})();