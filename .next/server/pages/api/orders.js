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
exports.id = "pages/api/orders";
exports.ids = ["pages/api/orders"];
exports.modules = {

/***/ "fs/promises":
/*!******************************!*\
  !*** external "fs/promises" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("fs/promises");

/***/ }),

/***/ "(api)/./pages/api/orders.js":
/*!*****************************!*\
  !*** ./pages/api/orders.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _Orders_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Orders.json */ \"(api)/./pages/api/Orders.json\");\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs/promises */ \"fs/promises\");\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs_promises__WEBPACK_IMPORTED_MODULE_1__);\n// This API endpoint will let users POST data to add records and GET to retrieve\n\n\nfunction get(req, res) {\n    const { buyer  } = req.query;\n    // Check if this address has any orders\n    const buyerOrders = _Orders_json__WEBPACK_IMPORTED_MODULE_0__.filter((order)=>order.buyer === buyer\n    );\n    if (buyerOrders.length === 0) {\n        // 204 = successfully processed the request, not returning any content\n        res.status(204).send();\n    } else {\n        res.status(200).json(buyerOrders);\n    }\n}\nasync function post(req, res) {\n    console.log(\"Received add order request\", req.body);\n    // Add new order to orders.json\n    try {\n        const newOrder = req.body;\n        // If this address has not purchased this item, add order to orders.json\n        if (!_Orders_json__WEBPACK_IMPORTED_MODULE_0__.find((order)=>order.buyer === newOrder.buyer.toString() && order.itemID === newOrder.itemID\n        )) {\n            _Orders_json__WEBPACK_IMPORTED_MODULE_0__.push(newOrder);\n            await (0,fs_promises__WEBPACK_IMPORTED_MODULE_1__.writeFile)(\"./pages/api/orders.json\", JSON.stringify(_Orders_json__WEBPACK_IMPORTED_MODULE_0__, null, 2));\n            res.status(200).json(_Orders_json__WEBPACK_IMPORTED_MODULE_0__);\n        } else {\n            res.status(400).send(\"Order already exists\");\n        }\n    } catch (err) {\n        res.status(400).send(err);\n    }\n}\nasync function handler(req, res) {\n    switch(req.method){\n        case \"GET\":\n            get(req, res);\n            break;\n        case \"POST\":\n            await post(req, res);\n            break;\n        default:\n            res.status(405).send(`Method ${req.method} not allowed`);\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvb3JkZXJzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxnRkFBZ0Y7QUFDN0M7QUFDSztBQUV4QyxTQUFTRSxHQUFHLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQ3JCLE1BQU0sRUFBRUMsS0FBSyxHQUFFLEdBQUdGLEdBQUcsQ0FBQ0csS0FBSztJQUUzQix1Q0FBdUM7SUFDdkMsTUFBTUMsV0FBVyxHQUFHUCxnREFBYSxDQUFDLENBQUNTLEtBQUssR0FBS0EsS0FBSyxDQUFDSixLQUFLLEtBQUtBLEtBQUs7SUFBQSxDQUFDO0lBQ25FLElBQUlFLFdBQVcsQ0FBQ0csTUFBTSxLQUFLLENBQUMsRUFBRTtRQUM1QixzRUFBc0U7UUFDdEVOLEdBQUcsQ0FBQ08sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLEVBQUUsQ0FBQztLQUN4QixNQUFNO1FBQ0xSLEdBQUcsQ0FBQ08sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDRSxJQUFJLENBQUNOLFdBQVcsQ0FBQyxDQUFDO0tBQ25DO0NBQ0Y7QUFFRCxlQUFlTyxJQUFJLENBQUNYLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzVCVyxPQUFPLENBQUNDLEdBQUcsQ0FBQyw0QkFBNEIsRUFBRWIsR0FBRyxDQUFDYyxJQUFJLENBQUMsQ0FBQztJQUNwRCwrQkFBK0I7SUFDL0IsSUFBSTtRQUNGLE1BQU1DLFFBQVEsR0FBR2YsR0FBRyxDQUFDYyxJQUFJO1FBRXpCLHdFQUF3RTtRQUN4RSxJQUFJLENBQUNqQiw4Q0FBVyxDQUFDLENBQUNTLEtBQUssR0FBS0EsS0FBSyxDQUFDSixLQUFLLEtBQUthLFFBQVEsQ0FBQ2IsS0FBSyxDQUFDZSxRQUFRLEVBQUUsSUFBSVgsS0FBSyxDQUFDWSxNQUFNLEtBQUtILFFBQVEsQ0FBQ0csTUFBTTtRQUFBLENBQUMsRUFBRTtZQUMxR3JCLDhDQUFXLENBQUNrQixRQUFRLENBQUMsQ0FBQztZQUN0QixNQUFNakIsc0RBQVMsQ0FBQyx5QkFBeUIsRUFBRXNCLElBQUksQ0FBQ0MsU0FBUyxDQUFDeEIseUNBQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1RUksR0FBRyxDQUFDTyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNFLElBQUksQ0FBQ2IseUNBQU0sQ0FBQyxDQUFDO1NBQzlCLE1BQU07WUFDTEksR0FBRyxDQUFDTyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1NBQzlDO0tBQ0YsQ0FBQyxPQUFPYSxHQUFHLEVBQUU7UUFDWnJCLEdBQUcsQ0FBQ08sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUNhLEdBQUcsQ0FBQyxDQUFDO0tBQzNCO0NBQ0Y7QUFFYyxlQUFlQyxPQUFPLENBQUN2QixHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM5QyxPQUFRRCxHQUFHLENBQUN3QixNQUFNO1FBQ2hCLEtBQUssS0FBSztZQUNSekIsR0FBRyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsQ0FBQyxDQUFDO1lBQ2QsTUFBTTtRQUNSLEtBQUssTUFBTTtZQUNULE1BQU1VLElBQUksQ0FBQ1gsR0FBRyxFQUFFQyxHQUFHLENBQUMsQ0FBQztZQUNyQixNQUFNO1FBQ1I7WUFDRUEsR0FBRyxDQUFDTyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQyxDQUFDLE9BQU8sRUFBRVQsR0FBRyxDQUFDd0IsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7S0FDNUQ7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL0Bzb2xhbmEvd2FsbGV0LWFkYXB0ZXItbmV4dGpzLXN0YXJ0ZXIvLi9wYWdlcy9hcGkvb3JkZXJzLmpzPzFhODkiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhpcyBBUEkgZW5kcG9pbnQgd2lsbCBsZXQgdXNlcnMgUE9TVCBkYXRhIHRvIGFkZCByZWNvcmRzIGFuZCBHRVQgdG8gcmV0cmlldmVcclxuaW1wb3J0IG9yZGVycyBmcm9tIFwiLi9PcmRlcnMuanNvblwiO1xyXG5pbXBvcnQgeyB3cml0ZUZpbGUgfSBmcm9tIFwiZnMvcHJvbWlzZXNcIjtcclxuXHJcbmZ1bmN0aW9uIGdldChyZXEsIHJlcykge1xyXG4gIGNvbnN0IHsgYnV5ZXIgfSA9IHJlcS5xdWVyeTtcclxuXHJcbiAgLy8gQ2hlY2sgaWYgdGhpcyBhZGRyZXNzIGhhcyBhbnkgb3JkZXJzXHJcbiAgY29uc3QgYnV5ZXJPcmRlcnMgPSBvcmRlcnMuZmlsdGVyKChvcmRlcikgPT4gb3JkZXIuYnV5ZXIgPT09IGJ1eWVyKTtcclxuICBpZiAoYnV5ZXJPcmRlcnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAvLyAyMDQgPSBzdWNjZXNzZnVsbHkgcHJvY2Vzc2VkIHRoZSByZXF1ZXN0LCBub3QgcmV0dXJuaW5nIGFueSBjb250ZW50XHJcbiAgICByZXMuc3RhdHVzKDIwNCkuc2VuZCgpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbihidXllck9yZGVycyk7XHJcbiAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBwb3N0KHJlcSwgcmVzKSB7XHJcbiAgY29uc29sZS5sb2coXCJSZWNlaXZlZCBhZGQgb3JkZXIgcmVxdWVzdFwiLCByZXEuYm9keSk7XHJcbiAgLy8gQWRkIG5ldyBvcmRlciB0byBvcmRlcnMuanNvblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBuZXdPcmRlciA9IHJlcS5ib2R5O1xyXG5cclxuICAgIC8vIElmIHRoaXMgYWRkcmVzcyBoYXMgbm90IHB1cmNoYXNlZCB0aGlzIGl0ZW0sIGFkZCBvcmRlciB0byBvcmRlcnMuanNvblxyXG4gICAgaWYgKCFvcmRlcnMuZmluZCgob3JkZXIpID0+IG9yZGVyLmJ1eWVyID09PSBuZXdPcmRlci5idXllci50b1N0cmluZygpICYmIG9yZGVyLml0ZW1JRCA9PT0gbmV3T3JkZXIuaXRlbUlEKSkge1xyXG4gICAgICBvcmRlcnMucHVzaChuZXdPcmRlcik7XHJcbiAgICAgIGF3YWl0IHdyaXRlRmlsZShcIi4vcGFnZXMvYXBpL29yZGVycy5qc29uXCIsIEpTT04uc3RyaW5naWZ5KG9yZGVycywgbnVsbCwgMikpO1xyXG4gICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihvcmRlcnMpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmVzLnN0YXR1cyg0MDApLnNlbmQoXCJPcmRlciBhbHJlYWR5IGV4aXN0c1wiKTtcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHJlcy5zdGF0dXMoNDAwKS5zZW5kKGVycik7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgc3dpdGNoIChyZXEubWV0aG9kKSB7XHJcbiAgICBjYXNlIFwiR0VUXCI6XHJcbiAgICAgIGdldChyZXEsIHJlcyk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBcIlBPU1RcIjpcclxuICAgICAgYXdhaXQgcG9zdChyZXEsIHJlcyk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmVzLnN0YXR1cyg0MDUpLnNlbmQoYE1ldGhvZCAke3JlcS5tZXRob2R9IG5vdCBhbGxvd2VkYCk7XHJcbiAgfVxyXG59Il0sIm5hbWVzIjpbIm9yZGVycyIsIndyaXRlRmlsZSIsImdldCIsInJlcSIsInJlcyIsImJ1eWVyIiwicXVlcnkiLCJidXllck9yZGVycyIsImZpbHRlciIsIm9yZGVyIiwibGVuZ3RoIiwic3RhdHVzIiwic2VuZCIsImpzb24iLCJwb3N0IiwiY29uc29sZSIsImxvZyIsImJvZHkiLCJuZXdPcmRlciIsImZpbmQiLCJ0b1N0cmluZyIsIml0ZW1JRCIsInB1c2giLCJKU09OIiwic3RyaW5naWZ5IiwiZXJyIiwiaGFuZGxlciIsIm1ldGhvZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/orders.js\n");

/***/ }),

/***/ "(api)/./pages/api/Orders.json":
/*!*******************************!*\
  !*** ./pages/api/Orders.json ***!
  \*******************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"buyer":"HDUcjuUcBSx32TxUETabXnXDSLVDDiW1Kg7mgJDGf9tp","orderID":"aUnhYmE9vKcxx9istrNXY6YMdrAQjaKVFitiTts7Xei","itemID":1}]');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/orders.js"));
module.exports = __webpack_exports__;

})();