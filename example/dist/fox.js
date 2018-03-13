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
  name: "Tommy"
};

var setName = function setName() {
  state.name = state.name.split("").reverse().join("");
  console.log(state.name);
};

var App = function App(_ref) {
  var props = _ref.props,
      children = _ref.children;
  return _index.default.create("main", {
    className: "App"
  }, _index.default.create("animated", null, _index.default.create("img", {
    src: "https://pbs.twimg.com/profile_images/931971635288174593/DjhdoFLE_bigger.jpg",
    alt: "some prick"
  })), _index.default.create("a", {
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
}), mountPoint, true);

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

var _index = _interopRequireDefault(__webpack_require__(/*! ../index.js */ "./src/index.js"));

var _applyProps = __webpack_require__(/*! ../utilities/applyProps */ "./src/utilities/applyProps.js");

var _removeChildren = __webpack_require__(/*! ../utilities/dom/removeChildren */ "./src/utilities/dom/removeChildren.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var builtIns = {
  animated: function animated(_ref) {
    var props = _ref.props,
        children = _ref.children;
    console.group('animated()', {
      props: props,
      children: children
    });
    return _index.default.create("div", {
      "data-foxy-builtIn": true,
      className: "animated rollIn"
    }, children.map(function (c) {
      return c;
    }));
  }
};

var create = function create(tag, props) {
  if (props === void 0) {
    props = {};
  }

  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }

  // const className = getClassNames(props.className);
  if (typeof tag === 'function') return tag({
    props: props,
    children: children
  });

  if (typeof tag === 'string' && tag in builtIns) {
    console.log('BUILTIN', {
      tag: tag,
      props: props,
      children: children
    });
    var b = builtIns[tag]({
      props: props,
      children: children
    });
    tag = b.tag;
    props = _extends({}, props, b.props);
    children = b.children[0];
  } // if (Array.isArray(children[0])) children = children[0]


  return {
    tag: tag,
    props: props,
    children: children
  };
};

exports.create = create;

var mount = function mount(_element, $parent, root) {
  // console.group("mount()", { _element, $parent });
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
  root ? (0, _removeChildren.removeChildren)($parent) && $parent.appendChild($element) : $parent.appendChild($element);
};

exports.mount = mount;

var textNode = function textNode(_ref2) {
  var _element = _ref2._element,
      $parent = _ref2.$parent;
  // console.group("textNode()", { _element, $parent });
  return document.createTextNode(_element);
};

exports.textNode = textNode;

var element = function element(_ref3) {
  var _element = _ref3._element,
      $parent = _ref3.$parent;
  // console.group("element()", { _element, $parent });
  var element = _element.$element = document.createElement(_element.tag);
  console.log({
    _element: _element,
    element: element
  });
  _element.children && _element.children.forEach(function (child) {
    mount(child, element);
  });
  (0, _applyProps.applyProps)(_element);
  return element;
};

exports.element = element;

var component = function component(_ref4) {
  var _element = _ref4._element,
      $parent = _ref4.$parent;

  // console.group("component()", { _element, $parent });
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

/***/ }),

/***/ "./src/utilities/applyProps.js":
/*!*************************************!*\
  !*** ./src/utilities/applyProps.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.applyProps = void 0;

var _applyHandler = __webpack_require__(/*! ./dom/applyHandler */ "./src/utilities/dom/applyHandler.js");

var _isHandler = __webpack_require__(/*! ./isHandler */ "./src/utilities/isHandler.js");

var _entriesOf = __webpack_require__(/*! ./entriesOf */ "./src/utilities/entriesOf.js");

var _fileArray = __webpack_require__(/*! ./fileArray */ "./src/utilities/fileArray.js");

var _handlerName = __webpack_require__(/*! ./dom/handlerName */ "./src/utilities/dom/handlerName.js");

var applyProps = function applyProps(_ref) {
  var $element = _ref.$element,
      _ref$props = _ref.props,
      props = _ref$props === void 0 ? {} : _ref$props,
      _fid = _ref._fid;
  props = props || {};
  console.log({
    $element: $element,
    props: props
  });
  (0, _entriesOf.entriesOf)(props).forEach(applyPropTo($element));
};

exports.applyProps = applyProps;

