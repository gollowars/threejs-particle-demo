/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Config = __webpack_require__(1);
	
	var _Config2 = _interopRequireDefault(_Config);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	if (_Config2.default.ALLOCATION_DEBUG) {
	  if (platform.os.family.indexOf('iOS') > -1 || platform.os.family.indexOf('Android') > -1) {
	    window.location.href = "/sp/";
	  }
	}

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Config = function Config() {
	  _classCallCheck(this, Config);
	
	  this.ALLOCATION_DEBUG = true;
	  this.devPath = "/dev/demo";
	  this.logOn = true;
	};
	
	exports.default = new Config();

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYjZjMDViODlhZDZkNWNjZTdjN2UiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2RldGVjdHBjLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9zaXRlL0NvbmZpZy5qcyJdLCJuYW1lcyI6WyJBTExPQ0FUSU9OX0RFQlVHIiwicGxhdGZvcm0iLCJvcyIsImZhbWlseSIsImluZGV4T2YiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJDb25maWciLCJkZXZQYXRoIiwibG9nT24iXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUN0Q0E7Ozs7OztBQUVBLEtBQUcsaUJBQU9BLGdCQUFWLEVBQTJCO0FBQ3pCLE9BQUdDLFNBQVNDLEVBQVQsQ0FBWUMsTUFBWixDQUFtQkMsT0FBbkIsQ0FBMkIsS0FBM0IsSUFBb0MsQ0FBQyxDQUFyQyxJQUEwQ0gsU0FBU0MsRUFBVCxDQUFZQyxNQUFaLENBQW1CQyxPQUFuQixDQUEyQixTQUEzQixJQUF3QyxDQUFDLENBQXRGLEVBQXlGO0FBQUNDLFlBQU9DLFFBQVAsQ0FBZ0JDLElBQWhCLEdBQXVCLE1BQXZCO0FBQThCO0FBQ3pILEU7Ozs7Ozs7Ozs7Ozs7O0tDSktDLE0sR0FDSixrQkFBYTtBQUFBOztBQUNYLFFBQUtSLGdCQUFMLEdBQXdCLElBQXhCO0FBQ0EsUUFBS1MsT0FBTCxHQUFlLFdBQWY7QUFDQSxRQUFLQyxLQUFMLEdBQWEsSUFBYjtBQUNELEU7O21CQUdZLElBQUlGLE1BQUosRSIsImZpbGUiOiJkZXRlY3RwYy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGI2YzA1Yjg5YWQ2ZDVjY2U3YzdlIiwiaW1wb3J0IGNvbmZpZyBmcm9tICcuL3NpdGUvQ29uZmlnJ1xuXG5pZihjb25maWcuQUxMT0NBVElPTl9ERUJVRyl7XG4gIGlmKHBsYXRmb3JtLm9zLmZhbWlseS5pbmRleE9mKCdpT1MnKSA+IC0xIHx8IHBsYXRmb3JtLm9zLmZhbWlseS5pbmRleE9mKCdBbmRyb2lkJykgPiAtMSApe3dpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvc3AvXCJ9ICBcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9kZXRlY3RwYy5qcyIsImNsYXNzIENvbmZpZyB7XG4gIGNvbnN0cnVjdG9yKCl7XG4gICAgdGhpcy5BTExPQ0FUSU9OX0RFQlVHID0gdHJ1ZVxuICAgIHRoaXMuZGV2UGF0aCA9IFwiL2Rldi9kZW1vXCJcbiAgICB0aGlzLmxvZ09uID0gdHJ1ZVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBDb25maWcoKVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9zaXRlL0NvbmZpZy5qcyJdLCJzb3VyY2VSb290IjoiIn0=