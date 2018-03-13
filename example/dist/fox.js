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
  }, "how do you do?")))))), _index.default.create(Bar, {
    fuck: true
  }));
};

var Bar = function Bar(_ref2) {
  var props = _ref2.props,
      children = _ref2.children;
  return _index.default.create("nav", null, _index.default.create("ul", null, _index.default.create("li", null, "aaaa"), _index.default.create("li", null, "bbbb"), _index.default.create("li", null, _index.default.create("i", null, "cccc"), _index.default.create("section", null, _index.default.create("a", {
    href: "youtube.com"
  }, "go to youtube")))));
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
    $element: $element,
    _element: _element
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

  var $newElement = _element._createdElement = _element.tag(_element);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9leGFtcGxlL2xvZ2dlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsic3RhdGUiLCJuYW1lIiwic2V0TmFtZSIsInNwbGl0IiwicmV2ZXJzZSIsImpvaW4iLCJjb25zb2xlIiwibG9nIiwiQXBwIiwicHJvcHMiLCJjaGlsZHJlbiIsIkJhciIsIm1vdW50UG9pbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJtb3VudCIsImNyZWF0ZSIsInRhZyIsIl9lbGVtZW50IiwiJHBhcmVudCIsImdyb3VwIiwiJGVsZW1lbnQiLCJ0ZXh0Tm9kZSIsImNvbXBvbmVudCIsImVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsImNyZWF0ZVRleHROb2RlIiwiY3JlYXRlRWxlbWVudCIsImZvckVhY2giLCJjaGlsZCIsIiRuZXdFbGVtZW50IiwiX2NyZWF0ZWRFbGVtZW50Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbkVB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QUV1Qiw0QkFBRjtBQUFlTjtBQUFmLEdBQVo7QUFFQU0sY0FBWXBCLFFBQVosSUFBd0JvQixZQUFZcEIsUUFBWixDQUFxQmtCLE9BQXJCLENBQTZCLGlCQUFTO0FBQzdEYixVQUFNYyxLQUFOLEVBQWFMLE9BQWI7QUFDQSxHQUZ1QixDQUF4QjtBQUlBLFNBQU9BLE9BQVA7QUFDQSxDQWJNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbERQOztlQUVlO0FBQ2RSLHNCQURjO0FBRWREO0FBRmMsQyIsImZpbGUiOiJmb3guanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9leGFtcGxlL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFwiLi9sb2dnZXJcIlxuaW1wb3J0IGZveCBmcm9tIFwiZm94XCI7XG5cblxuY29uc3Qgc3RhdGUgPSB7XG5cdG5hbWU6ICdUb21teSdcbn1cblxuY29uc3Qgc2V0TmFtZSA9ICgpID0+IHtcblx0c3RhdGUubmFtZSA9IHN0YXRlLm5hbWUuc3BsaXQoJycpLnJldmVyc2UoKS5qb2luKCcnKTtcblx0Y29uc29sZS5sb2coc3RhdGUubmFtZSlcbn1cblxuY29uc3QgQXBwID0gKHsgcHJvcHMsIGNoaWxkcmVuIH0pID0+IHtcblx0cmV0dXJuIChcblx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9XCJBcHBcIj5cblx0XHRcdDxhIGhyZWY9XCJnb29nbGUuY29tXCI+R29vZ2xlPC9hPlxuXHRcdFx0PHA+SSBhbSBhd2Vzb21lLjwvcD5cblx0XHRcdDxzdHJvbmcgaWQ9XCJzdHJvbmdcIj5BbmQgcmVhbGx5IGNvb2wuPC9zdHJvbmc+XG5cdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9e3NldE5hbWV9PnJldmVyc2UgbmFtZTwvYnV0dG9uPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cblx0XHRcdFx0PG5hdj5cblx0XHRcdFx0XHQ8dWw+XG5cdFx0XHRcdFx0XHQ8bGk+Zmlyc3Q8L2xpPlxuXHRcdFx0XHRcdFx0PGxpPnNlY29uZDwvbGk+XG5cdFx0XHRcdFx0XHQ8bGk+XG5cdFx0XHRcdFx0XHRcdDxpPnRoaXJkPC9pPlxuXHRcdFx0XHRcdFx0XHQ8c2VjdGlvbj5cblx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPVwiZmFjZWJvb2suY29tXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRob3cgZG8geW91IGRvP1xuXHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0PC9zZWN0aW9uPlxuXHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHQ8L25hdj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PEJhciBmdWNrIC8+XG5cdFx0PC9zZWN0aW9uPlxuXHQpO1xufTtcblxuY29uc3QgQmFyID0gKHsgcHJvcHMsIGNoaWxkcmVuIH0pID0+IHtcblx0cmV0dXJuIChcblx0XHQ8bmF2PlxuXHRcdFx0PHVsPlxuXHRcdFx0XHQ8bGk+YWFhYTwvbGk+XG5cdFx0XHRcdDxsaT5iYmJiPC9saT5cblx0XHRcdFx0PGxpPlxuXHRcdFx0XHRcdDxpPmNjY2M8L2k+XG5cdFx0XHRcdFx0PHNlY3Rpb24+XG5cdFx0XHRcdFx0XHQ8YSBocmVmPVwieW91dHViZS5jb21cIj5cblx0XHRcdFx0XHRcdFx0Z28gdG8geW91dHViZVxuXHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdDwvc2VjdGlvbj5cblx0XHRcdFx0PC9saT5cblx0XHRcdDwvdWw+XG5cdFx0PC9uYXY+XG5cdClcbn1cblxuY29uc3QgbW91bnRQb2ludCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbW91bnRQb2ludFwiKTtcbmZveC5tb3VudCg8QXBwIGRvZz17dHJ1ZX0gLz4sIG1vdW50UG9pbnQpO1xuIiwiLy8gaW1wb3J0IHB3YyBmcm9tICdwcmV0dHktd2ViLWNvbnNvbGUnXG5cbi8vIC8vIGNvbmZpZ3VyZSB5b3VyIHN0eWxpemVkIGxvZ2dlcnMgXG4vLyBjb25zdCBsb2dnZXJBID0gcHdjKCkuc2l6ZSgnbWVkaXVtJykud2VpZ2h0KCdib2xkJylcbi8vIGNvbnN0IGxvZ2dlckIgPSBwd2MoKS5sYXJnZSgpLmJvbGQoKVxuIFxuLy8gLy8gbG9nIGFueXRoaW5nISBcbi8vIGxvZ2dlckEubG9nKCdoaScpXG4vLyBsb2dnZXJCLmxvZygnaGknKVxuIFxuLy8gLy8geW91IGNhbiBldmVuIGV4dGVuZCB5b3VyIGxvZ2dlcnMgXG4vLyBsb2dnZXJBLmZhbnRhc3koKS51bmRlcmxpbmUoKS5pbmZvKCdpIGFtIGJhY2snKVxuXG4vLyAvLyBwYXNzIGluIGEgY29uZmlnIG9iamVjdCBcbi8vIGNvbnN0IGxvZ2dlciA9IHB3Yyh7XG4vLyBcdGNvbG9yOiAnRGFya09yYW5nZScsXG4vLyBcdGJnQ29sb3I6ICdCbGFuY2hlZEFsbW9uZCdcbi8vIH0pXG4gXG4vLyAvLyBsb2cgaXQhIFxuLy8gbG9nZ2VyLmxvZygnaGknKVxuIFxuLy8gLy8gZmVlbCBmcmVlIHRvIG1peC1hbmQtbWF0Y2ggYmV0d2VlbiBkaWZmZXJlbnQgbWV0aG9kcyBcbi8vIHB3Yyh7IGNvbG9yOiAnZ3JlZW4nIH0pLnNpemUoJ2xhcmdlJykuYm9sZCgpLmxvZygnaGkgYWdhaW4nKSIsImV4cG9ydCBjb25zdCBjcmVhdGUgPSAodGFnLCBwcm9wcyA9IHt9LCAuLi5jaGlsZHJlbikgPT4ge1xuXHQvLyBjb25zdCBjbGFzc05hbWUgPSBnZXRDbGFzc05hbWVzKHByb3BzLmNsYXNzTmFtZSk7XG5cblx0cmV0dXJuIHtcblx0XHR0YWcsXG5cdFx0cHJvcHMsXG5cdFx0Y2hpbGRyZW5cblx0fTtcbn07XG5cbmV4cG9ydCBjb25zdCBtb3VudCA9IChfZWxlbWVudCwgJHBhcmVudCkgPT4ge1xuXHRjb25zb2xlLmdyb3VwKFwibW91bnQoKVwiLCB7IF9lbGVtZW50LCAkcGFyZW50IH0pO1xuXG5cdGNvbnN0ICRlbGVtZW50ID0gZG8ge1xuXHRcdGlmICh0eXBlb2YgX2VsZW1lbnQgPT09IFwic3RyaW5nXCIpIHtcblx0XHRcdGNvbnNvbGUubG9nKFwiaXMgdGV4dE5vZGVcIik7XG5cdFx0XHR0ZXh0Tm9kZSh7IF9lbGVtZW50LCAkcGFyZW50IH0pO1xuXHRcdH0gZWxzZSBpZiAodHlwZW9mIF9lbGVtZW50LnRhZyA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhcImlzIGNvbXBvbmVudFwiKTtcblx0XHRcdGNvbXBvbmVudCh7IF9lbGVtZW50LCAkcGFyZW50IH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zb2xlLmxvZyhcImlzIGVsZW1lbnRcIiwgeyBfZWxlbWVudCB9KTtcblx0XHRcdGVsZW1lbnQoeyBfZWxlbWVudCwgJHBhcmVudCB9KTtcblx0XHR9XG5cdH07XG5cblx0Y29uc29sZS5sb2coeyAkZWxlbWVudCwgX2VsZW1lbnQgfSlcblx0JHBhcmVudC5hcHBlbmRDaGlsZCgkZWxlbWVudCk7XG59O1xuXG5leHBvcnQgY29uc3QgdGV4dE5vZGUgPSAoeyBfZWxlbWVudCwgJHBhcmVudCB9KSA9PiB7XG5cdGNvbnNvbGUuZ3JvdXAoXCJ0ZXh0Tm9kZSgpXCIsIHsgX2VsZW1lbnQsICRwYXJlbnQgfSk7XG5cblx0cmV0dXJuIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKF9lbGVtZW50KTtcbn1cblxuZXhwb3J0IGNvbnN0IGVsZW1lbnQgPSAoeyBfZWxlbWVudCwgJHBhcmVudCB9KSA9PiB7XG5cdGNvbnNvbGUuZ3JvdXAoXCJlbGVtZW50KClcIiwgeyBfZWxlbWVudCwgJHBhcmVudCB9KTtcblxuXHRjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChfZWxlbWVudC50YWcpO1xuXG5cdGNvbnNvbGUubG9nKHsgX2VsZW1lbnQsIGVsZW1lbnQgfSlcblx0XG5cdF9lbGVtZW50LmNoaWxkcmVuICYmIF9lbGVtZW50LmNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xuXHRcdG1vdW50KGNoaWxkLCBlbGVtZW50KTtcblx0fSlcblx0XG5cdHJldHVybiBlbGVtZW50O1xufTtcblxuZXhwb3J0IGNvbnN0IGNvbXBvbmVudCA9ICh7IF9lbGVtZW50LCAkcGFyZW50IH0pID0+IHtcblx0Y29uc29sZS5ncm91cChcImNvbXBvbmVudCgpXCIsIHsgX2VsZW1lbnQsICRwYXJlbnQgfSk7XG5cdFxuXHRjb25zdCAkbmV3RWxlbWVudCA9IF9lbGVtZW50Ll9jcmVhdGVkRWxlbWVudCA9IF9lbGVtZW50LnRhZyhfZWxlbWVudCk7XG5cdGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCRuZXdFbGVtZW50LnRhZyk7XG5cblx0Y29uc29sZS5sb2coeyAkbmV3RWxlbWVudCwgZWxlbWVudCB9KVxuXHRcblx0JG5ld0VsZW1lbnQuY2hpbGRyZW4gJiYgJG5ld0VsZW1lbnQuY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XG5cdFx0bW91bnQoY2hpbGQsIGVsZW1lbnQpO1xuXHR9KVxuXHRcblx0cmV0dXJuIGVsZW1lbnQ7XG59O1xuIiwiaW1wb3J0IHsgY3JlYXRlLCBtb3VudCB9IGZyb20gJy4vY29yZSdcblxuZXhwb3J0IGRlZmF1bHQge1xuXHRjcmVhdGUsXG5cdG1vdW50XG59Il0sInNvdXJjZVJvb3QiOiIifQ==