var applyPropTo = function applyPropTo(element) {
  return function (_ref2) {
    var name = _ref2[0],
        value = _ref2[1];
    (0, _isHandler.isHandler)(name) && (0, _applyHandler.applyHandler)(element, (0, _handlerName.handlerName)(name), value);

    if (name === 'className') {
      var unique = [];
      return element[name] = value.split(' ').filter(function (cn) {
        return unique.includes(cn) ? false : unique.push(cn), true;
      }).join(' ');
    }

    element[name] = value;
  };
};

/***/ }),

/***/ "./src/utilities/dom/applyHandler.js":
/*!*******************************************!*\
  !*** ./src/utilities/dom/applyHandler.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.applyHandler = void 0;

var applyHandler = function applyHandler(element, name, handler) {
  element.addEventListener(name, handler);
  return element;
};

exports.applyHandler = applyHandler;

/***/ }),

/***/ "./src/utilities/dom/handlerName.js":
/*!******************************************!*\
  !*** ./src/utilities/dom/handlerName.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.handlerName = void 0;

var handlerName = function handlerName(propName) {
  return propName.toLowerCase().substring(2);
};

exports.handlerName = handlerName;

/***/ }),

/***/ "./src/utilities/dom/removeChildren.js":
/*!*********************************************!*\
  !*** ./src/utilities/dom/removeChildren.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removeChildren = void 0;

var _removeNode = __webpack_require__(/*! ./removeNode */ "./src/utilities/dom/removeNode.js");

// Remove all children from a node.
var removeChildren = function removeChildren(node) {
  Array.from(node.childNodes).forEach(_removeNode.removeNode);
  return node;
};

exports.removeChildren = removeChildren;

/***/ }),

/***/ "./src/utilities/dom/removeNode.js":
/*!*****************************************!*\
  !*** ./src/utilities/dom/removeNode.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removeNode = void 0;

// Tell a node to kill itself.
var removeNode = function removeNode(node) {
  node.remove();
};

exports.removeNode = removeNode;

/***/ }),

/***/ "./src/utilities/entriesOf.js":
/*!************************************!*\
  !*** ./src/utilities/entriesOf.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.entriesOf = void 0;

var entriesOf = function entriesOf(target) {
  if (target instanceof Set) return target.entries();
  return Object.entries(target);
};

exports.entriesOf = entriesOf;

/***/ }),

/***/ "./src/utilities/fileArray.js":
/*!************************************!*\
  !*** ./src/utilities/fileArray.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.fileArray = void 0;

var fileArray = function fileArray(array, determinator) {
  return array.reduce(function (final, item) {
    determinator(item) ? final[0].push(item) : final[1].push(item);
    return final;
  }, [[], []]);
};

exports.fileArray = fileArray;

/***/ }),

