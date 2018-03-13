/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./example/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./example/index.js":
/*!**************************!*\
  !*** ./example/index.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./logger */ "./example/logger.js");

var _index = _interopRequireDefault(__webpack_require__(/*! ../src/index.js */ "./src/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var state = {
  name: 'Tommy'
};

var setName = function setName() {
  state.name = state.name.split('').reverse().join('');
  console.log(state.name);
};

var App = function App(_ref) {
  var props = _ref.props,
      children = _ref.children;
  return _index.default.create("section", {
    className: "App"
  }, _index.default.create("a", {
    href: "google.com"
  }, "Google"), _index.default.create("p", null, "I am awesome."), _index.default.create("strong", {
    id: "strong"
  }, "And really cool."), _index.default.create("button", {
    onClick: setName
  }, "reverse name"), _index.default.create("div", {
    className: "row"
  }, _index.default.create("nav", null, _index.default.create("ul", null, _index.default.create("li", null, "first"), _index.default.create("li", null, "second"), _index.default.create("li", null, _index.default.create("i", null, "third"), _index.default.create("section", null, _index.default.create("a", {
    href: "facebook.com"
  }, "how do you do?")))))));
};

var mountPoint = document.querySelector("#mountPoint");

_index.default.mount(_index.default.create(App, {
  dog: true
}), mountPoint);

/***/ }),

/***/ "./example/logger.js":
/*!***************************!*\
  !*** ./example/logger.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

// import pwc from 'pretty-web-console'
// // configure your stylized loggers 
// const loggerA = pwc().size('medium').weight('bold')
// const loggerB = pwc().large().bold()
// // log anything! 
// loggerA.log('hi')
// loggerB.log('hi')
// // you can even extend your loggers 
// loggerA.fantasy().underline().info('i am back')
// // pass in a config object 
// const logger = pwc({
// 	color: 'DarkOrange',
// 	bgColor: 'BlanchedAlmond'
// })
// // log it! 
// logger.log('hi')
// // feel free to mix-and-match between different methods 
// pwc({ color: 'green' }).size('large').bold().log('hi again')

/***/ }),

/***/ "./src/core/index.js":
/*!***************************!*\
  !*** ./src/core/index.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.component = exports.element = exports.textNode = exports.mount = exports.create = void 0;

var create = function create(tag, props) {
  if (props === void 0) {
    props = {};
  }

  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }

  // const className = getClassNames(props.className);
  return {
    tag: tag,
    props: props,
    children: children
  };
};

exports.create = create;

var mount = function mount(_element, $parent) {
  console.group("mount()", {
    _element: _element,
    $parent: $parent
  });
  var $element = typeof _element === "string" ? (console.log("is textNode"), textNode({
    _element: _element,
    $parent: $parent
  })) : typeof _element.tag === "function" ? (console.log("is component"), component({
    _element: _element,
    $parent: $parent
  })) : (console.log("is element", {
    _element: _element
  }), element({
    _element: _element,
    $parent: $parent
  }));
  console.log({
    $element: $element
  });
  $parent.appendChild($element);
};

exports.mount = mount;

var textNode = function textNode(_ref) {
  var _element = _ref._element,
      $parent = _ref.$parent;
  console.group("textNode()", {
    _element: _element,
    $parent: $parent
  });
  return document.createTextNode(_element);
};

exports.textNode = textNode;

var element = function element(_ref2) {
  var _element = _ref2._element,
      $parent = _ref2.$parent;
  console.group("element()", {
    _element: _element,
    $parent: $parent
  });
  var element = document.createElement(_element.tag);
  console.log({
    _element: _element,
    element: element
  });
  _element.children && _element.children.forEach(function (child) {
    mount(child, element);
  });
  return element;
};

exports.element = element;

var component = function component(_ref3) {
  var _element = _ref3._element,
      $parent = _ref3.$parent;
  console.group("component()", {
    _element: _element,
    $parent: $parent
  });

  var $newElement = _element.tag(_element);

  var element = document.createElement($newElement.tag);
  console.log({
    $newElement: $newElement,
    element: element
  });
  $newElement.children && $newElement.children.forEach(function (child) {
    mount(child, element);
  });
  return element;
};

exports.component = component;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _core = __webpack_require__(/*! ./core */ "./src/core/index.js");

