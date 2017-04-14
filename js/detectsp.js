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
	  if (platform.os.family.indexOf('iOS') == -1 && platform.os.family.indexOf('Android') == -1) {
	    window.location.href = "/";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYjZjMDViODlhZDZkNWNjZTdjN2U/OGViZiIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZGV0ZWN0c3AuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3NpdGUvQ29uZmlnLmpzPzg4ZmQiXSwibmFtZXMiOlsiQUxMT0NBVElPTl9ERUJVRyIsInBsYXRmb3JtIiwib3MiLCJmYW1pbHkiLCJpbmRleE9mIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiQ29uZmlnIiwiZGV2UGF0aCIsImxvZ09uIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7O0FDdENBOzs7Ozs7QUFFQSxLQUFHLGlCQUFPQSxnQkFBVixFQUEyQjtBQUN6QixPQUFHQyxTQUFTQyxFQUFULENBQVlDLE1BQVosQ0FBbUJDLE9BQW5CLENBQTJCLEtBQTNCLEtBQXFDLENBQUMsQ0FBdEMsSUFBMkNILFNBQVNDLEVBQVQsQ0FBWUMsTUFBWixDQUFtQkMsT0FBbkIsQ0FBMkIsU0FBM0IsS0FBeUMsQ0FBQyxDQUF4RixFQUEyRjtBQUFDQyxZQUFPQyxRQUFQLENBQWdCQyxJQUFoQixHQUF1QixHQUF2QjtBQUEyQjtBQUN4SCxFOzs7Ozs7Ozs7Ozs7OztLQ0pLQyxNLEdBQ0osa0JBQWE7QUFBQTs7QUFDWCxRQUFLUixnQkFBTCxHQUF3QixJQUF4QjtBQUNBLFFBQUtTLE9BQUwsR0FBZSxXQUFmO0FBQ0EsUUFBS0MsS0FBTCxHQUFhLElBQWI7QUFDRCxFOzttQkFHWSxJQUFJRixNQUFKLEUiLCJmaWxlIjoiZGV0ZWN0c3AuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBiNmMwNWI4OWFkNmQ1Y2NlN2M3ZSIsImltcG9ydCBjb25maWcgZnJvbSAnLi9zaXRlL0NvbmZpZydcblxuaWYoY29uZmlnLkFMTE9DQVRJT05fREVCVUcpe1xuICBpZihwbGF0Zm9ybS5vcy5mYW1pbHkuaW5kZXhPZignaU9TJykgPT0gLTEgJiYgcGxhdGZvcm0ub3MuZmFtaWx5LmluZGV4T2YoJ0FuZHJvaWQnKSA9PSAtMSApe3dpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvXCJ9ICBcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9kZXRlY3RzcC5qcyIsImNsYXNzIENvbmZpZyB7XG4gIGNvbnN0cnVjdG9yKCl7XG4gICAgdGhpcy5BTExPQ0FUSU9OX0RFQlVHID0gdHJ1ZVxuICAgIHRoaXMuZGV2UGF0aCA9IFwiL2Rldi9kZW1vXCJcbiAgICB0aGlzLmxvZ09uID0gdHJ1ZVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBDb25maWcoKVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9zaXRlL0NvbmZpZy5qcyJdLCJzb3VyY2VSb290IjoiIn0=