/***/ "./src/utilities/isHandler.js":
/*!************************************!*\
  !*** ./src/utilities/isHandler.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isHandler = void 0;

var isHandler = function isHandler(propName) {
  return propName.startsWith("on");
};

exports.isHandler = isHandler;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9leGFtcGxlL2xvZ2dlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxpdGllcy9hcHBseVByb3BzLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsaXRpZXMvZG9tL2FwcGx5SGFuZGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbGl0aWVzL2RvbS9oYW5kbGVyTmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbGl0aWVzL2RvbS9yZW1vdmVDaGlsZHJlbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbGl0aWVzL2RvbS9yZW1vdmVOb2RlLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsaXRpZXMvZW50cmllc09mLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsaXRpZXMvZmlsZUFycmF5LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsaXRpZXMvaXNIYW5kbGVyLmpzIl0sIm5hbWVzIjpbInN0YXRlIiwibmFtZSIsInNldE5hbWUiLCJzcGxpdCIsInJldmVyc2UiLCJqb2luIiwiY29uc29sZSIsImxvZyIsIkFwcCIsInByb3BzIiwiY2hpbGRyZW4iLCJCYXIiLCJtb3VudFBvaW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibW91bnQiLCJidWlsdElucyIsImFuaW1hdGVkIiwiZ3JvdXAiLCJtYXAiLCJjIiwiY3JlYXRlIiwidGFnIiwiYiIsIl9lbGVtZW50IiwiJHBhcmVudCIsInJvb3QiLCIkZWxlbWVudCIsInRleHROb2RlIiwiY29tcG9uZW50IiwiZWxlbWVudCIsImFwcGVuZENoaWxkIiwiY3JlYXRlVGV4dE5vZGUiLCJjcmVhdGVFbGVtZW50IiwiZm9yRWFjaCIsImNoaWxkIiwiJG5ld0VsZW1lbnQiLCJfY3JlYXRlZEVsZW1lbnQiLCJhcHBseVByb3BzIiwiX2ZpZCIsImFwcGx5UHJvcFRvIiwidmFsdWUiLCJ1bmlxdWUiLCJmaWx0ZXIiLCJpbmNsdWRlcyIsImNuIiwicHVzaCIsImFwcGx5SGFuZGxlciIsImhhbmRsZXIiLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlck5hbWUiLCJwcm9wTmFtZSIsInRvTG93ZXJDYXNlIiwic3Vic3RyaW5nIiwicmVtb3ZlQ2hpbGRyZW4iLCJBcnJheSIsImZyb20iLCJub2RlIiwiY2hpbGROb2RlcyIsInJlbW92ZU5vZGUiLCJyZW1vdmUiLCJlbnRyaWVzT2YiLCJ0YXJnZXQiLCJTZXQiLCJlbnRyaWVzIiwiT2JqZWN0IiwiZmlsZUFycmF5IiwiYXJyYXkiLCJkZXRlcm1pbmF0b3IiLCJyZWR1Y2UiLCJmaW5hbCIsIml0ZW0iLCJpc0hhbmRsZXIiLCJzdGFydHNXaXRoIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbkVBOztBQUNBOzs7O0FBRUEsSUFBTUEsUUFBUTtBQUNiQyxRQUFNO0FBRE8sQ0FBZDs7QUFJQSxJQUFNQyxVQUFVLFNBQVZBLE9BQVUsR0FBTTtBQUNyQkYsUUFBTUMsSUFBTixHQUFhRCxNQUFNQyxJ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bnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vZXhhbXBsZS9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBcIi4vbG9nZ2VyXCI7XG5pbXBvcnQgZm94IGZyb20gXCJmb3hcIjtcblxuY29uc3Qgc3RhdGUgPSB7XG5cdG5hbWU6IFwiVG9tbXlcIlxufTtcblxuY29uc3Qgc2V0TmFtZSA9ICgpID0+IHtcblx0c3RhdGUubmFtZSA9IHN0YXRlLm5hbWVcblx0XHQuc3BsaXQoXCJcIilcblx0XHQucmV2ZXJzZSgpXG5cdFx0LmpvaW4oXCJcIik7XG5cdGNvbnNvbGUubG9nKHN0YXRlLm5hbWUpO1xufTtcblxuY29uc3QgQXBwID0gKHsgcHJvcHMsIGNoaWxkcmVuIH0pID0+IHtcblx0cmV0dXJuIChcblx0XHQ8bWFpbiBjbGFzc05hbWU9XCJBcHBcIj5cblx0XHRcdDxhbmltYXRlZD5cblx0XHRcdFx0PGltZ1xuXHRcdFx0XHRcdHNyYz1cImh0dHBzOi8vcGJzLnR3aW1nLmNvbS9wcm9maWxlX2ltYWdlcy85MzE5NzE2MzUyODgxNzQ1OTMvRGpoZG9GTEVfYmlnZ2VyLmpwZ1wiXG5cdFx0XHRcdFx0YWx0PVwic29tZSBwcmlja1wiXG5cdFx0XHRcdC8+XG5cdFx0XHQ8L2FuaW1hdGVkPlxuXHRcdFx0PGEgaHJlZj1cImdvb2dsZS5jb21cIj5Hb29nbGU8L2E+XG5cdFx0XHQ8cD5JIGFtIGF3ZXNvbWUuPC9wPlxuXHRcdFx0PHN0cm9uZyBpZD1cInN0cm9uZ1wiPkFuZCByZWFsbHkgY29vbC48L3N0cm9uZz5cblx0XHRcdDxidXR0b24gb25DbGljaz17c2V0TmFtZX0+cmV2ZXJzZSBuYW1lPC9idXR0b24+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuXHRcdFx0XHQ8bmF2PlxuXHRcdFx0XHRcdDx1bD5cblx0XHRcdFx0XHRcdDxsaT5maXJzdDwvbGk+XG5cdFx0XHRcdFx0XHQ8bGk+c2Vjb25kPC9saT5cblx0XHRcdFx0XHRcdDxsaT5cblx0XHRcdFx0XHRcdFx0PGk+dGhpcmQ8L2k+XG5cdFx0XHRcdFx0XHRcdDxzZWN0aW9uPlxuXHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9XCJmYWNlYm9vay5jb21cIj5ob3cgZG8geW91IGRvPzwvYT5cblx0XHRcdFx0XHRcdFx0PC9zZWN0aW9uPlxuXHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHQ8L25hdj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PEJhciBmdWNrIC8+XG5cdFx0PC9tYWluPlxuXHQpO1xufTtcblxuY29uc3QgQmFyID0gKHsgcHJvcHMsIGNoaWxkcmVuIH0pID0+IHtcblx0cmV0dXJuIChcblx0XHQ8bmF2PlxuXHRcdFx0PHVsPlxuXHRcdFx0XHQ8bGk+YWFhYTwvbGk+XG5cdFx0XHRcdDxsaT5iYmJiPC9saT5cblx0XHRcdFx0PGxpPlxuXHRcdFx0XHRcdDxpPmNjY2M8L2k+XG5cdFx0XHRcdFx0PHNlY3Rpb24+XG5cdFx0XHRcdFx0XHQ8YSBocmVmPVwieW91dHViZS5jb21cIj5nbyB0byB5b3V0dWJlPC9hPlxuXHRcdFx0XHRcdDwvc2VjdGlvbj5cblx0XHRcdFx0PC9saT5cblx0XHRcdDwvdWw+XG5cdFx0PC9uYXY+XG5cdCk7XG59O1xuXG5jb25zdCBtb3VudFBvaW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtb3VudFBvaW50XCIpO1xuZm94Lm1vdW50KDxBcHAgZG9nPXt0cnVlfSAvPiwgbW91bnRQb2ludCwgdHJ1ZSk7XG4iLCIvLyBpbXBvcnQgcHdjIGZyb20gJ3ByZXR0eS13ZWItY29uc29sZSdcblxuLy8gLy8gY29uZmlndXJlIHlvdXIgc3R5bGl6ZWQgbG9nZ2VycyBcbi8vIGNvbnN0IGxvZ2dlckEgPSBwd2MoKS5zaXplKCdtZWRpdW0nKS53ZWlnaHQoJ2JvbGQnKVxuLy8gY29uc3QgbG9nZ2VyQiA9IHB3YygpLmxhcmdlKCkuYm9sZCgpXG4gXG4vLyAvLyBsb2cgYW55dGhpbmchIFxuLy8gbG9nZ2VyQS5sb2coJ2hpJylcbi8vIGxvZ2dlckIubG9nKCdoaScpXG4gXG4vLyAvLyB5b3UgY2FuIGV2ZW4gZXh0ZW5kIHlvdXIgbG9nZ2VycyBcbi8vIGxvZ2dlckEuZmFudGFzeSgpLnVuZGVybGluZSgpLmluZm8oJ2kgYW0gYmFjaycpXG5cbi8vIC8vIHBhc3MgaW4gYSBjb25maWcgb2JqZWN0IFxuLy8gY29uc3QgbG9nZ2VyID0gcHdjKHtcbi8vIFx0Y29sb3I6ICdEYXJrT3JhbmdlJyxcbi8vIFx0YmdDb2xvcjogJ0JsYW5jaGVkQWxtb25kJ1xuLy8gfSlcbiBcbi8vIC8vIGxvZyBpdCEgXG4vLyBsb2dnZXIubG9nKCdoaScpXG4gXG4vLyAvLyBmZWVsIGZyZWUgdG8gbWl4LWFuZC1tYXRjaCBiZXR3ZWVuIGRpZmZlcmVudCBtZXRob2RzIFxuLy8gcHdjKHsgY29sb3I6ICdncmVlbicgfSkuc2l6ZSgnbGFyZ2UnKS5ib2xkKCkubG9nKCdoaSBhZ2FpbicpIiwiaW1wb3J0IGZveCBmcm9tICdmb3gnO1xuaW1wb3J0IHsgYXBwbHlQcm9wcyB9IGZyb20gXCJ1dGlsaXRpZXMvYXBwbHlQcm9wc1wiO1xuaW1wb3J0IHsgcmVtb3ZlQ2hpbGRyZW4gfSBmcm9tIFwidXRpbGl0aWVzL2RvbS9yZW1vdmVDaGlsZHJlblwiO1xuXG5jb25zdCBidWlsdElucyA9IHtcblx0YW5pbWF0ZWQ6ICh7IHByb3BzLCBjaGlsZHJlbiB9KSA9PiB7XG5cdFx0Y29uc29sZS5ncm91cCgnYW5pbWF0ZWQoKScsIHsgcHJvcHMsIGNoaWxkcmVuIH0pXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgZGF0YS1mb3h5LWJ1aWx0SW4gY2xhc3NOYW1lPVwiYW5pbWF0ZWQgcm9sbEluXCI+XG5cdFx0XHRcdHtjaGlsZHJlbi5tYXAoYyA9PiBjKX1cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxufVxuXG5leHBvcnQgY29uc3QgY3JlYXRlID0gKHRhZywgcHJvcHMgPSB7fSwgLi4uY2hpbGRyZW4pID0+IHtcblx0Ly8gY29uc3QgY2xhc3NOYW1lID0gZ2V0Q2xhc3NOYW1lcyhwcm9wcy5jbGFzc05hbWUpO1xuXHRpZiAodHlwZW9mIHRhZyA9PT0gJ2Z1bmN0aW9uJykgcmV0dXJuIHRhZyh7IHByb3BzLCBjaGlsZHJlbiB9KVxuXHRpZiAodHlwZW9mIHRhZyA9PT0gJ3N0cmluZycgJiYgdGFnIGluIGJ1aWx0SW5zKSB7XG5cdFx0Y29uc29sZS5sb2coJ0JVSUxUSU4nLCB7IHRhZywgcHJvcHMsIGNoaWxkcmVuIH0pXG5cdFx0bGV0IGIgPSBidWlsdEluc1t0YWddKHsgcHJvcHMsIGNoaWxkcmVuIH0pXG5cdFx0dGFnID0gYi50YWc7XG5cdFx0cHJvcHMgPSB7IC4uLnByb3BzLCAuLi5iLnByb3BzIH07XG5cdFx0Y2hpbGRyZW4gPSBiLmNoaWxkcmVuWzBdO1xuXHR9XG5cblx0Ly8gaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW5bMF0pKSBjaGlsZHJlbiA9IGNoaWxkcmVuWzBdXG5cblx0cmV0dXJuIHtcblx0XHR0YWcsXG5cdFx0cHJvcHMsXG5cdFx0Y2hpbGRyZW5cblx0fTtcbn07XG5cbmV4cG9ydCBjb25zdCBtb3VudCA9IChfZWxlbWVudCwgJHBhcmVudCwgcm9vdCkgPT4ge1xuXHQvLyBjb25zb2xlLmdyb3VwKFwibW91bnQoKVwiLCB7IF9lbGVtZW50LCAkcGFyZW50IH0pO1xuXG5cdGNvbnN0ICRlbGVtZW50ID0gZG8ge1xuXHRcdGlmICh0eXBlb2YgX2VsZW1lbnQgPT09IFwic3RyaW5nXCIpIHtcblx0XHRcdGNvbnNvbGUubG9nKFwiaXMgdGV4dE5vZGVcIik7XG5cdFx0XHR0ZXh0Tm9kZSh7IF9lbGVtZW50LCAkcGFyZW50IH0pO1xuXHRcdH0gZWxzZSBpZiAodHlwZW9mIF9lbGVtZW50LnRhZyA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhcImlzIGNvbXBvbmVudFwiKTtcblx0XHRcdGNvbXBvbmVudCh7IF9lbGVtZW50LCAkcGFyZW50IH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zb2xlLmxvZyhcImlzIGVsZW1lbnRcIiwgeyBfZWxlbWVudCB9KTtcblx0XHRcdGVsZW1lbnQoeyBfZWxlbWVudCwgJHBhcmVudCB9KTtcblx0XHR9XG5cdH07XG5cblx0Y29uc29sZS5sb2coeyAkZWxlbWVudCwgX2VsZW1lbnQgfSlcblxuXHRyb290XG5cdFx0PyByZW1vdmVDaGlsZHJlbigkcGFyZW50KSAmJiAkcGFyZW50LmFwcGVuZENoaWxkKCRlbGVtZW50KVxuXHRcdDogJHBhcmVudC5hcHBlbmRDaGlsZCgkZWxlbWVudCk7XG59O1xuXG5leHBvcnQgY29uc3QgdGV4dE5vZGUgPSAoeyBfZWxlbWVudCwgJHBhcmVudCB9KSA9PiB7XG5cdC8vIGNvbnNvbGUuZ3JvdXAoXCJ0ZXh0Tm9kZSgpXCIsIHsgX2VsZW1lbnQsICRwYXJlbnQgfSk7XG5cblx0cmV0dXJuIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKF9lbGVtZW50KTtcbn1cblxuZXhwb3J0IGNvbnN0IGVsZW1lbnQgPSAoeyBfZWxlbWVudCwgJHBhcmVudCB9KSA9PiB7XG5cdC8vIGNvbnNvbGUuZ3JvdXAoXCJlbGVtZW50KClcIiwgeyBfZWxlbWVudCwgJHBhcmVudCB9KTtcblxuXHRjb25zdCBlbGVtZW50ID0gX2VsZW1lbnQuJGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KF9lbGVtZW50LnRhZyk7XG5cblx0Y29uc29sZS5sb2coeyBfZWxlbWVudCwgZWxlbWVudCB9KVxuXHRcblx0X2VsZW1lbnQuY2hpbGRyZW4gJiYgX2VsZW1lbnQuY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XG5cdFx0bW91bnQoY2hpbGQsIGVsZW1lbnQpO1xuXHR9KVxuXG5cdGFwcGx5UHJvcHMoX2VsZW1lbnQpXG5cdFxuXHRyZXR1cm4gZWxlbWVudDtcbn07XG5cbmV4cG9ydCBjb25zdCBjb21wb25lbnQgPSAoeyBfZWxlbWVudCwgJHBhcmVudCB9KSA9PiB7XG5cdC8vIGNvbnNvbGUuZ3JvdXAoXCJjb21wb25lbnQoKVwiLCB7IF9lbGVtZW50LCAkcGFyZW50IH0pO1xuXHRcblx0Y29uc3QgJG5ld0VsZW1lbnQgPSBfZWxlbWVudC5fY3JlYXRlZEVsZW1lbnQgPSBfZWxlbWVudC50YWcoX2VsZW1lbnQpO1xuXHRjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgkbmV3RWxlbWVudC50YWcpO1xuXG5cdGNvbnNvbGUubG9nKHsgJG5ld0VsZW1lbnQsIGVsZW1lbnQgfSlcblx0XG5cdCRuZXdFbGVtZW50LmNoaWxkcmVuICYmICRuZXdFbGVtZW50LmNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xuXHRcdG1vdW50KGNoaWxkLCBlbGVtZW50KTtcblx0fSlcblx0XG5cdHJldHVybiBlbGVtZW50O1xufTtcbiIsImltcG9ydCB7IGNyZWF0ZSwgbW91bnQgfSBmcm9tICcuL2NvcmUnXG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0Y3JlYXRlLFxuXHRtb3VudFxufSIsImltcG9ydCB7IGFwcGx5SGFuZGxlciB9IGZyb20gJ3V0aWxpdGllcy9kb20vYXBwbHlIYW5kbGVyJ1xuaW1wb3J0IHsgaXNIYW5kbGVyIH0gZnJvbSBcInV0aWxpdGllcy9pc0hhbmRsZXJcIjtcbmltcG9ydCB7IGVudHJpZXNPZiB9IGZyb20gXCJ1dGlsaXRpZXMvZW50cmllc09mXCI7XG5pbXBvcnQgeyBmaWxlQXJyYXkgfSBmcm9tICd1dGlsaXRpZXMvZmlsZUFycmF5JztcbmltcG9ydCB7IGhhbmRsZXJOYW1lIH0gZnJvbSAndXRpbGl0aWVzL2RvbS9oYW5kbGVyTmFtZSc7XG5cbmV4cG9ydCBjb25zdCBhcHBseVByb3BzID0gKHskZWxlbWVudCwgcHJvcHMgPSB7fSwgX2ZpZH0pID0+IHtcblx0cHJvcHMgPSBwcm9wcyB8fCB7fTtcblx0Y29uc29sZS5sb2coeyAkZWxlbWVudCwgIHByb3BzIH0pXG5cdGVudHJpZXNPZihwcm9wcykuZm9yRWFjaChhcHBseVByb3BUbygkZWxlbWVudCkpXG59O1xuXG5jb25zdCBhcHBseVByb3BUbyA9IChlbGVtZW50KSA9PiAoWyBuYW1lLCB2YWx1ZSBdKSA9PiB7XG5cdGlzSGFuZGxlcihuYW1lKSAmJiBhcHBseUhhbmRsZXIoZWxlbWVudCwgaGFuZGxlck5hbWUobmFtZSksIHZhbHVlKVxuXG5cdGlmIChuYW1lID09PSAnY2xhc3NOYW1lJykge1xuXHRcdGNvbnN0IHVuaXF1ZSA9IFtdXG5cdFx0cmV0dXJuIChlbGVtZW50W25hbWVdID0gdmFsdWUuc3BsaXQoJyAnKS5maWx0ZXIoY24gPT4ge1xuXHRcdFx0cmV0dXJuIHVuaXF1ZS5pbmNsdWRlcyhjbilcblx0XHRcdFx0PyBmYWxzZVxuXHRcdFx0XHQ6IHVuaXF1ZS5wdXNoKGNuKSwgdHJ1ZTtcblx0XHR9KS5qb2luKCcgJykpO1xuXHR9XG5cblx0ZWxlbWVudFtuYW1lXSA9IHZhbHVlO1xufSIsImV4cG9ydCBjb25zdCBhcHBseUhhbmRsZXIgPSAoZWxlbWVudCwgbmFtZSwgaGFuZGxlcikgPT4ge1xyXG5cdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihuYW1lLCBoYW5kbGVyKTtcclxuXHRyZXR1cm4gZWxlbWVudDtcclxufSIsImV4cG9ydCBjb25zdCBoYW5kbGVyTmFtZSA9IChwcm9wTmFtZSkgPT4ge1xyXG4gIHJldHVybiBwcm9wTmFtZS50b0xvd2VyQ2FzZSgpLnN1YnN0cmluZygyKTtcclxufSIsImltcG9ydCB7IHJlbW92ZU5vZGUgfSBmcm9tICd1dGlsaXRpZXMvZG9tL3JlbW92ZU5vZGUnXHJcblxyXG4vLyBSZW1vdmUgYWxsIGNoaWxkcmVuIGZyb20gYSBub2RlLlxyXG5leHBvcnQgY29uc3QgcmVtb3ZlQ2hpbGRyZW4gPSBub2RlID0+IHtcclxuICBBcnJheS5mcm9tKG5vZGUuY2hpbGROb2RlcykuZm9yRWFjaChyZW1vdmVOb2RlKTtcclxuICByZXR1cm4gbm9kZTtcclxufTsiLCIvLyBUZWxsIGEgbm9kZSB0byBraWxsIGl0c2VsZi5cclxuZXhwb3J0IGNvbnN0IHJlbW92ZU5vZGUgPSBub2RlID0+IHtcclxuICBub2RlLnJlbW92ZSgpO1xyXG59OyIsImV4cG9ydCBjb25zdCBlbnRyaWVzT2YgPSAodGFyZ2V0KSA9PiB7XG5cdGlmICh0YXJnZXQgaW5zdGFuY2VvZiBTZXQpIHJldHVybiB0YXJnZXQuZW50cmllcygpO1xuXHRyZXR1cm4gT2JqZWN0LmVudHJpZXModGFyZ2V0KTtcbn0iLCJleHBvcnQgY29uc3QgZmlsZUFycmF5ID0gKGFycmF5LCBkZXRlcm1pbmF0b3IpID0+IHtcclxuXHRyZXR1cm4gYXJyYXkucmVkdWNlKChmaW5hbCwgaXRlbSkgPT4ge1xyXG5cdFx0ZGV0ZXJtaW5hdG9yKGl0ZW0pXHJcblx0XHRcdD8gZmluYWxbMF0ucHVzaChpdGVtKVxyXG5cdFx0XHQ6IGZpbmFsWzFdLnB1c2goaXRlbSlcclxuXHRcdFxyXG5cdFx0cmV0dXJuIGZpbmFsO1xyXG5cdH0sIFtbXSwgW11dKVxyXG59IiwiZXhwb3J0IGNvbnN0IGlzSGFuZGxlciA9IHByb3BOYW1lID0+IHByb3BOYW1lLnN0YXJ0c1dpdGgoXCJvblwiKTsiXSwic291cmNlUm9vdCI6IiJ9