var _default = {
  create: _core.create,
  mount: _core.mount
};
exports.default = _default;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9leGFtcGxlL2xvZ2dlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsic3RhdGUiLCJuYW1lIiwic2V0TmFtZSIsInNwbGl0IiwicmV2ZXJzZSIsImpvaW4iLCJjb25zb2xlIiwibG9nIiwiQXBwIiwicHJvcHMiLCJjaGlsZHJlbiIsIm1vdW50UG9pbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJtb3VudCIsImNyZWF0ZSIsInRhZyIsIl9lbGVtZW50IiwiJHBhcmVudCIsImdyb3VwIiwiJGVsZW1lbnQiLCJ0ZXh0Tm9kZSIsImNvbXBvbmVudCIsImVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsImNyZWF0ZVRleHROb2RlIiwiY3JlYXRlRWxlbWVudCIsImZvckVhY2giLCJjaGlsZCIsIiRuZXdFbGVtZW50Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbkVBOztBQUNBOzs7O0FBR0EsSUFBTUEsUUFBUTtBQUNiQyxRQUFNO0FBRE8sQ0FBZDs7QUFJQSxJQUFNQyxVQUFVLFNBQVZBLE9BQVUsR0FBTTtBQUNyQkYsUUFBTUMsSUFBTixHQUFhRCxNQUFNQyxJQUFOLENBQVdFLEtBQVgsQ0FBaUIsRUFBakIsRUFBcUJDLE9BQXJCLEdBQStCQyxJQUEvQixDQUFvQyxFQUFwQyxDQUFiO0FBQ0FDLFVBQVFDLEdBQVIsQ0FBWVAsTUFBTUMsSUFBbEI7QUFDQSxDQUhEOztBQUtBLElBQU1PLE1BQU0sU0FBTkEsR0FBTSxPQUF5QjtBQUFBLE1BQXRCQyxLQUFzQixRQUF0QkEsS0FBc0I7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7QUFDcEMsU0FDQztBQUFTLGVBQVU7QUFBbkIsS0FDQztBQUFHLFVBQUs7QUFBUixjQURELEVBRUMsaURBRkQsRUFHQztBQUFRLFFBQUc7QUFBWCx3QkFIRCxFQUlDO0FBQVEsYUFBU1I7QUFBakIsb0JBSkQsRUFLQztBQUFLLGVBQVU7QUFBZixLQUNDLG1DQUNDLGtDQUNDLDBDQURELEVBRUMsMkNBRkQsRUFHQyxrQ0FDQyx5Q0FERCxFQUVDLHVDQUNDO0FBQUcsVUFBSztBQUFSLHNCQURELENBRkQsQ0FIRCxDQURELENBREQsQ0FMRCxDQUREO0FBd0JBLENBekJEOztBQTJCQSxJQUFNUyxhQUFhQyxTQUFTQyxhQUFULENBQXVCLGFBQXZCLENBQW5COztBQUNBLGVBQUlDLEtBQUosQ0FBVSxzQkFBQyxHQUFEO0FBQUssT0FBSztBQUFWLEVBQVYsRUFBOEJILFVBQTlCLEU7Ozs7Ozs7Ozs7O0FDekNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQSwrRDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2Qk8sSUFBTUksU0FBUyxTQUFUQSxNQUFTLENBQUNDLEdBQUQsRUFBTVAsS0FBTixFQUFrQztBQUFBLE1BQTVCQSxLQUE0QjtBQUE1QkEsU0FBNEIsR0FBcEIsRUFBb0I7QUFBQTs7QUFBQSxvQ0FBYkMsUUFBYTtBQUFiQSxZQUFhO0FBQUE7O0FBQ3ZEO0FBRUEsU0FBTztBQUNOTSxZQURNO0FBRU5QLGdCQUZNO0FBR05DO0FBSE0sR0FBUDtBQUtBLENBUk07Ozs7QUFVQSxJQUFNSSxRQUFRLFNBQVJBLEtBQVEsQ0FBQ0csUUFBRCxFQUFXQyxPQUFYLEVBQXVCO0FBQzNDWixVQUFRYSxLQUFSLENBQWMsU0FBZCxFQUF5QjtBQUFFRixzQkFBRjtBQUFZQztBQUFaLEdBQXpCO0FBRUEsTUFBTUUsV0FDRCxPQUFPSCxRQUFQLEtBQW9CLFFBRG5CLElBRUpYLFFBQVFDLEdBQVIsQ0FBWSxhQUFaLENBRkksRUFHSmMsU0FBUztBQUFFSixzQkFBRjtBQUFZQztBQUFaLEdBQVQsQ0FISSxJQUlNLE9BQU9ELFNBQVNELEdBQWhCLEtBQXdCLFVBSjlCLElBS0pWLFFBQVFDLEdBQVIsQ0FBWSxjQUFaLENBTEksRUFNSmUsVUFBVTtBQUFFTCxzQkFBRjtBQUFZQztBQUFaLEdBQVYsQ0FOSSxLQVFKWixRQUFRQyxHQUFSLENBQVksWUFBWixFQUEwQjtBQUFFVTtBQUFGLEdBQTFCLENBUkksRUFTSk0sUUFBUTtBQUFFTixzQkFBRjtBQUFZQztBQUFaLEdBQVIsQ0FUSSxDQUFOO0FBYUFaLFVBQVFDLEdBQVIsQ0FBWTtBQUFFYTtBQUFGLEdBQVo7QUFDQUYsVUFBUU0sV0FBUixDQUFvQkosUUFBcEI7QUFDQSxDQWxCTTs7OztBQW9CQSxJQUFNQyxXQUFXLFNBQVhBLFFBQVcsT0FBMkI7QUFBQSxNQUF4QkosUUFBd0IsUUFBeEJBLFFBQXdCO0FBQUEsTUFBZEMsT0FBYyxRQUFkQSxPQUFjO0FBQ2xEWixVQUFRYSxLQUFSLENBQWMsWUFBZCxFQUE0QjtBQUFFRixzQkFBRjtBQUFZQztBQUFaLEdBQTVCO0FBRUEsU0FBT04sU0FBU2EsY0FBVCxDQUF3QlIsUUFBeEIsQ0FBUDtBQUNBLENBSk07Ozs7QUFNQSxJQUFNTSxVQUFVLHdCQUEyQjtBQUFBLE1BQXhCTixRQUF3QixTQUF4QkEsUUFBd0I7QUFBQSxNQUFkQyxPQUFjLFNBQWRBLE9BQWM7QUFDakRaLFVBQVFhLEtBQVIsQ0FBYyxXQUFkLEVBQTJCO0FBQUVGLHNCQUFGO0FBQVlDO0FBQVosR0FBM0I7QUFFQSxNQUFNSyxVQUFVWCxTQUFTYyxhQUFULENBQXVCVCxTQUFTRCxHQUFoQyxDQUFoQjtBQUVBVixVQUFRQyxHQUFSLENBQVk7QUFBRVUsc0JBQUY7QUFBWU07QUFBWixHQUFaO0FBRUFOLFdBQVNQLFFBQVQsSUFBcUJPLFNBQVNQLFFBQVQsQ0FBa0JpQixPQUFsQixDQUEwQixpQkFBUztBQUN2RGIsVUFBTWMsS0FBTixFQUFhTCxPQUFiO0FBQ0EsR0FGb0IsQ0FBckI7QUFJQSxTQUFPQSxPQUFQO0FBQ0EsQ0FaTTs7OztBQWNBLElBQU1ELFlBQVksU0FBWkEsU0FBWSxRQUEyQjtBQUFBLE1BQXhCTCxRQUF3QixTQUF4QkEsUUFBd0I7QUFBQSxNQUFkQyxPQUFjLFNBQWRBLE9BQWM7QUFDbkRaLFVBQVFhLEtBQVIsQ0FBYyxhQUFkLEVBQTZCO0FBQUVGLHNCQUFGO0FBQVlDO0FBQVosR0FBN0I7O0FBRUEsTUFBTVcsY0FBY1osU0FBU0QsR0FBVCxDQUFhQyxRQUFiLENBQXBCOztBQUNBLE1BQU1NLFVBQVVYLFNBQVNjLGFBQVQsQ0FBdUJHLFlBQVliLEdBQW5DLENBQWhCO0FBRUFWLFVBQVFDLEdBQVIsQ0FBWTtBQUFFc0IsNEJBQUY7QUFBZU47QUFBZixHQUFaO0FBRUFNLGNBQVluQixRQUFaLElBQXdCbUIsWUFBWW5CLFFBQVosQ0FBcUJpQixPQUFyQixDQUE2QixpQkFBUztBQUM3RGIsVUFBTWMsS0FBTixFQUFhTCxPQUFiO0FBQ0EsR0FGdUIsQ0FBeEI7QUFJQSxTQUFPQSxPQUFQO0FBQ0EsQ0FiTTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xEUDs7ZUFFZTtBQUNkUixzQkFEYztBQUVkRDtBQUZjLEMiLCJmaWxlIjoiZm94LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vZXhhbXBsZS9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBcIi4vbG9nZ2VyXCJcbmltcG9ydCBmb3ggZnJvbSBcImZveFwiO1xuXG5cbmNvbnN0IHN0YXRlID0ge1xuXHRuYW1lOiAnVG9tbXknXG59XG5cbmNvbnN0IHNldE5hbWUgPSAoKSA9PiB7XG5cdHN0YXRlLm5hbWUgPSBzdGF0ZS5uYW1lLnNwbGl0KCcnKS5yZXZlcnNlKCkuam9pbignJyk7XG5cdGNvbnNvbGUubG9nKHN0YXRlLm5hbWUpXG59XG5cbmNvbnN0IEFwcCA9ICh7IHByb3BzLCBjaGlsZHJlbiB9KSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PHNlY3Rpb24gY2xhc3NOYW1lPVwiQXBwXCI+XG5cdFx0XHQ8YSBocmVmPVwiZ29vZ2xlLmNvbVwiPkdvb2dsZTwvYT5cblx0XHRcdDxwPkkgYW0gYXdlc29tZS48L3A+XG5cdFx0XHQ8c3Ryb25nIGlkPVwic3Ryb25nXCI+QW5kIHJlYWxseSBjb29sLjwvc3Ryb25nPlxuXHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXtzZXROYW1lfT5yZXZlcnNlIG5hbWU8L2J1dHRvbj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG5cdFx0XHRcdDxuYXY+XG5cdFx0XHRcdFx0PHVsPlxuXHRcdFx0XHRcdFx0PGxpPmZpcnN0PC9saT5cblx0XHRcdFx0XHRcdDxsaT5zZWNvbmQ8L2xpPlxuXHRcdFx0XHRcdFx0PGxpPlxuXHRcdFx0XHRcdFx0XHQ8aT50aGlyZDwvaT5cblx0XHRcdFx0XHRcdFx0PHNlY3Rpb24+XG5cdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj1cImZhY2Vib29rLmNvbVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0aG93IGRvIHlvdSBkbz9cblx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdDwvc2VjdGlvbj5cblx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0PC9uYXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L3NlY3Rpb24+XG5cdCk7XG59O1xuXG5jb25zdCBtb3VudFBvaW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtb3VudFBvaW50XCIpO1xuZm94Lm1vdW50KDxBcHAgZG9nPXt0cnVlfSAvPiwgbW91bnRQb2ludCk7XG4iLCIvLyBpbXBvcnQgcHdjIGZyb20gJ3ByZXR0eS13ZWItY29uc29sZSdcblxuLy8gLy8gY29uZmlndXJlIHlvdXIgc3R5bGl6ZWQgbG9nZ2VycyBcbi8vIGNvbnN0IGxvZ2dlckEgPSBwd2MoKS5zaXplKCdtZWRpdW0nKS53ZWlnaHQoJ2JvbGQnKVxuLy8gY29uc3QgbG9nZ2VyQiA9IHB3YygpLmxhcmdlKCkuYm9sZCgpXG4gXG4vLyAvLyBsb2cgYW55dGhpbmchIFxuLy8gbG9nZ2VyQS5sb2coJ2hpJylcbi8vIGxvZ2dlckIubG9nKCdoaScpXG4gXG4vLyAvLyB5b3UgY2FuIGV2ZW4gZXh0ZW5kIHlvdXIgbG9nZ2VycyBcbi8vIGxvZ2dlckEuZmFudGFzeSgpLnVuZGVybGluZSgpLmluZm8oJ2kgYW0gYmFjaycpXG5cbi8vIC8vIHBhc3MgaW4gYSBjb25maWcgb2JqZWN0IFxuLy8gY29uc3QgbG9nZ2VyID0gcHdjKHtcbi8vIFx0Y29sb3I6ICdEYXJrT3JhbmdlJyxcbi8vIFx0YmdDb2xvcjogJ0JsYW5jaGVkQWxtb25kJ1xuLy8gfSlcbiBcbi8vIC8vIGxvZyBpdCEgXG4vLyBsb2dnZXIubG9nKCdoaScpXG4gXG4vLyAvLyBmZWVsIGZyZWUgdG8gbWl4LWFuZC1tYXRjaCBiZXR3ZWVuIGRpZmZlcmVudCBtZXRob2RzIFxuLy8gcHdjKHsgY29sb3I6ICdncmVlbicgfSkuc2l6ZSgnbGFyZ2UnKS5ib2xkKCkubG9nKCdoaSBhZ2FpbicpIiwiZXhwb3J0IGNvbnN0IGNyZWF0ZSA9ICh0YWcsIHByb3BzID0ge30sIC4uLmNoaWxkcmVuKSA9PiB7XG5cdC8vIGNvbnN0IGNsYXNzTmFtZSA9IGdldENsYXNzTmFtZXMocHJvcHMuY2xhc3NOYW1lKTtcblxuXHRyZXR1cm4ge1xuXHRcdHRhZyxcblx0XHRwcm9wcyxcblx0XHRjaGlsZHJlblxuXHR9O1xufTtcblxuZXhwb3J0IGNvbnN0IG1vdW50ID0gKF9lbGVtZW50LCAkcGFyZW50KSA9PiB7XG5cdGNvbnNvbGUuZ3JvdXAoXCJtb3VudCgpXCIsIHsgX2VsZW1lbnQsICRwYXJlbnQgfSk7XG5cblx0Y29uc3QgJGVsZW1lbnQgPSBkbyB7XG5cdFx0aWYgKHR5cGVvZiBfZWxlbWVudCA9PT0gXCJzdHJpbmdcIikge1xuXHRcdFx0Y29uc29sZS5sb2coXCJpcyB0ZXh0Tm9kZVwiKTtcblx0XHRcdHRleHROb2RlKHsgX2VsZW1lbnQsICRwYXJlbnQgfSk7XG5cdFx0fSBlbHNlIGlmICh0eXBlb2YgX2VsZW1lbnQudGFnID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdGNvbnNvbGUubG9nKFwiaXMgY29tcG9uZW50XCIpO1xuXHRcdFx0Y29tcG9uZW50KHsgX2VsZW1lbnQsICRwYXJlbnQgfSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnNvbGUubG9nKFwiaXMgZWxlbWVudFwiLCB7IF9lbGVtZW50IH0pO1xuXHRcdFx0ZWxlbWVudCh7IF9lbGVtZW50LCAkcGFyZW50IH0pO1xuXHRcdH1cblx0fTtcblxuXHRjb25zb2xlLmxvZyh7ICRlbGVtZW50IH0pXG5cdCRwYXJlbnQuYXBwZW5kQ2hpbGQoJGVsZW1lbnQpO1xufTtcblxuZXhwb3J0IGNvbnN0IHRleHROb2RlID0gKHsgX2VsZW1lbnQsICRwYXJlbnQgfSkgPT4ge1xuXHRjb25zb2xlLmdyb3VwKFwidGV4dE5vZGUoKVwiLCB7IF9lbGVtZW50LCAkcGFyZW50IH0pO1xuXG5cdHJldHVybiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShfZWxlbWVudCk7XG59XG5cbmV4cG9ydCBjb25zdCBlbGVtZW50ID0gKHsgX2VsZW1lbnQsICRwYXJlbnQgfSkgPT4ge1xuXHRjb25zb2xlLmdyb3VwKFwiZWxlbWVudCgpXCIsIHsgX2VsZW1lbnQsICRwYXJlbnQgfSk7XG5cblx0Y29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoX2VsZW1lbnQudGFnKTtcblxuXHRjb25zb2xlLmxvZyh7IF9lbGVtZW50LCBlbGVtZW50IH0pXG5cdFxuXHRfZWxlbWVudC5jaGlsZHJlbiAmJiBfZWxlbWVudC5jaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHtcblx0XHRtb3VudChjaGlsZCwgZWxlbWVudCk7XG5cdH0pXG5cdFxuXHRyZXR1cm4gZWxlbWVudDtcbn07XG5cbmV4cG9ydCBjb25zdCBjb21wb25lbnQgPSAoeyBfZWxlbWVudCwgJHBhcmVudCB9KSA9PiB7XG5cdGNvbnNvbGUuZ3JvdXAoXCJjb21wb25lbnQoKVwiLCB7IF9lbGVtZW50LCAkcGFyZW50IH0pO1xuXHRcblx0Y29uc3QgJG5ld0VsZW1lbnQgPSBfZWxlbWVudC50YWcoX2VsZW1lbnQpO1xuXHRjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgkbmV3RWxlbWVudC50YWcpO1xuXG5cdGNvbnNvbGUubG9nKHsgJG5ld0VsZW1lbnQsIGVsZW1lbnQgfSlcblx0XG5cdCRuZXdFbGVtZW50LmNoaWxkcmVuICYmICRuZXdFbGVtZW50LmNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xuXHRcdG1vdW50KGNoaWxkLCBlbGVtZW50KTtcblx0fSlcblx0XG5cdHJldHVybiBlbGVtZW50O1xufTtcbiIsImltcG9ydCB7IGNyZWF0ZSwgbW91bnQgfSBmcm9tICcuL2NvcmUnXG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0Y3JlYXRlLFxuXHRtb3VudFxufSJdLCJzb3VyY2VSb290IjoiIn0=